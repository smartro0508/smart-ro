import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { constructMetadata, SEO_CONFIG } from "@/seo.config";
import GlobalAnalytics from "@/components/GlobalAnalytics";
import { RootJsonLd } from "@/components/seo/JsonLd";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const baseMetadata = constructMetadata();

export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    default: "Smart RO | Premium RO Water Purifiers & Commercial RO Plants in Tamil Nadu",
    template: "%s | Smart RO Water Purifiers",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f3a61",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${spaceGrotesk.variable} antialiased scroll-smooth`}>
      <head>
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore, Tamil Nadu, India" />
        <meta name="geo.position" content={`${SEO_CONFIG.geo.latitude};${SEO_CONFIG.geo.longitude}`} />
        <meta name="ICBM" content={`${SEO_CONFIG.geo.latitude}, ${SEO_CONFIG.geo.longitude}`} />
        <meta name="format-detection" content="telephone=no" />
        
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${SEO_CONFIG.googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${SEO_CONFIG.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <RootJsonLd />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-background text-text-primary">
        <Suspense fallback={null}>
          <GlobalAnalytics />
        </Suspense>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
