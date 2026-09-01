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
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-primary/20">
      <ContactHero />

      {/* Overlapping Contact Section */}
      <section className="relative z-20 -mt-24 pb-24">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="relative bg-white rounded-none shadow-2xl border-4 border-white overflow-hidden flex flex-col lg:flex-row transform transition-all duration-500">

            {/* Left Accent Bar */}
            <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-3 bg-[#06999b] z-10"></div>
            <div className="lg:hidden absolute top-0 left-0 right-0 h-3 bg-[#06999b] z-10"></div>

            {/* Left: Contact Info */}
            <div className="lg:w-2/5 bg-[#0f3a61] text-white p-10 md:p-14 border-r border-[#0a2845] flex flex-col justify-center relative overflow-hidden lg:pl-16">

              {/* Decorative Blueprint Background */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>

              {/* Decorative Watermark */}
              <div className="absolute -right-8 -bottom-8 opacity-[0.05] pointer-events-none">
                <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
              </div>

              <div className="inline-flex items-center gap-3 mb-6 relative z-10">
                <span className="w-8 h-[2px] bg-[#06999b]"></span>
                <span className="text-[#06999b] text-[10px] font-bold uppercase tracking-widest">Reach Out</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-[1.1] relative z-10 uppercase">
                Let's start a <br /><span className="text-[#06999b]">conversation</span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed mb-10 font-medium relative z-10 max-w-sm border-l-2 border-[#06999b] pl-3">
                Our water purification experts are ready to provide tailored technical solutions for your home or industry.
              </p>

              <div className="relative z-10">
                <ContactInfo />
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:w-3/5 p-10 md:p-14 lg:p-16 bg-slate-50 relative border-t-4 lg:border-t-0 border-[#0f3a61]">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

              <div className="relative z-10">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      <LocationSection />
    </div>
  );
}
