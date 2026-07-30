# Discover Greece — existing implementation (preserved)

Source: https://github.com/lucasocyenic-bit/discover-greece
Live: https://lucasocyenic-bit.github.io/discover-greece/

This is Lucas's existing "Discover Greece" concept site: a single self-contained
`index.html` (~2,070 lines), vanilla HTML/CSS/JS, no build step. The full file
isn't duplicated in this repo (it's already public at the source above, and
was delivered separately as part of the Phase 1 zip) — this README is the
pointer + preserve-list so Phase 5 knows exactly what to port and why.

**Do not import or serve that file directly from the Next.js app.** Phase 5
rebuilds its ideas as React/R3F components inside the design system; it does
not iframe or copy-paste the file wholesale.

## What to preserve from it (Phase 5 scope)

- **Visual identity** — marble, gold, deep navy, Aegean blue; Playfair Display
  + Cormorant Garamond + Inter type pairing. This is Discover Greece's own
  sub-identity within the lab, distinct from the lab's general dark/glass
  system — keep it, don't flatten it to match the other four experiences.
- **Signature interactions** — Three.js shader-based water hero (mouse-reactive),
  GSAP ScrollTrigger reveals, custom cursor w/ hover + ripple (off on touch),
  3D tilt destination cards, magnetic buttons, scroll-snap beach gallery,
  FAQ accordion, Konami code easter egg (↑↑↓↓←→←→BA).
- **Structure to extend** — becomes the base for the interactive map,
  destination selection, and the new AI trip planner (structured itinerary
  output) called for in the brief; the existing "interactive travel planner
  form" is the anchor point to upgrade into that AI planner.
- **Accessibility already in place** — respects `prefers-reduced-motion`,
  has a `<noscript>` fallback — carry both forward.
