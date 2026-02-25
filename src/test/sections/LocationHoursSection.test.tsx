import { render, screen } from "@testing-library/react";
import { LocationHoursSection } from "@/components/sections/LocationHoursSection";

describe("LocationHoursSection", () => {
  it("muestra bloque de ubicacion y horarios", () => {
    render(<LocationHoursSection />);
    expect(screen.getByText(/Ubicacion y horarios/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Como llegar/i })).toBeInTheDocument();
  });
});
