import type { MetadataRoute } from "next";

const routes = [
  "",
  "/work",
  "/work/project-osmos",
  "/work/enterprise-semantic-layer",
  "/code",
  "/writing",
  "/about",
  "/resume",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `https://aiwithjen.com${r}` }));
}
