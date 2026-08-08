# AUTO365 Newsroom V2.6.3 Implementation Plan

Goal: Polish the approved V2.6.2 mockup without changing taxonomy/data architecture.

1. Hero: remove hero media and move newsroom stats into right-side 2x2 grid.
2. Taxonomy: refine 3x2 tiles with right-side supporting image, clear icon/text hierarchy.
3. Swiper controls: position prev/next at left/right vertical center for vehicle/article/video/press rails.
4. Article feed: keep 3x2, remove load-more, enable autoplay with reduced-motion and interaction safeguards.
5. Video: one visible 16:9 video card per slide, autoplay slide transitions, no media autoplay.
6. Press: lead left, secondary swiper right in 2 columns x 2 rows.
7. Branch locator: replace simple action list with regional locator preview, no embedded live map, link to /chi-nhanh.
8. CTA: keep separate final conversion strip for branch/Zalo/hotline.
9. Preserve separate global and vehicle filter states; no data-contract regression.
10. Verify with pytest, node --check, HTML structural audit, ZIP integrity, standalone generation.
