import { test, expect } from '@playwright/test';

test.describe('Login', () => {

  test('User can log in with valid credentials', async ({ page }) => {
    await page.goto('http://localhost:3000/login');

    // Fill in credentials from environment variables
    await page.fill('input[name="email"]', process.env.TEST_EMAIL);
    await page.fill('input[name="password"]', process.env.TEST_PASSWORD);

    // Submit form
    await page.click('button[type="submit"]');

    // Check that we land on the home page
    await expect(page).toHaveURL('http://localhost:3000/');

    // Check the welcome heading
    await expect(page.locator('h1')).toHaveText(/Welcome to this site/i);
  });

  test('Shows error message with invalid credentials', async ({ page }) => {
    await page.goto('http://localhost:3000/login');

    // Fill in invalid email to trigger the actual validation message
    await page.fill('input[name="email"]', 'wrong@example.com');
    await page.fill('input[name="password"]', 'wrongpassword');

    await page.click('button[type="submit"]');

    // Wait for the error message to appear and check its text
    const message = page.locator('#message-container');
    await expect(message).toBeVisible({ timeout: 5000 });

    // Check for the actual message from the page
    await expect(message).toHaveText(
      /Please enter a noroff\.no or stud\.noroff\.no email address/i
    );
  });

});
