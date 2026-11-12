---
name: sum-page
description: Use when changing or testing the sum page (index.html, src/sum.mjs, src/app.mjs, tests, e2e).
---

# Sum page

- Page `/` is `index.html`: inputs named `a` and `b`; buttons Add and Clear (reset); `output aria-live="polite"` (role status).
- `src/sum.mjs` exports pure `sum(a, b)`.
- `src/app.mjs` shows `String(sum(data.get('a'), data.get('b')))` on submit and empties the output on reset.
- Unit tests `tests/*.test.mjs`: `npm test` (node --test).
- E2e tests `e2e/*.spec.mjs`: `npm run e2e` (Playwright; server `node scripts/serve.mjs` on 127.0.0.1:4173).
- Test title: `#<N> AC<n>: …`.
- Constraint (issue 6): `sum` returns a string with two decimals (`toFixed(2)`); `app.mjs` does not change.
- Locators: `getByLabel('First number')`, `getByLabel('Second number')`, `getByRole('button',{name:'Add'})`, `getByRole('status')`.
