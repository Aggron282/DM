const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

function generateQuotePDF(quoteData, filename) {
  const isOwner = filename.includes("owner");

  const coverImagePath = path.join(
    __dirname,
    isOwner
      ? "../pdf_templates/new_quote.png"
      : "../pdf_templates/thank_you_template_4.png"
  );

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ autoFirstPage: false });
    const filePath = path.join(__dirname, `../pdfs/${filename}`);
    const stream = fs.createWriteStream(filePath);

    doc.pipe(stream);

    // ==================== PAGE 1: COVER ====================
    doc.addPage();
    try {
      const width = doc.page.width;
      const height = doc.page.height;
      doc.image(coverImagePath, 0, 0, { width, height });
    } catch (err) {
      console.warn("⚠️ Cover image failed to load:", err.message);
    }

    // ==================== PAGE 2: QUOTE SUMMARY ====================
    doc.addPage({ margin: 40 });

    doc
      .fontSize(18)
      .fillColor("#000")
      .text("Quote Summary", { underline: true })
      .moveDown(1);

    // ------ Basic Details ------
    const baseData = [
      ["Name", quoteData.name],
      ["Email", quoteData.email],
      ["Phone", quoteData.phone],
      ["Address", quoteData.address],
      ["Items", quoteData.items],
      ["Urgent", quoteData.urgent ? "Yes" : "No"],
      ["Notes", quoteData.notes || "None"]
    ];

    const col1Width = 160;
    const col2Start = 40 + col1Width + 10;
    let yOffset = doc.y + 10;

    baseData.forEach(([label, value]) => {
      doc
        .font("Helvetica-Bold")
        .fontSize(12)
        .text(label + ":", 40, yOffset);

      doc
        .font("Helvetica")
        .text(value, col2Start, yOffset, {
          width: doc.page.width - col2Start - 40
        });

      yOffset += 28;
    });

    // ------ Weight Breakdown ------
    const weights = Array.isArray(quoteData.weights)
      ? quoteData.weights.map(w => parseFloat(w)).filter(w => !isNaN(w))
      : [];

    if (weights.length > 0) {
      doc.moveDown(2);
      doc.font("Helvetica-Bold").fontSize(14).text("Weight Details:");
      doc.moveDown(0.5);
      weights.forEach((w, i) => {
        doc.font("Helvetica").fontSize(12).text(`• Item ${i + 1}: ${w} lbs`);
      });

      // Average & Median
      const avg = (weights.reduce((a, b) => a + b, 0) / weights.length).toFixed(2);
      const sorted = [...weights].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      const median =
        sorted.length % 2 === 0
          ? ((sorted[mid - 1] + sorted[mid]) / 2).toFixed(2)
          : sorted[mid].toFixed(2);

      doc.moveDown(1);
      doc.font("Helvetica-Bold").text(`Average Weight: ${avg} lbs`);
      doc.font("Helvetica-Bold").text(`Median Weight: ${median} lbs`);
    } else {
      doc.moveDown(1);
      doc.font("Helvetica-Bold").text("Weight Details: Not specified");
    }

    // ------ Date Breakdown ------
    const dates = quoteData.date
  ? quoteData.date
      .split(",")
      .map(d => d.trim())
      .filter(d => d.length > 0)
  : [];

    if (dates.length > 0) {
      doc.moveDown(2);
      doc.font("Helvetica-Bold").fontSize(14).text("Preferred Dates:");
      doc.moveDown(0.5);
      dates.forEach((d, i) => {
        doc.font("Helvetica").fontSize(12).text(`• Option ${i + 1}: ${d}`);
      });
    } else {
      doc.moveDown(1);
      doc.font("Helvetica-Bold").text("Preferred Dates: Not specified");
    }

    // ------ AI Pricing (Owner Only) ------
    if (isOwner && quoteData.aiPricing) {
      doc.moveDown(2);
      doc.font("Helvetica-Bold").fontSize(14).text("AI-Powered Pricing:");
      doc.moveDown(0.5);
      const pricing = quoteData.aiPricing;
      doc.font("Helvetica").fontSize(12).list([
        `Low: $${pricing.low ?? "N/A"}`,
        `Standard: $${pricing.standard ?? "N/A"}`,
        `High: $${pricing.high ?? "N/A"}`,
        `Recommended: $${pricing.recommended ?? "N/A"}`
      ]);
    }

    doc.end();

    stream.on("finish", () => resolve(filePath));
    stream.on("error", reject);
  });
}

module.exports.generateQuotePDF = generateQuotePDF;
