# 🌿 Luminae Wellness — Business Website

A full-stack business website for a health, wellness & beauty clinic built with **React + Vite** (frontend) and **Node.js + Express** (backend).

---

## ✨ Features

- 5 fully responsive pages — Home, About, Services, Pricing, Contact
- Clean & professional UI with custom CSS design system
- Sticky navigation with mobile hamburger menu
- Animated hero section
- Contact form with Node.js API + Nodemailer email delivery
- On-page SEO (meta tags, Open Graph)
- Vite proxy configured for seamless client ↔ server communication

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router v6 |
| Build Tool | Vite 5 + @vitejs/plugin-react |
| Styling | Plain CSS with CSS Custom Properties |
| Icons | Tabler Icons |
| Fonts | Cormorant Garamond + DM Sans (Google Fonts) |
| Backend | Node.js, Express 4 |
| Email | Nodemailer (SMTP) |
| Dev Tooling | concurrently, nodemon |

---

## 📁 Project Structure

```
react-clinic/
├── package.json              # Root scripts (runs both client + server)
├── client/                   # React + Vite frontend
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── main.jsx          # Entry point
│       ├── App.jsx           # Router setup
│       ├── styles/
│       │   └── globals.css   # CSS variables & base styles
│       ├── components/
│       │   ├── Navbar.jsx
│       │   └── Footer.jsx
│       └── pages/
│           ├── Home.jsx
│           ├── About.jsx
│           ├── Services.jsx
│           ├── Pricing.jsx
│           └── Contact.jsx
└── server/                   # Node.js + Express backend
    ├── index.js              # API server
    ├── .env.example          # Environment variable template
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/arifffitri/react-clinic
cd react-clinic
```

**2. Install all dependencies**
```bash
npm run install:all
```

**3. Configure environment variables**
```bash
cd server
copy .env.example .env
```

Open `server/.env` and fill in your SMTP credentials:
```env
PORT=5000
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
CONTACT_EMAIL=hello@yourdomain.com
```

---

## ▶️ Running the App

### Option A — Run both together (recommended)
```bash
# From the root folder
npm run dev
```

### Option B — Run separately in two terminals

**Terminal 1 — Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 — Frontend:**
```bash
cd client
npm run dev
```

| Service | URL |
|---|---|
| Website | http://localhost:3000 |
| API | http://localhost:5000 |
| API Health Check | http://localhost:5000/api/health |

---

## 📡 API Endpoints

### `POST /api/contact`
Handles contact form submissions and sends an email notification.

**Request body:**
```json
{
  "firstName": "Aisha",
  "lastName": "Rahman",
  "email": "aisha@email.com",
  "phone": "+60 12 345 6789",
  "service": "Facial & Skin Care",
  "message": "I'd like to book a consultation."
}
```

**Response:**
```json
{ "success": true, "message": "Enquiry sent successfully." }
```

### `GET /api/health`
Returns server status.
```json
{ "status": "ok", "service": "Luminae Wellness API" }
```

---

## 🏗️ Production Build

**Build the React app:**
```bash
npm run build
```
Output is generated in `client/dist/`.

**Serve the build from Express** — add this to `server/index.js`:
```js
const path = require('path')
app.use(express.static(path.join(__dirname, '../client/dist')))
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
)
```

---

## 🎨 Customisation

| What | Where |
|---|---|
| Brand colours | `client/src/styles/globals.css` — CSS variables at the top |
| Business name & logo | `Navbar.jsx`, `Footer.jsx`, `index.html` |
| Services & pricing | `pages/Services.jsx`, `pages/Pricing.jsx` |
| Team members | `pages/About.jsx` |
| Contact details | `pages/Contact.jsx`, `components/Footer.jsx` |
| SEO meta tags | `client/index.html` |
| Email recipient | `server/.env` → `CONTACT_EMAIL` |

---

## 📄 License

This project is for personal/client use. Feel free to adapt it for your own projects.

---

## 👤 Author

**Ariff Fitri**
- GitHub: [@arifffitri](https://github.com/arifffitri)
