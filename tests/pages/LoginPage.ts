import { Page, Locator } from '@playwright/test';
export class LoginPage{
readonly page: Page;
readonly login: Locator;
readonly password: Locator;
readonly loginButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.login = page.locator('[id="user-name"]');
    this.password = page.locator('[id="password"]');
    this.loginButton = page.locator('[id="login-button"]');
  }

  async loginApp(){
await this.page.goto('https://www.saucedemo.com/');
await this.login.fill("standard_user");
await this.password.fill("secret_sauce");
await this.loginButton.click();
await this.page.waitForURL('**/inventory.html');
  }

}