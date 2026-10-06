const mongoose = require("mongoose");
const { type } = require("os");

const employeeSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    dateOfJoining: {
      type: String,
      required: true,
    },

    departmentid: {
      type: String,
      required: true,
    },

    designationid: {
      type: String,
      required: true,
    },

    employeeType: {
      type: String,
      required: true,
    },

    salary: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      required: true,
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Employee", employeeSchema);
