import { MapPin, MessageCircle } from "lucide-react";
import { contactInfo } from "@/content/contact";
import { buildWhatsAppUrl } from "@/lib/utils";
import { useIsMobile } from "@/hooks/useIsMobile";

export function MobileStickyCta() {
  const isMobile = useIsMobile();
  if (!isMobile) return null;

  const whatsappUrl = buildWhatsAppUrl(contactInfo.whatsappNumber, contactInfo.whatsappMessageDefault);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-[#f7f1e8]/95 p-3 backdrop-blur md:hidden">
      <div className="container-shell flex gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#1f1712] px-4 text-sm font-medium text-[#f7f1e8] shadow-soft"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <a
          href={contactInfo.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-4 text-sm font-medium text-[#251a13] shadow-soft"
        >
          <MapPin className="h-4 w-4" /> Como llegar
        </a>
      </div>
    </div>
  );
}
