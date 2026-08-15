export default function ContactHero() {
  return (
    <section className="relative pt-40 pb-44 bg-[#0F172A] text-white overflow-hidden border-b border-slate-800">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block text-xs font-bold text-primary uppercase tracking-widest border border-primary/20 bg-primary/10 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          Support & Sales
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
          How can we help <br className="hidden md:block"/> you today?
        </h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
          Whether you need a custom industrial configuration or a simple residential installation, our team is here to assist you.
        </p>
      </div>
    </section>
  );
}
