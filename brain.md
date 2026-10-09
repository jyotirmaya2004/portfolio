# brain.md

## Project
- **Name**: Jyotirmaya Behera — Developer Portfolio
- **Purpose**: Minimalist-luxury editorial developer portfolio showcasing AI/ML and full-stack systems engineering
- **Live URL**: https://jyotirmayabehera.com
- **Stack/versions**: Next.js 16.3.5, React 19.2.8, TypeScript 5.9.3, Tailwind CSS 4.3.3, GSAP 3.15.0, @gsap/react 2.1.2
- **Icon library (CDN/SVG)**: Swappable `<Icon />` wrapper (`src/components/ui/Icon.tsx`), no emojis
- **Fonts**: `Playfair Display` (editorial serif headlines), `Inter` (neutral legible sans body)
- **Design tokens**:
  - Base: `#ffffff` (pure editorial light)
  - Hero BG: `#fcf9f8`
  - Text: `#1f1f21` / `#303033` (refined high-contrast graphite)
  - Accent: `#c48b28` (champagne gold)
  - Brand Blue: `#2563eb`
  - Footer Blue: `#0b1329` (midnight luxury)
  - Project Cards: Netram (`#f6e8cd`), Plantexa (`#def4f0`), Prodexa (`#fbeae4`), Aptixa (`#e8edfd`)

## Architecture
- **Folder structure**:
  ```
  src/
  ├── app/
  │   ├── about/
  │   ├── api/contact/
  │   ├── contact/
  │   ├── education/
  │   ├── experience/
  │   ├── projects/
  │   ├── skills/
  │   ├── globals.css
  │   ├── layout.tsx
  │   ├── page.tsx
  │   ├── robots.ts
  │   └── sitemap.ts
  ├── components/
  │   ├── ui/
  │   │   └── Icon.tsx
  │   ├── AboutContent.tsx
  │   ├── AssistantBanner.tsx
  │   ├── ContactChat.tsx
  │   ├── ContactContent.tsx
  │   ├── EducationContent.tsx
  │   ├── ExperienceContent.tsx
  │   ├── Footer.tsx
  │   ├── GsapInit.tsx
  │   ├── Hero.tsx
  │   ├── Navbar.tsx
  │   ├── PageHeader.tsx
  │   ├── SkillsContent.tsx
  │   └── WorkAndExperience.tsx
  ├── data/
  │   ├── contact.ts
  │   ├── education.ts
  │   ├── experience.ts
  │   ├── orbitalContact.json
  │   ├── orbitalSkills.json
  │   ├── projects.ts
  │   └── skills.ts
  ├── hooks/
  │   └── useGsapScrollReveal.ts
  └── lib/
      ├── email.ts
      └── utils.ts
  ```
- **Data flow and key patterns**:
  - Static generation by default for all core informational routes (ISR/Static).
  - GSAP animations handled via leaf client component (`GsapInit` + `useGsapScrollReveal`) with `ScrollTrigger` and reduced-motion safety.
  - Interactive contact drawer (`ContactChat`) opened on demand via global custom event `open-contact-chat` triggered by the assistant banner or CTA buttons.
- **Auth approach**: None required (public portfolio).
- **Env vars (names only)**: `CONTACT_EMAIL`, `FROM_EMAIL`, `EMAIL_API_KEY` / `RESEND_API_KEY`.
- **Third-party services**: Resend (email dispatch API for contact drawer).

## File Map
| Path | Purpose |
|---|---|
| `src/app/layout.tsx` | Root layout with Google Fonts (Playfair Display, Inter), JSON-LD, metadata |
| `src/app/page.tsx` | Main homepage assembling Hero, SkillsMarquee, WorkAndExperience, Footer |
| `src/app/globals.css` | Design tokens, typography classes, animation keyframes, modal animations, and editorial rules |
| `src/components/Navbar.tsx` | Compact auto-hiding navigation on downward scroll, gradual bottom fade-to-transparent (no hard border/line), and 'JB' monogram |
| `src/components/Hero.tsx` | Pure typography hero layout with transparent studio portrait breaking out of the top edge, bottom baseline border, and upward champagne hue |
| `src/components/SkillsMarquee.tsx` | Continuous dual-track infinite marquee ticker with authentic brand icons and names (zero card wrappers/boxes, pure stream) |
| `src/components/WorkAndExperience.tsx` | Pure typography editorial showcase (zero boxes, zero cards, zero pills, unboxed) with Playfair Display titles, clean descriptions, and deep-dive architecture modal on click |
| `src/components/Footer.tsx` | Midnight luxury footer with editorial brand identity, direct email CTA, social icons, sitemap, and back-to-top |
| `src/components/ui/Icon.tsx` | Reusable, accessible SVG Icon wrapper component |
| `src/hooks/useGsapScrollReveal.ts` | GSAP ScrollTrigger hook for smooth sequential entrance reveals |
| `src/components/GsapInit.tsx` | Leaf client component initializing GSAP motion |
| `src/app/projects/[id]/page.tsx` | Dedicated project detail page with SSG pre-rendering, responsive 2-column layout, and zero divider lines |
| `src/app/experience/[id]/page.tsx` | Dedicated experience detail page with SSG pre-rendering, responsive 2-column layout, and zero divider lines |
| `src/app/not-found.tsx` | Luxury minimal 404 error page |
| `src/data/projects.json` | JSON dataset for project records with optional fields |
| `src/data/projects.ts` | Centralized ProjectItem data model, loader from projects.json, and helper queries |
| `src/data/experience.json` | JSON dataset for professional experience and fellowship records |
| `src/data/experience.ts` | Centralized ExperienceItem data model, loader from experience.json, and helper queries |
| `src/lib/utils.ts` | `cn()` utility combining `clsx` and `tailwind-merge` |

## Routes
| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Main editorial showcase with minimal project & experience cards (no filters) |
| `/projects/[id]` | `src/app/projects/[id]/page.tsx` | Dedicated project detail pages (Netram, Plantexa, Prodexa, Aptixa) |
| `/experience/[id]` | `src/app/experience/[id]/page.tsx` | Dedicated experience detail pages (NIELIT, Infosys, SIH, Systems) |
| `/about` | `src/app/about/page.tsx` | Professional narrative & focus areas |
| `/skills` | `src/app/skills/page.tsx` | 3-orbit celestial skills constellation |
| `/education` | `src/app/education/page.tsx` | Academic qualifications & scores |
| `/contact` | `src/app/contact/page.tsx` | Social galaxy & contact hub |
| `/api/contact` | `src/app/api/contact/route.ts` | Server-side validated contact endpoint |

