/**
 * Shared motion vocabulary for the whole lab — one set of durations and
 * eases so Framer Motion (React-driven UI transitions) and GSAP
 * (scroll-driven sequences, boot sequence) never drift out of sync.
 *
 * The lab's motion personality is precise and a little mechanical —
 * closer to an instrument needle settling than a bouncy consumer-app
 * spring. Reach for `easeLab` by default; only use `easeSoft` where a
 * gentler, more organic settle genuinely reads better (e.g. large
 * panel reveals), and never chain more than one or two motions per
 * moment — see the "restraint" note in ARCHITECTURE.md's design section.
 */

export const duration = {
  fast: 0.18,
  base: 0.32,
  slow: 0.6,
} as const;

// Cubic-bezier pairs usable directly by both Framer Motion (`ease` prop)
// and GSAP (`ease: "cubic-bezier(...)"`).
export const easeLab = [0.16, 1, 0.3, 1] as const; // sharp settle, no overshoot
export const easeSoft = [0.22, 1, 0.36, 1] as const; // gentler settle

export const easeLabCss = "cubic-bezier(0.16, 1, 0.3, 1)";
export const easeSoftCss = "cubic-bezier(0.22, 1, 0.36, 1)";

/** Standard Framer Motion fade/rise-in, for reveal-on-mount and
 * intersection-triggered reveals alike. */
export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: easeLab },
  },
} as const;
