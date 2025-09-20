# lightspeedwp Rebranding Change Log (Phase 1: Contextualization)

Date: (initial generation)

## Overview

This change log documents the additive, non-destructive rebranding work performed to align the repository with the evolving **lightspeedwp** mission: accelerating high-quality WordPress engineering (block themes, plugins, performance, accessibility, security, i18n) while retaining broadly applicable software engineering assets (architecture, testing, ops, cloud, data, IaC) required by modern WP-integrated stacks.

## Guiding Principles

1. Additive overlays, not pruning – preserve upstream generic value.
2. WordPress-first framing via top-of-file prefaces (mission, application guidance).
3. Defer taxonomy (future tag layer) instead of premature duplication/deletion.
4. Maintain install badge stability by keeping upstream raw URLs until tagging & mirroring strategy is finalized.
5. Explicit contributor quality gates: accessibility, performance, security, i18n, coding standards compliance.

## Modified / Added Files

| File                                | Action           | Summary of Change                                                                                              | Destructive? |
| ----------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------- | ------------ |
| `README.md`                         | Rewritten        | Added mission, structure map, WordPress application paths, retention rationale, roadmap, namespace note        | No           |
| `CONTRIBUTING.md`                   | Rewritten        | Added WordPress-contribution lanes, quality gate matrix, tagging roadmap, namespace explanation                | No           |
| `README.instructions.md`            | Preface inserted | WordPress framing, generic retention justification, future tagging note                                        | No           |
| `README.collections.md`             | Preface inserted | Marked collections as transitional/under review; preserved existing table                                      | No           |
| `README.prompts.md`                 | Preface inserted | WordPress usage examples (theme.json tuning, plugin hardening, REST, performance, a11y, i18n) + retention note | No           |
| `README.chatmodes.md`               | Preface inserted | WordPress-aligned usage scenarios, contribution guidance, roadmap for tagging                                  | No           |
| `CHANGELOG-lightspeedwp-rebrand.md` | Added            | Transparent record of rebranding phase decisions                                                               | N/A          |

## Unmodified (Phase 1) Assets

Prompt, instruction, chat mode, and collection files themselves remain byte-for-byte unchanged (except for the catalogs’ prefacing content) to avoid accidental behavioral regressions.

## Link & Integrity Notes

| Concern                                                                        | Status                                                                                                                                                                          |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Relative `chatmodes/…` links                                                   | Directory not present locally; links intentionally reference upstream raw assets via badges/URLs. Future option: vendor selective modes locally after tagging layer introduced. |
| New preface added references (hooks, filters, theme.json, block.json, wp.data) | Conceptual only; no broken links introduced.                                                                                                                                    |
| Namespace / badge targets                                                      | Left pointing at `github/awesome-copilot` per transitional strategy.                                                                                                            |

## Future (Deferred) Work

| Item                                                                                                                     | Rationale                                             |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| Tagging system (`wp-core`, `block-theme`, `plugin-hardening`, `perf`, `a11y`, `i18n`, `security`, `headless`, `generic`) | Enables filtering without deleting generic assets     |
| Collections refinement                                                                                                   | Curate WP-first scenario packs once tagging available |
| Local mirroring of critical chat modes                                                                                   | Only after stability + avoiding upstream drift        |
| Automated link validator script enhancement                                                                              | Optional if scope expands / more local assets added   |

## Contributor Guidance Snapshot

When proposing new assets: cite WordPress primitives, define measurable outcomes (e.g., TTFB reduction, LCP improvement), apply secure coding (escaping & sanitization), ensure translation readiness, and avoid redundancy—extend before cloning.

## Phase Closure Criteria

This phase considered complete once: (1) all major catalogs prefaced, (2) root docs aligned, (3) change log recorded, (4) no regressions introduced. All criteria satisfied.

---

End of Phase 1 (Contextualization). Future phases will introduce tagging, selective mirroring, and curated scenario bundles.

---

## Post-Phase 1 Update (Changelog Rename & Agent Governance) - 2025-09-20

### Summary

-   Renamed `CHANGELOG-lightspeedwp-rebrand.md` to canonical `CHANGELOG.md` for longevity and clarity.
-   Added global agent governance file `AGENTS.md` establishing behavioral contract (mission alignment, WP-first heuristics, quality gates).
-   Added directory specialization template `AGENT.md.template` and initial specialization `block-themes/AGENT.md`.
-   Planned automation & taxonomy groundwork (tagging system, agent linter, collections refinement).

