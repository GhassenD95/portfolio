# Dossier Portfolio — Ghassen Dhaoui

A dossier-themed portfolio website for an AI Systems Engineering student, built with React, TypeScript, and Vite.

## Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4** (styling)
- **React Router v7** (client-side routing)
- **react-helmet-async** (per-page meta titles)
- **react-i18next** (i18n — EN/FR/DE)

## Pages

| Route | Page |
|---|---|
| `/identity` | Identity / About |
| `/projects` | Project list |
| `/projects/:id` | Project detail |
| `/skills` | Skills |
| `/contact` | Contact |
| `*` | 404 |

## Features

- Multi-language (EN / FR / DE) with browser auto-detect
- Client-side routing with dossier-themed UI
- Custom SVG architecture diagram for doc-ai project
- Skill tooltips with portal rendering
- Keyboard easter egg (Shift+R / Shift+X)
- Paper texture background, Courier Prime font, red accent (#9e0027)

## Development

```bash
npm install
npm run dev     # local dev server at http://localhost:5173
npm run build   # production build to dist/
npm run preview # preview production build
```

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `master` to trigger auto-deploy.
