// backend/db.js
const mongoose = require("mongoose");
require("dotenv").config();
async function connectDB() {
  try {
    console.log(process.env.MONGODB_URI)
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB error:", err.message);
  }
}

module.exports = connectDB;
