const mongoose = require("mongoose");

const employeeSalarySettlementSchema = new mongoose.Schema(
  {
    employeeid: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    salary: {
      type: String,
      required: true,
    },

    paymentType: {
      type: String,
      required: true,
    },

    payment: {
      type: Number,
      required: true,
    },

    remark: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "EmployeeSalarySettlement",
  employeeSalarySettlementSchema
);
