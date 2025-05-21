const express = require("express");
const router = express.Router();
const Quote = require("./../models/quote.js");
const pdfMaker = require("./../util/pdf_maker.js");
const emailer = require("./../util/emailer");
const path = require("path");

async function ProcessQuote(req,res){
  var quoteData = req.body;
  // quoteData = JSON.parse(quoteData);
  const raw = req.body;
   quoteData = {
   ...raw,
   urgent: raw.urgent === "true", // convert string to boolean
   weights: JSON.parse(raw.weights || "[]") // parse from string to array
 };
 console.log(quoteData)

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
    const customerPDF = await pdfMaker.generateQuotePDF(quoteData, `${newQuote._id}_customer.pdf`);
    const ownerPDF = await pdfMaker.generateQuotePDF(quoteData, `${newQuote._id}_owner.pdf`);

    // 5. Save PDF paths
    newQuote.customerPDF = customerPDF;
    newQuote.ownerPDF = ownerPDF;
    await newQuote.save();
    console.log(quoteData.email, process.env.SMTP_EMAIL)
    // 6. Email customer
    await emailer.sendEmail(
    quoteData.email,
    "Thank you for your quote request!",
    `
    <div style="font-family:Arial, sans-serif;">
      <div style="background:#2c3e50;color:#fff;padding:20px;text-align:center;">
        <h1 style="margin:0;">Thank You for Requesting a Quote!</h1>
      </div>
      <div style="padding:20px;">
        <p>Hi ${quoteData.name},</p>
        <p>We’ve received your info and are reviewing it. As a thank-you, here’s a special offer:</p>

        <div style="border:2px dashed #27ae60; padding:20px; margin:20px 0; text-align:center; font-size:22px; color:#27ae60;">
          🎉 <strong>10% OFF Your First Pickup</strong> 🎉
          <br/><span style="font-size:14px;">Use by ${new Date(Date.now() + 7 * 86400000).toLocaleDateString()}</span>
        </div>

        <p>We'll be in touch soon. You can reply to this email if you have questions.</p>

        <div style="background:#f0f0f0; padding:15px; text-align:center; margin-top:30px;">
          <strong>Scrap Squad</strong> – Junk Removal Professionals
          <br/><small>www.scrapsquad.com</small>
        </div>
      </div>
    </div>
    `,
    [{ filename: "YourQuote.pdf", path: customerPDF }]
  );

  console.log("email sent")

    // 7. Email owner
    await emailer.sendEmail(
      process.env.SMTP_EMAIL,
      "🚨 New Quote Received!",
      `<h2>New quote from ${quoteData.name}</h2><p>Phone: ${quoteData.phone}</p>`,
      [{ filename: "ClientQuote.pdf", path: ownerPDF }]
    );
    console.log("email sent")
    res.status(201).json({ message: "Quote saved and emails sent." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit quote." });
  }
}


module.exports.ProcessQuote = ProcessQuote;
