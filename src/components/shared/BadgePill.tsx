import type { PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

export function BadgePill({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-amber-700/20 bg-white/65 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#5f4a37]",
        className,
      )}
    >
      {children}
    </span>
  );
}
