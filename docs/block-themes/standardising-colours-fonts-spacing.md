# Standardising Colours, Spacing, and Typography in Block Themes

A predictable, token-based system for **colours, spacing, and typography** helps ensure consistency across design, WordPress editor UI, and front-end rendering. WordPress provides **default presets**, which can be enabled, overridden, or extended to match your design system.

## Colours & Slugs

### Core Semantic

* `base` → background
* `contrast` → text
* `primary` → main brand color
* `brand` → primary brand identity
* `cta` → call-to-action buttons
* `primary-light` → hover/focus states
* `primary-dark` → pressed/active states

### Neutral Scale

* `neutral-0` → white
* `neutral-100` → lightest grey
* `neutral-200 … neutral-900` → progressively darker greys
* `neutral-900` → pure black

### Accent Scale

* `accent-100 … accent-900` to  up to however many brand/utility accents you need.
* These can represent different **hues** or **tones** of your brand colour system.

---

### Example JSON Snippet

```json
{
  "$schema": "https://schemas.wp.org/wp/6.8/block.json",
  "version": 3,
  "settings": {
    "color": {
      "defaultPalette": false,
      "palette": [
        { "slug": "base",         "name": "Base",         "color": "#FFFFFF" },
        { "slug": "contrast",     "name": "Contrast",     "color": "#111111" },
        { "slug": "primary",      "name": "Primary",      "color": "#0A84FF" },
        { "slug": "brand",        "name": "Brand",        "color": "#0A84FF" },
        { "slug": "cta",          "name": "Call to Action", "color": "#0066CC" },
        { "slug": "primary-light", "name": "Primary Light", "color": "#66B7FF" },
        { "slug": "primary-dark",  "name": "Primary Dark",  "color": "#004999" },

        { "slug": "neutral-100",  "name": "Neutral 100",  "color": "#F9FAFB" },
        { "slug": "neutral-200",  "name": "Neutral 200",  "color": "#F3F4F6" },
        { "slug": "neutral-300",  "name": "Neutral 300",  "color": "#E5E7EB" },
        { "slug": "neutral-400",  "name": "Neutral 400",  "color": "#D1D5DB" },
        { "slug": "neutral-500",  "name": "Neutral 500",  "color": "#9CA3AF" },
        { "slug": "neutral-600",  "name": "Neutral 600",  "color": "#6B7280" },
        { "slug": "neutral-700",  "name": "Neutral 700",  "color": "#4B5563" },
        { "slug": "neutral-800",  "name": "Neutral 800",  "color": "#1F2937" },
        { "slug": "neutral-900",  "name": "Neutral 900",  "color": "#111111" },

        { "slug": "accent-100", "name": "Accent 100", "color": "#0A84FF" },
        { "slug": "accent-200", "name": "Accent 200", "color": "#3399FF" },
        { "slug": "accent-300", "name": "Accent 300", "color": "#66B2FF" },
        { "slug": "accent-400", "name": "Accent 400", "color": "#99CCFF" },
        { "slug": "accent-500", "name": "Accent 500", "color": "#CCE5FF" },
        { "slug": "accent-600", "name": "Accent 600", "color": "#FF7A59" },
        { "slug": "accent-700", "name": "Accent 700", "color": "#FF9B80" },
        { "slug": "accent-800", "name": "Accent 800", "color": "#FFBCA6" },
        { "slug": "accent-900", "name": "Accent 900", "color": "#FFDCD2" }
      ]
    }
  }
}
```

---

## AI-Guided Color Usage Rules

To prevent overwhelming editors and ensure consistent brand application, follow these semantic guidelines:

### When to Use Each Color

**Base & Contrast**
- `base`: Page backgrounds, card backgrounds, content areas
- `contrast`: Body text, headings, icons

**Brand Colors** 
- `primary`: Navigation, primary buttons, brand elements
- `brand`: Logo areas, brand headers, key brand moments
- `cta`: Action buttons, "Buy Now", "Sign Up", conversion elements

**Interactive States**
- `primary-light`: Hover states for primary elements, focus rings
- `primary-dark`: Active/pressed states, emphasis variations

**Content Guidelines**
- **Avoid** using brand colors for large background areas
- **Do** use neutral colors for reading content and UI foundations  
- **Ensure** CTA colors have high contrast for accessibility
- **Test** color combinations for sufficient contrast ratios (4.5:1 minimum)

