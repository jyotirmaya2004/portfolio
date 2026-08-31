# Task — Portfolio Build Checklist

> Track progress phase by phase. Mark `[/]` when starting, `[x]` when done.

---

## Phase 1 — Foundation & Structure

- [ ] Initialize project folder structure (`css/`, `js/`, `assets/`, `assets/images/`)
- [ ] Create `index.html` with semantic HTML5 shell (head, meta tags, CDN links)
- [ ] Add SEO meta tags (title, description, OG tags, canonical)
- [ ] Add Google Fonts preconnect + stylesheet (Playfair Display, Inter)
- [ ] Add Material Symbols Outlined CDN link
- [ ] Add Three.js r128 CDN script
- [ ] Add GSAP 3 + ScrollTrigger CDN scripts (defer)
- [ ] Create `css/tokens.css` — all CSS custom properties
  - [ ] Color tokens (bg, ivory, accent, text, surfaces, outlines)
  - [ ] Typography tokens (font-family, size, weight, line-height, tracking)
  - [ ] Spacing tokens (margins, gutter, section-gap, element-gap)
- [ ] Create `css/components.css` — base resets and component scaffolding
- [ ] Create `css/animations.css` — `.reveal-text-container` / `.reveal-text-inner` pattern

---

## Phase 2 — HTML Sections

- [ ] Navigation — Fixed top bar with logo, nav links, theme toggle
- [ ] Hero Section — Label chip, h1 (2-line staggered), subheading, CTA buttons, scroll indicator, Three.js slot
- [ ] About Section — 12-col layout: label + editorial headline + 2x2 stats grid
- [ ] Selected Work Section — Section header, alternating project cards
  - [ ] Project card component: number, title, description, tags, case study link
  - [ ] Fill with real project data
- [ ] Experience Section — Light ivory background, vertical timeline
  - [ ] Internship @ Infosys entry (current)
- [ ] Skills Section — Tech icon/tag grid grouped by domain
  - [ ] AI/ML group: Python, TensorFlow, PyTorch, Scikit-learn, LangChain
  - [ ] Backend group: FastAPI, Node.js, PostgreSQL, Redis, Docker
  - [ ] Frontend group: React, Next.js, TypeScript, Three.js, GSAP
  - [ ] Cloud group: AWS, GCP, Azure, Kubernetes
- [ ] Contact / Footer — Hero-scale CTA text, email button, copyright, social links

---

## Phase 3 — CSS Styling

- [ ] Global styles — body, *, ::selection, scroll-behavior
- [ ] Navigation — glassmorphism, nav link hover (gold underline from center)
- [ ] Hero — full-height, 12-col grid, label chip, h1 uppercase, scroll indicator pulse
- [ ] About — stats grid styling, gold number sizing
- [ ] Project Cards — image grayscale on hover, sharp edges, tag chips
- [ ] Experience Timeline — vertical line, entry layout
- [ ] Skills Grid — tag chips, domain grouping headers
- [ ] Footer — large CTA text, button fill animation, bottom bar
- [ ] Buttons — primary (gold fill) + ghost (border), fill animation ::before
- [ ] Responsive — All sections mobile-first, 4-col grid collapse, adjusted font sizes

---

## Phase 4 — JavaScript & Visual FX

- [ ] `js/grain-shader.js` — WebGL grain background
  - [ ] Canvas init (fixed, z-index: -2, pointer-events: none)
  - [ ] Vertex + Fragment GLSL shaders (near-black base + gold sine noise)
  - [ ] Resize handler (ResizeObserver)
  - [ ] Render loop with u_time, u_resolution, u_mouse uniforms

- [ ] `js/threejs-scene.js` — Three.js neural mesh (hero)
  - [ ] Scene, camera, renderer setup (alpha: true)
  - [ ] IcosahedronGeometry wireframe mesh (gold, opacity 0.3)
  - [ ] IcosahedronGeometry point cloud (ivory, opacity 0.8)
  - [ ] AmbientLight + PointLight (gold)
  - [ ] Mouse interaction (mousemove -> lerp rotation)
  - [ ] Auto-rotation animation loop
  - [ ] Resize handler

- [ ] `js/gsap-animations.js` — Scroll reveal animations
  - [ ] Register ScrollTrigger plugin
  - [ ] Hero text stagger reveal on page load
  - [ ] Nav items reveal on load
  - [ ] Section .gsap-reveal-text ScrollTrigger reveals
  - [ ] Project card stagger animations
  - [ ] Stats counter count-up animation

- [ ] `js/cursor.js` — Custom gold ring cursor
  - [ ] Create cursor DOM element (gold ring, 20x20)
  - [ ] mousemove listener with lerp lag
  - [ ] Hover state (expand to 40x40) on links, buttons, images
  - [ ] Hide cursor on mobile/touch

- [ ] `js/main.js` — Bootstrap all modules in correct init order

---

## Phase 5 — Assets & Content

- [ ] Add real project screenshots to `assets/images/`
- [ ] Write real project descriptions (title, tech stack, summary)
- [ ] Add profile photo (optional)
- [ ] Add downloadable resume PDF to `assets/resume.pdf`
- [ ] Update all social links (GitHub, LinkedIn, Twitter/X)
- [ ] Update email in contact CTA mailto:
- [ ] Generate OG image for social sharing

---

## Phase 6 — Polish & QA

- [ ] Cross-browser test (Chrome, Firefox, Safari)
- [ ] Mobile responsiveness check (375px, 768px, 1440px)
- [ ] Verify WebGL fallback (no error when unavailable)
- [ ] Verify GSAP animations run smoothly (no jank)
- [ ] Lighthouse audit — target: Performance >= 90, Accessibility >= 95
- [ ] Verify all anchor links scroll correctly
- [ ] Test contact email button opens mail client
- [ ] Ensure no console errors in production

---

## Phase 7 — Deployment

- [ ] Choose deployment target (GitHub Pages / Netlify / Vercel)
- [ ] Set up repo on GitHub (jyotirmaya/portfolio)
- [ ] Configure deployment (push-to-deploy or manual)
- [ ] Add custom domain (if available)
- [ ] Verify HTTPS is active
- [ ] Submit sitemap to Google Search Console

---

## Content to Gather

- [ ] Real project list (name, description, tech stack, GitHub/live URL)
- [ ] Internship details (Infosys, role, dates, key contributions)
- [ ] Complete skills list
- [ ] Email address for contact
- [ ] GitHub profile URL
- [ ] LinkedIn profile URL
- [ ] Resume PDF (latest version)
