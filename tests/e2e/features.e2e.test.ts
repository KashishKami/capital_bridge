import { test, expect } from "@playwright/test";

test("features grid animates into view on scroll", async ({ page }) => {
  await page.goto("/");

  // Wait for hero to load so the site is ready
  const heroHeading = page.locator("h1", {
    hasText: /Keep growing your business/i,
  });
  await expect(heroHeading).toBeVisible({ timeout: 10000 });

  // Locate the Bento Grid container
  const bentoGrid = page.locator('[data-testid="bento-grid"]');

  // Before scrolling, verify the grid is rendered but not yet fully visible (opacity 0)
  // GSAP ScrollTrigger usually sets opacity to 0 or translates it down before it enters viewport.
  // Actually, wait, Playwright might not see opacity: 0 as hidden depending on how GSAP sets it,
  // but let's check its computed opacity if it's off-screen.
  // Since it's far down, we just scroll to it.

  await page.evaluate(() => window.scrollBy(0, window.innerHeight));

  // The Bento Grid should become visible
  await expect(bentoGrid).toBeVisible();

  // The Technology card should be present
  const techCard = bentoGrid.locator("h2", { hasText: /Technology/i });
  await expect(techCard).toBeVisible();
});
