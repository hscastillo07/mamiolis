import type { ReactNode } from "react";

export function IconTextRow({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white/65 p-4 shadow-soft">
      <div className="mt-0.5 rounded-xl bg-amber-100/70 p-2 text-[#6a4a27]">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-[#2c2018]">{title}</p>
        <p className="mt-1 text-sm leading-6 text-[#5f5750]">{text}</p>
      </div>
    </div>
  );
}