### Editor Prompts & Suggestions

When implementing in block themes, consider adding these as editor hints:

```json
{
  "slug": "cta",
  "name": "Call to Action",
  "color": "#0066CC",
  "description": "Use for buttons and conversion elements"
}
```

---

## Best Practices

* **Use semantic naming** that editors understand (`primary-light` vs `primary-300`).
* **Limit brand color variations** to essential states (normal, light, dark, CTA).
* **Keep editor-facing colors focused** — use 5-7 brand colors max in the palette.
* **Don't rename slugs** once published — just change values to update brand colours.
* **Use neutrals for UI foundations**, **brand/primary for identity**, **CTA for actions**.
* **Consider accessibility** — ensure sufficient contrast between all color pairs.
* **Provide clear guidance** through naming what each color should be used for.


---
## Font Sizes & Slugs

### WordPress Default Font Size Slugs
WordPress ships with four core font sizes:

- `small`
- `medium`
- `large`
- `x-large`

Perfect — let’s extend the **WordPress default font sizes** into a numeric scale (to match spacing & colour). You had earlier asked for **extra sizes** like `x-tiny`, `tiny`, `huge`, `gigantic`. I’ve translated these into a scale using **multiples of 8px** (so they map cleanly to `rem` values, e.g. `16px = 1rem` if base = 16px).

---

### Default WP Font Sizes (approx)

* `small` → 13px
* `medium` → 20px (default body size = 16px)
* `large` → 36px
* `x-large` → 42px

(These are defaults, but the slugs can vary across themes.)

---


### Why Use Numeric Slugs for Font Sizes?

Just like spacing, using slugs like `font-size-100` results in CSS variables such as:

```css
--wp--preset--font-size--100
```

This avoids duplication and keeps the CSS variable names clean and predictable. Use numeric slugs (e.g. `100`, `200`, `300`) and a descriptive name for the editor UI.

#### What Not To Do

Avoid using slugs with redundant prefixes, such as:

```css
--wp--preset--spacing--spacing-10
--wp--preset--font-size--font-size-100
```

These patterns duplicate the context ("spacing" or "font-size") and make CSS variables harder to read and maintain. Always use numeric-only slugs for clarity:

```css
--wp--preset--spacing--10
--wp--preset--font-size--100
```
### Recommended Extended Scale (multiples of 8px)

| Slug  | Label     | px size | rem (base 16px) |
|-------|-----------|---------|-----------------|
| 100   | Tiny      | 12px    | 0.75rem         |
| 200   | Base      | 16px    | 1rem            |
| 300   | Small     | 20px    | 1.25rem         |
| 400   | Medium    | 24px    | 1.5rem          |
| 500   | Large     | 32px    | 2rem            |
| 600   | X-Large   | 40px    | 2.5rem          |
| 700   | Huge      | 48px    | 3rem            |
| 800   | Gigantic  | 64px    | 4rem            |
| 900   | Colossal  | 80px    | 5rem            |

👉 You can keep extending in increments of 100 (e.g. `1000` for 96px) if your design system needs it.

### Example theme.json Partial

```json
{
  "typography": {
    "fontSizes": [
      { "slug": "100", "size": "0.75rem", "name": "Tiny" },
      { "slug": "200", "size": "1rem",    "name": "Base" },
      { "slug": "300", "size": "1.25rem", "name": "Small" },
      { "slug": "400", "size": "1.5rem",  "name": "Medium" },
      { "slug": "500", "size": "2rem",    "name": "Large" },
      { "slug": "600", "size": "2.5rem",  "name": "X-Large" },
      { "slug": "700", "size": "3rem",    "name": "Huge" },
      { "slug": "800", "size": "4rem",    "name": "Gigantic" },
      { "slug": "900", "size": "5rem",    "name": "Colossal" }
    ]
  }
}
```

### Example CSS Output

```css
--wp--preset--font-size--100: 0.75rem;
--wp--preset--font-size--200: 1rem;
--wp--preset--font-size--300: 1.25rem;
/* ...etc... */
--wp--preset--font-size--900: 5rem;
```

---

### Example theme.json Partial

