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
          <div className="relative bg-white rounded-sm shadow-[0_20px_80px_-15px_rgba(15,58,97,0.15)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row transform transition-all hover:shadow-[0_30px_100px_-15px_rgba(15,58,97,0.2)]">
            
            {/* Left Accent Bar */}
            <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#0f3a61] to-[#06999b]"></div>
            <div className="lg:hidden absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0f3a61] to-[#06999b]"></div>

            {/* Left: Contact Info */}
            <div className="lg:w-2/5 bg-gradient-to-b from-slate-50 to-white p-10 md:p-14 border-r border-slate-100 flex flex-col justify-center relative overflow-hidden lg:pl-16">
              {/* Decorative Watermark */}
              <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none">
                <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
              </div>

              <span className="text-[#06999b] text-xs font-black uppercase tracking-widest mb-3 block">Reach Out</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f3a61] mb-4 tracking-tight leading-tight">Let's start a <br/>conversation</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium relative z-10">
                Our water purification experts are ready to provide tailored solutions for your home or industry.
              </p>
              
              <div className="relative z-10">
                <ContactInfo />
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:w-3/5 p-10 md:p-14 bg-white relative">
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
