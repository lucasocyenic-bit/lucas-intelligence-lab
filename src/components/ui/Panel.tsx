import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  /** Adds hover affordance for panels that are themselves clickable/focusable. */
  interactive?: boolean;
}

/**
 * The lab's signature surface: frosted glass over the void background,
 * a single hairline border, a very small radius (machined, not bubbly),
 * and a barely-there inset highlight instead of a drop shadow. Every
 * card, stat tile, and modal in the app is built on this.
 */
export function Panel({
  interactive = false,
  className,
  children,
  ...props
}: PanelProps) {
  return (
    <div
      className={cn(
        "glass rounded-md shadow-panel",
        interactive &&
          "cursor-pointer transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-line-strong",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
