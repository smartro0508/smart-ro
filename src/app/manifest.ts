import { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/seo.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SEO_CONFIG.siteName,
    short_name: "Smart RO",
    description: SEO_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f3a61",
    orientation: "portrait",
    categories: ["business", "shopping", "utilities"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/app-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/app-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
