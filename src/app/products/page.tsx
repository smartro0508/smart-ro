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
      <section className="relative pt-32 pb-24 bg-white border-b border-slate-200">
        <div className="container-custom max-w-4xl">
          <span className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest mb-3 block">
            Hardware Catalog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Engineered Purification Systems
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl border-l-2 border-[#0f3a61] pl-5">
            Explore our comprehensive range of high-performance water
            purification solutions engineered for rigorous operational
            environments and strict compliance.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {products.map((product: any) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="group bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-5 md:p-6 flex flex-col hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all"
              >
                {/* Image & Badges */}
                <div className="relative h-64 w-full mb-6 bg-slate-50/50 rounded-2xl flex items-center justify-center p-6 border border-slate-50 overflow-hidden">
                  {product.isFeatured && (
                    <div className="absolute z-10 top-4 left-4 bg-[#06999b] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                      Featured
                    </div>
                  )}
                  <button className="absolute z-10 top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:shadow-md transition-all border border-slate-100">
                    <Heart className="w-4 h-4" />
                  </button>
                  <div className="relative w-full h-full">
                    <img
                      src={product.mainImage ? `${API_BASE_URL}/uploads/images/${product.mainImage}` : "/placeholder.png"}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow px-2">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#06999b] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2 min-h-[40px]">
                    {product.shortDescription || "RO Water Purifier"}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-[#06999b]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-slate-500 font-medium">
                      4.8 (Verified)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="text-[22px] font-bold text-slate-900 mb-6">
                    ₹{Number(product.price).toLocaleString('en-IN')}
                    {product.originalPrice && (
                      <span className="text-sm text-slate-400 line-through ml-2">₹{Number(product.originalPrice).toLocaleString('en-IN')}</span>
                    )}
                  </div>


                  {/* Button */}
                  <button className="w-full py-3 bg-[#06999b] hover:bg-[#057a7c] text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm pointer-events-none">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A1120] text-white">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold mb-3">
              Require a custom configuration?
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our engineering team is ready to consult on specific requirements,
              scale, and integration for your facilities.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white/20 transition-colors shrink-0"
          >
            Contact Engineering
          </Link>
        </div>
      </section>
    </div>
  );
}
