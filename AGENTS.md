# AGENTS.md

Shared rules: the lifecycle of `serio-ngo/ops` `lifecycle/DESIGN.md`. This repository is public: no secret, no personal data.

## Code Review Rules

- Check the diff against the criteria of the linked spec.
- Block a test without a criterion and a change outside `src/` that weakens a gate, a script or a test command.
- Block merge, deploy or release commands in scripts and workflows.
- Public text written by AI is minimal: keep a line only when its reader and what breaks without it are named; otherwise delete it.
