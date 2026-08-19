const tnDistricts = [
  "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", 
  "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", 
  "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", 
  "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", 
  "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", 
  "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", 
  "Viluppuram", "Virudhunagar"
];

const localSeoKeywords = tnDistricts.flatMap(district => [
  `RO Water Purifier in ${district}`,
  `RO Service in ${district}`,
  `Water Purifier Dealer in ${district}`
]);

export const SEO_CONFIG = {
  siteName: "Smart RO Water Purifiers",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.smartro.shop",
  title: "Smart RO | Premium RO Water Purifier & Filtration Solutions",
  description: "Smart RO offers advanced RO water purifiers, commercial plants, and expert repair services. Discover the best RO water purifier for your home or business.",
  defaultKeywords: [
    "Smart RO Water Purifier",
    "RO Water Purifier",
    "Water Purifier",
    "Smart Water Purifier",
    "Best RO Water Purifier",
    "Domestic RO Water Purifier",
    "Home Water Purifier",
    "Advanced RO Water Purifier",
    "RO Purifier for Hard Water",
    "RO Purifier for Borewell Water",
    "RO Water Purifier Price",
    "RO Water Purifier Service",
    "RO Installation",
    "RO Repair",
    "RO Maintenance",
    "RO Filter Replacement",
    "Water Purifier Service",
    ...localSeoKeywords
  ],
  author: "Smart RO",
  twitterHandle: "@smartro",
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX",
  contact: {
    phone: "+91 63834 50508",
    email: "smartro0508@gmail.com",
    whatsapp: "+916383450508",
  },
  locations: [...tnDistricts, "Tamil Nadu", "India"],
};

export function constructMetadata({
  title = SEO_CONFIG.title,
  description = SEO_CONFIG.description,
  image = "/app-logo.png",
  icons = "/favicon.ico",
  noIndex = false,
  canonicalUrl,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
} = {}) {
  return {
    title,
    description,
    keywords: SEO_CONFIG.defaultKeywords,
    authors: [{ name: SEO_CONFIG.author }],
    metadataBase: new URL(SEO_CONFIG.siteUrl),
    alternates: {
      canonical: canonicalUrl ? `${SEO_CONFIG.siteUrl}${canonicalUrl}` : SEO_CONFIG.siteUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl ? `${SEO_CONFIG.siteUrl}${canonicalUrl}` : SEO_CONFIG.siteUrl,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: SEO_CONFIG.twitterHandle,
    },
    icons,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
