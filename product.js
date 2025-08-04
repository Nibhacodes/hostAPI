// productDB.js
const connectDB = require("./db/connect");
const Product = require("./models/product");
require("dotenv").config();

const ProductJson = [
  {
    name: "iphone",
    price: 154,
    featured: true,
    company: "apple",
  },
  {
    name: "iphone10",
    price: 1154,
    featured: true,
    company: "apple",
  },
  {
    name: "watch",
    price: 204,
    company: "apple",
  },
  {
    name: "watch10",
    price: 304,
    company: "apple",
  },
  {
    name: "s20",
    price: 404,
    company: "samsung",
  },
  {
    name: "dell gaming",
    price: 501,
    company: "dell",
  },
  {
    name: "mi20",
    price: 701,
    company: "mi",
  },
];
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.deleteMany(); // Optional: Clear old entries
    await Product.create(ProductJson);
    console.log("🌟 Product data inserted into NibhaApi successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error inserting data:", error);
    process.exit(1);
  }
};
start();
module.exports = mongoose.model("Product", productSchema);
