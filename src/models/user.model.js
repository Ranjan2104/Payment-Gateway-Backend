const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    amount: {
      type: Number,
      required: true,
      trim: true,
    },
    orderID: {
      type: String,
      required: true,
      trim: true,
    },
    transactionID: {
      type: String,
      required: true,
      trim: true,
    },
    paymentStatus: {
      type: String,
      default: "Pending",
      trim: true,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
