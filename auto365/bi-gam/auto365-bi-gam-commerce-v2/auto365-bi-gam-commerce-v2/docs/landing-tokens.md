# Auto365 Bi Gầm — Landing Tokens v1

## 1. Design direction

**Page type:** Commercial Category Hub / Product Discovery Landing Page.

**Primary job:** help a driver find, filter, compare and contact Auto365 about a suitable fog-projector configuration before reading deep educational content.

**Visual direction:** automotive retail + technical authority. Dense enough for commerce, cleaner than a marketplace, less editorial than `/den-gam-dang-roi`.

**Anti-patterns to avoid**
- oversized hero that hides products below the fold;
- repeated bento cards with no hierarchy;
- decorative gradients everywhere;
- one-size-fits-all filter on desktop/mobile;
- SEO content wall before product discovery;
- product cards carrying every technical field;
- multiple red shades invented ad hoc.

## 2. Token architecture

Following UI UX Pro Max design-system guidance:

`Primitive → Semantic → Component`

### Primitive
Raw color, spacing, radius, typography and elevation values.

### Semantic
Purpose aliases such as `surface`, `text`, `brand`, `border`, `focus`, `success`.

### Component
Specific aliases for product cards, finder fields, filter controls, compare bar, badges and CTA.

## 3. Core scales

### Color
- Brand red: `#E31D2B`
- Brand dark red: `#B90F1C`
- Ink: `#101114`
- Muted text: `#62666D`
- Surface: `#FFFFFF`
- Surface soft: `#F5F6F8`
- Border: `#E2E4E8`
- Success: `#17824A`
- Warning: `#B76A00`

### Typography
System-first font stack for CMS safety:
`Inter, Arial, Helvetica, sans-serif`

Scale: 12 / 13 / 14 / 16 / 18 / 22 / 28 / 36 / 48.

### Spacing
4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 56 / 72.

### Radius
6 / 10 / 14 / 18 / pill.

### Container
- max content width: 1240px
- desktop page gutter: 24px
- mobile gutter: 16px
- filter sidebar: 250px
- commerce gap: 22px

## 4. Component tokens

### Product card
- media aspect: 4:3
- card radius: 14px
- card border: 1px solid semantic border
- title clamp: 2 lines
- technical facts: max 3 lines
- price: 20px / bold
- desktop: 3 columns inside product area
- tablet: 2 columns
- mobile: 2 compact columns ≥ 360px; 1 column < 340px

### Finder
- desktop: five fields + action in one row when space allows
- mobile: two-column field grid, action full width
- active recommendation state uses brand-tint background, not solid-red container

### Filter
- desktop: sticky left sidebar
- mobile: drawer / bottom-sheet simulation
- only high-decision filters are exposed initially: brand, price, lens, color temp, warranty, power
- long-tail technical filters live under “More technical filters”.

### Compare
- max 3 products
- persistent bottom bar after first selection
- compare button disabled below 2 selections
- mobile bar uses product count, not thumbnails

## 5. Responsive behavior

### Desktop ≥ 1180
- filter sidebar + 3-column cards
- product finder inline
- compare bar width constrained to container

### Tablet 768–1179
- filter becomes toolbar/drawer
- 2-column product grid
- finder wraps

### Mobile < 768
- no sidebar
- 2-column compact product grid where practical
- filter/sort toolbar sticky below header
- compare bar simplified
- horizontal intent chips
- section spacing reduced to 36–44px

## 6. Interaction states

Every interactive element must define:
- default
- hover
- focus-visible
- active/selected
- disabled
- loading/empty where relevant

Motion: 140–220ms functional transitions only. Respect `prefers-reduced-motion`.

## 7. SEO / GEO / AI Search placement rule

Authority content is not a separate “SEO block”. It appears where it helps a decision:
- lens answer after lens-related product discovery;
- color-temperature answer near use-case recommendations;
- comparison table after product shortlist;
- beam-pattern evidence after technical guide;
- reviewer/methodology before FAQ;
- FAQ answer-first at the bottom.

## 8. Source-of-truth rule

No component may introduce a new color, radius, spacing or font size without adding it to tokens first. Production CSS should reference semantic/component aliases only.
