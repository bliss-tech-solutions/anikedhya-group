# CSS split by page/component

Your original `index.css` + `App.css` (the overrides file) have been merged and
split into one file per page/component, in correct cascade order (base rules
first, responsive overrides appended after within the same file).

## Files

| File | Covers |
|---|---|
| `01-base.css` | Fonts, `:root` variables, global reset, `.container`, `.section-title/tag/subtitle`, large-screen (2K+) rules |
| `02-reveal-animations.css` | `.reveal`, `.reveal-left/right/scale`, `.delay-*`, reduced-motion |
| `03-buttons.css` | `.btn-primary`, `.btn-outline` |
| `04-navbar.css` | `.navbar`, desktop dropdown, mobile hamburger menu, mobile accordion dropdown |
| `05-page-hero.css` | `.page-hero` (banner used on inner pages) |
| `06-hero.css` | `.hero` (homepage), slider (`.hero__slide*`), dots, progress bar |
| `07-about.css` | `.about` section (homepage "about us" block) |
| `08-showcase.css` | `.showcase` (quote/stats split panel) |
| `09-projects.css` | `.proj-card` grid (project listing cards) |
| `10-gallery.css` | `.gallery-tabs`, `.gallery__masonry`, `.gallery__item*` |
| `11-amenities.css` | `.amenities-featured`, `.amenity-feat`, `.amenities-list-full`, `.amenity-row` |
| `12-location.css` | `.location__grid`, map pin, `.location__point*` |
| `13-contact.css` | `.contact__grid`, form fields, `.contact__success` |
| `14-values-timeline.css` | About page `.values-grid` + `.timeline` |
| `15-footer.css` | `.footer` |
| `16-project-detail.css` | Single project page (`.pd-*` classes) |
| `17-career.css` | Careers page (`.career-*`) — **see note below** |
| `18-news-media.css` | News/media page (`.nm-*`) — **see note below** |
| `19-accessibility-print.css` | Touch target sizing, focus-visible outlines, safe-area insets, print stylesheet — kept last so it wins the cascade |
| `main.css` | Imports all of the above in the right order |

## ⚠️ Two files are incomplete on purpose

Your original CSS only ever had **responsive overrides** for the Career page
(`.career-*`) and the News & Media page (`.nm-*`) — there were no base/desktop
rules for those classes in either file you gave me. I kept exactly what
existed (all the `@media` blocks), but you'll need to add the base/desktop
styles for those two pages yourself at the top of `17-career.css` and
`18-news-media.css`, above the existing media queries.

## How to use it

**Option A — one import (simplest):**
Replace your CSS `<link>`/import with `main.css`:
```js
import "./styles/main.css";
```

**Option B — plain CSS `@import` (no bundler needed):**
`main.css` already uses `@import url(...)` for each file, so if your project
just serves static CSS you can link `main.css` directly in your HTML `<head>`.

**Editing:** open the file for the page/component you want to change — e.g.
tweak the contact form → `13-contact.css` only, no more hunting through one
giant file or reconciling two overlapping stylesheets.

## Note on duplicate/overlapping rules

Your two source files had many of the same selectors defined twice — a base
rule in `index.css` and a near-identical (sometimes slightly different)
override in `App.css` for the same breakpoint (e.g. `.navbar__logo-img` at
`max-width: 480px` was `54px/54px` in one file and `48px/48px` in the other).
In each merged file I kept the **later-declared version** (from `App.css`,
since that file was appended after `index.css` in your original load order),
so the visual result matches what was actually rendering before. If a
breakpoint looks off anywhere, that's the one place to check.
