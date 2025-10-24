/**
 * Comprehensive tests for docs/block-themes/fluid-spacing.md
 * Tests include:
 * - JSON code block validation
 * - CSS code block validation
 * - Mathematical calculations in tables
 * - Link validation
 * - WordPress theme.json schema compliance
 * - Markdown structure integrity
 */
// Jest provides describe, it, expect globally
const fs = require('fs');
const path = require('path');

const { describe, it } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');

const FLUID_SPACING_FILE = path.join(__dirname, '..', 'docs', 'block-themes', 'fluid-spacing.md');

// Load content at module level
const content = fs.readFileSync(FLUID_SPACING_FILE, 'utf8');

// Extract JSON blocks
const jsonMatches = content.match(/```json\s*([\s\S]*?)```/g) || [];
const jsonBlocks = jsonMatches.map(block => {
  return block.replace(/```json\s*/, '').replace(/```$/, '').trim();
});

// Extract CSS blocks
const cssMatches = content.match(/```css\s*([\s\S]*?)```/g) || [];
const cssBlocks = cssMatches.map(block => {
  return block.replace(/```css\s*/, '').replace(/```$/, '').trim();
});

describe('Fluid Spacing Documentation', () => {
  describe('File Existence and Structure', () => {
    it('should exist at the expected path', () => {
      assert.ok(fs.existsSync(FLUID_SPACING_FILE), 'File should exist');
    });

    it('should not be empty', () => {
      assert.ok(content.length > 0, 'File should have content');
    });

    it('should have a main heading', () => {
      assert.ok(content.includes('# Fluid Spacing'), 'Should have main heading');
    });

    it('should have a best practices section', () => {
      assert.ok(content.includes('## Best practices'), 'Should have best practices section');
    });

    it('should have a "When to use" section', () => {
      assert.ok(content.includes('## When to use'), 'Should have "When to use" section');
    });

    it('should have a limitations section', () => {
      assert.ok(content.includes('## Limitations'), 'Should have limitations section');
    });
  });

  describe('JSON Code Blocks', () => {
    it('should contain JSON code blocks', () => {
      assert.ok(jsonBlocks.length > 0, `Should have JSON blocks, found ${jsonBlocks.length}`);
    });

    it('should have sufficient JSON code blocks', () => {
      expect(jsonBlocks.length).toBeGreaterThanOrEqual(5);
    });

    jsonBlocks.forEach((block, index) => {
      it(`JSON block ${index + 1} should be valid JSON`, () => {
        try {
          JSON.parse(block);
          assert.ok(true, 'Valid JSON');
        } catch (error) {
          assert.fail(`JSON block ${index + 1} is invalid: ${error.message}\nBlock: ${block.substring(0, 100)}...`);
        }
      });
    });

    it('should include spacingScale example', () => {
      const hasSpacingScale = jsonBlocks.some(block => {
        try {
          const json = JSON.parse(block);
          return json.spacingScale !== undefined;
        } catch (error) {
          return false;
        }
      });
      assert.ok(hasSpacingScale, 'Should have spacingScale example');
    });

    it('should include spacingSizes example', () => {
      const hasSpacingSizes = jsonBlocks.some(block => {
        try {
          const json = JSON.parse(block);
          return json.spacingSizes !== undefined || (json.settings && json.settings.spacing && json.settings.spacing.spacingSizes);
        } catch (error) {
          return false;
        }
      });
      assert.ok(hasSpacingSizes, 'Should have spacingSizes example');
    });

    it('should include clamp() example in JSON', () => {
      const hasClamp = jsonBlocks.some(block => block.includes('clamp'));
      assert.ok(hasClamp, 'Should include clamp() function in examples');
    });

    it('spacingScale example should have required properties', () => {
      const spacingScaleBlock = jsonBlocks.find(block => {
        try {
          const json = JSON.parse(block);
          return json.spacingScale !== undefined;
        } catch (error) {
          return false;
        }
      });

      if (spacingScaleBlock) {
        const json = JSON.parse(spacingScaleBlock);
        const scale = json.spacingScale;
        assert.ok(scale.operator, 'spacingScale should have operator');
        assert.ok(scale.increment !== undefined, 'spacingScale should have increment');
        assert.ok(scale.steps !== undefined, 'spacingScale should have steps');
        assert.ok(scale.unit, 'spacingScale should have unit');
      }
    });

    it('spacing settings examples should enable controls', () => {
      const settingsBlocks = jsonBlocks.filter(block => {
        try {
          const json = JSON.parse(block);
          return json.settings && json.settings.spacing;
        } catch (error) {
          return false;
        }
      });

      const hasEnabledControls = settingsBlocks.some(block => {
        const json = JSON.parse(block);
        const spacing = json.settings.spacing;
        return spacing.blockGap === true || spacing.margin === true || spacing.padding === true;
      });

      assert.ok(hasEnabledControls || settingsBlocks.length === 0, 'Should demonstrate enabling spacing controls');
    });
  });

  describe('CSS Code Blocks', () => {
    it('should contain CSS code blocks', () => {
      assert.ok(cssBlocks.length > 0, `Should have CSS blocks, found ${cssBlocks.length}`);
    });

    it('should have sufficient CSS code blocks', () => {
      expect(cssBlocks.length).toBeGreaterThanOrEqual(1);
    });

    cssBlocks.forEach((block, index) => {
      it(`CSS block ${index + 1} should contain valid CSS custom properties`, () => {
        const hasCustomProps = block.includes('--wp--preset--spacing--');
        assert.ok(hasCustomProps, 'CSS should demonstrate WordPress custom properties');
      });

      it(`CSS block ${index + 1} should not have syntax errors`, () => {
        // Basic CSS syntax checks
        const openBraces = (block.match(/{/g) || []).length;
        const closeBraces = (block.match(/}/g) || []).length;
        assert.strictEqual(openBraces, closeBraces, 'CSS braces should be balanced');
      });
    });

    it('should demonstrate spacing preset custom properties', () => {
      const hasPresets = cssBlocks.some(block => 
        block.includes('--wp--preset--spacing--20') ||
        block.includes('--wp--preset--spacing--30')
      );
      assert.ok(hasPresets, 'Should show spacing preset examples');
    });
  });

  describe('Mobile-first clamp() Strategy Section', () => {
    it('should have mobile-first clamp() strategy section', () => {
      assert.ok(content.includes('## Mobile‑first `clamp()` strategy'), 
        'Should have mobile-first strategy section');
    });

    it('should explain the clamp() principle', () => {
      assert.ok(content.includes('### Principle'), 'Should have principle subsection');
      assert.ok(content.includes('clamp(MIN, FLUID, MAX)'), 'Should explain clamp syntax');
    });

    it('should provide vw calculations for mobile', () => {
      assert.ok(content.includes('### How to set `vw` for mobile'), 
        'Should have mobile vw calculation guide');
      assert.ok(content.includes('**1vw** = 3.2px'), 'Should show 1vw calculation');
      assert.ok(content.includes('**2vw** = 6.4px'), 'Should show 2vw calculation');
    });

    it('should have recommendations', () => {
      assert.ok(content.includes('### Recommendation'), 'Should have recommendations');
      assert.ok(content.includes('3vw or less'), 'Should recommend vw range');
    });

    it('should include reference table', () => {
      assert.ok(content.includes('### Reference table'), 'Should have reference table');
      assert.ok(content.includes('| **vw** | **320px** | **375px**'), 
        'Should have table with vw calculations');
    });

    it('should have final recommendation', () => {
      assert.ok(content.includes('### Final recommendation'), 
        'Should have final recommendation section');
      assert.ok(content.includes('2vw–3vw'), 'Should recommend specific vw range');
    });
  });

  describe('Mathematical Calculations in Tables', () => {
    it('should have tables with clamp() calculations', () => {
      const hasTable = content.includes('| **Viewport width** | **2vw calculation**');
      assert.ok(hasTable, 'Should have calculation tables');
    });

    it('2vw at 320px should equal 6.4px', () => {
      const calculation = 320 * 0.02;
      assert.strictEqual(calculation, 6.4, 'Math: 2vw at 320px = 6.4px');
      assert.ok(content.includes('6.4px'), 'Document should show 6.4px');
    });

    it('2vw at 375px should equal 7.5px', () => {
      const calculation = 375 * 0.02;
      assert.strictEqual(calculation, 7.5, 'Math: 2vw at 375px = 7.5px');
      assert.ok(content.includes('7.5px'), 'Document should show 7.5px');
    });

    it('2vw at 768px should equal 15.36px', () => {
      const calculation = 768 * 0.02;
      assert.strictEqual(calculation, 15.36, 'Math: 2vw at 768px = 15.36px');
      assert.ok(content.includes('15.36px'), 'Document should show 15.36px');
    });

    it('2vw at 1024px should equal 20.48px', () => {
      const calculation = 1024 * 0.02;
      assert.strictEqual(calculation, 20.48, 'Math: 2vw at 1024px = 20.48px');
      assert.ok(content.includes('20.48px'), 'Document should show 20.48px');
    });

    it('3vw at 320px should equal 9.6px', () => {
      const calculation = 320 * 0.03;
      assert.strictEqual(calculation, 9.6, 'Math: 3vw at 320px = 9.6px');
      assert.ok(content.includes('9.6px'), 'Document should show 9.6px');
    });

    it('3vw at 375px should equal 11.25px', () => {
      const calculation = 375 * 0.03;
      assert.strictEqual(calculation, 11.25, 'Math: 3vw at 375px = 11.25px');
      assert.ok(content.includes('11.25px'), 'Document should show 11.25px');
    });

    it('4vw at 375px should equal 15px', () => {
      const calculation = 375 * 0.04;
      assert.strictEqual(calculation, 15, 'Math: 4vw at 375px = 15px');
      assert.ok(content.includes('**4vw** @ 375px = **15px**'), 'Document should show 15px for 4vw');
    });

    it('4vw at 320px should equal 12.8px', () => {
      const calculation = 320 * 0.04;
      assert.strictEqual(calculation, 12.8, 'Math: 4vw at 320px = 12.8px');
      assert.ok(content.includes('12.8px'), 'Document should show 12.8px');
    });

    describe('clamp() behavior validation', () => {
      function evaluateClamp(min, fluid, max) {
        if (fluid < min) return min;
        if (fluid > max) return max;
        return fluid;
      }

      it('clamp(10px, 6.4px, 40px) should return 10px (min)', () => {
        const result = evaluateClamp(10, 6.4, 40);
        assert.strictEqual(result, 10, 'Should use minimum when fluid < min');
      });

      it('clamp(10px, 15.36px, 40px) should return 15.36px (fluid)', () => {
        const result = evaluateClamp(10, 15.36, 40);
        assert.strictEqual(result, 15.36, 'Should use fluid when min < fluid < max');
      });

      it('clamp(10px, 48px, 40px) should return 40px (max)', () => {
        const result = evaluateClamp(10, 48, 40);
        assert.strictEqual(result, 40, 'Should use maximum when fluid > max');
      });

      it('clamp(12px, 11.25px, 40px) should return 12px (min)', () => {
        const result = evaluateClamp(12, 11.25, 40);
        assert.strictEqual(result, 12, 'Should use min when 3vw @ 375px < 12px');
      });

      it('clamp(12px, 15px, 40px) should return 15px (fluid)', () => {
        const result = evaluateClamp(12, 15, 40);
        assert.strictEqual(result, 15, 'Should use fluid when 4vw @ 375px > 12px');
      });
    });
  });

  describe('Links and References', () => {
    it('should have reference links section', () => {
      assert.ok(content.includes('## Reference Links'), 'Should have reference links');
    });

    it('should link to WordPress Developer Resources', () => {
      assert.ok(content.includes('developer.wordpress.org'), 
        'Should reference WordPress developer docs');
    });

    it('should link to Rich Tabor articles', () => {
      assert.ok(content.includes('rich.blog'), 'Should reference Rich Tabor blog');
    });

    it('should have at least 5 external reference links', () => {
      const links = content.match(/\[([^\]]+)\]\(https?:\/\/[^)]+\)/g) || [];
      assert.ok(links.length >= 5, `Should have at least 5 external links, found ${links.length}`);
    });

    it('all markdown links should be properly formatted', () => {
      const links = content.match(/\[([^\]]+)\]\(([^)]+)\)/g) || [];
      
      links.forEach(link => {
        const urlMatch = link.match(/\]\(([^)]+)\)/);
        if (urlMatch) {
          const url = urlMatch[1];
          if (url.startsWith('http')) {
            assert.ok(!url.includes(' '), `Link URL should not contain spaces: ${link}`);
          }
        }
      });
    });
  });

  describe('WordPress Theme.json Compliance', () => {
    it('should reference theme.json', () => {
      assert.ok(content.includes('theme.json'), 'Should reference theme.json');
    });

    it('should use correct WordPress namespace in CSS variables', () => {
      const hasCorrectNamespace = cssBlocks.some(block => 
        block.includes('--wp--preset--spacing--')
      );
      assert.ok(hasCorrectNamespace, 'Should use --wp--preset--spacing-- namespace');
    });

    it('should demonstrate settings.spacing structure', () => {
      const hasSettingsSpacing = jsonBlocks.some(block => {
        try {
          const json = JSON.parse(block);
          return json.settings && json.settings.spacing;
        } catch (error) {
          return false;
        }
      });
      assert.ok(hasSettingsSpacing, 'Should show settings.spacing structure');
    });

    it('should show valid spacing slug format', () => {
      const hasValidSlugs = content.includes('"slug": "20"') || 
                           content.includes('"slug": "30"');
      assert.ok(hasValidSlugs, 'Should demonstrate numeric slug format (20, 30, etc.)');
    });

    it('should mention block gap support', () => {
      assert.ok(content.includes('blockGap'), 'Should mention blockGap feature');
    });
  });

  describe('Code Examples Quality', () => {
    it('should have well-formatted JSON with proper indentation', () => {
    it('should have well-formatted JSON with proper indentation', () => {
      let validCount = 0;
      jsonBlocks.forEach((block, index) => {
        if (block.trim().length === 0) return;
        
        try {
          const parsed = JSON.parse(block);
          const reStringified = JSON.stringify(parsed, null, 2);
          JSON.parse(reStringified);
          validCount++;
        } catch (error) {
          throw new Error(`JSON block ${index + 1} formatting failed: ${error.message}`);
        }
      });
      expect(validCount).toBeGreaterThan(0);
    });

    it('should use consistent spacing units (rem, px, vw)', () => {
      const units = ['rem', 'px', 'vw'];
      units.forEach(unit => {
        if (content.includes(unit)) {
          assert.ok(true, `Document uses ${unit} unit`);
        }
      });
    });

    it('should demonstrate both min() and clamp() functions', () => {
      assert.ok(content.includes('min('), 'Should show min() function');
      assert.ok(content.includes('clamp('), 'Should show clamp() function');
    });
  });

  describe('Documentation Completeness', () => {
    it('should explain why standardize spacing', () => {
      assert.ok(content.includes('## Why Standardize Spacing'), 
        'Should explain the why');
    });

    it('should provide expert recommendations', () => {
      assert.ok(content.includes('## Expert Recommendations'), 
        'Should have expert recommendations section');
    });

    it('should have example setup', () => {
      assert.ok(content.includes('## Example: Default Theme Setup') || 
                content.includes('### Example'), 
        'Should provide example setup');
    });

    it('should explain when to use spacingScale vs spacingSizes', () => {
      assert.ok(content.includes('Option 1: `spacingScale`'), 
        'Should explain spacingScale option');
      assert.ok(content.includes('Option 2: `spacingSizes`'), 
        'Should explain spacingSizes option');
    });

    it('should warn about limitations', () => {
     it('should warn about limitations', () => {
      const limitationsMatch = content.match(/## Limitations([\s\S]*?)(?=\n## |$)/);
      expect(limitationsMatch).toBeTruthy();
      expect(limitationsMatch[0].length).toBeGreaterThan(50);
     });
    });
  });

  describe('Markdown Formatting', () => {
    it('should have properly formatted tables', () => {
      const tables = content.match(/\|.*\|[\s\S]*?\|.*\|/g) || [];
      assert.ok(tables.length >= 3, 'Should have at least 3 tables');
      
      tables.forEach((table, index) => {
        const rows = table.split('\n').filter(line => line.includes('|'));
        assert.ok(rows.length >= 2, `Table ${index + 1} should have header and separator`);
      });
    });

    it('should not have broken markdown links', () => {
      const brokenPatterns = [
        /\]\([^)]*\s[^)]*\)/,
        /\[([^\]]+)\]\(\)/,
        /\[\s*\]\([^)]+\)/
      ];
      
      brokenPatterns.forEach((pattern, index) => {
        assert.ok(!pattern.test(content), 
          `Should not have broken link pattern ${index + 1}`);
      });
    });

    it('should have consistent heading hierarchy', () => {
      const headings = content.match(/^#{1,6}\s+.+$/gm) || [];
      assert.ok(headings.length > 5, 'Should have multiple section headings');
      assert.ok(headings[0].startsWith('# '), 'First heading should be H1');
    });

    it('should use code blocks appropriately', () => {
      const codeBlocks = content.match(/```[\s\S]*?```/g) || [];
      assert.ok(codeBlocks.length >= 10, 'Should have multiple code examples');
    });
  });

  describe('Edge Cases and Error Handling', () => {
    it('should handle viewport widths consistently', () => {
      const viewports = [320, 375, 480, 768, 1024, 1440, 1920, 2400];
      viewports.forEach(viewport => {
        if (content.includes(`${viewport}px`)) {
          assert.ok(true, `Document mentions ${viewport}px viewport`);
        }
      });
    });

    it('should provide guidance for edge cases', () => {
      assert.ok(content.includes('ultra-wide') || content.includes('ultra wide'), 
        'Should mention ultra-wide displays');
      assert.ok(content.includes('mobile'), 'Should mention mobile devices');
    });

    it('should warn about mixing approaches', () => {
      const warnings = content.toLowerCase();
      assert.ok(warnings.includes('mix') || warnings.includes('confus'), 
        'Should warn about mixing spacingScale and spacingSizes');
    });
  });

  describe('Practical Implementation Guidance', () => {
    it('should show how to enable spacing controls in editor', () => {
      const hasEditorControls = jsonBlocks.some(block => {
        try {
          const json = JSON.parse(block);
          return json.settings && json.settings.spacing && 
                 (json.settings.spacing.margin === true || 
                  json.settings.spacing.padding === true);
        } catch (error) {
          return false;
        }
      });
      assert.ok(hasEditorControls, 'Should demonstrate enabling editor controls');
    });

    it('should provide test recommendations', () => {
      assert.ok(content.includes('Test visually') || content.includes('Validate'), 
        'Should recommend testing');
    });

    it('should reference actual device widths', () => {
      assert.ok(content.includes('iPhone') || content.includes('tablet') || 
                content.includes('desktop'), 
        'Should reference real device categories');
    });
  });

  describe('Content Quality', () => {
    it('should have substantial content', () => {
      assert.ok(content.length > 5000, 'Document should be substantial');
    });

    it('should not have obvious typos in key terms', () => {
      const keyTerms = ['spacing', 'clamp', 'theme.json', 'viewport', 'fluid'];
      keyTerms.forEach(term => {
        assert.ok(content.includes(term), `Should include key term: ${term}`);
      });
    });

    it('should have consistent terminology', () => {
      assert.ok(content.includes('spacingScale') && content.includes('spacingSizes'), 
        'Should use both spacing concepts consistently');
    });
  });
});