```json
{
  "$schema": "https://schemas.wp.org/wp/6.8/block.json",
  "version": 3,
  "settings": {
    "typography": {
      "fontSizes": [
        { "slug": "100", "size": "0.75rem", "name": "Tiny" },
        { "slug": "200", "size": "1rem",    "name": "Base" },
        { "slug": "300", "size": "1.25rem", "name": "Small" },
        { "slug": "400", "size": "1.5rem",  "name": "Medium" },
        { "slug": "500", "size": "2rem",    "name": "Large" },
        { "slug": "600", "size": "2.5rem",  "name": "X-Large" },
        { "slug": "700", "size": "3rem",    "name": "Huge" },
        { "slug": "800", "size": "4rem",    "name": "Gigantic" },
        { "slug": "900", "size": "5rem",    "name": "Colossal" }
      ]
    }
  }
}
```

---

### Best Practices for Font Size Values

* **Numeric slugs** keep naming scalable and consistent (`font-size-100 … 900`).
* **Multiples of 8px** ensure harmony with spacing scales.
* Always **keep slugs stable** → you can change size values without breaking references.
* Use **semantic naming** in addition to numeric (helps editors know what’s “Huge” vs “Tiny”).
* Pair with **fluid typography** in WP 6.6+ so these sizes scale across devices.

---

## Spacing Sizes & Slugs

### WordPress Default Spacing Slugs
The default spacing scale is numeric and increments by 10:

- `10`
- `20`
- `30`
- `40`
- `50`
- `60`

(These correspond to approximate values from `0.125rem` to `3rem`, though values may vary by theme implementation.)

### Extended Spacing Scale

We extend this with additional slugs to cover larger gaps, while **keeping naming consistent**:

- `70` → `3.5rem` (56px)  
- `80` → `4rem` (64px)  
- `90` → `4.5rem` (72px)  
- `100` → `5rem` (80px)  

## Extended Spacing Scale


### Why Use Numeric Slugs?

When you use numeric slugs like `10`, WordPress generates CSS variables such as:

```css
--wp--preset--spacing--10
```

The same logic applies to font sizes:

```css
--wp--preset--font-size--100
```

### Example JSON

```json
"spacing": {
  "spacingScale": {
    "steps": [
      { "slug": "10", "size": "0.625rem", "name": "10px" },
      { "slug": "20", "size": "1.25rem", "name": "20px" },
      { "slug": "30", "size": "1.875rem", "name": "30px" },
      { "slug": "40", "size": "2.5rem", "name": "40px" },
      { "slug": "50", "size": "3.125rem", "name": "50px" },
      { "slug": "60", "size": "3.5rem", "name": "56px" },
      { "slug": "70", "size": "3.75rem", "name": "60px" },
      { "slug": "80", "size": "4rem", "name": "64px" },
      { "slug": "90", "size": "4.5rem", "name": "72px" },
      { "slug": "100", "size": "5rem", "name": "80px" }
    ]
  }
}
```

### Example CSS Output

```css
--wp--preset--spacing--10: 0.625rem;
--wp--preset--spacing--20: 1.25rem;
--wp--preset--spacing--30: 1.875rem;
/* ...etc... */
--wp--preset--spacing--100: 5rem;
```

For font sizes:

```css
--wp--preset--font-size--100: 0.75rem;
--wp--preset--font-size--200: 1rem;
--wp--preset--font-size--300: 1.25rem;
/* ...etc... */
--wp--preset--font-size--900: 5rem;
```

---

## Best Practices for Naming Conventions

### 1. **Spacing**
- Use either:
  - `spacingScale`: system-generated (`20`, `30`, `40`…)  
  - `spacingSizes`: manual with fluid units (`s`, `m`, `l`)  
- Always keep **numeric slugs in sequence** (`20`, `30`, `40`…), since the editor orders presets by slug.  
- If semantic slugs are preferred (`s`, `m`, `l`), use them consistently across all blocks.

✅ Recommendation: Stick with numeric scales (`20–80`) for compatibility with WordPress defaults, but allow semantic naming at the design system layer (e.g. mapping `space.m → 40`).

#### What Not To Do

Do not use slugs like `spacing-10`, `spacing-20`, etc. in your theme.json or design tokens. This leads to CSS variables such as `--wp--preset--spacing--spacing-10`, which are redundant and less readable. Use numeric slugs only (e.g. `10`, `20`).
---

