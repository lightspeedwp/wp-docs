# Playwright Testing

**PRs:** run headless smoke tests via `ci.yml`.  
**Nightly:** BrowserStack matrix via `e2e-nightly-browserstack.yml` (set secrets).

Tips:
- Use roles/labels over brittle selectors.
- Enable traces & screenshots on failure.
- Isolate data; use fixtures; retry known flakes.
