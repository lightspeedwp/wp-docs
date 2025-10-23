# YAML Frontmatter Schemas for GitHub, Copilot, Claude, and Gemini Files

This document contains a comprehensive breakdown of YAML frontmatter schemas for the following file types:

- GitHub issue and PR templates
- GitHub saved replies
- GitHub Copilot: custom instructions, prompt files, `AGENTS.md`, and `.chatmode.md`
- Claude agents (Anthropic YAML-based config)
- Gemini agents (Google)

For each file type the document includes:

- Maximum parameter set and required vs optional fields
- Example YAML frontmatter blocks
- Best practices and caveats
- Placeholder documentation next to each field
- Recommended folder/filename conventions
- YAML schema examples where available or inferred

---

## AGENTS.md — Universal AI Rules (WordPress)

- Follow **WordPress Coding Standards** (PHPCS: WordPress, WordPress-Docs, WordPress-Extra).
- PHP versions: prefer compatibility with current WP supported PHP (adjust per project).
- Escape, sanitise, and validate all inputs; use nonces for forms; respect capabilities/roles.
- I18n: wrap user-facing text in translation functions; provide text domain.
- Keep changes minimal and reversible; propose diffs and tests.
- Never output secrets; redact credentials and keys.

## CLAUDE.md — Project Instructions (WordPress)

Claude should:

- Prefer WordPress core APIs (Options, Settings API, REST API, Transients, WP_Filesystem).
- Use hooks/filters where appropriate; avoid monkey-patching core.
- Generate **PHPCS-compliant** PHP and add PHPDoc for public APIs.
- For JS (blocks), use @wordpress/\* packages; register blocks via block.json where sensible.

## GEMINI.md — Project Instructions (WordPress)

Gemini should follow: WordPress coding standards, security best practices (escaping/sanitising),
and internationalisation. Prefer minimal dependencies and progressive enhancement.

## Copilot Space Index — WordPress Frontmatter Playbook

This space blends **GitHub templates** and **AI instruction files** with a WordPress focus.

## GitHub Templates

- [Issue Templates (Issue Forms)](issue-templates.md)
- [Pull Request Templates](pr-templates.md)
- [Saved Replies (overview)](saved-replies.md)

## Copilot Customisation

- [Repo & Path Instructions](copilot-instructions.md)
- [Reusable Prompt Files](prompt-files.md)
- [Custom Chat Modes](chatmodes.md)
- [AGENTS.md (universal rules)](agents-md.md)

## Claude & Gemini

- [Claude: CLAUDE.md & Subagents](claude-agents.md)
- [Gemini: GEMINI.md (convention)](gemini-md.md)

## Schemas

- [Issue Form schema](schemas/issue-form-schema.md)
- [Prompt frontmatter schema](schemas/prompt-frontmatter-schema.md)
- [Chat Mode frontmatter schema](schemas/chatmode-frontmatter-schema.md)
- [Claude Subagent schema](schemas/claude-subagent-schema.md)
- [Prompt Collection schema (experimental)](schemas/prompt-collection-schema.md)

## WordPress Guides

- [WordPress Coding Standards quickstart](../wp-guides/wp-coding-standards.md)
- [Security checklist for WP](../wp-guides/wp-security-checklist.md)
- [Block development checklist](../wp-guides/block-dev-checklist.md)

## Issue Templates (Issue Forms) — YAML Frontmatter (WordPress)

- **Location:** .github/ISSUE_TEMPLATE/\*.yml

Required: name, description, body.  
Optional: title, labels, assignees, projects, type.

The examples below include common WordPress fields (WP version, PHP version, theme/plugin). See live templates in this repo.

## Pull Request Templates (WordPress)

- **Location:** .github/PULL_REQUEST_TEMPLATE/\*.md

PR templates are plain Markdown (no form YAML). Use sections/checklists to enforce **WP coding standards**,  
testing steps, PHPCS, and i18n checks. A minimal example is provided in this repo.

## Saved Replies

Managed via GitHub UI (Profile → Saved replies). No frontmatter available. Keep replies short; customise after insertion.

## Copilot Custom Instructions (WordPress)

## Repository-wide

- **File:** .github/copilot-instructions.md (Markdown only)

- Follow WordPress Coding Standards (PHPCS).
- Use esc*html/esc_attr/sanitize*\* appropriately; nonces for forms; capability checks.
- All user-facing strings must be translatable with text domain.
- Prefer core APIs over custom implementations.

## Path-specific (\*.instructions.md)

- **Folder:** .github/instructions/ (with YAML frontmatter)

```md
---
applyTo: '**/*.php'
description: 'PHP (WordPress) rules'
---

- Use WP functions (get_option, update_option, wp_safe_redirect).
- Enqueue assets via wp_enqueue_scripts/admin_enqueue_scripts.
- Avoid direct DB queries; use $wpdb safely only when needed.
```

"""

## Reusable Prompt Files (`*.prompt.md`)

- **Folder:** `.github/prompts/`

Frontmatter:

- `description` — tooltip/summary
- `mode` — ask | edit | agent
- `model` — optional; uses current if omitted
- `tools` — optional list of tools (agent mode)

Body: the instructions. Reference shared guides with Markdown links.

## Custom Chat Modes (`*.chatmode.md`)

- **Folder:** `.github/chatmodes/`

Frontmatter:

- `description` — shown as placeholder & tooltip
- `tools` — allowed tools
- `model` — pinned model (optional)

Body: persona & guardrails for that mode.  
 """

## AGENTS.md — Universal Rules

Use this as a vendor-neutral rulebook for Copilot/Claude/Gemini. Keep it concise; assistants may include it on every run.

## Claude — CLAUDE.md & Subagents

- **CLAUDE.md**: Markdown file at repo root; high-level rules for Claude.

- **Subagents**: `.github/agents/*.md` with YAML frontmatter (`name`, `description`, `tools`), body as the subagent's persona/instructions.

## Gemini — GEMINI.md

Conventionally place a Markdown file at repo root with persistent guidance for Gemini-based tools.

## Issue Form — Frontmatter Keys (Reference)

Always show details

```yml
name: string                 # required
description: string          # required
title: string                # optional
labels: [string] | string    # optional
assignees: [string] | string # optional
projects: [string]           # optional
type: string                 # optional
body:                        # required
  - type: markdown|input|textarea|dropdown|checkboxes
    id: string               # optional
    attributes:
      label: string          # required (except markdown)
      description: string    # optional
      placeholder: string    # optional
      value: string          # optional
      options: [string]      # dropdown/checkboxes
      multiple: boolean      # dropdown only
      render: string         # textarea only (e.g., bash, markdown)
    validations:
      required: boolean
```

## Prompt File — Frontmatter Keys

Always show details

```yml
description: string
mode: ask|edit|agent
model: string # optional`
tools: [string] # optional
```

## Chat Mode — Frontmatter Keys

Always show details

```yml
description: string
tools: [string] # optional
model: string # optional
```

## Claude Subagent — Frontmatter Keys

Always show details

```yml
name: string
description: string
tools: [string] # optional
```

## Prompt Collection — Schema (Experimental)

A lightweight collection format to group prompts for discovery.

Always show details

```json
{
  "$schema": "https://example.com/schemas/prompt-collection.schema.json",
  "name": "WordPress Starters",
  "description": "Reusable Copilot prompts for WP",
  "prompts": [
    {
      "id": "wp-register-block",
      "path": ".github/prompts/wp-register-block.prompt.md",
      "tags": ["blocks", "gutenberg"]
    }
  ]
}
```

## WordPress Coding Standards Quickstart

- Install PHPCS and WPCS rulesets.
- Use tabs for PHP indentation; wrap user strings for i18n; docblock public APIs.
- Escape late, sanitise early; always validate and authorise.

## WordPress Security Checklist

- Nonces for any state-changing actions.
- Escape output: `esc_html()`, `esc_attr()`, `wp_kses_post()`.
- Sanitise input: `sanitize_text_field()`, `sanitize_email()`.
- Cap checks with `current_user_can()`; never trust user input.

## Block Development Checklist

- Use `@wordpress/scripts`; define `block.json` (name, title, category, attributes).
- Register via `register_block_type_from_metadata()`.
- Enqueue editor/front assets properly; namespace styles.
- Provide `supports` (align, color, typography) as needed.

## Copilot Repository Instructions (WordPress)

- Use core WP APIs; follow WPCS; propose small diffs.
- For plugins: prefix functions, classes, and filters with project slug.
- For themes: follow Template Hierarchy; enqueue assets, no direct script tags.
- I18n: load text domain; add translators' comments for placeholders.

## CODEOWNERS

```md
- @your-team
```

# Issue Templates (WP-focused)

```yml
---
name: '🐛 Bug report (WordPress)'
description: 'Report a reproducible issue with the plugin/theme'
title: '[Bug]: '
labels:
  - bug
  - needs-triage
