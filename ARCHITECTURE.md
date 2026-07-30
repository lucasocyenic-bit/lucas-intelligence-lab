# Architecture

## Stack

- **Next.js 16** (App Router, `src/` dir, Turbopack) + **TypeScript** (strict)
- **Tailwind CSS v4** — CSS-based theme (`@theme inline` in `globals.css`),
  no `tailwind.config.js`
- **Framer Motion** — UI-level animation (page/section transitions, hover states)
- **GSAP + ScrollTrigger** — scroll-driven sequences (boot sequence, reveals),
  matching the existing Discover Greece signature
- **Three.js / React Three Fiber / drei** — 3D (Knowledge Universe, ambient scenes)
- **Lenis** — smooth scroll
- **Postgres via Supabase** — persistence (agent activity, chat history, knowledge graph)
- **Vercel** — deployment target

## Layering

```
src/app/            routes, layouts, API route handlers
src/components/ui/          design-system primitives (Phase 2)
src/components/layout/      nav, footer, page shell, boot sequence (Phase 3)
src/components/sections/    composed page sections (Phase 3+)
src/components/three/       R3F scenes — always next/dynamic, ssr:false (Phase 8+)
src/lib/ai/          LLM abstraction layer, demo-mode fallback (Phase 6+)
src/lib/db/           typed DB client + queries, demo-mode fallback (Phase 7+)
src/lib/utils/        pure helpers
src/types/             shared TS types across all layers
src/hooks/             custom hooks
src/config/            site config, nav, the five-project registry
reference/              preserved prior work, never imported by the app
```

Rule: components never call an AI provider or DB driver directly — always
through `lib/ai` or `lib/db`, both of which expose the same shape whether a
real key/connection is present or not. This is what makes "runs in demo mode
with zero secrets" true for the whole app, not just individually-patched
features.

## Preserved prior work

`reference/discover-greece-legacy/` — Lucas's existing single-file Discover
Greece site (github.com/lucasocyenic-bit/discover-greece), pulled in verbatim
per the brief's "preserve, don't delete" instruction. It's reference-only and
outside `src/`, so it's never bundled. Phase 5 rebuilds its ideas (marble/gold
Aegean visual identity, shader water hero, tilt cards, magnetic buttons,
Konami egg, travel planner → upgraded into the AI itinerary generator) as
React/R3F components inside this app — see that folder's own README for the
full preserve-list.

## Phase plan (from the brief)

| Phase | Scope | Status |
|---|---|---|
| 1 | Core Next.js application | ✅ this delivery |
| 2 | Global design system | next |
| 3 | Navigation & homepage (incl. boot sequence) | — |
| 4 | Project showcase architecture | — |
| 5 | Discover Greece | — |
| 6 | Lucas AI (digital twin) | — |
| 7 | Autonomous AI Business OS | — |
| 8 | AI Knowledge Universe (3D) | — |
| 9 | Experiment Lab | — |
| 10 | Integration | — |
| 11 | Performance | — |
| 12 | Production deploy | — |

## Performance discipline

3D and any heavy client libs are dynamically imported with `ssr: false` and
loaded on interaction/viewport-entry, never in the initial bundle — enforced
starting with the first component that needs it (Phase 8), verified at each
phase's end via `next build` output.
