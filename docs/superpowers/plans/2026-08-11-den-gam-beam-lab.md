# Beam Lab Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a source-grounded visual Beam Lab library to the standalone fog-light hub.

**Architecture:** Keep the existing single-file HTML architecture. Add scoped CSS for a two-card evidence library and add source-backed markup inside `#evidence`; no JavaScript or remote API is required. Extend the existing static verification script with assertions for the library and its evidence disclaimer.

**Tech Stack:** Static HTML, CSS, Node.js `assert` test.

## Global Constraints

- Use only images and URLs already published in the Auto365 VinFast VF8 case.
- Label all visual evidence as reference-only; do not infer lux, range, or universal compatibility.
- Keep the mobile layout one column and preserve the existing 14px mobile reading scale.

---

### Task 1: Add a failing Beam Lab contract test

**Files:**
- Modify: `auto365/den-gam-dang-roi/tests/verify-v21-mobile-density.js`

**Interfaces:**
- Consumes: rendered page source as `page`.
- Produces: assertions that protect the `beam-library` section and its source/limitation copy.

- [ ] **Step 1: Write the failing test**

```js
assert.match(page, /class="beam-library"/, 'Beam Lab must expose a visual evidence library');
assert.match(page, /Ảnh tham khảo từ bài case đã công bố/, 'Beam Lab must label images as reference-only');
assert.match(page, /den-tro-sang-titan-m30-ultra-v2-cho-vinfast-vf8-gia-thong-so/, 'Beam Lab must link to its published source case');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node auto365/den-gam-dang-roi/tests/verify-v21-mobile-density.js`

Expected: FAIL because `beam-library` does not exist.

- [ ] **Step 3: Implement the library markup and styles**

```html
<div class="beam-library" aria-label="Thư viện ảnh Beam Lab tham khảo">
  <article class="beam-library-card">...</article>
</div>
```

```css
.beam-library{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
@media(max-width:760px){.beam-library{grid-template-columns:1fr}}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node auto365/den-gam-dang-roi/tests/verify-v21-mobile-density.js`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add auto365/den-gam-dang-roi/Auto365_Den_Gam_Dang_Roi_V2.1_Authority_10-10.html auto365/den-gam-dang-roi/tests/verify-v21-mobile-density.js
git commit -m "feat: add source-grounded beam library"
```