body:
  - type: markdown
    attributes:
      value: |
        Thanks! Please fill out the details below to help us reproduce the issue.
  - type: input
    id: wp_version
    attributes:
      label: 'WordPress version'
      placeholder: 'e.g. 6.6.2'
    validations:
      required: true
  - type: input
    id: php_version
    attributes:
      label: 'PHP version'
      placeholder: 'e.g. 8.2'
    validations:
      required: true
  - type: input
    id: plugin_theme
    attributes:
      label: 'Affected component'
      description: 'Which plugin/theme/module?'
      placeholder: 'Plugin XYZ / Theme ABC'
    validations:
      required: true
  - type: textarea
    id: repro
    attributes:
      label: 'Steps to reproduce'
      value: |
        1. Go to …
        2. Click …
        3. Observe …
    validations:
      required: true
  - type: textarea
    id: expected
    attributes:
      label: 'Expected behaviour'
    validations:
      required: true
  - type: textarea
    id: actual
    attributes:
      label: 'Actual behaviour (include error messages/logs)'
    validations:
      required: true
  - type: dropdown
    id: environment
    attributes:
      label: 'Environment'
      options:
        - 'Local (wp-env/Local/Valet)'
        - 'Staging'
        - 'Production'
      multiple: false
    validations:
      required: true
  - type: checkboxes
    id: checks
    attributes:
      label: 'Checks'
      options:
        - label: 'I searched for duplicate issues'
          required: true
        - label: 'I can reproduce with all other plugins disabled and a default theme'
          required: true
---
```

```yml
---
name: '✨ Feature request (WordPress)'
description: 'Suggest an improvement or new feature'
title: '[Feature]: '
labels:
  - enhancement
body:
  - type: textarea
    id: problem
    attributes:
      label: 'Problem to solve'
      description: 'What user/customer problem does this feature address?'
    validations:
      required: true
  - type: textarea
    id: proposal
    attributes:
      label: 'Proposed solution'
      description: 'Describe how it should work (include examples or prior art)'
    validations:
      required: true
  - type: textarea
    id: impact
    attributes:
      label: 'Impact / Risks'
      description: 'Performance, backwards-compatibility, security, etc.'
    validations:
      required: false
---
```

# PR Template (WP-focused)

````yml
---
title: '[PR]: <concise summary>'
labels:
  - pr
body:
  - type: markdown
    attributes:
      value: |
        ## Summary
        <!-- Concise description of the change and why it's needed. -->

        ## Related Issues

        ```
        Closes #___
        ```

        ## Changes
        - PHP follows WPCS & PHPCS passes locally
        - Escaping/sanitisation/nonces/capability checks added where needed
        - I18n added (text domain, translators' comments)
        - Blocks registered correctly (block.json / register_block_type_from_metadata)
        - Tests/docs updated (if applicable)

        ## Manual QA
        1. …
        2. …
        3. …

        ## Screenshots / GIF
        <!-- If UI changes, include before/after -->
---
````

# Copilot Space (WordPress Edition)

A minimal, **WordPress-friendly** Copilot Space that teaches and enforces correct use of YAML frontmatter
across GitHub templates and AI files. Includes docs, schemas, reusable prompts, custom chat modes,
and example Claude subagents. Built to standardise WP plugin/theme workflows.

# AGENTS.md — Universal AI Rules (WordPress)

- Follow **WordPress Coding Standards** (PHPCS: WordPress, WordPress-Docs, WordPress-Extra).
- PHP versions: prefer compatibility with current WP supported PHP (adjust per project).
- Escape, sanitise, and validate all inputs; use nonces for forms; respect capabilities/roles.
- I18n: wrap user-facing text in translation functions; provide text domain.
- Keep changes minimal and reversible; propose diffs and tests.
- Never output secrets; redact credentials and keys.

# CLAUDE.md — Project Instructions (WordPress)

Claude should:

- Prefer WordPress core APIs (Options, Settings API, REST API, Transients, WP_Filesystem).
- Use hooks/filters where appropriate; avoid monkey-patching core.
- Generate **PHPCS-compliant** PHP and add PHPDoc for public APIs.
- For JS (blocks), use @wordpress/\* packages; register blocks via block.json where sensible.

# GEMINI.md — Project Instructions (WordPress)

Gemini should follow: WordPress coding standards, security best practices (escaping/sanitising),
and internationalisation. Prefer minimal dependencies and progressive enhancement.

# Copilot Space Index — WordPress Frontmatter Playbook`

This space blends **GitHub templates** and **AI instruction files** with a WordPress focus.

## GitHub Templates

- [Issue Templates (Issue Forms)](issue-templates.md)
- [Pull Request Templates](pr-templates.md)
- [Saved Replies (overview)](saved-replies.md)

## Copilot Customisation

- [Repo & Path Instructions](copilot-instructions.md)
- [Reusable Prompt Files](prompt-files.md)
- [Custom Chat Modes](chatmodes.md)
- [AGENTS.md (universal rules)](agents-md.md)

## Claude & Gemini

- [Claude: CLAUDE.md & Subagents](claude-agents.md)
- [Gemini: GEMINI.md (convention)](gemini-md.md)

## Schemas

- [Issue Form schema](schemas/issue-form-schema.md)
- [Prompt frontmatter schema](schemas/prompt-frontmatter-schema.md)
- [Chat Mode frontmatter schema](schemas/chatmode-frontmatter-schema.md)
- [Claude Subagent schema](schemas/claude-subagent-schema.md)
- [Prompt Collection schema (experimental)](schemas/prompt-collection-schema.md)

## WordPress Guides

- [WordPress Coding Standards quickstart](../wp-guides/wp-coding-standards.md)
- [Security checklist for WP](../wp-guides/wp-security-checklist.md)
- [Block development checklist](../wp-guides/block-dev-checklist.md)

# Issue Templates (Issue Forms) — YAML Frontmatter (WordPress)

- **Location:** .github/ISSUE_TEMPLATE/\*.yml

Required: name, description, body.  
Optional: title, labels, assignees, projects, type.

The examples below include common WordPress fields (WP version, PHP version, theme/plugin). See live templates in this repo.

# Pull Request Templates (WordPress)

- **Location:** .github/PULL_REQUEST_TEMPLATE/\*.md

PR templates are plain Markdown (no form YAML). Use sections/checklists to enforce **WP coding standards**,  
testing steps, PHPCS, and i18n checks. A minimal example is provided in this repo.

# Saved Replies

Managed via GitHub UI (Profile → Saved replies). No frontmatter available. Keep replies short; customise after insertion.

# Copilot Custom Instructions (WordPress)

## Repository-wide

- **File:** .github/copilot-instructions.md (Markdown only)

- Follow WordPress Coding Standards (PHPCS).
- Use esc*html/esc_attr/sanitize*\* appropriately; nonces for forms; capability checks.
- All user-facing strings must be translatable with text domain.
- Prefer core APIs over custom implementations.

## Path-specific (\*.instructions.md)

- **Folder:** .github/instructions/ (with YAML frontmatter)

```md
---
applyTo: '**/*.php'
description: 'PHP (WordPress) rules'
---

- Use WP functions (get_option, update_option, wp_safe_redirect).
- Enqueue assets via wp_enqueue_scripts/admin_enqueue_scripts.
- Avoid direct DB queries; use $wpdb safely only when needed.
```

"""

# Reusable Prompt Files (`*.prompt.md`)

- **Folder:** `.github/prompts/`

Frontmatter:

- `description` — tooltip/summary
- `mode` — ask | edit | agent
- `model` — optional; uses current if omitted
- `tools` — optional list of tools (agent mode)

Body: the instructions. Reference shared guides with Markdown links.

# Custom Chat Modes (`*.chatmode.md`)

- **Folder:** `.github/chatmodes/`

Frontmatter:

- `description` — shown as placeholder & tooltip
- `tools` — allowed tools
- `model` — pinned model (optional)

Body: persona & guardrails for that mode.  
 """

# AGENTS.md — Universal Rules

Use this as a vendor-neutral rulebook for Copilot/Claude/Gemini. Keep it concise; assistants may include it on every run.

