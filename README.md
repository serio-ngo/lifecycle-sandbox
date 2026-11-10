# lifecycle-sandbox

Proving ground for the Serio AI dev lifecycle and the first hour of a new developer.
Design: `serio-ngo/ops`, `lifecycle/DESIGN.md`. Public repository: no secret, no personal data.

The app is one page with a form and one pure function, `src/sum.mjs`.

| Command | Does |
|---|---|
| `npm ci` | Install Playwright |
| `npm test` | Unit tests, `tests/` |
| `npx playwright install chromium`, then `npm run e2e` | e2e tests, `e2e/` |
| `npm run serve` | The page at <http://127.0.0.1:4173> |

## One task

| Step | Who | Act |
|---|---|---|
| 1 | you | New issue from the **Spec** form; assign yourself; add the label `spec-review` |
| 2 | agent | Comments the verdict, questions and criteria `AC1…ACn` |
| 3 | you | Edit the issue until the verdict is `ready`; add `spec-ok` |
| 4 | agent | Draft pull request from `agent/<N>-<slug>` with one failing test per criterion |
| 5 | you | Read the tests; submit a review whose text starts with `tests-ok` |
| 6 | agent | Code that turns the tests green; the pull request is marked ready |
| 7 | CI | Test lock and the acceptance report: one row per criterion |
| 8 | you | Approve the latest push and merge |

## First hour

1. Install the plugin: `claude plugin marketplace add serio-ngo/serio-focus`, then `claude plugin install serio-focus@serio-ngo`.
2. Pick a toy task and write its spec.
3. Run each stage by hand: `/serio-focus:spec-review <issue>`, `/serio-focus:write-tests <issue>`,
   `/serio-focus:deliver task issue #<issue> on pull request #<PR>`, `/serio-focus:gate <PR>`.
4. Run a second task through the labels only.

| Toy task | Level |
|---|---|
| A "Clear" button empties both fields and the result | e2e |
| The result shows two decimals: 2 and 3 give `5.00` | unit, e2e |
| An empty field shows "Enter both numbers" instead of a result | e2e |

Labels: `spec-review`, `spec-ok`, `needs-human`. Rulesets on `main`: `agent-gate` (pull request, code-owner
approval of the latest push) and `human-merge` (only a person updates `main`, through a pull request).

Probe: the gate treats this branch as "not a lifecycle pull request".
