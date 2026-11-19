# brain.md

## Project
- **Name**: Jyotirmaya Behera — Developer Portfolio
- **Purpose**: Minimalist-luxury editorial developer portfolio showcasing AI/ML and full-stack systems engineering
- **Live URL**: https://jyotirmayabehera.com
- **Stack/versions**: Next.js 16.3.5, React 19.2.8, TypeScript 5.9.3, Tailwind CSS 4.3.3, Three.js 0.187.0, GSAP 3.15.0, @gsap/react 2.1.2
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
  │   ├── experience/
  │   ├── projects/
  │   ├── globals.css
  │   ├── layout.tsx
  │   ├── not-found.tsx
  │   ├── page.tsx
  │   ├── robots.ts
  │   ├── sitemap.ts
  │   └── template.tsx
  ├── components/
  │   ├── ui/
  │   │   └── Icon.tsx
  │   ├── AboutContent.tsx
  │   ├── ContactChat.tsx
  │   ├── ContactContent.tsx
  │   ├── Footer.tsx
  │   ├── GsapInit.tsx
  │   ├── Hero.tsx
  │   ├── Navbar.tsx
  │   ├── PageHeader.tsx
  │   ├── SkillsMarquee.tsx
  │   └── WorkAndExperience.tsx
  ├── data/
  │   ├── contact.ts
  │   ├── experience.json
  │   ├── experience.ts
  │   ├── orbitalContact.json
  │   ├── projectLinks.json
  │   ├── projects.json
  │   └── projects.ts
  ├── hooks/
  │   └── useGsapScrollReveal.ts
  └── lib/
      ├── email.ts
      └── utils.ts
  ```
- **Data flow and key patterns**:
  - Static generation by default for all core informational routes (ISR/Static).
  - GSAP animations handled via leaf client component (`GsapInit` + `useGsapScrollReveal`) with `ScrollTrigger` and reduced-motion safety.
  - Project repository and live platform URLs are configured cleanly in `src/data/projectLinks.json` and dynamically merged into `projectsData`.
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
| `src/components/Navbar.tsx` | Restored original clean auto-hiding navbar with smooth scroll direction detection, bottom gradient fade, zero dot marks on active links, and no Let's Talk button |
| `src/components/Hero.tsx` | Pure typography hero layout with transparent studio portrait breaking out of the top edge, bottom baseline border, and upward champagne hue |
| `src/components/SkillsMarquee.tsx` | Continuous dual-track infinite marquee ticker with authentic brand icons and names (zero card wrappers/boxes, pure stream) |
| `src/components/WorkAndExperience.tsx` | Pure typography editorial showcase (zero boxes, zero cards, zero pills, unboxed) with Playfair Display titles, clean descriptions, and deep-dive architecture modal on click |
| `src/components/Footer.tsx` | Midnight luxury footer with editorial brand identity, direct email CTA, social icons, sitemap, dynamic featured systems, and back-to-top |
| `src/components/ui/Icon.tsx` | Reusable, accessible SVG Icon wrapper component |
| `src/hooks/useGsapScrollReveal.ts` | GSAP ScrollTrigger hook for smooth sequential entrance reveals |
| `src/components/GsapInit.tsx` | Leaf client component initializing GSAP motion |
| `src/app/projects/page.tsx` | Dedicated Projects Index Server Component with metadata, Open Graph, dynamic count, and JSON-LD |
| `src/components/ProjectsIndex.tsx` | Pure minimal infinite loop carousel showcase with 75-item clone pool (zero reload flash), slight blur exclusively on outer parts of left/right most cards, instant click-to-center for siblings, and direct click navigation to `/projects/[id]` on active center card |
| `src/app/projects/[id]/page.tsx` | Dedicated project detail page with SSG pre-rendering, responsive 2-column layout, and conditional action buttons |
| `src/app/experience/[id]/page.tsx` | Dedicated experience detail page with SSG pre-rendering, responsive 2-column layout, and zero divider lines |
| `src/app/not-found.tsx` | Luxury minimal 404 error page |
| `src/data/projectLinks.json` | Dedicated config file for project live URLs and GitHub repository URLs |
| `src/data/projects.json` | JSON dataset for project records with optional fields |
| `src/data/projects.ts` | Centralized ProjectItem data model, loader from projects.json and projectLinks.json, and helper queries |
| `src/data/experience.json` | JSON dataset for professional internships (NIELIT, Infosys Springboard) |
| `src/data/experience.ts` | Centralized ExperienceItem data model, loader from experience.json, and helper queries |
| `src/lib/utils.ts` | `cn()` utility combining `clsx` and `tailwind-merge` |

## Routes
| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Main editorial showcase with Hero, SkillsMarquee, and WorkAndExperience |
| `/projects` | `src/app/projects/page.tsx` | Infinite carousel showcase (`ProjectsIndex.tsx`) with zero reload flash, slight blur on outer part of left/right most cards, and clean descriptions |
| `/projects/[id]` | `src/app/projects/[id]/page.tsx` | Dedicated project detail pages (Netram, Plantexa, Prodexa, Aptixa) |
| `/experience/[id]` | `src/app/experience/[id]/page.tsx` | Dedicated experience detail pages (NIELIT, Infosys Springboard) |
| `/about` | `src/app/about/page.tsx` | Professional narrative, focus areas & navigation highlights |
| `/contact` | `src/app/contact/page.tsx` | Social galaxy & contact hub |
| `/api/contact` | `src/app/api/contact/route.ts` | Server-side validated contact endpoint |
| `/skills` | *Redirected* | Next.js server redirect to `/#skills` |
| `/education` | *Redirected* | Next.js server redirect to `/about` |
| `/experience/sih` | *Redirected* | Next.js server redirect to `/#experience` |
| `/experience/systems` | *Redirected* | Next.js server redirect to `/#experience` |

