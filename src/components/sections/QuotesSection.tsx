import { homeContent } from "@/content/home";

export function QuotesSection() {
  const quotes = [...homeContent.quotes, ...homeContent.quotes];

  return (
    <section aria-label="Frases de identidad" className="pt-10 md:pt-14">
      <div className="container-shell">
        <div className="overflow-hidden rounded-2xl border border-black/5 bg-white/70 py-4 shadow-soft">
          <div className="flex min-w-max animate-marquee gap-3 px-4 [will-change:transform] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:min-w-0">
            {quotes.map((quote, idx) => (
              <div
                key={`${quote.id}-${idx}`}
                className="rounded-full border border-amber-700/15 bg-amber-50/70 px-4 py-2 text-sm text-[#5f4a37]"
              >
                {quote.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
