import { constructMetadata, SEO_CONFIG } from "@/seo.config";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "RO Water Purifier Service, Repair & AMC",
  description: "Certified RO water purifier installation, filter replacement, membrane cleaning, and AMC maintenance services across Coimbatore & Tamil Nadu. Fast doorstep technician support.",
  canonicalUrl: "/services",
  keywords: [
    "RO Service Coimbatore",
    "RO Repair Near Me",
    "Water Purifier AMC",
    "RO Filter Replacement",
    "RO Installation Service",
    "Commercial RO Maintenance",
    "Water Purifier Technician Tamil Nadu",
    "RO Membrane Service",
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Water Purifier Maintenance & Repair Services",
    name: "Smart RO Water Purifier Services & AMC",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${SEO_CONFIG.siteUrl}/#localbusiness`,
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
      telephone: SEO_CONFIG.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: SEO_CONFIG.address.streetAddress,
        addressLocality: SEO_CONFIG.address.addressLocality,
        addressRegion: SEO_CONFIG.address.addressRegion,
        postalCode: SEO_CONFIG.address.postalCode,
        addressCountry: SEO_CONFIG.address.addressCountry,
      },
    },
    areaServed: [
      {
        "@type": "City",
        name: "Coimbatore",
      },
      {
        "@type": "AdministrativeArea",
        name: "Tamil Nadu",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Smart RO Service Offerings",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "RO Water Purifier Doorstep Repair & Diagnostics",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Complete Filter & Membrane Replacement",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Annual Maintenance Contract (AMC) for Domestic & Commercial RO",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial & Industrial RO Plant Scheduled Servicing",
          },
        },
      ],
    },
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
