import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {

readonly page: Page;
readonly shoppingCartBadge: Locator;
readonly sortDropDown: Locator;
readonly productNames: Locator;
  
constructor(page: Page) {
  this.page = page;
  this.shoppingCartBadge = page.locator('.shopping_cart_badge');
  this.sortDropDown = page.locator('[data-test="product-sort-container"]');
  this.productNames = page.locator('.inventory_item_name');
  }


async addToCartBike() {
    const addButton = this.page
      .locator('div button[id="add-to-cart-sauce-labs-bike-light"]');
    await addButton.click();
  }

  async removeCartBike() {
    const removeButton = this.page
      .locator('div button[id="remove-sauce-labs-bike-light"]');
    await removeButton.click();
  }

  async selectAllItems(){
    const buttons = this.page
      .locator('[class="pricebar"] button');
    const count = await buttons.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
    await buttons.nth(i).click();
}
  }

  async sortByNameAZ() {
    await this.sortDropDown.selectOption('az');
  }

  async sortByNameZA(){
    await this.sortDropDown.selectOption("za");
  }

  async getProductNames(): Promise<string[]> {
    const names = await this.productNames.allTextContents();
    return names.map(n => n.trim());
  }
}