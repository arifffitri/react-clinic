const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, service, message } = req.body

  if (!firstName || !email) {
    return res.status(400).json({ success: false, error: 'Name and email are required.' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.mailtrap.io',
    port: process.env.SMTP_PORT || 2525,
    auth: {
      user: process.env.SMTP_USER || 'YOUR_SMTP_USER',
      pass: process.env.SMTP_PASS || 'YOUR_SMTP_PASS',
    },
  })

  const mailOptions = {
    from: '"Luminae Website" <noreply@luminaewellness.com>',
    to: process.env.CONTACT_EMAIL || 'hello@luminaewellness.com',
    replyTo: email,
    subject: `New Enquiry from ${firstName} ${lastName} — ${service || 'General'}`,
    html: `
      <h2 style="font-family:serif;color:#4a7c59">New Consultation Enquiry</h2>
      <table style="font-family:sans-serif;font-size:14px;width:100%">
        <tr><td style="color:#888;width:140px;padding:8px 0">Name</td><td>${firstName} ${lastName}</td></tr>
        <tr><td style="color:#888;padding:8px 0">Email</td><td>${email}</td></tr>
        <tr><td style="color:#888;padding:8px 0">Phone</td><td>${phone || '—'}</td></tr>
        <tr><td style="color:#888;padding:8px 0">Service</td><td>${service || '—'}</td></tr>
        <tr><td style="color:#888;padding:8px 0;vertical-align:top">Message</td><td>${message || '—'}</td></tr>
      </table>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.json({ success: true, message: 'Enquiry sent successfully.' })
  } catch (err) {
    console.error('Mail error:', err)
    res.json({ success: true, message: 'Enquiry received (mail not configured).' })
  }
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Luminae Wellness API' })
})

app.listen(PORT, () => {
  console.log(`✅  Server running on http://localhost:${PORT}`)
})