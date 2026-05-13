import { test, expect } from '@playwright/test';

test.describe('Testimonials Marquee', () => {
  test('Marquee renders and contains testimonials', async ({ page }) => {
    await page.goto('/');

    // Check if the marquee container exists
    const marquee = page.locator('.testimonial-marquee');
    await expect(marquee).toBeVisible();

    // Check if at least one testimonial card is visible
    const testimonialCard = page.locator('.testimonial-card').first();
    await expect(testimonialCard).toBeVisible();
    
    // Verify it contains text from content.ts
    await expect(testimonialCard).toContainText(/Alison Burgas/i);
  });

  test('Marquee animates (X position changes)', async ({ page }) => {
    await page.goto('/');
    
    const track = page.locator('.marquee-track');
    
    // Get initial position
    const box1 = await track.boundingBox();
    const initialX = box1?.x;

    // Wait for a bit
    await page.waitForTimeout(1000);

    // Get new position
    const box2 = await track.boundingBox();
    const newX = box2?.x;

    // Position should have changed
    expect(newX).not.toBe(initialX);
  });
});
