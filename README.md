# Medatech Website

This project is a Vite + React website.

## Run locally

1. Install dependencies:
   - `npm install`
2. Start development server:
   - `npm run dev`
3. Build for production:
   - `npm run build`

## Project structure

- `src/app/`
  - App bootstrapping and router setup
- `src/layouts/`
  - Shared page layouts (header wrapper)
- `src/features/`
  - Feature-based pages:
    - `home/pages/HomePage.tsx`
    - `team/pages/TeamPage.tsx`
    - `how-it-works/pages/HowItWorksPage.tsx`
    - `service/pages/ServicePage.tsx`
- `src/components/`
  - Shared UI sections and reusable components
- `src/components/ui/`
  - UI primitives
- `src/assets/`
  - Static assets

## Notes

This refactor reorganizes folders and imports only.
No visual layout, styling, or page content behavior was intentionally changed.
