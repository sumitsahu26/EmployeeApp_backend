const mongoose = require("mongoose");

const salaryLedgerSchema = new mongoose.Schema(
  {
    employeeid: {
      type: String,
      required: true,
    },

    referenceid: {
      type: String,
      default: "",
    },

    date: {
      type: String,
      required: true,
    },

    transactionType: {
      type: String,
      required: true,
    },

    debit: {
      type: Number,
      default: 0,
    },

    credit: {
      type: Number,
      default: 0,
    },

    description: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SalaryLedger", salaryLedgerSchema);
