import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Keep the address a visitor asks for as-is: the prerender pass never
    // follows redirects, so a trailing-slash rewrite would drop every page
    // except "/" out of the static build that GitHub Pages serves.
    trailingSlash: "preserve",
  });

  return router;
};
