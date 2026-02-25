import type { PropsWithChildren } from "react";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

export function Reveal({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div {...fadeUp} className={className}>
      {children}
    </motion.div>
  );
}
