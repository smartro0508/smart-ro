import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import LocationSection from "@/components/contact/LocationSection";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <ContactHero />

      {/* Info Cards + Form */}
      <section className="py-20 bg-white">
        <div className="container-custom grid lg:grid-cols-12 gap-14 items-start">
          {/* Left: Info cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-2">We're Here to Help</h2>
              <p className="text-slate-500 leading-relaxed">
                Connect with our team for product enquiries, installations, service, or any other requirements.
              </p>
            </div>
            <ContactInfo />
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Location */}
      <LocationSection />

      {/* Final CTA */}
      <section className="py-20 bg-white border-t border-slate-100 text-center">
        <div className="container-custom max-w-xl mx-auto">
          <div className="w-12 h-0.5 bg-[#075985] mx-auto mb-8" />
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Need Help Choosing the Right Solution?
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Talk to our water purification experts and get a recommendation tailored to your exact requirements.
          </p>
          <Link
            href="tel:+910000000000"
            className="inline-flex items-center gap-2 px-9 py-4 bg-[#0F172A] text-white text-sm font-bold rounded-xl hover:bg-[#075985] transition-colors duration-300"
          >
            Talk to Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