## Conventions & Decisions
- **Responsive Two-Column Detail Layout**: Resolved the "excessive free spaces" issue on wide monitors by expanding detail page width (`max-w-[1240px]`) and introducing an architectural 2-column editorial grid. The left column (pinned on desktop) anchors the headline, subtitle, action buttons, and technologies, while the right column showcases the narrative overview, challenges, and feature breakdowns.
- **Dedicated Experience Detail Pages**: Created dedicated, statically pre-rendered URLs under `/experience/[id]` matching the project details editorial standard, with zero modals and complete JSON-driven conditional templates (`src/data/experience.json`).
- **Removal of Homepage Filter Tabs**: Removed filter tab buttons (`All`, `Projects`, `Experience`) from `WorkAndExperience.tsx`. Both "Featured Projects" and "Experience & Fellowships" are displayed as clean, cohesive editorial subsections where cards show only title and summary and navigate directly to dedicated pages.
- **Zero Popups / Modals**: Completely eliminated all popup windows and modal overlays across the entire application.
- **Clean Project & Experience Detail Template**: Features zero horizontal divider lines, zero status pills, zero benchmark/metrics blocks, and strict conditional rendering driven by JSON files.
- **Navbar Projects Anchor**: Unified "Work" and "Experience" into a single "Projects" nav link in `Navbar.tsx` scrolling to `/#projects`.

## Known Issues / Tech Debt
- None. `tsc --noEmit`, `eslint`, and `next build` pass with 0 errors and 0 warnings.

## Change Log (newest first)
### 2026-10-09 — Footer Text Clearing & Unnecessary Social Links Removal
- What changed:
  - Maintained the rich 2-column editorial footer structure while cleaning up the identity block:
    - Cleared the redundant bio paragraph ("Have an engineering challenge...").
    - Cleared the repeated plaintext email address next to the button.
    - Cleared the location text ("Bhubaneswar, Odisha, India").
    - Retained the serif name, role title, and direct email CTA button ("Get in touch via email →").
  - Removed unnecessary social links (Telegram, Reddit, Threads, Medium, Facebook).
  - Kept only the 6 core channels: GitHub, LinkedIn, X (Twitter), YouTube, Instagram, and LeetCode.
  - Preserved the full sitemap columns (Explore and Featured Systems) and bottom copyright bar.
- Files touched:
  - `src/components/Footer.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Kept the visual hierarchy and sitemap that the user liked, while decluttering the left identity block and pruning secondary social icons.
- Open items: None.

### 2026-10-09 — Restoration of Previous Editorial Footer Design
- What changed:
  - Reverted `Footer.tsx` back to the previous full editorial layout:
    - Retained the signature 2-column editorial structure with identity, location, role, bio narrative, direct email CTA button, and social & profile icons.
    - Preserved all social channels including YouTube and Instagram alongside GitHub, LinkedIn, X, and LeetCode.
    - Preserved sitemap columns (Explore & Featured Systems) with fixed anchor to `/#experience` and verified Aptixa live URL (`https://aptixa.vercel.app`).
    - Retained the bottom copyright bar and Back to Top action.
- Files touched:
  - `src/components/Footer.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Honored user preference to maintain the previous rich editorial footer aesthetic over the compact two-tier variant.
- Open items: None.

### 2026-10-09 — Ultra-Clean Footer Layout with YouTube & Instagram Profiles
- What changed:
  - Redesigned `Footer.tsx` into a balanced, ultra-clean two-tier layout:
    - Top tier: Left side showcases brand identity (`Jyotirmaya Behera`) and direct mono email link (`contactInfo.email`); right side presents clean horizontal navigation (`Projects`, `Experience`, `Skills`, `About`, `Contact`).
    - Bottom tier: Left side features the 6 essential social channels (GitHub, LinkedIn, X/Twitter, YouTube, Instagram, LeetCode) in circular glassmorphic icon buttons; right side contains copyright and smooth "Back to Top ↑" action.
    - Zero redundant bio paragraphs, zero duplicate project links, zero clutter.
- Files touched:
  - `src/components/Footer.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Re-introduced YouTube and Instagram links per user request, styled with the same refined luxury aesthetic as GitHub/LinkedIn/X/LeetCode.
- Open items: None.

### 2026-10-09 — Footer UI Streamlining & Experience Detail Links Polish
- What changed:
  - Streamlined `Footer.tsx` into a luxury minimal footer:
    - Removed all redundant text, repetitive bio paragraphs, and duplicated email button/text.
    - Removed duplicate "Featured Systems" column that repeated projects already showcased on the page.
    - Pruned 7 unnecessary social links (Facebook, Reddit, Threads, Telegram, Instagram, YouTube, Medium), retaining only the 4 essential engineering platforms (GitHub, LinkedIn, X/Twitter, LeetCode).
    - Simplified navigation links to: Projects (`/#projects`), Experience (`/#experience`), Skills (`/skills`), About (`/about`), Contact (`/contact`).
  - Polished `WorkAndExperience.tsx`:
    - Converted to pure Server Component (removed unnecessary `"use client"`).
    - Added explicit `cursor-pointer` on all project and experience cards to guarantee immediate click affordance.
  - Polished `src/app/experience/[id]/page.tsx`:
    - Updated back navigation to link directly back to `/#experience` with `"Back to Experience"` label.
- Files touched:
  - `src/components/Footer.tsx`
  - `src/components/WorkAndExperience.tsx`
  - `src/app/experience/[id]/page.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Removing secondary social noise and duplicate links yields an ultra-clean, confident editorial footer matching high-end design standards.
- Open items: None.

### 2026-10-09 — Dedicated Experience Detail Pages, Elimination of Excessive Whitespace & Removal of Homepage Filters
- What changed:
  - Eliminated excessive whitespace and empty voids in project and experience detail pages by transitioning from a narrow centered strip to an expansive, responsive 2-column editorial layout (`max-w-[1240px]`, `lg:grid-cols-[380px_1fr]`).
  - Created dedicated detail pages for experience items at `/experience/[id]` (`/experience/nielit`, `/experience/infosys`, `/experience/sih`, `/experience/systems`), statically pre-rendered via `generateStaticParams()` with per-page metadata.
  - Extracted experience records into a clean data-driven JSON store (`src/data/experience.json`) with TypeScript interfaces and helpers in `src/data/experience.ts`.
  - Removed all filter buttons and tabs (`All`, `Projects`, `Experience`) from the homepage showcase in `WorkAndExperience.tsx`. The section cleanly presents "Featured Projects" and "Experience & Fellowships" subsections with unboxed title + summary cards.
  - Fixed redirect rule in `next.config.ts`: removed wildcard redirect on `/experience/:path*` so dedicated experience URLs load properly, while keeping root `/experience` redirecting to `/#experience`.
  - Updated `src/app/sitemap.ts` to index all dedicated `/experience/[id]` URLs alongside `/projects/[id]`.
  - Maintained strict design rules: zero horizontal divider lines, zero metric/benchmark blocks, zero status pills, zero emojis, semantic `<article>` containers.
- Files touched:
  - `src/app/projects/[id]/page.tsx`
  - `src/app/experience/[id]/page.tsx` (created)
  - `src/data/experience.json` (created)
  - `src/data/experience.ts`
  - `src/components/WorkAndExperience.tsx`
  - `next.config.ts`
  - `src/app/sitemap.ts`
  - `brain.md`
