import { expect, test } from '@playwright/test';

test('#13 AC1: both fields empty shows Enter both numbers', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByRole('status')).toHaveText('Enter both numbers');
});

test('#13 AC2: an empty second field shows Enter both numbers', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('First number').fill('2');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByRole('status')).toHaveText('Enter both numbers');
});

test('#13 AC3: filling both numbers after the message shows 5.00', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByRole('status')).toHaveText('Enter both numbers');
  await page.getByLabel('First number').fill('2');
  await page.getByLabel('Second number').fill('3');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByRole('status')).toHaveText('5.00');
});

test('#13 AC4: Clear empties the message', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByRole('status')).toHaveText('Enter both numbers');
  await page.getByRole('button', { name: 'Clear' }).click();
  await expect(page.getByRole('status')).toHaveText('');
});
