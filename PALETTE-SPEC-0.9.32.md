# ESDS 0.9.32 — Palette system specification

## Scope
- One canonical palette colour set. Palette role colours do not switch with Obsidian's light/dark appearance.
- Keep the 30 public semantic classes (st-xx) and map them to shared semantic CSS variables.
- Provide 11 editable colour roles: en, letter, ipa, translation, term, definition, focus, secondary, soft, heading, ink.
- Keep the 12 Callout types, per-type colour maps and frame geometry.
- Preserve schema-4 JSON compatibility. When importing a pre-0.9.32 palette without roles.letter, derive it from roles.en (then roles.ipa) without discarding the palette.
- Keep palette collections exportable as ZIP with JSON entries and collection manifest.
- Keep background and block-style objects separate from the palette JSON; use a theme-pack when the complete linked design must travel together.
- Palette colours remain fixed across Obsidian appearance modes. Background assets are a separate subsystem and may retain their own appearance-specific values.

## Implementation in 0.9.32
- Add letter to ROLE_KEYS and the palette editor with the label 'Иностранные буквы'.
- Normalize legacy palettes and exported JSON with a deterministic letter fallback.
- Apply the same role normalization to generated CSS and preview rendering.
- Keep the existing st-lt CSS selector bound to --esds-letter.
- Extend palette-aware Markdown table CSS to the source-view note scope as well as Reading View and preview.
- Bump the Obsidian plugin manifest to 0.9.32.

## Verification checklist
- 30 semantic class definitions are registered in main.js and styled in styles.css.
- All 11 role keys are editable and are emitted as --esds-* CSS variables.
- A legacy palette without letter imports and receives a deterministic fallback.
- A new palette exports as esds-palette schemaVersion 4 without legacy dark palette keys.
- Palette JSON import remains backwards compatible with schema versions 1–4.
- ZIP collection import/export retains JSON files and collection-manifest.json.
- Android runtime checks still required: Reading View, Live Preview, theme switching, actual ZIP round-trip, and rendered screenshot comparison.

## Known boundary
The 0.9.32 changes do not add per-column authoring controls for Markdown tables. Table header, cell borders, padding and alternating-row styling are palette-aware; individual per-column colours remain a separate future feature rather than being represented as already implemented.
