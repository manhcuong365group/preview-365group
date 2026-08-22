# Product / Filter Data Model

## Core product fields
- id
- slug
- name
- brand
- price / oldPrice / contactPrice
- badges
- lens
- temperatures[]
- cosPower
- highPower
- warranty
- voltage
- waterproof
- features[]
- useCases[]
- image
- url

## High-priority filters
1. Brand
2. Price
3. Lens size
4. Color temperature
5. Usage scenario
6. Warranty
7. Low/high beam power

## Secondary technical filters
Voltage, waterproof rating, cooling, LED architecture, fitting position.

## Finder mapping
Finder does not hardcode “best product”. It translates vehicle/use/budget answers into filter + ranking weights, then explains why the first results match.

## Compare constraint
Maximum 3 products. Compare includes missing-data state instead of inventing values.
