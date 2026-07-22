# asndWaitlist — design spec

**Date:** 2026-07-22 · **Status:** approved (design), building
**Owner:** Anurag · **Repo:** `asndWaitlist/` (independent git repo inside the ASND workspace)

## Goal

A lightweight, near-$0 public **waitlist landing site** for ASND, separate from
`asndFrontend`, to link from the Instagram bio. It reuses the existing ASND
landing/About *look and copy* (ink-blue palette, self-hosted display fonts, hero
structure) but strips every backend-coupled interaction. It captures prospective
users into a Google Sheet the founders own.

**Why it matters:** it lets us start building demand (a waitlist) before the
product is publicly open, at electricity-only cost, without touching the real app.

## Definition of done

- New `asndWaitlist` git repo scaffolded in the workspace, sibling to `asndCore`
  etc., with its own README + this spec committed.
- Two pages, on-brand and pixel-faithful to the current ASND design:
  - **`index.html`** — hero reframed for a waitlist, with the capture form above
    the fold; `WhoItsFor` proof; a closing CTA; Nav + Footer.
  - **`about.html`** — the existing About story, copy unchanged.
- **Capture form** (first name, last name, email required; WhatsApp + Instagram
  optional) POSTs to a Google Apps Script → rows land live in a Google Sheet in
  the founders' Drive, exportable as `.xlsx`.
- Builds to pure static assets; deploys free to **Cloudflare Pages** (primary)
  with **GitHub Pages** config also delivered.
- Fully self-hosted fonts/assets (no third-party font/CDN request except any
  pre-existing `pravatar` tiles on About, which may optionally be swapped).

## Constraints & scope edges

- **No auth, no live search, no real profiles, no backend of our own.** The only
  server dependency is the Apps Script form endpoint.
- Not part of `asndFrontend`; must stay independently buildable and cheap.
- Copy for the About page stays as-is ("about page remains same").

## Architecture

- **Stack:** Vite + React + Motion, mirroring `asndFrontend`'s CSS toolchain
  (Tailwind v4 via `@tailwindcss/vite` + `tw-animate-css`, `@fontsource/*`
  packages + 5 self-hosted Cormorant Garamond 600 `woff2`).
- **2-page static MPA** — two real HTML entry points (`index.html`,
  `about.html`), **no react-router**. Real files ⇒ no SPA-404 handling on any
  static host; the few `<Link to=...>` become plain `<a href="about.html">`.
- **Output:** `dist/` static bundle.

### Fork map (reuse vs. strip vs. new)

| Source (in `asndFrontend`) | Action in `asndWaitlist` |
|---|---|
| `styles/{fonts,tailwind,theme,index}.css`, `styles/asnd-v2/{theme,base}.css` | Copy verbatim (the ink-blue token set + textures) |
| `public/fonts/*` (5 woff2), `public/stock/*`, `favicon.svg`, `texture-swirl-{ink,light}.svg` | Copy (only the assets the kept sections reference) |
| `v2/motion/*` (Reveal, CountUp, useHideOnScroll, useNavCondense, tokens, variants…) | Copy the small motion util dir |
| `v2/components/Button` (+ `Button.css`) and any Eyebrow/wordmark deps actually imported | Copy |
| `v2/sections/Nav` (+ `Nav.css`) | **Rewrite slim:** reuse `Nav.css`, drop `useSession`/`AppNav` branch (no auth). Repoint: brand→`index.html`, About→`about.html`, drop Login, primary CTA "Apply for access" → **"Join the waitlist"** (anchor to `#waitlist`) |
| `v2/sections/Footer` (+ `Footer.css`, `FooterWordmark`) | Copy; repoint links (drop app routes; keep About, Instagram, contact email) |
| `landing/Hero` (+ `Hero.css`), `landing/Reveal` | Copy; **replace `HeroSearchPanel` (the only backend-coupled component) with `WaitlistForm`** in the right slot; reword the CTA/claim block for a waitlist |
| `landing/WhoItsFor` (+ `.css`) | Copy verbatim (static) |
| `landing/Directory` + `DirectoryCard` + `directoryData` + `shortlist` | **Dropped** from the waitlist landing — depends on the Discover `dsc-*` card sheet and links to non-existent `/profile/:id`; keeping it fights the lightweight goal. (Trivially re-addable later.) |
| `landing/TheAsk` (+ `.css`) | Copy; repurpose the closing CTA to scroll to `#waitlist` (no second form) |
| `about/*` — `WhyNow`, `Cost`, `Solution`, `HowItWorks`, `Compare`, `CreatorWall` (+ CSS), `About.css` | Copy verbatim → `about.html`. Optional: swap the 3 `pravatar.cc` tiles in `CreatorWall` for committed portraits to stay fully self-hosted |

