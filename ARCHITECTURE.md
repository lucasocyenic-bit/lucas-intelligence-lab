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

## Design system (Phase 2)

The brief's own three adjectives — *lab*, *instrumentation*, *sophisticated* —
are the grounding, not a generic "dark AI SaaS" look. Direction: an
instrument panel, not a landing page. Structural devices (the eyebrow label,
the telemetry rule) always carry a real value, never a decorative index —
see `TelemetryRule`'s doc comment.

**Color** — `--void #05070a` (page bg) / `--surface #0d1219` +
`--surface-2 #131a24` (glass panels, two elevations) / `--line #202834` +
`--line-strong #2c3644` (hairline borders) / `--ink #e8eaed` +
`--ink-muted #8991a0` + `--ink-faint #565f6c` (text hierarchy) /
`--signal #7fd8c8` (cool teal — AI/digital activity, the default accent) /
`--flag #c99a5b` (warm brass — rare, reserved for the single most important
action on a screen). Two accents instead of one, so the palette can express
"routine" vs. "primary" the way real instrumentation does, without reaching
for saturated neon.

**Type** — Bricolage Grotesque (display, headlines only, used sparingly) /
IBM Plex Sans (body/UI) / IBM Plex Mono (telemetry: eyebrows, status,
data readouts). All three self-hosted via `@fontsource*` packages — no
`next/font/google`, so there's zero external network call at build or
runtime.

**Shape & light** — small radii only (3/5/8px — "machined," not bubbly);
no drop shadows, an inset highlight instead (`--shadow-panel`); glow is a
tight halo reserved for hover/focus on interactive elements
(`--shadow-glow-signal` / `-flag`), never ambient.

**Motion** — one shared vocabulary in `src/lib/motion.ts` so Framer Motion
and GSAP never drift apart: `easeLab` (sharp settle, no overshoot) by
default, `easeSoft` only for large panel reveals.

**Primitives** (`src/components/ui/`) — `Panel` (the glass surface
everything sits on), `Button` (bordered glass, never solid-fill; `primary`
= brass, `signal` = teal, `ghost` = neutral — reserve `primary` for one
action per screen), `Eyebrow` (mono uppercase label), `StatusDot` (LED +
optional pulse, for genuinely live states only), `TelemetryRule` (hairline
section divider with a real label/readout — the signature device).

Preview everything at `/design-system` in dev (hard-404s in production,
not linked from nav).

## Phase plan (from the brief)

| Phase | Scope | Status |
|---|---|---|
| 1 | Core Next.js application | ✅ |
| 2 | Global design system | ✅ |
| 3 | Navigation & homepage (incl. boot sequence) | next |
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
