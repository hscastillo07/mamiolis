import { ExternalLink, FileText } from "lucide-react";
import { contactInfo } from "@/content/contact";
import { homeContent } from "@/content/home";
import { CtaButton } from "@/components/shared/CtaButton";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function MenuSection() {
  return (
    <section id="menu" className="pt-14 md:pt-20">
      <div className="container-shell">
        <div className="section-frame grid gap-6 p-5 md:grid-cols-[1fr_0.95fr] md:p-8">
          <Reveal>
            <SectionHeading
              eyebrow="Menu / Carta"
              title="Consulta la carta y sigue la experiencia"
              description="Puedes conectar un PDF local o una URL externa. En esta base dejamos ambos caminos listos para el MVP."
            />
            <div className="mt-5 flex flex-wrap gap-3">
              <CtaButton href={contactInfo.menuUrl} target="_blank" rel="noreferrer" variant="warm">
                <FileText className="h-4 w-4" />
                {homeContent.ctaLabels.menu}
              </CtaButton>
              <CtaButton href={contactInfo.googleMapsUrl} target="_blank" rel="noreferrer" variant="outline">
                <ExternalLink className="h-4 w-4" />
                {homeContent.ctaLabels.directions}
              </CtaButton>
            </div>
          </Reveal>

          <Reveal className="rounded-3xl border border-black/5 bg-white/80 p-5 shadow-soft">
            <p className="text-xs uppercase tracking-[0.16em] text-[#705f4d]">¿Sabias que...?</p>
            <p className="mt-3 font-serifDisplay text-2xl text-[#2f2017]">
              Esta terraza esta pensada para que la comida tambien abra conversaciones.
            </p>
            <p className="mt-4 text-sm leading-6 text-[#5c534c]">
              Puedes usar este bloque para el microcopy del menu o una capsula narrativa ligada al QR: origen del espacio, frases del PO o experiencias destacadas.
            </p>
            <div className="mt-5 rounded-2xl border border-dashed border-amber-700/25 bg-amber-50/55 p-4 text-sm text-[#5b4634]">
              Archivo placeholder configurado en <code>/public/documents/menu.pdf</code>.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