# Claude — CLAUDE.md & Subagents

- **CLAUDE.md**: Markdown file at repo root; high-level rules for Claude.

- **Subagents**: `.github/agents/*.md` with YAML frontmatter (`name`, `description`, `tools`), body as the subagent's persona/instructions.

# Gemini — GEMINI.md

Conventionally place a Markdown file at repo root with persistent guidance for Gemini-based tools.

# Prompt File — Frontmatter Keys

Always show details

```yml
description: string
mode: ask|edit|agent
model: string # optional`
tools: [string] # optional
```

# Chat Mode — Frontmatter Keys

Always show details

```yml
description: string
tools: [string] # optional
model: string # optional
```

# Claude Subagent — Frontmatter Keys

Always show details

```yml
name: string
description: string
tools: [string] # optional
```

# Prompt Collection — Schema (Experimental)

A lightweight collection format to group prompts for discovery.

Always show details

```json
{
  "$schema": "https://example.com/schemas/prompt-collection.schema.json",
  "name": "WordPress Starters",
  "description": "Reusable Copilot prompts for WP",
  "prompts": [
    {
      "id": "wp-register-block",
      "path": ".github/prompts/wp-register-block.prompt.md",
      "tags": ["blocks", "gutenberg"]
    }
  ]
}
```

# WordPress Coding Standards Quickstart

- Install PHPCS and WPCS rulesets.
- Use tabs for PHP indentation; wrap user strings for i18n; docblock public APIs.
- Escape late, sanitise early; always validate and authorise.

# WordPress Security Checklist

- Nonces for any state-changing actions.
- Escape output: `esc_html()`, `esc_attr()`, `wp_kses_post()`.
- Sanitise input: `sanitize_text_field()`, `sanitize_email()`.
- Cap checks with `current_user_can()`; never trust user input.

# Block Development Checklist

- Use `@wordpress/scripts`; define `block.json` (name, title, category, attributes).
- Register via `register_block_type_from_metadata()`.
- Enqueue editor/front assets properly; namespace styles.
- Provide `supports` (align, color, typography) as needed.

# Copilot Repository Instructions (WordPress)

- Use core WP APIs; follow WPCS; propose small diffs.
- For plugins: prefix functions, classes, and filters with project slug.
- For themes: follow Template Hierarchy; enqueue assets, no direct script tags.
- I18n: load text domain; add translators' comments for placeholders.

# CODEOWNERS

```md
- @your-team
```

# Issue Templates (WP-focused)

name: "🐛 Bug report (WordPress)"
description: "Report a reproducible issue with the plugin/theme"
title: "[Bug]: "
labels:

- bug
- needs-triage
  body:
- type: markdown
  attributes:
  value: |
  Thanks! Please fill out the details below to help us reproduce the issue.
- type: input
  id: wp_version
  attributes:
  label: "WordPress version"
  placeholder: "e.g. 6.6.2"
  validations:
  required: true
- type: input
  id: php_version
  attributes:
  label: "PHP version"
  placeholder: "e.g. 8.2"
  validations:
  required: true
- type: input
  id: plugin_theme
  attributes:
  label: "Affected component"
  description: "Which plugin/theme/module?"
  placeholder: "Plugin XYZ / Theme ABC"
  validations:
  required: true
- type: textarea
  id: repro
  attributes:
  label: "Steps to reproduce"
  value: | 1. Go to … 2. Click … 3. Observe …
  validations:
  required: true
- type: textarea
  id: expected
  attributes:
  label: "Expected behaviour"
  validations:
  required: true
- type: textarea
  id: actual
  attributes:
  label: "Actual behaviour (include error messages/logs)"
  validations:
  required: true
- type: dropdown
  id: environment
  attributes:
  label: "Environment"
  options: - "Local (wp-env/Local/Valet)" - "Staging" - "Production"
  multiple: false
  validations:
  required: true
- type: checkboxes
  id: checks
  attributes:
  label: "Checks"
  options: - label: "I searched for duplicate issues"
  required: true - label: "I can reproduce with all other plugins disabled and a default theme"
  required: true

---

feature_request_yml \= """name: "✨ Feature request (WordPress)"  
 description: "Suggest an improvement or new feature"  
 title: "\[Feature\]: "  
 labels:

- enhancement
  body:
- type: textarea
  id: problem
  attributes:
  label: "Problem to solve"
  description: "What user/customer problem does this feature address?"
  validations:
  required: true
- type: textarea
  id: proposal
  attributes:
  label: "Proposed solution"
  description: "Describe how it should work (include examples or prior art)"
  validations:
  required: true
- type: textarea
  id: impact
  attributes:
  label: "Impact / Risks"
  description: "Performance, backwards-compatibility, security, etc."
  validations:
  required: false

---

## ---------- PR Template (WP-focused) ----------

---

title: "[PR]: <concise summary>"
labels:

- pr
  body:
- type: markdown
  attributes:
  value: | ## Summary
  <!-- Concise description of the change and why it's needed. -->

        ## Related Issues

        ```
        Closes #___
        ```

        ## Changes
        - PHP follows WPCS & PHPCS passes locally
        - Escaping/sanitisation/nonces/capability checks added where needed
        - I18n added (text domain, translators' comments)
        - Blocks registered correctly (block.json / register_block_type_from_metadata)
        - Tests/docs updated (if applicable)

        ## Manual QA
        1. …
        2. …
        3. …

        ## Screenshots / GIF
        <!-- If UI changes, include before/after -->

---

# Saved Replies

Managed via GitHub UI (Profile → Saved replies). No frontmatter available. Keep replies short; customise after insertion.

# Copilot Custom Instructions (WordPress)

## Repository-wide

- **File:** .github/copilot-instructions.md (Markdown only)

- Follow WordPress Coding Standards (PHPCS).
- Use esc*html/esc_attr/sanitize*\* appropriately; nonces for forms; capability checks.
- All user-facing strings must be translatable with text domain.
- Prefer core APIs over custom implementations.

## Path-specific (\*.instructions.md)

- **Folder:** .github/instructions/ (with YAML frontmatter)

```md
---
applyTo: '**/*.php'
description: 'PHP (WordPress) rules'
---

