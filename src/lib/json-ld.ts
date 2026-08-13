/**
 * Renders a JSON-LD payload as a ready-to-inject <script> tag.
 *
 * This lives in a .ts module rather than inline in the page because Svelte's
 * parser (and prettier-plugin-svelte) read a `<` inside a template literal as
 * the start of a real element, which makes the component fail to compile.
 */
export function jsonLdScript(data: unknown): string {
	const tag = 'script';
	const payload = JSON.stringify(data).replace(/</g, '\\u003c');

	return `<${tag} type="application/ld+json">${payload}</${tag}>`;
}
