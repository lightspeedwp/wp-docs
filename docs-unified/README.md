---
description: 'Unified documentation hub for WordPress development, block themes, DevOps, project management, and AI-assisted workflows.'
---

# Unified WordPress Documentation Hub

This is the consolidated documentation hub that brings together all WordPress development guidance, standards, processes, and AI assistance tools into a single, well-organized structure.

## 🎯 Goals

- **Single Source of Truth**: All WordPress development knowledge in one place
- **Logical Organization**: Content grouped by major functional areas
- **Cross-Reference**: Easy navigation between related topics
- **AI-Enhanced**: Integrated AI assistance tools and workflows
- **Standards-Driven**: Consistent quality and formatting across all docs

## 📁 Top-Level Structure

| Area | Path | Purpose |
|------|------|---------|
| **WordPress Development** | [`wordpress/`](./wordpress/) | Core WordPress dev guidance, coding standards, best practices |
| **Block Themes** | [`block-themes/`](./block-themes/) | Modern block theme development, design systems, patterns |
| **DevOps & CI/CD** | [`devops/`](./devops/) | Deployment, CI/CD, infrastructure, release management |
| **Project Management** | [`project-management/`](./project-management/) | Agile methods, Scrum, Kanban, workflow processes |
| **AI & Copilot** | [`ai-copilot/`](./ai-copilot/) | GitHub Copilot, prompts, chat modes, agents, AI workflows |
| **Standards & Guidelines** | [`standards/`](./standards/) | Coding standards, documentation standards, quality gates |
| **Tooling & Automation** | [`tooling/`](./tooling/) | Development tools, automation scripts, linting, testing |
| **Templates & Patterns** | [`templates/`](./templates/) | Reusable code patterns, boilerplate, scaffolding |
| **Reference** | [`reference/`](./reference/) | Schemas, APIs, architectural decision records |

## 🧭 Navigation Guidelines

1. **Start with README**: Each major section has a comprehensive README.md with overview and links
2. **Follow Breadcrumbs**: Consistent navigation aids throughout
3. **Use Cross-References**: Related content linked across sections
4. **Check Schemas**: Reference schemas in `reference/schemas/` for data structures
5. **Find Examples**: Look in `templates/` for practical implementations

## 📝 Content Principles

- **UK English**: Consistent language and spelling
- **Accessibility First**: Clear headings, meaningful links, structured content
- **Examples Included**: Practical code samples and real-world usage
- **Standards Referenced**: Links to authoritative sources (WordPress Core, WCAG, etc.)
- **Frontmatter Required**: All docs include descriptive YAML frontmatter

## 🚀 Quick Start

**New to WordPress Development?** → Start with [`wordpress/getting-started/`](./wordpress/getting-started/)

**Building Block Themes?** → Begin with [`block-themes/overview.md`](./block-themes/overview.md)

**Setting up DevOps?** → Check [`devops/setup/`](./devops/setup/)

**Managing Projects?** → Explore [`project-management/methodologies/`](./project-management/methodologies/)

**Using AI Tools?** → Dive into [`ai-copilot/getting-started.md`](./ai-copilot/getting-started.md)

## 🔄 Contribution Workflow

1. **Identify Section**: Find the appropriate top-level area for your content
2. **Check Existing**: Avoid duplication - link to existing content instead
3. **Follow Standards**: Use the templates in `templates/documentation/`
4. **Add Frontmatter**: Include required YAML metadata
5. **Cross-Reference**: Link related content across sections
6. **Test Examples**: Verify all code examples work
7. **Update Navigation**: Add to relevant README files

## 🏷️ Tagging System

Content is tagged using a controlled vocabulary:

- **Domain**: `wordpress`, `blocks`, `devops`, `agile`, `ai`, `standards`
- **Complexity**: `beginner`, `intermediate`, `advanced`
- **Type**: `guide`, `reference`, `example`, `checklist`, `template`
- **Status**: `stable`, `draft`, `deprecated`

## 📊 Quality Gates

- [ ] Single H1 heading per document
- [ ] Proper heading hierarchy (no skipped levels)
- [ ] Meaningful link text (no "click here")
- [ ] Required frontmatter present
- [ ] UK English spelling
- [ ] Working code examples
- [ ] Accessibility considerations

## 🔧 Automation & Tools

| Tool | Purpose | Location |
|------|---------|----------|
| README Generator | Auto-updates navigation indexes | `.github/scripts/update-readme.js` |
| Link Checker | Validates internal links | `.github/scripts/audit-links.js` |
| Standards Linter | Enforces doc standards | `.github/scripts/lint-docs.js` |
| Collection Validator | Validates AI asset collections | `.github/scripts/validate-collections.js` |

## 📈 What's New

- **2025-09-24**: Initial unified structure created
- Consolidated 15+ documentation sources
- Established consistent navigation and tagging
- Created cross-functional organization

## 🆘 Getting Help

- **Standards Questions**: See [`standards/README.md`](./standards/README.md)
- **AI Tool Issues**: Check [`ai-copilot/troubleshooting.md`](./ai-copilot/troubleshooting.md)
- **DevOps Support**: Review [`devops/support.md`](./devops/support.md)
- **General Issues**: Open an issue using our templates

---

*This documentation follows the [LightSpeed WordPress Documentation Standards](./standards/documentation-standards.md).*
