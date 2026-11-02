<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All pages are prerendered to static HTML (vite.config.ts `pages` list) so the site runs on static hosts like GitHub Pages; add every new page to that list and keep the site free of server functions.
- Images the site shows live in `public/images/` (not CDN pointers) so the GitHub Pages build is self-contained.
- Shared header, footer, CTA and section helpers live in `src/components/site/Layout.tsx`; page metadata comes from `pageHead()` in `src/lib/site.ts`.
