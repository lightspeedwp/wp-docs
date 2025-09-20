<!-- lightspeedwp root documentation -->

# lightspeedwp docs

Accelerating high‑quality WordPress development with reusable AI building blocks: curated prompts, custom Copilot instructions, chat modes, and domain guides – all tuned to produce fast, secure, accessible, and maintainable WordPress (Gutenberg, block themes, plugins, patterns) solutions.

## Mission

Empower WordPress developers to deliver production‑ready features at lightspeed while upholding coding standards, accessibility (WCAG 2.2), performance, security (OWASP), and sustainable long‑term maintainability.

## What This Repo Contains

| Category                 | Purpose                                                                       | Where                    |
| ------------------------ | ----------------------------------------------------------------------------- | ------------------------ |
| Prompts                  | Reusable task & workflow accelerators (e.g. block scaffolds, test strategies) | `README.prompts.md`      |
| Chat Modes               | Specialized Copilot personas (e.g. accessibility reviewer, test strategist)   | `README.chatmodes.md`    |
| Instructions             | Long‑lived behavioral guardrails & standards (a11y, security, performance)    | `README.instructions.md` |
| Collections              | Thematic bundles (under review for WP alignment)                              | `README.collections.md`  |
| Block / Theme Guidelines | Fluid spacing, typography, global styles, naming                              | `block-themes/`          |
| Coding Standards         | WordPress + inline docs + research notes                                      | `coding-standards/`      |
| Gutenberg Guides         | Getting started, how‑tos, reference                                           | `gutenberg/`             |

## Why Keep Cross‑Technology Assets?

Many engineering concerns (testing discipline, performance, security, accessibility, structured planning) transcend platform boundaries. We intentionally retain high‑quality “generic” or multi‑stack assets because they:

1. Provide architectural clarity applicable to large WordPress installations (headless, API integrations, infrastructure).
2. Reduce reinvention—reuse vetted language/framework guidance where analogous (e.g. performance patterns informing PHP + JS code paths).
3. Enable mixed‑stack teams (WP + services) to align on shared standards.

Future refinement: lightweight tagging (e.g. `wp-core`, `block-dev`, `generic`, `infra`) to improve discoverability without deleting value.

## Quick Start

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

1. Invoke security instructions (OWASP) + performance optimisation guidelines.
2. Provide the endpoint handler code to a “Security & Code Quality” chat mode.
3. Request: “Suggest nonce, capability checks, caching & schema validation improvements.”

## WordPress Development Focus Areas

- Block Themes: design tokens → `theme.json` → fluid scale alignment.
- Gutenberg Blocks: React component patterns, server render callbacks, context & attributes hygiene.
- Performance: asset enqueue strategy, script loading strategy, avoiding layout shift, caching layers.
- Accessibility: semantic markup, focus management, ARIA correctness, colour contrast.
- Internationalization: text domains, `__()/_x()` usage, extraction workflow.
- Testing: Playwright for editor flows, PHPUnit / WP-CLI tests, Jest for block UI logic.

## Contributing (Overview)

See `CONTRIBUTING.md` for full process. Summary:

1. Fork & branch.
2. Add or update a prompt / instruction / chat mode (include frontmatter) or improve a WordPress guide.
3. Keep scope tight; ensure examples are WP‑relevant where applicable.
4. Run any validation/update scripts (if present) before PR.
5. Provide rationale + before/after (if refactoring docs).

### Quality Checklist (Abbreviated)

- Clear purpose & actionable steps
- WordPress alignment (or clearly marked cross‑tech)
- Accessibility & security consciousness
- No hard‑coded secrets / unsafe patterns
- Consistent naming & formatting

## Roadmap (Initial)

- Tagging system for discovery (`generic`, `wp-block`, `wp-theme`, `infra`).
- Add WordPress‑specific chat modes (Theme JSON Refiner, Block Accessibility Auditor, Hook Strategy Advisor).
- Collections reclassification: introduce WP‑centric curated sets.
- Metrics: optional guidance for measuring Core Web Vitals in block themes.

## Install Badge Namespace Note

Current install badge links reference the original upstream namespace. They remain functional; we will migrate or dual‑publish once a stable lightspeedwp distribution path is finalized.

## Licence

Unless otherwise noted, content is MIT Licensed. Review individual file headers if present.

## Feedback & Improvements

Open an issue with: context, goal, current friction, desired outcome. Evidence (snippets, diffs) speeds triage.

---

Built with accessibility, security, and performance in mind—please still manually review and test.
