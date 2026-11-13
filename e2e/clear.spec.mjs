import { expect, test } from '@playwright/test';

test('#2 AC1: Clear empties both fields and the result', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('First number').fill('2');
  await page.getByLabel('Second number').fill('3');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByRole('status')).toHaveText('5.00');

  await page.getByRole('button', { name: 'Clear' }).click();

  await expect(page.getByLabel('First number')).toHaveValue('');
  await expect(page.getByLabel('Second number')).toHaveValue('');
  await expect(page.getByRole('status')).toHaveText('');
});
