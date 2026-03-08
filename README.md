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

git clone <repository-url>

cd medatech-website

npm install

If you encounter dependency conflicts during installation, use:

npm install --legacy-peer-deps

## Development

Start the development server.

npm run dev

The site will be available locally at:

http://localhost:5173

Changes will automatically reload during development.

## Build

To create the production build:

npm run build

This generates the optimized build inside the `dist` folder.

## Deployment

### GitHub Pages

1. Push the repository to GitHub.
2. Enable GitHub Pages in the repository settings.
3. Set the deployment branch to the one containing the build output (commonly `gh-pages` or `main` depending on configuration).

### Custom Domain (GoDaddy)

If using a GoDaddy domain:

1. Go to **GoDaddy DNS settings**
2. Add the following A records:

185.199.108.153  
185.199.109.153  
185.199.110.153  
185.199.111.153  

3. Add a CNAME record:

Name  
www

Value  
your-github-username.github.io

4. In the GitHub repository settings, add your domain under **Custom Domain**.

Example:

vitamedai.com

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