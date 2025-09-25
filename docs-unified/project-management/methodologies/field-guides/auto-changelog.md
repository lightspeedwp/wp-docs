# Auto‑Generating Changelogs (LightSpeed)

We generate release notes from merged PRs/issues.

## Approach
- Enforce PR titles like: `feat(theme): add pattern X`, `fix(block): correct aria-label`, `docs`, `chore`
- Use labels (`breaking`, `feat`, `fix`, `perf`, `a11y`) to group entries
- Tag releases from CI; attach the generated changelog

## Minimal Conventional Commits
- `feat(scope): …` new feature
- `fix(scope): …` bug fix
- `perf`, `refactor`, `docs`, `test`, `chore`
- `BREAKING CHANGE:` in body when applicable

## Release Template
- **Highlights**
- **Features**
- **Fixes**
- **Performance**
- **Docs**
- **Breaking changes**
- **Contributors**

## Tips
- Keep PRs focused; link issues; include before/after screenshots
