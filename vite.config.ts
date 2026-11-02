// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Every page is prerendered to static HTML at build time so the site can be
// served by any static host (e.g. GitHub Pages) with no server runtime.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/consulting" },
      { path: "/mentorship" },
      { path: "/contact" },
    ],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
