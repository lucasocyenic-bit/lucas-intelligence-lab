import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "signal" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-mono uppercase tracking-eyebrow " +
  "transition-[color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-void " +
  "disabled:pointer-events-none disabled:opacity-40";

// Deliberately no solid-fill buttons — every variant is a bordered glass
// surface with a text/glow accent, matching the "restrained glow" brief.
// Reserve `primary` (brass) for the single most important action on a
// screen; `signal` (teal) for the next tier; `ghost` for everything else.
const variantClass: Record<ButtonVariant, string> = {
  primary:
    "border border-flag/50 text-flag-strong bg-flag/[0.06] hover:border-flag hover:shadow-glow-flag focus-visible:ring-flag/60",
  signal:
    "border border-signal/50 text-signal-strong bg-signal/[0.06] hover:border-signal hover:shadow-glow-signal focus-visible:ring-signal/60",
  ghost:
    "border border-line text-ink-muted hover:text-ink hover:border-line-strong focus-visible:ring-line-strong",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-[10px]",
  md: "h-10 px-4 text-[11px]",
  lg: "h-12 px-6 text-xs",
};

export function Button({
  variant = "ghost",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variantClass[variant], sizeClass[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
