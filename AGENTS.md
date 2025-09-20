# Copilot Agents Guide (lightspeedwp)

Purpose: Establish shared behavioural, quality, and domain expectations for any AI ("agent") operating in this workspace. This is a human & AI–readable contract; it is **not** a formal agent manifest spec (those would be separate JSON/YAML artefacts if/when adopted). Keep this file concise, actionable, and WordPress‑centric while preserving the repository's cross‑technology assets.

---

## 1. Mission Alignment

See `README.md` for the full mission. In short: accelerate delivery of **high‑quality WordPress solutions** (themes, plugins, block libraries, editorial tooling) without sacrificing: accessibility (WCAG 2.2 AA), performance (Core Web Vitals), security (OWASP + WordPress hardening), internationalization, or coding standards.

Agents MUST:

1. Favour additive, non‑destructive improvements (do not delete generic assets unless explicitly directed).
2. Contextualise generic patterns with WordPress overlays (hook usage, theme.json structure, escaping, i18n).
3. Provide minimal, direct answers—only generate larger code blocks when explicitly requested or needed to illustrate a non‑trivial pattern.
4. Explain the "why" for non‑obvious decisions (strategy > verbosity).

## 2. What “Agent” Means Here

"Agent" = Any automated assistant (Copilot Chat, scripted LLM pipeline, future manifest‑backed persona) acting on this repository. This document sets default expectations. Directory‑level overrides live in `AGENT.md` files (see section 11).

## 3. Core Behavioral Principles

-   **WordPress‑First Overlay:** Always check if a solution maps to native WP APIs (hooks, filters, REST endpoints, block editor APIs) before inventing abstractions.
-   **Least Intrusive Change:** Modify only what is necessary; preserve file history and style.
-   **Security by Default:** Use capability checks (`current_user_can`), nonces, sanitisation (`sanitize_text_field`, `esc_url_raw`) and output escaping (`esc_html`, `esc_attr`, `wp_kses_post`).
-   **Performance Awareness:** Avoid unnecessary queries, duplicate asset enqueues, blocking code in the editor, or large server round trips. Suggest caching (transients / object cache) where justified.
-   **Accessibility Mindset:** Semantic elements, proper ARIA only when native semantics insufficient, focus management, colour contrast, keyboard operability. Code is produced _with accessibility in mind_ but must still be manually audited.
-   **Internationalization:** Wrap user‑facing strings in translation functions (`__`, `_e`, `_x`) with a consistent text domain.

## 4. Quality Gates (PR Readiness Checklist)

Before approving / merging, an agent should confirm:

-   [ ] Security: All user input sanitized on ingress, escaped on egress; capabilities enforced.
-   [ ] Performance: No obvious N+1 queries; assets only loaded when needed; block/theme JSON lean.
-   [ ] Accessibility: Semantics intact, interactive elements keyboard reachable, no colour contrast regressions.
-   [ ] i18n: All new user-visible strings translatable; no concatenated translatable fragments.
-   [ ] Coding Standards: Matches WordPress PHPCS, JS, CSS guidelines; consistent naming.
-   [ ] Documentation: Inline doc blocks updated; README / CHANGELOG amended if behaviour changes.
-   [ ] Tests / Validation: If logic is complex, propose or update tests (PHPUnit, Playwright, etc.).
-   [ ] Backward Safety: No breaking changes without explicit note & migration guidance.

## 5. Coding Standards References

Central references (do not restate—link):

-   `coding-standards/index.md`
-   `coding-standards/wordpress-coding-standards/*.md`
-   Inline documentation: `coding-standards/inline-documentation-standards/`
    Agents should surface the _specific_ rule when flagging an issue (e.g., "Escape late: use `esc_attr` for attribute context").

## 6. Copilot Asset Ecosystem Usage

| Asset Type   | File Pattern                   | Use For                           | Notes                                                                     |
| ------------ | ------------------------------ | --------------------------------- | ------------------------------------------------------------------------- |
| Prompts      | `*.prompt.md`                  | Task-scoped interactive patterns  | Retained generic prompts; add WP context when invoking.                   |
| Instructions | `*.instructions.md`            | Global or pattern-level standards | Already include accessibility, performance, security guidance.            |
| Collections  | `collections/*.collection.yml` | Curated groupings                 | Tagging system is pending—do not preemptively rename.                     |
| Chat Modes   | (upstream / external)          | Conversation personas             | Local directory intentionally absent; links may target upstream raw URLs. |
| Agents       | `AGENTS.md` / `AGENT.md`       | Behavioral contracts              | This file = global; per-directory specializations below.                  |

Decision Heuristic:

