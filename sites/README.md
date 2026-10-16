# Sites

Every folder here is one person's portfolio. They all share the app in `src/` —
same layout, same components, same behaviour — and differ only in the data in
their own folder.

```
sites/
  eren/          → https://aerencagatay.github.io/eren-portfolio/          (root site)
  <person>/      → https://aerencagatay.github.io/eren-portfolio/<person>/
  _template/     → never published; copy it to start a new person
```

A push to `main` builds every folder and publishes them together as one GitHub
Pages site (`npm run build:all`).

## Adding someone

1. **Copy the template, not someone else's folder** — copying a real site is how
   one person's employer or awards end up on another person's page.

   ```bash
   cp -r sites/_template sites/ayse
   ```

   The folder name becomes their URL segment, so lowercase letters, digits and
   dashes only.

2. **Add their images** to `sites/ayse/imgs/`: a square profile photo, plus
   square organisation logos if you have them. Import each at the top of
   `resume.ts`.

3. **Fill in `sites/ayse/resume.ts`.** Set `url` to
   `https://aerencagatay.github.io/eren-portfolio/ayse`. Leave out (or empty) any
   section they have nothing for — it disappears from the page entirely.

4. **Check it.** This type-checks every site's data, not just one:

   ```bash
   npm run check
   ```

5. **Preview it.**

   ```bash
   SITE=ayse npm run dev                    # bash
   $env:SITE='ayse'; npm run dev            # PowerShell
   ```

6. **Push to `main`.** CI checks, builds every site and publishes.

## Rules that are easy to trip over

- **Summary links are hash-only.** `[my work](#work)`, never `(/#work)` — markdown
  is rendered verbatim, so a leading slash skips the base path and the build
  fails with `does not begin with base`.
- **`end: 'Present'` marks the current employer** in structured data. Roles with a
  `Volunteer` badge are never treated as the employer.
- **The Contact paragraph links LinkedIn only if a social entry is named exactly
  `LinkedIn`.**
- **Navbar links are per site.** Pointing one at `/#projects` on a site with no
  projects leads nowhere.
- **Section copy is optional.** Without `copy`, headings fall back to generic
  wording; set `copy.projectsTitle` and friends to write your own.

The full shape, with every field documented, is `Resume` in
[`src/lib/types.ts`](../src/lib/types.ts).

## If someone needs their own URL

This setup puts everyone under `aerencagatay.github.io/eren-portfolio/`. GitHub
Pages allows one site per repository, so giving a person a URL of their own
(`<them>.github.io/...` or a custom domain) means publishing their built folder
to a separate repository — the code can stay here.