### Rationale

Unifying the changelog filename simplifies future phase entries beyond initial rebranding. Agent governance formalizes consistent AI contributions and reduces drift as more specialized directories adopt local conventions.

### Added / Modified Files

| File                    | Action                  | Notes                                   |
| ----------------------- | ----------------------- | --------------------------------------- |
| `CHANGELOG.md`          | Renamed (from previous) | Single authoritative log now.           |
| `AGENTS.md`             | Added                   | Global agent behaviour & quality gates. |
| `AGENT.md.template`     | Added                   | Reusable specialization scaffold.       |
| `block-themes/AGENT.md` | Added                   | Block theme specific conventions.       |

### Deferred / Upcoming

| Item                         | Next Step                                                           |
| ---------------------------- | ------------------------------------------------------------------- |
| Tagging system               | Draft frontmatter schema & migration script.                        |
| Agent linter                 | Implement `scripts/lint-agents.js` to enforce presence & structure. |
| Collections curation         | Apply after tags to enable filtered thematic bundles.               |
| Chat mode vendoring decision | Evaluate minimal curated subset post-tagging.                       |
| Link & badge validator       | Combine with agent linter for a unified QA script.                  |

### Migration / Action Required

Update any external references pointing to the old changelog filename to use `CHANGELOG.md`.

---

## Agents Persona Set Introduction - 2025-09-20

### Summary

Established dedicated specialised agent personas under `.github/agents/` to provide focused, high-signal overlays for common WordPress quality domains without duplicating global governance.

### Added Files

| File                                                  | Action | Purpose                                            |
| ----------------------------------------------------- | ------ | -------------------------------------------------- |
| `.github/agents/AGENT.md`                             | Added  | Folder contract & authoring rules                  |
| `.github/agents/README.md`                            | Added  | Persona index & invocation guidance                |
| `.github/agents/block-theme-optimizer.agent.md`       | Added  | Theme token & CSS coherence review                 |
| `.github/agents/accessibility-auditor.agent.md`       | Added  | WCAG 2.2 alignment & semantic checks               |
| `.github/agents/security-hardening-reviewer.agent.md` | Added  | Capability, nonce, sanitisation & escaping review  |
| `.github/agents/performance-profiler.agent.md`        | Added  | Asset, query, Core Web Vitals performance scrutiny |
| `.github/agents/i18n-l10n-reviewer.agent.md`          | Added  | Translation readiness & localisation clarity       |

### Rationale

...existing content...

---

## Documentation Link & Filename Normalisation - 2025-09-20

### Summary

Standardised documentation catalogue integrity:

-   Corrected misspelled chat mode filename: `accesibility.chatmode.md` -> `accessibility.chatmode.md`.
-   Added deprecation stub in the old filename with frontmatter flags (`deprecated: true`, replacement pointer) to avoid immediate link rot.
-   Inserted deprecation banner into legacy root `README.instructions.md` pointing contributors to canonical `.github/instructions/README.instructions.md`.
-   (Planned) Normalisation logic to be enforced in `update-readme.js` (strip redundant path segments and prevent future spelling drift) – scripting adjustment pending.

### Rationale

Ensures internal consistency (spelling, canonical source location) while maintaining backward compatibility during the transition window. Reduces friction for future automation (tagging & link validation) and prevents accidental proliferation of divergent file references.

### Modified / Added Files

| File                                          | Action            | Notes                                                                              | Destructive? |
| --------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------- | ------------ |
| `.github/chatmodes/accessibility.chatmode.md` | Added (renamed)   | Canonical accessibility chat mode (WCAG 2.2 focus)                                 | No           |
| `.github/chatmodes/accesibility.chatmode.md`  | Stubbed / Updated | Deprecated stub with pointer to corrected filename                                 | No           |
| `README.instructions.md`                      | Banner inserted   | Deprecated copy; points to canonical `.github/instructions/README.instructions.md` | No           |
| `CHANGELOG.md`                                | Updated           | Added normalisation entry                                                          | No           |
| `update-readme.js` (pending)                  | (Planned)         | Will codify link/path normalisation (tracked separately)                           | N/A          |

### Follow-Up / Deferred

| Item                           | Next Step                                       |
| ------------------------------ | ----------------------------------------------- |
| `update-readme.js` enhancement | Implement path & spelling guard clauses         |
| Remove deprecated stub         | After external references updated (later phase) |
| Tagging system integration     | Leverage normalised filenames for frontmatter   |

