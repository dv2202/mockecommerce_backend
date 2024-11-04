const express = require("express");
const { createOrder, getAllOrders } = require("../controllers/orderController");

const router = express.Router();
router.post("/", createOrder);
router.get("/allorders", getAllOrders);
module.exports = router;
