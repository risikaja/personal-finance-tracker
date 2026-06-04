import express from "express";

import protect from "../middleware/protect.js";

import {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
  getTransactionById,
} from "../controllers/transactionController.js";

const router = express.Router();

router
  .route("/")
  .post(protect, createTransaction)
  .get(protect, getTransactions);

router
  .route("/:id")
  .put(protect, updateTransaction)
  .delete(protect, deleteTransaction);

router
.route("/:id")
.get(protect, getTransactionById)
.put(protect, updateTransaction)
.delete(protect, deleteTransaction);

export default router;