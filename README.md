# Jyotirmaya Behera — Developer Portfolio

> 🔗 Live at **[jyotirmayabehera.com](https://www.jyotirmayabehera.com)**

A modern, multi-page personal portfolio built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Showcasing projects in AI/ML, full-stack web development, and software engineering.

**Jyotirmaya Behera** · Software Developer · Utkal University, Bhubaneswar, Odisha

---

## 🌟 Features

- ⚡ **Next.js 15 App Router** — Server components, file-based routing, per-page metadata
- 🎨 **Dark / Light mode** — System preference detection with no flash
- 🤖 **AI contact chat widget** — Floating chat UI with server-side email (Resend API)
- 🔍 **Full SEO** — `sitemap.xml`, `robots.txt`, JSON-LD structured data, Open Graph, canonical URLs
- 📱 **Fully responsive** — Works on all screen sizes
- 🖋️ **Google Fonts** — Inter with `display: swap` for fast load

---

## 🚀 Projects Showcased

| Project | Description | Tech Stack | Links |
|---------|-------------|------------|-------|
| **Netram** | AI monitoring & inspection platform (SIH). Real-time CCTV integration, surprise inspections, video conferencing, and AI analytics for DoSJE. | Next.js · TypeScript · PostgreSQL · WebRTC · Tailwind | [Live](https://netram.vercel.app) · [GitHub](https://github.com/jyotirmaya2004/netram) |
| **Plantexa** | Two-stage AI plant leaf disease detection. Stage 1: leaf verification. Stage 2: disease classification. Built at NIELIT internship. | Python · TensorFlow · Computer Vision · ML | [GitHub](https://github.com/jyotirmaya2004/plantexa) |
| **Prodexa** | Product Data Aggregator & Curator with web scraping, curation, search, filtering, and authentication. | Flask · Python · PostgreSQL · Supabase | [GitHub](https://github.com/jyotirmaya2004/prodexa) |
| **Aptixa** | Placement Preparation & Quiz Platform focused on quantitative aptitude for campus placements. | React · Node.js · Express · MongoDB | [Live](https://aptixa.jyotirmayabehera.com) · [GitHub](https://github.com/jyotirmaya2004/aptixa) |

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Font** | Inter (Google Fonts) |
| **Email** | Resend API |
| **Deployment** | Vercel |
| **SEO** | sitemap.ts · robots.ts · JSON-LD · Open Graph |

---

## 🏃 Running Locally

```bash
git clone https://github.com/jyotirmaya2004/portfolio.git
cd portfolio
npm install
cp .env.example .env.local    # fill in your keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

| Variable | Description |
|----------|-------------|
| `CONTACT_EMAIL` | Your inbox email address |
| `FROM_EMAIL` | `Portfolio <hello@your-verified-domain.com>` |
| `EMAIL_API_KEY` | Resend API key (`re_...`) |

> `FROM_EMAIL` must use a domain [verified with Resend](https://resend.com/docs/dashboard/domains/introduction). Never commit `.env.local`.

---

## ✅ Quality Checks

```bash
npm run lint          # ESLint
npx tsc --noEmit      # TypeScript type-check
npm run build         # Production build
```

---

## 📦 Deploy to Vercel

1. Import this repo at [vercel.com/new](https://vercel.com/new)
2. Framework preset: **Next.js** · Build command: `npm run build`
3. Add environment variables in **Project Settings → Environment Variables**
4. Redeploy after saving variables ✅

---

## 📂 Content Files

| File | What to update |
|------|----------------|
| `src/data/projects.ts` | Project cards |
| `src/data/skills.ts` | Skills list |
| `src/data/education.ts` | Education history |
| `src/data/experience.ts` | Work experience |
| `src/data/contact.ts` | Contact details |
| `src/app/layout.tsx` | Global SEO metadata |

---

## 📬 Contact & Social

| Platform | Link |
|----------|------|
| 🌐 Website | [jyotirmayabehera.com](https://www.jyotirmayabehera.com) |
| 🐙 GitHub | [github.com/jyotirmaya2004](https://github.com/jyotirmaya2004) |
| 💼 LinkedIn | [linkedin.com/in/jyotirmayabehera](https://linkedin.com/in/jyotirmayabehera) |
| 🐦 Twitter/X | [@jyotirmaya_dev](https://twitter.com/jyotirmaya_dev) |

---

<p align="center">Made with ❤️ by <strong>Jyotirmaya Behera</strong></p>
