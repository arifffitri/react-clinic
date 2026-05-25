const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Dummy SMTP configuration using Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email", // Replace with your real SMTP server details
  port: 5858,
  secure: false, 
  auth: {
    user: "your-smtp-username",
    pass: "your-smtp-password",
  },
});

app.get('/api/status', (req, res) => {
  res.json({ message: "Backend connected successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});