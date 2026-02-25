import { QrCode, Sparkles } from "lucide-react";
import { homeContent } from "@/content/home";
import { Reveal } from "@/components/shared/Reveal";

export function QrStorySection() {
  return (
    <section id="qr-historia" className="pt-14 md:pt-20">
      <div className="container-shell">
        <Reveal className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/85 p-5 shadow-soft md:p-7">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-[2rem] bg-[radial-gradient(circle_at_0%_0%,rgba(228,168,89,0.22),transparent_70%)]" />
          <div className="relative grid gap-5 md:grid-cols-[0.68fr_1.32fr] md:items-center">
            <div className="rounded-3xl border border-amber-700/15 bg-amber-50/70 p-5">
              <div className="mx-auto grid h-40 w-40 place-items-center rounded-2xl border border-dashed border-amber-700/25 bg-white text-[#65492d] md:h-44 md:w-44">
                <QrCode className="h-12 w-12" />
              </div>
              <p className="mt-4 text-center text-xs uppercase tracking-[0.16em] text-[#6b5745]">QR narrativo</p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#5f5246]">
                <Sparkles className="h-3.5 w-3.5" />
                Experiencia fisica + digital
              </div>
              <h3 className="mt-4 font-serifDisplay text-3xl leading-tight text-[#2a1d15] md:text-4xl">
                {homeContent.qrStoryCopy.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#595049] md:text-base">{homeContent.qrStoryCopy.body}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