### Landing composition (`index.html`)

`Nav` → `Hero` (claim + `WaitlistForm`) → `WhoItsFor` → `TheAsk` (→ `#waitlist`) → `Footer`, wrapped in `.asnd-ink-root`.

### `WaitlistForm` component

- **Fields:** `first_name`, `last_name`, `email` (required, validated);
  `whatsapp` (optional, `+91` hint, digits/`+` only); `instagram` (optional,
  leading `@` normalized). Plus a hidden **honeypot** (`company`) — bots fill it,
  humans don't; a filled honeypot is silently accepted-then-discarded.
- **Submit:** `fetch(VITE_WAITLIST_ENDPOINT, { method:'POST',
  headers:{'Content-Type':'text/plain;charset=utf-8'}, body: JSON.stringify({...,
  token: VITE_WAITLIST_TOKEN, source:'waitlist-web'}) })`. `text/plain` keeps it a
  CORS "simple request" (no preflight) — the standard way to POST to Apps Script
  cross-origin. Optimistic success UI on resolve; inline error with retry on
  network failure.
- **Config:** `VITE_WAITLIST_ENDPOINT` + `VITE_WAITLIST_TOKEN` in `.env`
  (inlined at build — **not secrets**; the token only deters casual abuse, real
  spam defense is the honeypot + server-side validation). `.env.example`
  committed; `.env` gitignored.

### Storage — Google Apps Script + Sheet

`apps-script/Code.gs` (committed, with a setup README):

- `doPost(e)` parses `e.postData.contents` as JSON, validates `token`, ignores
  submissions whose honeypot is filled, and `appendRow([timestamp, first, last,
  email, whatsapp, instagram, source])` to the bound Sheet. Optional
  email-dedupe. Returns a JSON `ContentService` response.
- **Setup:** create a Google Sheet → Extensions → Apps Script → paste `Code.gs`
  → set `TOKEN` script property → Deploy as Web App (execute as *me*, access
  *anyone*) → copy the `/exec` URL into `.env`. Documented step-by-step in
  `apps-script/README.md`.
- Signups appear live in the Sheet; download `.xlsx` anytime. $0, unlimited rows,
  owned by the founders' Google account.

### Hosting & deploy

- **Primary — Cloudflare Pages** (`asnd-waitlist.pages.dev`): root URL, so the
  absolute `/fonts` `/stock` asset paths work unchanged; free, fast CDN, free
  custom domain later. Build: `npm run build`, output `dist/`.
- **Also delivered — GitHub Pages:** a GitHub Actions workflow
  (`.github/workflows/deploy.yml`) building with `base:'/asndWaitlist/'` and
  base-aware asset paths, deploying via `actions/deploy-pages`. Answers "can we
  host on GitHub?" — yes.
- Instagram bio links to whichever is flipped on. Custom domain can be attached
  later with no rebuild.

## Testing / verification

- `npm run build` succeeds; `dist/` contains `index.html` + `about.html` + hashed
  assets; no references to `/v1/`, `services/`, `HeroSearchPanel`, or
  `useSession` remain.
- Local `vite preview`: both pages render on-brand (fonts, ink palette,
  textures), Nav/Footer links resolve between the two pages, hero form validates
  and (against a test Apps Script) writes a row to the Sheet; About page matches
  the app's copy.
- Mobile viewport: hero + form stack cleanly; loads fast (no backend calls).

## Out of scope (YAGNI)

Live search, real member directory/profiles, auth/session, analytics, custom
domain purchase, email autoresponder, admin view of signups (the Sheet is the
admin view).
