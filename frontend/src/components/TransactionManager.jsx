import { useState } from "react";
import { toast } from "react-toastify";

import EditTransactionModal from "./EditTransactionModal";

import {
  useGetTransactionsQuery,
  useCreateTransactionMutation,
  useDeleteTransactionMutation,
} from "../store/apis/transactionApi";

const TransactionManager = () => {
  const [filter, setFilter] = useState("all");

  const { data: transactions = [] } =
    useGetTransactionsQuery();

  const [createTransaction] =
    useCreateTransactionMutation();

  const [deleteTransaction] =
    useDeleteTransactionMutation();

  const [
    selectedTransaction,
    setSelectedTransaction,
  ] = useState(null);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createTransaction({
        title,
        amount: Number(amount),
        type,
        category,
      }).unwrap();

      toast.success(
        "Transaction added successfully"
      );

      setTitle("");
      setAmount("");
      setCategory("");
      setType("income");
    } catch (error) {
      toast.error(
        error?.data?.message ||
          "Failed to add transaction"
      );
    }
  };

  const deleteHandler = async (id) => {
    try {
      await deleteTransaction(id).unwrap();

      toast.success(
        "Transaction deleted successfully"
      );
    } catch (error) {
      toast.error(
        error?.data?.message ||
          "Failed to delete transaction"
      );
    }
  };

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter(
          (transaction) =>
            transaction.type === filter
        );

  return (
    <>
      {/* Add Transaction */}

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h3 className="mb-3">
            Add Transaction
          </h3>

          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col-md-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  required
                />
              </div>

              <div className="col-md-2 mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) =>
                    setAmount(e.target.value)
                  }
                  required
                />
              </div>

              <div className="col-md-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category"
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                  required
                />
              </div>

              <div className="col-md-2 mb-3">
                <select
                  className="form-select"
                  value={type}
                  onChange={(e) =>
                    setType(e.target.value)
                  }
                >
                  <option value="income">
                    Income
                  </option>

                  <option value="expense">
                    Expense
                  </option>
                </select>
              </div>

              <div className="col-md-2 mb-3">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Transaction History */}

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="mb-0">
              Transaction History
            </h3>

            <select
              className="form-select w-auto"
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value)
              }
            >
              <option value="all">
                All
              </option>

              <option value="income">
                Income
              </option>

              <option value="expense">
                Expense
              </option>
            </select>
          </div>

          {filteredTransactions.length === 0 ? (
            <div className="alert alert-info">
              No transactions found.
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredTransactions.map(
                    (transaction) => (
                      <tr
                        key={transaction._id}
                      >
                        <td>
                          {transaction.title}
                        </td>

                        <td>
                          {transaction.category}
                        </td>

                        <td>
                          <span
                            className={`badge ${
                              transaction.type ===
                              "income"
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                          >
                            {transaction.type}
                          </span>
                        </td>

                        <td>
                          {transaction.amount.toLocaleString()} €
                        </td>

                        <td>
                          <button
                            className="btn btn-warning btn-sm me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#editTransactionModal"
                            onClick={() =>
                              setSelectedTransaction(
                                transaction
                              )
                            }
                          >
                            Edit
                          </button>

                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                              deleteHandler(
                                transaction._id
                              )
                            }
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {selectedTransaction && (
        <EditTransactionModal
          transaction={
            selectedTransaction
          }
        />
      )}
    </>
  );
};

export default TransactionManager;