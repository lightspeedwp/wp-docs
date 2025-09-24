# Copilot Custom Instructions

## **Repository-wide**

**File:** `.github/copilot-instructions.md`
 Plain Markdown. No YAML required.

Use this file for always-on guidance (style, patterns, security notes).

## **Path-specific**

**Folder:** `.github/instructions/`
 **File pattern:** `*.instructions.md` with YAML frontmatter.

Always show details
`---`
`applyTo: "src/**/*.{js,ts,tsx}"   # glob(s) for files this applies to`
`description: "Frontend coding rules"  # optional tooltip/label`
`---`
`# Frontend Guidelines`
`- Prefer functional components and hooks`
`- Add tests for new components`

**Tips**

* Combine globs with commas: `applyTo: "src/**/*.ts,tests/**/*.ts"`

* Keep rules concise; whitespace is ignored by Copilot.
