import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";
import { describe, it, expect } from "vitest";

describe("Footer Component", () => {
  it("renders brand name and navigation links", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    // Brand name
    expect(screen.getAllByText(/Capital/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Bridge/i).length).toBeGreaterThan(0);

    // Navigation links
    expect(screen.getAllByText(/Home/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/About/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Services/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Contact/i).length).toBeGreaterThan(0);
  });

  it("renders contact information from data", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(
      screen.getAllByText(/cs@capitalbridgelogistics.com/i).length,
    ).toBeGreaterThan(0);
    expect(screen.getAllByText(/\(888\) 575-8884/i).length).toBeGreaterThan(0);
  });
});
