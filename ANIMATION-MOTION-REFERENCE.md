# 🎨 Visual Design Reference - Animation & Motion Guide

## Animation Patterns Reference

### Icon Animations

#### Spring Rotation (Default)

```javascript
whileHover={{ rotate: 12 }}
transition={{ type: 'spring', stiffness: 300 }}
```

**Used in**: Service card icons, Contact info icons, Footer social icons
**Effect**: Quick, bouncy rotation that feels responsive

#### Icon Scale + Rotate

```javascript
whileHover={{ scale: 1.2, rotate: 12 }}
transition={{ type: 'spring', stiffness: 300 }}
```

**Used in**: Project filter buttons, System type icons
**Effect**: Icon becomes more prominent and playful

---

### Card Hover Effects

#### Service Card (Heavy Lift)

```javascript
Scale: 1.05x (from 1.02x)
Y-offset: -12px (from -10px)
Shadow: shadow-2xl shadow-orange/20
Border: hover:border-orange/50
```

**Effect**: Card feels lifted off the page

#### Project Card (Subtle)

```javascript
Scale: 1.03x
Shadow: shadow-2xl shadow-orange/20
Border: hover:border-orange/30
```

**Effect**: Gentle enlargement, less dramatic than service cards

---

### Text Transitions

#### Link Animation (Underline)

```javascript
::after {
  width: 0 → 100%
  duration: 0.3s ease
  on: :hover
}
```

**Effect**: Underline slides in from left to right

#### Color Transition

```javascript
text-white → text-orange
transition: 0.3s
on: :hover
```

**Effect**: Smooth color shift

---

### Focus States

#### Universal Focus Ring

```css
outline: 2px solid #f6b93b
outline-offset: 2px
border-radius: 4px
```

**Effect**: Clear, high-contrast focus indicator

#### Input Focus Ring

```javascript
focus:ring-2 focus:ring-orange/30
focus:border-orange
focus:scale-[1.01]
```

**Effect**: Subtle glow + slight scale increase

---

### Entrance Animations

#### Fade + Slide Up

```javascript
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

**Used in**: Section headers, initial card loads
**Effect**: Smooth appearance from below

#### Fade + Scale

```javascript
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}
```

**Used in**: Badges, emphasis elements
**Effect**: Quick pop-in entrance

#### Fade + Slide From Side

```javascript
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6 }}
```

**Used in**: Left-column content
**Effect**: Slides in from left

---

### Staggered Animations

#### Child Stagger Pattern

```javascript
containerVariants: {
  visible: {
    transition: { staggerChildren: 0.15 }
  }
}

