# Fortecon Visual System v2

Date: 2026-03-26

## Design Tokens

### Color System

**Primary Brand**

- orange: #f6b93b (CTA, accents, highlights)
- orange-light: #ffd93d (hover states, light backgrounds)
- orange-dark: #e8a828 (active, dimmed states)

**Neutral Foundation**

- navy: #0a192f (primary dark text, hero background)
- navy-light: #112240 (secondary dark surface)
- navy-dark: #051422 (deepest dark)
- white: #ffffff (text on dark, pure surfaces)
- gray-50: #f9fafb (lightest neutral surface)
- gray-100: #f3f4f6 (light surface)
- gray-200: #e5e7eb (dividers, borders)
- gray-300: #d1d5db (secondary borders)
- gray-400: #9ca3af (secondary text)
- gray-600: #4b5563 (body text on light)

**Semantic**

- brand: #25D366 (Forte Energy badge)
- success: #10b981 (positive feedback)
- error: #ef4444 (form errors, alerts)
- warning: #f59e0b (cautions)

### Typography

**Font Family**

- Primary sans-serif: Inter, system-ui, sans-serif
- Weight progression: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Scale (px)**

- h1: 48px (7rem) / 56px (7xl) on desktop; 32px (2xl) on mobile
- h2: 36px (4xl) / 48px (5xl) on desktop; 28px (2xl) on mobile
- h3: 24px (2xl) / 28px (3xl) on desktop; 20px (xl) on mobile
- body-lg: 18px (lg) / 20px (xl) on desktop
- body: 16px (base) on all screens
- body-sm: 14px (sm) on all screens
- caption: 12px (xs) on all screens

**Line Height**

- Headings: 1.1 tight
- Body text: 1.6 relaxed (for readability)
- UI/labels: 1.4 normal

### Spacing (px)

- 4, 8, 12, 16, 24, 32, 48, 64, 96
- Sections: 96 (section-space), 80 (section-space-compact)
- Gaps: 16 standard, 12 compact, 24 generous

### Shadows

- sm: 0 1px 2px rgba(0, 0, 0, 0.05)
- md: 0 4px 6px rgba(0, 0, 0, 0.1)
- lg: 0 10px 15px rgba(0, 0, 0, 0.1)
- xl: 0 20px 25px rgba(0, 0, 0, 0.15)
- 2xl: 0 25px 50px rgba(0, 0, 0, 0.25)

### Border Radius

- sm: 6px
- md: 8px
- lg: 12px
- xl: 16px
- 2xl: 20px
- full: 9999px

### Transitions

- Fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
- Base: 300ms cubic-bezier(0.4, 0, 0.2, 1)
- Slow: 500ms cubic-bezier(0.4, 0, 0.2, 1)

## Component Standards

### CTAs

- Primary (Full): bg-orange, px-8 py-4, rounded-lg, hover:bg-orange-dark, focus ring 2px orange-light offset 2px
- Primary (Small): bg-orange, px-6 py-3, rounded-lg, same focus
- Outline: border-2 border-white, text-white, hover:bg-white hover:text-navy
- Disabled: bg-gray-400, cursor-not-allowed (no hover/active changes)

### Cards

- Shadow: md, rounded-lg/xl
- Hover: shadow-lg, scale 1.02 (optional for interactive)
- Border: 1px rgba(0,0,0,0.1) on light; rgba(246,185,59,0.2) on dark

### Form Controls

- Input: bg-gray-50 on light, bg-navy-light on dark; border-gray-200/gray-700; focus:border-orange; focus ring orange/40
- Focus ring: 2px offset 0 (no offset)
- Placeholder: gray-400

### Section Headers

- Title: heading-display text-navy/white mb-4
- Subtitle: text-xl text-gray-600/gray-300 max-w-2xl mx-auto
- Badge: px-4 py-2 bg-orange/10 text-orange rounded-full text-sm font-semibold

## Layout Grid

- Max content width: 80rem (1280px)
- Padding: 16px (sm), 24px (md), 32px (lg) per screen size
- Section vertical rhythm: 96px headers + 64px content + 96px footer
- Component grid: 8px baseline

## Accessibility Standards

- Focus rings: High contrast 2px outline
- Color contrast: WCAG AA minimum (4.5:1 body, 3:1 large text)
- Motion: prefers-reduced-motion respected (transitions set to 0ms)
- Touch targets: Minimum 44px height/width

## Responsive Breakpoints

- mobile: 0–639px
- tablet: 640–1023px
- desktop: 1024px+

Target 3 breakpoints: sm (640px), lg (1024px)
