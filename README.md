# SLMassari.github.io

Source and published site for **[samuelmassari.com](https://samuelmassari.com)** — the
engineering consulting practice of Samuel Massari: organizational reviews, targeted
improvements, leadership coaching, and engineering management mentorship.

This repository was originally the personal portfolio site (2019–2026). That site is
preserved verbatim in [`archive/`](archive/) and is still browsable at
**[/archive/](https://samuelmassari.com/archive/)**.

## Layout

| Path | Description |
| --- | --- |
| `src/` | The current site — TanStack Start routes, components, and design system |
| `public/` | Static assets served as-is (`images/`, `favicon.svg`, `robots.txt`, `CNAME`) |
| `archive/` | The original portfolio site, preserved unchanged (see [`archive/README.md`](archive/README.md)) |
| `.github/workflows/deploy.yml` | Builds the site and publishes it to GitHub Pages |

## Stack

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) (file-based routes)
- React 19, TypeScript, Vite 8
- Tailwind CSS v4 with a small custom design system in `src/styles.css`
- Radix UI primitives, `lucide-react` icons

## Development

Requires [Bun](https://bun.sh) (the lockfile is `bun.lock`) and Node.js 20+.

```sh
bun install
bun run dev        # dev server
bun run build      # prerendered static build
bun run preview    # serve the build locally
bun run test       # vitest
bun run lint       # eslint + prettier
bun run format     # prettier --write
```

## How it is deployed

Every page is **prerendered to static HTML** at build time, so the site runs on any static
host with no server runtime — GitHub Pages in production.

`vite.config.ts` holds the `tanstackStart.pages` list, which is the source of truth for
what gets prerendered. **Adding a page means adding it to that list**, otherwise it will
not exist in the static build.

`.github/workflows/deploy.yml` runs on every push to `master`: it installs with
`bun install --frozen-lockfile`, builds, collects the prerendered output into a `site/`
directory, asserts every page is present, publishes `archive/` alongside it, and uploads
the result as the GitHub Pages artifact.

## Project conventions

- All pages are prerendered to static HTML — keep the site free of server functions.
- Images the site shows live in `public/images/` (not CDN pointers) so the Pages build is
  self-contained.
- Shared header, footer, CTA, and section helpers live in
  `src/components/site/Layout.tsx`; per-page metadata comes from `pageHead()` in
  `src/lib/site.ts`.
- `src/routeTree.gen.ts` is generated — never edit it by hand.
- `archive/` is frozen. It is excluded from lint and formatting and is published as-is.

## Credits

Originally scaffolded with [Lovable](https://lovable.dev). The archived site was built on
the [Start Bootstrap - Freelancer](https://startbootstrap.com/template-overviews/freelancer/)
theme (MIT).
