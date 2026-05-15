import { test, expect } from "@playwright/test";

test.describe("Multi-Page Routing & Navigation", () => {
  test("Navbar exists and routes to About page", async ({ page }) => {
    await page.goto("/");

    // Wait for the Preloader to finish and the Navbar to mount
    const aboutLink = page.locator("nav a", { hasText: /About/i });
    await expect(aboutLink).toBeVisible({ timeout: 10000 });

    // Click the link to navigate to About
    await aboutLink.click();

    // Verify the URL changed correctly
    await expect(page).toHaveURL(/.*\/about/);

    // Verify the About page renders
    const aboutHeading = page.locator("h1", {
      hasText: /About Capital Bridge/i,
    });
    await expect(aboutHeading).toBeVisible();
  });

  test("Routes to Services page directly", async ({ page }) => {
    await page.goto("/services");

    // Verify the Services page renders directly on load
    const servicesHeading = page.locator("h1", { hasText: /Our Services/i });
    await expect(servicesHeading).toBeVisible();
  });
});
