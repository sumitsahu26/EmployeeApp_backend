const mongoose = require("mongoose");

const employeeAttendanceSchema = new mongoose.Schema(
  {
    employeeid: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      required: true,
    },

    inTime: {
      type: String,
      default: "",
    },

    outTime: {
      type: String,
      default: "",
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

module.exports = mongoose.model("EmployeeAttendance", employeeAttendanceSchema);
