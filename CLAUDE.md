# CLAUDE.md — asndWaitlist

Guidance for working in this repo. Facts below were re-derived from the filesystem on **2026-08-13**.

## What this is

`asndWaitlist` is ASND's **public waitlist landing site**: a two-page, backend-free **static Vite MPA** that reuses the ink-blue ASND design language and does exactly one thing — capture a signup and append it as a row to a Google Sheet.

There is **no router, no auth, no `asndCore` coupling, no API layer**. `grep -rn "react-router" src/` is empty; the only `fetch()` in the entire repo is the Apps Script POST at `src/app/pages/landing/WaitlistForm.tsx:102`; no `/v1/` path or asndCore host appears anywhere in `src/`. The only external hosts referenced in source are `instagram.com/asnd` (Footer) and w3.org SVG namespaces.

Scale: 83 tracked files, 5,395 lines under `src/` (22 `.tsx`, 10 `.ts`, 19 `.css`, 2 `.svg` — 53 files). Two commits, both 2026-07-22. Remote `https://github.com/Ascend-Group/asndWaitlist.git`.

## Run it

```bash
npm install
npm run dev        # vite dev server (no pinned port)
npm run build      # vite build -> dist/  (492 modules, ~0.6s, 185 files / 4.7M)
npm run preview    # serve dist/
npm run typecheck  # tsc --noEmit  -- CURRENTLY FAILS, see traps
```

Those are the **only four scripts**. There is no `test`, `lint`, `format`, `eslint`, or `prettier` script, and none of those packages are in `package.json` or `node_modules`.

To exercise the real submission path locally, `cp .env.example .env` and fill in the two vars (see below) after following `apps-script/README.md`.

Toolchain as installed: vite 6.3.5, typescript 6.0.3, tailwindcss + @tailwindcss/vite 4.1.12, @vitejs/plugin-react 4.7.0, react/react-dom 18.3.1, motion 12.23.24, tw-animate-css 1.3.8, six `@fontsource/*` packages at 5.3.0.

## Layout

| Path | What it is |
|---|---|
| `index.html` → `src/entry-landing.tsx` → `src/app/pages/Landing.tsx` | Nav → Hero → WhoItsFor → TheAsk → Footer, wrapped in `.asnd-ink-root` |
| `about.html` → `src/entry-about.tsx` → `src/app/pages/About.tsx` | intro header → WhyNow → Cost → Solution → HowItWorks → Compare → CreatorWall → TheAsk → Footer |
| `src/boot.ts` | Shared by both entries: 18 `@fontsource` CSS imports, `styles/index.css`, and injects the two texture SVG URLs as `--tex-swirl-ink` / `--tex-swirl-light` custom properties |
| `src/app/pages/landing/WaitlistForm.tsx` | The only stateful component and the only network call |
| `src/v2/` | Forked design-system layer: `components/` (Button, FooterWordmark), `motion/` (Reveal, RevealGroup, CountUp + 4 hooks), `sections/` (Nav, Footer) |
| `src/lib/asset.ts` | `asset('stock/x.jpg')` → prefixes `import.meta.env.BASE_URL`. Use for every `public/` reference |
| `src/styles/` | `index.css` → `tailwind.css` (4L) → `theme.css` (688L) → `asnd-v2/theme.css` (99L) → `asnd-v2/base.css` (95L) |
| `apps-script/Code.gs` + `README.md` | The Google Apps Script Web App backend and its 5-minute setup runbook |
| `public/` | 17 files only: 15 stock jpgs, `brand/asnd-logo-white.png`, `favicon.svg`. **No `public/fonts/`** — all type comes from `@fontsource` and is bundled/hashed by Vite |
| `docs/superpowers/specs/2026-07-22-asnd-waitlist-design.md` | The original design + fork-map record (132L; partly stale — see traps) |