## Conventions & Decisions
- **Pure Minimal Infinite Loop Carousel (`/projects`)**: Header elements ("Recent work, real results", "Get in touch" CTA button, and "drag me" SVG annotation) are completely removed, leaving an ultra-minimal full-viewport card presentation with a screen-reader-only `<h1>Selected Engineering Projects</h1>` for SEO and semantic landmark compliance. Cards feature balanced portrait proportions (`240px` mobile, `290px` tablet, `350px` desktop, `aspect-[3/4]`), filled edge-to-edge with the project illustration. Center active card (`dist 0`) and immediate neighbor cards (`dist 1`) have zero blur, remaining completely sharp and 100% opaque. Only the outer part (outer 55% strip) of the left-most and right-most cards (`dist 2`) features a slight frosted blur (`backdrop-blur-[4px]`) and fade. Reload flicker during infinite looping was completely eliminated by expanding the clone pool to 15 sets (60 items across 4 projects), using synchronous layout reflow for boundary normalization, and setting `loading="eager"` on cached SVG images. Clicking any side card immediately glides it to center. Continuous auto-movement runs on a 3.6s timer with hover pause exclusively on the center active card.
- **Footer Exclusivity to Landing / Homepage (`/`)**: Per user specification, the global footer is exclusively present on the landing page (`src/app/page.tsx`). All other routes (`/projects`, `/projects/[id]`, `/experience/[id]`, `/about`, `/contact`, `/not-found`) have the footer omitted for clean focused page presentation.
- **Dedicated Project Links Config (`projectLinks.json`)**: Created a dedicated, lightweight `src/data/projectLinks.json` file for managing repository and live platform URLs independently of deep narrative text. If a project has no live URL, the "View Live Platform" button is automatically hidden; if it has no repository URL, the "GitHub Repository" button is automatically hidden.
- **Experience & Internships Focus**: Streamlined the experience track from "Experience & Fellowships" to "Experience & Internships", focusing exclusively on the two verified professional internships: NIELIT (AI Research Internship) and Infosys Springboard (Enterprise Project Internship). Former non-internship items (SIH, Systems) are cleanly redirected to `/#experience`.
- **Elimination of Obsolete Hidden Pages**: Removed obsolete, unmaintained standalone pages `/skills` (the orbital constellation relic duplicate of `/#skills`) and `/education` (unlinked orphan page), configuring server-side 307 redirects in `next.config.ts` (`/skills` -> `/#skills`, `/education` -> `/about`) and pruning them from `sitemap.ts`.
- **Responsive Two-Column Detail Layout**: Resolved the "excessive free spaces" issue on wide monitors by expanding detail page width (`max-w-[1240px]`) and introducing an architectural 2-column editorial grid. The left column (pinned on desktop) anchors the headline, subtitle, action buttons, and technologies, while the right column showcases the narrative overview, challenges, and feature breakdowns.
- **Dedicated Experience Detail Pages**: Created dedicated, statically pre-rendered URLs under `/experience/[id]` matching the project details editorial standard, with zero modals and complete JSON-driven conditional templates (`src/data/experience.json`).
- **Removal of Homepage Filter Tabs**: Removed filter tab buttons (`All`, `Projects`, `Experience`) from `WorkAndExperience.tsx`. Both "Featured Projects" and "Experience & Internships" are displayed as clean, cohesive editorial subsections where cards show only title and summary and navigate directly to dedicated pages.
- **Zero Popups / Modals**: Completely eliminated all popup windows and modal overlays across the entire application.
- **Clean Project & Experience Detail Template**: Features zero horizontal divider lines, zero status pills, zero benchmark/metrics blocks, and strict conditional rendering driven by JSON files.
- **Navbar Projects Route**: Updated "Projects" in `Navbar.tsx` to link directly to `/projects`, maintaining active state when on `/projects` or `/projects/[id]`.

