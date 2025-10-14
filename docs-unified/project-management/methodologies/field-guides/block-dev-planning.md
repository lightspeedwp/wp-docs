# WordPress Block Development – Planning Guide (LightSpeed)

This guide helps plan **Block Theme** and **Block Plugin** work in Scrumban.

## Work Breakdown
- **Epics (Parent issues)**: major functional areas (e.g., Navigation, Patterns, Editor UX)
- **Stories (Child issues)**: user‑centred slices (≤2–3 days); include ACs & test notes
- **Tasks**: implementation details per story (optional if small)

## Typical Streams
- **Theme structure**: `theme.json`, templates, template parts
- **Blocks**: custom blocks, variations, block.json, block bindings
- **Styles/Design System**: tokens, variables, patterns, responsive rules
- **Data**: CPTs/taxonomies, meta, REST endpoints
- **Performance**: script/style enqueue, lazy‑loading, caching hooks
- **Accessibility**: keyboard nav, landmarks, colour contrast
- **QA/Testing**: PHPUnit, Playwright, axe-core

## GitHub & Asana
Track code work in GitHub; link any Asana research/design tasks back to issues.
Keep PRs small; include screenshots/screencasts for editor/front‑end changes.

## Checklists
- **DoR**: Story describes user value, edge cases, ACs, designs/refs linked
- **DoD**: PR merged, tests pass, docs updated, changelog entry added

## References
- Block Editor Handbook, theme.json, block.json best practices (internal links to come)