### 2. **Typography**
- WordPress default slugs: `small`, `medium`, `large`, `x-large`.  
- Rich Tabor recommends a **numbered scale** (`xs`, `s`, `m`, `l`, `xl`, `xxl`) to create predictable progression.  
- FullSiteEditing.com supports both, but stresses aligning naming with design tokens in Figma.

✅ Recommendation: Retain WP defaults for editor familiarity, but override values with your scale (e.g. keep slug `large` but define it as `clamp(1.5rem, 2vw, 2rem)`).

#### What Not To Do

Do not use slugs like `font-size-100`, `font-size-200`, etc. This will result in CSS variables such as `--wp--preset--font-size--font-size-100`, which are unnecessarily verbose. Use numeric slugs only (e.g. `100`, `200`).
---

### 3. **Colours**
- WordPress defaults (`black`, `white`, `primary`, `secondary`) may not align with brand palettes.  
- Use **semantic naming** (`brand-primary`, `brand-accent`, `neutral-100`) instead of hardcoded names (`blue`, `red`).  
- This ensures **future-proofing** if brand colours shift.  
- Rich Tabor emphasises using **systematic palettes**: base colours + tints/shades.

✅ Recommendation: Keep `base` colours minimal (3–5), then extend with `neutral` and `accent` palettes. Always prefer semantic over literal names.

---

## Strategy: Enable Defaults, Override Values

The **hybrid approach** is currently best practice:

