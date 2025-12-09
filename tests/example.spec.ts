import { test, expect } from '@playwright/test';

test('Open Playwright website', async ({ page }) => {
  await page.goto('https://playwright.dev/', {
    timeout: 60000,             // збільшений таймаут
    waitUntil: 'domcontentloaded'
  });

  await expect(page).toHaveTitle(/Playwright/);
});
