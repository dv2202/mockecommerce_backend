const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [{ productId: String, quantity: Number }],
  totalAmount: Number,
  paymentStatus: { type: String, enum: ["Success", "Failure"], default: "Failure" },
  address:{type:String},
});

module.exports = mongoose.model("Order", orderSchema);