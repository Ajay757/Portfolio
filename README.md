# Ajay Suthaharan — Portfolio

React, Vite, and Tailwind portfolio focused on AI and software engineering.

## Local development

```sh
npm install
npm run dev
```

## Validation

```sh
npm run build
npm run lint
```

Content lives in `src/data/portfolioData.js`. Project overviews are available at `/projects/:slug`. Existing classroom components are retained in the source but no longer appear on the homepage.

The build emits browser assets in `dist/client`, a minimal SPA Worker in `dist/server`, and Sites metadata in `dist/.openai`. The existing Netlify `_redirects` file is retained for SPA routing.

`public/resume.pdf` is the general/SWE resume copied from the workspace on September 23, 2026. Direct project repository URLs are not assumed: project pages link to Ajay’s verified GitHub profile.

The social image in `public/og.png` was created with the built-in imagegen tool using this brief: a minimal dark portfolio sharing card, softly rounded panel and blue memory-node motif, with the exact name and headline displayed on the site.
