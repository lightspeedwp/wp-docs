---
description: 'Generate WordPress-compliant inline documentation for PHP functions, classes, methods, and JavaScript components following official coding standards'
mode: 'ask'
model: 'gpt-4o'
license: 'GPL-3.0'
stability: 'stable'
tags: ['wp-core', 'documentation', 'php', 'javascript', 'docblocks']
domain: 'wp-core'
tools: ['read_file', 'replace_string_in_file']
---

# Generate WordPress Inline Documentation

Generate comprehensive inline documentation following WordPress coding standards for PHP and JavaScript code.

## What This Prompt Does

- Analyzes existing code structure and functionality
- Generates WordPress-compliant DocBlocks and JSDoc comments
- Follows official WordPress documentation standards
- Includes proper parameter types, return values, and descriptions
- Adds @since tags and other required WordPress documentation elements

## Usage

Provide the code you want documented, or ask me to analyze existing files and generate documentation for specific functions, classes, or methods.

## Documentation Standards Applied

### PHP Documentation
- Standard DocBlock format with summary and description
- Proper @param annotations with types and descriptions
- @return annotations with type information
- @since version tags
- WordPress-specific tags (@see, @link, @todo, @deprecated)
- Hook documentation for actions and filters
- Security and performance notes where relevant

### JavaScript Documentation
- JSDoc format for functions and classes
- Parameter documentation with type information
- Return value documentation
- Block editor component documentation
- Event handler documentation

### WordPress-Specific Requirements
- Follows WordPress Core Handbook standards
- Includes accessibility considerations
- Documents internationalization (i18n) usage
- Security implications for user input handling
- Performance considerations for database queries

## Example Output

For a PHP function:
```php
/**
 * Retrieves user preferences with caching.
 *
 * Fetches user preference data from the database with built-in caching
 * to improve performance. Cache is invalidated when preferences are updated.
 *
 * @since 1.0.0
 *
 * @param int    $user_id User ID to retrieve preferences for.
 * @param string $key     Optional. Specific preference key. Default empty.
 * @param mixed  $default Optional. Default value if preference not found. Default null.
 *
 * @return mixed User preference value or array of all preferences.
 */
```

## Instructions

When generating documentation:

1. **Analyze the code** to understand its purpose and behavior
2. **Write clear summaries** that explain what the function does
3. **Document all parameters** with accurate types and descriptions
4. **Include return value information** with possible types
5. **Add WordPress-specific tags** like @since, @see, @link as appropriate
6. **Note security implications** for functions handling user input
7. **Include performance considerations** for database or API operations
8. **Follow WordPress naming conventions** and terminology

Ask me to document specific code, functions, classes, or entire files, and I'll generate appropriate WordPress-compliant inline documentation.

