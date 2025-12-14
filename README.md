# Fortecon - Solar Energy Solutions

A modern, responsive website for Fortecon Solar Energy Solutions, built with React and Vite. This site showcases solar panel installation services, energy consultation, maintenance, and battery storage solutions for residential and commercial properties.

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and Vite for fast development
- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Smooth Animations**: CSS animations and smooth scroll navigation
- **Contact Form**: Interactive contact form for customer inquiries
- **Service Showcase**: Detailed presentation of solar energy services
- **SEO Optimized**: Meta tags, robots.txt, and sitemap.xml for better search visibility
- **Fast Performance**: Optimized build with Vite for production deployment

## 🛠️ Technologies Used

- **Frontend**: React 19.2.3, JavaScript ES6+
- **Build Tool**: Vite 7.2.7
- **Styling**: Custom CSS with animations
- **Deployment**: GitHub Pages with GitHub Actions
- **Custom Domain**: www.fortecon.tech

## 📋 Sections

1. **Hero**: Welcome section with call-to-action button
2. **Services**: Solar panel installation, energy consultation, maintenance, and battery storage
3. **About**: Company background and statistics
4. **Contact**: Contact form for inquiries
5. **Footer**: Copyright information

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm (comes with Node.js)

### Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/maaz404/fortecon.git
   cd fortecon
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

4. **Build for production**

   ```bash
   npm run build
   ```

   The production build will be created in the `dist/` directory.

5. **Preview production build**

   ```bash
   npm run preview
   ```

## 🌐 Deployment

The website automatically deploys to GitHub Pages using GitHub Actions whenever you push to the main branch.

- **Live Site**: [https://www.fortecon.tech](https://www.fortecon.tech)
- **GitHub Pages Source**: GitHub Actions
- **Custom Domain**: www.fortecon.tech (configured in public/CNAME)

### Deployment Workflow

The `.github/workflows/pages.yml` file handles automatic deployment:
- Triggers on push to main branch or manual workflow dispatch
- Installs dependencies with `npm ci`
- Builds the project with `npm run build`
- Uploads the `dist/` folder as an artifact
- Deploys to GitHub Pages using `actions/deploy-pages@v4`

## 📁 Project Structure

```
fortecon/
├── .github/
│   └── workflows/
│       └── pages.yml         # GitHub Actions deployment workflow
├── public/
│   ├── CNAME                 # Custom domain configuration
│   ├── robots.txt            # Search engine crawling rules
│   ├── sitemap.xml           # Site structure for SEO
│   └── 404.html              # Custom 404 page
├── src/
│   ├── assets/
│   │   └── styles.css        # Global styles and animations
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation with smooth scroll
│   │   ├── Hero.jsx          # Hero section
│   │   ├── Services.jsx      # Services showcase
│   │   ├── About.jsx         # About section with stats
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Footer component
│   ├── pages/
│   │   └── NotFound.jsx      # 404 page component
│   ├── App.jsx               # Main application component
│   └── main.jsx              # Application entry point
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🎨 Customization

To customize the website:

1. Update company information in components
2. Modify services in `src/components/Services.jsx`
3. Update statistics in `src/components/About.jsx`
4. Customize colors and styles in `src/assets/styles.css`
5. Update contact information in `src/components/Footer.jsx`
6. Modify meta tags in `index.html` for SEO

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 🖥️ Desktop (1024px+)

## 🔧 Configuration

### GitHub Pages Settings

Ensure your repository has the following settings:
1. Go to Settings > Pages
2. Source: GitHub Actions
3. Custom domain: www.fortecon.tech
4. Enforce HTTPS: ✓ (enabled after DNS validation)

### DNS Configuration

For custom domain setup:
1. Add CNAME record pointing to `maaz404.github.io`
2. Or add A records for GitHub Pages IPs
3. Wait for DNS propagation
4. Enable "Enforce HTTPS" in repository settings

## 📞 Contact

- **Website**: [www.fortecon.tech](https://www.fortecon.tech)
- **Repository**: [github.com/maaz404/fortecon](https://github.com/maaz404/fortecon)

## 📝 License

Copyright © 2025 Fortecon Solar Energy. All rights reserved.

---

Built with ⚡ by Fortecon Solar Energy Solutions