- Decisions / gotchas:
  - The 2-column layout balances the desktop viewport: title, stack, and CTAs anchor the left side with desktop sticky positioning, while readable text flows on the right, eliminating both excessive horizontal and vertical whitespace.
- Open items: None.

### 2026-10-09 — Restoration of Sleek Homepage Cards with Dedicated Detail Webpages
- What changed:
  - Restored the sleek, uncluttered homepage project card presentation in `WorkAndExperience.tsx`: each card displays only the serif project title and narrative summary, retaining the elegant luxury aesthetic.
  - Clicking any project on the homepage navigates directly to its dedicated detail webpage (`/projects/[id]`).
  - Restored dynamic route `src/app/projects/[id]/page.tsx` with static pre-rendering (`generateStaticParams`), SEO metadata, and JSON-LD structured data.
  - The dedicated project detail pages strictly adhere to user specifications:
    - Zero horizontal divider lines (`border-b`, `border-t` removed).
    - Zero status/classification headers (`AI/ML · NIELIT Research FellowshipCompleted` removed).
    - Zero engineering benchmarks / metrics blocks (`Verification 99.8% Leaf Conf`, etc. removed).
    - Complete conditional template rendering: if any key in `projects.json` is missing or empty, neither the text nor its section heading is rendered in the UI.
    - Previous/Next project pagination and Back to Projects link.
  - Eliminated all modal popups and overlays across both projects and experience.
  - Updated `next.config.ts` and `sitemap.ts` to index `/projects/[id]` while redirecting `/projects` to `/#projects`.
- Files touched:
  - `src/components/WorkAndExperience.tsx`
  - `src/app/projects/[id]/page.tsx` (restored)
  - `next.config.ts`
  - `src/app/sitemap.ts`
  - `brain.md`
- Decisions / gotchas:
  - Clean separation: homepage maintains high visual restraint (title + summary), while technical depth lives on dedicated, shareable, indexable URLs without popups.
- Open items: None.

### 2026-10-09 — Removal of Modal Popups & Dedicated Sub-Pages in Favor of Unified Inline Presentation
- What changed:
  - Removed all modal popup layouts, backdrop overlays, and dialog handlers from `WorkAndExperience.tsx`.
  - Deleted all dedicated sub-pages (`/projects`, `/projects/[id]`, `/experience`).
  - Added Next.js server redirects in `next.config.ts` mapping `/projects`, `/projects/:path*`, and `/experience` back to `/#projects`.
  - Updated Navbar (`Navbar.tsx`): replaced separate "Work" and "Experience" nav links with a single "Projects" nav link pointing directly to `/#projects`.
  - Updated `Footer.tsx` and `AboutContent.tsx` to link to `/#projects`.
  - Enhanced `WorkAndExperience.tsx` to cleanly render full project and experience details directly in the editorial grid (title, subtitle, summary, key features/takeaways, technologies tags, and live/source code links).
  - Updated `sitemap.ts` to include only active canonical top-level routes.
- Files touched:
  - `src/components/WorkAndExperience.tsx`
  - `src/components/Navbar.tsx`
  - `src/components/Footer.tsx`
  - `src/components/AboutContent.tsx`
  - `src/app/sitemap.ts`
  - `src/app/not-found.tsx`
  - `next.config.ts`
  - `src/app/projects/page.tsx` (deleted)
  - `src/app/projects/[id]/page.tsx` (deleted)
  - `src/app/experience/page.tsx` (deleted)
  - `brain.md`
- Decisions / gotchas:
  - Full details are immediately accessible inline without extra clicks, modal popups, or page changes.
- Open items: None.

### 2026-10-09 — Complete Removal of Engineering & System Benchmarks / Metrics
- What changed:
  - Removed "Engineering & System Benchmarks" and all metric items (e.g. Leaf Verification 99.8%, Pathology Acc 96.8%, Model Size 14.2 MB, etc.) from the Experience detail modal in `WorkAndExperience.tsx`.
  - Removed the "Key Metrics & Verified Results" section from the dedicated project detail page (`src/app/projects/[id]/page.tsx`).
  - Purged `metrics` from `src/data/projects.json`, `src/data/projects.ts`, and `experiencesData` in `src/components/WorkAndExperience.tsx`.
- Files touched:
  - `src/app/projects/[id]/page.tsx`
  - `src/components/WorkAndExperience.tsx`
  - `src/data/projects.json`
  - `src/data/projects.ts`
  - `brain.md`
- Decisions / gotchas:
  - Both project detail pages and experience drawer modals now focus purely on high-signal narratives, challenges, key deliverables, and technologies without secondary metric boxes.
- Open items: None.

### 2026-10-09 — JSON Data Template & Minimalist Clean UI Polish on Project Details
- What changed:
  - Extracted all project details into `src/data/projects.json` as a standalone JSON data file.
  - Made the project details page (`src/app/projects/[id]/page.tsx`) a fully conditional template: if any JSON field/key is empty or omitted, neither its string nor its heading/section is rendered in the UI.
  - Removed the classification/status line (`AI/ML · NIELIT Research FellowshipCompleted` / `Live Deployed` pill) completely from project details.
  - Removed all horizontal divider lines (`border-b` in header and `border-t` in pagination nav) for a clean, unboxed editorial layout with generous whitespace.
  - Made project card summary in `WorkAndExperience.tsx` safely conditional.
- Files touched:
  - `src/data/projects.json` (created)
  - `src/data/projects.ts`
  - `src/app/projects/[id]/page.tsx`
  - `src/components/WorkAndExperience.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Preserved strict zero-horizontal-divider rule across the entire details page, relying on typographic hierarchy and spacious padding.
- Open items: None.

### 2026-10-09 — Authentic Project Feature Integration & Live Deployment Alignment
- What changed:
  - Updated Prodexa, Aptixa, and Plantexa with official project descriptions, real-world features, and verified architectures in `src/data/projects.ts`.
  - Prodexa: Added web scraping, schema curation, user authentication, personal product management, search & filter, responsive dashboard, rate-limiting, IP abuse tracking, password reset emails, server-side image CAPTCHAs, and Supabase PostgreSQL persistence.
  - Aptixa: Updated live deployment URL to `https://aptixa.vercel.app`, noted React + Vite + Express architecture, and highlighted complete R.S. Aggarwal Quantitative Aptitude integration (39 chapters, 4,060+ objective questions, verified answer keys, detailed explanations, and formulas).
  - Plantexa: Updated with production-ready Streamlit app details, TensorFlow MobileNetV2 disease model with process-level caching, two-stage leaf-vs-non-leaf validation before classification, 9 supported image formats (224x224 resize), top-3 predictions, disease knowledge base, and agriculture-only NVIDIA API assistant.
  - Updated `src/app/projects/[id]/page.tsx` to render the comprehensive `features` list under Key Features & Engineering Architecture.
