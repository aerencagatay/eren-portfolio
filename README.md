# Ahmet Eren Çağatay — Portfolio

Personal portfolio, prerendered to static HTML and served from GitHub Pages at
<https://aerencagatay.github.io/eren-portfolio>.

## Stack

SvelteKit 2 · Svelte 4 · Tailwind CSS 3 · shadcn-svelte (bits-ui) · svelte-motion.

Adapted from the MIT-licensed
[portfolio-template](https://github.com/SikandarJODD/portfolio-template) by Sikandar Bhide,
itself a Svelte port of the Magic UI / Dillion Verma portfolio. The blog (mdsvex + shiki)
was removed and the hackathons section was replaced with Achievements.

## Content

**All CV content lives in [`src/lib/data/resume.ts`](src/lib/data/resume.ts).** The page
reads from that object and nothing else, so a fact only ever needs changing in one place.

Two things to know when editing it:

- **Markdown links in `summary` must be hash-only** (`#work`, not `/#work`). `marked`
  renders them verbatim, so a leading slash skips `paths.base` and the prerender fails
  with `does not begin with base`.
- **`logoUrl` is blank on every work and education entry.** Drop real logo files into
  `src/lib/imgs/`, import them at the top of `resume.ts` and set them. Until then each
  card falls back to the organisation's initials.

## Base path

GitHub Pages serves the site from `/eren-portfolio`, set via `paths.base` in
[`svelte.config.js`](svelte.config.js) and overridable with the `BASE_PATH` env var (the
deploy workflow sets it). Assets imported through Vite (`$lib/imgs/...`) get the prefix
automatically; hand-written root-relative hrefs do not — see `withBase()` in
`Navbar.svelte`.

## Pinned versions

Two dependencies are deliberately pinned rather than left on carets:

- `@sveltejs/kit` at `~2.21.5` — 2.70 imports `fork`/`settled` from Svelte, which only
  exist in Svelte 5. Upgrading Svelte would mean replacing bits-ui 0.21 and svelte-motion,
  neither of which supports Svelte 5.
- `prettier` at `~3.5.3` — prettier 3.6 changed `getVisitorKeys`, which breaks
  `prettier-plugin-svelte` 3.5 (the last Svelte 4 line). Plugin 4.x requires Svelte 5.

## Commands

```bash
npm run dev     # dev server
npm run build   # prerender into build/
npm run check   # svelte-check
npm run lint    # prettier --check . && eslint src
npm run format  # prettier --write .
```

`lint` scopes ESLint to `src` on purpose: ESLint's global `ignores` do not take effect in
this flat-config setup, so an unscoped run walks `node_modules` and `build`.

## Still to do

- Replace `static/favicon.png` — it is still the template's default.
- `src/app.html` pulls Inter from `https://rsms.me/inter/inter.css`; self-host it if you
  would rather not depend on a third-party CDN.

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes
`build/` to GitHub Pages on every push to `main`.
