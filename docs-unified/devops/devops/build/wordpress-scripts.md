# Building with `@wordpress/scripts`

Standardise on:
```json
{
  "scripts": {
    "build": "wp-scripts build",
    "start": "wp-scripts start",
    "lint": "wp-scripts lint-js",
    "format": "wp-scripts format"
  }
}
```
- Keep `block.json`/`theme.json` authoritative.
- One CSS per block where possible.
- Don’t commit compiled assets; package on release.
