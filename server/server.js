// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
const PORT = process.env.PORT || 5000;

const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
// Replace this:
app.use(cors());

// With this:
app.use(
  cors({
    origin: "http://localhost:5173", // frontend origin
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// Contact form POST endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Basic validation
  if (!email || !message) {
    return res.status(400).json({ error: "Email and message are required." });
  }

  try {
    const emailResponse = await resend.emails.send({
      from: "Contact Form NAVPBCS",
      to: "manish.sharma@prudencesoftech.com", // Change this to your receiving email
      subject: subject || "New Contact Form Message",
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, data: emailResponse });
  } catch (error) {
    console.error("Resend Error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
