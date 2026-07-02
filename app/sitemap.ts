import type { MetadataRoute } from "next";
import { site, nav } from "@/content/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/resume`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ...nav.map((n) => ({
      url: `${site.url}${n.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects
    .filter((p) => !p.external)
    .map((p) => ({
      url: `${site.url}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: p.featured ? 0.9 : 0.7,
    }));

  return [...staticRoutes, ...projectRoutes];
}
