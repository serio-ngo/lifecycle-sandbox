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
