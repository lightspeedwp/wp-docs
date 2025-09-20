# Contributing

Thank you for your interest in contributing to LightSpeed! Please follow this workflow to help us maintain a high-quality, consistent codebase and community.

## Ideal Contribution Workflow

### 1. Start with the GitHub Issue

-   Use the appropriate [issue template](https://github.com/lightspeedwp/wp-docs/issues/new/choose) for bug reports, enhancements, or questions.
-   Clearly describe the problem, feature, or task. Include as much detail as possible (steps to reproduce, expected behavior, environment, etc.).
-   Discuss your intended approach in the issue before starting work, if needed.

### 2. Create a Branch

-   Use a descriptive branch name, such as `feature/short-description`, `bugfix/short-description`, or `chore/short-description`.

### 3. Develop Your Solution

-   Follow the coding standards and style guides used in this repository:
    -   WordPress coding standards (PHP, JS, CSS) – see `coding-standards/`
    -   Accessibility (WCAG 2.2 AA) – see `.github/instructions/a11y.instructions.md`
    -   Security (OWASP & WP hardening) – see `.github/instructions/security-and-owasp.instructions.md`
    -   Performance – see `.github/instructions/performance-optimization.instructions.md`
    -   Internationalisation – ensure user‑facing strings are translatable
-   Write clear, concise commit messages (imperative mood, reference issue where applicable).
-   Keep changes focused; unrelated refactors should be a separate PR.

### 4. Create a Pull Request (PR)

-   Open a PR from your branch to the default branch unless otherwise specified.
-   **All PRs must have a description.** Make sure the description is accurate and updated if changes are made.
-   **All PRs must include a link to the related GitHub Issue in the description.** If a ticket does not exist, please create one.
-   **All PRs must include information on how the change can be tested.** Provide a detailed list of steps or a video demonstration.
-   **All PRs must contain screenshot(s) of any UI changes.** Add screenshots in the PR details and update them as needed in comments.
-   **Tests should not be skipped!** If you must skip a test, provide your justification.
-   **PRs with module version bumps should have a link to the release notes and a summary of notable changes.**
-   **Any PR that doesn't meet the criteria in this list should be converted to a draft PR until it is ready to go.**

### 5. Review Process

-   PRs are reviewed for: correctness, clarity, accessibility, performance, security, i18n, and documentation impact.
-   Automated / AI (agent) review may provide preliminary feedback; maintainers have final approval.
-   Address feedback with follow‑up commits (avoid force‑pushing over reviewed history unless requested).

### 6. Merge

-   Once your PR is approved and all checks pass, a maintainer will merge (squash or rebase strategy at maintainer discretion). If you need a specific strategy (e.g., preserve commits), note it in the PR description.

## Additional Guidelines

-   **Changelog**: If your change affects users or contributors (new file types, process shifts, notable docs), update `CHANGELOG.md` under the appropriate category (Added, Changed, Deprecated, Removed, Fixed, Security). Combine related minor changes into a single entry where possible.
-   **Saved Replies**: If present (`SAVED_REPLIES.md`), use or extend for consistent review communication.
-   **Spelling**: Run `npm run lang:en-gb` (and optionally `lang:en-gb:apply`) when touching many docs to maintain UK English consistency.
-   **Script Regeneration**: If your change impacts generated catalogues, run `npm run build` before committing to avoid stale tables.
-   **Security & Privacy**: Do not include secrets, tokens, or private environment details in issues or PRs.
-   **Scope Control**: Large, multi‑concern changes may be requested to split for easier review.

## Quality Gate Checklist (Copy Into PR Description)

```text
[ ] Linked Issue referenced
[ ] Clear test / verification steps
[ ] Accessibility considerations (semantics, keyboard, contrast)
[ ] Performance impact considered (no obvious regressions)
[ ] Security considerations (escaping, sanitisation, capabilities)
[ ] i18n: user‑facing strings wrapped / explained
[ ] Documentation updated (README / CHANGELOG / inline) if needed
[ ] UK English spelling (ran lang:en-gb if broad doc changes)
[ ] No secrets / sensitive data included
```

Thank you for helping us make LightSpeed better!
