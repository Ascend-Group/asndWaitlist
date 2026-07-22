# asndWaitlist

The public **waitlist landing site** for [ASND](https://github.com/Ascend-Group) —
a lightweight, static fork of the `asndFrontend` landing, built to link from the
Instagram bio and collect prospective users into a Google Sheet.

It reuses ASND's design system verbatim (ink-blue palette, Cormorant / Hanken /
Poiret type, engraved textures) but strips every backend-coupled interaction: no
auth, no live search, no real profiles. The only server dependency is the form
endpoint (a Google Apps Script).

- **Landing** (`index.html`) — hero reframed around the waitlist, with the
  capture form above the fold; who it's for; a closing ask.
- **About** (`about.html`) — the full ASND story, copy unchanged.

## Stack

Vite + React + Motion, Tailwind v4, built as a **2-page static MPA** (two real
HTML files, no client router). Output is a plain static bundle that hosts
anywhere. Asset URLs are base-relative, so the same build works at a domain root
**or** under a project subpath like `…github.io/asndWaitlist/`.

## Develop

```bash
npm install
npm run dev        # vite dev server
npm run build      # -> dist/  (static)
npm run preview    # serve the built bundle
npm run typecheck  # tsc --noEmit
```

## Capture form → Google Sheet

Submissions (first name, last name, email, WhatsApp, Instagram) POST to a Google
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
`asndFrontend`. The components under `src/v2`, `src/app/pages/landing`, and
`src/app/pages/about` are a snapshot fork of the app's landing/About — kept
lightweight and backend-free. When ASND opens publicly, retire this site and
point the bio at the real app.

Design record: [`docs/superpowers/specs/2026-07-22-asnd-waitlist-design.md`](./docs/superpowers/specs/2026-07-22-asnd-waitlist-design.md).
