# Fluid Spacing
Guides on creating fluid, scalable spacing systems in block themes using spacingScale and spacingSizes in theme.json, with practical examples. A systematic approach to spacing is central to clean, scalable block-theme design. This guide distils standardization principles and embeds them into actionable theme.json best practices.

## Best practices
- Define a `spacingScale` in `settings.spacing` to auto-generate consistent spacing steps. 
- Optionally use `spacingSizes` for custom fluid values via `clamp()`.
- Define a consistent spacing system via `settings.spacing.spacingScale`, for example:

```json
  {
  "spacingScale": {
    "operator": "*",
    "increment": 2,
    "steps": 7,
    "mediumStep": 1.5,
    "unit": "rem"
  }
```
- This generates CSS custom properties like `--wp--preset--spacing--20`, `--wp--preset--spacing--30`, etc., which you can reference in CSS as `var(--wp--preset--spacing--20)`.

* Alternatively use `spacingSizes` for granular control, including fluid values via `min()`, `clamp()`:
  e.g.:

```json
  {
    "size": "min(40px, 4vw)",
    "slug": "30",
    "name": "3"
  }
```

* Enable blockGap, margin, and padding controls in the editor to leverage spacing presets visually.

```json
{
  "settings": {
    "spacing": {
      "blockGap": true,
      "margin": true,
      "padding": true
    }
  }
}
```

## When to use
- Use `spacingScale` for a consistent, predictable scale (linear or multiplicative) with a slider UI across the site.
- Use `spacingSizes` when you need bespoke tokens (e.g. semantic names like `s`, `m`, `l`) or fluid values via `clamp()` that don’t fit a uniform scale.
- Prefer one approach globally to keep the editor UI coherent; mixing can be reserved for specific blocks with a clear rationale.
---

## Limitations

* Mixing `spacingScale` and `spacingSizes` can confuse UI patterns—choose one for clarity.
* More than seven custom sizes create a dropdown UI instead of a slider.
* Custom spacing control per block is not supported natively.

---

## Why Standardize Spacing?

Spacing—encompassing margin, padding, and column/child gaps—provides the "breathing room" around content. A consistent spacing scale ensures rhythm, hierarchy, and readable layouts. By defining spacing centrally in `theme.json`, themes become **interchangeable** in function, while retaining visual distinctiveness.:contentReference[oaicite:1]{index=1}

### “Visual” table: when each part of clamp() applies

Using clamp(10px, 2vw, 40px):

| **Viewport width** | **2vw calculation** | **Result (chosen by ****clamp****)** | **Why** |
| --- | --- | --- | --- |
| 320px (small mobile) | 6.4px | **10px** | 6.4px < min → use **min** |
| 375px (mobile) | 7.5px | **10px** | 7.5px < min → use **min** |
| 768px (tablet) | 15.36px | **15.36px** | within min–max → **fluid** value |
| 1024px (tablet/SM desktop) | 20.48px | **20.48px** | within min–max → **fluid** value |
| 1440px (desktop) | 28.8px | **28.8px** | within min–max → **fluid** value |
| 1920px (large desktop) | 38.4px | **38.4px** | within min–max → **fluid** value |
| 2400px (ultra-wide) | 48px | **40px** | 48px > max → use **max** |



### Key idea

**vw**** is not tied to a specific “device.”** It continuously scales with viewport width. min and max determine *when* scaling starts and stops.

## Understanding the impact VW has on a Mobile device.

## 480px Mobile (min/max fixed, vw adjusted)

### Example: clamp(10px, Xvw, 40px)

| **vw**** value** | **Calculation (Xvw @ 480px)** | **Result at 480px** | **Why** |
| --- | --- | --- | --- |
| **1vw** | 4.8px | **10px** | 4.8 < min → clamp uses min |
| **2vw** | 9.6px | **10px** | 9.6 < min → clamp uses min |
| **2.5vw** | 12px | **12px** | Now ≥ min → clamp uses fluid |
| **3vw** | 14.4px | **14.4px** | Within min–max → fluid applies |
| **5vw** | 24px | **24px** | Within min–max → fluid applies |
| **10vw** | 48px | **40px** | Above max → clamp caps at max |



---

## Mobile-first `clamp()` strategy: controlling `vw` for reliable spacing

### Principle
- The `clamp` expression is `clamp(MIN, FLUID, MAX)` — e.g. `clamp(12px, 3vw, 40px)`.
- On small viewports, you typically want spacing to **stay at MIN** until the viewport is wide enough that the `vw`-based FLUID value would exceed it.
- **Best practice:** choose `vw` so that, for common mobile widths (≈320–375px), `vw` computes to **less than MIN**.

### How to set `vw` for mobile
Calculate `vw` at your smallest intended mobile width (e.g., **320px**):

- **1vw** = 3.2px
- **2vw** = 6.4px
- **3vw** = 9.6px
- **4vw** = 12.8px
- **5vw** = 16px

If your **MIN** is **12px**:
- **3vw** @ 375px (iPhone X) = **11.25px** → `< 12px`, clamp yields **12px** (**MIN**).
- **4vw** @ 375px = **15px** → `> 12px`, clamp **starts scaling**.

### Recommendation
- Use **3vw or less** for the FLUID part if you want `clamp()` to hold **MIN** up to roughly **400px** wide.
- Avoid going below **2vw** unless you want **MIN** to persist on even wider screens.

