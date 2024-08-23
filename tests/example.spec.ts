import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('button',{name: 'Google Logo เข้าสู้ระบบด้วย'}).click();
  await page.getByLabel('Email or phone').fill('650112418042@brua.c.th');
  await page.getByRole('button',{name: 'Next', exact: true}).click();
  await page.getByLabel('Enter your password').fill('r@62521f6a');
  await page.getByRole('button',{name: 'Next'}).click();
  await page.getByRole('button',{name: 'ดำเนินการต่อ'}).click();

  await page.content().storageState({path:authFile});


  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
