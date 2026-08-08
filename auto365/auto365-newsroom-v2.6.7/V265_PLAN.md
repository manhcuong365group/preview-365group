# Auto365 Newsroom V2.6.5 Implementation Plan

> REQUIRED SUB-SKILL: executing-plans. This is a standalone mockup artifact; no production source or git branch is modified.

**Goal:** Separate Global Finder results from the Content Type feed and rebalance the press block while preserving existing Vehicle Finder and Swiper behavior.

**Architecture:** Global Finder reads the immutable article-card dataset and renders cloned cards into its own result grid with independent pagination. Content Type tabs continue to render the article Swiper using only `activeFeedType`. Press keeps one lead plus a 2x2 Swiper, but both columns share a fixed desktop stage height for visual balance.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Swiper CDN 14.0.7, pytest/BeautifulSoup contract tests.

## Global Constraints
- Keep `noindex,nofollow`.
- Global Finder and Vehicle Finder stay independent.
- Global Finder must not mutate `#article-swiper`.
- Content Type tabs must not mutate Global Finder state.
- Global results use a 3-column grid on desktop, 2 columns on tablet, 1 column on mobile.
- Render 6 Global Finder results at a time with an explicit load-more button.
- Remove prototype copy `Mockup hiện có 29 bài viết minh hoạ để thử Global Finder.`
- Press lead and right 2x2 rail must have equal desktop stage height.
- Preserve all existing V2.6.4 media-only video, branch, CTA, vehicle, taxonomy, and accessibility contracts.

### Task 1: Global Finder result surface
- Add `#global-search-results`, status, grid, empty/help state, and load-more button under the Global Finder form.
- Add responsive result-grid CSS.

### Task 2: Decouple filtering state
- Refactor `filters.js` so Global Finder renders clones to the new result grid only.
- Make Content Type feed filter only by `activeFeedType`.
- Make reset operations independent.
- Keep taxonomy topic click routing to Global Finder results.

### Task 3: Press visual balance
- Set a shared desktop stage height for lead and secondary rail.
- Clamp lead/secondary titles and normalize metadata.
- Preserve 2x2 Swiper behavior and mobile stacking.

### Task 4: Verification and packaging
- Run full pytest suite and JS syntax checks.
- Audit duplicate ids, missing alt, missing button type, hash-only links.
- Build standalone HTML with embedded local CSS/JS/assets while retaining Swiper CDN.
- Package ZIP and audit report.
