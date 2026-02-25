import { contactInfo } from "@/content/contact";
import { homeContent } from "@/content/home";
import { CtaButton } from "@/components/shared/CtaButton";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function StorySection() {
  return (
    <section id="historia" className="pt-14 md:pt-20">
      <div className="container-shell">
        <div className="section-frame grid gap-8 p-5 md:grid-cols-[1.02fr_0.98fr] md:p-8">
          <Reveal>
            <SectionHeading
              eyebrow="Historia compartida"
              title="ECOS y Mami Oli's: una terraza con sabor, conversacion y comunidad"
              description={homeContent.storyIntro}
            />
            <div className="mt-5 space-y-4 text-sm leading-7 text-[#574f49] md:text-base">
              {homeContent.storyBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaButton href={contactInfo.ecosUrl || "#qr-historia"} target="_blank" rel="noreferrer" variant="outline">
                {homeContent.ctaLabels.ecos}
              </CtaButton>
              <CtaButton href="#menu" variant="ghost">
                {homeContent.ctaLabels.menu}
              </CtaButton>
            </div>
          </Reveal>

          <Reveal className="grid gap-4">
            <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-5 shadow-soft">
              <div className="absolute inset-x-4 top-4 h-28 rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgba(227,166,79,0.28),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(70,106,71,0.24),transparent_58%)]" />
              <div className="relative mt-20 rounded-2xl border border-amber-700/10 bg-[#fcfaf6] p-5">
                <p className="font-serifDisplay text-2xl text-[#2b1c14]">Senaletica + historia + experiencia</p>
                <p className="mt-3 text-sm leading-6 text-[#5e554d]">
                  La web y el espacio fisico se conectan con microcopy, QR narrativo y una identidad visual coherente en cada punto de contacto.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-black/5 bg-white/80 p-5 shadow-soft">
              <p className="text-xs uppercase tracking-[0.16em] text-[#6a5b4a]">Copy editable</p>
              <p className="mt-2 text-sm leading-6 text-[#554d46]">
                Todo el contenido del home esta centralizado en <code>src/content</code> para adaptar facilmente el texto final del Product Owner.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
