# Titan Black 2026 — CMS package

Files in this folder are generated from `auto365/titan-black.html`.

1. Upload `titan-black.css` as the page stylesheet.
2. Paste `titan-black.cms.html` into the CMS content/body area. Do not wrap it in another `main` element.
3. Load `titan-black.js` after the HTML, preferably in the page footer.
4. Add `titan-black.schema.jsonld` as a JSON-LD script in the page head if the CMS supports structured data.
5. Keep the `titan-black/hinh/` asset directory available at the same relative path, or replace those image URLs with the CMS media URLs.

The form posts to `/api/leads/lighting`; confirm that this route is available on the production domain before publishing.
