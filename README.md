# Lucas // Intelligence Lab

A premium, production-quality personal portfolio ecosystem — a central "lab"
connecting five flagship experiences: Autonomous AI Business OS, Discover
Greece, Lucas AI Digital Twin, AI Knowledge Universe, and Experiment Lab.

See [`ARCHITECTURE.md`](./ARCHITECTURE.md) for the stack, folder layout, and
full phase plan. This repo is being built incrementally, phase by phase —
**Phase 1 (core application) is complete**; see the table in that file for
what's next.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — see below, app runs without it
npm run dev
```

Open http://localhost:3000.

## Environment variables

Every entry in [`.env.example`](./.env.example) is **optional**. The app is
designed to run fully in **demo mode** — AI features fall back to scripted
responses and data-backed features fall back to static demo data — when no
keys are configured. Fill in `.env.local` only for the providers you want to
go live:

- `ANTHROPIC_API_KEY` / `OPENAI_API_KEY` — powers Lucas AI, itinerary
  generation, and agent-activity copy once wired up (Phase 6+)
- `DATABASE_URL` + Supabase vars — persistence for the Business OS demo and
  knowledge graph (Phase 7+)

## Scripts

```bash
npm run dev      # start dev server (Turbopack)
npm run build    # production build
npm run start    # run the production build
npm run lint     # eslint
```

## Deployment

Target platform is **Vercel**:

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Add the environment variables you want live under Project → Settings →
   Environment Variables (see `.env.example`) — omit any you don't have,
   the app degrades to demo mode per-feature.
4. Deploy. No other configuration required.

## Notes for whoever picks this up next (including future-me / another AI)

- Tailwind v4 here is **CSS-based** (`@theme inline` in `src/app/globals.css`) —
  there is no `tailwind.config.js`. Add tokens there, not in a JS config file.
- Components must never call an AI provider or DB driver directly — always
  through `src/lib/ai` / `src/lib/db`, which own the demo-mode fallback. This
  is what keeps "runs with zero secrets" true app-wide.
- 3D (`src/components/three/`) must be dynamically imported with
  `ssr: false` and loaded on interaction/viewport-entry — never in the
  initial bundle.
- `reference/discover-greece-legacy/` is Lucas's existing Discover Greece
  site, preserved verbatim for Phase 5 to port from. It's outside `src/` and
  must never be imported by the app.
