# 🎨 Fortecon Website - Visual Component Guide

## 📐 Complete Page Layout (Top to Bottom)

```
┌─────────────────────────────────────────────────────────┐
│  1. NAVBAR (Sticky)                                     │
│  [FORTECON] ─────────────── [Home|About|Services|...]   │
│  • Transparent at top, Navy Blue on scroll               │
│  • Mobile: Hamburger menu                                │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  2. HERO SECTION (Full Screen)                          │
│                                                           │
│         STANDARD WITH INNOVATION                          │
│     Pakistan's First Service Oriented Solar Company      │
│                                                           │
│              [ Our Services → ]                           │
│                                                           │
│  • Background: Solar panel image with dark overlay       │
│  • Scroll indicator at bottom                            │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  3. ABOUT SECTION (White Background)                     │
│  ┌─────────────────────┐  ┌─────────────────────┐      │
│  │  About Fortecon     │  │                     │      │
│  │                     │  │   [Project Image]   │      │
│  │  • Established 2019 │  │                     │      │
│  │  • PEC Certified    │  │   Stats Overlay:    │      │
│  │  • (Pvt) Ltd        │  │   5Y | 100+ | 50+   │      │
│  │                     │  │                     │      │
│  │  [PEC Badge]        │  │                     │      │
│  └─────────────────────┘  └─────────────────────┘      │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  4. VALUES GRID (Gray Background)                        │
│                                                           │
│        Our Core Values                                    │
│                                                           │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐│
│  │ [Icon] │ │ [Icon] │ │ [Icon] │ │ [Icon] │ │ [Icon] ││
│  │Quality │ │Reliab..│ │Innova..│ │Divers..│ │ Trust  ││
│  │        │ │        │ │        │ │        │ │        ││
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘│
│                                                           │
│  • 5 cards with hover effects                            │
│  • Icons from Lucide React                               │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  5. SERVICES SECTION (Navy Background)                   │
│                                                           │
│            Our Services                                   │
│                                                           │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                │
│  │ [1]  │  │ [2]  │  │ [3]  │  │ [4]  │                │
│  │Search│  │Design│  │Constr│  │Opera │                │
│  │      │  │      │  │      │  │      │                │
│  └──────┘  └──────┘  └──────┘  └──────┘                │
│                                                           │
│  • 4-column grid with numbered badges                    │
│  • Border changes on hover                               │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  6. PROJECTS SECTION (White Background)                  │
│                                                           │
│        Featured Projects                                  │
│                                                           │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                       │
│  │ ▮▮▮ │ │ ▮▮▮ │ │ ▮▮▮ │ │ ▮▮▮ │                       │
│  │OGDCL│ │ FBR │ │COMST│ │ NHA │                       │
│  │500kW│ │350kW│ │750kW│ │400kW│                       │
│  └─────┘ └─────┘ └─────┘ └─────┘                       │
│                                                           │
│  • Image cards with gradient overlay                     │
│  • Location, capacity, year info                         │
│  • "View Details" button on hover                        │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  7. CLIENT CAROUSEL (White Background)                   │
│                                                           │
│        Our Satisfied Clients                              │
│                                                           │
│  ← ← [OGDCL] [FBR] [NHA] [SPD] [PRIMACO] [COMSATS]... →→│
│           ↑ Infinite scroll animation                     │
│                                                           │
│    ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐                  │
│    │100+ │  │ 50+ │  │15MW+│  │ 98% │                  │
│    │Proj.│  │Clien│  │Capac│  │Satis│                  │
│    └─────┘  └─────┘  └─────┘  └─────┘                  │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  8. LEADERSHIP TEAM (Gray Background)                    │
│                                                           │
│        Our Leadership Team                                │
│                                                           │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐           │
│  │  [Photo]  │  │  [Photo]  │  │  [Photo]  │           │
│  │           │  │           │  │           │           │
│  │  Faizan   │  │  Ehsan    │  │  Noaman   │           │
│  │   CEO     │  │Operations │  │ Projects  │           │
│  │ [in][@]   │  │ [in][@]   │  │ [in][@]   │           │
│  └───────────┘  └───────────┘  └───────────┘           │
│                                                           │
│  • 3 cards with professional photos                      │
│  • Social links appear on hover                          │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  9. CONTACT SECTION (Navy Background)                    │
│                                                           │
│            Get In Touch                                   │
│                                                           │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ Let's Start...   │  │ [Name Field]     │            │
│  │                  │  │ [Email Field]    │            │
│  │ [📞] Phone       │  │ [Phone Field]    │            │
│  │ [✉] Email        │  │ [Message Box]    │            │
│  │ [📍] Rawalpindi  │  │ [Send Button]    │            │
│  │                  │  │                  │            │
│  └──────────────────┘  └──────────────────┘            │
│                                                           │
│  • Split layout: Info left, Form right                   │
│  • Contact cards with icons                              │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│  10. FOOTER (Dark Navy Background)                       │
│                                                           │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐      │
│  │FORTECON │ │ Offices │ │  Links  │ │ Contact │      │
│  │         │ │         │ │         │ │         │      │
│  │Choose   │ │Rawalpind│ │ Home    │ │📞 Phone │      │
│  │Your Life│ │Islamabad│ │ About   │ │✉ Email  │      │
│  │         │ │         │ │ ...     │ │         │      │
│  │[f][t][i]│ │         │ │         │ │PEC Cert.│      │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘      │
│  ─────────────────────────────────────────────────      │
│  © 2025 Fortecon | Privacy | Terms                      │
└─────────────────────────────────────────────────────────┘
```