- Files touched:
  - `src/data/projects.ts`
  - `src/app/projects/[id]/page.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Preserved zero-emoji rule across all content, representing key features with crisp typographic marks and SVG icons.
- Open items: None.

### 2026-10-09 — Dedicated Webpages for Project Details (Clear & Required Information Only)
- What changed:
  - Transformed project detail views from an inline modal popup into dedicated webpages under `/projects/[id]` (`/projects/netram`, `/projects/plantexa`, `/projects/prodexa`, `/projects/aptixa`).
  - Statically pre-rendered all project pages using Next.js `generateStaticParams()` with per-page dynamic metadata (`generateMetadata()`), canonical tags, Open Graph, and JSON-LD `SoftwareApplication` structured data.
  - Designed clean, luxury editorial project presentation containing only required information:
    - Back link to `/projects` with custom accessible SVG icon.
    - Classification badge, deployment status indicator, Playfair Display title, and role subtitle.
    - External links for live deployment and GitHub repository.
    - Five focused sections: Overview, The Problem & Challenge, Engineering Highlights & Architecture, Verified Telemetry / Metrics, and Technologies & Infrastructure.
    - Project pagination (Previous / Next Project) at the bottom.
  - Eliminated artificial pseudo-terminal webcam simulator widgets and clutter.
  - Updated `WorkAndExperience.tsx`: clicking any project in the showcase navigates directly to the dedicated project page via Next.js `<Link>`.
  - Added `arrow-left` icon to `Icon.tsx`.
  - Created luxury minimal `src/app/not-found.tsx` 404 page.
  - Updated `sitemap.ts` to dynamically include all dedicated project URLs.
- Files touched:
  - `src/app/projects/[id]/page.tsx` (created)
  - `src/app/not-found.tsx` (created)
  - `src/data/projects.ts` (canonical dataset & queries)
  - `src/components/WorkAndExperience.tsx`
  - `src/components/ui/Icon.tsx`
  - `src/app/sitemap.ts`
  - `brain.md`
- Decisions / gotchas:
  - Experience cards still utilize lightweight focused modals for deliverables and takeaways, while projects have full indexable, shareable URLs.
- Open items: None.

### 2026-10-09 — Removal of "Core Stack & Technologies" Section Heading
- What changed:
  - Removed the `"Core Stack & Technologies"` `<h2>` heading from `SkillsMarquee.tsx`.
  - Tightened vertical spacing above the infinite marquee track (`pt-10 sm:pt-14`), allowing the tech brand stream to flow seamlessly right below the hero baseline.
  - Kept semantic `aria-label="Technologies"` on the `<section>` for accessibility and preserved `#skills` anchor navigation.
- Files touched:
  - `src/components/SkillsMarquee.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Eliminates secondary section title clutter, giving the marquee an organic, uninterrupted stream presence.
- Open items: None.

### 2026-10-09 — Soft Dotted Underline on Editorial Links for Refined Visual Hierarchy
- What changed:
  - Replaced the hard solid underline in `.luxury-underline` (`globals.css`) with a soft, delicate dotted underline:
    - `text-decoration-style: dotted`
    - `text-decoration-thickness: 1.5px`
    - Translucent champagne gold tint `rgba(196, 139, 40, 0.5)`
    - Maintained `text-decoration-skip-ink: auto` and fluid offset `clamp(5px, 0.7vw, 8px)`.
- Files touched:
  - `src/app/globals.css`
  - `brain.md`
- Decisions / gotchas:
  - Softens the visual weight of the interactive links so they don't overpower the headline or subheadline, establishing balanced typographic hierarchy while clearly signaling clickable destinations.
- Open items: None.

### 2026-10-09 — Elevated Italic Typography and Eye-Catching Styling on Developer & Podcaster
- What changed:
  - Elevated the typography of `"developer"` and `"podcaster"` in `Hero.tsx` using `font-serif italic font-semibold text-[var(--color-accent)]` (Playfair Display Italic in radiant champagne gold).
  - Switched base subheadline text (`"Full-stack"` and `"and"`) to neutral high-contrast graphite `text-[var(--color-ink)]`, creating dramatic visual contrast that instantly draws the eye to the two key links.
  - Upgraded `.luxury-underline` in `globals.css` with a crisp `2px` stroke, responsive offset `clamp(6px, 0.8vw, 9px)` to clear descenders, and accent gold decoration with smooth hover inversion to graphite ink.
- Files touched:
  - `src/components/Hero.tsx`
  - `src/app/globals.css`
  - `brain.md`
- Decisions / gotchas:
  - Playfair Display italic brings calligraphic luxury character that pops immediately against Inter sans-serif body text.
- Open items: None.

### 2026-10-09 — Simplify Hero Subheadline to Full-Stack Developer & Podcaster
- What changed:
  - Removed `"NEET aspirant turned"` prefix from the hero subheadline in `Hero.tsx`.
  - Streamlined `<h2>` to: `"Full-stack developer and podcaster."`
  - Hero copy now reads:
    - `<h1>`: `"Hi, I’m Jyoti."`
    - `<h2>`: `"Full-stack developer and podcaster."`
    - `<p>`: `"I build production-grade web applications and applied AI systems, focused on clean architecture, performance, and scalability."`
- Files touched:
  - `src/components/Hero.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Concise, direct title without background transition preface.
- Open items: None.

### 2026-10-09 — Recalibrate Hero Proportions to Eliminate Oversized Sizing
- What changed:
  - Recalibrated portrait cutout dimensions from oversized 490px down to balanced luxury proportions (`w-60 sm:w-68 md:w-76 lg:w-[330px] xl:w-[360px]` with `aspect-[1140/1380]`).
  - Adjusted negative top margin to `-mt-10 sm:-mt-12 md:-mt-14 lg:-mt-18 xl:-mt-18` (-72px on lg/xl), keeping the head and hair clearly and tastefully breaking out ~57px above the hero card's top baseline without being oversized.
  - Normalized section top padding to `pt-28 sm:pt-32 lg:pt-36` to eliminate excessive empty space above the hero box while ensuring clean clearance below the fixed navbar.
  - Retained removed arrow marks (`→`) from project and experience titles in `WorkAndExperience.tsx`.
- Files touched:
  - `src/components/Hero.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Preserved compact hero box height (`pt-0 pb-0` on `.hero-card`) while restoring harmonious editorial balance between portrait scale, copy height, and whitespace.
- Open items: None.

### 2026-10-09 — Hero Photo Top Breakout Effect (Overflow Visible)
- What changed:
  - Enabled `overflow: visible` on `.hero-card` in `globals.css` and `Hero.tsx` so the portrait's top head/hair naturally breaks outside the top edge of the hero box.
  - Applied negative top margin (`-mt-10 sm:-mt-14 lg:-mt-18`) on the portrait container while maintaining bottom-anchored alignment (`items-end`).
  - Adjusted section top padding (`pt-24 sm:pt-28 lg:pt-32`) to ensure comfortable spacing below the compact navigation bar.
- Files touched:
  - `src/components/Hero.tsx`
  - `src/app/globals.css`
  - `brain.md`
- Decisions / gotchas:
  - The subject's head slightly exceeds the top boundary of the hero box, creating a 3D layered editorial magazine cover aesthetic.
- Open items: None.

### 2026-10-09 — Removal of Jump Links & Social Links from Hero
- What changed:
  - Removed directional jump links ("Explore selected work →", "Get in touch →") from `Hero.tsx`.
  - Removed social media icon links (GitHub, LinkedIn, Email) from `Hero.tsx`.
  - Cleaned up unused imports (`Link`, `Icon`, `contactInfo`) in `Hero.tsx`.
- Files touched:
  - `src/components/Hero.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Streamlines the hero copy column to pure headline and narrative bio, providing balanced vertical alignment with the transparent studio portrait.