## Known Issues / Tech Debt
- None. `tsc --noEmit`, `eslint`, and `next build` pass with 0 errors and 0 warnings.

## Change Log (newest first)
### 2026-11-19 — Removal of Fake News Detector Project
- What changed:
  - Removed "Fake News Detector" from active engineering projects:
    - Deleted project record from `src/data/projects.json`.
    - Removed outcome description mapping `case "fake-news-detector"` in `src/components/ProjectsIndex.tsx`.
    - Deleted orphaned preview vector asset `public/images/projects/fake-news-detector.svg`.
  - Active projects roster now consists of 4 core engineering systems: Netram (01), Plantexa (02), Prodexa (03), and Aptixa (04).
  - Infinite carousel dynamically adjusts with 15 sets (60 virtual cards) and seamless zero-flash looping.
- Files touched:
  - `src/data/projects.json`
  - `src/components/ProjectsIndex.tsx`
  - `public/images/projects/fake-news-detector.svg` (deleted)
  - `brain.md`
- Decisions / gotchas:
  - Pruned dead assets and code per Section 8 guidelines; SSG automatically generates exactly 4 project detail routes.
- Open items: None.

### 2026-11-19 — Card Click Navigation to Dedicated Project Explore Page (/projects/[id])
- What changed:
  - Enabled direct exploration from the projects carousel: clicking the active center card (or its outcome description) opens the dedicated project explore page (`/projects/${project.id}`, e.g., `/projects/netram`, `/projects/plantexa`, `/projects/prodexa`, `/projects/aptixa`, `/projects/fake-news-detector`).
  - Wrapped card frame and description in Next.js `<Link>` with `cursor-pointer`, native middle-click / new-tab support, and instant client-side routing.
  - Sibling side cards retain smooth click-to-center behavior (`e.preventDefault() + goToIndex(idx)`); drag/swipe gestures (`justDraggedRef`) prevent accidental navigation.
  - Added subtle hover polish to active card (`group-hover:shadow-lg group-hover:border-black/25`, image `group-hover:scale-[1.02]`).
