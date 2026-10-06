const mongoose = require("mongoose");

const employeeSalarySchema = new mongoose.Schema(
  {
    employeeid: {
      type: String,
      required: true,
    },

    month: {
      type: String,
      required: true,
    },

    salary: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EmployeeSalary", employeeSalarySchema);
