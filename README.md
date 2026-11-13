# lifecycle-sandbox

A toy app to try the [serio-focus](https://github.com/serio-ngo/serio-focus) AI dev lifecycle on, before a real repository.
Its README has the steps of one task. Apache-2.0. No secret, no personal data.

The app is one page with a form and one pure function, `src/sum.mjs`.

| Command | Does |
|---|---|
| `npm ci` | Install Playwright |
| `npm test` | Unit tests, `tests/` |
| `npx playwright install chromium`, then `npm run e2e` | e2e tests, `e2e/` |
| `npm run serve` | The page at <http://127.0.0.1:4173> |

## First hour

1. Install the plugin: `claude plugin marketplace add serio-ngo/serio-focus`, then `claude plugin install serio-focus@serio-ngo`.
2. Pick a toy task and write its spec from the **Spec** issue form.
3. Run each stage by hand in Claude Code: `/serio-focus:spec-review <issue>`, `/serio-focus:write-tests <issue>`,
   `/serio-focus:deliver task issue #<issue> on pull request #<PR>`, `/serio-focus:gate <PR>`.
4. Run a second task through the labels only: `spec-review`, `spec-ok`, then a review that starts with `tests-ok`.

| Toy task | Level |
|---|---|
| A "Clear" button empties both fields and the result | e2e |
| The result shows two decimals: 2 and 3 give `5.00` | unit, e2e |
| An empty field shows "Enter both numbers" instead of a result | e2e |

## Use it in your organisation

1. Create a repository from this template. Keep `CODEOWNERS`, the labels `spec-review`, `spec-ok`, `needs-human`, and two
   rulesets on `main`: `agent-gate` (pull request, code-owner approval of the latest push) and `human-merge` (only people
   update `main`: their entry is in bypass mode `exempt`, no App has one).
2. Create a GitHub App (Contents, Pull requests, Issues: write; Checks, Actions: read); set `AGENT_APP_ID`, `AGENT_APP_KEY`.
3. Each developer: `claude setup-token`, saved as the secret `CLAUDE_TOKEN_<LOGIN>`, login in capitals.
