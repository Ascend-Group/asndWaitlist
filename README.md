# asndWaitlist

The official public **waitlist landing site** for [ASND](https://github.com/Ascend-Group) — a high-fidelity, fully responsive static marketing landing site designed to capture prospective creators, brands, and agencies into a Google Sheet.

- **Production URL**: [https://ascend-group.github.io/asndWaitlist/](https://ascend-group.github.io/asndWaitlist/)
- **Target Google Sheet**: [Waitlist Sheet](https://docs.google.com/spreadsheets/d/1v2C0wsKV0bdCR31XeVSRb35TU7UaDO-hLMRPH4UM7ws/edit?gid=0#gid=0)
- **Active Apps Script Web App**: `https://script.google.com/macros/s/AKfycbxW04H83vWwRjZggv1d7y5dZFPCpEP-v5vM-9P6S5NL76KCYE2WDqbS6PjNZaE3INWTIw/exec`

---

## Features

- **Multi-Device Responsive Support**:
  - **Mobile Phones** (`< 768px`, tested on iPhone SE 375px, iPhone 14/15/16 390px, iPhone Pro Max 428px):
    - Full-width touch-friendly form cards with comfortable tap targets ($\ge 44\text{px}$).
    - Sleek mobile navigation bar with quick "Apply for Beta" CTA pill and responsive hamburger menu drawer.
    - Responsive "Designed for" tab selector and fluid category cards.
    - Zero horizontal page overflow across all viewports.
  - **Tablets** (`768px - 1199px`, tested on iPad Mini 768px, iPad Air 820px, iPad Pro 1024px):
    - Balanced vertical flow with centered form cards and high-readability typography.
    - Touch-optimized tab controls and fluid image rendering.
  - **Desktops** ($\ge 1200\text{px}$, tested on 1440px and 1920px displays):
    - Premium high-fidelity split layout with live marquee, interactive tabs, and side-by-side testimonial vouching.

- **Interactive Country Picker & Phone Validation**:
  - Searchable country selector supporting international dial codes with flag icons.
  - Suggestion format `xxxxxxxxxx` or `xxx-xxx-xxxx`.
  - Automatically formats and stores phone numbers as `+<countryCode> <phoneNumber>` (e.g. `+1 5854142745`) in Google Sheets.

- **Standalone & Self-Contained**:
  - Decoupled from Framer cloud hosting.
  - All fonts, assets, and images are served locally and bundled via Vite with relative paths (`./`) compatible with GitHub Pages subpath deployment.

---

## Tech Stack

- **Bundler**: Vite 6
- **Type Checker**: TypeScript (`tsc --noEmit`)
- **Backend / Storage**: Google Sheets via Google Apps Script Web App (`Code.gs`)
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`)

---

## Development

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:5173/)
npm run dev

# Run TypeScript type check
npm run typecheck

# Build static bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## Form Capture & Google Sheet Sync

Form submissions capture:
1. `role`: Creator | Brand | Agency
2. `name`: Full Name or Single Name
3. `email`: Required, validated email address
4. `phone`: Stored as `+<countryCode> <phoneNumber>`
5. `link`: Portfolio or Website URL
6. `message`: Project details or inquiry
7. `source`: `"Website Waitlist"`
8. Honeypot anti-spam verification

The backend is managed in [`apps-script/Code.gs`](./apps-script/Code.gs). See [`apps-script/README.md`](./apps-script/README.md) for deployment instructions.

---

## Deployment

Deployments are automated through GitHub Actions on push to `main`:
- Workflow file: `.github/workflows/deploy.yml`
- Publishes `./dist` to GitHub Pages.
- **Rule**: Always review and verify output locally across screen sizes before pushing to `main`.
