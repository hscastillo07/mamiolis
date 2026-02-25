import type { PropsWithChildren } from "react";
import { Header } from "@/app/layout/Header";
import { Footer } from "@/app/layout/Footer";
import { MobileStickyCta } from "@/app/layout/MobileStickyCta";

export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-green-200/15 blur-3xl" />
      </div>
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}
