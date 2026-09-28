# flower onebe — demo site

A responsive florist landing page inspired by the airy layout, playful typography, and falling artwork on [uki by non Editions](https://ukibynoneditions.com/). The hero uses an original photograph of a single cosmos flower in place of illustrations. All floral assets in this repository were generated for this demo; no images or code were copied from the reference site.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite. Run `npm run build` to make the static site in `dist/`.

## GitHub Pages

This repository is configured for `https://onebe-inc.github.io/demo_flower1/`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site after each push to `main`. In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.

## Contents

- `index.html` — page content and accessible navigation
- `styles.css` — layout, responsive styles, and falling flower animation
- `main.js` — menu and pause/play controls
- `assets/single-cosmos.png` — original transparent single-flower photo used in the hero
- `assets/flower-stories.png` — original floral imagery for the three cards

The page is a design demo. Product descriptions and contact details are illustrative.
