import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/**
 * Deployed as a fully prerendered static site to GitHub Pages, which serves it
 * from the /eren-portfolio sub-path. `paths.base` makes SvelteKit emit that
 * prefix on every internal link and asset it controls.
 */
const base = process.env.BASE_PATH ?? '/eren-portfolio';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base,
			relative: false
		}
	}
};

export default config;
