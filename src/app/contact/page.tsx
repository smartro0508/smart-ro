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
          <div className="relative bg-white rounded-3xl shadow-[0_20px_80px_-15px_rgba(15,58,97,0.08)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row transform transition-all duration-500 hover:shadow-[0_30px_100px_-15px_rgba(6,153,155,0.12)] group">
            
            {/* Left Accent Bar */}
            <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-[#0f3a61] via-[#06999b] to-[#4ea8de] z-10"></div>
            <div className="lg:hidden absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0f3a61] via-[#06999b] to-[#4ea8de] z-10"></div>

            {/* Left: Contact Info */}
            <div className="lg:w-2/5 bg-gradient-to-br from-slate-50 via-[#f4f9ff] to-[#e6f4f1] p-10 md:p-14 border-r border-slate-100/50 flex flex-col justify-center relative overflow-hidden lg:pl-16">
              
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-gradient-to-br from-[#06999b]/10 to-transparent blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-gradient-to-tr from-[#0f3a61]/10 to-transparent blur-3xl pointer-events-none"></div>

              {/* Decorative Watermark */}
              <div className="absolute -right-8 -bottom-8 opacity-[0.03] pointer-events-none transform group-hover:scale-110 transition-transform duration-700">
                <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
              </div>

              <div className="inline-flex items-center gap-3 mb-6 relative z-10">
                <span className="w-8 h-1 bg-gradient-to-r from-[#0f3a61] to-[#06999b] rounded-full"></span>
                <span className="text-[#06999b] text-xs font-black uppercase tracking-widest">Reach Out</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-[#0f3a61] mb-6 tracking-tight leading-[1.1] relative z-10">
                Let's start a <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f3a61] to-[#06999b]">conversation</span>
              </h2>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10 font-medium relative z-10 max-w-sm">
                Our water purification experts are ready to provide tailored solutions for your home or industry.
              </p>
              
              <div className="relative z-10 bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                <ContactInfo />
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:w-3/5 p-10 md:p-14 lg:p-16 bg-white relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.015] pointer-events-none"></div>
              
              {/* Subtle top gradient */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none"></div>
              
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
