import { existsSync } from 'node:fs';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/**
 * One app, many sites. SITE picks which folder under sites/ becomes `$content`
 * — the only place the shared page reads CV data from — so every person's
 * site is the same build with a different folder swapped in.
 *
 *   SITE=eren npm run build        # one site, into build/
 *   npm run build:all              # every site, assembled for GitHub Pages
 */
const site = process.env.SITE ?? 'eren';

if (!existsSync(`sites/${site}/resume.ts`)) {
	throw new Error(`SITE="${site}" has no sites/${site}/resume.ts`);
}

/**
 * GitHub Pages serves this repo from /eren-portfolio. `paths.base` makes
 * SvelteKit prefix every internal link and asset it controls; build:all sets
 * it per site so each lands in its own sub-path.
 */
const base = process.env.BASE_PATH ?? '/eren-portfolio';

const outDir = process.env.OUT_DIR ?? 'build';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter({
			pages: outDir,
			assets: outDir,
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base,
			relative: false
		},
		alias: {
			$content: `sites/${site}`
		},
		typescript: {
			// Type-check every site's data, not just the selected one, so a single
			// `npm run check` catches a malformed resume.ts in anyone's folder.
			config: (tsconfig) => {
				tsconfig.include.push('../sites/**/*.ts');
			}
		}
	}
};

export default config;