### Action Required

---

## Script Relocation Finalisation & Indirection Removal - 2025-09-20

### Summary

Completed Phase 2 of build/automation script hygiene:

-   Migrated full implementations of `update-readme.js`, `validate-collections.js`, `yaml-parser.js`, and `create-collection.js` into `.github/scripts/` as canonical sources.
-   Replaced root-level counterparts with minimal shims preserving existing invocation patterns (e.g. `node update-readme.js`).
-   Removed transitional `.real` indirection files now that relocation is stable.
-   Verified generator and validator still execute successfully post-migration.

### Rationale

Eliminates brittle duplicate code paths and temporary wrapper pattern, simplifying future maintenance and reducing risk of editing stale copies. Consolidation under `.github/scripts/` clarifies ownership and isolates automation concerns from documentation root.

### Modified / Removed Files

| File                                      | Action     | Notes                                                        |
| ----------------------------------------- | ---------- | ------------------------------------------------------------ |
| `update-readme.js`                        | Rewritten  | Now a thin shim requiring `.github/scripts/update-readme.js` |
| `.github/scripts/update-readme.js`        | Added/Full | Canonical generator implementation                           |
| `validate-collections.js`                 | Rewritten  | Shim requiring `.github/scripts/validate-collections.js`     |
| `.github/scripts/validate-collections.js` | Added/Full | Canonical validator                                          |
| `yaml-parser.js`                          | Rewritten  | Shim; logic moved                                            |
| `.github/scripts/yaml-parser.js`          | Added/Full | Canonical lightweight YAML parser                            |
| `create-collection.js`                    | Rewritten  | Shim requiring `.github/scripts/create-collection.js`        |
| `.github/scripts/create-collection.js`    | Added/Full | Canonical interactive collection creator                     |
| `*.js.real` (4 files)                     | Removed    | Transitional indirection eliminated                          |

### Verification

Executed:

1. `node update-readme.js` – Confirmed category and collection README generation completed with no diffs.
2. `node validate-collections.js` – Passed (no collections present / validation skipped logic intact).

### Follow-Up / Deferred

| Item                              | Next Step                                           |
| --------------------------------- | --------------------------------------------------- |
| Taxonomy enforcement in validator | Add domain/stability/tag schema checks              |
| Table enrichment                  | Surface domain & stability columns in generators    |
| CI integration                    | Add npm script & workflow for validator + generator |

### Action Required

Update any contributor docs referencing script internals to point to `.github/scripts/` for canonical logic. No action needed for existing npm scripts or manual `node` invocations.

Update any external bookmarks to the accessibility chat mode using the corrected filename. Prefer referencing only the canonical instructions README going forward.

---

Scaling AI assistance required persona segmentation so reviews remain concise and domain-specific, reducing overlap and repetition found in broader global guidance.

### Notes

-   Personas intentionally omit frontmatter pending repository-wide tagging schema.
-   UK English shift pending; future language normalisation will revise any US spellings.
-   Future personas (REST API contract, testing strategy, design token curator) deferred until tooling (tagging, language policy) lands.

### Follow-Up

Integrate persona validation into `scripts/lint-agents.js` (section presence, line-length guard) and extend changelog when language policy applied.

---

## UK English Adoption Tooling - 2025-09-20

### Summary

Introduced automated UK English normalisation workflow (dry-run + apply) and style guide to ensure consistent spelling in prose while protecting code identifiers.

### Added / Modified Files

| File                         | Action   | Purpose                                                           |
| ---------------------------- | -------- | ----------------------------------------------------------------- |
| `scripts/en-gb-normalise.js` | Added    | Performs conservative US→UK replacements outside code/frontmatter |
| `docs/language-style.md`     | Added    | Spelling policy, exceptions, checklist                            |
| `package.json`               | Modified | Added `lang:en-gb` and `lang:en-gb:apply` scripts                 |
| `AGENTS.md`                  | Modified | Linked to language style guide                                    |
| `CONTRIBUTING.md`            | Modified | Contributor guidance on spelling & script usage                   |

### Rationale

Standardising spelling improves editorial consistency and reduces noise in future diffs. Automated approach prevents manual error and avoids altering code tokens.

### Usage

Run `npm run lang:en-gb` before commits touching many docs; apply with `npm run lang:en-gb:apply` once reviewed.

### Next Steps

-   Optional CI check to flag reintroduction of US spellings.
-   Expand mapping only when new variants appear repeatedly.
