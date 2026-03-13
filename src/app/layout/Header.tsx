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
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-gray-900/95 py-3 backdrop-blur-md shadow-lg">
      <div className="container-shell">
        <div className="px-1 md:px-2">
          <div className="flex items-center justify-between gap-3">
            <a href="#inicio" className="group min-w-0 transition-opacity hover:opacity-90">
              <p className="truncate font-serifDisplay text-xl leading-none text-white md:text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>
                ECOS y Mami Oli's
              </p>
              <p className="hidden text-[10px] uppercase tracking-[0.2em] text-amber-300 md:block">
                Terraza fusión
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
                      "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                      isActive
                        ? "bg-white text-gray-900 shadow-glow"
                        : "text-gray-300 hover:text-white hover:bg-white/10",
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
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition-colors hover:bg-white/10 md:hidden"
              aria-label={open ? "Cerrar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
              <nav className="grid gap-1" aria-label="Navegacion movil">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-4 py-2 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white"
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
          )}
        </div>
      </div>
    </header>
  );
}
