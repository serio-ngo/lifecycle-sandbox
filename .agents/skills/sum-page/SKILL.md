---
name: sum-page
description: Use when changing or testing the sum page (index.html, src/sum.mjs, src/app.mjs, tests, e2e).
---

# Sum page

| Boundary | Contract |
|---|---|
| Page `/` (`index.html`) | Inputs labelled "First number" and "Second number" (names `a`, `b`); buttons "Add" (submit) and "Clear" (reset); the result is `output aria-live="polite"` (role `status`) |
| `sum(a, b)` in `src/sum.mjs` | Pure; takes two numeric strings; returns their sum as a string with two decimals: `sum('2', '3')` is `'5.00'` |
| `src/app.mjs` | On submit shows `sum(a, b)` in the result; on reset empties the result |

| Command | Runs |
|---|---|
| `npm test` | Unit tests `tests/*.test.mjs` (node --test) |
| `npm run e2e` | E2e tests `e2e/*.spec.mjs` (Playwright; it starts `node scripts/serve.mjs` on 127.0.0.1:4173) |

- Test title: `#<N> AC<n>: …`.
- Locators: `getByLabel('First number')`, `getByLabel('Second number')`, `getByRole('button', { name: 'Add' })`, `getByRole('status')`.