- Files touched:
  - `src/components/ProjectsIndex.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Intercepting side-card clicks while letting the active center card bubble naturally to `<Link>` delivers intuitive interaction: side cards focus into view, and centered cards navigate to deep-dive architecture.
- Open items: None.

### 2026-11-19 — Zero-Flicker Infinite Loop & Subtle Outer Blur on Last-Most Cards
- What changed:
  - Completely resolved the infinite loop reload flash:
    - Expanded clone pool from 5 sets (25 items) to 15 sets (75 items), centered at index 35 (`baseCount * 7`), eliminating frequent resets.
    - Replaced asynchronous state-delay normalization with synchronous DOM layout reflow (`void track.offsetHeight`), ensuring 0 visible jumps or layout reflow catches.
    - Configured `loading="eager"` and removed conditional priority switching on Next.js `<Image>`, preventing image unmount/decode reloads.
  - Applied slight blur exclusively to the outer part of the last-most cards (`dist === 2`):
    - Left-most card has a subtle frosted blur strip (`backdrop-blur-[4px]`) over its outer left 55%, smoothly fading to clear.
    - Right-most card has a subtle frosted blur strip (`backdrop-blur-[4px]`) over its outer right 55%, smoothly fading to clear.
    - Center card (`dist === 0`) and immediate neighbor cards (`dist === 1`) have zero blur and 100% clarity.
  - Preserved sibling click-to-center and uninterrupted 3.6s infinite auto-carousel.
- Files touched:
  - `src/components/ProjectsIndex.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Synchronous DOM reflow coupled with a 75-item clone pool guarantees that normal auto-play never hits normalization boundaries and never produces a visible reload effect.
- Open items: None.

### 2026-11-19 — Header & CTA Removal and Deterministic Infinite Loop Carousel on /projects
- What changed:
  - Removed visible header elements from `/projects`: `"Recent work, real results"` headline, `"Get in touch"` pill button, and the `"drag me"` cursive SVG annotation.
  - Added screen-reader-only `<h1>Selected Engineering Projects</h1>` for accessibility and SEO.
  - Re-architected carousel navigation into a mathematically infinite, seamless loop with 5 virtual sets (25 items) and synchronized JavaScript timer normalization (`setTimeout(..., 720)`).
  - Maintained balanced 3:4 portrait aspect ratio, full-bleed image cover, distance falloff, and clean outcome descriptions.
- Files touched:
  - `src/components/ProjectsIndex.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Synchronized JavaScript timer normalization eliminates browser-throttled transition event dropouts and ensures the infinite carousel never runs out of cards.
- Open items: None.

### 2026-11-19 — Balanced Card Sizing, Middle Card Visibility Fix & Seamless Dissolve
- What changed:
  - Fixed middle card visibility: resolved distance-matching conditional in `ProjectsIndex.tsx` so the active center card (`dist === 0`) is explicitly assigned full visibility (`scale-100 opacity-100 z-20`).
  - Switched mask gradient stop color to `white` (`maskImage: linear-gradient(to right, transparent 0%, white 14%, white 86%, transparent 100%)`) ensuring 100% luminance and alpha across all rendering engines.
  - Resized carousel cards to balanced proportions (`230px` mobile, `280px` tablet, `340px` desktop) in `3:4` portrait aspect ratio.
  - Eliminated hard edge cutoff lines completely with progressive opacity falloff and wide white edge dissolve vignettes.
- Files touched:
  - `src/components/ProjectsIndex.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Explicitly checking `dist === 0` prevents the middle card from falling into the default `else` falloff block (`opacity-0`), restoring full vibrant focus to the center project.
- Open items: None.

### 2026-11-19 — Generous 3:4 Cards & Transparent Front Blur on Carousel Edges
- What changed:
  - Scaled up carousel cards to generous proportions across all breakpoints (`310px` mobile, `390px` tablet, `480px` desktop).
  - Switched card frame to an architectural portrait `3:4` aspect ratio (`aspect-[3/4]`), filled edge-to-edge with the illustration (`object-cover`).
  - Added dual transparent front blur overlays on the sideways edges:
    - Left & right overlays with `backdrop-blur-[8px]` and subtle gradient masks (`from-white/90 via-white/40 to-transparent`, `z-30 pointer-events-none`).
    - Smoothly blurs cards as they enter and exit the viewport edges while keeping interaction unobstructed.
  - Retained minimal card content: pure description text below the frame (zero name headings, zero category pills, zero in-card links, zero hover shifts, zero progress bar).
  - Maintained smooth infinite autoplay (3.8s intervals) with hover pause, touch swipe, and centered single-card focus.
