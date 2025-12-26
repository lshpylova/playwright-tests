
import { test, expect} from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;
let productsPage: ProductsPage;


test.beforeEach(async({page}) => {
  productsPage = new ProductsPage(page);
  loginPage = new LoginPage(page);
  await loginPage.loginApp();

})

test.skip('Add to card', async ({ page }) => {
  await productsPage.addToCartBike();
  await expect(productsPage.shoppingCartBadge).toHaveText('1');
});

test("should delete item from the basket for Bike Light", async () => {
  await productsPage.addToCartBike();
  await productsPage.removeCartBike();
  await expect(productsPage.shoppingCartBadge).toHaveCount(0);
  });
