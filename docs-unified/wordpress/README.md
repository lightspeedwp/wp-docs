---
description: 'WordPress core development guidance covering coding standards, Gutenberg, themes, plugins, and best practices.'
tags: ['wordpress', 'development', 'guide']
domain: 'wordpress'
stability: 'stable'
---

# WordPress Development

Comprehensive guidance for WordPress core development, covering everything from basic setup to advanced customization, following WordPress coding standards and best practices.

## 📋 Overview

WordPress development encompasses themes, plugins, blocks, and core contributions. This section provides authoritative guidance aligned with WordPress.org standards and modern development practices.

## 📁 Section Structure

### Getting Started
**Path:** [`getting-started/`](./getting-started/)
- Environment setup (Local, Docker, wp-env)
- WordPress development fundamentals
- Basic theme and plugin creation
- Development workflow introduction

### Coding Standards
**Path:** [`coding-standards/`](./coding-standards/)
- PHP coding standards (WordPress Coding Standards)
- JavaScript and CSS standards
- HTML and accessibility requirements
- Inline documentation standards
- Code review checklists

### Gutenberg & Blocks
**Path:** [`gutenberg/`](./gutenberg/)
- Block development (static and dynamic)
- Block patterns and variations
- Editor customization
- Block APIs and hooks
- Testing blocks

### Theme Development
**Path:** [`themes/`](./themes/)
- Classic theme development
- Block theme development (see also [`../block-themes/`](../block-themes/))
- Child themes and customization
- Theme review guidelines
- WordPress.org submission process

### Plugin Development
**Path:** [`plugins/`](./plugins/)
- Plugin architecture and structure
- WordPress APIs (REST, WP-CLI, etc.)
- Database interactions
- Security best practices
- Plugin directory submission

## 🎯 Quick Start Paths

**New to WordPress?**
1. [`getting-started/environment-setup.md`](./getting-started/environment-setup.md)
2. [`getting-started/wordpress-fundamentals.md`](./getting-started/wordpress-fundamentals.md)
3. [`coding-standards/overview.md`](./coding-standards/overview.md)

**Building Your First Block?**
1. [`gutenberg/getting-started/`](./gutenberg/getting-started/)
2. [`gutenberg/block-development/`](./gutenberg/block-development/)
3. [`../block-themes/blocks/`](../block-themes/blocks/)

**Creating a Plugin?**
1. [`plugins/plugin-structure.md`](./plugins/plugin-structure.md)
2. [`plugins/wordpress-apis.md`](./plugins/wordpress-apis.md)
3. [`coding-standards/php.md`](./coding-standards/php.md)

## 🔗 Cross-References

- **Block Theme Development**: See [`../block-themes/`](../block-themes/) for modern theme patterns
- **DevOps & Deployment**: Check [`../devops/wordpress/`](../devops/wordpress/) for deployment strategies
- **AI-Assisted Development**: Explore [`../ai-copilot/wordpress/`](../ai-copilot/wordpress/) for Copilot prompts
- **Code Templates**: Find boilerplate in [`../templates/wordpress/`](../templates/wordpress/)
- **Quality Standards**: Review [`../standards/wordpress/`](../standards/wordpress/)

## 🏷️ Content Tags

Content in this section uses these tags:
- `wordpress` - Core WordPress functionality
- `php` - PHP-specific guidance
- `javascript` - JS development
- `css` - Styling and CSS
- `blocks` - Gutenberg blocks
- `themes` - Theme development
- `plugins` - Plugin development
- `security` - Security considerations
- `performance` - Performance optimization
- `accessibility` - a11y requirements

## ✅ Quality Standards

All WordPress development content follows:
- [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/)
- [WordPress Accessibility Guidelines](https://developer.wordpress.org/coding-standards/accessibility/)
- [Plugin Review Guidelines](https://developer.wordpress.org/plugins/wordpress-org/detailed-plugin-guidelines/)
- [Theme Review Guidelines](https://make.wordpress.org/themes/handbook/review/)

## 🆕 What's New

- **2025-09-24**: Consolidated WordPress development docs
- Unified coding standards from multiple sources
- Enhanced Gutenberg development guidance
- Cross-referenced with AI Copilot tools

## 🔄 Contributing

When adding WordPress development content:

1. **Check existing content** - avoid duplication
2. **Follow WordPress standards** - align with official documentation
3. **Include examples** - practical code samples
4. **Add cross-references** - link to related sections
5. **Test code** - verify all examples work
6. **Update navigation** - add to relevant README files

## 📚 External Resources

- [WordPress Developer Handbook](https://developer.wordpress.org/)
- [WordPress Coding Standards](https://github.com/WordPress/WordPress-Coding-Standards)
- [Gutenberg Handbook](https://developer.wordpress.org/block-editor/)
- [Plugin Developer Handbook](https://developer.wordpress.org/plugins/)
- [Theme Developer Handbook](https://developer.wordpress.org/themes/)

---

*Need help? Check our [support guidelines](../README.md#-getting-help) or open an issue.*
