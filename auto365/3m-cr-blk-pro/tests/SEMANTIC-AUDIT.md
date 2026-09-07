# Semantic and layout audit — 2026-09-07

Scope: current CR BLK Pro source. This is a local-source audit, not production certification.

## Fixed

- Closed the missing Pro Shop container before the section ends. The previous regex test accepted the incomplete structure; corrected that expectation and added independent HTML validation.
- Made the two peer network panel titles H2 headings, retaining their existing class-based appearance.
- Added valid group roles to labeled network containers and a name to the configuration-result aside.
- Marked the supporting note as an aside, reference links as named navigation, and the quotation as a figure containing a blockquote and author figcaption. The author's name is no longer marked as the title of a work with cite.
- Gave the expert-guide flow a single fluid gap: 16–22px. Removed child margins from that flow. The quote and following image no longer touch.
- Added separation between price cards and their following image.
- Removed duplicate process and quotation CSS groups and an empty rule. Styles remain in the head; 14 style elements remain. This is not a claim that every legacy selector has been eliminated.

## Verification

- Existing content/interaction source tests: 69 passing.
- Chromium layout audit at 375, 768, 1024 and 1440px: no page overflow, overlapping top-level sections, duplicate IDs, missing image alt attributes, unlabeled visible form fields or broken in-page anchors.
- Expert-guide measured gaps: 16px at 375/768/1024, approximately 21.59px at 1440.
- Desktop and mobile expert-guide screenshots visually inspected. Mobile cards retain the existing horizontal scrolling layout.
- HTML Validate recommended structural rules pass using tests/htmlvalidate.json. Four stylistic policies are excluded: telephone non-breaking spaces, raw unambiguous ampersands, inline CSS, trailing whitespace. Structural closing, nesting, ARIA and landmark rules remain active. This result is not a Nu HTML Checker result.

Run from the repository root:

```sh
node --test auto365/3m-cr-blk-pro/tests/seo-geo-facts.test.mjs
node auto365/3m-cr-blk-pro/tests/layout-audit.mjs --check
npx --yes html-validate --config auto365/3m-cr-blk-pro/tests/htmlvalidate.json auto365/3m-cr-blk-pro/index.html
```

Screenshots are generated in tmp/cr-blk-layout-audit and are not published with the page.
