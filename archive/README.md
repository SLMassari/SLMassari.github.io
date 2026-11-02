# Archived: the old portfolio site

This directory is a **verbatim archive** of the original personal portfolio site for
Samuel L. Massari, live from 2019 until 2026.

The site has been superseded by the engineering consulting site at
**<https://samuelmassari.com>**, whose source lives in a separate repository
(`samuelmassari.com`). This archive is kept for historical reference only — it is not
maintained, and nothing in it reflects Samuel's current work.

## What is here

| Path | Description |
| --- | --- |
| `index.html` | The single-page portfolio site (the entire site is one HTML file) |
| `css/`, `scss/` | Compiled and source stylesheets (SCSS via Gulp) |
| `js/` | jQuery plugins, the theme script, and the (unused) contact form script |
| `vendor/` | Vendored third-party libraries: Bootstrap 4, jQuery, jQuery Easing, Font Awesome 5 |
| `img/` | Avatars and placeholder images for the project thumbnails |
| `mail/` | PHP contact-form handler (the form itself was removed from the site) |
| `gulpfile.js`, `package.json`, `package-lock.json` | Build tooling for the SCSS/JS pipeline |
| `CNAME.orig.txt` | The original `CNAME` file, preserved for provenance (see note below) |
| `LICENSE` | Copy of the theme's MIT license, included so this folder is self-contained |

## Viewing it

All asset paths are relative, so the archive works as-is from any static server or
straight from the filesystem:

```sh
python3 -m http.server 3000 --directory archive
# then open http://localhost:3000
```

To rebuild the CSS/JS from source (requires Node and a working `node-sass`):

```sh
cd archive && npm install && npx gulp build
```

## Note on the original domain

`CNAME.orig.txt` contains `samuellmassari.com` — with a **doubled "l"**. That was a typo;
the domain that was actually configured for GitHub Pages, and the one now serving the new
site, is `samuelmassari.com` (single "l"). The original file is preserved unchanged in
the archive purely as a record of what was there.

## Attribution

This site was built on the **Start Bootstrap - Freelancer** theme
([template overview](https://startbootstrap.com/template-overviews/freelancer/)).

Copyright 2013-2019 Blackrock Digital LLC. Code released under the
[MIT](https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/gh-pages/LICENSE)
license. See `LICENSE` for the full text.
