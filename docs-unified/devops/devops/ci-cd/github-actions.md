# GitHub Actions (Starter Workflows)

Workflows provided:
- `ci.yml` – Lint, unit, build, Playwright smoke on PR/push.
- `e2e-nightly-browserstack.yml` – Nightly cross-browser matrix (requires secrets).
- `release.yml` – Tag-driven packaging and GitHub Release.
- `codeql.yml` – Weekly security scan (GHAS optional).
- `.github/dependabot.yml` – Weekly dependency updates.

## Required secrets
- `BROWSERSTACK_USERNAME`, `BROWSERSTACK_ACCESS_KEY` (nightly E2E).

## Conventions
- Node 20, PHP 8.2
- `npm ci`, `npm run build` via `@wordpress/scripts`
- PHPUnit/PHPCS/PHPStan if `composer.json` exists