- Open items: None.

### 2026-10-09 — Hero Box Height Adjustment, Border Removal & Gradual Upward Hue
- What changed:
  - Removed top, left, and right borders (`border-t-0`, `border-l-0`, `border-r-0`, `border-radius: 0`) from `.hero-card` in `globals.css` and `Hero.tsx`, leaving only a clean bottom baseline border (`border-b border-[var(--border)]`).
  - Adjusted hero box height: removed fixed min-height, reduced excessive vertical padding, and aligned portrait to the bottom baseline (`pb-0 items-end`) with balanced copy padding.
  - Implemented a gradual champagne/gold hue (`bg-gradient-to-t from-[var(--color-accent)]/20 via-[var(--color-accent)]/[0.04] to-transparent blur-3xl`) starting from the bottom of the photo and radiating smoothly upward.
  - Added a subtle bottom ambient gradient wash along the hero base.
- Files touched:
  - `src/components/Hero.tsx`
  - `src/app/globals.css`
  - `brain.md`
- Decisions / gotchas:
  - Eliminates the boxy enclosed feel of the hero section while seamlessly grounding the transparent portrait at the base with soft atmospheric illumination.
- Open items: None.

### 2026-10-09 — Removal of Card Box from Hero Portrait
- What changed:
  - Removed card container, border (`border border-[var(--border)]`), card background (`bg-[var(--bg)]`), shadow (`shadow-sm sm:shadow-md`), and rounded box styling from the Hero portrait in `Hero.tsx`.
  - Configured plain transparent portrait using `object-contain object-bottom` directly resting on the hero's editorial background.
  - Provided `public/images/profile.png` with clean native PNG mime-type and alpha transparency.
- Files touched:
  - `src/components/Hero.tsx`
  - `public/images/profile.png`
  - `brain.md`
- Decisions / gotchas:
  - Seamlessly integrates the studio portrait into the hero section with zero card boundaries or artificial backgrounds.
- Open items: None.

### 2026-10-09 — Unboxed Marquee Tech & Compact Gradually-Fading Navbar
- What changed:
  - Removed outer card and inner capsule wrappers from `SkillsMarquee.tsx`: rendered raw brand icon and technology name directly with generous spacing (`gap-8 sm:gap-12`).
  - Compacted navbar height to `h-14 sm:h-16` (56px mobile, 64px desktop).
  - Removed hard bottom border line and shadow from `Navbar.tsx`; replaced with a smooth gradient fade (`[mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]`) that gradually dissolves into transparent at the bottom.
- Files touched:
  - `src/components/SkillsMarquee.tsx`
  - `src/components/Navbar.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Seamless gradient masking ensures no hard cutoff line appears between the navbar and the page content while keeping copy and navigation perfectly legible.
- Open items: None.

### 2026-10-09 — Smart Auto-Hiding Navbar & Transparency UI Polish
- What changed:
  - Added smart scroll direction detection in `Navbar.tsx`: translates navbar upward (`-translate-y-full`) when scrolling downward, and reveals it smoothly (`translate-y-0`) when scrolling upward.
  - Eliminated transparency bleed-through by replacing the raw translucent background with a high-opacity `bg-white/95 backdrop-blur-md border-b border-[var(--border)]` surface with `shadow-xs`.
  - Stabilized navbar layout with a consistent height (`h-16 sm:h-20`) to eliminate jumping padding shifts across scroll points.
  - Fixed active link highlighting bug where multiple hash links (`Skills`, `Work`, `Experience`) were simultaneously highlighted in gold on the homepage route.
  - Enriched mobile dropdown menu with clean `bg-white/98 backdrop-blur-xl border-t border-[var(--border)]` styling.
- Files touched:
  - `src/components/Navbar.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Preserves visibility when near the top of the page (`scrollY <= 60`) or when the mobile menu is actively open.
- Open items: None.

### 2026-10-09 — Removal of Subtext from Core Stack & Technologies
- What changed:
  - Removed category subtext (`skill.category`) from `SkillCard` in `SkillsMarquee.tsx`.
  - Streamlined each marquee chip to display only the official tech brand icon and technology name (`skill.name`).
- Files touched:
  - `src/components/SkillsMarquee.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Eliminates secondary label clutter, producing clean, compact, and scannable brand chips.
- Open items: None.

### 2026-10-09 — Continuous Marquee Motion: Removal of Hover Pause & Hover Lift
- What changed:
  - Removed the `animation-play-state: paused` rule on `.marquee-lane:hover` in `globals.css` so the marquee streams uninterruptedly without stopping when the user moves their mouse over it.
  - Removed all card hover effects (`hover:-translate-y-0.5`, `hover:bg-[var(--bg)]`, `hover:border-[var(--border-hover)]`, `hover:shadow-xs`) and `cursor-pointer` from `SkillCard` in `SkillsMarquee.tsx`.
- Files touched:
  - `src/app/globals.css`
  - `src/components/SkillsMarquee.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Ensures a quiet, non-distracting continuous background showcase that flows seamlessly across both rows.
- Open items: None.

### 2026-10-09 — Complete Removal of Cards, Boxes, Pills & Color Variations from Selected Work & Track Record
- What changed:
  - Frugally removed all cards and bounding boxes from the Selected Work & Track Record section (`WorkAndExperience.tsx`).
  - Removed all category pills, status pills (Live/Model), icon badges, and technology pill chips from the item view.
  - Removed all multi-color variations (`cardThemes` with amber, emerald, rose, blue, indigo, sky) in favor of uniform luxury editorial typography (`var(--color-ink)` and `var(--color-accent)`).
  - Converted filter pill container into clean, minimal editorial typography tabs (`All`, `Projects`, `Experience`) with simple active indicators.
  - Displayed only the project heading (serif title with smooth hover arrow) and its description paragraph (`item.summary`).
  - Clicking anywhere on the item opens the comprehensive deep-dive architecture and telemetry modal popup.
  - Aligned `/experience` route with `/projects` layout using `PageHeader` + `WorkAndExperience` with `initialTab="experience"`, deleting redundant `ExperienceContent.tsx`.
- Files touched:
  - `src/components/WorkAndExperience.tsx`
  - `src/app/experience/page.tsx`
  - `src/components/ExperienceContent.tsx` (deleted)
  - `brain.md`
