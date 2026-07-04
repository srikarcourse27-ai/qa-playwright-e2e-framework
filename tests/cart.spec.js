const { test, expect } = require('@playwright/test');

test('Cart functionality test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add item to cart
  await page.click('#add-to-cart-sauce-labs-backpack');

  // Open cart
  await page.click('.shopping_cart_link');

  // Verify product is in cart
  await expect(page.locator('.inventory_item_name'))
    .toHaveText('Sauce Labs Backpack');

  // Remove product
  await page.click('#remove-sauce-labs-backpack');

  // Verify the cart is empty
  await expect(page.locator('.cart_item')).toHaveCount(0);
});