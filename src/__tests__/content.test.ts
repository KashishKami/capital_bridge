import { describe, it, expect } from "vitest";
import { siteContent } from "../data/content";

describe("Content Extraction & Data Layer", () => {
  it("should export a homeContent object that strictly matches the expected TypeScript interface", () => {
    const homeContent = siteContent.home;
    // Hero
    expect(homeContent.hero.headline).toBe(
      "Keep growing your business with Capital Bridge Logistics",
    );
    expect(homeContent.hero.subheadline).toContain(
      "innovative transportation solutions",
    );

    // Features
    expect(homeContent.features.length).toBeGreaterThan(0);
    const techFeature = homeContent.features.find(
      (f) => f.title === "Technology",
    );
    expect(techFeature).toBeDefined();
    expect(techFeature?.description).toContain("API Systems");

    // Testimonials
    expect(homeContent.testimonials.length).toBeGreaterThan(0);
    const alisonReview = homeContent.testimonials.find(
      (t) => t.author === "Alison Burgas",
    );
    expect(alisonReview).toBeDefined();
    expect(alisonReview?.text).toContain("Fast, reliable, and professional");

    // Contact
    expect(homeContent.contact.phone).toBe("(888) 575-8884");
  });
});
