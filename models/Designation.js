const mongoose = require("mongoose");
const { type } = require("os");

const designationSchema = new mongoose.Schema(
  {
    departmentid: {
      type: String,
      required: true,
    },
    designationName: {
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

module.exports = mongoose.model("Designation", designationSchema);
