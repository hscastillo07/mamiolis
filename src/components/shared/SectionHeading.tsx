import type { ReactNode } from "react";
import { BadgePill } from "@/components/shared/BadgePill";

interface Props {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow ? <BadgePill>{eyebrow}</BadgePill> : null}
      <h2 className="text-balance font-serifDisplay text-3xl font-semibold leading-tight text-[#241913] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <div className="max-w-2xl text-balance text-sm leading-7 text-[#5e554e] md:text-base">{description}</div>
      ) : null}
    </div>
  );
}
