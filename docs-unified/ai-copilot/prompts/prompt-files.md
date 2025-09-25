# Reusable Prompt Files (`*.prompt.md`)

Frontmatter keys:
```yaml
description: "Tooltip"
mode: "ask"           # ask | edit | agent
# model: ""           # optional; prefer inherit
# tools: []           # agent-only; keep minimal
```
Body: purpose, steps, acceptance criteria, and **one** canonical link.

### WordPress examples
- Register a block (block.json + PHP render).
- Enqueue assets with versioning and `wp_localize_script`.
- Create a Settings API page.
- Generate PHPDoc (mode: edit).
