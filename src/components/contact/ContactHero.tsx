export default function ContactHero() {
  return (
    <section className="pt-32 pb-20 bg-white border-b border-slate-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <span className="inline-block text-xs font-bold text-[#075985] uppercase tracking-widest border border-[#075985]/20 bg-[#075985]/5 px-4 py-1.5 rounded-full mb-6">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#0F172A] leading-tight tracking-tight mb-6">
              Let's Talk About <br />
              <span className="text-[#075985]">Your Water Needs.</span>
            </h1>
          </div>
          <div className="lg:pb-2">
            <p className="text-xl text-slate-500 leading-relaxed border-l-4 border-[#075985] pl-6">
              Have a question about our water purification solutions? Our specialists are ready to help you identify the right system for your home, business, or industrial operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
