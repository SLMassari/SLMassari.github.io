export const SITE = {
  name: "Samuel Massari",
  descriptor: "Engineering Leadership & Consulting",
  legalName: "SLM Strategies di Samuel Massari",
  url: "https://samuelmassari.com",
  email: "samuel@samuelmassari.com",
  linkedin: "https://www.linkedin.com/in/samuel-massari/",
  photo: "/images/samuel-massari-speaking.jpg",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/consulting", label: "Consulting" },
  { to: "/mentorship", label: "Mentorship" },
  { to: "/contact", label: "Contact" },
] as const;

/** Builds per-page head metadata with canonical URLs on samuelmassari.com. */
export function pageHead(path: string, title: string, description: string) {
  const url = `${SITE.url}${path === "/" ? "" : path}`;
  const image = `${SITE.url}${SITE.photo}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
