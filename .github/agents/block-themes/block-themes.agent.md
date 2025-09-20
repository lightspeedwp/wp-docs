---
name: 'Block Themes Agent Guide'
description: 'Local specialization for the block-themes/ directory providing guidance on block theme architecture'
tools: ['read_file', 'semantic_search', 'grep_search']
license: 'GPL-3.0'
---

# Block Themes Agent Guide

Local specialization for the `block-themes/` directory. Complements global rules in `../AGENTS.md`. Keep decisions lean, link instead of restating.

---

## 1. Scope

This directory curates guidance around **block theme architecture**: `theme.json`, style variations, spacing & typography scales, colour and font presets, templates, patterns, and naming conventions. It does **not** store production theme packages—only documentation, patterns, and standards.

Out of Scope: Plugin logic, REST controllers, server-only performance tuning details (those belong in other focused docs or instructions files).

## 2. Primary Objectives

1. Provide a consistent, token-driven design system (colours, typography, spacing) via `theme.json`.
2. Reduce CSS specificity & cascade complexity—prefer editor-aware presets over custom selectors.
3. Maintain accessible colour contrast across all palettes & style variations.
4. Avoid duplication: every design decision should exist in exactly one authoritative location.
5. Keep performance overhead minimal (lean `theme.json`, no unused presets).

## 3. Key Artifacts

| Artifact                | Purpose                                                        |
| ----------------------- | -------------------------------------------------------------- |
| `theme-*.json`          | Example or experimental theme.json snapshots for illustration. |
| `global-styles.md`      | Conceptual mapping of theme.json sections.                     |
| `colour-palettes.md`    | Palette strategy & accessibility constraints.                  |
| `typesets.md`           | Typography scale & responsive behaviour.                        |
| `fluid-spacing*.md`     | Spacing scale definition & fluid interpolation rationale.      |
| `style-variations.md`   | Style variation guidelines & constraints.                      |
| `templates.md`          | Template / template part composition principles.               |
| `naming-conventions.md` | Naming patterns for tokens & files.                            |

## 4. Local Conventions

- **Token Naming:** Use kebab-case; semantic > literal (e.g., `brand-primary`, not `blue-500`).
- **Preset Minimization:** Remove or do not add a preset unless actually referenced in docs/examples.
- **Spacing & Typography:** Always reference documented scale variables—no raw pixel values unless justified (log in PR body).
- **Colour Contrast:** Palettes must pass 4.5:1 for normal text and 3:1 for large text; variations referencing weaker contrast require documented exception rationale.
- **Fluid Scales:** Fluid spacing & typography must clamp within documented min/max to avoid layout shift or readability loss.

## 5. Common Tasks (Playbooks)

| Task                      | Steps                                                                                      | Notes                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| Introduce new colour token | 1) Add to palette doc 2) Justify semantic role 3) Validate contrast 4) Add to `theme.json` | Reject if duplicates existing role                      |
| Adjust spacing scale      | Update fluid spacing doc; regenerate examples; note migration impacts                      | Avoid retroactive renaming unless critical              |
| Add style variation       | Define variation goals; ensure overrides minimal; document contrast delta                  | Variation must not override core semantic token meaning |
| Deprecate unused token    | Search references; mark deprecated; remove after grace period                              | List removal in root changelog if widely referenced     |

## 6. Quality Focus Map

| Dimension       | Priority | Local Nuance                                                        |
| --------------- | -------- | ------------------------------------------------------------------- |
| Accessibility   | High     | Palette + typography contrast & readable fluid scaling              |
| Performance     | High     | Minimal `theme.json`; no dead presets                               |
| Maintainability | High     | Single source of truth for each scale                               |
| i18n            | Low      | Mostly structural docs; ensure any exemplar UI strings translatable |
| Security        | Low      | Content is documentation-focused (sanitization not primary here)    |

## 7. Anti-Patterns

- Adding visual tokens without semantic purpose.
- Hard-coded inline style values instead of referencing scales.
- Overly granular palette shades that create audit burden (prefer curated, purposeful steps).
- Style variation that redefines base semantic token meaning rather than layering aesthetic difference.
- Excessive nested CSS or high specificity selectors to fight cascade—fix at token/design level.

## 8. Extension Points / Hooks

No executable hooks here, but guidelines influence downstream theme scaffolds. If future automation scripts (e.g., token linter) are added, document them here and in root changelog.

## 9. Open Questions / Future Enhancements

- Automated contrast regression script for palette proposals.
- Theme.json linter to flag unused presets.
- Token usage visual matrix linking docs to example templates.

## 10. Directory Change Log

| Date       | Change                                  | Impact                                |
| ---------- | --------------------------------------- | ------------------------------------- |
| 2025-09-20 | Initial `AGENT.md` specialization added | Establishes local governance baseline |

---

If this file grows too large, extract deep dives (e.g., fluid typography math) into separate instruction docs and link back.
