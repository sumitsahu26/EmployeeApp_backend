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
      default: null
    },
    half: {
      type: String,
      default: null
    },
    full: {
      type: String,
      default: null
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
