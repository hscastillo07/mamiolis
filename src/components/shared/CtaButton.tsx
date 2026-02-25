import type { AnchorHTMLAttributes } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "warm" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
};

export function CtaButton({ className, children, variant = "primary", size = "md", ...props }: Props) {
  return (
    <Button asChild variant={variant} size={size} className={cn("gap-2", className)}>
      <a {...props}>{children}</a>
    </Button>
  );
}
