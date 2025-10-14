The following instructions are only to be applied when performing a code review of Copilot assets in this repository (instructions, reusable prompts, custom chat modes). This file now also documents taxonomy, migration policies, and reuse guidelines for consumers of the library.

## 1. Asset Taxonomy

| Asset Type | File Pattern | Purpose | Scope | Typical Use |
|------------|--------------|---------|-------|-------------|
| Instruction | `*.instructions.md` | Global or contextual behavioural guidance (security, a11y, performance) | Passive, auto-applied based on location / applyTo | Improve baseline behaviour in reviews & generation |
| Prompt | `*.prompts.md` (legacy: `*.prompt.md`) | Single-shot reusable task / template (e.g. generate spec, create README) | Invoked explicitly (`/name`) | Consistent task execution |
| Chat Mode | `*.chatmodes.md` (legacy: `*.chatmode.md`) | Persistent conversational persona or workflow mode | Selected in chat UI | Extended multi-step behaviour |
| Agent | `*.agents.md` | Specialised domain expert with specific knowledge and capabilities | Invoked as declarative agent | Domain-specific expertise and workflows |

### When to create what
- Prefer an Instruction if behaviour should always apply (e.g. escaping, capability checks).
- Prefer a Prompt if the output is a one-off artefact or transformation (e.g. implementation plan, architectural decision record).
- Prefer a Chat Mode if you need sustained role framing, multi-phase process, or tool orchestration.
- Prefer an Agent if you need specialised domain expertise with specific knowledge, capabilities, and workflows.

## 2. Extension Migration Policy

Plural forms are now canonical:
- `*.prompts.md` replaces `*.prompt.md`
- `*.chatmodes.md` replaces `*.chatmode.md`

Migration approach:
1. New assets MUST use plural forms.
2. Legacy filenames remain only as short deprecation stubs containing front matter:
	```md
	---
	deprecated: true
	replacement: new-file.prompts.md
	description: 'Deprecated – use new-file.prompts.md instead.'
	---
	```
3. Automation (README generation & collection validation) recognises both during transition.
4. External consumers should update references; legacy stubs may be removed in a future major version.

## 3. Deprecation & Consolidation Rules

| Scenario | Action | Front Matter Fields | Notes |
|----------|--------|---------------------|-------|
| Duplicate conceptual asset | Merge into canonical file | `deprecated: true`, `replacement:` | Keep old file minimal; link rationale in canonical file |
| Superseded by broader mode | Deprecate narrow variant | As above | Provide mapping of sections if semantics changed |
| Spelling correction / rename | Deprecate misspelling | `replacement:` only | Example: `accesibility` → `accessibility` |
| Overly granular prompts (`update-X`) merged | Introduce parameterised prompt | Each old prompt stubbed with replacement | Encourage template variables |

Canonical consolidated examples already applied:
- Planning modes merged into `plan.chatmodes.md` (replaces `planner`, `task-planner`, `implementation-plan`).
- Accessibility variants merged into `accessibility.chatmodes.md`.

## 4. Consumption / Distribution Options

Recommended ways to reuse this library in other projects:

| Method | Pros | Cons | When to Use |
|--------|------|------|-------------|
| Git Submodule | Precise version pin, lightweight | Needs submodule workflow knowledge | Multi-repo central governance |
| Git Subtree | Copies history, simpler for contributors | Manual updates | Teams preferring vendor-style sync |
| NPM Package (docs bundle) | Versioned semver distribution, easy updates | Requires publish workflow, consumers extract files | Large org distribution pipelines |
| Template Repository | Quick bootstrap | No automatic upstream updates | Project scaffolding |
| GitHub Action (sync) | Automates pulling latest assets | CI complexity | Org-wide scheduled refresh |

Recommended default: **Git submodule** for tight control + explicit upgrade commits.

### Example (add as submodule)
```bash
git submodule add https://github.com/lightspeedwp/wp-docs vendor/wp-docs
git commit -m "chore: add wp-docs Copilot asset library"
```

Add a short README section in the consuming repo describing how to update:
```bash
git submodule update --remote vendor/wp-docs
git add vendor/wp-docs
git commit -m "chore: bump wp-docs library"
```

## 5. WordPress Coding Standards Integration

### Inline Documentation Standards

All WordPress-related Copilot assets should reference and follow the official WordPress inline documentation standards:

