# STSC Department Presentation App

This project delivers a web-based presentation hub for the Faculty of Science, Technology & Strategic Communication (STSC). It includes an interactive overview site and a downloadable PowerPoint deck generated on demand.

## Getting Started

### Prerequisites

- [Node.js 18+](https://nodejs.org/)
- [npm 9+](https://www.npmjs.com/)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to explore the presentation.

### Linting & Production Build

```bash
npm run lint
npm run build
```

## Key Features

- Rich single-page overview of STSC mission, strategy, metrics, and programs.
- Downloadable PowerPoint (`.pptx`) generated through a Next.js API route using `pptxgenjs`.
- Responsive styling with lightweight, custom CSS and reusable React components.
- Vercel-ready configuration for fast deployment.

## Project Structure

```
app/
  api/presentation/route.ts   # PPTX download endpoint
  layout.tsx                  # Root layout & metadata
  page.tsx                    # Presentation landing page
  globals.css                 # Base styling
components/                   # Reusable UI components
lib/presentation/             # Data and PPTX builder logic
```

## Deployment

This project is optimized for [Vercel](https://vercel.com/) deployments. Build locally first, then deploy with:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-b7cab5e7
```

After deployment, verify availability:

```bash
curl https://agentic-b7cab5e7.vercel.app
```