Cross-page navigation is plain `<a href="about.html">` / `<a href="index.html#waitlist">` against real files, so no static host needs SPA-404 rewriting. The `#waitlist` anchor lives at `src/app/pages/landing/Hero.tsx:50`.

Tailwind v4 is configured **in CSS, not a config file** — `src/styles/tailwind.css` is `@import 'tailwindcss' source(none); @source '../**/*.{js,ts,jsx,tsx}'; @import 'tw-animate-css';`. There is no `tailwind.config.*`.

## The submission path

`WaitlistForm` captures **8 user fields**: `role` (creator | brand | agency; required, defaults to `creator`, preselectable via `?role=`), `first_name`, `last_name`, `email` (required, regex-validated) plus optional `organisation`, `designation`, `whatsapp`, `instagram`. A hidden `company` honeypot silently absorbs bots client-side.

It POSTs JSON with `Content-Type: text/plain;charset=utf-8` — deliberately a CORS **simple request**, so there is no preflight for Apps Script to fail. The body adds `token`, `source: 'waitlist-web'`, and a client `submitted_at` ISO timestamp.

`apps-script/Code.gs` is a **Sheet-bound Web App**: `doPost()` checks a `TOKEN` script property, requires a non-empty email, dedupes case-insensitively against column 5, and `appendRow()`s **11 columns** — `submitted_at, role, first_name, last_name, email, organisation, designation, whatsapp, instagram, source, received_at` — into a `Waitlist` tab it auto-creates. `doGet()` is a health check returning `{"ok":true,"service":"asnd-waitlist"}`; open the `/exec` URL in a browser to confirm a deployment is live.

Two build-time env vars, both declared in `src/vite-env.d.ts`:

| Var | Meaning |
|---|---|
| `VITE_WAITLIST_ENDPOINT` | The Apps Script `/exec` URL. No default. |
| `VITE_WAITLIST_TOKEN` | Shared string; must equal the `TOKEN` script property in the Apps Script. `.env.example` ships `asnd-waitlist`. |

`.env` is gitignored (`.env`, `.env.*`, `!.env.example`); `.env.example` is committed; no `.env` exists in the working copy.

## Deploy

`.github/workflows/deploy.yml` ("Deploy to GitHub Pages") on **push to `main`** + `workflow_dispatch`, concurrency group `pages` with cancel-in-progress. Build job: `actions/checkout@v4` → `actions/setup-node@v4` (node 20, npm cache) → `npm ci` → `npm run build` with the two `VITE_*` values from repo Secrets → `actions/upload-pages-artifact@v3` (`path: dist`). Deploy job: `actions/deploy-pages@v4` into the `github-pages` environment. Permissions `contents: read`, `pages: write`, `id-token: write`.

`README.md` also documents **Cloudflare Pages** as an alternative (build `npm run build`, output `dist`, same two vars), and the design spec calls it the primary target — but **no Cloudflare config is committed**, so GitHub Pages is the only automated path.

## Traps

**`npm run typecheck` fails right now, and nothing in CI notices.** Running it exits 2 with a single error: `tsconfig.json(21,5): error TS5101: Option 'baseUrl' is deprecated and will stop functioning in TypeScript 7.0.` — devDependency `typescript` is `^6.0.3` and 6.0.3 is what resolved. The deploy workflow never runs typecheck, so the site still ships. Fix by adding `"ignoreDeprecations": "6.0"`, or by deleting `baseUrl` **and** rewriting the mapping to a relative target (`"paths": { "@/*": ["./src/*"] }`) — dropping `baseUrl` alone just swaps TS5101 for TS5090, because a non-relative `paths` target is illegal without it. Do not read "a typecheck script exists" as "types are clean".

**Nothing guards this repo except "does `vite build` succeed".** No tests, no lint, no typecheck in CI — the build job is checkout / setup-node / `npm ci` / `npm run build` / upload-artifact and nothing else. Any correctness regression reaches GitHub Pages on push to `main`. If you change behaviour here, you verify it by hand.

