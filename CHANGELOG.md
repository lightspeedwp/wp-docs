# lightspeedwp Rebranding Change Log (Phase 1: Contextualization)

Date: (initial generation)

## Overview

This change log documents the additive, non-destructive rebranding work performed to align the repository with the evolving **lightspeedwp** mission: accelerating high-quality WordPress engineering (block themes, plugins, performance, accessibility, security, i18n) while retaining broadly applicable software engineering assets (architecture, testing, ops, cloud, data, IaC) required by modern WP-integrated stacks.

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

-   Placeholder section for upcoming tagging taxonomy, link validator, validator schema enforcement.

### Planned

-   Tagging taxonomy for AI & documentation assets.
-   Domain & stability surfacing in generated README tables.
-   Frontmatter & internal link validator (CI).
-   Collections curation after taxonomy.

## [0.1.0] - 2025-09-20

### Added

-   Global agent governance (`AGENTS.md`) and specialised agent personas scaffold.
-   Documentation hub under `docs/` with `docs/README.md` central index.
-   Block theme guidance set, coding standards overlays, Gutenberg guides, frontmatter schemas.
-   UK English language style guide (`docs/language-style.md`) and normalisation scripts (`lang:en-gb` npm scripts).
-   Automation scripts relocated to `.github/scripts/` (generator, validator, YAML parser, collection creator).
-   Accessibility, performance, security, i18n instruction assets and governance.

### Changed

-   Rebranded root README to reflect WordPress engineering + AI assets mission.
-   Consolidated changelog into canonical `CHANGELOG.md` (previous rebrand file merged).
-   Updated documentation to reference unified GPLv3 license.
-   Normalised misspelled accessibility chat mode filename and added deprecation stub.

### Removed

-   Transitional `.real` indirection files for scripts.

### Deprecated

-   Legacy duplicated `README.instructions.md` (now bannered / pointing to canonical instructions location).

### Security

-   Reinforced guidance on escaping, sanitisation, nonce & capability checks in agent governance.

### Documentation

-   Added rationale for preserving cross‑technology assets pending tagging (WordPress-first overlay strategy).
-   Added script usage guidance for regeneration & language normalisation.

## Historical Narrative (Archived)

Detailed phase-by-phase rationale has been compressed into the versioned summary above. Original granular narrative (rebranding context, script relocation reasoning, persona introduction, normalisation steps) is retained in git history prior to commit introducing semantic changelog structure.

---

[Unreleased]: https://github.com/lightspeedwp/wp-docs/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/lightspeedwp/wp-docs/releases/tag/v0.1.0

End of Phase 1 (Contextualization). Future phases will introduce tagging, selective mirroring, and curated scenario bundles.
