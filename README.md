# CALDON™ Website

A modern, static website built with Astro for CALDON™ property development and investment.

## 🚀 Deployment

This site is configured for deployment on Netlify.

### Prerequisites

- Node.js 20+ installed locally
- A GitHub account
- A Netlify account

### Deployment Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will auto-detect the build settings from `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `dist`
     - Node version: 20
   - Click "Deploy site"

3. **Enable Netlify Identity & Git Gateway** (for CMS)
   - In Netlify dashboard, go to **Identity** → Enable Identity
   - Go to **Identity** → **Services** → Enable **Git Gateway**
   - Go to **Site settings** → **Identity** → **Registration preferences** → Set to "Invite only" or "Open" as needed
   - Invite yourself as a user to access the CMS at `/admin`

4. **Configure Custom Domain** (optional)
   - In Netlify dashboard, go to **Domain settings**
   - Add your custom domain (e.g., `caldon.com.au`)
   - Update `site` in `astro.config.mjs` to match your domain
   - Configure DNS records as instructed by Netlify

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── admin/              # Netlify CMS configuration
│   ├── config.yml     # CMS schema and settings
│   └── index.html     # CMS admin interface
├── public/            # Static assets (images, PDFs, etc.)
├── src/
│   ├── components/    # Astro components
│   ├── content/       # Content collections (projects, news)
│   ├── layouts/       # Page layouts
│   └── pages/         # Route pages
├── astro.config.mjs   # Astro configuration
└── netlify.toml       # Netlify deployment configuration
```

## 🔐 Content Management

The site uses Netlify CMS (Decap CMS) for content management:

- Access the CMS at: `https://your-site.netlify.app/admin`
- Content is stored in `src/content/` as Markdown files
- Images are stored in `public/images/projects/`
- Changes are committed directly to your GitHub repository

## ⚙️ Configuration

### Site URL

Update the `site` field in `astro.config.mjs` to match your production domain:

```js
export default defineConfig({
  site: 'https://your-domain.com',
  output: 'static',
});
```

### Build Settings

All build settings are configured in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20

## 📝 Notes

- The `dist/` folder is generated during build and should not be committed
- Environment variables are not required for this static site
- All content is version-controlled in Git
- The CMS uses Git Gateway for authentication

