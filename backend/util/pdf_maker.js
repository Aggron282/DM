// utils/pdfMaker.js
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

function generateQuotePDF(quoteData, filename) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const filePath = path.join(__dirname, `../pdfs/${filename}`);
    const stream = fs.createWriteStream(filePath);

    doc.pipe(stream);

    doc.fontSize(22).text("Quote Confirmation", { align: "center" });
    doc.moveDown().fontSize(14).text(`Name: ${quoteData.name}`);
    doc.text(`Email: ${quoteData.email}`);
    doc.text(`Phone: ${quoteData.phone}`);
    doc.text(`Address: ${quoteData.address}`);
    doc.text(`Items: ${quoteData.items}`);
    doc.text(`Weights: ${quoteData.weights.join(", ")}`);
    doc.text(`Urgent: ${quoteData.urgent ? "Yes" : "No"}`);
    doc.text(`Preferred Date: ${quoteData.date}`);
    doc.text(`Notes: ${quoteData.notes}`);
    doc.moveDown().text("Pricing Breakdown:");
    doc.text(`Low: $${quoteData.aiPricing.low}`);
    doc.text(`Standard: $${quoteData.aiPricing.standard}`);
    doc.text(`High: $${quoteData.aiPricing.high}`);
    doc.text(`Recommended: $${quoteData.aiPricing.recommended}`);

    doc.end();

    stream.on("finish", () => resolve(filePath));
    stream.on("error", reject);
  });
}

module.exports.generateQuotePDF = generateQuotePDF;