- Use WP functions (get_option, update_option, wp_safe_redirect).
- Enqueue assets via wp_enqueue_scripts/admin_enqueue_scripts.
- Avoid direct DB queries; use $wpdb safely only when needed.
```

"""

# Reusable Prompt Files (`*.prompt.md`)

- **Folder:** `.github/prompts/`

Frontmatter:

- `description` — tooltip/summary
- `mode` — ask | edit | agent
- `model` — optional; uses current if omitted
- `tools` — optional list of tools (agent mode)

Body: the instructions. Reference shared guides with Markdown links.

# Custom Chat Modes (`*.chatmode.md`)

- **Folder:** `.github/chatmodes/`

Frontmatter:

- `description` — shown as placeholder & tooltip
- `tools` — allowed tools
- `model` — pinned model (optional)

Body: persona & guardrails for that mode.  
 """

# AGENTS.md — Universal Rules

Use this as a vendor-neutral rulebook for Copilot/Claude/Gemini. Keep it concise; assistants may include it on every run.

# Claude — CLAUDE.md & Subagents

- **CLAUDE.md**: Markdown file at repo root; high-level rules for Claude.

- **Subagents**: `.github/agents/*.md` with YAML frontmatter (`name`, `description`, `tools`), body as the subagent's persona/instructions.

# Gemini — GEMINI.md

Conventionally place a Markdown file at repo root with persistent guidance for Gemini-based tools.

# Prompt File — Frontmatter Keys

Always show details

```yml
description: string
mode: ask|edit|agent
model: string # optional`
tools: [string] # optional
```

# Chat Mode — Frontmatter Keys

Always show details

```yml
description: string
tools: [string] # optional
model: string # optional
```

# Claude Subagent — Frontmatter Keys

Always show details

```yml
name: string
description: string
tools: [string] # optional
```

# Prompt Collection — Schema (Experimental)

A lightweight collection format to group prompts for discovery.

Always show details

```json
{
  "$schema": "https://example.com/schemas/prompt-collection.schema.json",
  "name": "WordPress Starters",
  "description": "Reusable Copilot prompts for WP",
  "prompts": [
    {
      "id": "wp-register-block",
      "path": ".github/prompts/wp-register-block.prompt.md",
      "tags": ["blocks", "gutenberg"]
    }
  ]
}
```

# WordPress Coding Standards Quickstart

- Install PHPCS and WPCS rulesets.
- Use tabs for PHP indentation; wrap user strings for i18n; docblock public APIs.
- Escape late, sanitise early; always validate and authorise.

# WordPress Security Checklist

- Nonces for any state-changing actions.
- Escape output: `esc_html()`, `esc_attr()`, `wp_kses_post()`.
- Sanitise input: `sanitize_text_field()`, `sanitize_email()`.
- Cap checks with `current_user_can()`; never trust user input.

# Block Development Checklist

- Use `@wordpress/scripts`; define `block.json` (name, title, category, attributes).
- Register via `register_block_type_from_metadata()`.
- Enqueue editor/front assets properly; namespace styles.
- Provide `supports` (align, color, typography) as needed.

# Copilot Repository Instructions (WordPress)

- Use core WP APIs; follow WPCS; propose small diffs.
- For plugins: prefix functions, classes, and filters with project slug.
- For themes: follow Template Hierarchy; enqueue assets, no direct script tags.
- I18n: load text domain; add translators' comments for placeholders.

# CODEOWNERS

```md
- @your-team
```

# Issue Templates (WP-focused)

```yml
---
name: '🐛 Bug report (WordPress)'
description: 'Report a reproducible issue with the plugin/theme'
title: '[Bug]: '
labels:
  - bug
  - needs-triage
body:
  - type: markdown
    attributes:
      value: |
        Thanks! Please fill out the details below to help us reproduce the issue.
  - type: input
    id: wp_version
    attributes:
      label: 'WordPress version'
      placeholder: 'e.g. 6.6.2'
    validations:
      required: true
  - type: input
    id: php_version
    attributes:
      label: 'PHP version'
      placeholder: 'e.g. 8.2'
    validations:
      required: true
  - type: input
    id: plugin_theme
    attributes:
      label: 'Affected component'
      description: 'Which plugin/theme/module?'
      placeholder: 'Plugin XYZ / Theme ABC'
    validations:
      required: true
  - type: textarea
    id: repro
    attributes:
      label: 'Steps to reproduce'
      value: |
        1. Go to …
        2. Click …
        3. Observe …
    validations:
      required: true
  - type: textarea
    id: expected
    attributes:
      label: 'Expected behaviour'
    validations:
      required: true
  - type: textarea
    id: actual
    attributes:
      label: 'Actual behaviour (include error messages/logs)'
    validations:
      required: true
  - type: dropdown
    id: environment
    attributes:
      label: 'Environment'
      options:
        - 'Local (wp-env/Local/Valet)'
        - 'Staging'
        - 'Production'
      multiple: false
    validations:
      required: true
  - type: checkboxes
    id: checks
    attributes:
      label: 'Checks'
      options:
        - label: 'I searched for duplicate issues'
          required: true
        - label: 'I can reproduce with all other plugins disabled and a default theme'
          required: true
---
```

```yml
---
name: '✨ Feature request (WordPress)'
description: 'Suggest an improvement or new feature'
title: '[Feature]: '
labels:
  - enhancement
body:
  - type: textarea
    id: problem
    attributes:
      label: 'Problem to solve'
      description: 'What user/customer problem does this feature address?'
    validations:
      required: true
  - type: textarea
    id: proposal
    attributes:
      label: 'Proposed solution'
      description: 'Describe how it should work (include examples or prior art)'
    validations:
      required: true
  - type: textarea
    id: impact
    attributes:
      label: 'Impact / Risks'
      description: 'Performance, backwards-compatibility, security, etc.'
    validations:
      required: false
---
```

# PR Template (WP-focused)

````yml
---
title: '[PR]: <concise summary>'
labels:
  - pr
body:
  - type: markdown
    attributes:
      value: |
        ## Summary
        <!-- Concise description of the change and why it's needed. -->

        ## Related Issues

        ```
        Closes #___
        ```

        ## Changes
        - PHP follows WPCS & PHPCS passes locally
        - Escaping/sanitisation/nonces/capability checks added where needed
        - I18n added (text domain, translators' comments)
        - Blocks registered correctly (block.json / register_block_type_from_metadata)
        - Tests/docs updated (if applicable)

        ## Manual QA
        1. …
        2. …
        3. …

        ## Screenshots / GIF
        <!-- If UI changes, include before/after -->
---
````

# Copilot Space (WordPress Edition)

A minimal, **WordPress-friendly** Copilot Space that teaches and enforces correct use of YAML frontmatter
across GitHub templates and AI files. Includes docs, schemas, reusable prompts, custom chat modes,
and example Claude subagents. Built to standardise WP plugin/theme workflows.

# AGENTS.md — Universal AI Rules (WordPress)

- Follow **WordPress Coding Standards** (PHPCS: WordPress, WordPress-Docs, WordPress-Extra).
- PHP versions: prefer compatibility with current WP supported PHP (adjust per project).
- Escape, sanitise, and validate all inputs; use nonces for forms; respect capabilities/roles.
- I18n: wrap user-facing text in translation functions; provide text domain.
- Keep changes minimal and reversible; propose diffs and tests.
- Never output secrets; redact credentials and keys.

# CLAUDE.md — Project Instructions (WordPress)

Claude should:

- Prefer WordPress core APIs (Options, Settings API, REST API, Transients, WP_Filesystem).
- Use hooks/filters where appropriate; avoid monkey-patching core.
- Generate **PHPCS-compliant** PHP and add PHPDoc for public APIs.
- For JS (blocks), use @wordpress/\* packages; register blocks via block.json where sensible.

# GEMINI.md — Project Instructions (WordPress)

Gemini should follow: WordPress coding standards, security best practices (escaping/sanitising),
and internationalisation. Prefer minimal dependencies and progressive enhancement.

# Copilot Space Index — WordPress Frontmatter Playbook`

This space blends **GitHub templates** and **AI instruction files** with a WordPress focus.

## GitHub Templates

- [Issue Templates (Issue Forms)](issue-templates.md)
- [Pull Request Templates](pr-templates.md)
- [Saved Replies (overview)](saved-replies.md)

## Copilot Customisation

- [Repo & Path Instructions](copilot-instructions.md)
- [Reusable Prompt Files](prompt-files.md)
- [Custom Chat Modes](chatmodes.md)
- [AGENTS.md (universal rules)](agents-md.md)

## Claude & Gemini

- [Claude: CLAUDE.md & Subagents](claude-agents.md)
- [Gemini: GEMINI.md (convention)](gemini-md.md)

## Schemas

- [Issue Form schema](schemas/issue-form-schema.md)
- [Prompt frontmatter schema](schemas/prompt-frontmatter-schema.md)
- [Chat Mode frontmatter schema](schemas/chatmode-frontmatter-schema.md)
- [Claude Subagent schema](schemas/claude-subagent-schema.md)
- [Prompt Collection schema (experimental)](schemas/prompt-collection-schema.md)

## WordPress Guides

- [WordPress Coding Standards quickstart](../wp-guides/wp-coding-standards.md)
- [Security checklist for WP](../wp-guides/wp-security-checklist.md)
- [Block development checklist](../wp-guides/block-dev-checklist.md)

# Issue Templates (Issue Forms) — YAML Frontmatter (WordPress)

- **Location:** .github/ISSUE_TEMPLATE/\*.yml

Required: name, description, body.  
Optional: title, labels, assignees, projects, type.

The examples below include common WordPress fields (WP version, PHP version, theme/plugin). See live templates in this repo.

# Pull Request Templates (WordPress)

- **Location:** .github/PULL_REQUEST_TEMPLATE/\*.md

PR templates are plain Markdown (no form YAML). Use sections/checklists to enforce **WP coding standards**,  
testing steps, PHPCS, and i18n checks. A minimal example is provided in this repo.

# Saved Replies

Managed via GitHub UI (Profile → Saved replies). No frontmatter available. Keep replies short; customise after insertion.

# Copilot Custom Instructions (WordPress)

## Repository-wide

- **File:** .github/copilot-instructions.md (Markdown only)

- Follow WordPress Coding Standards (PHPCS).
- Use esc*html/esc_attr/sanitize*\* appropriately; nonces for forms; capability checks.
- All user-facing strings must be translatable with text domain.
- Prefer core APIs over custom implementations.

## Path-specific (\*.instructions.md)

- **Folder:** .github/instructions/ (with YAML frontmatter)

```md
---
applyTo: '**/*.php'
description: 'PHP (WordPress) rules'
---

