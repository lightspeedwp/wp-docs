# Block Development

- Use @wordpress/create-block; complete `block.json`.
- Separate editor/front assets; keep bundles lean.
- Prefer `supports` (align, anchor) over custom options.
- i18n via `@wordpress/i18n`.
- Dynamic blocks: efficient `render_callback` + caching.

```json
{
  "apiVersion": 3,
  "name": "lsx/example",
  "title": "LSX Example",
  "category": "widgets",
  "supports": { "align": ["wide","full"], "anchor": true },
  "textdomain": "lsx"
}
```
