import { notFound } from "next/navigation";
import Link from "next/link";
import {
  FileText,
  Check,
  Phone,
  Star,
} from "lucide-react";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { API_BASE_URL } from "@/config";
import { constructMetadata, SEO_CONFIG } from "@/seo.config";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/products/get/${resolvedParams.id}`, { method: "POST" });
    const json = await res.json();
    const product = json.data;
    if (product) {
      return constructMetadata({
        title: `${product.name} | Smart RO`,
        description: product.shortDescription || product.description,
        canonicalUrl: `/products/${resolvedParams.id}`,
        image: product.mainImage ? `${API_BASE_URL}/uploads/images/${product.mainImage}` : undefined,
      });
    }
  } catch (e) {}
  return constructMetadata({ title: "Product Not Found" });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  let product = null;
  try {
    const res = await fetch(
      `${API_BASE_URL}/api/v1/products/get/${resolvedParams.id}`,
      {
        method: "POST",
        cache: "no-store",
      },
    );
    const json = await res.json();
    product = json.data;
  } catch (error) {
    console.error("Error fetching product:", error);
  }

  if (!product) {
    notFound();
  }

  const images = product.images
    ? typeof product.images === "string"
      ? JSON.parse(product.images)
      : product.images
    : [];
  const allImages = [product.mainImage, ...images].filter(Boolean);

  let features = [];
  try {
    features = product.features
      ? typeof product.features === "string"
        ? JSON.parse(product.features)
        : product.features
      : [];
  } catch (e) {
    features =
      typeof product.features === "string" ? product.features.split(",") : [];
  }
  if (!Array.isArray(features)) {
    features = features ? [features] : [];
  }

  let specifications = [];
  try {
    specifications = product.specifications
      ? typeof product.specifications === "string"
        ? JSON.parse(product.specifications)
        : product.specifications
      : [];
  } catch (e) {
    specifications =
      typeof product.specifications === "string"
        ? product.specifications.split(",")
        : [];
  }
  if (!Array.isArray(specifications)) {
    specifications = specifications
      ? Object.entries(specifications).map(([k, v]) => ({ name: k, value: v }))
      : [];
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: allImages.map(img => `${API_BASE_URL}/uploads/images/${img}`),
    description: product.shortDescription || product.description,
    brand: {
      "@type": "Brand",
      name: "Smart RO"
    },
    offers: {
      "@type": "Offer",
      url: `${SEO_CONFIG.siteUrl}/products/${resolvedParams.id}`,
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Smart RO"
      }
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-custom py-10">
        <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-slate-100 p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column: Images */}
            <div className="lg:w-full">
              <ProductImageGallery
                images={allImages}
                productName={product.name}
                isFeatured={product.isFeatured}
              />
            </div>

            {/* Right Column: Details */}
            <div className="flex flex-col">
              {/* Sleek Breadcrumbs */}
              <nav className="flex items-center gap-2 text-[10px] md:text-xs text-slate-400 font-bold mb-8 uppercase tracking-widest bg-slate-50/80 w-fit px-4 py-2 rounded-full border border-slate-100">
                <Link href="/" className="hover:text-[#06999b] transition-colors">Home</Link>
                <span className="text-slate-300">/</span>
                <Link href="/products" className="hover:text-[#06999b] transition-colors">RO Purifiers</Link>
                <span className="text-slate-300">/</span>
                <span className="text-[#06999b] truncate max-w-[120px] sm:max-w-[200px]">{product.name}</span>
              </nav>

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    In Stock
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4">
                  {product.name}
                </h1>
                <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">
                  {product.shortDescription || "Premium RO Water Purifier with Multi-stage filtration technology."}
                </p>
              </div>

              {/* Premium Price Card */}
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#06999b] to-[#4ea8de] p-1 mb-8 shadow-2xl shadow-[#06999b]/20 group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-40 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-[80px] opacity-30" />
                
                <div className="relative bg-white/10 backdrop-blur-xl rounded-[1.8rem] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-white/20 group-hover:bg-white/20 transition-colors duration-500">
                  <div>
                    <div className="text-xs font-bold text-white/90 uppercase tracking-widest mb-2 flex items-center gap-2">
                      Special Launch Price
                    </div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md">
                        ₹{Number(product.price).toLocaleString("en-IN")}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xl text-white/70 line-through font-bold decoration-white/50 decoration-2">
                          ₹{Number(product.originalPrice).toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-white/80 font-medium tracking-wide">
                      Inclusive of all taxes & free standard installation
                    </div>
                  </div>
                  {product.originalPrice && (
                    <div className="relative shrink-0 flex flex-col items-center justify-center bg-white text-[#06999b] px-6 py-4 rounded-2xl shadow-lg border border-white/50 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-[10px] uppercase tracking-widest font-bold opacity-70 mb-1 text-slate-500">You Save</span>
                      <span className="text-2xl font-black">
                        ₹{(Number(product.originalPrice) - Number(product.price)).toLocaleString("en-IN")}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-sm md:text-base text-slate-600 leading-relaxed mb-8 prose prose-slate max-w-none">
                {product.description}
              </div>

              {/* Enhanced Features Grid */}
              {features.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-5 flex items-center gap-2">
                    <span className="w-8 h-px bg-[#06999b]" /> Key Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((item: string, idx: number) => (
                      <div
                        key={idx}
                        className="group flex items-start gap-3.5 bg-white border border-slate-200/60 p-4 rounded-2xl hover:bg-gradient-to-br hover:from-white hover:to-slate-50 hover:border-[#06999b]/30 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                      >
                        <div className="bg-slate-50 group-hover:bg-[#06999b]/10 rounded-xl p-2 shrink-0 transition-colors duration-300 border border-slate-100 group-hover:border-[#06999b]/20">
                          <Check className="w-4 h-4 text-slate-400 group-hover:text-[#06999b] stroke-[3] transition-colors duration-300" />
                        </div>
                        <span className="text-sm text-slate-700 font-semibold leading-snug mt-1 group-hover:text-slate-900 transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+916383450508"
                  className="flex-1 group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#06999b] to-[#4ea8de] py-4 md:py-5 text-white font-bold text-lg shadow-[0_8px_25px_rgba(6,153,155,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(6,153,155,0.4)]"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <Phone className="w-5 h-5 relative z-10 animate-bounce" />
                  <span className="relative z-10">Call: +91 63834 50508</span>
                </a>
                <Link
                  href="/contact"
                  className="sm:w-auto px-8 group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-white text-[#06999b] font-bold text-base transition-all duration-300 hover:bg-slate-50 hover:-translate-y-1 shadow-md hover:shadow-lg border border-[#06999b]/20 hover:border-[#06999b]/40"
                >
                  <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Request Quote</span>
                </Link>
              </div>

              {/* Trust Badges / Warranty */}
              <div className="flex items-center gap-4 py-4 px-5 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-[#0f3a61]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-0.5">Brand Warranty</h4>
                  <p className="text-sm text-slate-500 font-medium">{product.warranty || "1 Year Comprehensive Warranty"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          {specifications && specifications.length > 0 && (
            <div className="mt-24 pt-16">
              <div className="max-w-3xl mx-auto text-center mb-12 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#06999b]/10 rounded-full blur-3xl -z-10" />
                <h2 className="text-sm font-bold text-[#06999b] tracking-widest uppercase mb-3">
                  Deep Dive
                </h2>
                <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                  Technical Specifications
                </h3>
                <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                  Detailed capabilities and performance metrics of the {product.name} system.
                </p>
              </div>
              
              <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/50 max-w-5xl mx-auto relative group/table">
                {/* Decorative gradients */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0f3a61] via-[#06999b] to-[#4ea8de]" />
                
                <table className="w-full text-sm md:text-base text-left">
                  <tbody className="divide-y divide-slate-100">
                    {specifications.map((spec: any, idx: number) => {
                      let title = spec;
                      let desc = "";

                      if (Array.isArray(spec)) {
                        title = spec[0];
                        desc = spec[1] || "";
                      } else if (typeof spec === "object" && spec !== null) {
                        if (spec.key !== undefined) {
                          title = spec.key;
                          desc = spec.value || "";
                        } else if (spec.name !== undefined) {
                          title = spec.name;
                          desc = spec.value || "";
                        } else if (spec.title !== undefined) {
                          title = spec.title;
                          desc = spec.description || spec.value || "";
                        } else {
                          title = Object.keys(spec)[0] || "Feature";
                          desc = (Object.values(spec)[0] as string) || "";
                        }
                      }

                      return (
                        <tr
                          key={idx}
                          className="hover:bg-[#f8fafc] transition-colors duration-300 even:bg-slate-50/50 group relative"
                        >
                          <th className="px-6 md:px-12 py-6 md:py-8 font-bold text-slate-900 w-1/3 align-top border-r border-slate-100 group-hover:text-[#06999b] transition-colors relative">
                            {String(title)}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#06999b] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </th>
                          <td className="px-6 md:px-12 py-6 md:py-8 text-slate-600 leading-relaxed font-medium">
                            {String(desc)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
