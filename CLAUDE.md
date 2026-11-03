# CLAUDE.md — asndWaitlist

Guidance for working in this repo. Updated in November 2026.

## What this is

`asndWaitlist` is ASND's **public waitlist landing site**: a high-fidelity, fully responsive static web application bundled by Vite and hosted on GitHub Pages (`https://ascend-group.github.io/asndWaitlist/`).

It captures signups across three target roles (**Creators**, **Brands**, **Agencies**) and sends structured submissions to an owned Google Sheet via a Google Apps Script Web App.

## Architecture

- **`index.html`**: The complete landing experience, including responsive media queries, high-fidelity layout, country code selector, role dropdown, mobile navigation drawer, and Apps Script form submission logic.
- **`public/`**:
  - `assets/`: Web fonts and video assets.
  - `images/`: High-resolution visual assets.
  - `framer/`: Standalone client scripts and `countries.js`.
  - `legal/`: Terms & Conditions and Privacy Policy static pages.
- **`apps-script/Code.gs`**: The Google Apps Script Web App backend that validates submissions, formats phone numbers as `+<countryCode> <phoneNumber>`, and appends records into the `Waitlist` tab of the Google Sheet.
- **`.github/workflows/deploy.yml`**: GitHub Actions workflow that builds `dist/` with `npm run build` and deploys to GitHub Pages on pushes to `main`.

## Screen Breakpoints & Multi-Device Support

The UI is engineered to be fully responsive across all device sizes:
1. **Phones (`< 768px`)**:
   - Single-column stacked form fields with minimum 48px touch targets.
   - Header with quick "Apply for Beta" pill button and animated slide-down hamburger drawer.
   - Fluid "Designed for" tab selectors (Creators, Brands, Agencies) and stacked card layouts.
   - `overflow-x: hidden` with zero horizontal scroll overflow on all devices (tested from iPhone SE 375px to iPhone Pro Max 428px).
2. **Tablets (`768px - 1199.98px`)**:
   - Centered vertical layout for the waitlist section with generous breathing room.
   - 2-column input rows for Name/Email and Role/Phone.
   - Fluid typography and responsive marquee tickers.
3. **Desktops (`>= 1200px`)**:
   - High-fidelity split layout with side-by-side testimonial vouching cards and form.
   - Full desktop navigation bar with blur backdrop.

## Toolchain & Commands

```bash
npm install        # Install project dependencies
npm run dev        # Launch Vite development server
npm run build      # Build static bundle to dist/
npm run preview    # Preview dist/ bundle locally
npm run typecheck  # TypeScript type verification (tsc --noEmit)
```

## Form Fields & Submission Contract

The waitlist form captures:
- `role`: Creator | Brand | Agency (required)
- `first_name` & `last_name`: Parsed from the single name field
- `email`: Required, email format validated
- `whatsapp` / phone: Formatted and stored as `+<countryCode> <phoneNumber>`
- `instagram` / link: Portfolio or Website URL
- `message`: Text message / what the user creates or looks for
- `source`: Recorded as `"Website Waitlist"`
- Server-side deduplication against column 5 (Email) in the Sheet.

## Rules & Constraints

- **Relative Paths**: Always maintain `base: './'` in `vite.config.ts` so that assets load properly on GitHub Pages subpaths.
- **Phone Formatting**: Input accepts both `xxxxxxxxxx` and `xxx-xxx-xxxx`; stores in sheet as `+<countryCode> <phoneNumber>`.
- **Review Before Deploy**: Always test responsiveness and verify visual output locally before pushing to `main` or triggering GitHub Actions deployment.
