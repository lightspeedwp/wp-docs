# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - DD-MM-YYYY

<!--
Guidelines:
- One entry per change; use simple past tense.
- Group by sections above.
- Link issues/PRs where useful.
-->

### Added

### Changed

- Removed build step from required scripts and pre-commit checklist (no build process required for this repo).
- Resolved Jest configuration conflict (removed duplicate config file).

### Deprecated

### Documentation

- Fixed markdownlint errors and improved accessibility (image alt text, code block style, ordered list prefixes).
- Added and clarified language usage guidance (UK English vs. code standards) in `AGENTS.md`.
- Updated documentation for clarity, maintainability, and compliance with WordPress and LightSpeed standards.

### Fixed

### Performance

### Removed

### Security

-->

## [0.1.0] - 2025-09-25

### Added

- Initial release of LightSpeed WordPress organization community health files
- GitHub Copilot custom instructions and organization-wide guidelines
- Comprehensive instruction files for WordPress development:
  - `coding-standards.instructions.md` - WordPress coding standards for PHP, JS, CSS
  - `html-template.instructions.md` - Block template and template part guidelines
  - `pattern-development.instructions.md` - Block pattern creation and advanced usage
  - `php-block.instructions.md` - PHP block development and theme setup
  - `playwright-tests.instructions.md` - Browser automation and accessibility testing
  - `theme-json.instructions.md` - Theme.json configuration and design tokens
- AI prompt templates for:
  - `accessibility-review.prompt.md` - Accessibility compliance review
  - `dev-code-review.prompt.md` - Code review and standards verification
  - `pattern-generation.prompt.md` - Block pattern generation assistance
  - `refactor-theme-types.prompt.md` - WordPress theme refactoring guidance
- Issue templates for comprehensive project management:
  - Bug reports, feature requests, documentation requests
  - Performance issues, UX feedback, integration issues
  - Code refactoring, task management, custom instructions proposals
- Pull request templates with WordPress-specific checklists
- VS Code configuration optimized for WordPress development:
  - MCP (Model Context Protocol) auto-start configuration
  - WordPress-specific extensions and settings
  - GitHub Copilot integration with custom instructions
  - Proper file associations for instruction and prompt files
- Example WordPress block structure following best practices
- Comprehensive documentation and README files
- GitHub Actions workflows for issue metrics and labeling
- Saved replies for common support scenarios
- Organization profile README showcasing LightSpeed projects

### Deprecated

- [placeholder]

### Fixed

- Standardized YAML frontmatter across all instruction files
- Corrected indentation and formatting inconsistencies
- Aligned VS Code settings with repository structure
- Removed non-standard configuration keys for better compatibility

### Changed

- Updated author attribution to "LightSpeedWP Team" for consistency
- Standardized related_links format as simple URL lists
- Enhanced MCP configuration for WordPress development context
- Improved file associations and discovery paths for AI tools

### Documentation

- Added comprehensive README files for instructions and prompts
- Created implementation guide for WordPress block development
- Established clear contribution guidelines and coding standards
- Documented VS Code configuration and MCP setup procedures

### Performance

- [placeholder]

### Removed

- [placeholder]

### Security

- Implemented proper input sanitization and output escaping in examples
- Added security guidelines in coding standards
- Established secure development practices in instruction files

## Reference

- [Branching Strategy](.github/BRANCHING_STRATEGY.md): Org-wide branch naming, merge discipline, and automation mapping.
- [CHANGELOG.md](./CHANGELOG.md): Changelog format, release notes, and versioning.
- [CONTRIBUTING.md](./CONTRIBUTING.md): Contribution guidelines, templates, coding standards.
- [AUTOMATION_GOVERNANCE.md](.github/AUTOMATION_GOVERNANCE.md): Org-wide automation, branching, labeling, and release strategy.
- [Org-wide Issue Labels](.github/ISSUE_LABELS.md): Default labels and usage guidance.
- [Pull Request Labels](.github/PR_LABELS.md): PR classification and automation standards.
- [Issue Types Guide](.github/ISSUE_TYPES.md): Classification and usage of issue types.