- Use WP functions (get_option, update_option, wp_safe_redirect).
- Enqueue assets via wp_enqueue_scripts/admin_enqueue_scripts.
- Avoid direct DB queries; use $wpdb safely only when needed.
```

"""

# Reusable Prompt Files (`*.prompt.md`)

- **Folder:** `.github/prompts/`

Frontmatter:

- `description` — tooltip/summary
- `mode` — ask | edit | agent
- `model` — optional; uses current if omitted
- `tools` — optional list of tools (agent mode)

Body: the instructions. Reference shared guides with Markdown links.

# Custom Chat Modes (`*.chatmode.md`)

- **Folder:** `.github/chatmodes/`

Frontmatter:

- `description` — shown as placeholder & tooltip
- `tools` — allowed tools
- `model` — pinned model (optional)

Body: persona & guardrails for that mode.  
 """

# AGENTS.md — Universal Rules

Use this as a vendor-neutral rulebook for Copilot/Claude/Gemini. Keep it concise; assistants may include it on every run.

# Claude — CLAUDE.md & Subagents

- **CLAUDE.md**: Markdown file at repo root; high-level rules for Claude.

- **Subagents**: `.github/agents/*.md` with YAML frontmatter (`name`, `description`, `tools`), body as the subagent's persona/instructions.

# Gemini — GEMINI.md

Conventionally place a Markdown file at repo root with persistent guidance for Gemini-based tools.

# Prompt File — Frontmatter Keys

Always show details

```yml
description: string
mode: ask|edit|agent
model: string # optional`
tools: [string] # optional
```

# Chat Mode — Frontmatter Keys

Always show details

```yml
description: string
tools: [string] # optional
model: string # optional
```

# Claude Subagent — Frontmatter Keys

Always show details

```yml
name: string
description: string
tools: [string] # optional
```

# Prompt Collection — Schema (Experimental)

A lightweight collection format to group prompts for discovery.

Always show details

```json
{
  "$schema": "https://example.com/schemas/prompt-collection.schema.json",
  "name": "WordPress Starters",
  "description": "Reusable Copilot prompts for WP",
  "prompts": [
    {
      "id": "wp-register-block",
      "path": ".github/prompts/wp-register-block.prompt.md",
      "tags": ["blocks", "gutenberg"]
    }
  ]
}
```

# WordPress Coding Standards Quickstart

- Install PHPCS and WPCS rulesets.
- Use tabs for PHP indentation; wrap user strings for i18n; docblock public APIs.
- Escape late, sanitise early; always validate and authorise.

# WordPress Security Checklist

- Nonces for any state-changing actions.
- Escape output: `esc_html()`, `esc_attr()`, `wp_kses_post()`.
- Sanitise input: `sanitize_text_field()`, `sanitize_email()`.
- Cap checks with `current_user_can()`; never trust user input.

# Block Development Checklist

- Use `@wordpress/scripts`; define `block.json` (name, title, category, attributes).
- Register via `register_block_type_from_metadata()`.
- Enqueue editor/front assets properly; namespace styles.
- Provide `supports` (align, color, typography) as needed.

# Copilot Repository Instructions (WordPress)

- Use core WP APIs; follow WPCS; propose small diffs.
- For plugins: prefix functions, classes, and filters with project slug.
- For themes: follow Template Hierarchy; enqueue assets, no direct script tags.
- I18n: load text domain; add translators' comments for placeholders.

# CODEOWNERS

```md
- @your-team
```

# Issue Templates (WP-focused)

name: "🐛 Bug report (WordPress)"
description: "Report a reproducible issue with the plugin/theme"
title: "[Bug]: "
labels:

- bug
- needs-triage
  body:
- type: markdown
  attributes:
  value: |
  Thanks! Please fill out the details below to help us reproduce the issue.
- type: input
  id: wp_version
  attributes:
  label: "WordPress version"
  placeholder: "e.g. 6.6.2"
  validations:
  required: true
- type: input
  id: php_version
  attributes:
  label: "PHP version"
  placeholder: "e.g. 8.2"
  validations:
  required: true
- type: input
  id: plugin_theme
  attributes:
  label: "Affected component"
  description: "Which plugin/theme/module?"
  placeholder: "Plugin XYZ / Theme ABC"
  validations:
  required: true
- type: textarea
  id: repro
  attributes:
  label: "Steps to reproduce"
  value: | 1. Go to … 2. Click … 3. Observe …
  validations:
  required: true
- type: textarea
  id: expected
  attributes:
  label: "Expected behaviour"
  validations:
  required: true
- type: textarea
  id: actual
  attributes:
  label: "Actual behaviour (include error messages/logs)"
  validations:
  required: true
- type: dropdown
  id: environment
  attributes:
  label: "Environment"
  options: - "Local (wp-env/Local/Valet)" - "Staging" - "Production"
  multiple: false
  validations:
  required: true
- type: checkboxes
  id: checks
  attributes:
  label: "Checks"
  options: - label: "I searched for duplicate issues"
  required: true - label: "I can reproduce with all other plugins disabled and a default theme"
  required: true

---

feature_request_yml \= """name: "✨ Feature request (WordPress)"  
 description: "Suggest an improvement or new feature"  
 title: "\[Feature\]: "  
 labels:

- enhancement
  body:
- type: textarea
  id: problem
  attributes:
  label: "Problem to solve"
  description: "What user/customer problem does this feature address?"
  validations:
  required: true
- type: textarea
  id: proposal
  attributes:
  label: "Proposed solution"
  description: "Describe how it should work (include examples or prior art)"
  validations:
  required: true
- type: textarea
  id: impact
  attributes:
  label: "Impact / Risks"
  description: "Performance, backwards-compatibility, security, etc."
  validations:
  required: false

---

## ---------- PR Template (WP-focused) ----------

---

title: "[PR]: <concise summary>"
labels:

- pr
  body:
- type: markdown
  attributes:
  value: | ## Summary
  <!-- Concise description of the change and why it's needed. -->

        ## Related Issues

        ```
        Closes #___
        ```

        ## Changes
        - PHP follows WPCS & PHPCS passes locally
        - Escaping/sanitisation/nonces/capability checks added where needed
        - I18n added (text domain, translators' comments)
        - Blocks registered correctly (block.json / register_block_type_from_metadata)
        - Tests/docs updated (if applicable)

        ## Manual QA
        1. …
        2. …
        3. …

        ## Screenshots / GIF
        <!-- If UI changes, include before/after -->

---

# Saved Replies

Managed via GitHub UI (Profile → Saved replies). No frontmatter available. Keep replies short; customise after insertion.

# Copilot Custom Instructions (WordPress)

## Repository-wide

- **File:** .github/copilot-instructions.md (Markdown only)

- Follow WordPress Coding Standards (PHPCS).
- Use esc*html/esc_attr/sanitize*\* appropriately; nonces for forms; capability checks.
- All user-facing strings must be translatable with text domain.
- Prefer core APIs over custom implementations.

## Path-specific (\*.instructions.md)

- **Folder:** .github/instructions/ (with YAML frontmatter)

```md
---
applyTo: '**/*.php'
description: 'PHP (WordPress) rules'
---

