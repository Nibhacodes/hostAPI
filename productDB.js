const connectDB = require("./db/connect");
const Product = require("./models/product");
require("dotenv").config();
const ProductJson = require("./products.json"); // ✅ MATCH EXACT NAME

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("🌟 Products inserted successfully");
    process.exit(0);
  } catch (error) {
    console.log("❌ Error inserting products:", error);
    process.exit(1);
  }
};

start();
