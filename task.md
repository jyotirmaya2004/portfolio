# Task — Mobile Redesign · Gaming Level Timeline

> **Goal:** Redesign Skills and Projects pages with a gaming level-progression timeline style.
> No cards. No neon/glowing lights. Clean RPG chapter map, level unlock journey, game progress screen.
> Status: Completed.

---

## Phase 0 — Cleanup

- [x] **Remove Footer** — Delete `Footer.tsx` and remove all imports/references
  - [x] Verify Footer removed from `src/app/layout.tsx`
  - [x] Delete `src/components/Footer.tsx`

---

## Phase 1 — Skills Page → Gaming Level Timeline

> Replaced card grid with a vertical level-progression timeline — clean RPG skill-tree progression without neon or glow.

- [x] **Rewrite `SkillsContent.tsx`**
  - [x] **Layout**: Single vertical scrollable timeline (mobile-first & desktop responsive)
  - [x] **Chapter markers**: Each category is a chapter sector (e.g. `CHAPTER I · Languages`) with clean HUD separator line
  - [x] **Skill nodes on the timeline path**:
    - [x] Vertical connecting rail running continuously down the left side
    - [x] Checkpoint node on the rail for each skill
    - [x] Skill icon in clean geometric container + bold skill name
    - [x] Level indicator badge (`LVL 3 · MASTERED`, `LVL 2 · PROFICIENT`, `LVL 1 · ACQUIRED`)
    - [x] Segmented XP proficiency bar filled using existing theme accent token
  - [x] **Sector transitions**: `▼ NEXT SECTOR ▼` markers between chapters
  - [x] **Top HUD bar**: Live summary showing unlocked count, max tier count, and character class

- [x] **Update `src/data/skills.ts`**
  - [x] Added `chapter` and `level` (1 | 2 | 3) to skill categories and items

---

## Phase 2 — Projects Page → Gaming Level Timeline

> Replaced cards with a vertical mission level timeline — no cards, clean quest log format.

- [x] **Rewrite `ProjectsContent.tsx`**
  - [x] **Layout**: Vertical scrollable level timeline — no card wrappers or card grids
  - [x] **Timeline rail**: Continuous vertical line with circular numbered checkpoints (`01`, `02`, `03`, `04`)
  - [x] **Mission entries**:
    - [x] Level marker & classification: `LEVEL 01 // SMART INSPECTION & AI MONITORING PLATFORM`
    - [x] Status badge: `[DEPLOYED]` / `[COMPLETED]`
    - [x] Mission briefing / description text
    - [x] Tech inventory: Clean inline dot-separated tags (`Next.js · TypeScript · PostgreSQL · WebRTC`) — no pills/cards
    - [x] Action links: Clean textual links `[ LIVE TRANSMISSION ]` and `[ SOURCE REPO ]`
  - [x] **Upcoming campaign marker**: `LEVEL 05 // UPCOMING MISSION` pending node at the end of the timeline
  - [x] **Top HUD bar**: Active campaign status and completed level count

- [x] **Update `src/data/projects.ts`**
  - [x] Added `level`, `classification`, and `status` fields per project

---

## Phase 3 — Mobile Navigation & Layout

- [x] **Mobile bottom navigation removed** — No bottom bar; mobile navigation uses a clean top navbar with a simple hamburger drawer
- [x] **Simplified Hamburger Menu** — Clean, lightweight mobile menu:
  - Header with title and close button (removed large avatar photo, background pattern, and bulky card elements)
  - Clean list of direct links (Home, About, Projects, Experience, Skills, Education, Contact)
  - Inline footer links (GitHub, LinkedIn, Email)
- [x] **ContactChat** — Floating trigger button placed in bottom-right corner (`bottom-4 right-4 sm:bottom-5 sm:right-5`)
- [x] **No footer** anywhere across the entire website

---

## Phase 4 — QA & Verification

- [x] **Type check & Next.js production build** — `npm run build` compiled 100% cleanly (exit code 0)
- [x] **Dark & light mode compatibility** — uses CSS theme variables (`--bg`, `--fg`, `--border`, `--accent`)
- [x] **Mobile-first ergonomics** — left-anchored timeline rails ensure readable, comfortable scanning on small screens