### Example (theme.json token)
```json
{
  "size": "clamp(12px, 3vw, 40px)",
  "slug": "30",
  "name": "3"
}
```
- On mobile (≤ ~400px), spacing is **always 12px**.
- On tablets and up, spacing **scales fluidly** until it reaches the max.

### Key guidance
- **Lowest sensible `vw`:** For most themes, **2vw** is a practical minimum; lower values risk never entering the fluid zone except on ultra-wide screens.
- **Test visually:** Validate on emulators and physical devices.
- **Tip:** If you want mobile to always use **MIN**, pick `vw` so that its calculation at **375px** is **below MIN**.

### Reference table
| **vw** | **320px** | **375px** | **Chosen when MIN = 12px** |
|---|---:|---:|---|
| 2vw | 6.4px | 7.5px | **MIN (12px)** |
| 3vw | 9.6px | 11.25px | **MIN (12px)** |
| 4vw | 12.8px | 15px | **Fluid (≥ 12.8px)** |

### Final recommendation
Set the FLUID part to **2vw–3vw** if you want spacing to stay at **MIN** on mobile and only start scaling on larger screens. This keeps mobile layouts tight and predictable while desktop remains fluid and scalable.

###  Option 1: `spacingScale`

Use when you want a **scalable, incremental set of spacing values** generated by the system:

```json
"settings": {
  "spacing": {
    "spacingScale": {
      "operator": "*",
      "increment": 2,
      "steps": 7,
      "mediumStep": 1.5,
      "unit": "rem"
    }
  }
}
````

This auto-generates CSS custom properties:

```css
--wp--preset--spacing--20: 0.63rem;
--wp--preset--spacing--30: 1.25rem;
--wp--preset--spacing--40: 2.5rem;
--wp--preset--spacing--50: 5rem;
--wp--preset--spacing--60: 10rem;
--wp--preset--spacing--70: 20rem;
--wp--preset--spacing--80: 40rem;
```

Use these consistently across theme.json and block patterns to ensure one-value control.

---

## Option 2: `spacingSizes`

Use when you want **manual, custom spacing values**—including fluid CSS expressions:

```json
"settings": {
  "spacing": {
    "spacingSizes": [
      {
        "size": "min(12px, 2vw)",
        "slug": "20",
        "name": "2"
      },
      {
        "size": "min(40px, 4vw)",
        "slug": "30",
        "name": "3"
      }
    ]
  }
}
```

Output CSS variables:

```css
--wp--preset--spacing--20: min(12px, 2vw);
--wp--preset--spacing--30: min(40px, 4vw);
```

When using `spacingSizes`, **include all step definitions**, even if only some are used—otherwise default WordPress values become hidden unintentionally.([Rich Tabor][1])

---

### Block Gaps (Future-ready)

WordPress is adding support for `blockGap` in section styles:

```json
"styles": {
  "spacing": {
    "blockGap": "var(--wp--preset--spacing--30)"
  }
}
```

This outputs `--wp--style--block-gap` and controls gap spacing between child blocks in containers like groups and columns.([Rich Tabor][1])

---

## Expert Recommendations

* **Use `spacingScale`** for quick, system-generated spacing hierarchy.
* **Use `spacingSizes`** when you need fine control or fluid units.
* **Always define slugs consistently** (20, 30…70), not arbitrary labels—editor UI order depends on this order.
* Avoid mixing both without controlling `defaultSpacingSizes` in theme.json v3.

---

## Example: Default Theme Setup

```json
"settings": {
  "spacing": {
    "margin": true,
    "padding": true,
    "spacingScale": {
      "operator": "*",
      "increment": 1.5,
      "steps": 7,
      "mediumStep": 1.5,
      "unit": "rem"
    }
  }
},
"styles": {
  "blocks": {
    "core/post-title": {
      "spacing": {
        "margin": {
          "top": "var(--wp--preset--spacing--30)",
          "bottom": "var(--wp--preset--spacing--50)"
        }
      }
    }
  }
}
```

Here, editors get consistent margin controls via presets, while the scale can be tweaked globally later.

---

## Reference Links
- [WordPress Developer Resources: Everything you need to know about spacing in block themes](https://developer.wordpress.org/news/2023/03/everything-you-need-to-know-about-spacing-in-block-themes)
- [WordPress Developer Resources: Theme Handbook - Global Settings & Styles (theme.json) - Spacing](https://developer.wordpress.org/themes/global-settings-and-styles/settings/spacing/)
- [Rich Tabor on Standardizing theme.json spacing sizes](https://rich.blog/standardizing-theme-json-spacing/)
- [Rich Tabor on Fluid Typography and Block Themes](https://rich.blog/fluid-typography-block-themes/)
- [Rich Tabor on Fluid Type Scale in Block Themes](https://rich.blog/fluid-type-scale-theme-json/)
- [Rich Tabor on Full Site Editing](https://rich.blog/full-site-editing/)
- [Rich Tabor on WordPress 6.6 Section Styles](https://rich.blog/wordpress-6-6/)
- [Standardizing theme.json spacing sizes – Rich Tabor](https://rich.blog/standardizing-theme-json-spacing/)
- [Theme.json layout and spacing options - Full Site Editing](https://fullsiteediting.com/lessons/theme-json-layout-and-spacing-options/)
- [Theme.json version 3 – Make WordPress Core](https://make.wordpress.org/core/2024/06/19/theme-json-version-3/)

---
