# CR BLK Pro Tailwind UI Kit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply a reusable Tailwind-style Auto365 UI kit across the CR BLK Pro landing page while preserving content, SEO, schema and interactions.

**Architecture:** Keep the static single-page HTML architecture. Add a final token/component CSS layer in `index.html` that overrides legacy declarations by component contract, then add only semantic utility classes where a component needs a distinct variant.

**Tech Stack:** HTML5, inline CSS custom properties, vanilla JavaScript, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-09-03-cr-blk-pro-tailwind-ui-kit-design.md`

## Global Constraints

- Do not change page copy, URLs, JSON-LD, metadata, prices or image sources.
- Preserve FilmMatch, price-card modal opening, case filtering, FAQ and lead form behavior.
- Use only the token scales defined in the approved spec.
- Keep staging index-blocked and do not add runtime dependencies.

---

### Task 1: Establish token and base component CSS

**Files:**
- Modify: `auto365/3m-cr-blk-pro/index.html`

**Interfaces:**
- Produces: CSS variables `--ui-*` and reusable rules for section heading, buttons, cards, chips and form controls.

- [ ] Add semantic colour, spacing, type, radius, shadow and breakpoint tokens to the final CSS layer.
- [ ] Replace arbitrary card/button sizing overrides with component rules using the approved token scale.
- [ ] Verify the document contains one final override layer and no nested style element is introduced.
- [ ] Commit: `feat: add CR BLK Pro UI kit tokens`

### Task 2: Apply layout and card contracts

**Files:**
- Modify: `auto365/3m-cr-blk-pro/index.html`

**Interfaces:**
- Consumes: token/component CSS from Task 1.
- Produces: consistent price, case, system, knowledge and media card presentation.

- [ ] Apply consistent padding, radius, border and elevation to card variants.
- [ ] Apply responsive grid behavior at 640px, 768px and 1024px without changing card content order.
- [ ] Ensure certificates use `object-fit: contain` and regular case thumbnails use purposeful `object-fit: cover`.
- [ ] Commit: `feat: unify CR BLK Pro card layouts`

### Task 3: Apply typography, actions and form contracts

**Files:**
- Modify: `auto365/3m-cr-blk-pro/index.html`

**Interfaces:**
- Consumes: component CSS from Task 1.
- Produces: consistent heading scale, button states, filter chips and form controls.

- [ ] Apply H1/H2/H3/body scale and margin rhythm defined by the spec.
- [ ] Apply 44px minimum touch target, active/focus-visible state and semantic variants for buttons and chips.
- [ ] Apply consistent input/select/textarea label, border and focus rules without altering validation JavaScript.
- [ ] Commit: `feat: standardize CR BLK Pro type and controls`

### Task 4: Verify page behavior and responsive quality

**Files:**
- Modify if required: `auto365/3m-cr-blk-pro/index.html`

**Interfaces:**
- Consumes: completed UI kit layer.
- Produces: verified static page ready for preview deployment.

- [ ] Extract inline JavaScript and run `node --check`.
- [ ] Verify required case configuration text, contact numbers and section headings remain present.
- [ ] Inspect the page at 320px, 375px, 768px, 1024px and 1440px; correct only regressions found.
- [ ] Commit: `fix: finalize CR BLK Pro UI kit responsiveness`
