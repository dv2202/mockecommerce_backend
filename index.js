require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(cors({
  origin:"*",
  credentials:true,
}));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.listen(3120, () => {
  console.log("Server is running on port 3120");
});