- Use WP functions (get_option, update_option, wp_safe_redirect).
- Enqueue assets via wp_enqueue_scripts/admin_enqueue_scripts.
- Avoid direct DB queries; use $wpdb safely only when needed.
```

"""

# Reusable Prompt Files (`*.prompt.md`)

- **Folder:** `.github/prompts/`

Frontmatter:

- `description` — tooltip/summary
- `mode` — ask | edit | agent
- `model` — optional; uses current if omitted
- `tools` — optional list of tools (agent mode)

Body: the instructions. Reference shared guides with Markdown links.

# Custom Chat Modes (`*.chatmode.md`)

- **Folder:** `.github/chatmodes/`

Frontmatter:

- `description` — shown as placeholder & tooltip
- `tools` — allowed tools
- `model` — pinned model (optional)

Body: persona & guardrails for that mode.  
 """

# AGENTS.md — Universal Rules

Use this as a vendor-neutral rulebook for Copilot/Claude/Gemini. Keep it concise; assistants may include it on every run.

# Claude — CLAUDE.md & Subagents

- **CLAUDE.md**: Markdown file at repo root; high-level rules for Claude.

- **Subagents**: `.github/agents/*.md` with YAML frontmatter (`name`, `description`, `tools`), body as the subagent's persona/instructions.

# Gemini — GEMINI.md

Conventionally place a Markdown file at repo root with persistent guidance for Gemini-based tools.

# Prompt File — Frontmatter Keys

Always show details

```yml
description: string
mode: ask|edit|agent
model: string # optional`
tools: [string] # optional
```

# Chat Mode — Frontmatter Keys

Always show details

```yml
description: string
tools: [string] # optional
model: string # optional
```

# Claude Subagent — Frontmatter Keys

Always show details

```yml
name: string
description: string
tools: [string] # optional
```

# Prompt Collection — Schema (Experimental)

A lightweight collection format to group prompts for discovery.

Always show details

```json
{
  "$schema": "https://example.com/schemas/prompt-collection.schema.json",
  "name": "WordPress Starters",
  "description": "Reusable Copilot prompts for WP",
  "prompts": [
    {
      "id": "wp-register-block",
      "path": ".github/prompts/wp-register-block.prompt.md",
      "tags": ["blocks", "gutenberg"]
    }
  ]
}
```

# WordPress Coding Standards Quickstart

- Install PHPCS and WPCS rulesets.
- Use tabs for PHP indentation; wrap user strings for i18n; docblock public APIs.
- Escape late, sanitise early; always validate and authorise.

# WordPress Security Checklist

- Nonces for any state-changing actions.
- Escape output: `esc_html()`, `esc_attr()`, `wp_kses_post()`.
- Sanitise input: `sanitize_text_field()`, `sanitize_email()`.
- Cap checks with `current_user_can()`; never trust user input.

# Block Development Checklist

- Use `@wordpress/scripts`; define `block.json` (name, title, category, attributes).
- Register via `register_block_type_from_metadata()`.
- Enqueue editor/front assets properly; namespace styles.
- Provide `supports` (align, color, typography) as needed.

# Copilot Repository Instructions (WordPress)

- Use core WP APIs; follow WPCS; propose small diffs.
- For plugins: prefix functions, classes, and filters with project slug.
- For themes: follow Template Hierarchy; enqueue assets, no direct script tags.
- I18n: load text domain; add translators' comments for placeholders.

# CODEOWNERS

```md
- @your-team
```

# Issue Templates (WP-focused)

```yml
---
name: '🐛 Bug report (WordPress)'
description: 'Report a reproducible issue with the plugin/theme'
title: '[Bug]: '
labels:
  - bug
  - needs-triage
body:
  - type: markdown
    attributes:
      value: |
        Thanks! Please fill out the details below to help us reproduce the issue.
  - type: input
    id: wp_version
    attributes:
      label: 'WordPress version'
      placeholder: 'e.g. 6.6.2'
    validations:
      required: true
  - type: input
    id: php_version
    attributes:
      label: 'PHP version'
      placeholder: 'e.g. 8.2'
    validations:
      required: true
  - type: input
    id: plugin_theme
    attributes:
      label: 'Affected component'
      description: 'Which plugin/theme/module?'
      placeholder: 'Plugin XYZ / Theme ABC'
    validations:
      required: true
  - type: textarea
    id: repro
    attributes:
      label: 'Steps to reproduce'
      value: |
        1. Go to …
        2. Click …
        3. Observe …
    validations:
      required: true
  - type: textarea
    id: expected
    attributes:
      label: 'Expected behaviour'
    validations:
      required: true
  - type: textarea
    id: actual
    attributes:
      label: 'Actual behaviour (include error messages/logs)'
    validations:
      required: true
  - type: dropdown
    id: environment
    attributes:
      label: 'Environment'
      options:
        - 'Local (wp-env/Local/Valet)'
        - 'Staging'
        - 'Production'
      multiple: false
    validations:
      required: true
  - type: checkboxes
    id: checks
    attributes:
      label: 'Checks'
      options:
        - label: 'I searched for duplicate issues'
          required: true
        - label: 'I can reproduce with all other plugins disabled and a default theme'
          required: true
---
```

```yml
---
name: '✨ Feature request (WordPress)'
description: 'Suggest an improvement or new feature'
title: '[Feature]: '
labels:
  - enhancement
body:
  - type: textarea
    id: problem
    attributes:
      label: 'Problem to solve'
      description: 'What user/customer problem does this feature address?'
    validations:
      required: true
  - type: textarea
    id: proposal
    attributes:
      label: 'Proposed solution'
      description: 'Describe how it should work (include examples or prior art)'
    validations:
      required: true
  - type: textarea
    id: impact
    attributes:
      label: 'Impact / Risks'
      description: 'Performance, backwards-compatibility, security, etc.'
    validations:
      required: false
---
```

# PR Template (WP-focused)

````yml
---
title: '[PR]: <concise summary>'
labels:
  - pr
body:
  - type: markdown
    attributes:
      value: |
        ## Summary
        <!-- Concise description of the change and why it's needed. -->

        ## Related Issues

        ```
        Closes #___
        ```

        ## Changes
        - PHP follows WPCS & PHPCS passes locally
        - Escaping/sanitisation/nonces/capability checks added where needed
        - I18n added (text domain, translators' comments)
        - Blocks registered correctly (block.json / register_block_type_from_metadata)
        - Tests/docs updated (if applicable)

        ## Manual QA
        1. …
        2. …
        3. …

        ## Screenshots / GIF
        <!-- If UI changes, include before/after -->
---
````

# Copilot Space (WordPress Edition)

A minimal, **WordPress-friendly** Copilot Space that teaches and enforces correct use of YAML frontmatter
across GitHub templates and AI files. Includes docs, schemas, reusable prompts, custom chat modes,
and example Claude subagents. Built to standardise WP plugin/theme workflows.

# AGENTS.md — Universal AI Rules (WordPress)

- Follow **WordPress Coding Standards** (PHPCS: WordPress, WordPress-Docs, WordPress-Extra).
- PHP versions: prefer compatibility with current WP supported PHP (adjust per project).
- Escape, sanitise, and validate all inputs; use nonces for forms; respect capabilities/roles.
- I18n: wrap user-facing text in translation functions; provide text domain.
- Keep changes minimal and reversible; propose diffs and tests.
- Never output secrets; redact credentials and keys.

# CLAUDE.md — Project Instructions (WordPress)

Claude should:

- Prefer WordPress core APIs (Options, Settings API, REST API, Transients, WP_Filesystem).
- Use hooks/filters where appropriate; avoid monkey-patching core.
- Generate **PHPCS-compliant** PHP and add PHPDoc for public APIs.
- For JS (blocks), use @wordpress/\* packages; register blocks via block.json where sensible.

# GEMINI.md — Project Instructions (WordPress)

Gemini should follow: WordPress coding standards, security best practices (escaping/sanitising),
and internationalisation. Prefer minimal dependencies and progressive enhancement.

# Copilot Space Index — WordPress Frontmatter Playbook`

This space blends **GitHub templates** and **AI instruction files** with a WordPress focus.

## GitHub Templates

- [Issue Templates (Issue Forms)](issue-templates.md)
- [Pull Request Templates](pr-templates.md)
- [Saved Replies (overview)](saved-replies.md)

## Copilot Customisation

- [Repo & Path Instructions](copilot-instructions.md)
- [Reusable Prompt Files](prompt-files.md)
- [Custom Chat Modes](chatmodes.md)
- [AGENTS.md (universal rules)](agents-md.md)

## Claude & Gemini

- [Claude: CLAUDE.md & Subagents](claude-agents.md)
- [Gemini: GEMINI.md (convention)](gemini-md.md)

## Schemas

- [Issue Form schema](schemas/issue-form-schema.md)
- [Prompt frontmatter schema](schemas/prompt-frontmatter-schema.md)
- [Chat Mode frontmatter schema](schemas/chatmode-frontmatter-schema.md)
- [Claude Subagent schema](schemas/claude-subagent-schema.md)
- [Prompt Collection schema (experimental)](schemas/prompt-collection-schema.md)

## WordPress Guides

- [WordPress Coding Standards quickstart](../wp-guides/wp-coding-standards.md)
- [Security checklist for WP](../wp-guides/wp-security-checklist.md)
- [Block development checklist](../wp-guides/block-dev-checklist.md)

# Issue Templates (Issue Forms) — YAML Frontmatter (WordPress)

- **Location:** .github/ISSUE_TEMPLATE/\*.yml

Required: name, description, body.  
Optional: title, labels, assignees, projects, type.

The examples below include common WordPress fields (WP version, PHP version, theme/plugin). See live templates in this repo.

# Pull Request Templates (WordPress)

- **Location:** .github/PULL_REQUEST_TEMPLATE/\*.md

PR templates are plain Markdown (no form YAML). Use sections/checklists to enforce **WP coding standards**,  
testing steps, PHPCS, and i18n checks. A minimal example is provided in this repo.

# Saved Replies

Managed via GitHub UI (Profile → Saved replies). No frontmatter available. Keep replies short; customise after insertion.

# Copilot Custom Instructions (WordPress)

## Repository-wide

- **File:** .github/copilot-instructions.md (Markdown only)

- Follow WordPress Coding Standards (PHPCS).
- Use esc*html/esc_attr/sanitize*\* appropriately; nonces for forms; capability checks.
- All user-facing strings must be translatable with text domain.
- Prefer core APIs over custom implementations.

## Path-specific (\*.instructions.md)

- **Folder:** .github/instructions/ (with YAML frontmatter)

```md
---
applyTo: '**/*.php'
description: 'PHP (WordPress) rules'
---

