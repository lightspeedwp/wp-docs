# Development Guide (Documentation, Standards & Automation)

This repository is a documentation & governance hub (block themes, coding standards, Gutenberg guides, AI assistance assets). It is **not** a monolithic application or single WordPress theme. This guide explains how to work effectively with its documentation, automation scripts, and quality frameworks.

## 1. Environment

Prerequisites:

-   Node.js ≥ 18 (for generator / validation scripts)
-   npm ≥ 9
-   Git

Install dependencies (only needed for contributor tooling):

```bash
npm install
```

## 2. Key Scripts

| Command                    | Purpose                                                                 |
| -------------------------- | ----------------------------------------------------------------------- |
| `npm run build`            | Regenerates aggregated README tables / catalogs via `update-readme.js`. |
| `npm run lint:agents`      | (If present) Validates agent persona file structure.                    |
| `npm run lang:en-gb`       | Dry-run UK English spelling normalisation (report only).                |
| `npm run lang:en-gb:apply` | Apply UK English normalisation changes.                                 |

Run these before opening a PR if you modified related areas.

## 3. Directory Overview

| Path                    | Description                                                           |
| ----------------------- | --------------------------------------------------------------------- |
| `block-themes/`         | Guidance for block theme architecture, spacing, typography tokens.    |
| `coding-standards/`     | WordPress + internal coding & documentation standards.                |
| `gutenberg/`            | Editor / block API usage, how‑to & reference material.                |
| `frontmatter/`          | Schemas & conventions for YAML frontmatter across asset types.        |
| `.github/instructions/` | Global instruction sets (accessibility, security, performance, etc.). |
| `.github/scripts/`      | Canonical automation scripts (README generation, validation).         |

## 4. Making Documentation Changes

1. Locate the most specific existing file. Avoid duplicating overlapping guidance—extend or refactor.
2. Add or update content using consistent heading hierarchy (single H1 per file, logical H2/H3 flow).
3. Ensure UK English spelling (run language script if large edits).
4. Provide context: WHY a guideline exists, not just WHAT to do.
5. Keep examples minimal, security‑aware (no secrets, no unsafe patterns like unsanitised SQL/HTML).
6. Update `CHANGELOG.md` if change is user‑visible or alters contributor process.

## 5. Accessibility, Security, Performance & i18n

Before submitting changes that introduce code examples or patterns:

-   Check `.github/instructions/a11y.instructions.md` for accessibility expectations.
-   Apply secure coding guidance (`security-and-owasp.instructions.md`).
-   Reference performance best practices (`performance-optimization.instructions.md`).
-   Ensure internationalisation examples wrap user‑facing strings where relevant.

## 6. Adding / Updating Agent Personas

1. Review `AGENTS.md` (global contract).
2. Copy the template (if provided) to the target directory as `AGENT.md` when real specialisation exists.
3. Keep persona files concise (< ~150 lines) and link to canonical rules instead of repeating them.
4. Run `npm run lint:agents` if the linter script enforces structure.

## 7. Frontmatter Conventions

When creating new instruction, prompt, or collection files:

-   Include required frontmatter keys defined under `frontmatter/` schemas.
-   Use lower‑case, hyphen‑separated filenames.
-   Provide non‑empty `description` values wrapped in single quotes.

## 8. Changelog Updates

Follow Keep a Changelog categories. Group related small tweaks into one entry. Place under `[Unreleased]` then move to a tagged release during version cut.

## 9. Review Checklist (Pre‑PR)

```text
[ ] Content accurate & non‑duplicative
[ ] Single H1; logical heading order
[ ] Accessibility / security / performance considerations respected
[ ] Examples safe (no secrets, no vulnerable patterns)
[ ] UK English spelling normalised
[ ] Added/Updated entry in CHANGELOG if user‑visible
[ ] Frontmatter (if applicable) valid & minimal
[ ] Build / language scripts run if needed
```

## 10. Testing Generated Outputs

If you modify generator scripts:

1. Run `npm run build` and inspect diffs.
2. Ensure no unintended table or link regressions.
3. Add or adjust script usage notes here if behaviour changed.

## 11. Performance & Size Considerations

Keep prose high-signal. Avoid extremely long enumerations where a link to canonical docs suffices. Prefer tables for structured comparisons (e.g., spacing token tiers, role mapping).

## 12. Licence Alignment

This repository is GPL-3.0-only. Ensure any copied snippets are GPL-compatible or original. Attribute external normative references via links rather than embedding large verbatim sections.

## 13. Common Anti‑Patterns

-   Duplicating existing guidance instead of consolidating.
-   Introducing US spelling variants after normalisation.
-   Overly generic AI prompt examples without WordPress context.
-   Large refactors in a single PR without rationale.
-   Adding ARIA where native semantics are sufficient.

## 14. Getting Help

Open an issue (see CONTRIBUTING) or start a focused discussion referencing specific files/sections. Provide rationale and desired outcome—not just a problem statement.

---

This guide evolves as automation and taxonomy mature. Propose improvements through normal contribution flow.
