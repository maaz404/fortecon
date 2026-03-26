# Section Redesign Plan

## Priority Order

1. Hero (Week 4 immediate)
2. Services (Week 4 mid)
3. Projects (Week 4 late)
4. Contact (Week 5 early)
5. Polish pass (Week 5 late)

## Hero Redesign (Current Target)

**Current State**

- Strong hero with hero image overlay
- Typewriter effect on key value prop
- Good CTA visibility
- Stats card on desktop

**Improvements**

- Tighten headline spacing and visual hierarchy
- Add subtle gradient overlays for text-on-image readability
- Consolidate feature pills into a 2x3 grid (was 3x3) for better scanning
- Add micro-animation on scroll: fade-in stats card
- Ensure 100% text contrast on mobile

**Changes Required**

- Update feature grid layout in Hero.jsx
- Add scroll-triggered animation for stats card
- Test mobile heading sizes (scale down h1 to 32px on sm)
- Verify button spacing and mobile tap targets

## Services Section Redesign

**Current State**

- 4-column service cards with icons
- Sub-grid for system types (2x2)
- Process timeline at bottom

**Improvements**

- Upgrade card hover effects: scale 1.05 + deeper shadow
- Add animated icon on hover
- Adjust process timeline to be more visual
- Tighten grid gaps and padding for tighter look
- Add category badges or accents on each service card

**Changes Required**

- Services.jsx: enhance card hover and grid layout
- Add more visual breathing room

## Projects Section Redesign

**Current State**

- 3-column grid
- Category filters at top
- Modal opens on click

**Improvements**

- Add project count badge
- Upgrade filter button styles (pills → active state more visible)
- Improve modal image gallery (larger images, better navigation)
- Add subtle color accent on hovered project card

**Changes Required**

- Projects.jsx: filter and card styling
- Modal header and gallery improvements

## Contact Section Redesign

**Current State**

- Left info cards, right form
- Good baseline styling

**Improvements**

- Add form validation states (success/error already in place)
- Improve contact info card visual hierarchy
- Add animated focus states for form inputs
- Consider a small badge or icon for "24-hour response"

**Changes Required**

- Contact.jsx: form input focus states
- Contact info styling refinement

## Global Polish Pass

- Ensure all breakpoints tested (sm, lg, xl)
- Hover/active states consistent across all interactive elements
- Motion accessibility check: prefers-reduced-motion
- Final color contrast audit
