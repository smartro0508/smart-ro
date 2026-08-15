import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import LocationSection from "@/components/contact/LocationSection";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-primary/20">
      <ContactHero />
      
      {/* Overlapping Contact Section */}
      <section className="relative z-20 -mt-24 pb-24">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left: Contact Info */}
            <div className="lg:w-2/5 bg-slate-50 p-10 md:p-14 border-r border-slate-100 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Get in touch</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-10">
                Our water purification experts are ready to provide tailored solutions for your home or industry.
              </p>
              <ContactInfo />
            </div>

            {/* Right: Contact Form */}
            <div className="lg:w-3/5 p-10 md:p-14 bg-white">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <LocationSection />
    </div>
  );
}
