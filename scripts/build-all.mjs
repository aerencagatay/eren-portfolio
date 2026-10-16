/**
 * Builds every site under sites/ and assembles them into one GitHub Pages
 * artifact, so a single repo publishes everyone's portfolio:
 *
 *   build/            ← ROOT_SITE, at /eren-portfolio/  (Eren's existing URL)
 *   build/<person>/   ← every other folder, at /eren-portfolio/<person>/
 *
 * Each site is a full, separate SvelteKit build with its own base path — the
 * only thing that differs between them is which sites/<person> folder is
 * wired in as $content (see svelte.config.js).
 */
import { spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Recursive copy built from the basic fs calls. Deliberately not fs.cpSync:
 * on Windows, under this OneDrive path (the İ in PROJERİM), cpSync kills the
 * process outright — exit 127, no exception, no output.
 */
function copyDir(src, dest) {
	mkdirSync(dest, { recursive: true });
	for (const entry of readdirSync(src, { withFileTypes: true })) {
		const from = join(src, entry.name);
		const to = join(dest, entry.name);
		if (entry.isDirectory()) copyDir(from, to);
		else copyFileSync(from, to);
	}
}

const REPO_BASE = process.env.REPO_BASE ?? '/eren-portfolio';
const ROOT_SITE = process.env.ROOT_SITE ?? 'eren';
const STAGING = '.build';
const OUT = 'build';

function fail(message) {
	console.error(`\n✖ ${message}`);
	process.exit(1);
}

const sites = readdirSync('sites', { withFileTypes: true })
	// Folders starting with _ (sites/_template) are type-checked but never published.
	.filter((entry) => entry.isDirectory() && !entry.name.startsWith('_'))
	.filter((entry) => existsSync(join('sites', entry.name, 'resume.ts')))
	.map((entry) => entry.name)
	.sort();

if (!sites.includes(ROOT_SITE)) {
	fail(`ROOT_SITE="${ROOT_SITE}" is not a folder under sites/`);
}

// Folder names become URL segments, so keep them URL-safe.
for (const site of sites) {
	if (!/^[a-z0-9-]+$/.test(site)) {
		fail(`sites/${site}: folder names must be lowercase letters, digits and dashes`);
	}
}

rmSync(STAGING, { recursive: true, force: true });
rmSync(OUT, { recursive: true, force: true });

// Invoke Vite through node directly rather than npx, so this runs the same on
// Windows and on the Linux CI runner without needing a shell.
const vite = join('node_modules', 'vite', 'bin', 'vite.js');

for (const site of sites) {
	const base = site === ROOT_SITE ? REPO_BASE : `${REPO_BASE}/${site}`;
	console.log(`\n▶ ${site}  →  ${base}/`);

	const result = spawnSync(process.execPath, [vite, 'build'], {
		stdio: 'inherit',
		env: { ...process.env, SITE: site, BASE_PATH: base, OUT_DIR: join(STAGING, site) }
	});

	if (result.status !== 0) fail(`build failed for sites/${site}`);
}

copyDir(join(STAGING, ROOT_SITE), OUT);

for (const site of sites.filter((s) => s !== ROOT_SITE)) {
	const dest = join(OUT, site);
	// The root site emits _app/, index.html, 404.html and favicon.png at the top
	// level; a person whose folder matched one of those would overwrite it.
	if (existsSync(dest)) fail(`sites/${site} collides with ${dest}, which the root site emits`);
	copyDir(join(STAGING, site), dest);
}

rmSync(STAGING, { recursive: true, force: true });

console.log(`\n✔ ${sites.length} site(s) assembled into ${OUT}/`);
for (const site of sites) {
	console.log(`   ${site === ROOT_SITE ? REPO_BASE : `${REPO_BASE}/${site}`}/`);
}
