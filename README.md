ACIES Classes website built with **Next.js (App Router) + Tailwind + shadcn/ui**.

## Getting Started

Install dependencies and run the dev server:

```bash
cd acies-classes
npm install
npm run dev
```

Open `http://localhost:3000`.

## Pages

- `/` Home
- `/courses`
- `/about`
- `/results`
- `/contact`

## Enquiry form

The contact form submits to:

`POST /api/enquiry`

For production, connect this route to email/CRM (Resend/SMTP/Sheets/etc).

## Deploy on Vercel

1. Push this folder to GitHub.
2. Import the repo into Vercel.
3. Set environment variables:
   - `NEXT_PUBLIC_SITE_URL` (example: `https://aciesclasses.com`)

Build command: `npm run build`  
Output: Next.js default
