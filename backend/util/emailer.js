// utils/emailer.js
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASS
  }
});

async function sendEmail(to, subject, html, attachments = []) {
  return transporter.sendMail({
    from: process.env.SMTP_EMAIL,
    to,
    subject,
    html,
    attachments
  });
}

module.exports.sendEmail = sendEmail;
