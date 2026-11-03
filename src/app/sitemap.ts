import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";

const BASE_URL = "https://lenarddesigns.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((project) => ({
    url: `${BASE_URL}${project.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...projectUrls,
  ];
}