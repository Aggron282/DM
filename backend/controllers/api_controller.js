const express = require("express");
const router = express.Router();
const Quote = require("../models/Quote");
const generateQuotePDF = require("../util/pdf_maker.js");
const sendEmail = require("../util/emailer");
const path = require("path");

async function ProcessQuote(req,res){
  const quoteData = req.body;

  try {
    // 1. Check for existing user
    const match = await Quote.findOne({ email: quoteData.email, address: quoteData.address });
    if (match) quoteData.matchCount = match.matchCount + 1;

    // 2. Mock AI pricing (replace with real AI call later)
    quoteData.aiPricing = {
      low: 120,
      standard: 150,
      high: 200,
      recommended: 145
    };

    // 3. Save quote
    const newQuote = new Quote(quoteData);
    await newQuote.save();

    // 4. Generate PDFs
    const customerPDF = await generateQuotePDF(quoteData, `${newQuote._id}_customer.pdf`);
    const ownerPDF = await generateQuotePDF(quoteData, `${newQuote._id}_owner.pdf`);

    // 5. Save PDF paths
    newQuote.customerPDF = customerPDF;
    newQuote.ownerPDF = ownerPDF;
    await newQuote.save();

    // 6. Email customer
    await sendEmail(
      quoteData.email,
      "Thank you for your quote request!",
      `<h2>Thank you, ${quoteData.name}!</h2><p>Attached is your quote + 10% off if used this week 🎉</p>`,
      [{ filename: "YourQuote.pdf", path: customerPDF }]
    );

    // 7. Email owner
    await sendEmail(
      process.env.OWNER_EMAIL,
      "🚨 New Quote Received!",
      `<h2>New quote from ${quoteData.name}</h2><p>Phone: ${quoteData.phone}</p>`,
      [{ filename: "ClientQuote.pdf", path: ownerPDF }]
    );

    res.status(201).json({ message: "Quote saved and emails sent." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit quote." });
  }
}


module.exports.ProcessQuote = ProcessQuote;
