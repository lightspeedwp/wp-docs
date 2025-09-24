# Agile & DevOps Field Guide (LightSpeed)

A practical, plain‑English starter for how we plan, build and ship software.

## 1) Why Agile + DevOps
Agile delivers value in small increments; DevOps automates build/test/deploy and improves collaboration.
**What it means for us**: ship small, visualise work, automate where it helps, measure outcomes.

## 2) Mindset (10 lines)
- Individuals & interactions; Working software; Customer collaboration; Responding to change  
- Deliver early; Short feedback loops; Make work visible; Limit WIP; Focus on user value; Reflect & adjust

## 3) Scrumban at LightSpeed
- **Cadence**: 2‑week milestones as sprint proxies; continuous pull with Kanban **WIP limits**  
- **GitHub mapping**: Projects (board) → Epics (parent issues) → Stories (child issues) → PRs (linked)  
- **Milestones**: 1.0 Beta 1 → 1.0 RC1 → 1.0 Final → future releases  
- **Releases**: tagged, changelogged; keep PRs small, CI green
- **Asana**: non‑code (studies/research/meetings) mirrored as needed and linked to GitHub issues

## 4) Guard‑rails
- **DoR**: clear scope, ACs, small enough (≤2–3 days)  
- **DoD**: code + tests + docs + security checks; deployable if applicable

## 5) Board rhythm
Stand‑up (≤15m) → Flow focus & blockers; Weekly grooming; Review/Retro each milestone.
Metrics: cycle time, throughput, lead time for changes, escaped defects.

## 6) WordPress Focus
Plan for **block themes & plugins**: break by user value (front‑end UX, editor UX, data), use feature flags where risky,
and test with Playwright and PHPUnit. Maintain `theme.json` and block metadata cleanly; follow accessibility checklists.

## References
See files in `agile/`, `scrum/`, `kanban/`, and `project-management/` for source links.
