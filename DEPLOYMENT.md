# GitHub Pages Deployment Guide

This Next.js app is configured for static export and deployment to GitHub Pages.

## Setup Instructions

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 2. Configure Custom Domain (if using www.2kmj-studios.com)
1. In GitHub Pages settings, enter your custom domain: `www.2kmj-studios.com`
2. The CNAME file in the `public` folder will be automatically included in the build
3. Configure your DNS settings:
   - Add a CNAME record pointing `www.2kmj-studios.com` to `YOUR_USERNAME.github.io`
   - Or add A records if using the apex domain

### 3. Deploy
The site will automatically deploy when you push to the `main` branch. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- Build the static site
- Deploy it to GitHub Pages

### 4. Manual Deployment
To manually trigger a deployment:
```bash
npm run build
```
Then commit and push the `out` folder (though GitHub Actions handles this automatically).

## Contact Form
The contact form now uses a `mailto:` link that opens the user's email client. To use a form service instead:

1. **Option A: Use Formspree** (Recommended)
   - Sign up at https://formspree.io
   - Get your form endpoint URL
   - Update `src/app/page.tsx` in the `handleSubmit` function to use the Formspree endpoint

2. **Option B: Use EmailJS**
   - Sign up at https://www.emailjs.com
   - Configure your email service
   - Update the form to use EmailJS SDK

## Notes
- The API route (`src/app/api/contact/route.ts`) is no longer used for static export
- Images are set to `unoptimized: true` for static export compatibility
- All static assets are exported to the `out` folder
