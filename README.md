# Jessica Kendall-Bar site archive — parallax v3

Generated: 2026-06-22 16:00 Pacific

This is a stronger rebuild starter that keeps the full-width, blue-purple, underwater parallax feeling of the current public website while transferring actual captured site content into static pages.

## Preview
Open `rebuild-parallax-v3/index.html` in a browser. All primary pages are in the same folder as static HTML files.

## What changed from v2
- Purple/blue palette sampled from the current Sleep at Sea / homepage look rather than a generic lavender portfolio palette.
- Full-width hero and parallax bands using the Sleep Spiral imagery supplied by the user.
- Sticky white navigation with a black text-logo block, closer to the current site structure.
- Actual page content transferred into page HTML from the archived public pages instead of placeholder rewrite prompts.
- Store pages preserved only as legacy archive/redirect targets; the public-facing gallery and photography pages are not storefronts.
- EcoViz Lab (`https://ecoviz.org`) is prominent in the main nav and hero.

## Important limitations
Wix does not expose the original editor/backend source code as normal static site files, so this archive contains rendered public content and a clean static rebuild, not the original Wix project internals. The Google Drive portfolio folder was not accessible from the public URL in this environment; upload a Drive export/zip and the images can be linked into `assets/remote_asset_manifest.csv` or copied into `assets/images/`.

## Files
- `content/pages/` — public page content captures, now organized by category folders such as `home/`, `about/`, `research/`, `portfolio/`, `teaching/`, `press/`, and `legacy/`.
- `content/site_inventory.csv` — route inventory.
- `content/asset_manifest.csv` — asset references from the earlier scrape.
- `content/data/` — page and asset metadata JSON files.
- `notes/` — project notes separated into `strategy/` and `assets/`.
- `rebuild-parallax-v3/*.html` — static rebuild pages.
- `rebuild-parallax-v3/styles.css` — purple parallax design system.
- `rebuild-parallax-v3/main.js` — responsive menu, parallax, and download-deterrent behavior.
- `rebuild-parallax-v3/assets/remote_asset_manifest.csv` — remote Wix image references to replace with local assets later.
