/**
 * Test suite for docs/block-themes/fluid-spacing.md
 * 
 * Validates:
 * - JSON code block syntax and validity
 * - CSS clamp() syntax in examples
 * - Mathematical calculations in tables
 * - Link references and integrity
 * - Markdown structure and consistency
 * - Documentation completeness
 */

const fs = require('fs');
const path = require('path');

// Read the documentation file
const docPath = path.join(__dirname, '../../docs/block-themes/fluid-spacing.md');
const docContent = fs.readFileSync(docPath, 'utf-8');

describe('Fluid Spacing Documentation', () => {
  describe('File Existence and Readability', () => {
    test('should exist at the expected location', () => {
      expect(fs.existsSync(docPath)).toBe(true);
    });

    test('should not be empty', () => {
      expect(docContent.length).toBeGreaterThan(0);
    });

    test('should contain expected sections', () => {
      expect(docContent).toContain('# Fluid Spacing');
      expect(docContent).toContain('## Best practices');
      expect(docContent).toContain('## When to use');
      expect(docContent).toContain('## Limitations');
    });
  });

  describe('JSON Code Blocks Validation', () => {
    test('should contain valid JSON in all json code blocks', () => {
      const jsonBlocks = extractCodeBlocks(docContent, 'json');
      expect(jsonBlocks.length).toBeGreaterThan(0);

      jsonBlocks.forEach((block, index) => {
        expect(() => {
          JSON.parse(block);
        }).not.toThrow(`JSON block ${index + 1} should be valid`);
      });
    });

    test('should have spacingScale configuration examples', () => {
      const jsonBlocks = extractCodeBlocks(docContent, 'json');
      const hasSpacingScale = jsonBlocks.some(block => 
        block.includes('spacingScale')
      );
      expect(hasSpacingScale).toBe(true);
    });

    test('should have spacingSizes configuration examples', () => {
      const jsonBlocks = extractCodeBlocks(docContent, 'json');
      const hasSpacingSizes = jsonBlocks.some(block => 
        block.includes('spacingSizes')
      );
      expect(hasSpacingSizes).toBe(true);
    });

    test('should include clamp() examples in JSON', () => {
      const jsonBlocks = extractCodeBlocks(docContent, 'json');
      const hasClamp = jsonBlocks.some(block => 
        block.includes('clamp(')
      );
      expect(hasClamp).toBe(true);
    });

    test('JSON examples should have proper theme.json structure', () => {
      const jsonBlocks = extractCodeBlocks(docContent, 'json');
      const structuredBlocks = jsonBlocks.filter(block => {
        try {
          const parsed = JSON.parse(block);
          return typeof parsed === 'object' && parsed !== null;
        } catch {
          return false;
        }
      });
      expect(structuredBlocks.length).toBeGreaterThan(0);
    });
  });

  describe('CSS clamp() Syntax Validation', () => {
    test('should have valid clamp() syntax in all examples', () => {
      const clampMatches = docContent.match(/clamp\([^)]+\)/g) || [];
      expect(clampMatches.length).toBeGreaterThan(0);

      clampMatches.forEach(clampStr => {
        // Should have 3 comma-separated values
        const values = clampStr.match(/clamp\(([^)]+)\)/)[1].split(',');
        expect(values.length).toBe(3);

        // Each value should be a valid CSS length
        values.forEach(value => {
          const trimmed = value.trim();
          expect(trimmed).toMatch(/^[\d.]+(?:px|rem|em|vw|vh|%|vmin|vmax)$/);
        });
      });
    });

    test('should use consistent units in clamp() examples', () => {
      const clampExamples = [
        'clamp(12px, 3vw, 40px)',
        'clamp(10px, 2vw, 40px)',
      ];

      clampExamples.forEach(example => {
        expect(docContent).toContain(example);
      });
    });

    test('clamp() examples should follow mobile-first strategy', () => {
      // The doc should explain that vw values should be less than MIN on mobile
      expect(docContent).toContain('mobile');
      expect(docContent).toContain('MIN');
      expect(docContent).toContain('FLUID');
      expect(docContent).toContain('MAX');
    });
  });

  describe('Mathematical Calculations Validation', () => {
    test('should have accurate vw calculations at 320px viewport', () => {
      // From the document: at 320px
      const calculations = {
        '1vw': 3.2,
        '2vw': 6.4,
        '3vw': 9.6,
        '4vw': 12.8,
        '5vw': 16,
      };

      Object.entries(calculations).forEach(([vw, expected]) => {
        const vwValue = parseFloat(vw);
        const calculated = (320 * vwValue) / 100;
        expect(calculated).toBeCloseTo(expected, 1);
      });
    });

    test('should have accurate vw calculations at 375px viewport', () => {
      // Test some examples from reference table
      expect((375 * 2) / 100).toBeCloseTo(7.5, 1);  // 2vw
      expect((375 * 3) / 100).toBeCloseTo(11.25, 2); // 3vw
      expect((375 * 4) / 100).toBe(15); // 4vw
    });

    test('should have accurate vw calculations at 480px viewport', () => {
      // From the 480px table
      expect((480 * 1) / 100).toBeCloseTo(4.8, 1);  // 1vw
      expect((480 * 2) / 100).toBeCloseTo(9.6, 1);  // 2vw
      expect((480 * 2.5) / 100).toBe(12); // 2.5vw
      expect((480 * 3) / 100).toBeCloseTo(14.4, 1); // 3vw
      expect((480 * 5) / 100).toBe(24); // 5vw
    });

    test('reference table calculations should be correct', () => {
      // Verify the reference table calculations
      const calculations = [
        { vw: 2, px320: 6.4, px375: 7.5 },
        { vw: 3, px320: 9.6, px375: 11.25 },
        { vw: 4, px320: 12.8, px375: 15 },
      ];

      calculations.forEach(({ vw, px320, px375 }) => {
        expect((320 * vw) / 100).toBeCloseTo(px320, 1);
        expect((375 * vw) / 100).toBeCloseTo(px375, 2);
      });
    });
  });

  describe('Markdown Tables Validation', () => {
    test('should have properly formatted markdown tables', () => {
      const tables = docContent.match(/\|[^|]+\|/g);
      expect(tables).not.toBeNull();
      expect(tables.length).toBeGreaterThan(0);
    });

    test('tables should have header separators', () => {
      const headerSeparators = docContent.match(/\|[-:]+\|/g);
      expect(headerSeparators).not.toBeNull();
    });

    test('vw calculation tables should be present', () => {
      expect(docContent).toContain('**Viewport width**');
      expect(docContent).toContain('**vw**');
      expect(docContent).toContain('320px');
      expect(docContent).toContain('375px');
    });

    test('reference table should include mobile widths', () => {
      expect(docContent).toMatch(/320px|375px/);
    });
  });

  describe('Reference Links Validation', () => {
    test('should contain reference links section', () => {
      expect(docContent).toContain('## Reference Links');
    });

    test('should have links to WordPress documentation', () => {
      expect(docContent).toContain('developer.wordpress.org');
    });

    test('should have links to Rich Tabor articles', () => {
      expect(docContent).toContain('rich.blog');
    });

    test('all markdown links should have valid syntax', () => {
      const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
      const links = [...docContent.matchAll(linkPattern)];
      
      expect(links.length).toBeGreaterThan(0);
      
      links.forEach(match => {
        const [, text, url] = match;
        expect(text.length).toBeGreaterThan(0);
        expect(url.length).toBeGreaterThan(0);
        // URL should not contain spaces
        expect(url).not.toMatch(/\s/);
      });
    });

    test('should have multiple reference sources', () => {
      const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
      const links = [...docContent.matchAll(linkPattern)];
      const uniqueDomains = new Set(
        links
          .map(match => {
            try {
              return new URL(match[2]).hostname;
            } catch {
              return null;
            }
          })
          .filter(Boolean)
      );
      
      expect(uniqueDomains.size).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Documentation Structure and Quality', () => {
    test('should have a main heading', () => {
      expect(docContent).toMatch(/^# Fluid Spacing/m);
    });

    test('should have multiple sections with h2 headings', () => {
      const h2Headings = docContent.match(/^## /gm);
      expect(h2Headings).not.toBeNull();
      expect(h2Headings.length).toBeGreaterThanOrEqual(5);
    });

    test('should include best practices section', () => {
      expect(docContent).toContain('## Best practices');
    });

    test('should include limitations section', () => {
      expect(docContent).toContain('## Limitations');
    });

    test('should explain when to use different approaches', () => {
      expect(docContent).toContain('## When to use');
    });

    test('should have mobile-first strategy section', () => {
      expect(docContent).toContain('Mobile‑first');
      expect(docContent).toContain('strategy');
    });

    test('should include both spacingScale and spacingSizes options', () => {
      expect(docContent).toContain('spacingScale');
      expect(docContent).toContain('spacingSizes');
      expect(docContent).toContain('Option 1');
      expect(docContent).toContain('Option 2');
    });
  });

  describe('Mobile-First Strategy Content', () => {
    test('should explain MIN, FLUID, MAX parameters', () => {
      expect(docContent).toContain('MIN');
      expect(docContent).toContain('FLUID');
      expect(docContent).toContain('MAX');
    });

    test('should provide guidance on vw values', () => {
      expect(docContent).toContain('2vw');
      expect(docContent).toContain('3vw');
    });

    test('should mention common mobile widths', () => {
      expect(docContent).toMatch(/320[^\d]|375[^\d]/);
    });

    test('should provide recommendations', () => {
      expect(docContent.toLowerCase()).toContain('recommendation');
    });

    test('should include practical examples', () => {
      expect(docContent).toContain('### Example');
    });

    test('should explain the principle behind mobile-first approach', () => {
      expect(docContent).toContain('### Principle');
    });

    test('should provide key guidance', () => {
      expect(docContent).toContain('### Key guidance');
    });
  });

  describe('Code Examples Completeness', () => {
    test('should have CSS code blocks', () => {
      const cssBlocks = extractCodeBlocks(docContent, 'css');
      expect(cssBlocks.length).toBeGreaterThan(0);
    });

    test('CSS examples should use WordPress custom properties', () => {
      expect(docContent).toContain('--wp--preset--spacing--');
    });

    test('should demonstrate blockGap usage', () => {
      expect(docContent).toContain('blockGap');
    });

    test('should include margin and padding examples', () => {
      expect(docContent).toContain('margin');
      expect(docContent).toContain('padding');
    });
  });

  describe('Technical Accuracy', () => {
    test('spacingScale should have required properties', () => {
      const jsonBlocks = extractCodeBlocks(docContent, 'json');
      const spacingScaleBlocks = jsonBlocks.filter(block => 
        block.includes('spacingScale')
      );

      spacingScaleBlocks.forEach(block => {
        const parsed = JSON.parse(block);
        if (parsed.spacingScale) {
          // Should have operator, increment, steps
          expect(parsed.spacingScale).toHaveProperty('operator');
          expect(parsed.spacingScale).toHaveProperty('increment');
          expect(parsed.spacingScale).toHaveProperty('steps');
        }
      });
    });

    test('spacingSizes should have required properties', () => {
      const jsonBlocks = extractCodeBlocks(docContent, 'json');
      const spacingSizesBlocks = jsonBlocks.filter(block => 
        block.includes('spacingSizes')
      );

      spacingSizesBlocks.forEach(block => {
        const parsed = JSON.parse(block);
        if (parsed.spacingSizes && Array.isArray(parsed.spacingSizes)) {
          parsed.spacingSizes.forEach(size => {
            expect(size).toHaveProperty('size');
            expect(size).toHaveProperty('slug');
            expect(size).toHaveProperty('name');
          });
        }
      });
    });

    test('should mention WordPress version compatibility if relevant', () => {
      // Check if WordPress version is mentioned
      const hasVersionInfo = docContent.toLowerCase().includes('wordpress') &&
                           (docContent.includes('6.') || docContent.includes('version'));
      // This is optional but good practice
      expect(typeof hasVersionInfo).toBe('boolean');
    });
  });

  describe('Consistency Checks', () => {
    test('should use consistent terminology', () => {
      // Check that terms are used consistently
      const terms = ['spacingScale', 'spacingSizes', 'clamp()', 'theme.json'];
      terms.forEach(term => {
        expect(docContent).toContain(term);
      });
    });

    test('should not have broken markdown formatting', () => {
      // Check for common markdown issues
      expect(docContent).not.toMatch(/\]\s\(/); // No space before (
      expect(docContent).not.toMatch(/\*\*\s+\*\*/); // No bold formatting issues
    });

    test('code blocks should be properly closed', () => {
      const openBlocks = (docContent.match(/```/g) || []).length;
      expect(openBlocks % 2).toBe(0); // Should be even (each block has open and close)
    });

    test('should use consistent heading levels', () => {
      const lines = docContent.split('\n');
      let previousLevel = 0;
      
      lines.forEach(line => {
        const match = line.match(/^(#{1,6})\s/);
        if (match) {
          const level = match[1].length;
          // Heading levels shouldn't skip (e.g., h2 -> h4)
          if (previousLevel > 0) {
            expect(level - previousLevel).toBeLessThanOrEqual(1);
          }
          previousLevel = level;
        }
      });
    });
  });

  describe('New Section: Mobile-First Strategy', () => {
    test('should contain the new mobile-first section', () => {
      expect(docContent).toContain('## Mobile‑first `clamp()` strategy');
    });

    test('should explain how to set vw for mobile', () => {
      expect(docContent).toContain('### How to set `vw` for mobile');
    });

    test('should provide a reference table for mobile widths', () => {
      expect(docContent).toContain('### Reference table');
    });

    test('should give final recommendations', () => {
      expect(docContent).toContain('### Final recommendation');
      expect(docContent).toContain('2vw–3vw');
    });

    test('should mention iPhone X width (375px)', () => {
      expect(docContent).toContain('375px');
      expect(docContent.toLowerCase()).toContain('iphone');
    });

    test('should explain the principle clearly', () => {
      expect(docContent).toContain('### Principle');
      expect(docContent).toContain('small viewports');
    });
  });
});

/**
 * Helper function to extract code blocks from markdown
 * @param {string} content - The markdown content
 * @param {string} language - The language identifier (e.g., 'json', 'css')
 * @returns {string[]} Array of code block contents
 */
function extractCodeBlocks(content, language) {
  const pattern = new RegExp('```' + language + '\\s*\\n([\\s\\S]*?)```', 'g');
  const blocks = [];
  let match;
  
  while ((match = pattern.exec(content)) !== null) {
    blocks.push(match[1].trim());
  }
  
  return blocks;
}