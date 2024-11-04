// controllers/orderController.js
const Order = require("../models/Orders");

exports.createOrder = async (req, res) => {
  try {
    const { products, totalAmount } = req.body;
    const newOrder = new Order({ products, totalAmount, paymentStatus: "Success" ,address});
    await newOrder.save();
    res.json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
    try {
      const orders = await Order.find(); 
      return res.status(200).json({
        success: true,
        data: orders, 
      });
    } catch (error) {
      console.error(error); 
      return res.status(500).json({
        success: false,
        message: 'Server Error: Unable to retrieve orders',
      });
    }
  };
