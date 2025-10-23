# lightspeedwp – WordPress Engineering & AI Assistant Docs

Accelerating high‑quality WordPress development with reusable AI building blocks (prompts, instructions, chat modes, agent governance)
and domain handbooks (block themes, coding standards, Gutenberg guides). Everything is tuned to produce fast, secure, accessible,
internationalised, and maintainable solutions (themes, plugins, blocks, patterns).

## Mission

Empower WordPress developers to deliver production‑ready features at lightspeed while upholding coding standards,
accessibility (WCAG 2.2), performance, security (OWASP), and sustainable long‑term maintainability.

## Repository Structure

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

Many engineering concerns (testing discipline, performance, security, accessibility, structured planning) transcend platform boundaries.
We intentionally retain high‑quality “generic” or multi‑stack assets because they:

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

## Schema Validation & Automation

### YAML/JSON Schema Validation

All configuration schemas (e.g. for `.coderabbit.yml`) are stored in the `schemas/` directory at the project root. This enables:

- **Offline validation**: Always validate against the latest downloaded schema, even without internet access.
- **Automated updates**: Keep schemas up to date with a single command.

#### Validate `.coderabbit.yml`

```sh
npm run validate:coderabbit
```

or

```sh
node scripts/json-validation/validate-coderabbit-yml.cjs
```

#### Update the CodeRabbit schema

```sh
node scripts/json-validation/update-coderabbit-schema.cjs
```

This fetches the latest schema from the remote source and saves it to `schemas/coderabbit-overrides.v2.json`.

**Tip:** Add this as a pre-commit, pre-push, or CI step to ensure your validation is always up to date.

---

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

## Roadmap Snapshot

High‑level items (see `CHANGELOG.md` for canonical history & upcoming):

- Tagging taxonomy for AI assets & docs.
- WordPress‑specialised chat modes (Theme JSON Refiner, Block Accessibility Auditor, Hook Strategy Advisor).
- Collections curation once tagging lands.
- Domain surfacing (stability, domain) in generated README tables.
- Automated link & frontmatter validator.

## Namespace & Badges

Any legacy install badges still referencing upstream sources are intentionally preserved during transition;
they will migrate once tagging + mirroring strategy finalises.

## License

This repository is licensed under the **GNU GPL v3** (see `LICENSE`). Documentation and AI asset text are distributed under the same license for simplicity.
If you require alternative terms for specific reuse scenarios, open an issue to discuss.

## Feedback & Improvements

Open an issue with: context, goal, current friction, desired outcome.
Evidence (snippets, diffs) speeds triage.

---

Crafted with accessibility, security, performance, and internationalisation in mind—manual review & testing still required.

## 📁 Documentation Sections

### [🎨 Block Themes](docs/block-themes/)

Modern WordPress theme development with comprehensive guides for:

- **Fluid Typography & Spacing** - Responsive design using clamp() and custom properties
- **Design Systems** - Color palettes, spacing presets, and design tokens
- **Theme Structure** - Templates, patterns, and global styles
- **Best Practices** - CSS specificity, naming conventions, and optimization

**Key Files:** [Fluid Typography](docs/block-themes/fluid-typography.md) • [Global Styles](docs/block-themes/global-styles.md)

- [Theme Structure](docs/block-themes/theme-structure-epi.md)

### [📋 Coding Standards](docs/coding-standards/)

Comprehensive coding standards for WordPress development:

- **[LightSpeed Standards](docs/coding-standards/ash-research/)** - Enhanced WordPress standards (WPCS v3.2.0) with security-first approach
- **[WordPress Core Standards](docs/coding-standards/wordpress-coding-standards/)** - Official WordPress coding guidelines
- **[Inline Documentation](docs/coding-standards/inline-documentation-standards/)** - Code commenting and documentation practices

**Key Features:** Security by default • WCAG 2.2 AA accessibility • Performance optimization • Maintainable code patterns

