import { Facebook, Instagram, MapPin, MessageCircle } from "lucide-react";
import { siteMeta } from "@/content/site";
import { contactInfo } from "@/content/contact";
import { buildWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(contactInfo.whatsappNumber, contactInfo.whatsappMessageDefault);

  return (
    <footer className="pb-24 pt-16 md:pb-12 md:pt-20">
      <div className="container-shell">
        <div className="section-frame p-5 md:p-7">
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="font-serifDisplay text-3xl text-[#281b14] md:text-4xl">{siteMeta.siteName}</p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5d554d]">{siteMeta.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-[#312219] hover:bg-white"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={contactInfo.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-[#312219] hover:bg-white"
                >
                  <MapPin className="h-4 w-4" /> Como llegar
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:justify-items-end">
              <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-soft md:w-full md:max-w-xs">
                <p className="text-xs uppercase tracking-[0.16em] text-[#6e604f]">ECOS</p>
                <p className="mt-2 text-sm leading-6 text-[#5b524b]">Languages. Culture. Community.</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={contactInfo.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="rounded-full border border-black/10 bg-white/70 p-2 hover:bg-white"
                >
                  <Instagram className="h-4 w-4 text-[#2b2018]" />
                </a>
                <a
                  href={contactInfo.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="rounded-full border border-black/10 bg-white/70 p-2 hover:bg-white"
                >
                  <Facebook className="h-4 w-4 text-[#2b2018]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
