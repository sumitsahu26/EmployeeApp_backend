const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    depName: {
      type: String,
      required: true,
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

module.exports = mongoose.model("Department", departmentSchema);
