import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { galleryImages } from "@/content/gallery";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function GallerySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="galeria" className="pt-14 md:pt-20">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Galeria"
            title="Dia y noche: una terraza que cambia de energia"
            description="La experiencia visual gira alrededor de madera, luz calida, plantas y una identidad compartida entre cocina y comunidad."
          />
        </Reveal>

        <Reveal className="mt-6 section-frame p-4 md:p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-[#5e554d]">Usa las flechas o desliza para navegar por la galeria.</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                className="rounded-full border border-black/10 bg-white/80 p-2 text-[#2b1e16] transition hover:bg-white"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                className="rounded-full border border-black/10 bg-white/80 p-2 text-[#2b1e16] transition hover:bg-white"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-4 overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {galleryImages.map((image) => (
                <article
                  key={image.id}
                  className="min-w-0 flex-[0_0_88%] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-soft md:flex-[0_0_48%] lg:flex-[0_0_34%]"
                >
                  <div className="relative aspect-[4/3] bg-[linear-gradient(145deg,#2c1d15,#171210)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,202,119,0.25),transparent_45%),radial-gradient(circle_at_78%_82%,rgba(70,106,71,0.2),transparent_50%)]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center text-[#efe0c9]">
                      <span className="rounded-full border border-white/15 bg-white/5 p-3">
                        <ImageIcon className="h-5 w-5" />
                      </span>
                      <div className="px-5">
                        <p className="text-sm font-medium">Placeholder visual</p>
                        <p className="mt-1 text-xs text-[#d3c1ab]">{image.src}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-[#7b6a57]">{image.category}</p>
                    <p className="mt-2 font-medium text-[#2d2018]">{image.caption || image.alt}</p>
                    <p className="mt-2 text-sm leading-6 text-[#5e554d]">{image.alt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Ir a imagen ${index + 1}`}
                className={`h-2.5 rounded-full transition ${selectedIndex === index ? "w-8 bg-amber-500" : "w-2.5 bg-black/15"}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
