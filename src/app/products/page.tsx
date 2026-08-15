import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Filter, Settings2, Droplet, ShieldCheck } from "lucide-react";
import { products } from "@/data/mockData";

export default function ProductsPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-700">
      <section className="relative pt-32 pb-24 bg-white border-b border-slate-200">
        <div className="container-custom max-w-4xl">
          <span className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest mb-3 block">Hardware Catalog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Engineered Purification Systems
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl border-l-2 border-[#0f3a61] pl-5">
            Explore our comprehensive range of high-performance water purification solutions engineered for rigorous operational environments and strict compliance.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          
          <div className="bg-white border border-slate-200 p-4 mb-12 flex flex-col md:flex-row justify-between items-center gap-4 rounded-sm">
            <div className="flex items-center gap-3 text-slate-900 font-bold pl-2 text-sm uppercase tracking-widest">
              <Filter className="w-4 h-4 text-slate-500" />
              <span>Categorization</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "All Systems",
                "Residential",
                "Commercial",
                "Industrial",
              ].map((filter, i) => (
                <button
                  key={i}
                  className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-200 rounded-sm border ${
                    i === 0 
                      ? "bg-[#0f3a61] text-white border-[#0f3a61]" 
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="group bg-white border border-slate-200 flex flex-col hover:border-[#0f3a61] transition-colors rounded-sm"
              >
                <div className="relative h-56 bg-slate-50 border-b border-slate-200 p-4 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 mix-blend-multiply"
                  />
                  <div className="absolute top-3 right-3 bg-white border border-slate-200 text-slate-900 text-[9px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm">
                    {product.technology}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0f3a61] transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-slate-600 text-xs leading-relaxed mb-6 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="space-y-0 mb-8 border border-slate-100">
                    <div className="flex items-center justify-between p-2 border-b border-slate-100 text-xs">
                      <span className="font-semibold text-slate-500">CAPACITY</span>
                      <span className="font-bold text-slate-900">{product.capacity}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 text-xs">
                      <span className="font-semibold text-slate-500">DEPLOYMENT</span>
                      <span className="font-bold text-slate-900 truncate max-w-[120px] text-right">{product.suitableFor}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0f3a61] uppercase tracking-wider">Specs</span>
                    <ArrowRight className="w-4 h-4 text-[#0f3a61]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A1120] text-white">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold mb-3">Require a custom configuration?</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our engineering team is ready to consult on specific requirements, scale, and integration for your facilities.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#4ea8de] text-[#0A1120] text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white transition-colors shrink-0"
          >
            Contact Engineering
          </Link>
        </div>
      </section>
    </div>
  );
}
