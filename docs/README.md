---
description: 'Central documentation hub: structure, authoring standards, navigation map, and contribution workflow for all documentation families.'
---

# Documentation Hub (`/docs`)

Authoritative index for this repository's documentation sets (block theme guidance, coding standards, Gutenberg guides, Copilot space assets, frontmatter schemas, and language/tagging conventions). Start here to understand scope, locate the right area, and contribute effectively.

## Goals

-   Provide a single, scannable map of all doc families
-   Enforce consistent authoring (frontmatter, tone, accessibility, i18n)
-   Clarify where to add new content vs. extend existing pages
-   Surface governance assets (schemas, conventions, automation scripts)
-   Reduce duplication and drift

## Directory Overview

| Path                             | Purpose                                                                                     | Key Entry                                                                              | Add New Content When                                    |
| -------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `block-themes/`                  | Block theme design & build guidelines (structure, spacing, typography, palettes, patterns). | [`block-themes/README.md`](./block-themes/README.md)                                   | Creating or evolving cross‑theme design/build guidance. |
| `coding-standards/`              | Aggregate of WordPress + project style rules (PHP, JS, CSS, docs).                          | [`coding-standards/README.md`](./coding-standards/README.md)                           | Adding/clarifying enforceable standards.                |
| `coding-standards/ash-research/` | Research notes underpinning formalised standards.                                           | [`coding-standards/ash-research/README.md`](./coding-standards/ash-research/README.md) | Capturing exploratory findings pre‑promotion.           |
| `gutenberg/`                     | How‑to, getting started, reference & schema notes for the block editor.                     | [`gutenberg/README.md`](./gutenberg/README.md)                                         | Documenting editor APIs or workflows not yet covered.   |
| `copilot-space/`                 | Authoring & governance for prompts, instructions, chat modes, agents, schemas.              | [`copilot-space/README.md`](./copilot-space/README.md)                                 | Adding AI asset authoring guidance or schemas.          |
| `frontmatter/`                   | YAML frontmatter schemas, conventions, cheat sheets.                                        | [`frontmatter/README.md`](./frontmatter/README.md)                                     | Extending schema or adding normative rules.             |
| `language-style.md`              | Editorial tone & UK English localisation rules.                                             | `language-style.md`                                                                    | Adjusting lexical or localisation policy.               |
| `tagging-plan.md`                | Proposed/active tagging taxonomy across assets.                                             | `tagging-plan.md`                                                                      | Evolving controlled vocabulary.                         |

## Navigation Aids

-   Prefer browsing via the entry `README.md` in each family before deep linking.
-   Schemas live under the closest `schemas/` subfolder (e.g. `copilot-space/schemas/`).
-   Cross‑cutting conventions (frontmatter, tagging, language) sit at root of `/docs`.

## Authoring Principles

1. Clarity first: plain, direct language; avoid needless jargon.
2. Accessibility in mind: logical heading hierarchy (single `h1`), descriptive link text, lists for procedural steps.
3. Single source of truth: avoid duplicating normative guidance—link instead.
4. Explain "why" for standards; reference upstream sources (Core, WCAG, WPCS) where relevant.
5. Keep examples minimal; escalate to a dedicated page only when reuse/value justifies.
6. Use UK English spelling (see `language-style.md`).

## Frontmatter Conventions

All new Markdown files SHOULD include frontmatter with at least:

```
---
description: 'Concise, single‑sentence purpose.'
---
```

Optional fields (when governed by schemas) may include: `status`, `deprecated`, `replacement`, `tags`, `domain`, `stability`.

## Content Decision Flow

```
Is it a standard? -> coding-standards/
Design token/theme build? -> block-themes/
Block editor API/how-to? -> gutenberg/
AI prompt/instruction/chat asset? -> copilot-space/
YAML metadata rule? -> frontmatter/
Lexical or tagging policy? -> language-style.md / tagging-plan.md
Research (pre-standard)? -> coding-standards/ash-research/
```

## Contribution Workflow (Docs)

1. Identify correct directory (use decision flow above).
2. Draft or extend content with required frontmatter.
3. Ensure internal links are relative; no absolute GitHub URLs.
4. Provide rationale for new standards (link research if available).
5. Run any available doc tooling (e.g., README generator for Copilot assets).
6. Open PR with succinct summary + impact (add to `CHANGELOG.md` if normative change).
7. Request review from maintainers familiar with that domain.

## Quality Gates

| Area          | Checklist                                                             |
| ------------- | --------------------------------------------------------------------- |
| Structure     | Single `#` H1; no skipped levels; tables have headers.                |
| Accessibility | Meaningful link text; lists for steps; no colour-only meaning.        |
| Consistency   | UK English; consistent casing for headings; inline code for literals. |
| Accuracy      | No stale references; duplicate concepts link to canonical page.       |
| Frontmatter   | `description` present; deprecated assets note replacement.            |
| Linking       | Relative paths; verify targets exist.                                 |

## Deprecation Policy

Mark obsolete pages with frontmatter:

```
---
description: 'Previous guidance on X (deprecated).'
deprecated: true
replacement: './new-guidance.md'
---
```

Retain file (for link stability) but add a lead notice pointing to the replacement.

## Automation & Tooling

| Tool                  | Purpose                                | Location                                  |
| --------------------- | -------------------------------------- | ----------------------------------------- |
| README generator      | Builds asset tables for Copilot space. | `.github/scripts/update-readme.js`        |
| Collections validator | Validates collection manifests.        | `.github/scripts/validate-collections.js` |
| YAML parser           | Lightweight schema parsing util.       | `.github/scripts/yaml-parser.js`          |

Future enhancements (see Roadmap) will add frontmatter validation across `/docs`.

## Roadmap (Documentation Governance)

-   Frontmatter linter: enforce `description`, controlled tag set.
-   Domain/stability taxonomy surfacing in generated indexes.
-   Automated deprecated-page banner injection.
-   Link checker (internal relative links only) CI job.
-   Schema drift detector for Copilot & frontmatter assets.

## Quick Links

-   Block Themes: [`block-themes/`](./block-themes/)
-   Coding Standards: [`coding-standards/`](./coding-standards/)
-   Gutenberg: [`gutenberg/`](./gutenberg/)
-   Copilot Space: [`copilot-space/`](./copilot-space/)
-   Frontmatter Schemas: [`frontmatter/`](./frontmatter/)
-   Tagging Plan: [`tagging-plan.md`](./tagging-plan.md)
-   Language Style: [`language-style.md`](./language-style.md)

## FAQ

**Where do I put experimental notes?** `coding-standards/ash-research/` until promotion.

**How do I add a new schema?** Place under the closest `schemas/` folder; document fields with purpose + examples.

**Can I reorganise directories?** Only via a dedicated PR with migration notes (update inbound links + changelog).

## Review Checklist (PR Author)

-   [ ] Correct directory selected
-   [ ] Frontmatter present & meaningful
-   [ ] Relative links verified
-   [ ] No duplicated normative text
-   [ ] Accessibility basics (headings, lists, link text) ok
-   [ ] Rationale provided (if standard)

## Maintainer Review Prompts

Ask: Does this duplicate existing guidance? Should part move to research or be merged into another page? Are terms consistent with `language-style.md` & `tagging-plan.md`?

## License & Copyright

Project license terms apply; attribution retained where required. Follow repository governance for external source excerpts (quote & cite).

---

Generated with accessibility and consistency in mind; please still manually audit and run external tools (e.g., Accessibility Insights) if publishing externally.
