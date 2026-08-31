# Jyotirmaya Behera — Developer Portfolio

> A premium, editorial-aesthetic developer portfolio with 3D visuals, WebGL grain shaders, GSAP scroll animations, and a minimalist-luxury design language.

---

## 🎯 Overview

A single-page portfolio website for **Jyotirmaya Behera** — an AI/ML & Software Engineer. The site is crafted to feel like a luxury editorial publication: high-contrast dark/light duality, champagne-gold accents, Playfair Display + Inter typography, and a Three.js neural mesh animation in the hero.

**Live demo sections:**
- **Hero** — Full-viewport with 3D animated neural mesh + WebGL grain texture
- **About** — Editorial stats (15+ Projects, 20+ Technologies, 4 Years, 500+ Commits)
- **Selected Work** — Alternating full-width project showcase cards
- **Experience** — Professional timeline
- **Skills** — Technology tag cloud / icon grid
- **Contact / Footer** — CTA + social links

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Structure | Semantic HTML5 |
| Styling | Vanilla CSS (design tokens) |
| Fonts | Google Fonts — Playfair Display, Inter |
| 3D Graphics | Three.js r128 (CDN) |
| Background FX | WebGL grain shader (custom GLSL) |
| Scroll Animations | GSAP 3 + ScrollTrigger |
| Icons | Material Symbols Outlined |
| Cursor FX | Custom gold ring follower cursor |
| Deployment | GitHub Pages / Netlify / Vercel |

---

## 📁 Project Structure

```
portfolio/
├── index.html              # Main entry point
├── css/
│   ├── tokens.css          # Design tokens (colors, spacing, type)
│   ├── components.css      # Reusable component styles
│   └── animations.css      # GSAP utility classes + keyframes
├── js/
│   ├── main.js             # App bootstrap, GSAP init
│   ├── grain-shader.js     # WebGL grain background shader
│   ├── threejs-scene.js    # Three.js neural mesh scene
│   ├── gsap-animations.js  # ScrollTrigger reveal animations
│   └── cursor.js           # Custom follower cursor logic
├── assets/
│   ├── images/             # Project screenshots, profile photo
│   └── resume.pdf          # Downloadable CV
├── docs/                   # Planning documents (PDFs)
├── stitch_jyotirmaya_behera_portfolio_design/  # Design references
└── README.md
```

---

## 🎨 Design System

### Color Palette

| Role | Hex | Usage |
|---|---|---|
| Background | `#0B0B0C` | Primary dark surface |
| Ivory | `#F5F2EA` | Light section backgrounds |
| Accent Gold | `#C6A15B` | Highlights, borders, stats |
| Text Light | `#E4E2E1` | Body copy on dark |
| Text Muted | `#C7C6CA` | Secondary text, nav links |
| Surface Low | `#1B1C1C` | Card backgrounds |

### Typography

| Role | Font | Size | Weight |
|---|---|---|---|
| Hero Display | Playfair Display | 120px | 700 |
| Headline LG | Playfair Display | 64px | 700 |
| Headline MD | Playfair Display | 32px | 600 |
| Body LG | Inter | 20px | 400 |
| Body MD | Inter | 16px | 400 |
| Label Caps | Inter | 12px | 600 (0.1em tracking) |

### Spacing

| Token | Value |
|---|---|
| `--margin-desktop` | 80px |
| `--margin-mobile` | 24px |
| `--gutter` | 32px |
| `--section-gap` | 160px |
| `--element-gap` | 24px |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/jyotirmaya/portfolio.git
cd portfolio

# Open locally (no build step needed for pure HTML/CSS/JS)
# Option 1: VS Code Live Server extension
# Option 2: Python simple server
python3 -m http.server 8080

# Visit http://localhost:8080
```

---

## 📦 Dependencies (CDN)

```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;600&display=swap" rel="stylesheet">

<!-- Icons -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">

<!-- Three.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<!-- GSAP + ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

---

## ✨ Key Features

- **WebGL Grain Shader** — Animated film-grain texture rendered in the background via custom GLSL fragment shader with subtle gold tint
- **Three.js Neural Mesh** — Icosahedron wireframe + point cloud responding to mouse movement in real-time
- **GSAP Scroll Reveals** — Text lines clip-masked and staggered into view as user scrolls
- **Custom Cursor** — Gold ring follower that expands on hover over interactive elements
- **Dual-Tone Sections** — Seamless transitions between deep charcoal and warm ivory backgrounds
- **Zero Build Step** — Pure HTML/CSS/JS; no bundler, no framework, no install required
- **Fully Responsive** — 12-column grid collapses gracefully to 4 columns on mobile

---

## 📋 Sections Roadmap

- [x] Design system & tokens
- [ ] Navigation (fixed, glassmorphic)
- [ ] Hero (grain shader + Three.js + GSAP text reveal)
- [ ] About (editorial stats)
- [ ] Selected Work (alternating project cards)
- [ ] Experience (timeline)
- [ ] Skills (icon grid / tag cloud)
- [ ] Contact / Footer
- [ ] Custom cursor
- [ ] Responsive polish
- [ ] SEO & meta tags
- [ ] Deploy

---

## 📄 License

MIT © 2024 Jyotirmaya Behera
