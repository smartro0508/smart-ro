import { MetadataRoute } from "next";
import { SEO_CONFIG } from "../seo.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/products",
    "/services",
    "/gallery",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ].map((route) => ({
    url: `${SEO_CONFIG.siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  return [...routes];
}
