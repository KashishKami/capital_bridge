import { test, expect } from "@playwright/test";

test("homepage coordinates pre-loader and hero reveal", async ({ page }) => {
  await page.goto("/");

  // 1. Pre-loader should be visible immediately
  const preloader = page.locator('[data-testid="preloader"]');
  await expect(preloader).toBeVisible();

  // 2. The Hero text should NOT be visible yet
  const heroHeading = page.locator("h1", {
    hasText: /Keep growing your business/i,
  });
  await expect(heroHeading).toBeHidden();

  // 3. Wait for the GSAP animation to complete (we'll give it max 3 seconds)
  // After completion, the preloader should unmount or hide, and hero should appear
  await expect(preloader).toBeHidden({ timeout: 3000 });
  await expect(heroHeading).toBeVisible({ timeout: 1000 });
});
