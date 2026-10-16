import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		// Never inline assets as data: URIs. A small enough profile photo would
		// otherwise become one, and og:image needs a real, fetchable file for
		// LinkedIn/WhatsApp previews — inlined, it also crashes the prerender.
		assetsInlineLimit: 0
	}
});
