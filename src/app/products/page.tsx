import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Filter } from "lucide-react";
import { products } from "@/data/mockData";

export default function ProductsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548345680-f5475ea90f46?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            Our Portfolio
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Advanced Purification <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Systems
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Discover our comprehensive range of high-performance water
            purification solutions engineered for unparalleled purity and
            efficiency.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 relative z-20 -mt-10">
        <div className="container-custom">
          {/* Filter Bar */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 text-slate-600 font-bold">
              <Filter className="w-5 h-5 text-primary" />
              <span>Browse by Category</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "All Products",
                "Residential RO",
                "Commercial RO",
                "Industrial",
                "Softeners",
              ].map((filter, i) => (
                <button
                  key={i}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${i === 0 ? "bg-[#0F172A] text-white shadow-md" : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100"}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-72 bg-slate-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {product.technology}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-3 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                    {product.description}
                  </p>

                  {/* Specifications */}
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                        Capacity
                      </span>
                      <span className="font-bold text-[#0F172A] text-sm">
                        {product.capacity}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                      <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                        Suitable For
                      </span>
                      <span className="font-bold text-[#0F172A] text-sm">
                        {product.suitableFor}
                      </span>
                    </div>
                  </div>

                  {/* Action */}
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-between px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl font-bold text-[#0F172A] group-hover:bg-[#0F172A] group-hover:text-white group-hover:border-[#0F172A] transition-all duration-300"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 bg-white border-t border-slate-200 text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
            Can't Find What You Need?
          </h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            We provide custom water purification engineering tailored to highly
            specific industrial and commercial requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-primary font-bold hover:text-[#0F172A] transition-colors group"
          >
            Speak to a Custom Solutions Engineer
            <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