- **[WordPress Inline Documentation Standards](https://github.com/WordPress/wpcs-docs/blob/master/inline-documentation-standards.md)** - Core requirements for documenting WordPress code
- **[PHP Inline Documentation](https://github.com/WordPress/wpcs-docs/blob/master/inline-documentation-standards/php.md)** - DocBlock standards for PHP functions, classes, and hooks
- **[JavaScript Inline Documentation](https://github.com/WordPress/wpcs-docs/blob/master/inline-documentation-standards/javascript.md)** - JSDoc standards for JavaScript and block editor code
- **[WordPress Styleguide](https://github.com/WordPress/wpcs-docs/blob/master/styleguide.md)** - General coding style and documentation conventions

### Related Copilot Assets

The following assets help implement WordPress documentation standards:

- **Instruction**: `wordpress-inline-documentation.instructions.md` - Global documentation guidelines
- **Prompt**: `wordpress-inline-documentation-generator.prompts.md` - Generate standards-compliant documentation
- **Chat Mode**: `wordpress-documentation-expert.chatmodes.md` - Interactive documentation assistance
- **Agent**: `wordpress-documentation-specialist.agents.md` - Specialized documentation agent

## 6. Authoring Standards (Recap)
Keep content DRY: reference existing instruction files instead of duplicating long guidance (e.g. link to `performance-optimization.instructions.md`).
Prefer UK English spelling for documentation (per `AGENTS.md`).
Security & accessibility expectations inherit from global instruction files automatically—do not restate unless adding nuance.
WordPress documentation should always reference official WordPress coding standards rather than generic alternatives.

## 7. Review Checklists (Updated for Plural Extensions)

### README updates

* [ ] New file added to category README via generator (run build task if missing).
* [ ] If replacing an older asset, legacy stub present & correctly points to replacement.

### Prompt File Guide

**Applies to files ending in `*.prompts.md` (legacy: `*.prompt.md`)**

* [ ] Has markdown front matter.
* [ ] `mode` field is `agent` or `ask`.
* [ ] `description` field present, non-empty, single quoted.
* [ ] File name is lowercase, hyphen-separated.
* [ ] Encourages `tools` (optional) and preferably specifies `model`.
* [ ] No duplicated scope with another prompt (or rationale documented).

### Instruction File Guide

**Applies to files ending in `*.instructions.md`**

* [ ] Markdown front matter present.
* [ ] `description` present, non-empty, single quoted.
* [ ] File name lowercase, hyphen-separated.
* [ ] `applyTo` field exists and matches intended glob (multiple paths comma-separated inside single quotes).
* [ ] Avoids overlapping content with existing instructions unless extending (link to base file).

### Chat Mode File Guide

**Applies to files ending in `*.chatmodes.md` (legacy: `*.chatmode.md`)**

* [ ] Markdown front matter with `description` (single quoted) & optional `tools` list sized to scope.
* [ ] File name lowercase, hyphen-separated.
* [ ] Encourages specifying `model` when behaviour depends on model capabilities.
* [ ] If consolidating others, includes a short deprecation note & links.
* [ ] No unbounded / unsafe autonomous claims (security posture maintained).

### Agent File Guide

**Applies to files ending in `*.agents.md`**

* [ ] Markdown front matter with `description` (single quoted) & domain-specific `tools` list.
* [ ] File name lowercase, hyphen-separated.
* [ ] Specifies `model` when agent requires specific model capabilities.
* [ ] Clearly defines domain expertise and scope of knowledge.
* [ ] No unbounded / unsafe autonomous claims (security posture maintained).

## 8. Deprecation Stub Template
```md
---
license: 'GPL-3.0'
deprecated: true
replacement: new-file.chatmodes.md
description: 'Deprecated – use new-file.chatmodes.md instead.'
---

This file has been deprecated in favour of `new-file.chatmodes.md`.
```

## 9. Quality Gates Summary
| Aspect | Minimum Expectation |
|--------|---------------------|
| Front Matter | Present, valid YAML, required keys filled |
| Naming | Lowercase, hyphen delimited |
| DRY | Points to canonical sources instead of duplicating long blocks |
| Security | No instructions encouraging unsafe operations without guard rails |
| Accessibility | Encourages WCAG 2.2 AA where relevant |
| Performance | Refers to optimisation instructions when optimisation tasks are involved |

## 10. Future Removals
Legacy singular extension stubs will be purged in a future major release (proposed: v2) after a documented deprecation window. Consumers should migrate now.

---
Below are the original minimal checklists retained for continuity (updated to note plural forms):

## README updates

* [ ] The new file should be added to the `README.md`.

##  Prompt file guide

**Only apply to files that end in `.prompts.md`**

* [ ] The prompt has markdown front matter.
* [ ] The prompt has a `mode` field specified of either `agent` or `ask`.
* [ ] The prompt has a `description` field.
* [ ] The `description` field is not empty.
* [ ] The `description` field value is wrapped in single quotes.
* [ ] The file name is lower case, with words separated by hyphens.
* [ ] Encourage the use of `tools`, but it's not required.
* [ ] Strongly encourage the use of `model` to specify the model that the prompt is optimised for.

## Instruction file guide

**Only apply to files that end in `.instructions.md`**

* [ ] The instruction has markdown front matter.
* [ ] The instruction has a `description` field.
* [ ] The `description` field is not empty.
* [ ] The `description` field value is wrapped in single quotes.
* [ ] The file name is lower case, with words separated by hyphens.
* [ ] The instruction has an `applyTo` field that specifies the file or files to which the instructions apply. If they wish to specify multiple file paths they should formated like `'**.js, **.ts'`.

## Chat Mode file guide

**Only apply to files that end in `.chatmodes.md`**

* [ ] The chat mode has markdown front matter.
* [ ] The chat mode has a `description` field.
* [ ] The `description` field is not empty.
* [ ] The `description` field value is wrapped in single quotes.
* [ ] The file name is lower case, with words separated by hyphens.
* [ ] Encourage the use of `tools`, but it's not required.
* [ ] Strongly encourage the use of `model` to specify the model that the chat mode is optimised for.

## Agent file guide

**Only apply to files that end in `.agents.md`**

* [ ] The agent has markdown front matter.
* [ ] The agent has a `description` field.
* [ ] The `description` field is not empty.
* [ ] The `description` field value is wrapped in single quotes.
* [ ] The file name is lower case, with words separated by hyphens.
* [ ] Encourage the use of `tools`, but it's not required.
* [ ] Strongly encourage the use of `model` to specify the model that the agent is optimised for.
* [ ] Clearly defines domain expertise and capabilities.
