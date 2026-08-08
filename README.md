# ABTalks — 60-day mobile-first UI (mock)

Routes (open at 390px width):

/
/dashboard
/day/12

Quick start:

1. Install dependencies:

`ash
npm install
`

2. Build for production:

`ash
npm run build
`

3. Preview the production build locally:

`ash
npm run preview
`

Notes:
- Uses mocked data in src/data/mock.json.
- Submit form saves a local record to localStorage for demo purposes.

## Vercel deployment

This project is configured for Vercel with these settings:

- Build command: 
pm run build
- Output directory: dist
- Framework preset: Other or Vite

If Vercel fails with exit code 126, set the Node.js version to 18.x, 20.x, or 22.x in the project settings.
