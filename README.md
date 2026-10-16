# Portfolio sites

One app that publishes a portfolio site for each person under [`sites/`](sites/), all
from a single GitHub Pages deployment:

| Site               | URL                                                       |
| ------------------ | --------------------------------------------------------- |
| Ahmet Eren Çağatay | <https://aerencagatay.github.io/eren-portfolio/>          |
| everyone else      | `https://aerencagatay.github.io/eren-portfolio/<folder>/` |

Every site shares the same layout, components and behaviour; only the data in its
folder differs. **To add someone, see [`sites/README.md`](sites/README.md).**

## Stack

SvelteKit 2 · Svelte 4 · Tailwind CSS 3 · shadcn-svelte (bits-ui) · svelte-motion.

Adapted from the MIT-licensed
[portfolio-template](https://github.com/SikandarJODD/portfolio-template) by Sikandar Bhide,
itself a Svelte port of the Magic UI / Dillion Verma portfolio. The blog (mdsvex + shiki)
was removed and the hackathons section was replaced with Achievements.

## How one app becomes many sites

- **`SITE` picks the person.** In [`svelte.config.js`](svelte.config.js) it aliases
  `$content` to `sites/$SITE`. The page and navbar import `$content/resume` and nothing
  else personal, so swapping the folder swaps the whole site. Defaults to `eren`.
- **`Resume` in [`src/lib/types.ts`](src/lib/types.ts) is the contract** every
  `resume.ts` is annotated with. `npm run check` type-checks _every_ site's data in one
  run, not just the selected one, so a malformed file fails CI rather than rendering a
  broken page.
- **Sections render only when they have data**, so a sparse CV doesn't leave empty
  headings behind.
- **`build:all`** ([`scripts/build-all.mjs`](scripts/build-all.mjs)) builds each site
  with its own `BASE_PATH` and assembles one artifact: the root site at `build/`,
  everyone else at `build/<folder>/`. Folders starting with `_` are skipped.

## Base path

GitHub Pages serves this repo from `/eren-portfolio`. `paths.base` comes from the
`BASE_PATH` env var, which `build:all` sets per site. Assets imported through Vite get the
prefix automatically; hand-written root-relative hrefs do not — see `withBase()` in
`Navbar.svelte`.

Asset inlining is turned off in [`vite.config.ts`](vite.config.ts). Vite would otherwise
turn any image under 4 KB into a `data:` URI, and a small enough profile photo would then
produce an invalid `og:image` — which crashes the prerender.

## Pinned versions

Two dependencies are deliberately pinned rather than left on carets:

- `@sveltejs/kit` at `~2.21.5` — 2.70 imports `fork`/`settled` from Svelte, which only
  exist in Svelte 5. Upgrading Svelte would mean replacing bits-ui 0.21 and svelte-motion,
  neither of which supports Svelte 5.
- `prettier` at `~3.5.3` — prettier 3.6 changed `getVisitorKeys`, which breaks
  `prettier-plugin-svelte` 3.5 (the last Svelte 4 line). Plugin 4.x requires Svelte 5.

## Commands

```bash
npm run dev         # dev server for one site (SITE=<folder>, default eren)
npm run build       # one site into build/
npm run build:all   # every site, assembled for GitHub Pages
npm run check       # svelte-check, covering every site's data
npm run lint        # prettier --check . && eslint src
npm run format      # prettier --write .
```

`lint` scopes ESLint to `src` on purpose: ESLint's global `ignores` do not take effect in
this flat-config setup, so an unscoped run walks `node_modules` and `build`.

On Windows, set `SITE` with `$env:SITE='ayse'` in PowerShell. In Git Bash, prefix any
command that passes a path-like `BASE_PATH` with `MSYS_NO_PATHCONV=1`, or MSYS rewrites
`/eren-portfolio` into a Windows path. `build:all` sets its variables from Node, so it is
unaffected.

## Still to do

- Replace `static/favicon.png` — it is still the template's default, and shared by every
  site.
- `src/app.html` pulls Inter from `https://rsms.me/inter/inter.css`; self-host it if you
  would rather not depend on a third-party CDN.

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs `check`, then
`build:all`, and publishes `build/` to GitHub Pages on every push to `main`.
