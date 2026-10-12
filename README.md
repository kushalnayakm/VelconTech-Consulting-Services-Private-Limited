# VelconTech Corporate Website

React + Express website for **VelconTech Consulting Services Private Limited**.

- Frontend: React, Vite, Tailwind CSS, React Router, Framer Motion, Lucide React
- Backend: Node.js, Express, Nodemailer (Gmail SMTP), Multer
- No database — contact and careers submissions are email-only
- Blog articles live in root `content/blog/` Markdown files

## Project structure

```text
frontend/
  public/
    images/
    favicon.ico
  src/
    assets/
      images/
      styles/
    components/
      layout/
      common/
      home/
      services/
      projects/
      careers/
      blog/
    pages/
    data/
      company.js
      services.js
      projects.js
      jobs.js
    lib/
    App.jsx
    main.jsx
  index.html
  package.json
  vite.config.js
backend/
  routes/
    careers.js
    contact.js
  utils/
    email.js
    validation.js
    jobs.js
    upload.js
  server.js
  package.json
  .env.example
content/
  blog/
.gitignore
README.md
package.json
```

## Prerequisites

- Node.js 18+ (LTS recommended)
- Gmail account with a **new** App Password for SMTP

## Install

From the repository root:

```bash
npm run install:all
```

Or independently:

```bash
cd frontend
npm install

cd ../backend
npm install
```

## Configure email (backend only)

```bash
cd backend
copy .env.example .env
```

Edit `backend/.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-verified-sender@gmail.com
SMTP_PASS=your-new-gmail-app-password
MAIL_FROM=your-verified-sender@gmail.com
CAREERS_EMAIL=confirmed-recruitment-email
CONTACT_EMAIL=services@velcontech.com
PORT=5000
FRONTEND_ORIGIN=http://localhost:5173
UPLOAD_MAX_MB=5
```

Verify which Gmail sender is correct before production:

- `velcontech-vsp@gmail.com`
- `velcontech.vsp@gmail.com`

Never put SMTP secrets in the React app or commit `.env` files.

## Run locally

### Frontend (http://localhost:5173)

```bash
npm run dev:frontend
```

or:

```bash
cd frontend
npm run dev
```

Vite proxies `/api` to `http://localhost:5000`.

### Backend (http://localhost:5000)

```bash
npm run dev:backend
```

or:

```bash
cd backend
npm run dev
```

Production-style backend start:

```bash
cd backend
npm start
```

## Build frontend

```bash
npm run build
```

Output: `frontend/dist/`

Optional production API base URL in `frontend/.env.production`:

```env
VITE_API_BASE_URL=https://api.your-domain.com
```

Leave empty if `/api` is reverse-proxied on the same origin.

## Deploy (standard Node hosting)

1. Build and host `frontend/dist/` as static files with SPA fallback to `index.html`.
2. Run `backend` with Node (`npm start`) and set production `FRONTEND_ORIGIN`.
3. Point your existing domain DNS/HTTPS at your chosen host.
4. Test contact + careers email delivery in production.

No Vercel-specific config. No database.

## Blog publishing

1. Edit Markdown in `content/blog/`.
2. Set `status: published` or `status: draft`.
3. Rebuild/redeploy the frontend.

## Company contact

- Phone: +91-8618026148
- Email: services@velcontech.com
- Website: https://www.velcontech.com
- Registered office: No 120E, GF02, Sapthashree Nivasa, 1st Main, Shantinikethana Layout, Bangalore, Karnataka – 560076, India
