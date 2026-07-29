# Gallery protection notes

A public web page cannot truly prevent image downloads. If a browser can display pixels, a determined user can save, screenshot, or inspect network requests. The practical goal is to make casual direct downloading inconvenient while avoiding a hostile user experience.

## Recommended approach

1. Use low-resolution, web-optimized gallery images only.
2. Add a visible or subtle watermark to public previews.
3. Disable right-click and drag on gallery images as a deterrent.
4. Place transparent overlay elements above images to block simple drag/save actions.
5. Avoid exposing original filenames or high-res files in page source.
6. Put full-resolution masters behind a private workflow: Google Drive, Dropbox, Pixieset, PhotoShelter, Cloudinary signed URLs, or an inquiry/license form.
7. Add Terms / Licensing language near the gallery.

## Stronger options

- Cloudinary with authenticated/signed URLs and generated watermarked transformations.
- Imgix or Cloudflare Images variants for thumbnail delivery only.
- A separate client proofing gallery where downloads require password/access.
- Static site with only 1200–1600 px watermarked previews and no originals.

## Starter code behavior

The included prototype uses:

- `oncontextmenu="return false"` on the gallery region.
- CSS `user-select: none` and `-webkit-user-drag: none`.
- A pseudo-element overlay over images.
- A visible “Preview / license required” badge.

This discourages casual downloads, but it is not security. Use low-res/watermarked assets publicly.
