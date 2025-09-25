# Fluid Typography & Spacing

Use CSS `clamp()` and `rem`-based tokens (theme.json presets or CSS vars).

```css
:root { --space-s: clamp(0.75rem, 1vw, 1.25rem); --step-1: clamp(1.125rem, 2vw, 1.5rem); }
h1 { font-size: var(--step-1); }
.section { padding-block: var(--space-s); }
```
