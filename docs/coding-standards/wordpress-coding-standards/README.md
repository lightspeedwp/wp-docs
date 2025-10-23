# WordPress Coding Standards

Official WordPress coding standards covering all aspects of development within the WordPress ecosystem. These standards are mandatory for WordPress Core and strongly recommended for themes and plugins.

## Files

- **[PHP Coding Standards](php.md)** - Comprehensive PHP coding standards for WordPress development
- **[HTML Coding Standards](html.md)** - HTML structure, semantics, and accessibility guidelines
- **[CSS Coding Standards](css.md)** - CSS writing conventions and organization practices
- **[JavaScript Coding Standards](javascript.md)** - JavaScript development standards and best practices
- **[Accessibility Standards](accessibility.md)** - WCAG compliance and accessibility requirements

## Overview

These coding standards are not just about code style, but encompass established best practices regarding interoperability, translatability, and security in the WordPress ecosystem. While themes and plugins may choose different coding styles, these standards represent critical best practices that should be followed regardless of style preferences.

## Core Principles

### Security First

- Sanitization of all input data
- Escaping of all output data
- Proper use of nonces for form security
- SQL injection prevention
- XSS attack mitigation

### Accessibility

- WCAG 2.2 Level AA compliance baseline
- Semantic HTML structure
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility

### Performance

- Efficient database queries
- Optimized asset loading
- Minimal HTTP requests
- Proper caching strategies
- Mobile-first responsive design

### Internationalization

- Translatable strings using WordPress i18n functions
- Proper text domain usage
- RTL language support
- Cultural sensitivity in design

### Interoperability

- WordPress coding patterns and conventions
- Hook and filter usage
- Plugin/theme compatibility
- Core WordPress function usage

## Implementation

While not all existing code may fully comply with these standards, **all newly committed and/or updated code should fully comply** with these coding standards. This ensures progressive improvement of code quality across the WordPress ecosystem.

## Related Resources

- See [Inline Documentation Standards](../inline-documentation-standards/) for code commenting guidelines
- Review [LightSpeed Coding Standards](../ash-research/) for enhanced standards building on these foundations
- Check WordPress Developer Handbook for additional implementation guidance

These standards form the foundation for secure, accessible, and maintainable WordPress development.
