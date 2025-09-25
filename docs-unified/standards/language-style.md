# Language Style Guide (UK English Adoption)

This repository standardises on UK English for all _natural language_ content (docs, guidance, persona files). Code identifiers, API names, and third‑party library terms remain unchanged to preserve accuracy.

## Scope

Applies to: Markdown narrative text, headings, tables, callouts, comments (non-code), persona definitions.
Excluded: Code blocks (fenced), inline code spans, JSON/YAML keys, function names, external product names, quoted user strings.

## Core Conventions

| US         | UK         | Notes                                                                                |
| ---------- | ---------- | ------------------------------------------------------------------------------------ |
| (color)    | colour     | DO NOT convert when part of code tokens: theme.json keys (`color`), CSS props, APIs. |
| behavior   | behaviour  | Avoid changing library identifiers (e.g., BehaviorSubject)                           |
| optimize   | optimise   | Derivatives follow same pattern (optimisation)                                       |
| organize   | organise   | Likewise organising / organisation                                                   |
| license    | licence    | Only in prose; SPDX and file headers remain `LICENSE`                                |
| customize  | customise  | "customisation" etc.                                                                 |
| analyze    | analyse    |                                                                                      |
| initialize | initialise | Includes initialisation                                                              |

The normalisation script performs conservative word-boundary replacements only in plain prose segments. The word "color" is intentionally excluded from automated conversion because it appears extensively in code schemas (e.g., theme.json, CSS properties). Narrative prose MAY use "colour" but code examples and identifiers must retain "color" exactly.

## Exceptions

Do NOT alter:

- API / schema keys: `color`, `colors`, `textColor`, `backgroundColor`, `behaviors`, `optimizeDeps`
- Proper nouns: GitHub, WordPress, ColorPicker
- Library identifiers: BehaviorSubject, useColorMode
- File / directory names and code tokens

If a sentence needs both a code identifier and descriptive text, only change the descriptive portion.

## Writing Guidelines

1. Prefer concise, active voice.
2. Explain _why_ for non-obvious guidance; omit redundant restatements.
3. Avoid future tense where present suffices ("This ensures" not "This will ensure").
4. Use gender-neutral language.
5. Prefer accessible phrasing (plain language) unless a precise technical term is required.

## Applying Changes

1. Run `npm run lang:en-gb` (dry run) to see pending replacements.
2. Review output and stage unrelated manual edits separately.
3. Run `npm run lang:en-gb:apply` to write changes.
4. Commit with message: `chore(lang): normalise US -> UK spelling`.

## Manual Review Checklist

- [ ] No code identifiers unintentionally modified.
- [ ] Proper nouns intact.
- [ ] Tables / headings reflect UK spelling.
- [ ] Changelog entry added (first adoption + any bulk follow-up).

## Changelog Policy

Each bulk normalisation pass must append a concise entry summarising scope & any exceptions encountered.

## Future Enhancements

- Integrate into CI to fail if new US spellings enter prose.
- Extend script mapping only after evidence of recurring variants.
- Add optional whitelist/ignore file if edge cases grow.

---

Questions: open an issue referencing this guide and include affected lines.