- Files touched:
  - `src/components/ProjectsIndex.tsx`
  - `brain.md`
- Decisions / gotchas:
  - The 3:4 portrait ratio combined with real-time backdrop blur delivers an ultra-premium editorial gallery experience.
- Open items: None.

### 2026-11-19 — Design by Ency Showcase Adaptation, Default Light Palette & Roster Removal
- What changed:
  - Re-architected `/projects` into an auto-playing centered focus carousel adapted from `designbyency.com`:
    - Display headline `Recent work,` with muted graphite `real results`.
    - Applied the site's default pure editorial light theme (`#ffffff`, zero blue).
    - Centered active focus card (`scale-100`) with downscaled visible siblings (`scale-[0.84]`).
    - Completely cleared the secondary "Complete Engineering Roster" section and closing CTA card.
    - Restored `src/components/Navbar.tsx` to original auto-hiding layout without "Let's Talk" or active dots.
- Files touched:
  - `src/components/Navbar.tsx`
  - `src/components/ProjectsIndex.tsx`
  - `brain.md`
- Open items: None.

### 2026-11-19 — Earlier Showcase & Architecture Explorations (Summary)
- Explored multiple showcase formats prior to the minimalist infinite carousel:
  - Super 8 Studio inspired Bento Case-Study showcase and scroll-morphing floating pill navbar.
  - Three.js cinematic 3D continuous camera spline journey (`three`, Catmull-Rom curve, spatial depth particles).
  - 3D revolving carousel (Earth-like right-to-left rotation with GSAP 3D transforms).
  - Multiplane zoom-outs and character zoom momentum experiments.
  - Restricted `<Footer />` strictly to the landing page (`src/app/page.tsx`), maintaining clean finishes on all sub-routes.
- Open items: None.

### 2026-11-19 — Minimal Typographic Projects Showcase & SVG Previews
- What changed:
  - Added project SVGs in `public/images/projects/` and assigned `year`, `number`, and `thumbnail` in `src/data/projects.json`.
  - Streamlined experience section into "Experience & Internships" (NIELIT, Infosys Springboard) with server redirects for former paths.
- Files touched:
  - `src/components/ProjectsIndex.tsx`
  - `src/data/projects.json`
  - `src/data/projects.ts`
  - `public/images/projects/*.svg`
  - `brain.md`
- What changed:
  - Created dedicated configuration file `src/data/projectLinks.json` specifically for managing project repository (`repoUrl` / `githubUrl`) and live platform (`liveUrl` / `url`) links cleanly without touching deep narrative JSON content.
  - Updated `src/data/projects.ts` to merge `projectLinks.json` into `projectsData`, sanitizing empty/whitespace strings to `undefined`.
  - Configured conditional rendering in `src/app/projects/[id]/page.tsx`:
    - "View Live Platform" button is only visible if a non-empty `liveUrl` is configured.
    - "GitHub Repository" button is only visible if a non-empty `githubUrl` / `repoUrl` is configured.
    - If a project lacks both, the action links container is completely hidden.
  - Made "Featured Systems" in `Footer.tsx` dynamic: derived automatically from `projectsData`, linking to the live URL or repo URL, and completely omitting any project that lacks both URLs.
