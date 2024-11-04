const Products = require("../models/Products");
const Product = require("../models/Products");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProducts = async (req, res) => {
    try{
        const { name, description, price, imageUrl, stock } = req.body;
        const newProduct = new Products({ name, description, price, imageUrl, stock });
        await newProduct.save();
        res.status(201).json({
            success: true,
            data: newProduct
        });
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}