- Decisions / gotchas:
  - Clean 2-column editorial grid layout with generous vertical whitespace (`gap-y-12 sm:gap-y-14`) completely eliminates the "box box everywhere" visual fatigue while preserving instant access to full technical specs via the popup modal.
- Open items: None.

### 2026-10-09 — Global Animation Refinement: Subtle Motion, No Glowing Effects, No Extraneous Dots
- What changed:
  - Global animation & zoom softening:
    - Reduced card hover lifts from `-translate-y-2` / `-translate-y-1` to ultra-subtle `-translate-y-0.5`.
    - Removed aggressive zoom effects (`scale-120`, `scale-115`, `scale-110`, `scale-105`) across `SkillsMarquee`, `Hero` portrait, `Footer` social icons, `SkillsContent`, `ContactContent`, and `AboutContent`.
    - Softened `.warrow` arrow translation to `2px`.
    - Softened GSAP tab switch animation in `WorkAndExperience` from `y: 22` to `y: 8, duration: 0.35s`.
  - Elimination of glowing effects:
    - Removed dynamic radial cursor spotlight and ambient corner glow overlays from project/experience cards.
    - Removed glowing card shadows (`hover:shadow-amber-500/10`, `hover:shadow-xl`) and replaced with subtle `hover:shadow-xs`.
    - Removed aura hover glows and backdrop blur rings from orbital nodes in `SkillsContent` and `ContactContent`.
    - Toned down ambient background glow divs in `Hero` and `Footer` to faint 10% opacity; adjusted `--accent-glow` to `0.05`.
    - Softened floating "Let's Talk" button shadow from `shadow-md hover:shadow-lg` to clean `shadow-xs hover:shadow-sm`.
  - Removal of unnecessary dots:
    - Removed pulsing radar beacon dots (`animate-ping`, `animate-pulse`) from Live badges and modal UI mockups; replaced with clean typography badges.
    - Removed trailing dot from name heading in `Footer` (`Jyotirmaya Behera`).
    - Removed decorative 3-dot clusters from orbital page footers (`SkillsContent`, `ContactContent`).
    - Replaced bullet point dots (`•`) in architectural breakdown and experience takeaways with clean typographic en-dashes (`−`).
    - Removed green status dot from Completed pill in `ExperienceContent`.
- Files touched:
  - `src/components/SkillsMarquee.tsx`
  - `src/components/WorkAndExperience.tsx`
  - `src/components/Hero.tsx`
  - `src/components/Footer.tsx`
  - `src/components/SkillsContent.tsx`
  - `src/components/ContactContent.tsx`
  - `src/components/AboutContent.tsx`
  - `src/components/ExperienceContent.tsx`
  - `src/components/ContactChat.tsx`
  - `src/app/globals.css`
  - `brain.md`
- Decisions / gotchas:
  - Maintains strict compliance with luxury editorial minimalism, zero emojis, zero horizontal divider lines, and zero type or build errors.
- Open items: None.

### 2026-10-09 — Removal of Item Counts from Selected Work & Track Record
- What changed:
  - Removed item count numbers from the filter tab buttons (`All`, `Projects`, `Experience` instead of `All Systems (8)`, `Projects (4)`, `Experience (4)`).
  - Removed numeric index watermarks and `+N` tech pill counts from the card faces for a pure minimal aesthetic.
- Files touched:
  - `src/components/WorkAndExperience.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Streamlines header controls and eliminates visual clutter across the showcase section.
- Open items: None.

### 2026-10-09 — Unique Compact Animated Cards with Minimal Text & Deep-Dive Details Modal
- What changed:
  - Transformed project and experience cards into compact, highly animated cards (`min-h-[220px]`) with minimal text for immediate, scannable visual impact.
  - Removed bulky summary paragraphs and metric tables from the card faces to reduce visual noise.
  - Added unique editorial index watermarks (`01`, `02`, `03`, `04`) that dynamically illuminate on hover.
  - Implemented interactive cursor spotlight tracking (`radial-gradient` via CSS custom properties), subtle ambient color aura, `-translate-y-2` + `scale-[1.015]` hover elevation, and sliding arrow animation on the "Details →" button.
  - Clicking "Details →" or anywhere on the card opens the full architectural modal with deep dive specs (problem/challenge, architecture breakdown, interactive terminal UI mockup, 4-metric system telemetry, and live platform/GitHub links).
  - Maintained zero horizontal divider lines across the layout.
- Files touched:
  - `src/components/WorkAndExperience.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Small cards in a 4-column responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`) allow all 4 projects or experiences to align in a single, balanced row without visual fatigue.
- Open items: None.

### 2026-10-09 — Interactive Card Alignment, Dynamic Spotlight & Engineering Telemetry Redesign
- What changed:
  - Redesigned the project and experience showcase grid from a cramped 4-column layout into an expansive, mathematically balanced 2-column layout (`grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8`).
  - Added dynamic mouse spotlight animation tracking cursor coordinates on each card (`radial-gradient` driven by CSS custom properties `--mouse-x` and `--mouse-y`) with individual brand theme glows (Netram: gold/amber, Plantexa: botanical jade, Prodexa: terracotta crimson, Aptixa: royal sapphire, NIELIT: emerald, Infosys: indigo, SIH: gold, Systems: sky blue).
  - Integrated a 3-column engineering telemetry / architecture metrics strip into every card displaying key accomplishments (e.g., Active Streams, Compliance Pass, WebRTC Latency, Quantized Model Size, Query Execution Speed).
  - Added micro-animations: pulsating live radar beacon for deployed systems, `-translate-y-2` hover lift with `shadow-2xl`, tech chips with individual hover color inversion, and animated sliding arrow on Architecture CTA (`group-hover:translate-x-1.5`).
  - Implemented one-click direct external links ("Live Demo ↗", "GitHub") with click stop-propagation alongside deep-dive modal trigger.
  - Added engineering telemetry metrics to experience items in modal view.
  - Zero horizontal divider lines used anywhere per design requirements.
- Files touched:
  - `src/components/WorkAndExperience.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Symmetrical 2x2 grid for 4 projects and 4 experiences gives each card ample breathing room for headlines, summary, metrics, and actions without line clamping or awkward wraps.
- Open items: None.

### 2026-10-09 — Removal of Quick Connect Assistant Banner Section
- What changed:
  - Removed the `"Have a project or problem to solve? Quick Connect"` capsule banner from the homepage.
  - Deleted `src/components/AssistantBanner.tsx`.
  - Removed dead `.loremv` CSS rules from `src/app/globals.css`.
- Files touched:
  - `src/components/AssistantBanner.tsx` (deleted)
  - `src/app/page.tsx`
  - `src/app/globals.css`
  - `brain.md`
- Decisions / gotchas:
  - Direct connection options remain cleanly accessible in Hero action links, Footer email CTA, and dedicated `/contact` route.
- Open items: None.

