import { useState } from "react";

import {
  useGetTransactionsQuery,
  useCreateTransactionMutation,
  useDeleteTransactionMutation,
} from "../store/apis/transactionApi";

const Transactions = () => {
  const { data: transactions = [] } =
    useGetTransactionsQuery();

  const [createTransaction] =
    useCreateTransactionMutation();

  const [deleteTransaction] =
    useDeleteTransactionMutation();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] =
    useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createTransaction({
        title,
        amount: Number(amount),
        type,
        category,
      }).unwrap();

      setTitle("");
      setAmount("");
      setCategory("");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await deleteTransaction(id).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Transactions</h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        />

        <select
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

        <button type="submit">
          Add Transaction
        </button>
      </form>

      <hr />

      {transactions.map((transaction) => (
        <div key={transaction._id}>
          <h3>{transaction.title}</h3>

          <p>
            {transaction.amount} €
          </p>

          <p>
            {transaction.type}
          </p>

          <p>
            {transaction.category}
          </p>

          <button
            onClick={() =>
              deleteHandler(transaction._id)
            }
          >
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Transactions;