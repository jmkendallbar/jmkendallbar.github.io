# Image relinking guide

The manifest contains remote Wix derivative URLs. In the new site, replace these with your own local/static asset paths.

Recommended structure:

```text
/public/images/research/sleep-at-sea/
/public/images/research/lightscapes-of-fear/
/public/images/portfolio/illustration/
/public/images/portfolio/photography/thumbs/
/private-masters/  # do not deploy publicly
```

For each image:

1. Find the master in Google Drive / Personal / Art / Portfolio or export from Wix Media Manager.
2. Create a public preview derivative: 1200–1600px wide, compressed WebP/JPG, preferably watermarked.
3. Store metadata in a JSON/Markdown frontmatter entry: title, alt text, credit, page, rights, master location.
4. Keep full-res masters outside the public repo or in a private bucket.

Example frontmatter:

```yaml
title: Sleep spiral visualization
alt: Data-driven visualization of an elephant seal descending in a REM sleep spiral.
preview: /images/research/sleep-at-sea/sleep-spiral-preview.webp
credit: Jessica Kendall-Bar
rights: © Jessica Kendall-Bar. Preview only. Contact for licensing.
master_file: Google Drive / Personal / Art / Portfolio / ...
```
