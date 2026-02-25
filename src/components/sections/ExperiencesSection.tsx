import { Coffee, Languages, Music2, Users } from "lucide-react";
import { motion } from "motion/react";
import { experiences } from "@/content/experiences";
import { BadgePill } from "@/components/shared/BadgePill";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

function getIcon(icon: string) {
  switch (icon) {
    case "languages":
      return <Languages className="h-4 w-4" />;
    case "table":
      return <Users className="h-4 w-4" />;
    case "music":
      return <Music2 className="h-4 w-4" />;
    default:
      return <Coffee className="h-4 w-4" />;
  }
}

export function ExperiencesSection() {
  return (
    <section id="experiencias" className="pt-14 md:pt-20">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Experiencias"
            title="No solo vienes a comer: vienes a conectar"
            description="La propuesta combina hospitalidad, conversacion y cultura en una terraza pensada para quedarse un rato mas."
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          className="mt-6 grid gap-4 md:grid-cols-2"
        >
          {experiences.map((item) => (
            <motion.article
              key={item.id}
              variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
              className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/80 p-5 shadow-soft"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[2rem] bg-[radial-gradient(circle_at_0%_0%,rgba(228,168,89,0.22),transparent_70%)]" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="rounded-2xl border border-amber-700/15 bg-amber-50/80 p-3 text-[#6a4d2d]">
                  {getIcon(item.icon)}
                </div>
                {item.badge ? <BadgePill>{item.badge}</BadgePill> : null}
              </div>
              <h3 className="relative mt-4 font-serifDisplay text-2xl text-[#2c1d15]">{item.title}</h3>
              <p className="relative mt-2 text-sm leading-6 text-[#5d554d]">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
