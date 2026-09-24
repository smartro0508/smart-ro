import { SEO_CONFIG } from "@/seo.config";

export function RootJsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SEO_CONFIG.siteUrl}/#website`,
    name: SEO_CONFIG.siteName,
    alternateName: "Smart RO",
    url: SEO_CONFIG.siteUrl,
    inLanguage: "en-IN",
    description: SEO_CONFIG.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SEO_CONFIG.siteUrl}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    name: SEO_CONFIG.siteName,
    alternateName: "Smart RO",
    url: SEO_CONFIG.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${SEO_CONFIG.siteUrl}/app-logo.png`,
      caption: SEO_CONFIG.siteName,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SEO_CONFIG.contact.phone,
        contactType: "customer service",
        areaServed: ["IN", "Tamil Nadu", "Coimbatore"],
        availableLanguage: ["English", "Tamil"],
      },
      {
        "@type": "ContactPoint",
        telephone: SEO_CONFIG.contact.whatsapp,
        contactType: "sales",
        contactOption: "WhatsApp",
        areaServed: ["IN", "Tamil Nadu"],
        availableLanguage: ["English", "Tamil"],
      },
    ],
    sameAs: SEO_CONFIG.social,
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SEO_CONFIG.siteUrl}/#localbusiness`,
    name: SEO_CONFIG.siteName,
    alternateName: "Smart RO Water Purifier Systems",
    image: `${SEO_CONFIG.siteUrl}/app-logo.png`,
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.contact.phone,
    email: SEO_CONFIG.contact.email,
    priceRange: SEO_CONFIG.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: SEO_CONFIG.address.streetAddress,
      addressLocality: SEO_CONFIG.address.addressLocality,
      addressRegion: SEO_CONFIG.address.addressRegion,
      postalCode: SEO_CONFIG.address.postalCode,
      addressCountry: SEO_CONFIG.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SEO_CONFIG.geo.latitude,
      longitude: SEO_CONFIG.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
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
      name: "Water Purification Products and Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Domestic RO Water Purifiers",
        },
        {
          "@type": "OfferCatalog",
          name: "Commercial & Industrial RO Plants",
        },
        {
          "@type": "OfferCatalog",
          name: "RO Water Purifier Repair & AMC Service",
        },
        {
          "@type": "OfferCatalog",
          name: "Water Softener Systems & Filter Replacements",
        },
      ],
    },
    sameAs: SEO_CONFIG.social,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${SEO_CONFIG.siteUrl}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductJsonLd({
  product,
}: {
  product: {
    id: string;
    name: string;
    description?: string;
    shortDescription?: string;
    price?: string | number;
    mainImage?: string;
    specifications?: Record<string, string>;
  };
}) {
  const imageUrl = product.mainImage
    ? product.mainImage.startsWith("http")
      ? product.mainImage
      : `${SEO_CONFIG.siteUrl}/app-logo.png`
    : `${SEO_CONFIG.siteUrl}/app-logo.png`;

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: [imageUrl],
    description: product.shortDescription || product.description || product.name,
    sku: product.id,
    mpn: product.id,
    brand: {
      "@type": "Brand",
      name: product.specifications?.Brand || "Smart RO",
    },
    offers: {
      "@type": "Offer",
      url: `${SEO_CONFIG.siteUrl}/products/${product.id}`,
      priceCurrency: "INR",
      price: product.price ? String(product.price).replace(/[^0-9.]/g, "") : "9999",
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        "@id": `${SEO_CONFIG.siteUrl}/#organization`,
        name: SEO_CONFIG.siteName,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
