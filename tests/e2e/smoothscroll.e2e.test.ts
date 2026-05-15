import { test, expect } from "@playwright/test";

test("Lenis smooth scroll is initialized on the html element", async ({
  page,
}) => {
  await page.goto("/");

  // Lenis adds a class "lenis" to the html element when initialized successfully
  const htmlElement = page.locator("html");
  await expect(htmlElement).toHaveClass(/lenis/);
});