1. Start with existing instructions (security/a11y/performance) to frame answer.
2. If implementing a discrete WP task (e.g., enqueue editor asset), prefer a **prompt**.
3. If codifying a reusable policy (e.g., theme JSON spacing tokens), use / extend **instructions**.
4. For a long-lived persona (e.g., "Block Theme Optimizer"), create a directory `AGENT.md` using the template.

## 7. Development & Tooling Tips

Current scripts (from `package.json`):

-   `npm run build` – Executes `node scripts/update-readme.js` (keep READMEs regenerated / synchronized).
-   `npm run contributors:add` – All Contributors CLI (add new contributor).
-   `npm run contributors:generate` – Regenerate contributor table.
-   `npm run contributors:check` – Verify contributor metadata.

Agent Guidance:

1. Prefer **document changes** then run `npm run build` if a script-based regeneration is required.
2. Suggest adding lint/test scripts if complexity grows (do not invent them preemptively).
3. Never commit generated artifacts that are excluded or ephemeral.

## 8. WordPress-Specific Heuristics

| Concern      | Guidance                                                                        |
| ------------ | ------------------------------------------------------------------------------- |
| Escaping     | Escape **on output** using context-appropriate function.                        |
| Sanitization | Sanitize **on input** (settings, meta, REST requests).                          |
| Nonces       | Add for state‑changing actions; verify with `check_admin_referer`.              |
| Capabilities | Use `current_user_can( 'manage_options' )` (or narrower) instead of role names. |
| theme.json   | Consolidate design tokens; prefer presets to hard-coded CSS; keep file minimal. |
| Blocks       | Register via `block.json`; avoid server render unless dynamic necessity.        |
| Performance  | Avoid unbounded queries; leverage `WP_Query` arguments (fields, pagination).    |
| REST         | Namespaced routes; JSON schema for validation; correct permission callbacks.    |
| i18n         | Include translator comments for ambiguous strings.                              |

## 9. Performance Guardrails (Quick Scan)

-   Uncached heavy queries? Introduce transient or object cache (with invalidation strategy).
-   Large images / media references? Recommend optimisation or lazy loading.
-   Redundant script/style enqueues? Consolidate; use dependencies and `wp_enqueue_script` with versioning.
-   Avoid synchronous remote HTTP requests in page output phase.

## 10. Security Guardrails (Quick Scan)

-   No direct `$_POST` / `$_GET` usage without sanitization wrappers.
-   Prepared statements (`$wpdb->prepare`) for custom SQL.
-   Strip HTML where not required (`sanitize_text_field` vs `wp_kses_post`).
-   Resist path traversal: use WP filesystem API where applicable.

## 11. Directory-Level AGENT.md Files

Purpose: Provide _local_ augmentations without duplicating global rules.

Creation Steps:

1. Copy the template at `AGENT.md-template` (see Section 12).
2. Populate: Scope, Domain Nuances, Local Quality Focus, Common Tasks, Anti‑patterns.
3. Keep under ~150 lines; link out to canonical docs instead of restating.
4. Add only if real specialization exists (e.g., `block-themes/AGENT.md`).

## 12. Template Reference

The canonical template is stored at `.github/agents/AGENT.md.template` (relocated from root). Copy it to a directory as `AGENT.md` when a genuine specialisation is needed.

## 13. Future Tagging System (Planned)

Deferred per rebranding change log. Agents must not preemptively add tag front matter or rename files. When implemented: retroactively apply tags like `wp-core`, `block-theme`, `perf`, `a11y`, `security`, `i18n`, `headless`, `generic`.

## 14. Change Documentation

Significant structural or standards changes must append a new entry to `CHANGELOG.md` with: context, rationale, impacted files, migration notes.

## 15. Anti-Patterns to Avoid

-   Bulk refactors without scoped reasoning.
-   Introducing frameworks unrelated to WP ecosystem need.
-   Injecting custom REST endpoints duplicating core capabilities.
-   Overusing `innerHTML` without sanitisation context.
-   Hard-coded styles instead of design tokens (theme.json presets).
-   Large multi-file PRs without incremental review points.

## 16. Accessibility Note

Generated code and guidance are produced _with accessibility in mind_, but **manual testing (e.g., Accessibility Insights, keyboard + screen reader passes) is still required** before production changes.

## 17. Escalation Path

If ambiguity, an agent should:

1. Document assumption inline (comment or PR description).
2. Choose the safest (security & backward-compatible) option.
3. Flag open question in follow-up task / issue stub.

## 18. Language Consistency

All new persona and governance text should use UK English spelling (see `docs/language-style.md`). Existing content will be gradually normalised using the automated script (`npm run lang:en-gb`). Code identifiers and API keys remain unchanged.

---

Maintainers: Evolve this file iteratively; keep it lean and high-signal. If a section grows verbose, extract to a focused instruction file and link instead of expanding here.
