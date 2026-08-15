import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Filter, Settings2, Droplet } from "lucide-react";
import { products } from "@/data/mockData";

export default function ProductsPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-700">
      {/* ── CORPORATE HERO SECTION ── */}
      <section className="relative pt-32 pb-24 bg-white border-b border-slate-200">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold tracking-wider uppercase mb-6">
            Product Catalog
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 tracking-tight">
            Industrial & Commercial <br className="hidden md:block" />
            Water Purification
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore our comprehensive range of high-performance water purification solutions engineered for rigorous operational environments and uncompromising purity.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16">
        <div className="container-custom">
          
          {/* Corporate Filter Bar */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 mb-12 flex flex-col md:flex-row justify-between items-center gap-4 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 text-[#0F172A] font-semibold pl-3">
              <Filter className="w-5 h-5 text-slate-500" />
              <span>Categories</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "All Products",
                "Residential",
                "Commercial",
                "Industrial",
                "Softeners",
              ].map((filter, i) => (
                <button
                  key={i}
                  className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                    i === 0 
                      ? "bg-[#0F172A] text-white shadow-sm" 
                      : "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-[#0F172A]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-64 bg-slate-100 border-b border-slate-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Tag */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-200 text-[#0F172A] text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-sm">
                    {product.technology}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Specs List */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                        <Droplet className="w-4 h-4 text-slate-500" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold mb-0.5">Capacity</span>
                        <span className="text-sm font-semibold text-[#0F172A]">{product.capacity}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                        <Settings2 className="w-4 h-4 text-slate-500" />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold mb-0.5">Application</span>
                        <span className="text-sm font-semibold text-[#0F172A] truncate">{product.suitableFor}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <div className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-50 text-[#0F172A] rounded-lg font-semibold group-hover:bg-[#0F172A] group-hover:text-white transition-colors border border-slate-200 group-hover:border-[#0F172A]">
                      <span>View Specifications</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORPORATE CTA ── */}
      <section className="py-20 bg-[#0F172A] text-white">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold mb-3">
                Require a custom configuration?
              </h2>
              <p className="text-slate-300 text-base max-w-xl">
                Our engineering team is ready to consult on specific requirements, scale, and integration for your facilities.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-bold rounded-lg hover:bg-white hover:text-[#0F172A] transition-colors duration-200 text-base shadow-sm"
              >
                Contact Engineering Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
