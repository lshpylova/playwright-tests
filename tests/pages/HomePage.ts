import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly getStartedLink;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
  }

  async goto() {
    await this.page.goto('https://playwright.dev/docs/intro', {
      timeout: 60000,
      waitUntil: 'domcontentloaded'
    });
  }

  async clickGetStarted() {
    await this.getStartedLink.click();
  }
}
