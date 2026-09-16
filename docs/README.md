# Docs app (Vue)

Local Vue + Vite + Vue Router app for PapierCSS documentation.
Dependencies live in this folder (`package.json`).

From the repo root:

```bash
npm run docs:dev
npm run docs:build
npm run docs:preview
```

Or from `docs/`:

```bash
npm install
npm run dev
```

The app imports the package CSS from `../src`, so component changes are reflected live.

Production builds use `base: /papiercss/` for GitHub Pages. Copy `docs/dist` into the `/papiercss` folder of the Pages site. `404.html` is a copy of `index.html` so Vue Router history mode works on refresh.
