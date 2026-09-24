import type { Metadata } from "next";

const tnDistricts = [
  "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri",
  "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur",
  "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris",
  "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga",
  "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli",
  "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore",
  "Viluppuram", "Virudhunagar"
];

// Helper to deduplicate array of strings case-insensitively while preserving formatting
export function dedupeKeywords(items: string[]): string[] {
  const seen = new Set<string>();
  const deduped: string[] = [];
  for (const item of items) {
    const clean = item.trim();
    const normalized = clean.toLowerCase();
    if (clean && !seen.has(normalized)) {
      seen.add(normalized);
      deduped.push(clean);
    }
  }
  return deduped;
}

const localSeoKeywords = tnDistricts.flatMap(district => [
  `RO Water Purifier in ${district}`,
  `RO Service in ${district}`,
  `Water Purifier Dealer in ${district}`,
  `Commercial RO Plant in ${district}`
]);

const rawDefaultKeywords = [
  "Smart RO Water Purifier",
  "RO Water Purifier",
  "Water Purifier Coimbatore",
  "Smart Water Purifier",
  "Best RO Water Purifier Tamil Nadu",
  "Domestic RO Water Purifier",
  "Commercial RO Plant Coimbatore",
  "Industrial RO Water Purifier",
  "Water Softener System",
  "Home Water Purifier",
  "Advanced RO Water Purifier",
  "RO Purifier for Hard Water",
  "RO Purifier for Borewell Water",
  "RO Water Purifier Price",
  "RO Water Purifier Service Coimbatore",
  "RO Installation Service",
  "RO Repair Coimbatore",
  "RO Maintenance AMC",
  "RO Filter Replacement",
  "Water Purifier Service Near Me",
  "Aqua Era RO Water Purifier",
  "RO Membrane Service",
  "Alkaline Water Purifier",
  "UV UF Water Purifier",
  ...localSeoKeywords
];

export const SEO_CONFIG = {
  siteName: "Smart RO Water Purifiers",
  legalName: "Smart RO Water Purifier Systems",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.smartro.shop",
  title: "Smart RO | Premium RO Water Purifiers & Commercial RO Plants in Tamil Nadu",
  description: "Smart RO provides high-performance domestic RO water purifiers, commercial RO plants, water softeners, and certified repair & AMC maintenance services across Coimbatore and Tamil Nadu.",
  defaultKeywords: dedupeKeywords(rawDefaultKeywords),
  author: "Smart RO",
  publisher: "Smart RO Water Purifiers",
  twitterHandle: "@smartro",
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
  },
  contact: {
    phone: "+91 63834 50508",
    email: "smartro0508@gmail.com",
    whatsapp: "+916383450508",
  },
  address: {
    streetAddress: "9/1, Sri Nagar, Deepam Nagar 9th Street, Irugur",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641103",
    addressCountry: "IN",
  },
  geo: {
    latitude: 11.0265,
    longitude: 77.0673,
  },
  openingHours: "Mo-Sa 09:00-20:00",
  priceRange: "₹₹",
  social: [
    "https://www.facebook.com/profile.php?id=100090036542933",
    "https://www.instagram.com/smartro321/",
  ],
  locations: [...tnDistricts, "Tamil Nadu", "India"],
};

export function constructMetadata({
  title = SEO_CONFIG.title,
  description = SEO_CONFIG.description,
  image = "/app-logo.png",
  icons = "/favicon.ico",
  noIndex = false,
  canonicalUrl,
  keywords = [],
  type = "website",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
  keywords?: string[];
  type?: "website" | "article";
} = {}): Metadata {
  // Deduplicate keywords safely: page-specific keywords first, followed by unique defaults
  const mergedKeywords = dedupeKeywords([...keywords, ...SEO_CONFIG.defaultKeywords]);

  const isHomePage = !canonicalUrl || canonicalUrl === "/" || canonicalUrl === "";
  const cleanCanonical = canonicalUrl
    ? canonicalUrl.startsWith("/")
      ? canonicalUrl
      : `/${canonicalUrl}`
    : "/";
  const fullUrl = isHomePage ? SEO_CONFIG.siteUrl : `${SEO_CONFIG.siteUrl}${cleanCanonical}`;
  const fullImageUrl = image.startsWith("http")
    ? image
    : `${SEO_CONFIG.siteUrl}${image.startsWith("/") ? "" : "/"}${image}`;

  // Strip redundant brand suffixes if already included to prevent duplicate "%s | Smart RO Water Purifiers"
  const cleanTitle = title
    .replace(/\s*\|\s*Smart RO Water Purifiers.*$/i, "")
    .replace(/\s*\|\s*Smart RO.*$/i, "")
    .trim();

  // Root/Home gets an absolute title so Next.js template doesn't double-append
  // Inner pages get cleanTitle which Next.js will template exactly once
  const pageTitle = isHomePage
    ? { absolute: cleanTitle.toLowerCase().includes("smart ro") ? cleanTitle : `${cleanTitle} | Smart RO Water Purifiers` }
    : cleanTitle;

  // OpenGraph & Twitter don't inherit Next.js layout title templates, so format cleanly once
  const ogTitle = cleanTitle.toLowerCase().includes("smart ro")
    ? cleanTitle
    : `${cleanTitle} | Smart RO Water Purifiers`;

  return {
    metadataBase: new URL(SEO_CONFIG.siteUrl),
    title: pageTitle,
    description,
    keywords: mergedKeywords,
    authors: [{ name: SEO_CONFIG.author, url: SEO_CONFIG.siteUrl }],
    creator: SEO_CONFIG.author,
    publisher: SEO_CONFIG.publisher,
    category: "Water Purification Systems & Services",
    applicationName: SEO_CONFIG.siteName,
    alternates: {
      canonical: fullUrl,
      languages: {
        "en-IN": fullUrl,
      },
    },
    openGraph: {
      title: ogTitle,
      description,
      url: fullUrl,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: cleanTitle,
        },
      ],
      locale: "en_IN",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [fullImageUrl],
      creator: SEO_CONFIG.twitterHandle,
      site: SEO_CONFIG.twitterHandle,
    },
    icons: {
      icon: icons,
      shortcut: icons,
      apple: "/app-logo.png",
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
          },
        },
    ...(SEO_CONFIG.verification.google || SEO_CONFIG.verification.bing
      ? {
          verification: {
            ...(SEO_CONFIG.verification.google ? { google: SEO_CONFIG.verification.google } : {}),
            ...(SEO_CONFIG.verification.bing ? { bing: SEO_CONFIG.verification.bing } : {}),
          },
        }
      : {}),
  };
}
