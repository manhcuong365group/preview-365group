# Semantic and layout audit — 2026-09-07

Scope: current CR BLK Pro source. This is a local-source audit, not production certification.

## Compact reference trial

- Adopted reference geometry: 1296px maximum container, 14–20px fluid gutters, 16–22px section padding per side, 14–16px grid gaps. Kept existing content and interactive markup.
- All 17 measured main-section containers have equal width at each tested viewport (347px at 375, 740px at 768, approximately 987px at 1024, 1296px at 1440).
- Reset the technical figure's default browser margin, which inset the image independently of the table. Added spacing before warranty links.
- Browser interaction checks pass at all four widths: SUV price selection, standard package selection, modal opening, Escape and focus return, night-driving recommendation, VinFast filter. No page JavaScript exceptions observed. No real form submitted.
- Existing JavaScript retained after audit; shared bubbling handlers rely on the existing stopPropagation listener. This could be consolidated separately, but no double action appeared in tested interactions.
- Legacy CSS overrides remain. The trial adds a shared geometry section inside the existing responsive stylesheet; it does not claim a full CSS rewrite or removal of every unused rule.

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
