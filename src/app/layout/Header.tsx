import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigationItems } from "@/content/navigation";
import { useScrollSection } from "@/hooks/useScrollSection";
import { CtaButton } from "@/components/shared/CtaButton";
//import { contactInfo } from "@/content/contact";
import { homeContent } from "@/content/home";
//import { buildWhatsAppUrl } from "@/lib/utils";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const activeSection = useScrollSection();
  //const whatsappUrl = buildWhatsAppUrl(contactInfo.whatsappNumber, contactInfo.whatsappMessageDefault);

  return (
    <header className="sticky top-0 z-40 pt-3">
      <div className="container-shell">
        <div className="glass-panel rounded-2xl border border-white/35 px-3 py-2 md:px-4">
          <div className="flex items-center justify-between gap-3">
            <a href="#inicio" className="min-w-0 rounded-full px-2 py-1">
              <p className="truncate font-serifDisplay text-xl leading-none text-[#241912] md:text-2xl">
                ECOS y Mami Oli's
              </p>
              <p className="hidden text-[10px] uppercase tracking-[0.16em] text-[#746556] md:block">
                Terraza cultural
              </p>
            </a>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Navegacion principal">
              {navigationItems.map((item) => {
                const id = item.href.slice(1);
                const isActive = id === activeSection;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-3 py-2 text-sm transition",
                      isActive ? "bg-white text-[#241912] shadow-soft" : "text-[#61564c] hover:bg-white/60",
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="hidden md:block">
              {/* <CtaButton href={whatsappUrl} target="_blank" rel="noreferrer" variant="warm" size="sm">
                {homeContent.ctaLabels.whatsapp}
              </CtaButton> */}
            </div>

            <button
              type="button"
              className="rounded-full border border-black/10 bg-white/70 p-2 text-[#2f221a] md:hidden"
              aria-label={open ? "Cerrar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open ? (
            <div className="mt-3 border-t border-black/5 pt-3 md:hidden">
              <nav className="grid gap-1" aria-label="Navegacion movil">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-2 text-sm text-[#4e463f] hover:bg-white/70"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                {/*<CtaButton
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="warm"
                  className="mt-2 w-full justify-center"
                >
                  {homeContent.ctaLabels.whatsapp}
                </CtaButton>*/}
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
