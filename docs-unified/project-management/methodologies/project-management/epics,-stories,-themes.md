# Epics, Stories, Themes

> **Source:** https://www.atlassian.com/agile/project-management/epics-stories-themes

## TL;DR (LightSpeed)
Use parent issues for **Epics**; child issues for **Stories**; tag themes/components for traceability.

## Key Concepts
- Summarised from source: core definitions, roles/flows, and why it matters.
- Prioritise user value; keep feedback loops short; continuously improve.
- Aligns to our **Scrumban** rhythm with 2-week milestones and WIP limits.

## How we apply this in `lsx-demo-theme`
- Map work to **Parent (Epic)** and **Child (Story)** issues; reference PRs (e.g., _Fixes #123_)
- Use **GitHub Projects** board: _Backlog → Ready → In Progress → In Review → In QA → Done_
- Enforce **WIP limits**; keep PRs under ~300 LOC where possible; require CI pass
- If non-code work: create Asana task and link back to the GitHub issue

## Checklists
- **Definition of Ready**: Clear ACs (Given/When/Then), small, testable
- **Definition of Done**: Code + tests + docs + reviewed + merged + (deployed if applicable)
- **Retro prompt**: Data → Insights → 1–2 Experiments for next milestone

## Metrics
- Cycle time ↓; Throughput steady; Lead time for changes ↓; Escaped defects ↓

## References
- https://www.atlassian.com/agile/project-management/epics-stories-themes
