import type { MetadataRoute } from "next";
import { site } from "@/lib/content/profile";
import { projectSlugs } from "@/lib/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const routes = ["", "/about", "/ventures", "/cv"].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const work = projectSlugs.map((slug) => ({
    url: `${base}/work/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, ...work];
}