- Use WP functions (get_option, update_option, wp_safe_redirect).
- Enqueue assets via wp_enqueue_scripts/admin_enqueue_scripts.
- Avoid direct DB queries; use $wpdb safely only when needed.
```

"""

# Reusable Prompt Files (`*.prompt.md`)

- **Folder:** `.github/prompts/`

Frontmatter:

- `description` — tooltip/summary
- `mode` — ask | edit | agent
- `model` — optional; uses current if omitted
- `tools` — optional list of tools (agent mode)

Body: the instructions. Reference shared guides with Markdown links.

# Custom Chat Modes (`*.chatmode.md`)

- **Folder:** `.github/chatmodes/`

Frontmatter:

- `description` — shown as placeholder & tooltip
- `tools` — allowed tools
- `model` — pinned model (optional)

Body: persona & guardrails for that mode.  
 """

# AGENTS.md — Universal Rules

Use this as a vendor-neutral rulebook for Copilot/Claude/Gemini. Keep it concise; assistants may include it on every run.

# Claude — CLAUDE.md & Subagents

- **CLAUDE.md**: Markdown file at repo root; high-level rules for Claude.

- **Subagents**: `.github/agents/*.md` with YAML frontmatter (`name`, `description`, `tools`), body as the subagent's persona/instructions.

# Gemini — GEMINI.md

Conventionally place a Markdown file at repo root with persistent guidance for Gemini-based tools.

# Prompt File — Frontmatter Keys

Always show details

```yml
description: string
mode: ask|edit|agent
model: string # optional`
tools: [string] # optional
```

# Chat Mode — Frontmatter Keys

Always show details

```yml
description: string
tools: [string] # optional
model: string # optional
```

# Claude Subagent — Frontmatter Keys

Always show details

```yml
name: string
description: string
tools: [string] # optional
```

# Prompt Collection — Schema (Experimental)

A lightweight collection format to group prompts for discovery.

Always show details

```json
{
  "$schema": "https://example.com/schemas/prompt-collection.schema.json",
  "name": "WordPress Starters",
  "description": "Reusable Copilot prompts for WP",
  "prompts": [
    {
      "id": "wp-register-block",
      "path": ".github/prompts/wp-register-block.prompt.md",
      "tags": ["blocks", "gutenberg"]
    }
  ]
}
```

# WordPress Coding Standards Quickstart

- Install PHPCS and WPCS rulesets.
- Use tabs for PHP indentation; wrap user strings for i18n; docblock public APIs.
- Escape late, sanitise early; always validate and authorise.

# WordPress Security Checklist

- Nonces for any state-changing actions.
- Escape output: `esc_html()`, `esc_attr()`, `wp_kses_post()`.
- Sanitise input: `sanitize_text_field()`, `sanitize_email()`.
- Cap checks with `current_user_can()`; never trust user input.

# Block Development Checklist

- Use `@wordpress/scripts`; define `block.json` (name, title, category, attributes).
- Register via `register_block_type_from_metadata()`.
- Enqueue editor/front assets properly; namespace styles.
- Provide `supports` (align, color, typography) as needed.

# Copilot Repository Instructions (WordPress)

- Use core WP APIs; follow WPCS; propose small diffs.
- For plugins: prefix functions, classes, and filters with project slug.
- For themes: follow Template Hierarchy; enqueue assets, no direct script tags.
- I18n: load text domain; add translators' comments for placeholders.

# CODEOWNERS

```md
- @your-team
```

# Issue Templates (WP-focused)

```yml
---
name: '🐛 Bug report (WordPress)'
description: 'Report a reproducible issue with the plugin/theme'
title: '[Bug]: '
labels:
  - bug
  - needs-triage
body:
  - type: markdown
    attributes:
      value: |
        Thanks! Please fill out the details below to help us reproduce the issue.
  - type: input
    id: wp_version
    attributes:
      label: 'WordPress version'
      placeholder: 'e.g. 6.6.2'
    validations:
      required: true
  - type: input
    id: php_version
    attributes:
      label: 'PHP version'
      placeholder: 'e.g. 8.2'
    validations:
      required: true
  - type: input
    id: plugin_theme
    attributes:
      label: 'Affected component'
      description: 'Which plugin/theme/module?'
      placeholder: 'Plugin XYZ / Theme ABC'
    validations:
      required: true
  - type: textarea
    id: repro
    attributes:
      label: 'Steps to reproduce'
      value: |
        1. Go to …
        2. Click …
        3. Observe …
    validations:
      required: true
  - type: textarea
    id: expected
    attributes:
      label: 'Expected behaviour'
    validations:
      required: true
  - type: textarea
    id: actual
    attributes:
      label: 'Actual behaviour (include error messages/logs)'
    validations:
      required: true
  - type: dropdown
    id: environment
    attributes:
      label: 'Environment'
      options:
        - 'Local (wp-env/Local/Valet)'
        - 'Staging'
        - 'Production'
      multiple: false
    validations:
      required: true
  - type: checkboxes
    id: checks
    attributes:
      label: 'Checks'
      options:
        - label: 'I searched for duplicate issues'
          required: true
        - label: 'I can reproduce with all other plugins disabled and a default theme'
          required: true
---
```

```yml
---
name: '✨ Feature request (WordPress)'
description: 'Suggest an improvement or new feature'
title: '[Feature]: '
labels:
  - enhancement
body:
  - type: textarea
    id: problem
    attributes:
      label: 'Problem to solve'
      description: 'What user/customer problem does this feature address?'
    validations:
      required: true
  - type: textarea
    id: proposal
    attributes:
      label: 'Proposed solution'
      description: 'Describe how it should work (include examples or prior art)'
    validations:
      required: true
  - type: textarea
    id: impact
    attributes:
      label: 'Impact / Risks'
      description: 'Performance, backwards-compatibility, security, etc.'
    validations:
      required: false
---
```

# PR Template (WP-focused)

````yml
---
title: '[PR]: <concise summary>'
labels:
  - pr
body:
  - type: markdown
    attributes:
      value: |
        ## Summary
        <!-- Concise description of the change and why it's needed. -->

        ## Related Issues

        ```
        Closes #___
        ```

        ## Changes
        - PHP follows WPCS & PHPCS passes locally
        - Escaping/sanitisation/nonces/capability checks added where needed
        - I18n added (text domain, translators' comments)
        - Blocks registered correctly (block.json / register_block_type_from_metadata)
        - Tests/docs updated (if applicable)

        ## Manual QA
        1. …
        2. …
        3. …

        ## Screenshots / GIF
        <!-- If UI changes, include before/after -->
---
````

# Copilot Space (WordPress Edition)

A minimal, **WordPress-friendly** Copilot Space that teaches and enforces correct use of YAML frontmatter
across GitHub templates and AI files. Includes docs, schemas, reusable prompts, custom chat modes,
and example Claude subagents. Built to standardise WP plugin/theme workflows.

# AGENTS.md — Universal AI Rules (WordPress)

- Follow **WordPress Coding Standards** (PHPCS: WordPress, WordPress-Docs, WordPress-Extra).
- PHP versions: prefer compatibility with current WP supported PHP (adjust per project).
- Escape, sanitise, and validate all inputs; use nonces for forms; respect capabilities/roles.
- I18n: wrap user-facing text in translation functions; provide text domain.
- Keep changes minimal and reversible; propose diffs and tests.
- Never output secrets; redact credentials and keys.

# CLAUDE.md — Project Instructions (WordPress)

Claude should:

- Prefer WordPress core APIs (Options, Settings API, REST API, Transients, WP_Filesystem).
- Use hooks/filters where appropriate; avoid monkey-patching core.
- Generate **PHPCS-compliant** PHP and add PHPDoc for public APIs.
- For JS (blocks), use @wordpress/\* packages; register blocks via block.json where sensible.

# GEMINI.md — Project Instructions (WordPress)

Gemini should follow: WordPress coding standards, security best practices (escaping/sanitising),
and internationalisation. Prefer minimal dependencies and progressive enhancement.

# Copilot Space Index — WordPress Frontmatter Playbook`

This space blends **GitHub templates** and **AI instruction files** with a WordPress focus.

## GitHub Templates

- [Issue Templates (Issue Forms)](issue-templates.md)
- [Pull Request Templates](pr-templates.md)
- [Saved Replies (overview)](saved-replies.md)

## Copilot Customisation

- [Repo & Path Instructions](copilot-instructions.md)
- [Reusable Prompt Files](prompt-files.md)
- [Custom Chat Modes](chatmodes.md)
- [AGENTS.md (universal rules)](agents-md.md)

## Claude & Gemini

- [Claude: CLAUDE.md & Subagents](claude-agents.md)
- [Gemini: GEMINI.md (convention)](gemini-md.md)

## Schemas

- [Issue Form schema](schemas/issue-form-schema.md)
- [Prompt frontmatter schema](schemas/prompt-frontmatter-schema.md)
- [Chat Mode frontmatter schema](schemas/chatmode-frontmatter-schema.md)
- [Claude Subagent schema](schemas/claude-subagent-schema.md)
- [Prompt Collection schema (experimental)](schemas/prompt-collection-schema.md)

## WordPress Guides

- [WordPress Coding Standards quickstart](../wp-guides/wp-coding-standards.md)
- [Security checklist for WP](../wp-guides/wp-security-checklist.md)
- [Block development checklist](../wp-guides/block-dev-checklist.md)

# Issue Templates (Issue Forms) — YAML Frontmatter (WordPress)

- **Location:** .github/ISSUE_TEMPLATE/\*.yml

Required: name, description, body.  
Optional: title, labels, assignees, projects, type.

The examples below include common WordPress fields (WP version, PHP version, theme/plugin). See live templates in this repo.

# Pull Request Templates (WordPress)

- **Location:** .github/PULL_REQUEST_TEMPLATE/\*.md

PR templates are plain Markdown (no form YAML). Use sections/checklists to enforce **WP coding standards**,  
testing steps, PHPCS, and i18n checks. A minimal example is provided in this repo.

# Saved Replies

Managed via GitHub UI (Profile → Saved replies). No frontmatter available. Keep replies short; customise after insertion.

# Copilot Custom Instructions (WordPress)

## Repository-wide

- **File:** .github/copilot-instructions.md (Markdown only)

- Follow WordPress Coding Standards (PHPCS).
- Use esc*html/esc_attr/sanitize*\* appropriately; nonces for forms; capability checks.
- All user-facing strings must be translatable with text domain.
- Prefer core APIs over custom implementations.

## Path-specific (\*.instructions.md)

- **Folder:** .github/instructions/ (with YAML frontmatter)

```md
---
applyTo: '**/*.php'
description: 'PHP (WordPress) rules'
---

