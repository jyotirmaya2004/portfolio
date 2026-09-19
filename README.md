# Jyotirmaya Behera — Portfolio

A multi-page portfolio built with Next.js, TypeScript, and Tailwind CSS. It includes project, education, skills, experience, and contact pages, plus a "Let's Talk" form backed by a server-side email API.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deploy to Vercel

1. Import this GitHub repository in [Vercel](https://vercel.com/new).
2. Leave the framework preset as **Next.js** and the build command as `npm run build`.
3. Add these environment variables in **Project Settings → Environment Variables**:

   ```env
   CONTACT_EMAIL=your-inbox@example.com
   FROM_EMAIL="Portfolio <hello@your-verified-domain.com>"
   EMAIL_API_KEY=re_your_resend_api_key
   ```

4. Redeploy after saving the variables.

The contact form uses Resend. `FROM_EMAIL` must use a domain verified with Resend. Keep these variables server-side; do not commit a `.env.local` file.

## Updating content

- Contact details: `src/data/contact.ts`
- Projects: `src/data/projects.ts`
- Skills: `src/data/skills.ts`
- Education: `src/data/education.ts`
- Experience: `src/data/experience.ts`
