# Ahmet Eren Çağatay — Portfolio

Personal portfolio site, deployed as a static export to GitHub Pages at
<https://aerencagatay.github.io/eren-portfolio>.

## Stack

Next.js 16 (App Router, static export) · React 19 · Tailwind CSS 4 · shadcn/ui ·
motion · three.js (`@react-three/fiber` / `drei` / `rapier`) for the 3D lanyard card.

The design is adapted from the MIT-licensed
[Zolt](https://shadcnstudio.com/templates/zolt-portfolio-template-free) template by
shadcn/studio. The freelancer-oriented sections it ships with (services, testimonials,
pricing, booking, MDX case studies) were removed because there was no truthful content
for them; Skills, Achievements and Education sections were added in their place.

## Content

**All CV content lives in [`src/content/cv.ts`](src/content/cv.ts).** Sections read from
it, so a fact only ever needs changing in one place. Edit that file rather than the
components.

## Asset paths and `basePath`

The site is served from the `/eren-portfolio` sub-path. `next/link` handles that
automatically, but these do **not**:

- raw `<img src>` tags,
- `next/image` — because `images.unoptimized` is on, it emits `src` verbatim,
- the three.js GLTF/texture loaders in `src/components/ui/id-card.tsx`.

Anything in those three categories must be wrapped in `asset()` from
[`src/lib/utils.ts`](src/lib/utils.ts) or it will 404 in production.

## Placeholders still to replace

The About section keeps the template's demo imagery until real photos are supplied.
Search for `TODO(eren)` — the files are:

- `src/components/home/about/profile-carousel.tsx` — `public/images/about-me/carousel-01..04.webp`
- `src/components/home/about/trip-folder-card.tsx` — `public/images/about-me/folder-01..03.webp`
- `src/components/home/about/music-player-card.tsx` — track name and artwork
- `src/components/home/about/surprise-note.tsx` — the placeholder joke notes

The favicons in `public/favicon/` are also still the template's.

## Contact form

There is no backend. The form validates input and then opens the visitor's mail client
with the message pre-filled (see `contact-form.tsx`). To collect submissions server-side,
point `onSubmit` at a service such as Formspree.

## Commands

```bash
npm run dev          # dev server
npm run build        # static export into out/
npm run lint         # eslint over src
npm run check-types  # tsc --noEmit
```

## Deployment

`.github/workflows/deploy.yml` builds and publishes `out/` to GitHub Pages on every push
to `main`.