- Files touched:
  - `src/data/projectLinks.json` (created)
  - `src/data/projects.ts`
  - `src/components/Footer.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Supports flexible key aliases (`liveUrl`, `url`, `repoUrl`, `githubUrl`, `repo`) so the user can easily manage URLs without strict naming friction.
- Open items: None.

### 2026-11-19 — Footer Framework Credits Removal
- What changed:
  - Removed "Crafted with Next.js 16, TypeScript & GSAP" attribution string from bottom copyright bar in `Footer.tsx`.
  - Balanced the bottom tier into a clean two-sided layout: copyright on the left and "Back to Top ↑" action on the right.
- Files touched:
  - `src/components/Footer.tsx`
  - `brain.md`
- Decisions / gotchas:
  - Streamlines footer copy to essential copyright notice and navigation action.
- Open items: None.

### 2026-11-19 — Redundant Code Cleanup & Hidden Pages Removal
- What changed:
  - Removed unlinked/hidden pages and their orphaned components and data files:
    - Deleted `/education` route (`src/app/education/page.tsx`), `EducationContent.tsx`, `education.json`, and `education.ts`.
    - Deleted legacy `/skills` orbital constellation page (`src/app/skills/page.tsx`), `SkillsContent.tsx`, `orbitalSkills.json`, `skills.json`, and `skills.ts`.
    - Configured server-level redirects in `next.config.ts` mapping `/skills` -> `/#skills` and `/education` -> `/about`.
    - Removed `/skills` and `/education` from `src/app/sitemap.ts`.
  - Updated `AboutContent.tsx` highlights:
    - Retargeted secondary links to active homepage showcases (`/#projects`, `/#experience`, `/#skills`).
  - Updated `Footer.tsx`:
    - Updated "Skills Constellation" link to "Technologies & Skills" pointing directly to `/#skills`.
  - Cleaned dead code and boilerplate assets:
    - Removed unused CSS rules (`.project-card`, `.card-netram`, `.card-plantexa`, `.card-prodexa`, `.card-aptixa`, `.fun-card`, `.t-body-fun`, custom card color variables) and duplicate `@media (prefers-reduced-motion: reduce)` block in `globals.css`.
    - Removed dead backward-compatibility exports (`coreSocialLinks`, `optionalSocialLinks`) from `contact.ts`.
    - Deleted unused proxy export `src/data/socialLinks.ts`.
    - Removed duplicate `open-contact-chat` event listener in `ContactChat.tsx`.
    - Removed unused default Next.js starter assets (`public/file.svg`, `public/globe.svg`, `public/window.svg`, and duplicate `src/favicon.ico`).
- Files touched:
  - `src/app/education/page.tsx` (deleted)
  - `src/components/EducationContent.tsx` (deleted)
  - `src/data/education.json` (deleted)
  - `src/data/education.ts` (deleted)
  - `src/app/skills/page.tsx` (deleted)
  - `src/components/SkillsContent.tsx` (deleted)
  - `src/data/orbitalSkills.json` (deleted)
  - `src/data/skills.json` (deleted)
  - `src/data/skills.ts` (deleted)
  - `src/data/socialLinks.ts` (deleted)
  - `src/favicon.ico` (deleted)
  - `public/file.svg` (deleted)
  - `public/globe.svg` (deleted)
  - `public/window.svg` (deleted)
  - `next.config.ts`
  - `src/app/sitemap.ts`
  - `src/app/globals.css`
  - `src/components/AboutContent.tsx`
  - `src/components/Footer.tsx`
  - `src/components/ContactChat.tsx`
  - `src/data/contact.ts`
  - `brain.md`
- Decisions / gotchas:
  - Redirecting `/skills` directly to `/#skills` preserves link equity and browser history while seamlessly showcasing the live, high-performance Marquee stream.
- Open items: None.

### 2026-10-09 — Footer Iterations, Dedicated Experience Pages & Detail Layouts (Summary)
- Earlier iterations across October 2026 refined the visual language:
  - Transitioned project and experience detail views into expansive 2-column architectural layouts (`max-w-[1240px]`, `lg:grid-cols-[380px_1fr]`), eliminating excess whitespace.
  - Created dedicated statically pre-rendered routes `/experience/[id]` and `/projects/[id]` driven by clean JSON stores (`experience.json`, `projects.json`) with zero popups or modals.
  - Streamlined `WorkAndExperience.tsx` on the homepage into unboxed title + narrative summary cards and removed filter tabs.
  - Refined `Footer.tsx` with 2-column editorial structure, direct email CTA button, 6 core social channels (GitHub, LinkedIn, X, YouTube, Instagram, LeetCode), and Back to Top action.
- Open items: None.
