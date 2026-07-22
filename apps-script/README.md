# Waitlist backend — Google Sheet + Apps Script (5 minutes, $0)

Signups from the site are appended as rows to a Google Sheet you own. No server,
no database, no monthly cost, unlimited rows. You can download the Sheet as
`.xlsx` any time.

## One-time setup

1. **Create the Sheet.** Go to <https://sheets.new>, name it e.g.
   `ASND Waitlist`. (The script creates a `Waitlist` tab with headers on first
   submission — you don't need to add columns yourself.)

2. **Add the script.** In that Sheet: **Extensions → Apps Script**. Delete the
   placeholder `myFunction`, then paste the entire contents of
   [`Code.gs`](./Code.gs). Click the **Save** icon.

3. **Set the shared token.** In the Apps Script editor: **Project Settings**
   (the gear) → **Script properties → Add script property**:
   - Property: `TOKEN`
   - Value: pick any string, e.g. `asnd-waitlist-2026`
   This must match `VITE_WAITLIST_TOKEN` in the site's `.env`. (Leave the
   property unset to disable the token check entirely.)

4. **Deploy as a Web App.** **Deploy → New deployment → ⚙ → Web app**:
   - Description: `asnd waitlist`
   - Execute as: **Me**
   - Who has access: **Anyone**
   Click **Deploy**, authorize when prompted (it's your own script — approve the
   Google-account access), and **copy the Web app URL** (ends in `/exec`).

5. **Wire the site.** In the repo root, `cp .env.example .env` and fill in:
   ```ini
   VITE_WAITLIST_ENDPOINT=https://script.google.com/macros/s/AKfy.../exec
   VITE_WAITLIST_TOKEN=asnd-waitlist-2026
   ```
   For GitHub Pages deploys, set the same two as repo **Secrets**
   (Settings → Secrets and variables → Actions) — the deploy workflow reads them
   at build time.

## Verify

- Open the `/exec` URL in a browser → you should see `{"ok":true,"service":"asnd-waitlist"}`.
- Submit the form on the site → a new row appears in the `Waitlist` tab within a
  second or two.

## Notes

- **Duplicates:** a repeat email is accepted but doesn't add a second row.
- **Spam:** the form has a hidden honeypot field; bots that fill it are silently
  dropped client-side. The token blocks casual direct POSTs.
- **Changing the script:** after editing `Code.gs`, **Deploy → Manage
  deployments → Edit → Version: New version → Deploy** (the `/exec` URL stays the
  same).
- **Export:** File → Download → Microsoft Excel (`.xlsx`), or just work in the
  Sheet.
