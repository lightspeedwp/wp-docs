# Specialised Agents

This directory defines focused AI personas that extend the global contract (`../../AGENTS.md`). Each persona targets a narrow quality or domain concern to reduce cognitive load and improve review precision.

| Persona                                      | File                                   | Primary Focus                                | Use When                                         |
| -------------------------------------------- | -------------------------------------- | -------------------------------------------- | ------------------------------------------------ |
| Block Theme Optimiser                        | `block-theme-optimizer.agent.md`       | Token coherence, CSS reduction, fluid scales | Editing `theme.json`, patterns, style variations |
| Accessibility Auditor                        | `accessibility-auditor.agent.md`       | WCAG 2.2 semantics, focus, contrast intent   | New interactive UI, navigation, palette changes  |
| Security Hardening Reviewer                  | `security-hardening-reviewer.agent.md` | Capabilities, nonces, sanitisation/escaping  | REST routes, form handlers, DB queries           |
| Performance & Core Web Vitals Profiler       | `performance-profiler.agent.md`        | Asset payload, queries, render path          | Asset additions, perf regressions suspected      |
| Internationalisation & Localisation Reviewer | `i18n-l10n-reviewer.agent.md`          | Translation readiness, domains, placeholders | Adding / refactoring strings or formats          |

## Quick Invocation Pattern

When invoking a persona, briefly describe: scope, key files, constraints, desired output form. Example:

"Act as the Accessibility Auditor. Review the diff touching navigation pattern and theme.json palette additions. Identify semantic, contrast, and focus concerns; provide prioritised remediation steps."

## Authoring New Personas

1. Confirm scope not already covered.
2. Use `AGENT.md` structure specification.
3. Keep content concise, link instead of copying policy.
4. Add to table above and update CHANGELOG with rationale.

## Roadmap (Deferred Personas)

- REST API Contract Validator
- Testing & CI Strategy Advisor
- Design Token Governance Curator (if Block Theme scope grows)

All new content should adopt UK English spelling going forward (see forthcoming language style guidance).
