import { ArrowDown, Sparkles } from "lucide-react";
import { contactInfo } from "@/content/contact";
import { CtaButton } from "@/components/shared/CtaButton";
import { buildWhatsAppUrl } from "@/lib/utils";

const heroImage = "/images/hero/high-fidelity-hero.jpg";

export function HighFidelityHeroSection() {
  const whatsappUrl = buildWhatsAppUrl(contactInfo.whatsappNumber, contactInfo.whatsappMessageDefault);

  return (
    <main className="min-h-screen bg-[#f3f3f3] px-4 py-6 md:px-7 md:py-8">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-[980px] items-center justify-center bg-white p-4 md:p-5">
        <div className="relative isolate w-full overflow-hidden rounded-[2px]">
          <img
            src={heroImage}
            alt="Entrada de Mami Oli's y Corporacion ECOS iluminada de noche"
            className="h-[84svh] min-h-[560px] w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/42" />
          <div className="absolute inset-y-0 left-1/2 w-[6px] -translate-x-1/2 bg-white/80" aria-hidden="true" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center md:px-12">
            <div className="inline-flex items-center gap-4 rounded-full border border-white/25 bg-black/28 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white md:text-xs">
              <Sparkles className="h-3 w-3 text-amber-300" />
              Ecos & Mami Oli's
              <Sparkles className="h-3 w-3 text-amber-300" />
            </div>

            <h1 className="mt-6 text-balance font-serifDisplay text-[2.65rem] font-semibold leading-[0.96] text-white md:text-[5.25rem]">
              Un espacio donde se
              <br />
              encuentran <span className="text-[#efc440]">sabores,</span>
              <br />
              <span className="text-[#44d1b0]">idiomas</span> y <span className="text-[#ee8bad]">culturas</span>
            </h1>

            <p className="mt-6 max-w-3xl text-balance text-sm leading-7 text-white/90 md:text-[1.12rem]">
              Una terraza cultural donde el aprendizaje de idiomas y la gastronomia se encuentran para crear experiencias
              autenticas de intercambio cultural.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaButton
                href={contactInfo.ecosUrl || whatsappUrl}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                size="lg"
                className="min-w-44 border border-white/35 bg-white text-[#272727]"
              >
                Conoce la historia
              </CtaButton>
              <CtaButton
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="lg"
                className="min-w-44 border-white/70 bg-transparent text-white hover:bg-white/12"
              >
                Visita la terraza
              </CtaButton>
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/50 bg-black/20 p-2 text-white/90">
            <ArrowDown className="h-4 w-4" />
          </div>
        </div>
      </section>
    </main>
  );
}
