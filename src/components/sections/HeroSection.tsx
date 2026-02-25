import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { homeContent } from "@/content/home";
import { contactInfo } from "@/content/contact";
import { CtaButton } from "@/components/shared/CtaButton";
import { buildWhatsAppUrl } from "@/lib/utils";

export function HeroSection() {
  //const whatsappUrl = buildWhatsAppUrl(contactInfo.whatsappNumber, contactInfo.whatsappMessageDefault);
 // <CtaButton href={whatsappUrl} target="_blank" rel="noreferrer" variant="warm" size="lg">
 // <MessageCircle className="h-4 w-4" />
  // {homeContent.ctaLabels.whatsapp}
  // </CtaButton>
  return (
    <section id="inicio" className="relative overflow-hidden pt-6 md:pt-10">
      <div className="container-shell">
        <div className="relative min-h-[76svh] rounded-[1.6rem] border border-white/30 bg-[#1f1510] shadow-glow">
          <div className="absolute inset-0 overflow-hidden rounded-[1.6rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,206,126,0.25),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(70,106,71,0.22),transparent_35%),linear-gradient(135deg,#2b1c14,#140f0d)]" />
            <div className="absolute inset-0 bg-warm-grid [background-size:18px_18px] opacity-[0.07]" />
          </div>

          <div className="relative grid min-h-[76svh] gap-6 p-5 md:grid-cols-[1.12fr_0.88fr] md:p-9">
            <div className="flex flex-col justify-between gap-7">
              <div className="glass-panel inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f4e5ce]">
                <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_16px_rgba(255,205,111,0.8)]" />
                Terraza Cultural · ECOS + Mami Oli's
              </div>

              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65 }}
                  className="text-balance font-serifDisplay text-4xl leading-tight text-[#fbf3e7] md:text-6xl"
                >
                  {homeContent.tagline}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.08 }}
                  className="mt-4 max-w-2xl text-balance text-sm leading-7 text-[#eadfce] md:text-base"
                >
                  {homeContent.heroSubtitle}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >



                <CtaButton href="#menu" variant="ghost" size="lg">
                  <ArrowRight className="h-4 w-4" />
                  {homeContent.ctaLabels.menu}
                </CtaButton>
                <CtaButton href={contactInfo.googleMapsUrl} target="_blank" rel="noreferrer" variant="outline" size="lg">
                  <MapPin className="h-4 w-4" />
                  {homeContent.ctaLabels.directions}
                </CtaButton>
              </motion.div>
            </div>

            <div className="grid gap-4 md:grid-rows-[1fr_auto]">
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(255,204,120,0.18),transparent_35%),radial-gradient(circle_at_25%_80%,rgba(90,135,87,0.2),transparent_42%)]" />
                <div className="relative h-full min-h-[260px] rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,243,221,0.06),rgba(255,243,221,0.02))] p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#d5c1a7]">Vibra nocturna</p>
                  <div className="mt-4 grid h-[calc(100%-2rem)] grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#2b1b13,#1a130f)] p-4">
                      <div className="h-full rounded-xl border border-amber-200/10 bg-[radial-gradient(circle_at_50%_20%,rgba(255,197,104,0.35),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] p-3">
                        <div className="space-y-2">
                          <div className="h-2 w-16 rounded-full bg-amber-100/35" />
                          <div className="h-2 w-24 rounded-full bg-amber-100/20" />
                          <div className="mt-4 grid grid-cols-3 gap-2">
                            {Array.from({ length: 6 }).map((_, i) => (
                              <div key={i} className="h-12 rounded-lg border border-white/5 bg-white/5" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="text-xs uppercase tracking-[0.16em] text-[#d7c7b3]">Ambiente</p>
                        <p className="mt-2 font-serifDisplay text-2xl text-[#f7efdf]">Calido</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="text-xs uppercase tracking-[0.16em] text-[#d7c7b3]">Identidad</p>
                        <p className="mt-2 text-sm leading-6 text-[#f4e4d1]">Madera, plantas, luz ambar y comunidad.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[#f2e6d8]">
                <div className="glass-panel rounded-2xl px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#f0d9be]">Experiencias</p>
                  <p className="mt-2 text-sm">Cafe con idiomas · mesas compartidas · noches culturales</p>
                </div>
                <div className="glass-panel rounded-2xl px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#f0d9be]">Historia</p>
                  <p className="mt-2 text-sm">Un espacio con relato, QR y conexion con ECOS.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