### 2026-10-09 — Removal of Vercel Icon & Favicon Modernization
- What changed:
  - Deleted `public/vercel.svg` and `public/next.svg`.
  - Replaced legacy default Vercel `public/favicon.ico` with the user's custom avatar favicon from `public/favicon_io/favicon.ico`.
  - Replaced outdated black-and-white `src/app/icon.jpeg` with high-resolution user avatar `src/app/icon.png`.
  - Copied `apple-touch-icon.png`, `favicon-32x32.png`, and `favicon-16x16.png` to `public/`.
  - Configured explicit `icons` metadata in `src/app/layout.tsx`.
- Files touched:
  - `public/vercel.svg` (deleted)
  - `public/next.svg` (deleted)
  - `src/app/icon.jpeg` (deleted)
  - `src/app/icon.png` (created)
  - `public/favicon.ico`
  - `public/apple-touch-icon.png`
  - `public/favicon-32x32.png`
  - `public/favicon-16x16.png`
  - `src/app/layout.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Ensured browser tabs and bookmarks now display the user's new portrait avatar rather than any framework or Vercel default icon.
- Open items: None.

### 2026-10-09 — Footer Full Social Media Expansion & Status Eyebrow Removal
- What changed:
  - Removed "Available for Software & AI Roles" eyebrow pill from both `Hero.tsx` and `Footer.tsx`.
  - Added all 11 social media & profile links in `Footer.tsx`: GitHub, LinkedIn, X (Twitter), LeetCode, Instagram, YouTube, Telegram, Reddit, Threads, Medium, and Facebook.
  - Styled with circular glassmorphic icon buttons with brand hover elevation, scaling, and tooltips.
- Files touched:
  - `src/components/Hero.tsx`
  - `src/components/Footer.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Handled responsive flex wrapping so all 11 profile icons align cleanly on mobile and desktop.
- Open items: None.

### 2026-10-09 — Hero Profile Portrait Enlargement
- What changed:
  - Enlarged the Hero profile portrait container to `w-72 sm:w-88 md:w-96 lg:w-[400px] xl:w-[440px]` with `aspect-[4/5]` and `rounded-2xl sm:rounded-3xl`.
  - Configured `object-cover object-top` to display the user's new studio portrait with arms crossed cleanly and prominently without cropping head or hair.
  - Re-balanced the Hero 2-column grid layout to `lg:grid-cols-[1.1fr_1fr]` with enhanced depth shadow `shadow-xl sm:shadow-2xl`.
- Files touched:
  - `src/components/Hero.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Ensured zero overlays, gradients, or badges cover the portrait.
- Open items: None.

### 2026-10-09 — Monogram Brand Update to "JB"
- What changed:
  - Replaced `"Jb."` brand monogram with `"JB"` in navigation header ([`Navbar.tsx`](file:///home/jyotirmaya/project/portfolio/src/components/Navbar.tsx)).
- Files touched:
  - `src/components/Navbar.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Retained editorial serif typography with bold tracking.
- Open items: None.

### 2026-10-09 — Work & Experience Header Cleanup & Profile Portrait Updates
- What changed:
  - Removed "Engineering Systems & Experience" eyebrow badge and descriptive paragraph from `WorkAndExperience.tsx` section header.
  - Updated Hero profile portrait in `Hero.tsx`: removed inner gradient shadow overlay and bottom micro badge overlay, cleanly rendering the user's updated `profile.jpeg` with zero elements at the bottom.
  - Linked `site.webmanifest` in `layout.tsx` metadata and configured valid application names in `public/favicon_io/site.webmanifest`.
- Files touched:
  - `src/components/WorkAndExperience.tsx`
  - `src/components/Hero.tsx`
  - `src/app/layout.tsx`
  - `public/favicon_io/site.webmanifest`
  - `brain.md`
- Decisions / gotchas:
  - Preserved standard `aspect-[4/5]` for the portrait column and centered object alignment for high visual fidelity without obstructing user photography.
- Open items: None.

### 2026-10-09 — Removal of Skills Marquee Subtext/Link & All Horizontal Lines
- What changed:
  - Removed "Technical Expertise & Tooling" eyebrow badge, explanatory subtext, and "View Celestial Orbit System →" link from `SkillsMarquee.tsx`.
  - Removed all horizontal divider lines (`border-b` and `border-t`) across the entire website:
    - Removed `border-b` below the `SkillsMarquee` section header.
    - Removed `border-b` below the `WorkAndExperience` section header.
    - Removed `border-t` internal card divider lines in project and experience tiles.
    - Removed `border-b` on scrolled desktop and mobile navigation in `Navbar.tsx`.
    - Removed `border-t` dividing lines in `Footer.tsx` (top footer boundary and bottom copyright bar).
    - Removed `border-t` from `ExperienceContent.tsx` tech tags.
    - Removed `border-t` and `border-b` from `ContactChat.tsx` drawer and header.
- Files touched:
  - `src/components/SkillsMarquee.tsx`
  - `src/components/WorkAndExperience.tsx`
  - `src/components/Navbar.tsx`
  - `src/components/Footer.tsx`
  - `src/components/ExperienceContent.tsx`
  - `src/components/ContactChat.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Section headers and cards now rely on generous whitespace and subtle card elevation rather than horizontal rule borders, providing an ultra-clean, minimalist luxury finish.
- Open items: None.

### 2026-10-09 — Homepage Scrolling Skills Section with Interactive Hover Zoom
- What changed:
  - Created `SkillsMarquee.tsx` containing an editorial header and two continuous infinite scrolling marquee tracks (`animate-marquee-left` and `animate-marquee-right`).
  - Integrated 22 distinct technologies across languages, full-stack frameworks, AI/ML runtimes, and databases (Python, TypeScript, Next.js, React, FastAPI, Node.js, Tailwind, Java, C++, Express, PyTorch, PostgreSQL, Docker, TensorFlow, MongoDB, Supabase, Git, Linux, Redis, Flask, MySQL).
  - Implemented interactive hover zoom: hovering pauses track motion and scales the card to 120% with depth shadow, elevated z-index, and accent border.
  - Added edge vignette masks with smooth gradient fades.
  - Linked Navbar navigation directly to `/#skills`.
  - Added marquee keyframes and reduced-motion fallbacks to `globals.css`.
- Files touched:
  - `src/components/SkillsMarquee.tsx`
  - `src/app/page.tsx`
  - `src/components/Navbar.tsx`
  - `src/app/globals.css`
  - `src/components/ui/Icon.tsx` (removed unused sun/moon icons)
  - `brain.md`
- Decisions / gotchas:
  - Track pauses on hover (`marquee-lane:hover`) so the user can easily interact with the zoomed card without it moving out of view.
