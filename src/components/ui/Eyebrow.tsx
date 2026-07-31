import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type EyebrowTone = "muted" | "signal" | "flag";

const toneClass: Record<EyebrowTone, string> = {
  muted: "text-ink-muted",
  signal: "text-signal",
  flag: "text-flag",
};

interface EyebrowProps extends HTMLAttributes<HTMLParagraphElement> {
  tone?: EyebrowTone;
}

/**
 * Small mono, uppercase, wide-tracked label — the "telemetry readout"
 * treatment used for section labels, nav items, and status text across
 * the lab. Not a heading; pair it above an actual heading.
 */
export function Eyebrow({
  tone = "muted",
  className,
  children,
  ...props
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] uppercase tracking-eyebrow",
        toneClass[tone],
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