### [🤖 Copilot Space](docs/copilot-space/)

AI-assisted development assets and configurations:

- **Chat Modes** - Specialized AI conversation modes for WordPress development
- **Prompt Libraries** - Reusable prompts for common development tasks
- **Agent Instructions** - Behavioral contracts for AI assistants
- **Schemas** - Structured templates for consistent AI interactions

**Key Files:** [Agents](docs/copilot-space/agents-md.md) • [Chat Modes](docs/copilot-space/chatmodes.md)

- [Instructions](docs/copilot-space/copilot-instructions.md)

### [⚙️ YAML Frontmatter](docs/frontmatter/)

Standardized frontmatter patterns for modern development workflows:

- **GitHub Templates** - Issue forms, PR templates, and repository configuration
- **AI Agent Configurations** - GitHub Copilot, Claude, and Gemini setups
- **Schema Validation** - Consistent metadata patterns across all template types

**Key Files:** [Frontmatter Cheat Sheet](docs/frontmatter/YAML%20Frontmatter%20Cheat%20Sheet.md)

- [Schema Guidelines](docs/frontmatter/YAML-Frontmatter%20Schema-Guidelines.md)

### [🧱 Gutenberg Documentation](docs/gutenberg/)

Complete Gutenberg block editor documentation:

- **[Getting Started](docs/gutenberg/getting-started/)** - Development environment setup and tutorials
- **[How-to Guides](docs/gutenberg/how-to-guides/)** - Practical implementation guides
- **[Reference Guides](docs/gutenberg/reference-guides/)** - API references and technical documentation
- **[Schemas](docs/gutenberg/schemas/)** - Block and configuration schemas

**Key Areas:** Block development • Editor extensibility • Theme integration • API references

## 🚀 Quick Start

### For Theme Developers

1. Review [Block Themes documentation](docs/block-themes/) for modern theme development
2. Implement [Fluid Typography](docs/block-themes/fluid-typography.md) and [Spacing](docs/block-themes/fluid-spacing.md)
3. Follow [LightSpeed Coding Standards](docs/coding-standards/ash-research/) for best practices

### For Plugin Developers

1. Start with [WordPress Coding Standards](docs/coding-standards/wordpress-coding-standards/)
2. Review [Gutenberg How-to Guides](docs/gutenberg/how-to-guides/) for block development
3. Implement [Inline Documentation Standards](docs/coding-standards/inline-documentation-standards/)

### For AI-Assisted Development

1. Set up [YAML Frontmatter](docs/frontmatter/) for standardized templates
2. Configure [Copilot Space](docs/copilot-space/) for AI workflows
3. Use [Schema Guidelines](docs/frontmatter/YAML-Frontmatter%20Schema-Guidelines.md) for validation

## 🎯 Core Principles

- **Security First**: All patterns emphasize WordPress security best practices
- **Accessibility**: WCAG 2.2 Level AA compliance baseline across all documentation
- **Performance**: Optimization-focused approaches in all recommendations
- **Modern Standards**: Up-to-date with latest WordPress and web development practices
- **AI Integration**: Documentation patterns optimized for AI-assisted development workflows

## 🔧 Standards at a Glance

| Area                  | Standard                         | Key Features                                                   |
| --------------------- | -------------------------------- | -------------------------------------------------------------- |
| **Theme Development** | Block-first, Fluid Design        | Responsive typography, Design tokens, Performance optimization |
| **Code Quality**      | WordPress + LightSpeed Standards | Security by default, WCAG 2.2 AA, PHPDoc documentation         |
| **AI Integration**    | YAML Frontmatter Schemas         | GitHub templates, Copilot Space, Cross-platform AI configs     |
| **Block Development** | Gutenberg Best Practices         | Modern JavaScript, React patterns, WordPress APIs              |

---

This documentation hub ensures consistent, secure, and maintainable WordPress development across all project types and development workflows.
