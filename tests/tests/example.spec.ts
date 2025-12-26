
import { test, expect} from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { LoginPage } from '../pages/LoginPage';

let login: LoginPage;
let products: ProductsPage;


test.beforeEach(async({page}) => {
  products = new ProductsPage(page);
  login = new LoginPage(page);
  await login.loginApp();
})

test.skip('Add to card', async ({ page }) => {
  await products.addToCartBike();
  await expect(products.shoppingCartBadge).toHaveText('1');
});

test.skip("should delete item from the basket for Bike Light", async () => {
  await products.addToCartBike();
  await products.removeCartBike();
  await expect(products.shoppingCartBadge).toHaveCount(0);
  });

test.skip("should click all buttons on the screen", async () => {
  products.selectAllItems();
  await expect(products.shoppingCartBadge).toHaveText(String(6));
})

test('products are sorted alphabetically Z to A', async ({ page }) => {
  const beforeSort = await products.getProductNames();
  await products.sortByNameZA();
  const afterSort = await products.getProductNames();
  const expected = [...beforeSort].sort((a, b) => b.localeCompare(a));
  expect(afterSort).toEqual(expected);
});

test('products are sorted alphabetically A to Z', async ({ page }) => {
  const beforeSort = await products.getProductNames();
  await products.sortByNameAZ();
  const afterSort = await products.getProductNames();
  const expected = [...beforeSort].sort((a, b) => a.localeCompare(b));
  expect(afterSort).toEqual(expected);
});
