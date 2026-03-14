import { MapPin, MessageCircle } from "lucide-react";
import { contactInfo } from "@/content/contact";
import { useIsMobile } from "@/hooks/useIsMobile";

export function MobileStickyCta() {
  const isMobile = useIsMobile();
  if (!isMobile) return null;


  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-gray-900/95 p-4 backdrop-blur md:hidden">
      <div className="container-shell flex gap-2">

        <a
          href={contactInfo.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-gray-900 shadow-xl transition-transform active:scale-95"
        >
          <MapPin className="h-4 w-4" /> Como llegar
        </a>
      </div>
    </div>
  );
}
