# Graph editor – GitHub Pages deployment

This project is configured to export a static Next.js site and host it on GitHub Pages.

Live URL format
- User/Org page: https://<user>.github.io/
- Project page: https://<user>.github.io/<repo>/ (this repository uses a project page)

In our case the URL will be:

https://<your-username>.github.io/Graph_editor_TS/

Key configuration
- `next.config.mjs` uses `output: 'export'` and sets `basePath`/`assetPrefix` from `NEXT_PUBLIC_BASE_PATH`.
- GitHub Actions workflow `.github/workflows/deploy-pages.yml` builds with `NEXT_PUBLIC_BASE_PATH="/<repo>"` and deploys to Pages.
- We copy `out/index.html` to `out/404.html` and add `.nojekyll` so deep links work on Pages and the `_next/` folder is served.

Local build (optional)
```sh
npm run build:gh
```
This command will generate `out/` and sync it to `docs/` for testing the output locally with any static server.

Troubleshooting 404s
- If you see GitHub’s generic 404 page, ensure your repository’s Pages settings are set to:
  - Source: GitHub Actions
  - Branch: N/A (managed by the workflow)
- If assets 404 or styles don’t load, verify the site is accessed under the repository base path: `/Graph_editor_TS/`.
- If you change the repository name, the base path must change accordingly; the workflow reads it from the repo name automatically.
