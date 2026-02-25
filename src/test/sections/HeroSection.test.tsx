import { render, screen } from "@testing-library/react";
import { HeroSection } from "@/components/sections/HeroSection";

describe("HeroSection", () => {
  it("muestra CTAs principales", () => {
    render(<HeroSection />);
    expect(screen.getByRole("link", { name: /Reservar por WhatsApp/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Ver menu/i })).toBeInTheDocument();
  });
});
