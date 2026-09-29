# Ton Trieu Vy — Portfolio

Personal portfolio for Ton Trieu Vy, Digital Marketer & Video Editor. Built with Vite + React, deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

| Script            | What it does                   |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start the dev server           |
| `npm run build`   | Production build into `dist/`  |
| `npm run preview` | Serve the production build     |
| `npm run lint`    | Lint with ESLint               |

## Editing content

All text, links and images live in **`src/data/portfolio.js`**. Update that file and the page follows.
Colours, fonts and spacing are design tokens in **`src/styles/tokens.css`**.

## Project structure

```
src/
├── data/portfolio.js      content
├── styles/                tokens + global styles
├── components/ui/         shared building blocks (Button, Icon, SectionHeader, …)
├── components/layout/     Navbar, Footer
├── sections/              one .jsx + .module.css pair per page section
├── assets/images/         images imported by portfolio.js
└── App.jsx                section order
```

## Deploy to Vercel

Import the repo in Vercel — it detects Vite automatically (build command `npm run build`, output `dist`).
