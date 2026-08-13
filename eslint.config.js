import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	// Global ignores must come first and use explicit globs — bare directory
	// names let generated output and dependencies through.
	{
		ignores: ['**/node_modules/**', '**/build/**', '**/.svelte-kit/**', '**/dist/**']
	},
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		// Tailwind's config is CommonJS by convention.
		files: ['tailwind.config.js'],
		rules: {
			'@typescript-eslint/no-require-imports': 'off'
		}
	},
	{
		// shadcn-svelte's generated components declare $$Events/$$Slots for typing only.
		files: ['src/lib/components/ui/**/*.svelte'],
		rules: {
			'@typescript-eslint/no-unused-vars': 'off'
		}
	}
];
