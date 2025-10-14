# CI/CD at LightSpeed (Overview)

**Goals:** fast feedback, reliable releases, fewer regressions.
- Trunk-based Git; PR-first.
- Required checks: lint → unit → build → e2e (smoke) → security.
- Staging auto-deploy on `main`; manual gate to production.
- Track DORA metrics.

See: `github-actions.md` for YAML details and `release-process.md` for tagging & packaging.
