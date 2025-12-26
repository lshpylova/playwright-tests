import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {

readonly page: Page;
readonly shoppingCartBadge: Locator;
  
constructor(page: Page) {
  this.page = page;
  this.shoppingCartBadge = page.locator('.shopping_cart_badge');
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
}