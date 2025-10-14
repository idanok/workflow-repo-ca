import { test, expect } from '@playwright/test';

test.describe('Login', () => {

  test('User can log in with valid credentials', async ({ page, baseURL }) => {
    // Use trailing slash to match the login route
    await page.goto('/login/');

    // Wait for the login form to appear
    await page.waitForSelector('input[name="email"]', { timeout: 10000 });
    await page.waitForSelector('input[name="password"]', { timeout: 10000 });

    // Fill credentials from environment variables
    const email = process.env.TEST_EMAIL;
    const password = process.env.TEST_PASSWORD;

    if (!email || !password) {
      throw new Error('TEST_EMAIL and TEST_PASSWORD must be set in .env');
    }

    await page.fill('input[name="email"]', email);
    await page.fill('input[name="password"]', password);

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for navigation to home page
    await page.waitForURL(`${baseURL}/`, { timeout: 10000 });

    // Confirm successful login
    const heading = page.locator('h1');
    await expect(heading).toHaveText(/Welcome to this site/i);
  });

  test('Shows error message with invalid credentials', async ({ page }) => {
    await page.goto('/login/');

    // Wait for the login form
    await page.waitForSelector('input[name="email"]', { timeout: 10000 });
    await page.waitForSelector('input[name="password"]', { timeout: 10000 });

    // Fill invalid credentials (non-Noroff email)
    await page.fill('input[name="email"]', 'wrong@example.com');
    await page.fill('input[name="password"]', 'wrongpassword');

    // Submit the form
    await page.click('button[type="submit"]');

    // Wait for the error message to appear
    const message = page.locator('#message-container');
    await expect(message).toBeVisible({ timeout: 5000 });

    // Match the exact Noroff email validation message
    await expect(message).toHaveText(
      /Please enter a noroff\.no or stud\.noroff\.no email address\./i
    );
  });

});

