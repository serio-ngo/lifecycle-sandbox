import { expect, test } from '@playwright/test';
import { emptyFieldMessage } from '../src/messages.mjs';

test('Add with an empty field shows the empty-field message in the result', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByRole('status')).toHaveText(emptyFieldMessage);
  await page.getByLabel('First number').fill('2');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByRole('status')).toHaveText(emptyFieldMessage);
});

test('Filling both numbers after the empty-field message shows their sum', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByRole('status')).toHaveText(emptyFieldMessage);
  await page.getByLabel('First number').fill('2');
  await page.getByLabel('Second number').fill('3');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByRole('status')).toHaveText('5.00');
});

test('Clear empties the empty-field message', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByRole('status')).toHaveText(emptyFieldMessage);
  await page.getByRole('button', { name: 'Clear' }).click();
  await expect(page.getByRole('status')).toHaveText('');
});
