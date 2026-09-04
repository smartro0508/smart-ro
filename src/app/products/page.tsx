import Image from "next/image";
import Link from "next/link";
import {
  Filter,
  Heart,
  ClipboardList,
  Droplets,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import { API_BASE_URL } from "@/config";
import { constructMetadata } from "@/seo.config";
import type { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "RO Water Purifiers | Domestic & Commercial Systems",
  description: "Explore our comprehensive range of high-performance water purification solutions engineered for rigorous operational environments.",
  canonicalUrl: "/products",
});

export const dynamic = 'force-dynamic';
async function getProducts() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/products/get-all`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-700">
      <section className="relative pt-28 pb-12 bg-slate-50 overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#f0f9ff] to-transparent pointer-events-none" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-[#06999b]/10 to-[#4ea8de]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white text-xs font-bold text-[#06999b] uppercase tracking-widest mb-6 shadow-sm border border-slate-100">
              <Droplets className="w-3.5 h-3.5" />
              Pure Water Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              Discover Our Range of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06999b] to-[#4ea8de]">Premium Purifiers</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium px-4">
              Explore our comprehensive collection of advanced water purification systems, designed to deliver safe, healthy, and crystal-clear water for your home or business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {products.map((product: any) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="group relative bg-gradient-to-b from-white to-[#f0f9ff] rounded-3xl p-5 md:p-6 flex flex-col transition-all duration-500 hover:-translate-y-1 border border-[#06999b]/15 hover:border-[#4ea8de]/50 ring-1 ring-white/80 hover:ring-4 hover:ring-[#4ea8de]/20 overflow-hidden"
              >
                {/* Subtle Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff]/50 to-[#06999b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Image & Badges */}
                <div className="relative h-72 w-full mb-6 bg-slate-50/50 rounded-2xl flex items-center justify-center p-4 overflow-hidden transition-all duration-500">
                  {/* Soft background glow on hover */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#06999b]/5 rounded-full blur-3xl group-hover:bg-[#06999b]/12 transition-colors duration-700"></div>

                  {product.isFeatured && (
                    <div className="absolute z-20 top-4 left-4 bg-white/90 backdrop-blur-md text-[#06999b] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-sm border border-slate-100 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#06999b]"></span>
                      Featured
                    </div>
                  )}

                  <div className="relative w-full h-full z-10 flex items-center justify-center">
                    <img
                      src={product.mainImage ? `${API_BASE_URL}/uploads/images/${product.mainImage}` : "/placeholder.png"}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow px-1 relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#06999b] transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-sm text-slate-500 mb-6 line-clamp-2 min-h-[40px] leading-relaxed">
                    {product.shortDescription || "Premium Reverse Osmosis Water Purifier"}
                  </p>

                  <div className="mt-auto">
                    <div className="flex items-end justify-between mb-6 pt-4 border-t border-slate-100/80">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Pricing</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-black text-slate-900">
                            ₹{Number(product.price).toLocaleString('en-IN')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm font-medium text-slate-400 line-through">
                              ₹{Number(product.originalPrice).toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Vibrant Gradient Button */}
                    <button className="w-full h-12 bg-gradient-to-r from-[#06999b] to-[#4ea8de] text-white rounded-xl font-bold text-sm tracking-wide flex items-center justify-between px-5 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-[#06999b]/20 pointer-events-none group/btn border border-white/10 relative overflow-hidden">
                      {/* Shine animation effect on hover */}
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                      
                      <span className="relative z-10">View Details</span>
                      
                      <div className="relative z-10 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover/btn:bg-white group-hover/btn:text-[#06999b] transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
                      </div>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-white border-t border-slate-100">
        {/* Water-themed background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f9ff]/50 via-white to-[#06999b]/5 pointer-events-none" />
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-[#4ea8de]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#06999b]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="bg-gradient-to-br from-[#06999b] to-[#0f3a61] rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-[#06999b]/20 relative overflow-hidden">
            {/* Glassmorphic overlay inside card */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] opacity-10 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight tracking-tight">
                Need Help Choosing the Right Purifier?
              </h2>
              <p className="text-slate-200 text-base md:text-lg leading-relaxed font-medium max-w-md">
                Connect with our water experts to find the perfect purification solution tailored to your specific needs and water quality.
              </p>
            </div>

            <Link
              href="/contact"
              className="relative z-10 w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-[#06999b] text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
