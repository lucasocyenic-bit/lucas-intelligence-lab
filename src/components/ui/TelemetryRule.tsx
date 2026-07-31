import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface TelemetryRuleProps extends HTMLAttributes<HTMLDivElement> {
  /** Left-aligned label, e.g. a section name. */
  label?: string;
  /** Right-aligned readout, e.g. a live count, coordinate, or index —
   * only pass something here when the value is real and meaningful,
   * never a decorative "01/05". */
  readout?: string;
}

/**
 * The lab's signature device: a hairline rule that reads like an
 * instrument baseline, annotated with a label and a real readout
 * rather than a decorative numbered marker. Used between major
 * sections throughout the site so the "measurement" personality of
 * the lab is felt structurally, not just in copy.
 */
export function TelemetryRule({
  label,
  readout,
  className,
  ...props
}: TelemetryRuleProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 text-ink-faint",
        className,
      )}
      {...props}
    >
      {label && (
        <span className="shrink-0 font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
          {label}
        </span>
      )}
      <span
        aria-hidden
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to right, color-mix(in oklab, var(--signal) 45%, transparent), transparent 85%)",
        }}
      />
      {readout && (
        <span className="shrink-0 font-mono text-[11px] tabular-nums text-ink-faint">
          {readout}
        </span>
      )}
    </div>
  );
}
