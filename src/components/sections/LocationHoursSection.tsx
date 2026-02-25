import { Clock3, MapPin } from "lucide-react";
import { contactInfo } from "@/content/contact";
import { CtaButton } from "@/components/shared/CtaButton";
import { IconTextRow } from "@/components/shared/IconTextRow";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function LocationHoursSection() {
  return (
    <section id="ubicacion" className="pt-14 md:pt-20">
      <div className="container-shell">
        <div className="grid gap-6 md:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="section-frame p-5 md:p-7">
            <SectionHeading
              eyebrow="Ubicacion y horarios"
              title="Encuentranos y vive la terraza en tu horario favorito"
              description="Configura aqui la direccion exacta, enlace a Maps y horarios oficiales del negocio."
            />
            <div className="mt-5 space-y-3">
              <IconTextRow icon={<MapPin className="h-4 w-4" />} title="Direccion" text={contactInfo.address} />
              <IconTextRow
                icon={<Clock3 className="h-4 w-4" />}
                title="Horarios"
                text={contactInfo.hours.map((d) => `${d.label}: ${d.hours}`).join(" · ")}
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaButton href={contactInfo.googleMapsUrl} target="_blank" rel="noreferrer" variant="primary">
                <MapPin className="h-4 w-4" />
                Como llegar
              </CtaButton>
              <CtaButton href={`tel:+${contactInfo.whatsappNumber.replace(/\D+/g, "")}`} variant="ghost">
                Llamar
              </CtaButton>
            </div>
          </Reveal>

          <Reveal className="section-frame overflow-hidden p-0">
            <div className="relative min-h-[340px] p-5 md:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(228,168,89,0.22),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(70,106,71,0.18),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.6),rgba(247,242,233,0.9))]" />
              <div className="relative h-full rounded-3xl border border-black/10 bg-white/70 p-4 shadow-soft">
                <div className="grid h-full min-h-[270px] place-items-center rounded-2xl border border-dashed border-black/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(255,255,255,0.6))] text-center">
                  <div className="max-w-xs px-4">
                    <MapPin className="mx-auto h-8 w-8 text-amber-700" />
                    <p className="mt-3 text-sm font-semibold text-[#2d2118]">Mapa embebido (futuro)</p>
                    <p className="mt-2 text-sm leading-6 text-[#5d554d]">
                      En el MVP dejamos CTA a Google Maps para mantener performance alta y configuracion simple.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
