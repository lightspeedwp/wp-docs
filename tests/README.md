# Test Suite

This directory contains comprehensive unit tests for the wp-docs repository.

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test Structure

### Documentation Tests (`tests/docs/`)

Tests for documentation files to ensure:
- Valid JSON examples in code blocks
- Correct CSS syntax (especially `clamp()` functions)
- Accurate mathematical calculations in tables
- Valid markdown formatting
- Proper link references
- Complete and consistent content

#### fluid-spacing.test.js

Comprehensive validation suite for `docs/block-themes/fluid-spacing.md`:

**What it tests:**
- ✅ JSON code blocks are valid and parseable
- ✅ `clamp()` CSS syntax is correct (3 comma-separated values)
- ✅ Mathematical calculations in viewport width tables are accurate
- ✅ Markdown tables are properly formatted
- ✅ Reference links are valid
- ✅ Document structure is consistent
- ✅ All required sections are present
- ✅ Mobile-first strategy content is comprehensive

**Test Coverage:**
- File existence and readability
- JSON validation (theme.json examples)
- CSS clamp() syntax validation
- VW calculation accuracy (320px, 375px, 480px viewports)
- Markdown table formatting
- Reference links integrity
- Documentation structure and quality
- Mobile-first strategy completeness
- Code examples completeness
- Technical accuracy of configuration examples

## Adding New Tests

When adding documentation:
1. Create a corresponding test file in `tests/docs/`
2. Follow the pattern established in existing tests
3. Validate:
   - Code examples (JSON, CSS, JS, PHP)
   - Mathematical calculations
   - Link integrity
   - Markdown structure
   - Content completeness

## Test Philosophy

These tests follow a "bias for action" approach:
- Tests validate real content, not just structure
- Mathematical calculations are verified programmatically
- All code examples must be syntactically valid
- Links and references must resolve correctly
- Documentation must be comprehensive and clear

## CI/CD Integration

These tests can be integrated into GitHub Actions workflows:

```yaml
- name: Run tests
  run: npm test
  
- name: Generate coverage
  run: npm run test:coverage
```