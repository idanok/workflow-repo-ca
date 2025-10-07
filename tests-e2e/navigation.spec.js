import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('User can navigate to a venue details page', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    // Wait for the venue container to have children
    const venueContainer = page.locator('#venue-container');
    await expect(venueContainer).toBeVisible({ timeout: 10000 });

    // Wait for at least one venue card to load
    const firstVenue = venueContainer.locator(':scope > *').first();
    await expect(firstVenue).toBeVisible({ timeout: 10000 });

    // Click the first venue
    await firstVenue.click();

    // Verify the venue details page loads
    const heading = page.locator('h1');
    await expect(heading).toHaveText(/Venue details/i, { timeout: 5000 });
  });
});
