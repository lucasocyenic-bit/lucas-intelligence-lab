import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type StatusTone = "ok" | "warn" | "error" | "idle";

const dotClass: Record<StatusTone, string> = {
  ok: "bg-status-ok shadow-[0_0_8px_1px_var(--status-ok)]",
  warn: "bg-status-warn shadow-[0_0_8px_1px_var(--status-warn)]",
  error: "bg-status-error shadow-[0_0_8px_1px_var(--status-error)]",
  idle: "bg-ink-faint",
};

interface StatusDotProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: StatusTone;
  /** Pulses the dot — use for "live" states only (an active agent, a
   * currently-online system), not for static/historical status. */
  pulse?: boolean;
  label?: string;
}

/**
 * The lab's indicator-LED: a small glowing dot plus an optional mono
 * label, e.g. "● SYSTEM STATUS NOMINAL". Reused by the boot sequence,
 * agent cards, and any live/health readout.
 */
export function StatusDot({
  tone = "ok",
  pulse = false,
  label,
  className,
  ...props
}: StatusDotProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-2", className)}
      {...props}
    >
      <span className="relative flex h-1.5 w-1.5">
        {pulse && (
          <span
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
              dotClass[tone],
            )}
          />
        )}
        <span
          className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", dotClass[tone])}
        />
      </span>
      {label && (
        <span className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-muted">
          {label}
        </span>
      )}
    </span>
  );
}
