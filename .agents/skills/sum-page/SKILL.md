---
name: sum-page
description: Use when changing or testing the sum page (index.html, src/sum.mjs, src/app.mjs, src/messages.mjs, tests, e2e).
---

# Sum page

| Boundary | Contract |
|---|---|
| Page `/` (`index.html`) | Inputs labelled "First number" and "Second number" (names `a`, `b`; not `required`, so Add always reaches the submit handler); buttons "Add" (submit) and "Clear" (reset); the result is `output aria-live="polite"` (role `status`) |
| `sum(a, b)` in `src/sum.mjs` | Pure; takes two numeric strings; returns their sum as a string with two decimals and a comma between each group of three integer digits: `sum('2', '3')` is `'5.00'`, `sum('1000', '2000')` is `'3,000.00'`, `sum('1000000', '0')` is `'1,000,000.00'` |
| `emptyFieldMessage` in `src/messages.mjs` | The text the result shows when a field is empty; the module has no DOM code, so the page and the tests both import it |
| `src/app.mjs` | On submit shows `emptyFieldMessage` in the result when either field is empty, otherwise `sum(a, b)`; on reset empties the result |

| Command | Runs |
|---|---|
| `npm test` | Unit tests `tests/*.test.mjs` (node --test) |
| `npm run e2e` | E2e tests `e2e/*.spec.mjs` (Playwright; it starts `node scripts/serve.mjs` on 127.0.0.1:4173) |

- A negative sum keeps its minus sign: `sum('-2', '-3')` is `'-5.00'`, `sum('-0.01', '0')` is `'-0.01'`.
- A sum below 1000 in absolute value has no separator: `sum('999.99', '0')` is `'999.99'`; a negative sum keeps the separator: `sum('-1500', '0')` is `'-1,500.00'`.
- A sum that rounds to zero at two decimals is `'0.00'`, never `'-0.00'`: `sum('-0.001', '0')` is `'0.00'`.
- Locators: `getByLabel('First number')`, `getByLabel('Second number')`, `getByRole('button', { name: 'Add' })`, `getByRole('button', { name: 'Clear' })`, `getByRole('status')`.
