# Pull Request Template (Markdown)

## Description

Brief summary of changes and their purpose.

**Related Issue:** Fixes #[issue-number]

## Type of Change

<!-- Mark the relevant option -->

-   [ ] 📝 Documentation update (content changes, new guidance)
-   [ ] 🛠️ Automation/tooling (scripts, workflows, linting)
-   [ ] 🏗️ Structure/organisation (file moves, renames, new directories)
-   [ ] 🐛 Bug fix (corrects errors, broken links, typos)
-   [ ] ✨ New feature (new instruction sets, agent personas, substantial content)
-   [ ] 💥 Breaking change (affects existing workflows or references)

## Quality Gate Checklist

**Required for all PRs:**

-   [ ] Linked Issue referenced above
-   [ ] Clear test/verification steps provided below
-   [ ] Changes respect existing file structure and conventions
-   [ ] No secrets or sensitive data included in changes

**Content & Compliance:**

-   [ ] Accessibility considerations (semantic markup, clear language, contrast)
-   [ ] Performance impact considered (no obvious regressions, efficient examples)
-   [ ] Security considerations (safe code examples, proper escaping/sanitisation)
-   [ ] i18n: user‑facing strings properly wrapped/explained (where applicable)

**Documentation Standards:**

-   [ ] Documentation updated (README/CHANGELOG/inline docs) if needed
-   [ ] UK English spelling normalised (`npm run lang:en-gb` applied if broad changes)
-   [ ] WordPress-first context provided (hooks, filters, theme.json where relevant)
-   [ ] Links and cross-references verified as functional

**Build & Integration:**

-   [ ] Generated catalogues updated (`npm run build`) if catalogue changes made
-   [ ] Agent persona structure follows conventions (if applicable)
-   [ ] Changes align with coding standards in `coding-standards/`

## Testing Instructions

**How to test these changes:**

1. Step-by-step verification process
2. What to look for (expected behaviour)
3. Any special setup or conditions needed

**Example verification:**

-   [ ] Run `npm run build` and verify no unexpected diffs
-   [ ] Check that new links resolve correctly
-   [ ] Validate examples follow security best practices

## Screenshots (if applicable)

<!-- Add screenshots for UI/documentation layout changes -->
<!-- Before/after comparisons for significant content restructuring -->

## Changelog Entry

**Category:** [Added/Changed/Deprecated/Removed/Fixed/Security]

**Entry:** Brief description for CHANGELOG.md

## Additional Context

<!-- Any additional information, considerations, or follow-up tasks -->
<!-- Reference to related PRs or issues -->
<!-- Breaking change migration notes if applicable -->

---

## Review Guidelines

**For Reviewers:**

-   Verify quality gate checklist completed accurately
-   Test provided verification steps
-   Check for WordPress-specific best practices alignment
-   Ensure changes don't conflict with existing guidance
-   Validate accessibility, security, and performance considerations

**For Authors:**

-   Be responsive to feedback and suggestions
-   Update checklist as you address review comments
-   Add follow-up commits rather than force-pushing over reviewed history
-   Update the PR description if scope changes significantly

---

By submitting this pull request, I confirm that my contribution abides by the repository governance and will be licensed under the GPL-3.0-only licence.
