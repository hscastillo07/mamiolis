import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("App", () => {
  it("renderiza el hero principal", () => {
    render(<App />);
    expect(
      screen.getByText(/Un espacio donde se encuentran sabores, idiomas y culturas/i),
    ).toBeInTheDocument();
  });
});
