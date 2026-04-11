# VitaMed Website

This repository contains the VitaMed AI website built using Vite and React.  
It is a modern single page application designed for fast performance and simple deployment using GitHub Pages with a custom domain.

## Tech Stack

React  
Vite  
TypeScript  
Tailwind CSS  
Lucide Icons  

## Setup

Clone the repository and install dependencies.

```bash
git clone <repository-url>
cd VitaMedAI
npm install
```

If you encounter dependency conflicts during installation, use:

```bash
npm install --legacy-peer-deps
```

## Development

Start the development server.

```bash
npm run dev
```

The site is served locally at **http://localhost:3000** (see `server.port` in `vite.config.ts`). The terminal will show the exact URL if it differs. Changes reload automatically during development.

## Build

Create the production bundle:

```bash
npm run build
```

Output is written to the **`dist`** folder.

To preview the production build locally:

```bash
npx vite preview
```

By default, preview runs on **http://localhost:4173** unless configured otherwise.

## Deployment (GitHub Pages)

This project uses the **`gh-pages`** package to publish the contents of **`dist`** to the **`gh-pages`** branch.

1. Ensure your Git remote is set (for example `origin` pointing at GitHub).
2. Deploy:

```bash
npm run deploy
```

This runs `predeploy` (build + copy `dist/index.html` to `dist/404.html` for SPA hosting), then pushes **`dist`** to the **`gh-pages`** branch.

3. In the GitHub repository: **Settings** → **Pages** → **Build and deployment** → set **Source** to **Deploy from a branch**, choose branch **`gh-pages`** and folder **`/ (root)`**, then save.

The site is available at **`https://<username>.github.io/<repository>/`** unless a custom domain is configured. The **`homepage`** field in `package.json` is set to **https://vitamedai.com** for reference.

### Custom domain (GoDaddy)

If using a GoDaddy domain:

1. Go to **GoDaddy DNS settings**
2. Add the following A records:

185.199.108.153  
185.199.109.153  
185.199.110.153  
185.199.111.153  

3. Add a CNAME record:

- **Name:** `www`  
- **Value:** `<your-github-username>.github.io`

4. In the GitHub repository **Pages** settings, add your domain under **Custom domain** (for example `vitamedai.com`). The **`public/CNAME`** file is included in the Vite build for GitHub Pages.

## Project Structure

src/app  
Application bootstrapping and router setup

src/layouts  
Shared layouts including header and footer wrappers

src/features  
Feature based pages

home/pages/HomePage.tsx  
team/pages/TeamPage.tsx  
how-it-works/pages/HowItWorksPage.tsx  
service/pages/ServicePage.tsx  

src/components  
Reusable UI components

src/components/ui  
UI primitives and shared elements

src/assets  
Images and static assets

## Notes

This project uses a feature based folder structure to keep pages and components modular and maintainable.

The refactor mainly reorganized folders and imports.  
No visual layout, styling, or behavior changes were intentionally introduced.
