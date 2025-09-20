<!-- lightspeedwp root documentation -->

# lightspeedwp – WordPress Engineering & AI Assistant Docs

Accelerating high‑quality WordPress development with reusable AI building blocks (prompts, instructions, chat modes, agent governance) and domain handbooks (block themes, coding standards, Gutenberg guides). Everything is tuned to produce fast, secure, accessible, internationalised, and maintainable solutions (themes, plugins, blocks, patterns).

## Mission

Empower WordPress developers to deliver production‑ready features at lightspeed while upholding coding standards, accessibility (WCAG 2.2), performance, security (OWASP), and sustainable long‑term maintainability.

## Repository Structure (Primary Areas)

| Area                 | Path                     | Summary                                                             |
| -------------------- | ------------------------ | ------------------------------------------------------------------- |
| Documentation Hub    | `docs/`                  | Master index & cross-cutting conventions (see `docs/README.md`).    |
| Copilot / AI Assets  | `docs/copilot-space/`    | Prompts, instructions, chat modes, agent schemas & authoring rules. |
| Block Theme Guidance | `docs/block-themes/`     | Fluid spacing, typography scales, global styles, naming, patterns.  |
| Coding Standards     | `docs/coding-standards/` | WordPress coding standards overlays, inline docs, research notes.   |
| Gutenberg Guides     | `docs/gutenberg/`        | Getting started, how‑tos, reference, schemas.                       |
| Frontmatter Schemas  | `docs/frontmatter/`      | YAML frontmatter conventions & schemas.                             |
| Agent Governance     | `AGENTS.md`              | Behavioural contract for AI assistants & personas.                  |
| Automation Scripts   | `.github/scripts/`       | Generators, validators, normalisation tooling.                      |

See also: `CHANGELOG.md` for historical evolution.

## Why Keep Cross‑Technology Assets?

Many engineering concerns (testing discipline, performance, security, accessibility, structured planning) transcend platform boundaries. We intentionally retain high‑quality “generic” or multi‑stack assets because they:

1. Provide architectural clarity applicable to large WordPress installations (headless, API integrations, infrastructure).
2. Reduce reinvention—reuse vetted language/framework guidance where analogous (e.g. performance patterns informing PHP + JS code paths).
3. Enable mixed‑stack teams (WP + services) to align on shared standards.

Future refinement: lightweight tagging (e.g. `wp-core`, `block-dev`, `generic`, `infra`) to improve discoverability without deleting value.

## Quick Start (Using AI Assets)

1. Install desired Copilot assets (Prompts / Chat Modes / Instructions) via VS Code badges in each catalog.
2. Copy any custom instruction you want permanently into `.github/instructions/` (or merge into a project‑level `copilot-instructions.md`).
3. Open Copilot Chat and select a lightspeedwp chat mode (or paste a prompt) to accelerate tasks.
4. Iterate: refine instructions with project specifics (naming conventions, text domain, PHPCS rules).

### Example: Generate a Block Scaffold

1. Open your plugin or theme workspace.
2. Use the “Implementation Plan” prompt to outline the block (attributes, render strategy, style variants, i18n extraction).
3. Apply “Accessibility Review” prompt / chat mode to validate ARIA & keyboard flows.
4. Use performance & security instructions to audit dynamic rendering and REST endpoints.

### Example: Harden a Custom REST Endpoint

1. Invoke security instructions (OWASP) + performance optimization guidelines.
2. Provide the endpoint handler code to a “Security & Code Quality” chat mode.
3. Request: “Suggest nonce, capability checks, caching & schema validation improvements.”

## WordPress Development Focus Areas

-   Block Themes: design tokens → `theme.json` → fluid scale alignment.
-   Gutenberg Blocks: React component patterns, server render callbacks, context & attributes hygiene.
-   Performance: asset enqueue strategy, script loading strategy, avoiding layout shift, caching layers.
-   Accessibility: semantic markup, focus management, ARIA correctness, color contrast.
-   Internationalization: text domains, `__()/_x()` usage, extraction workflow.
-   Testing: Playwright for editor flows, PHPUnit / WP-CLI tests, Jest for block UI logic.

## Contributing (Overview)

See `CONTRIBUTING.md` for full process. Summary:

1. Fork & branch.
2. Add or update a prompt / instruction / chat mode (include frontmatter) or improve a WordPress guide.
3. Keep scope tight; ensure examples are WP‑relevant where applicable.
4. Run any validation/update scripts (if present) before PR.
5. Provide rationale + before/after (if refactoring docs).

### Quality Checklist (Abbreviated)

-   Clear purpose & actionable steps
-   WordPress alignment (or clearly marked cross‑tech)
-   Accessibility & security consciousness
-   No hard‑coded secrets / unsafe patterns
-   Consistent naming & formatting

## Roadmap Snapshot

High‑level items (see `CHANGELOG.md` for canonical history & upcoming):

-   Tagging taxonomy for AI assets & docs.
-   WordPress‑specialised chat modes (Theme JSON Refiner, Block Accessibility Auditor, Hook Strategy Advisor).
-   Collections curation once tagging lands.
-   Domain surfacing (stability, domain) in generated README tables.
-   Automated link & frontmatter validator.

## Namespace & Badges

Any legacy install badges still referencing upstream sources are intentionally preserved during transition; they will migrate once tagging + mirroring strategy finalises.

## License

This repository is licensed under the **GNU GPL v3** (see `LICENSE`). Documentation and AI asset text are distributed under the same license for simplicity. If you require alternative terms for specific reuse scenarios, open an issue to discuss.

## Feedback & Improvements

Open an issue with: context, goal, current friction, desired outcome. Evidence (snippets, diffs) speeds triage.

---

Crafted with accessibility, security, performance, and internationalisation in mind—manual review & testing still required.
