const { test, expect } = require('@playwright/test');
const data = require('../test-data/users.json');

test('Valid login test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', data.validUser);
  await page.fill('#password', data.password);

  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory.html/);
});