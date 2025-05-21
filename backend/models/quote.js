// models/Quote.js
const mongoose = require("mongoose");

const Quote = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  phone: String,
  items: String,
  weights: [String],
  notes: String,
  date: String,
  urgent: Boolean,
  images: [String], // File paths or base64
  aiPricing: {
    low: Number,
    standard: Number,
    high: Number,
    recommended: Number
  },
  matchCount: { type: Number, default: 1 },
  customerPDF: String,
  ownerPDF: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Quote", Quote);
