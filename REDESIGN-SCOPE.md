# Full Redesign Scope (Selected Track 2)

## Objective

Build a full UX/UI redesign roadmap on top of the already completed SEO/performance foundation while preserving current business messaging and conversion flow.

## Phase 1: Discovery and IA (1 week)

- Audit current section hierarchy and content effectiveness.
- Define updated information architecture for conversion-first storytelling.
- Confirm target personas and primary user journeys.
- Produce navigation and section map for desktop/mobile.

## Phase 2: Visual System (1 week)

- Finalize expanded design token system:
  - Color roles (brand, surfaces, semantic states)
  - Type scale and spacing rules
  - Component variants and interaction states
- Design high-fidelity references for:
  - Hero
  - Services
  - Projects
  - Contact conversion sections

## Phase 3: Component Redesign (1-2 weeks)

- Rebuild key sections with shared reusable primitives:
  - Button
  - Section wrapper
  - Card/grid patterns
  - Form controls and statuses
- Enforce consistent accessibility states and keyboard flows.
- Preserve improved heading hierarchy and metadata strategy.

## Phase 4: Conversion and Analytics (parallel)

- Analytics baseline already scaffolded:
  - src/utils/analytics.js
  - CTA and form event hooks in key components
- Configure production analytics key via env:
  - VITE_GA_ID in deployment environment
- Define dashboard KPIs:
  - Hero CTA click-through rate
  - Navbar quote CTA click-through rate
  - Contact form success/error rate
  - Contact method interaction volume (phone/email/map)

## Phase 5: QA and Launch (3-5 days)

- Lighthouse regression checks (mobile/desktop).
- Accessibility and keyboard navigation pass.
- Cross-device responsive visual verification.
- Final content and metadata sanity check.

## Deliverables

- Updated component library and section templates.
- Final design token documentation.
- Analytics event map and KPI dashboard requirements.
- Launch checklist with rollback plan.

## Implementation Notes

- Keep SPA architecture for this cycle unless migration is separately approved.
- Preserve existing SEO schema and social metadata improvements.
- Keep bundle size discipline by retaining lazy-loaded section boundaries.