- Use WP functions (get_option, update_option, wp_safe_redirect).
- Enqueue assets via wp_enqueue_scripts/admin_enqueue_scripts.
- Avoid direct DB queries; use $wpdb safely only when needed.
```

"""

# Reusable Prompt Files (`*.prompt.md`)

- **Folder:** `.github/prompts/`

Frontmatter:

- `description` — tooltip/summary
- `mode` — ask | edit | agent
- `model` — optional; uses current if omitted
- `tools` — optional list of tools (agent mode)

Body: the instructions. Reference shared guides with Markdown links.

# Custom Chat Modes (`*.chatmode.md`)

- **Folder:** `.github/chatmodes/`

Frontmatter:

- `description` — shown as placeholder & tooltip
- `tools` — allowed tools
- `model` — pinned model (optional)

Body: persona & guardrails for that mode.  
 """

# AGENTS.md — Universal Rules

Use this as a vendor-neutral rulebook for Copilot/Claude/Gemini. Keep it concise; assistants may include it on every run.

# Claude — CLAUDE.md & Subagents

- **CLAUDE.md**: Markdown file at repo root; high-level rules for Claude.

- **Subagents**: `.github/agents/*.md` with YAML frontmatter (`name`, `description`, `tools`), body as the subagent's persona/instructions.

# Gemini — GEMINI.md

Conventionally place a Markdown file at repo root with persistent guidance for Gemini-based tools.

# Prompt File — Frontmatter Keys

Always show details

```yml
description: string
mode: ask|edit|agent
model: string # optional`
tools: [string] # optional
```

# Chat Mode — Frontmatter Keys

Always show details

```yml
description: string
tools: [string] # optional
model: string # optional
```

# Claude Subagent — Frontmatter Keys

Always show details

```yml
name: string
description: string
tools: [string] # optional
```

# Prompt Collection — Schema (Experimental)

A lightweight collection format to group prompts for discovery.

Always show details

```json
{
  "$schema": "https://example.com/schemas/prompt-collection.schema.json",
  "name": "WordPress Starters",
  "description": "Reusable Copilot prompts for WP",
  "prompts": [
    {
      "id": "wp-register-block",
      "path": ".github/prompts/wp-register-block.prompt.md",
      "tags": ["blocks", "gutenberg"]
    }
  ]
}
```

# WordPress Coding Standards Quickstart

- Install PHPCS and WPCS rulesets.
- Use tabs for PHP indentation; wrap user strings for i18n; docblock public APIs.
- Escape late, sanitise early; always validate and authorise.

# WordPress Security Checklist

- Nonces for any state-changing actions.
- Escape output: `esc_html()`, `esc_attr()`, `wp_kses_post()`.
- Sanitise input: `sanitize_text_field()`, `sanitize_email()`.
- Cap checks with `current_user_can()`; never trust user input.

# Block Development Checklist

- Use `@wordpress/scripts`; define `block.json` (name, title, category, attributes).
- Register via `register_block_type_from_metadata()`.
- Enqueue editor/front assets properly; namespace styles.
- Provide `supports` (align, color, typography) as needed.

# Copilot Repository Instructions (WordPress)

- Use core WP APIs; follow WPCS; propose small diffs.
- For plugins: prefix functions, classes, and filters with project slug.
- For themes: follow Template Hierarchy; enqueue assets, no direct script tags.
- I18n: load text domain; add translators' comments for placeholders.

# CODEOWNERS

```md
- @your-team
```

# Issue Templates (WP-focused)

```yml
---
name: '🐛 Bug report (WordPress)'
description: 'Report a reproducible issue with the plugin/theme'
title: '[Bug]: '
labels:
  - bug
  - needs-triage
body:
  - type: markdown
    attributes:
      value: |
        Thanks! Please fill out the details below to help us reproduce the issue.
  - type: input
    id: wp_version
    attributes:
      label: 'WordPress version'
      placeholder: 'e.g. 6.6.2'
    validations:
      required: true
  - type: input
    id: php_version
    attributes:
      label: 'PHP version'
      placeholder: 'e.g. 8.2'
    validations:
      required: true
  - type: input
    id: plugin_theme
    attributes:
      label: 'Affected component'
      description: 'Which plugin/theme/module?'
      placeholder: 'Plugin XYZ / Theme ABC'
    validations:
      required: true
  - type: textarea
    id: repro
    attributes:
      label: 'Steps to reproduce'
      value: |
        1. Go to …
        2. Click …
        3. Observe …
    validations:
      required: true
  - type: textarea
    id: expected
    attributes:
      label: 'Expected behaviour'
    validations:
      required: true
  - type: textarea
    id: actual
    attributes:
      label: 'Actual behaviour (include error messages/logs)'
    validations:
      required: true
  - type: dropdown
    id: environment
    attributes:
      label: 'Environment'
      options:
        - 'Local (wp-env/Local/Valet)'
        - 'Staging'
        - 'Production'
      multiple: false
    validations:
      required: true
  - type: checkboxes
    id: checks
    attributes:
      label: 'Checks'
      options:
        - label: 'I searched for duplicate issues'
          required: true
        - label: 'I can reproduce with all other plugins disabled and a default theme'
          required: true
---
```

```yml
---
name: '✨ Feature request (WordPress)'
description: 'Suggest an improvement or new feature'
title: '[Feature]: '
labels:
  - enhancement
body:
  - type: textarea
    id: problem
    attributes:
```
