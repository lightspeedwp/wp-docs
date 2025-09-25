# CSS Specificity
 Details the CSS specificity model in WordPress 6.6+, its impact on block themes, and why low specificity enables reliable section and style variations.
 
---

## Best practices
- 

---

## When to use
- 

---

## Limitations
- 

---

## Gutenberg Discussion #61810 — *“CSS Specificity for WordPress 6.6”*

**What it is:** Deep dive + consensus thread on the **specificity overhaul** in 6.6 that underpins section styles.
**Key points**

- Core shifts to very **low specificity (e.g., `0-1-0` via `:where(...)`)** to keep the cascade predictable.
- Enables section styles and nested variations to apply **without resorting to custom CSS**.
- Highlights implications for themes that previously depended on higher-specificity rules. ([GitHub][2])

**Why it matters**

- Validates our “JSON-first” approach and explains **why moving rules into `blocks.*`/`elements.*`** inside the variation is the right fix for conflicts.

---

## Reference Links
- [CSS Specificity for WordPress 6.6 · WordPress gutenberg · Discussion #61810 · GitHub](https://github.com/WordPress/gutenberg/discussions/61810)
- [Rich Tabor: Fluid Typography and Block Themes](https://rich.blog/fluid-typography-block-themes/)
- [Rich Tabor: Full Site Editing](https://rich.blog/full-site-editing/)
- [Rich Tabor: WordPress 6.6 Typeset Support](https://rich.blog/wordpress-6-6/)
- [Rich Tabor: Standardizing theme.json spacing sizes](https://rich.blog/standardizing-theme-json-spacing/)
- [Rich Tabor: Block Variations](https://rich.blog/block-variations/)
- [Rich Tabor: Patterns](https://rich.blog/patterns/)
