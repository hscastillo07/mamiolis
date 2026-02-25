import { useEffect, useState } from "react";
import { SECTION_IDS } from "@/lib/constants";

export function useScrollSection() {
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS[0]);

  useEffect(() => {
    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -52% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}
