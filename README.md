# devoct

Studio marketing site — React/R3F frontend + Express backend for the contact intake form.

## Structure
- `client/` — React app (Vite). Pages, 3D scenes (R3F/Three.js), GSAP animations, terminal-style intake UI.
- `server/` — Express API. `/api/intake` validates, rate-limits, then emails + Slack-notifies on new leads. `/api/health` for uptime checks.

## Getting started

```bash
# frontend
cd client
npm install
npm run dev

# backend
cd server
npm install
cp ../.env .env   # fill in SMTP + Slack values
npm run dev
```

## Notes
- `client/public/index.html` is CRA-style; if using Vite as scripted, add a `vite.config.js` setting `root`/`publicDir` or move `index.html` to `client/` root.
- Slack notifications are skipped silently if `SLACK_WEBHOOK_URL` is unset.
