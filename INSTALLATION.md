# Fortecon Website - Installation & Setup Guide

## 📦 Step 1: Install Dependencies

Before running the development server, you need to install all the required dependencies.

Open your terminal in the project directory and run:

```bash
npm install
```

This will install:

- **React** (v19.2.3) - UI library
- **React DOM** (v19.2.3) - React rendering
- **Vite** (v7.2.7) - Build tool
- **Tailwind CSS** (v3.4.17) - Utility-first CSS framework
- **PostCSS** (v8.4.49) - CSS processing
- **Autoprefixer** (v10.4.20) - CSS vendor prefixes
- **Framer Motion** (v11.15.0) - Animation library
- **Lucide React** (v0.469.0) - Icon library

## 🎨 Step 2: What's New

The website has been completely redesigned with:

### New Components

- ✅ **Navbar** - Sticky navigation with transparent-to-solid scroll effect
- ✅ **Hero** - Full-screen hero with background image and animations
- ✅ **About** - Side-by-side layout with company information
- ✅ **Values** - Grid of 5 core company values with icons
- ✅ **Services** - 4-column service process grid
- ✅ **Projects** - Featured projects showcase
- ✅ **Clients** - Animated scrolling client carousel
- ✅ **Team** - Leadership team profiles with hover effects
- ✅ **Contact** - Enhanced contact form with office info
- ✅ **Footer** - Comprehensive footer with company details

### Design Features

- 🎨 **Color Scheme**: Deep Navy Blue (#0a192f) + Industrial Orange (#f6b93b)
- ⚡ **Animations**: Framer Motion for smooth, professional animations
- 📱 **Responsive**: Fully responsive on all devices
- 🎭 **Modern UI**: Clean, professional design inspired by industry leaders

## 🚀 Step 3: Run Development Server

After installing dependencies, start the development server:

```bash
npm run dev
```

The website will be available at: **http://localhost:5173**

## 🏗️ Step 4: Build for Production

When ready to deploy, create a production build:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## 👀 Step 5: Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 🎯 Important Notes

### ⚠️ Do NOT run these commands yet (as requested):

- ❌ Don't commit to GitHub yet
- ❌ Don't start the server yet

### 📝 Next Steps:

1. **Review the changes** - Check all component files
2. **Test locally** - When ready, run `npm run dev`
3. **Customize content** - Update text, images, and contact info
4. **Add real images** - Replace placeholder images with your own
5. **Test responsiveness** - Check on different devices
6. **Deploy** - Push to GitHub when satisfied

## 📁 File Structure

```
src/
├── assets/
│   └── styles.css          # Tailwind CSS base styles
├── components/
│   ├── Navbar.jsx          # ✅ Sticky navigation
│   ├── Hero.jsx            # ✅ Full-screen hero
│   ├── About.jsx           # ✅ Side-by-side layout
│   ├── Values.jsx          # ✅ NEW - Core values grid
│   ├── Services.jsx        # ✅ 4-column service grid
│   ├── Projects.jsx        # ✅ NEW - Featured projects
│   ├── Clients.jsx         # ✅ NEW - Client carousel
│   ├── Team.jsx            # ✅ NEW - Leadership team
│   ├── Contact.jsx         # ✅ Enhanced contact form
│   └── Footer.jsx          # ✅ Comprehensive footer
├── App.jsx                 # Main app component
└── main.jsx                # Entry point
```

## 🎨 Customization Guide

### Update Company Information

1. **Contact Details** (in Contact.jsx and Footer.jsx):

   - Phone numbers
   - Email addresses
   - Office addresses

2. **Team Members** (in Team.jsx):

   - Update names
   - Add real photos
   - Update roles and descriptions

3. **Projects** (in Projects.jsx):

   - Add real project images
   - Update project details
   - Customize capacity and locations

4. **Clients** (in Clients.jsx):
   - Add client logos
   - Update client names

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  navy: {
    DEFAULT: '#0a192f',  // Change this
  },
  orange: {
    DEFAULT: '#f6b93b',  // Change this
  },
}
```

## 🐛 Troubleshooting

### If you see errors about missing modules:

```bash
npm install
```

### If port 5173 is already in use:

The dev server will automatically use the next available port.

### If styles don't load:

Make sure Tailwind CSS is properly configured in `tailwind.config.js` and `postcss.config.js`.

## 📞 Support

For any questions or issues, contact the development team.

---

**Fortecon Engineering & Development**  
_Choose Your Life_
