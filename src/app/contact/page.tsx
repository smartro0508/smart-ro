import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import LocationSection from "@/components/contact/LocationSection";
import { constructMetadata, SEO_CONFIG } from "@/seo.config";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Contact Sales & Service in Coimbatore",
  description: "Contact Smart RO for product inquiries, commercial RO plant consultation, water testing, and door-step RO repair services in Coimbatore & Tamil Nadu.",
  canonicalUrl: "/contact",
  keywords: [
    "Contact Smart RO",
    "Water Purifier Service Coimbatore Number",
    "Smart RO Customer Care",
    "RO Installation Inquiry",
    "Commercial RO Plant Contact",
    "RO Service Phone Number",
  ],
});

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Smart RO Water Purifiers",
    url: `${SEO_CONFIG.siteUrl}/contact`,
    mainEntity: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${SEO_CONFIG.siteUrl}/#localbusiness`,
      name: SEO_CONFIG.siteName,
      telephone: SEO_CONFIG.contact.phone,
      email: SEO_CONFIG.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SEO_CONFIG.address.streetAddress,
        addressLocality: SEO_CONFIG.address.addressLocality,
        addressRegion: SEO_CONFIG.address.addressRegion,
        postalCode: SEO_CONFIG.address.postalCode,
        addressCountry: SEO_CONFIG.address.addressCountry,
      },
    },
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactHero />

      {/* Main Contact Section */}
      <section className="py-20 lg:py-24 relative z-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-extrabold text-[#0f3a61] mb-3 tracking-tight">Send Us a Message</h2>
              <p className="text-slate-500 mb-10 max-w-lg text-lg leading-relaxed">Please fill out the form below with your detailed requirements. Our corporate team will get back to you promptly.</p>
              <ContactForm />
            </div>

            {/* Right: Contact Info */}
            <div className="lg:col-span-4 lg:pl-8">
              <ContactInfo />
            </div>

          </div>

          {/* Bottom: Map */}
          <div className="w-full h-[450px]">
            <LocationSection />
          </div>
        </div>
      </section>
    </div>
  );
}
