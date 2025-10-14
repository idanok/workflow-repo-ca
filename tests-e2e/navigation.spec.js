import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {

  test('User can navigate to a venue details page', async ({ page }) => {
    await page.goto('/'); // relative URL works with baseURL

    const venueContainer = page.locator('#venue-container');
    await expect(venueContainer).toBeVisible({ timeout: 10000 });

    const firstVenue = venueContainer.locator(':scope > *').first();
    await expect(firstVenue).toBeVisible({ timeout: 10000 });

    await firstVenue.click();

    const heading = page.locator('h1');
    await expect(heading).toHaveText(/Venue details/i, { timeout: 5000 });
  });

});
