import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import LocationSection from "@/components/contact/LocationSection";
import { constructMetadata } from "@/seo.config";
import type { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Contact Smart RO | Expert Water Purification Consultants",
  description: "Get in touch with Smart RO's water purification experts for tailored solutions, commercial plant installations, and repair services.",
  canonicalUrl: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
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
