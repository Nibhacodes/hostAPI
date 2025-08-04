const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://nibha00:PvG35DHBySgFNqsi@nibhaapi.xotqsal.mongodb.net/?retryWrites=true&w=majority&appName=NibhaApi");
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err);
  }
};

module.exports = connectDB;
