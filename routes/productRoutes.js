const express = require("express");
const { getProducts, getProductById, createProducts } = require("../controllers/productController");

const router = express.Router();
router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/addproduct",createProducts);
module.exports = router;
