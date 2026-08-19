import { constructMetadata } from "@/seo.config";
import type { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "RO Services & Maintenance | Smart RO",
  description: "Enterprise-grade support and lifecycle management for your RO water purifiers. We offer RO installation, repair, AMC, and filter replacements.",
  canonicalUrl: "/services",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
