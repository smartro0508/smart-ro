import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShoppingCart,
  ChevronRight,
  ChevronDown,
  Droplet,
  ShieldCheck,
  Leaf,
  Home
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
    <div className="bg-white min-h-screen font-sans pt-[72px] lg:pt-[88px]">
      {/* Top Hero Banner */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white pt-12 pb-16 lg:pt-10 lg:pb-20 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100 shadow-sm">
                RO WATER PURIFIERS
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f3a61] tracking-tight mb-6 leading-tight">
                Pure Water for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f3a61] to-[#0284c7]">a Healthier Tomorrow</span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-lg">
                Explore our range of advanced RO water purifiers designed for your family's safety, health, and well-being. Built with premium technology for uncompromising quality.
              </p>

              {/* Icons Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-slate-200">
                <div className="flex flex-col items-start md:pr-6 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0284c7] mb-4 group-hover:bg-[#0284c7] group-hover:text-white transition-colors duration-300 shadow-sm border border-blue-100">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#0f3a61] leading-tight">100% Purity</h4>
                </div>

                <div className="flex flex-col items-start md:px-6 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0284c7] mb-4 group-hover:bg-[#0284c7] group-hover:text-white transition-colors duration-300 shadow-sm border border-blue-100">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#0f3a61] leading-tight">Advanced<br />Filtration</h4>
                </div>

                <div className="flex flex-col items-start md:px-6 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0284c7] mb-4 group-hover:bg-[#0284c7] group-hover:text-white transition-colors duration-300 shadow-sm border border-blue-100">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#0f3a61] leading-tight">Energy<br />Efficient</h4>
                </div>

                <div className="flex flex-col items-start md:pl-6 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0284c7] mb-4 group-hover:bg-[#0284c7] group-hover:text-white transition-colors duration-300 shadow-sm border border-blue-100">
                    <Home className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#0f3a61] leading-tight">For Every<br />Home</h4>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:pl-2 hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative bg-white border border-slate-200 p-2 h-[480px]">
                <img src="/product_hero.jpeg" alt="RO Purifier" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          {/* Top Bar (Breadcrumbs & Sort) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-[13px] font-medium text-slate-400 mb-2">
                <Link href="/" className="hover:text-[#0284c7] transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-slate-600">Products</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0f3a61]">
                RO Water Purifiers
              </h2>
              <p className="text-[13px] font-medium text-slate-500 mt-1">
                Showing 1–{products.length} of {products.length} products
              </p>
            </div>

            {/* Sort Dropdown Placeholder */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button className="flex items-center justify-between gap-3 px-4 py-2 border border-slate-200 rounded-md text-[13px] font-medium text-slate-600 hover:border-slate-300 transition-colors bg-white">
                <span>Sort by: <span className="text-slate-900 font-bold ml-1">Popularity</span></span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Product Grid (Full Width, No Sidebar) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product: any, index: number) => {
              // Mock data calculation for UI fidelity since API might lack these
              const isBestSeller = index === 0;
              const isNew = index === 1;
              const originalPrice = product.originalPrice || (product.price * 1.25);
              const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-3xl flex flex-col border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0f3a61] to-[#0284c7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image & Badges Container */}
                  <div className="relative h-64 w-full bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-6 transition-colors duration-300">

                    {/* Badge (Top Left) */}
                    {(isBestSeller || isNew) && (
                      <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-[#0284c7] to-[#06999b] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                        {isBestSeller ? "Best Seller" : "New"}
                      </div>
                    )}

                    {/* Heart (Top Right) */}
                    <button className="absolute top-4 right-4 z-10 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors border border-slate-100">
                      <Heart className="w-4 h-4" />
                    </button>

                    <Link href={`/products/${product.id}`} className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={product.mainImage ? `${API_BASE_URL}/uploads/images/${product.mainImage}` : "/placeholder.png"}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                      />
                    </Link>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow border-t border-slate-50">
                    <Link href={`/products/${product.id}`}>
                      <h3 className="text-[17px] font-extrabold text-[#0f3a61] leading-tight mb-1 group-hover:text-[#0284c7] transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-[13px] text-slate-500 mb-4 font-medium line-clamp-1">
                        {product.shortDescription || "Advanced Water Purification"}
                      </p>
                    </Link>

                    {/* Rating (Static Mock) */}
                    <div className="flex items-center gap-1.5 mb-5">
                      <div className="flex items-center text-[#fbbf24]">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current drop-shadow-sm" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                      <span className="text-[12px] font-bold text-slate-500">
                        4.8 <span className="text-slate-400 font-medium">(1,245)</span>
                      </span>
                    </div>

                    {/* Features (Capacity & Tech) */}
                    <div className="flex items-center gap-3 text-[12px] font-bold text-slate-600 mb-6 bg-slate-50 px-3 py-2 rounded-xl">
                      <div className="flex items-center gap-1.5">
                        <Droplet className="w-4 h-4 text-[#0284c7]" />
                        8L Capacity
                      </div>
                      <div className="w-px h-3 bg-slate-300"></div>
                      <div className="flex items-center gap-1.5">
                        RO + UV + UF
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-5">
                        <span className="text-2xl font-black text-[#0f3a61]">
                          ₹{Number(product.price).toLocaleString('en-IN')}
                        </span>
                        <span className="text-[14px] font-semibold text-slate-400 line-through">
                          ₹{Number(originalPrice).toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] font-bold text-[#059669] bg-[#d1fae5] px-2 py-1 rounded border border-[#a7f3d0] uppercase ml-auto shadow-sm">
                          {discount}% OFF
                        </span>
                      </div>

                      {/* Add to Cart Button */}
                      <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#0f3a61] to-[#0284c7] hover:from-[#154675] hover:to-[#0f3a61] text-white text-[14px] font-bold rounded-xl transition-all shadow-lg shadow-[#0f3a61]/20 transform hover:-translate-y-0.5">
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
