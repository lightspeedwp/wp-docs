# Tagging System Migration Plan (Stub)

Status: Draft / Planning Phase
Target Phase: Post-Agent Governance (Upcoming)

## 1. Objectives

- Enable filtered discovery of prompts, instructions, collections, chat modes, and agent specializations without deleting generic assets.
- Preserve backward compatibility (no filename changes required initially).
- Support cross-cutting queries (e.g., `block-theme` + `a11y`).

## 2. Tag Taxonomy (Initial Proposal)

Core domain tags:

- `wp-core` – Interacts directly with WordPress core APIs (hooks, filters, wp.data).
- `block-theme` – Theme.json, style variations, block templates.
- `plugin-hardening` – Security, capability checks, nonces, sanitization.
- `perf` – Performance (Core Web Vitals, query optimisation, caching).
- `a11y` – Accessibility patterns & WCAG guidance.
- `i18n` – Internationalization & localization.
- `security` – OWASP-aligned secure coding beyond plugin-hardening specifics.
- `headless` – WP as data layer (REST / GraphQL) integrations.
- `generic` – Broad engineering asset not WP-specific.

Extended (candidate) tags to evaluate later:

- `editor-extensibility`, `rest-api`, `testing`, `tooling`, `devops`.

## 3. Tag Placement Strategy

Phase 1 (Non-breaking): Frontmatter insertion into new/modified assets only.
Phase 2: Batch annotate legacy assets via scripted pass.
Phase 3: Generate tag index (`tags/index.json`) for tooling & documentation pages.

## 4. Frontmatter Schema (Draft)

```yaml
---
tags: [block-theme, a11y]
status: stable # (draft|stable|deprecated)
introduced: 2025-10-01
updated: 2025-10-01
description: "Short human-readable summary (<=140 chars)"
---
```

Validation rules:

- `tags` must be non-empty array of known taxonomy values (warn on unknown).
- `status` enumerated: `draft|stable|deprecated`.
- `description` required for new assets.

## 5. Automation & Tooling

- Extend `scripts/lint-agents.js` or create `scripts/lint-tags.js` to:
  - Parse frontmatter (YAML) when present.
  - Validate taxonomy membership.
  - Report unused tags.
  - Generate summary index file.

## 6. Migration Workflow

1. Approve final taxonomy.
2. Implement linter & index generator.
3. Annotate high-value WP-specific docs first (themes, a11y, perf, security).
4. Run diff-based QA to ensure no semantic drift.
5. Publish updated README sections referencing tag filtering.

## 7. Risk Mitigation

- Avoid renaming files during tagging to prevent broken inbound links.
- Start with additive metadata; no deletion of generic assets until proven redundancy.
- Provide alias mapping if taxonomy evolves (e.g., `perf` -> `performance`).

## 8. Open Questions

- Should `generic` be implicit (absence of WP-specific tags) vs explicit tag?
- Do we split `plugin-hardening` vs broader `security` or treat latter as umbrella?
- Introduce version pinning field for assets tied to specific WP major versions?

## 9. Success Metrics

- 100% of WP-focused assets tagged within two iterations.
- Lint CI: zero unknown tag violations.
- Discoverability improvement (qualitative maintainer feedback) post-rollout.

## 10. Next Actions (Draft)

| ID  | Action                                | Owner       | Status  |
| --- | ------------------------------------- | ----------- | ------- |
| 1   | Ratify taxonomy set v1                | Maintainers | Pending |
| 2   | Implement tag linter                  | TBD         | Pending |
| 3   | Annotate block theme docs             | TBD         | Pending |
| 4   | Generate tag index artifact           | TBD         | Pending |
| 5   | Update README with filtering guidance | TBD         | Pending |

---

This stub will evolve during the taxonomy ratification discussion.
