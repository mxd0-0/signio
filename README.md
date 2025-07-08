# signio

A React application for e-signature workflows, built with Vite and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```

## GitHub Pages Deployment

This project is configured for GitHub Pages deployment. There are two ways to deploy:

### Option 1: Automatic Deployment (Recommended)
The project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages when you push to the main branch. Make sure GitHub Pages is configured to deploy from "GitHub Actions" in your repository settings.

### Option 2: Manual Deployment
```bash
npm run deploy
```

The site will be available at: https://mxd0-0.github.io/signio/

## Troubleshooting GitHub Pages 404 Errors

If you see 404 errors like `https://mxd0-0.github.io/src/main.jsx`, it means GitHub Pages is trying to serve source files instead of the built files. This happens when:

1. GitHub Pages is configured to serve from the main branch instead of GitHub Actions
2. The deployment hasn't been run yet

**Solution**: Ensure GitHub Pages is set to deploy from "GitHub Actions" in your repository settings, or run `npm run deploy` to deploy to the gh-pages branch.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
