require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product");
const connectDB = require("./db/connect");
const product_routes = require("./routes/product");
app.use("/api/products", product_routes);

app.get("/", (req, res) => {
  res.send("Hi I am live");
});
const start = async (uri) => {
  try {
    await connectDB(process.env.MONGODB_URL);
    const PORT = 5000;
    app.listen(PORT, () => {
      console.log( `Yes I am Connected`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
