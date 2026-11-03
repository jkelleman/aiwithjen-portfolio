import type { MetadataRoute } from "next";

const routes = [
  "",
  "/work",
  "/code",
  "/writing",
  "/about",
  "/resume",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `https://aiwithjen.com${r}` }));
}
