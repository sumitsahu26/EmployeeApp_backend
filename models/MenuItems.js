const mongoose = require("mongoose");

const menuItemsSchema = new mongoose.Schema(
  {
    categoryId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    hindi: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    half: {
      type: String,
    },
    full: {
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

module.exports = mongoose.model("MenuItems", menuItemsSchema);
