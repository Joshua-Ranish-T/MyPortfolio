// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const PORT = process.env.PORT || 5000;

// // Nodemailer transporter setup
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER, // Your email from .env
//     pass: process.env.EMAIL_PASS, // App password from .env
//   },
// });

// app.post("/send-email", async (req, res) => {
//   const { name, email, message } = req.body;

//   try {
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: `New Contact from portfolio website`,
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     });

//     res.status(200).json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Failed to send email", error });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test if env variables are loading
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❗ Missing EMAIL_USER or EMAIL_PASS in environment variables.");
}

// API route to send emails
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact from Portfolio Website",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❗ Error sending email:", error.message);
    res.status(500).json({ success: false, message: "Failed to send email", error: error.message });
  }
});

// Vercel-specific export
module.exports = app;
