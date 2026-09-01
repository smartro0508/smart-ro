import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative pt-40 pb-44 bg-[#0A1120] text-white overflow-hidden border-b-[6px] border-[#06999b]">
      {/* Background & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ro-electronics-banner.jpeg"
          alt="Contact Operations"
          fill
          className="object-cover opacity-20 mix-blend-luminosity grayscale"
          priority
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')] opacity-10 pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1120] via-[#0A1120]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1120] via-transparent to-[#0A1120]/80" />
      </div>

      <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest bg-white/10 px-4 py-1.5 border border-white/20 mb-6 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 bg-[#06999b]"></span>
          Support & Sales
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
          Contact us
        </h1>
        <p className="text-base md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium border-l-2 border-[#06999b] pl-4 inline-block text-left">
          Whether you need a custom industrial configuration or a simple residential installation, our team is here to assist you.
        </p>
      </div>
    </section>
  );
}
