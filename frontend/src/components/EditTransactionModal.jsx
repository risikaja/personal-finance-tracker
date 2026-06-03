import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { useUpdateTransactionMutation }
from "../store/apis/transactionApi";

const EditTransactionModal = ({
  transaction,
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] =
    useState("");
  const [type, setType] =
    useState("income");

  const [updateTransaction] =
    useUpdateTransactionMutation();

  useEffect(() => {
    if (transaction) {
      setTitle(transaction.title);
      setAmount(transaction.amount);
      setCategory(transaction.category);
      setType(transaction.type);
    }
  }, [transaction]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await updateTransaction({
        id: transaction._id,
        data: {
          title,
          amount: Number(amount),
          category,
          type,
        },
      }).unwrap();

      toast.success(
        "Transaction updated successfully"
      );

      const modal =
        document.getElementById(
          "editTransactionModal"
        );

      const backdrop =
        document.querySelector(
          ".modal-backdrop"
        );

      modal.classList.remove("show");
      modal.style.display = "none";

      if (backdrop) {
        backdrop.remove();
      }

      document.body.classList.remove(
        "modal-open"
      );
    } catch (error) {
      toast.error(
        error?.data?.message ||
          "Update failed"
      );
    }
  };

  return (
    <div
      className="modal fade"
      id="editTransactionModal"
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">
              Edit Transaction
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <form onSubmit={submitHandler}>

            <div className="modal-body">

              <div className="mb-3">
                <label className="form-label">
                  Title
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) =>
                    setTitle(
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Amount
                </label>

                <input
                  type="number"
                  className="form-control"
                  value={amount}
                  onChange={(e) =>
                    setAmount(
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Category
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={category}
                  onChange={(e) =>
                    setCategory(
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Type
                </label>

                <select
                  className="form-select"
                  value={type}
                  onChange={(e) =>
                    setType(
                      e.target.value
                    )
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

            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button
                type="submit"
                className="btn btn-primary"
              >
                Save Changes
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default EditTransactionModal;