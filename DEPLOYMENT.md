# GitHub Pages Deployment Guide

This document provides instructions for deploying and managing the Fortecon website on GitHub Pages with a custom domain.

## ✅ Current Configuration

The repository is now fully configured for GitHub Pages deployment with the following setup:

### Files Included in Build
- ✅ `CNAME` - Custom domain configuration (www.fortecon.tech)
- ✅ `404.html` - SPA routing fallback page
- ✅ `robots.txt` - Search engine crawling rules
- ✅ `sitemap.xml` - Site structure for SEO
- ✅ `index.html` - Main application with redirect recovery
- ✅ `assets/` - JavaScript and CSS bundles

### GitHub Actions Workflow
The `.github/workflows/pages.yml` workflow is configured to:
- Trigger on push to `main` branch or manual dispatch
- Use Node.js 20 for builds
- Run `npm ci` to install dependencies
- Run `npm run build` to create production build
- Upload the `dist/` folder as artifact
- Deploy to GitHub Pages with proper permissions

## 🚀 Post-Merge Deployment Steps

After merging this PR, follow these steps to complete the deployment:

### 1. Configure GitHub Pages Source

1. Go to your repository on GitHub: `https://github.com/maaz404/fortecon`
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"** from the dropdown
4. Save the changes

### 2. Verify Custom Domain Configuration

1. In the same **Pages** settings page
2. Under **Custom domain**, verify it shows: `www.fortecon.tech`
3. If not, enter `www.fortecon.tech` and click **Save**
4. Wait for DNS check to complete (may take a few minutes)

### 3. DNS Configuration

Ensure your DNS provider has the following records configured:

#### Apex Domain (fortecon.tech) - A Records
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### WWW Subdomain (www.fortecon.tech) - CNAME Record
```
www.fortecon.tech → maaz404.github.io
```

**Note**: DNS propagation can take 24-48 hours. Use `dig www.fortecon.tech` to check status.

### 4. Enable HTTPS

1. After DNS validation completes (green checkmark in Pages settings)
2. Check the box for **"Enforce HTTPS"**
3. Wait for the SSL certificate to be provisioned (usually takes a few minutes)

### 5. Trigger First Deployment

1. Go to **Actions** tab in your repository
2. Find the **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** button
4. Select the `main` branch
5. Click **"Run workflow"**
6. Wait for the workflow to complete (usually 2-3 minutes)

## 🔍 Verification

After deployment completes, verify the site is working:

1. **Visit the live site**: https://www.fortecon.tech
2. **Check HTTPS**: Verify the lock icon in the browser
3. **Test deep linking**: Try navigating directly to any section
4. **Check mobile responsive**: Test on different device sizes
5. **Verify SEO**: Check that robots.txt and sitemap.xml are accessible

## 🔧 Troubleshooting

### Issue: InvalidDNSError

**Symptoms**: GitHub shows "InvalidDNSError" or "DNS check not successful"

**Solutions**:
1. Verify DNS records are correct using `dig` or online DNS checker
2. Wait for full DNS propagation (24-48 hours)
3. Try temporarily disabling DNSSEC if enabled on your domain
4. Remove and re-add the custom domain in GitHub settings

### Issue: 404 on Page Refresh

**Status**: ✅ Fixed - The SPA routing solution handles this automatically

**How it works**:
- GitHub Pages serves `404.html` for non-existent paths
- `404.html` stores the requested path in sessionStorage
- `404.html` redirects to `/` (index.html)
- `index.html` checks sessionStorage and restores the correct URL
- React app loads and displays the correct content

### Issue: Build Fails in GitHub Actions

**Solutions**:
1. Check the Actions logs for specific error messages
2. Ensure all dependencies are in `package.json`
3. Test the build locally with `npm run build`
4. Verify Node.js version is 20.x

### Issue: Custom Domain Not Working

**Solutions**:
1. Verify `CNAME` file contains exactly: `www.fortecon.tech`
2. Check DNS records are pointing to correct GitHub IPs/domain
3. Wait for DNS propagation
4. Try removing and re-adding custom domain in GitHub settings

## 📊 Monitoring

### Check Deployment Status
- **Actions Tab**: Monitor workflow runs and build status
- **Deployments**: View deployment history in repository sidebar
- **Pages Settings**: Check DNS status and HTTPS certificate

### Analytics (Optional)
Consider adding:
- Google Analytics
- Google Search Console
- Cloudflare Analytics (if using Cloudflare)

## 🔄 Future Updates

To deploy changes:
1. Make changes in a feature branch
2. Test locally with `npm run dev`
3. Build and test with `npm run build` && `npm run preview`
4. Create a pull request to `main`
5. After merge, GitHub Actions automatically deploys
6. Check the Actions tab to monitor deployment progress

## 📝 Notes

- The `dist/` folder is git-ignored and only used for builds
- All static assets in `public/` are copied to `dist/` during build
- The workflow uses `npm ci` for reproducible builds
- Vite automatically handles asset optimization and hashing
- The SPA routing solution is security-hardened against XSS attacks

## 📞 Support

If you encounter issues not covered here:
1. Check the GitHub Actions logs for detailed error messages
2. Review the [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Consult the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
4. Open an issue in the repository with relevant error messages

---

**Last Updated**: 2025-12-14
**Deployment Method**: GitHub Actions
**Build Tool**: Vite 7.2.7
**Node Version**: 20.x