- Open items: None.
### 2026-10-09 — Complete Removal of Dark Mode & Dead Code Cleanup
- What changed:
  - Completely purged dark mode across the entire codebase.
  - Deleted `src/components/ThemeToggle.tsx`.
  - Removed theme toggle button and dividers from [`Navbar.tsx`](file:///home/jyotirmaya/project/portfolio/src/components/Navbar.tsx).
  - Cleaned [`src/app/layout.tsx`](file:///home/jyotirmaya/project/portfolio/src/app/layout.tsx): removed anti-flash localStorage script and simplified viewport to single `themeColor: "#ffffff"`.
  - Cleaned [`src/app/globals.css`](file:///home/jyotirmaya/project/portfolio/src/app/globals.css): deleted all `[data-theme="dark"]`, `html.dark`, and `html.theme-transition` CSS rules.
  - Purged all `dark:` utility classes from components and orbital JSON configs ([`orbitalSkills.json`](file:///home/jyotirmaya/project/portfolio/src/data/orbitalSkills.json), [`orbitalContact.json`](file:///home/jyotirmaya/project/portfolio/src/data/orbitalContact.json), [`SkillsContent.tsx`](file:///home/jyotirmaya/project/portfolio/src/components/SkillsContent.tsx), [`ContactContent.tsx`](file:///home/jyotirmaya/project/portfolio/src/components/ContactContent.tsx), [`WorkAndExperience.tsx`](file:///home/jyotirmaya/project/portfolio/src/components/WorkAndExperience.tsx)).
  - Verified zero occurrences of `dark` remain across the repository.
- Files touched:
  - `src/components/ThemeToggle.tsx` (deleted)
  - `src/components/Navbar.tsx`
  - `src/app/layout.tsx`
  - `src/app/globals.css`
  - `src/components/WorkAndExperience.tsx`
  - `src/components/SkillsContent.tsx`
  - `src/components/ContactContent.tsx`
  - `src/data/orbitalSkills.json`
  - `src/data/orbitalContact.json`
  - `brain.md`
- Decisions / gotchas:
  - Retained editorial light theme tokens with WCAG AA compliance (high contrast graphite text `#1f1f21` over warm white `#ffffff` / `#fcf9f8`).
- Open items: None.
### 2026-10-09 — Unified Projects & Experience Section with Small Cards, Modal Details & Redesigned Footer
- What changed:
  - Unified Projects and Experience into a single cohesive section (`WorkAndExperience.tsx`) on homepage, `/projects`, and `/experience`.
  - Transformed cards into compact, uniform tiles with category tag, status indicator, serif title, summary, tech chips, and "Details →" CTA.
  - Implemented interactive deep-dive modal dialog: clicking any card displays complete UI mockups, real-time telemetry, architecture highlights, system metrics, and live demo / GitHub action links.
  - Added filter tabs (`All`, `Projects`, `Experience`) with smooth GSAP staggered transition animations.
  - Added URL hash synchronization for `#work` and `#experience`.
  - Redesigned `Footer.tsx` with luxury midnight styling, editorial headline, availability badge, direct email CTA, social icons, sitemap navigation, and smooth Back-to-Top scroll.
  - Cleaned up obsolete components (`EnterpriseHighlights.tsx`, `ProjectsShowcase.tsx`).
- Files touched:
  - `src/components/WorkAndExperience.tsx`
  - `src/components/Footer.tsx`
  - `src/app/page.tsx`
  - `src/app/projects/page.tsx`
  - `src/app/experience/page.tsx`
  - `src/app/globals.css`
  - `brain.md`
- Decisions / gotchas:
  - Used focus lock, Escape listener, backdrop click dismiss, and body scroll lock for the detail modal to ensure accessibility.
- Open items: None.

### 2026-10-09 — Project showcase perfection & homepage cleanup
- What changed:
  - Removed all occurrences of Utkal University and Integrated MCA from homepage components and root metadata in `src/app/layout.tsx`.
  - Refined project card design tokens in `src/app/globals.css` with whisper-quiet editorial backgrounds, WCAG AA contrast (12:1), and individual border hover accents.
  - Resolved GSAP scroll reveal flicker bug in `useGsapScrollReveal.ts` by replacing `onEnter` snap with unified `gsap.fromTo` and `ScrollTrigger`.
  - Corrected footer alignment in `Footer.tsx` by replacing undefined `.inner` wrapper with `pad-cards` layout and added quick sitemap links.
  - Standardized `Hero.tsx` portrait aspect ratio to standard `aspect-[4/5]`.
  - Added semantic `PageHeader` with `<h1>` on `/projects` page.
- Files touched:
  - `src/app/layout.tsx`
  - `src/app/globals.css`
  - `src/components/ProjectsShowcase.tsx`
  - `src/components/Footer.tsx`
  - `src/components/Hero.tsx`
  - `src/app/projects/page.tsx`
  - `src/hooks/useGsapScrollReveal.ts`
  - `brain.md`
- Decisions / gotchas:
  - Ensured all live links (Netram, Aptixa, GitHub repositories) have accessible, non-overlapping targets and responsive touch states.
- Open items: None.

### 2026-10-09 — Redesign inspired by dineshrevunuru.com
- What changed:
  - Redesigned visual aesthetic, typography, and layout inspired by https://dineshrevunuru.com/ and generated Haute Obsidian design system via StitchMCP.
  - Implemented Playfair Display editorial serif headlines paired with clean Inter sans-serif copy.
  - Built Hero card (`hero-card`) with dual-column layout, H1 serif, H2 accent, directional CTAs, and framed portrait.
  - Built interactive Assistant banner (`AssistantBanner`) with pulsing glow orb linked to ContactChat drawer.
  - Built 2-column project showcase (`ProjectsShowcase`) with custom tonal cards for Netram, Plantexa, Prodexa, and Aptixa with interactive UI mockups.
  - Built 4-column enterprise & research highlights grid (`EnterpriseHighlights`) for NIELIT, Infosys Springboard, SIH, and Utkal University.
  - Built midnight luxury footer (`Footer`).
  - Added GSAP ScrollTrigger sequential reveal system (`useGsapScrollReveal` & `GsapInit`).
  - Added reusable `<Icon />` wrapper component and deleted dead code (`ProjectsContent.tsx`).
- Files touched:
  - `src/app/globals.css`
  - `src/app/layout.tsx`
  - `src/app/page.tsx`
  - `src/app/projects/page.tsx`
  - `src/app/experience/page.tsx`
  - `src/app/about/page.tsx`
  - `src/app/education/page.tsx`
  - `src/components/Hero.tsx`
  - `src/components/Navbar.tsx`
  - `src/components/ProjectsShowcase.tsx`
  - `src/components/EnterpriseHighlights.tsx`
  - `src/components/AssistantBanner.tsx`
  - `src/components/Footer.tsx`
  - `src/components/PageHeader.tsx`
  - `src/components/AboutContent.tsx`
  - `src/components/EducationContent.tsx`
  - `src/components/ExperienceContent.tsx`
  - `src/components/ContactChat.tsx`
  - `src/components/ui/Icon.tsx`
  - `src/hooks/useGsapScrollReveal.ts`
  - `src/components/GsapInit.tsx`
  - `src/lib/utils.ts`
  - `brain.md`
- Decisions / gotchas:
  - Preserved existing interactive features (such as orbital celestial constellations on `/skills` and `/contact`) while aligning the entire typography and palette tokens across the site.
- Open items: None.
