# Copilot Prompt Library — WordPress Patterns

## Scaffold a section pattern
> Create a file-based block pattern for a hero section:
> - Slug `lsx/hero-basic`, Title `Hero: Basic`, Category `banner`, Viewport 1368
> - Heading, lead, and 2 buttons in a full-width Cover
> - All strings with `esc_html_e()` using the theme text domain
> - No inline CSS; use default block attributes only
> - Add authoring checklist at end

## Starter page pattern
> Make a starter page pattern:
> - Slug `lsx/page-landing-lead`, Title `Landing Page (Lead Gen)`
> - `Block Types: core/post-content`, `Post Types: page`
> - Compose from `lsx/hero-basic` + a 2-column benefits section
> - Ensure i18n and accessibility

## Block-type pattern for Query Loop
> Provide a block-type pattern for `core/query`:
> - Slug `lsx/query-grid-2col`, Title `Query: Grid (2 Columns)`, Category `posts`
> - Card layout with Post Featured Image, Title, Excerpt, Read More
> - Lock card wrapper to prevent removal

## WooCommerce collection
> Build a WooCommerce catalog pattern:
> - Slug `lsx/wc-collection-grid`, Category `posts` + `lsx/commerce`
> - Use Product Collection block (6 items), heading and intro copy
> - Keep dynamic counts modest, no inline CSS

## Accessibility review
> Review this pattern for accessibility:
> - Heading hierarchy, link/button labels, alt text placeholders, contrast risks
> - Suggest precise fixes with code snippets
