import { test, expect } from '@playwright/test';

test('homepage loads and applies Midnight Navy theme', async ({ page }) => {
  await page.goto('/');

  // Expect the title to match our app
  await expect(page).toHaveTitle(/Capital Bridge/);

  // Expect the background color to be Midnight Navy
  const body = page.locator('body');
  const bgColor = await body.evaluate((el) => {
    return window.getComputedStyle(el).backgroundColor;
  });

  // RGB equivalent of our Midnight Navy color (e.g. #0a192f)
  // Let's assume rgb(10, 25, 47)
  expect(bgColor).toBe('rgb(10, 25, 47)');
});