---

## 🎨 Color Palette

```
Navy Blue Family:
├─ #0a192f  →  Main Navy (Backgrounds, Text)
├─ #112240  →  Light Navy (Cards, Hover)
└─ #020c1b  →  Dark Navy (Footer)

Orange/Yellow Family:
├─ #f6b93b  →  Main Orange (Accents, Buttons)
├─ #ffd93d  →  Light Orange (Hover states)
└─ #e8a828  →  Dark Orange (Active states)

Neutrals:
├─ White     →  #ffffff (Backgrounds)
├─ Gray-50   →  #f9fafb (Alternate sections)
├─ Gray-300  →  Text secondary
└─ Gray-600  →  Body text
```

---

## 📱 Responsive Breakpoints

```
Mobile First Approach:

< 768px (Mobile)
├─ Single column layouts
├─ Hamburger menu
├─ Stacked sections
└─ Touch-optimized spacing

768px - 1024px (Tablet)
├─ 2-column grids
├─ Visible navigation
├─ Increased spacing
└─ Optimized touch targets

> 1024px (Desktop)
├─ Multi-column layouts
├─ Full navigation bar
├─ Maximum 7xl container
└─ Hover effects enabled
```

---

## ⚡ Animation Effects

### Scroll Animations (Framer Motion)

```
Component Enter:
├─ Fade In: opacity 0 → 1
├─ Slide Up: translateY(30px) → 0
└─ Duration: 0.6s - 0.8s

Hover Effects:
├─ Scale: 1 → 1.05
├─ Translate Y: 0 → -10px
├─ Color Transitions: 0.3s
└─ Transform: 0.3s

Scroll Indicators:
├─ Bounce: y [0, 10, 0]
├─ Infinite loop
└─ Duration: 1.5s

Client Carousel:
├─ Translate X: 0 → -50%
├─ Linear timing
├─ Duration: 20s
└─ Infinite loop
```

---

## 🔧 Component Dependencies

```
All Components Use:
├─ framer-motion  (Animations)
├─ lucide-react   (Icons)
└─ tailwindcss    (Styling)

Special Features:
├─ Navbar:     useState, useEffect (scroll detection)
├─ All Cards:  useInView (scroll triggers)
├─ Forms:      useState (form state)
└─ Carousel:   motion.div (infinite animation)
```

---

## 📦 Component Hierarchy

```
App.jsx
├── Navbar.jsx
├── Hero.jsx
├── About.jsx
├── Values.jsx
├── Services.jsx
├── Projects.jsx
├── Clients.jsx
├── Team.jsx
├── Contact.jsx
└── Footer.jsx

Total: 10 Components
All are functional components using React Hooks
```

---

## 🎯 Icon Usage (Lucide React)

```
Navbar:     Menu, X
Hero:       ArrowRight
About:      Award, CheckCircle
Values:     Award, Shield, Lightbulb, Users, Heart
Services:   Search, PenTool, HardHat, Settings
Projects:   MapPin, Calendar, Zap
Team:       Linkedin, Mail
Contact:    Mail, Phone, MapPin, Send
Footer:     Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail
```

---

## 💡 Key Features

### Interactive Elements:

- ✅ Sticky navigation with scroll detection
- ✅ Smooth scroll to sections
- ✅ Mobile hamburger menu
- ✅ Hover effects on all cards
- ✅ Form validation
- ✅ Animated carousel
- ✅ Social media links

### User Experience:

- ✅ Fast loading (Vite optimization)
- ✅ Accessible navigation
- ✅ Clear call-to-actions
- ✅ Visual feedback on interactions
- ✅ Mobile-friendly touch targets
- ✅ Readable typography
- ✅ Consistent spacing

---

## 📏 Spacing System

```
Padding/Margin Scale (Tailwind):
├─ py-20   →  80px vertical (sections)
├─ py-16   →  64px vertical (subsections)
├─ py-8    →  32px vertical (cards)
├─ gap-8   →  32px gap (grids)
├─ mb-16   →  64px bottom margin (titles)
└─ space-y-6  →  24px vertical spacing (forms)

Container:
├─ max-w-7xl  →  1280px max width
└─ px-4 sm:px-6 lg:px-8  →  Responsive padding
```

---

This visual guide shows exactly how your website is structured! 🎨

**Next Step**: Run `npm install` and `npm run dev` to see it live!
