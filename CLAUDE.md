# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React + Vite, deployed to GitHub Pages. It showcases projects, skills, and contact information with smooth animations and responsive design.

## Development Commands

### Core Commands
- **Dev server**: `npm run dev` — starts Vite dev server with HMR on http://localhost:5173
- **Build**: `npm run build` — creates optimized production build in `/dist`
- **Preview**: `npm run preview` — locally serve the production build
- **Lint**: `npm run lint` — run ESLint on all JS/JSX files
- **Deploy**: `npm run deploy` — deploy to GitHub Pages (requires `npm run build` first, runs automatically via `predeploy`)

### Workflow
Before creating commits, run `npm run lint` to catch issues. The linter is configured to ignore capitalized variable names (components).

## Architecture & Key Structure

### Component Structure
The app uses a section-based architecture with modular components:
- **Header.jsx**: Sticky navigation bar with brand name and links
- **Hero.jsx**: Hero section with intro, social links, and image placeholder
- **Skills.jsx**: Skills grid/list section
- **Projects.jsx**: Project cards with images, tags, and external links
- **Footer.jsx**: Footer with contact/info

Each component uses Framer Motion for animations and Tailwind for styling. Components are mostly self-contained—animations and styling are colocated.

### Data & Configuration
- **Info.TS**: Central data file containing personal info (name, email, social links) and the projects array. Update this file when changing portfolio content, contact info, or adding/removing projects.
- **Project Structure**: Each project object has `title`, `description`, `image`, `tags`, and `links` (object with platform names as keys). Comments show fields for `github` and `demo` if needed.

### Styling
- **Tailwind CSS 4.2**: Handles layout, spacing, and responsive design. Dark theme using `slate-950` background with `slate-50`/`slate-300`/`slate-400` text hierarchy.
- **Framer Motion**: All animated elements use motion components with variants for reusable animation patterns (stagger, fade, scale on hover). Key animations: header slide-in, hero staggered fade-in, section scroll-triggered animations.
- **Global Styles**: `index.css` and `App.css` provide base resets and custom utilities.

## Deployment

The app automatically deploys to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`. The workflow:
1. Checks out code
2. Sets up Node 20 with npm cache
3. Installs deps with `npm ci`
4. Builds with `npm run build`
5. Deploys the `/dist` folder to GitHub Pages

No manual deployment steps needed. Vite is configured to build for root path (`base: '/'` in vite.config.js); if deploying to a subfolder, update the `base` setting.

## Common Development Tasks

### Adding a New Project
1. Open `src/assets/Info.TS` and add a new object to the `projects` array with `title`, `description`, `image` (public path), `tags`, and `links`.
2. Add the project image to `/public/Assets/Images/Projects/`.
3. Run `npm run dev` to test. The Projects.jsx component automatically maps over the array.

### Updating Personal Info
Edit `src/assets/Info.TS` to change `firstName`, `lastName`, `email`, `brandName`, `bio`, or social links. Header.jsx and Hero.jsx pull from this file.

### Styling & Responsiveness
All components use Tailwind breakpoints (mobile-first): `sm`, `md`, `lg`. Test responsiveness with dev tools. Key container: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` for consistent padding and max width.

### Animation Tweaks
Framer Motion variants are typically defined inline. Key properties:
- `initial`, `animate`, `exit`: animation states
- `transition`: `duration` and `delay`
- `whileInView`: trigger on scroll (with `viewport={{ once: true }}` for one-time animation)
- `whileHover`: interactive hover effects

## Important Notes

### ESLint Configuration
The ESLint config (`eslint.config.js`) treats capitalized variables as components and ignores unused-var warnings for them. Do not rename components to lowercase or add unused-import rules without understanding impacts on React component detection.

### Framer Motion Versions
Project uses Framer Motion ^12.35.0. This is a newer version; familiarize yourself with the latest API (motion components, variants, whileInView, etc.). Some older tutorials use deprecated syntax.

### Asset Paths
Images are served from `/public`. Use paths like `/Assets/Images/Projects/filename.png` in code (leading slash = root of `/public`).

### Build Output
The production build is optimized by Vite with code splitting and tree-shaking. Artifacts go to `/dist`. This folder is `.gitignore`d—do not commit it.

## Testing & Verification

No automated tests are configured. Manual verification:
1. Run `npm run dev` and check functionality in the browser (animations, responsiveness, links).
2. Run `npm run build && npm run preview` to test the production build locally.
3. Run `npm run lint` before committing to catch any linting issues.
