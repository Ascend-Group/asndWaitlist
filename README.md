# asndWaitlist

The public **waitlist landing site** for [ASND](https://github.com/Ascend-Group) —
a lightweight, static fork of the `asndFrontend` landing, built to link from the
Instagram bio and collect prospective users into a Google Sheet.

The landing uses the current ASNDV2 visual design: its typography, spacing,
motion, imagery, tabbed audience section, and application form are bundled as a
static page. The only server dependency is the form endpoint (a Google Apps
Script).

- **Landing** (`index.html`) — the complete ASNDV2 waitlist experience.

## Stack

Vite + React + Tailwind v4, built as one static page with no client router.
Output is a plain static bundle that hosts anywhere. Asset URLs are
base-relative, so the same build works at a domain root **or** under a project
subpath like `…github.io/asndWaitlist/`.

## Develop

```bash
npm install
npm run dev        # vite dev server
npm run build      # -> dist/  (static)
npm run preview    # serve the built bundle
npm run typecheck  # tsc --noEmit
```

## Capture form → Google Sheet

Submissions (name, email, role, phone, portfolio link) POST to a Google
Apps Script that appends a row to a Sheet you own — free, unlimited, exportable
to `.xlsx`. **Setup is a 5-minute one-time task:** see
[`apps-script/README.md`](./apps-script/README.md).

Then configure the endpoint locally:

```bash
cp .env.example .env
# fill in VITE_WAITLIST_ENDPOINT (the Apps Script /exec URL) and VITE_WAITLIST_TOKEN
```

These values are inlined into the built JS and are **public, not secrets** — the
token only deters casual abuse; real spam defense is the hidden honeypot field +
server-side validation. Until the endpoint is set, the form confirms
optimistically and logs a warning instead of storing anything, so wire it before
going live.

## Deploy

### GitHub Pages (default)

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

1. Repo **Settings → Pages → Source: GitHub Actions**.
2. Repo **Settings → Secrets and variables → Actions** → add
   `VITE_WAITLIST_ENDPOINT` and `VITE_WAITLIST_TOKEN`.
3. Push to `main`. Live at `https://ascend-group.github.io/asndWaitlist/`.

### Cloudflare Pages (alternative, root URL)

Connect the repo in the Cloudflare dashboard — build command `npm run build`,
output dir `dist`, and the same two build-time env vars. Serves at
`asnd-waitlist.pages.dev` (root path); attach a custom domain any time.

## Relationship to the main app

This is a standalone marketing site, intentionally **not** part of
`asndFrontend`. The source in `src/App.tsx` is a snapshot of the current
ASNDV2 design. When ASND opens publicly, retire this site and point the bio at
the real app.

Design record: [`docs/superpowers/specs/2026-07-22-asnd-waitlist-design.md`](./docs/superpowers/specs/2026-07-22-asnd-waitlist-design.md).
