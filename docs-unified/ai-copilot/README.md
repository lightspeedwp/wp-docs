---
description: 'Central hub for GitHub Copilot space assets (prompts, instructions, chat modes, agents, schemas, templates) with contribution workflow and quality gates.'
---

# Copilot Space

A curated, governed workspace for designing, validating, and operationalising GitHub Copilot (and compatible LLM) assets used across this repository. It brings together prompt files, instruction packs, chat modes, agent personas, schemas, and issue / PR workflow templates under a single, documented contract.

> Built with accessibility, performance, security, and maintainability in mind—manual review & testing are still required.

## Goals

-   Single source of truth for Copilot-facing artefacts
-   Consistent frontmatter & taxonomy (domain, stability, tags)
-   Predictable quality gates (a11y, security, performance, i18n, coding standards)
-   Easy discoverability & onboarding for contributors
-   Future-ready for automated validation / generation

## Directory Structure

| File / Folder                            | Purpose                                      | Key Notes                                                                                  |
| ---------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `copilot-instructions.md`                | Aggregated or canonical instruction guidance | May reference individual `.instructions.md` assets living elsewhere (.github/instructions) |
| `prompt-files.md`                        | Usage & authoring guide for `*.prompt.md`    | Covers frontmatter fields: mode, description, model, tools, tags                           |
| `chatmodes.md`                           | Overview & conventions for `*.chatmode.md`   | Distinguishes chat mode vs prompt; encourages tool specification                           |
| `agents-md.md`                           | Guidance for agent persona authoring         | Complements global `AGENTS.md` (behavioural contract)                                      |
| `claude-agents.md`                       | Vendor-specific (Claude) agent/persona notes | Focus on multi-subagent orchestration patterns                                             |
| `gemini-md.md`                           | Vendor-specific (Gemini) usage nuances       | Model selection, temperature, safety guidelines summary                                    |
| `issue-templates.md`                     | Documentation of GitHub Issue Form patterns  | Works with `schemas/issue-form-schema.md`                                                  |
| `pr-templates.md`                        | Pull Request template conventions            | Links quality gates & required narrative sections                                          |
| `saved-replies.md`                       | Standard reviewer response snippets          | Encourages consistent, constructive feedback                                               |
| `schemas/`                               | Formal frontmatter / form schemas            | Source-of-truth for validation tooling                                                     |
| `schemas/prompt-frontmatter-schema.md`   | Schema for prompt frontmatter                | Ensures required: description, mode, (recommended) model, tools                            |
| `schemas/chatmode-frontmatter-schema.md` | Schema for chat mode frontmatter             | Requires: description; recommends: mode=agent & model                                      |
| `schemas/claude-subagent-schema.md`      | Schema for Claude multi-agent config         | Defines subagent roles & capabilities                                                      |
| `schemas/issue-form-schema.md`           | Schema reference for GitHub issue forms      | Aligns custom forms with GitHub validation                                                 |

## Frontmatter Conventions (Recap)

Every prompt, instruction, and chat mode file SHOULD include frontmatter:

```yaml
---
description: 'Concise, user-facing purpose.'
mode: agent | ask # (prompts/chat modes)
model: gpt-4o | claude-3 | gemini-1.5 | ... # (recommended)
tools: repo, terminal, browser, ... # (optional list)
stability: experimental | preview | stable | deprecated
deprecated: false # if true, add replacement: 'path/to/new'
domain: wp-core | perf | a11y | security | i18n | headless | generic
extraDomains: ['block-theme', 'plugin']
tags: ['theme.json', 'lcp', 'nonce-check']
---
```

Minimum required: `description` (and `mode` for prompts / chat modes). Avoid empty strings; wrap in single quotes.

## Quality Gates

Before adding or updating assets:

1. Description present, meaningful, <= 160 chars.
2. No deprecated references unless providing a replacement pointer.
3. Domain & stability chosen correctly (avoid `generic` if a narrow WP concern fits).
4. Accessible phrasing (people-first language; no assumptions about ability or tooling).
5. Security intent explicit where relevant (e.g., "sanitise input", "nonce verification").
6. Performance claims measurable or suggest metrics (LCP, TTFB, queries).
7. i18n awareness: avoid hard-coded locale assumptions.

## Authoring Workflow

1. Draft new file (prompt/instruction/chat mode) with complete frontmatter.
2. Run (future) validator script (planned) or manual checklist.
3. Link or reference it in the appropriate catalog (generator handles most if placed correctly).
4. Add CHANGELOG entry for notable additions (new domain, feature, or deprecation).
5. Open PR with rationale + usage example snippet.

## Deprecation Policy

-   Mark with `deprecated: true` and add `replacement:`.
-   Generator tooling omits deprecated assets from new catalogs.
-   Remove deprecated file only after sufficient external link remediation window.

## Example Prompt Skeleton

```markdown
---
description: 'Analyse potential XSS vectors in a custom block render callback.'
mode: ask
model: gpt-4o
stability: preview
domain: security
tags: ['block', 'escaping', 'review']
---

# Security Block Review

Provide a structured audit... (concise instructions here)
```

## Example Chat Mode Skeleton

```markdown
---
description: 'Assist with performance profiling for WordPress theme and plugin bottlenecks.'
mode: agent
model: gpt-4o
stability: experimental
domain: perf
tools: ['terminal', 'repo']
---
```

## Inclusive & Accessible Language Tips

-   Use people-first phrasing ("person using a screen reader").
-   Avoid metaphors that reduce clarity ("just", "simply").
-   Provide alternatives for colour-based distinctions in examples.

## Planned Automation (Roadmap)

| Feature                          | Status  | Notes                                                            |
| -------------------------------- | ------- | ---------------------------------------------------------------- |
| Frontmatter validator            | Planned | Extend `validate-collections.js` pattern or add dedicated script |
| Domain/stability badge injection | Planned | Surface in generated catalog tables                              |
| Deprecated asset sweep report    | Planned | CI job summarising outstanding deprecated references             |
| Schema-driven PR checks          | Planned | GitHub Action validating new/changed assets                      |

## Contribution Checklist

-   [ ] Frontmatter complete & valid
-   [ ] Description concise & clear
-   [ ] Appropriate domain & stability set
-   [ ] Tags specific (0–6, no redundancy)
-   [ ] No PII or secrets
-   [ ] Accessibility & security considerations included where relevant
-   [ ] Added CHANGELOG entry if impactful

## FAQ

**Why separate schemas?** Keeps evolution explicit and decoupled; enables independent tooling.

**Can I omit `model`?** Yes, but specifying improves reproducibility and intent clarity.

**Where do collections live?** Root `collections/` directory; automatically catalogued by generator.

**How are deprecated assets hidden?** `deprecated: true` filtered out by the generator logic.

## Support & Escalation

Raise a GitHub Issue using the appropriate issue form; include file path, intent, and any validation output. For urgent security-related prompt/agent concerns, follow the repository `SECURITY.md` process.

---

Maintained under the repository governance rules defined in `AGENTS.md` and tagging/frontmatter conventions. Contributions welcome—focus on clarity, safety, and practical developer impact.
