# Markdown Lint Suppressions

This file documents all global markdownlint suppressions applied in `.markdownlint.json` for the `wp-docs` repository. These suppressions are intended to balance code quality, maintainability, and practical constraints when working with legacy or complex documentation.

## Suppressed Rules

### MD013 – Line Length

**Suppressed:** Yes (globally)
**Rationale:** Many legacy documentation files contain long URLs, tables, or code examples that would be impractical to reflow. Enforcing this rule would create excessive diffs and reduce readability for technical content.

### MD003 – Heading Style (Setext vs ATX)

**Suppressed:** Yes (globally)
**Rationale:** The documentation set includes a mix of Setext and ATX headings, and converting all Setext headings would be time-consuming and error-prone. Suppression avoids unnecessary churn and preserves original author intent.

### MD040 – Fenced Code Block Language

**Suppressed:** Yes (globally)
**Rationale:** Many code blocks in legacy docs lack a specified language. Enforcing this rule would require manual review of hundreds of blocks, with little practical benefit for current usage.

---

> **Note:** These suppressions are reviewed periodically. If documentation is rewritten or significantly refactored, consider re-enabling these rules for new or heavily revised files.
