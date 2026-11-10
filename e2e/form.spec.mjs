import { expect, test } from '@playwright/test';

test('the form shows the sum of 2 and 3', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('First number').fill('2');
  await page.getByLabel('Second number').fill('3');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByRole('status')).toHaveText('5');
});