**A deploy missing `VITE_WAITLIST_ENDPOINT` silently discards every signup while looking perfectly healthy.** `WaitlistForm.tsx:89-96` short-circuits when the var is empty: it emits one `console.warn` and then `setStatus('success')`, rendering the full "You're on the list." confirmation. The user sees success, the Sheet gets nothing, and the workflow's own comment ("The site works without them, but submissions won't be stored") means the build stays green. After any Pages deploy, confirm a real test submission lands as a row.

**A token mismatch produces the same green lie.** The fetch response is never inspected — `WaitlistForm.tsx:102-107` does `await fetch(...)` then `setStatus('success')`, with no `res.ok` and no body parse. Apps Script answers HTTP **200** with `{ok:false,error:'unauthorized'}` on a token mismatch and `{ok:false,error:'email_required'}` on a bad payload, so a `VITE_WAITLIST_TOKEN` ≠ script-property `TOKEN` drift is invisible from the browser. The only detection is looking at the Sheet.

**Both `VITE_*` values are PUBLIC despite being stored as GitHub Actions Secrets.** Vite inlines them into the shipped JS at build time; anyone can read the `/exec` URL and token out of the bundle and POST rows directly. `.env.example` says so at the top. Never put anything genuinely secret behind a `VITE_` prefix here — the actual defences are the honeypot (client-side only) and `Code.gs`'s own validation.

**`base: './'` in `vite.config.ts` is load-bearing and breaks only in production.** The site lives under the `/asndWaitlist/` Pages project subpath, so every asset URL must be relative. Switching to `'/'`, hardcoding a leading-slash `public/` path instead of calling `asset()` from `src/lib/asset.ts`, or writing a raw `url('/…')` in CSS instead of using the `--tex-swirl-*` variables set in `boot.ts` all work fine on `vite dev` at localhost root and break every asset on Pages.

**This is a one-way snapshot fork of `asndFrontend`, and the source has since been restructured.** Some files were copied verbatim (`src/v2/motion/tokens.ts`, `src/v2/motion/variants.ts`, `src/v2/components/FooterWordmark.tsx` are 0-diff); others were rewritten slim to strip session/live-search/app-routes (`Nav.tsx` is 44 lines here vs 666 in asndFrontend — its docblock records that the session-aware branch was removed). ⚠ **`asndFrontend` is currently on branch `v2/frontend-port`** (HEAD 2026-08-05) where **`src/v2/` no longer exists** — the tree was flattened to `src/motion/`, `src/components/`, `src/sections/`. The design spec's fork map still cites `v2/…` source paths that no longer resolve. Any "sync the design system" instinct now requires a deliberate manual path remap; nothing propagates automatically in either direction.

**`tsconfig.json` only includes `["src"]`**, so `index.html`, `about.html`, and `vite.config.ts` are outside typechecking entirely. A typo in an entry-point `script src` or a broken rollup input surfaces only at build or run time.

**Don't reuse `Code.gs` for high-volume ingestion.** `emailExists()` reads the whole email column (`getRange(2, 5, last-1, 1).getValues()`) and linear-scans it on every single POST — O(rows) per submission, sharing the Apps Script quota. Fine at waitlist scale, wrong for anything larger.

**`dist/` is gitignored but a stale built copy exists on disk.** It is regenerated by any `npm run build`; it is not what is deployed. Pages always rebuilds from source with the repo Secrets.

## Repo state

Branch **`main`**, working tree clean, exactly 2 commits — `f424f5a` (initial) and `66bb039` "Capture applying-as role + optional organisation and designation", both 2026-07-22. Treat the repo as frozen: the role/organisation/designation commit updated `Code.gs`, the spec, and the form, but **not `README.md`**, which still describes the older 5-field payload.

The workspace `CLAUDE.md`'s `asndWaitlist` row is accurate on shape but omits the broken typecheck and the two env var names; prefer this file.