itemVariants: {
  visible: { y: 0, opacity: 1 }
  hidden: { y: 30, opacity: 0 }
}
```

**Delay between children**: 0.15s
**Effect**: Sequential cascade effect

#### Manual Delay Loop

```javascript
transition={{ delay: 0.9 + index * 0.1 }}
```

**Delay increment**: 0.1s per item
**Effect**: Rapid sequential stagger

---

### Loading & Status States

#### Pulsing Loader

```javascript
animate={{ opacity: [0.5, 1, 0.5] }}
transition={{ duration: 1.5, repeat: Infinity }}
```

**Effect**: Breathing in-and-out opacity

#### Spinning Spinner

```javascript
animate={{ rotate: 360 }}
transition={{ duration: 2, repeat: Infinity }}
```

**Effect**: Continuous smooth rotation

#### Success Animation

```javascript
animate={{ rotate: 360 }}
transition={{ duration: 2, repeat: Infinity }}
```

**Effect**: Rotating checkmark on success

---

### Scroll Interactions

#### Scroll Reveal

```javascript
initial={{ opacity: 0, x: 50 }}
animate={isVisible ? { opacity: 1, x: 0 } : {}}
```

**Trigger**: When element enters viewport
**Effect**: Fades and slides in on scroll

#### Line Reveal

```javascript
initial={{ scaleX: 0 }}
animate={{ scaleX: 1 }}
transition={{ duration: 0.6 }}
style={{ transformOrigin: 'left' }}
```

**Effect**: Line smoothly grows from left to right

---

## Color Application Guide

### Hover States

```css
Default →  Orange (#f6b93b)
White text → White/Orange mixed
Borders →  Orange/50 opacity
Shadows →  shadow-orange/20 (20% opacity)
```

### Focus States

```css
Ring color: Orange (#f6b93b)
Ring opacity: Full (100%)
Ring width: 2px
Offset: 2px
```

### Background Gradients

```css
Light gradients:  from-orange/10 to-orange/5
Dark gradients:   from-orange/20 to-orange/10
Hover gradients:  from-orange/15 to-orange/10
```

---

## Motion Design Principles Applied

### 1. Purposeful Motion

✓ Every animation serves a purpose
✓ Feedback for user actions
✓ Guides attention
✓ No motion for motion's sake

### 2. Natural Timing

✓ Fast: 150ms (micro-interactions)
✓ Base: 300ms (UI animations)
✓ Slow: 500ms (entrance animations)
✓ Spring: Bouncy feel for icons

### 3. Accessibility First

✓ prefers-reduced-motion respected
✓ Clear focus states
✓ keyboard-navigable
✓ High contrast maintained

### 4. Performance Optimized

✓ GPU-accelerated (transform/opacity only)
✓ No layout thrashing
✓ 60fps target on mobile
✓ Minimal CPU overhead

---

## Timing Reference

### Micro-interactions (150ms)

- Hover color changes
- Button press feedback
- Scrollbar interactions

### Standard Animations (300ms)

- Card hover effects
- Icon rotations
- Input focus states

### Entrance Animations (500-600ms)

- Section reveals
- Modal opens
- Page transitions

### Staggered Delays

- Base: 0.05s per item (fast)
- Standard: 0.1s per item (normal)
- Generous: 0.15s per item (dramatic)

---

## Responsive Motion

### Mobile Considerations

- Animations remain smooth
- No motion affects touch interactions
- Hover states become tap feedback
- Performance optimized for devices

### Tablet Adjustments

- Scale effects may be less pronounced
- Stagger delays remain consistent
- Touch + cursor support

### Desktop Enhancements

- Full hover states
- Elaborate entrance animations
- Maximum visual polish

---

## Quick Copy-Paste Templates

### Service Card Hover

```javascript
whileHover={{ y: -12, scale: 1.05, borderColor: 'rgba(246, 185, 59, 0.5)' }}
transition={{ duration: 0.3 }}
className="shadow-lg hover:shadow-2xl hover:shadow-orange/20"
```

### Icon on Hover

```javascript
whileHover={{ scale: 1.2, rotate: 12 }}
transition={{ type: 'spring', stiffness: 300 }}
```

### Form Input Focus

```javascript
whileFocus={{ scale: 1.01 }}
focus:ring-2 focus:ring-orange/30
focus:border-orange
```

### Staggered Fade

```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.1 }}
```

---

## Browser DevTools Tips

### Chrome DevTools Animation Debugging

1. Open DevTools (F12)
2. Go to Sources → Animations
3. Set playback rate to 25% for detailed inspection
4. Pause and step through frame-by-frame

### Firefox Developer Tools

1. Open Inspector
2. Inspect element
3. Go to "Animations" tab
4. Watch animation timeline

### Safari Developer Tools

1. Develop → Show Web Inspector
2. Elements tab → Computed styles
3. Look for transform/opacity changes

---

## Performance Profiling

### Lighthouse Performance Audit

- Target: 90+ performance score
- Animations should not impact score
- Check: GPU-accelerated transforms enabled

### Chrome Performance Tab

1. Open DevTools
2. Performance tab
3. Record while interacting
4. Look for smooth frame rates (60fps)

### Mobile Performance

- Test on actual low-end devices
- Target: Consistent 60fps
- Monitor CPU/GPU usage

---

## A/B Testing Animation Timing

### Faster (150ms)

- Pro: Feels snappy and responsive
- Con: May feel rushed

### Standard (300ms)

- Pro: Natural, professional feel
- Con: May feel slightly slow on fast networks

### Slower (500ms)

- Pro: Feels deliberate and considered
- Con: May feel laggy or unresponsive

**Recommendation**: Stick with standard (300ms) for best balance

---

## Final Checklist for Implementation

- [x] All animations use GPU-accelerated properties
- [x] Timing consistent with motion tokens
- [x] Focus states visible and accessible
- [x] Mobile performance verified
- [x] prefers-reduced-motion supported
- [x] Color applications consistent
- [x] Spring physics realistic (stiffness 300)
- [x] Stagger delays appropriate
- [x] No infinite loops (unless music/branding)
- [x] Accessible to keyboard navigation

---

**Last Updated**: March 26, 2026
**Version**: 1.0
**Status**: Ready for Reference
