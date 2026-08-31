# Brain — Portfolio Architecture & Design Knowledge

> Living document capturing design decisions, technical patterns, component specs, and lessons learned for the portfolio build.

---

## 1. Design Philosophy

The portfolio follows a **Minimalist-Luxury** editorial aesthetic:

1. **Whitespace is content.** `section-gap: 160px` is intentional — it forces focus.
2. **Typography as graphic design.** Hero `h1` at 120px IS a graphic element.
3. **Zero rounded corners.** All containers, buttons, cards use `border-radius: 0`.
4. **Gold is precious.** `#C6A15B` used for stats and highlights only — never for large surfaces.
5. **Depth without shadow.** No `box-shadow`. Depth comes from tonal layering.

---

## 2. Color System

```
--color-bg:           #0B0B0C   /* Deep charcoal — main background */
--color-ivory:        #F5F2EA   /* Warm ivory — light sections */
--color-accent:       #C6A15B   /* Champagne gold — highlights only */
--color-text:         #E4E2E1   /* Light warm white — body text */
--color-text-muted:   #C7C6CA   /* Muted grey — secondary text */
--surface:            #131313
--surface-low:        #1B1C1C
--surface-mid:        #1F2020
--surface-high:       #2A2A2A
--outline:            #919094
--outline-variant:    #46464A
```

### Dual-Theme Section Flow
- Hero → Dark | About → Dark | Selected Work → Dark
- Experience → **Light (ivory)** | Skills → Dark | Contact → Dark

---

## 3. Typography System

```
Playfair Display — Display & Headlines (editorial gravitas)
Inter           — Body & Labels (neutral, legible)

hero-display:   700 / 120px / 110px lh / -0.04em tracking
headline-lg:    700 /  64px /  72px lh / -0.01em tracking
headline-md:    600 /  32px /  40px lh
body-lg:        400 /  20px /  32px lh
body-md:        400 /  16px /  24px lh
label-caps:     600 /  12px /  16px lh / 0.1em tracking / UPPERCASE
```

---

## 4. Layout System

- Desktop: 12-column fluid grid, `gap: 32px`
- Mobile: 4-column grid, `gap: 16px`
- Margins: `80px` desktop / `24px` mobile
- `section-gap`: `160px` (mobile: `80px`)
- Content uses offset columns for editorial asymmetry

---

## 5. Component Specs

### Navigation
- Fixed, `z-50`, glassmorphism: `bg: rgba(19,19,19,0.8)`, `backdrop-filter: blur(12px)`
- Nav links: `.label-caps` style. Hover = 1px gold underline expands from center.

### Buttons
- Primary: solid gold bg `#C6A15B`, charcoal text, 0 radius
- Ghost: 1px gold border, transparent bg
- Hover: fill animation left→right via `::before` pseudo-element

### Project Cards
- Grayscale image → color on hover (`filter: grayscale`)
- Number label "01 //" in gold. Text outside image, never overlaid.

### Custom Cursor
- Gold ring: `20×20px`, `border: 1px solid #C6A15B`, `border-radius: 50%`
- Follows mouse with lerp lag. Expands to `40×40px` on hover.
- Hidden on mobile/touch.

---

## 6. Animation Architecture

### GSAP Reveal Pattern (used everywhere)
```html
<div class="reveal-text-container">   <!-- overflow: hidden -->
  <span class="reveal-text-inner">Text</span>  <!-- translateY(100%) → 0 -->
</div>
```

### GSAP Init Order
1. Hero text → stagger reveal on page load (no ScrollTrigger)
2. Nav items → stagger on load
3. All `.gsap-reveal-text` → ScrollTrigger reveals
4. Project cards → fade + translateY on scroll
5. Stats → number count-up on scroll

### Three.js Neural Mesh (Hero)
- `IcosahedronGeometry(2, 1)` wireframe in gold + point cloud overlay
- Mouse interaction: `lerp` group rotation. Auto-rotation: 0.002 y, 0.001 x.
- Right 60% of viewport on desktop; full width on mobile.

### WebGL Grain Shader (Background)
- Fixed canvas, `z-index: -2`, `pointer-events: none`
- Base: near-black `(0.043, 0.043, 0.047)` + subtle gold sine noise
- Uniforms: `u_time`, `u_resolution`, `u_mouse`

---

## 7. Section Architecture

| Section | Layout | Key Elements |
|---|---|---|
| Hero | `min-h: 100vh`, 12-col | Label chip, h1 (2 lines staggered), subheading, 2 CTAs, 3D scene (right 60%) |
| About | `py-section-gap`, 12-col | "About" label (col 3), editorial headline (col 4–11), 2×2 stats grid with gold numbers |
| Selected Work | alternating left/right | Per project: number, title, desc, tags, "View Case Study →" |
| Experience | Light ivory bg | Vertical timeline, role/company/date/description |
| Skills | Dark bg | Clustered by domain: AI/ML, Backend, Frontend, Cloud |
| Contact | Dark bg | Hero-size CTA text, email button, social footer links |

---

## 8. File Responsibility Map

| File | Responsibility |
|---|---|
| `index.html` | Semantic structure, CDN links |
| `css/tokens.css` | CSS custom properties (colors, spacing, type) |
| `css/components.css` | Nav, buttons, cards, tags, cursor, form |
| `css/animations.css` | `.reveal-text-container` pattern, keyframes |
| `js/grain-shader.js` | WebGL canvas, GLSL shaders, render loop |
| `js/threejs-scene.js` | Three.js scene, mesh, lights, mouse |
| `js/gsap-animations.js` | GSAP + ScrollTrigger reveals |
| `js/cursor.js` | Gold ring cursor, hover states |
| `js/main.js` | Bootstrap all modules |

---

## 9. Performance Notes

- Pixel ratio capped at `Math.min(dpr, 2)`
- `will-change: transform` on animated elements
- Project images: `loading="lazy"`
- Fonts: `preconnect` before stylesheet
- No framework — zero bundle overhead
- Grain canvas fixed in background, no scroll repaints

---

## 10. Known Decisions & Trade-offs

| Decision | Rationale |
|---|---|
| No build step | Zero complexity. Trade-off: no tree-shaking. |
| CDN dependencies | Easy local dev. Trade-off: CDN uptime dependency. |
| Pure CSS over Tailwind | Full design token control. Original stitch used Tailwind. |
| `mix-blend-mode: difference` on hero h1 | Dramatic invert effect against 3D scene. |
| No React/Next.js | Static content — framework is over-engineering here. |
