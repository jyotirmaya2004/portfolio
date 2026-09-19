# Jyotirmaya Behera — Portfolio

A clean, minimal, multi-page portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
npm run lint
```

## Pages

- `/` — Home (intro + social links)
- `/about` — About
- `/projects` — Projects
- `/experience` — Experience
- `/skills` — Skills
- `/education` — Education
- `/contact` — Contact

## Replacing Placeholders

The following must be replaced with real values before deployment:

- **Email**: `src/data/contact.ts` — `email`
- **GitHub**: `src/data/contact.ts` — `github`
- **LinkedIn**: `src/data/contact.ts` — `linkedin`
- **Twitter**: `src/data/contact.ts` — `twitter`
- **Project links**: `src/data/projects.ts` — `githubUrl` and `liveUrl` fields
- **Resume**: Add a real resume. Currently no resume exists, so the Resume button is not shown.
- **OG image / site URL**: `src/app/layout.tsx`