1. **Enable WordPress defaults** for spacing, typography, and colour slugs.
2. **Override the default values** with your design system tokens.
   - e.g. Keep `spacing-30`, but change from `1.25rem` → `clamp(1rem, 2vw, 1.5rem)`.
   - Keep `font-size-large`, but redefine it via a fluid scale.
   - Keep `primary`, but remap it to `brand-primary` (#0047AB).
3. **Document the mapping** between Figma tokens and WordPress slugs so developers/designers stay aligned.



---

## General Advice

- **Consistency over creativity**: don’t reinvent slugs across projects.  
- **Keep editor UX predictable**: preserve WP defaults where possible so editors recognise controls.  
- **Token-first thinking**: Figma variables → theme.json presets → CSS variables.  
- **Avoid mixing too many systems**: pick `spacingScale` OR `spacingSizes` globally, not both.  
- **Future-proof**: semantic naming ensures flexibility for rebrands.  

---

## Standardised Naming Conventions & Slug Reference

To ensure consistency, clarity, and future-proofing across all theme assets, use the following naming conventions for all theme.json presets, section styles, block styles, and variations. These conventions are based on best practices observed in leading themes and the LSX Design system.

### General Principles

- **Use semantic, role-based slugs** for colors, font families, and style sets (e.g. `primary`, `accent-1`, `brand-sans`, `button-primary`).
- **Use numeric-only slugs** for spacing and font sizes (e.g. `100`, `200`, `10`, `20`).
- **Avoid literal color names** (e.g. `blue`, `red`) and avoid repeating the preset type in the slug (e.g. `font-size-100`).
- **Use suffixes** for variations (`-accent`, `-alt`, `-light`, `-dark`, `-inverse`).
- **Keep slugs stable**—change values, not names, for future-proofing.

### Recommended Slug Table

| Type         | Slug Example           | Description/Role                |
|--------------|------------------------|---------------------------------|
| Color        | `primary`              | Main brand color                |
| Color        | `accent-1`             | Accent color 1                  |
| Color        | `base`                 | Background/base color           |
| Color        | `contrast`             | Text/contrast color             |
| Color        | `border-light`         | Light border                    |
| Color        | `border-dark`          | Dark border                     |
| Color        | `primary-accent`       | Brand accent                    |
| Color        | `primary-alt`          | Brand alternate                 |
| Color        | `primary-alt-accent`   | Brand alternate accent          |
| Font Family  | `brand-sans`           | Main sans-serif font            |
| Font Family  | `brand-serif`          | Main serif font                 |
| Font Family  | `brand-mono`           | Monospace font                  |
| Font Size    | `100`                  | Numeric only, UI name for label |
| Font Size    | `200`                  | ...                             |
| Section      | `section-hero`         | Hero section style              |
| Section      | `section-footer`       | Footer section style            |
| Section      | `section-1`            | Generic/numbered section        |
| Block Style  | `button-primary`       | Primary button style            |
| Block Style  | `quote-accent`         | Accent quote style              |
| Variation    | `variation-accent`     | Accent style variation          |
| Variation    | `variation-alt`        | Alternate style variation       |

### Additional Standardised Slugs to Consider

- **Color:** `success`, `warning`, `error`, `info`, `muted`, `overlay`, `highlight`, `shadow`, `focus`, `disabled`
- **Font Size:** `caption`, `lead`, `display` (for extra large headings)
- **Section:** `section-feature`, `section-testimonial`, `section-cta`, `section-gallery`
- **Block Style:** `card`, `card-alt`, `list-compact`, `list-inline`, `heading-accent`, `heading-muted`
- **Variation:** `variation-inverse`, `variation-muted`, `variation-outline`

### Referencing Presets in theme.json

- Use `var:preset|color|primary` for colors
- Use `var:preset|font-size|100` for font sizes
- Use `var:preset|font-family|brand-sans` for font families

### Example theme.json Structure

```json
{
  "settings": {
    "color": {
      "palette": [
        { "slug": "primary", "name": "Brand Primary", "color": "#465aff" },
        { "slug": "accent-1", "name": "Accent 1", "color": "#DBDDFF" },
        { "slug": "base", "name": "Base", "color": "#fff" },
        { "slug": "success", "name": "Success", "color": "#27ae60" },
        { "slug": "warning", "name": "Warning", "color": "#f39c12" }
      ]
    },
    "typography": {
      "fontFamilies": [
        { "slug": "brand-sans", "name": "Brand Sans", "fontFamily": "Mona Sans, sans-serif" },
        { "slug": "brand-serif", "name": "Brand Serif", "fontFamily": "Literata, serif" }
      ],
      "fontSizes": [
        { "slug": "100", "name": "Tiny", "size": "0.75rem" },
        { "slug": "200", "name": "Base", "size": "1rem" },
        { "slug": "display", "name": "Display", "size": "4rem" }
      ]
    },
    "spacing": {
      "spacingScale": {
        "steps": [
          { "slug": "10", "name": "10px", "size": "0.625rem" },
          { "slug": "20", "name": "20px", "size": "1.25rem" }
        ]
      }
    }
  },
  "styles": {
    "color": {
      "background": "var:preset|color|base",
      "text": "var:preset|color|contrast"
    },
    "typography": {
      "fontFamily": "var:preset|font-family|brand-sans",
      "fontSize": "var:preset|font-size|200"
    }
  }
}
```

### Mapping Design Tokens to theme.json

Maintain a mapping table between Figma/design tokens and theme.json slugs for design/dev alignment. Example:

| Figma Token      | theme.json Slug   |
|------------------|------------------|
| Brand/Primary    | `primary`        |
| Brand/Accent 1   | `accent-1`       |
| Font/Heading     | `brand-sans`     |
| Spacing/Small    | `10`             |

### Final Advice

- **Document your naming conventions in your theme’s README.**
- **Keep slugs stable—change values, not names, for future-proofing.**
- **Align design tokens and theme.json slugs for seamless handoff.**
- **Use semantic, role-based naming for clarity and maintainability.**

## References
- Rich Tabor: [Standardizing theme.json spacing](https://rich.blog/standardizing-theme-json-spacing/)
- Rich Tabor: [Standardizing theme.json colours](https://rich.blog/standardizing-theme-json-colours/)
- Rich Tabor: [Standardizing theme.json fonts sizes](https://rich.blog/standardizing-theme-json-font-sizes/)
- Rich Tabor: [Fluid type scale in theme.json](https://rich.blog/fluid-type-scale-theme-json/)  
- Rich Tabor: [Standardizing theme.json colours](https://rich.blog/standardizing-theme-json-colours/)  
- FullSiteEditing.com: [Global Styles & theme.json](https://fullsiteediting.com/)  
- WordPress Developer Docs: [theme.json reference](https://developer.wordpress.org/themes/global-settings-and-styles/)
- https://developer.wordpress.org/themes/global-settings-and-styles/settings/spacing/
- https://developer.wordpress.org/themes/global-settings-and-styles/settings/typography/
- https://developer.wordpress.org/themes/global-settings-and-styles/settings/colour/

---
