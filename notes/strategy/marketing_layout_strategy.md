# Marketing and layout strategy

## Core positioning

Lead with: **researcher/lab PI + public-facing visual science portfolio**.

The current site successfully communicates breadth, but the mixed hierarchy makes Jessie look equally like a shop, artist portfolio, media archive, and scientist. The new site should make research authority unmistakable in the first screen while preserving the creative archive.

Suggested homepage hero:

> Jessica Kendall-Bar
> Marine ecophysiologist, data-visualization researcher, and science artist building tools to see hidden animal behavior and physiology in a changing ocean.
> [Visit the EcoViz Lab] [Publications] [Portfolio]

## Homepage hierarchy

1. **Hero / identity** — researcher first, art-science identity second, EcoViz lab button prominent.
2. **Research pillars** — biologging/electrophysiology, animal behavior/ecophysiology, data visualization/AI, science communication.
3. **Featured publication/case study** — Sleep at Sea / Science 2023.
4. **Lab CTA** — EcoViz Lab: students, collaborators, publications, software, grants.
5. **Selected publications** — 5–8 most important papers with DOI buttons.
6. **Portfolio tiles** — animations, illustration, photography, exhibits, books.
7. **Teaching & media** — Coursera, lectures, press, workshops.
8. **Contact** — split CTAs: lab/research, speaking/media, art/portfolio.

## Suggested sitemap

- `/` — integrated homepage, research-first.
- `/research` — current work, lab link, publications, methods, datasets, software.
- `/publications` — full publication list with DOI/PDF/code/media links.
- `/projects/sleep-at-sea` — flagship case study.
- `/projects/lightscapes-of-fear` — data visualization case study.
- `/projects/visualizing-life-in-the-deep` — tool/pipeline case study.
- `/teaching` — courses, workshops, Coursera, data visualization collective.
- `/portfolio` — overview of illustration, animation, data viz, photography.
- `/portfolio/animation`, `/portfolio/illustration`, `/portfolio/photography`, `/portfolio/books` — protected galleries and case studies.
- `/press` — filterable timeline.
- `/about` — current bio, headshots, CV, scholar, ORCID, lab link.
- `/contact` — research/media/commission inquiry routing.

## Store replacement

Replace `/photo-store` and `/art-store` with redirects:

- `/photo-store` → `/portfolio/photography`
- `/art-store` → `/portfolio/illustration`

Each gallery page can show watermarked thumbnails and have buttons for `Request license`, `Request print`, or `Commission/inquiry`. Do not expose large originals directly.

## Portfolio guidance

Keep the personal archive feel, but curate the first row heavily. Suggested buckets:

- **Science visualization** — EcoViz, Visualizing Life in the Deep, coral reef flood-risk visuals, Lightscapes of Fear.
- **Books & illustration** — Looking for Marla, Castor Oil Rig Tales, science comics.
- **Animation & video** — Sleep at Sea, Argo/Ocean heat, CCCR, Selkie Dreams.
- **Photography** — underwater, surf, marine mammals, kelp forest.

## Lab link prominence

Use `ecoviz.org` in all of these places:

- Main hero primary button.
- Research nav item: `Lab: EcoViz`.
- Footer column: `EcoViz Lab`, `Publications`, `Prospective Students`, `Collaborate`.
- About page bio card.
- Press/EcoViz project cards.
