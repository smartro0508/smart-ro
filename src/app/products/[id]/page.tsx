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
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const dynamic = "force-dynamic";


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/products/get/${resolvedParams.id}`, { method: "POST" });
    const json = await res.json();
    const product = json.data;
    if (product) {
      const cleanPrice = product.price ? `₹${Number(product.price).toLocaleString("en-IN")}` : "";
      const metaDescription = product.shortDescription
        ? `${product.shortDescription} ${cleanPrice ? `Price: ${cleanPrice}.` : ""} Direct sales & service by Smart RO.`
        : product.description || "High-performance RO water purifier from Smart RO.";

      return constructMetadata({
        title: product.name,
        description: metaDescription,
        canonicalUrl: `/products/${resolvedParams.id}`,
        image: product.mainImage ? `${API_BASE_URL}/uploads/images/${product.mainImage}` : "/app-logo.png",
        keywords: [
          product.name,
          `${product.name} price`,
          `${product.name} specifications`,
          "Smart RO Water Purifier",
          "RO Water Purifier Coimbatore",
          "Buy RO Purifier Tamil Nadu",
        ],
      });
    }
  } catch (e) {}
  return constructMetadata({ title: "Product Details" });
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
    image: allImages.length > 0
      ? allImages.map(img => (img.startsWith("http") ? img : `${API_BASE_URL}/uploads/images/${img}`))
      : [`${SEO_CONFIG.siteUrl}/app-logo.png`],
    description: product.shortDescription || product.description || product.name,
    sku: product.id,
    mpn: product.id,
    brand: {
      "@type": "Brand",
      name: (product.specifications && typeof product.specifications === "object" && product.specifications.Brand) || "Smart RO",
    },
    offers: {
      "@type": "Offer",
      url: `${SEO_CONFIG.siteUrl}/products/${resolvedParams.id}`,
      priceCurrency: "INR",
      price: product.price ? String(product.price).replace(/[^0-9.]/g, "") : "9999",
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: SEO_CONFIG.siteName,
      },
    },
  };  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans text-slate-900 pt-[100px] pb-24">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: product.name, url: `/products/${resolvedParams.id}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-custom">
        {/* Main Product Container */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100 p-6 lg:p-10 mb-16 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#0284c7]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3" />
          
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20">
            {/* Left Column: Images */}
            <div className="relative">
              <ProductImageGallery
                images={allImages}
                productName={product.name}
                isFeatured={product.isFeatured}
              />
            </div>

            {/* Right Column: Details */}
            <div className="flex flex-col justify-center">
              {/* Sleek Breadcrumbs */}
              <nav className="flex items-center gap-2.5 text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 mb-8">
                <Link href="/" className="hover:text-[#0284c7] transition-colors">Home</Link>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <Link href="/products" className="hover:text-[#0284c7] transition-colors">Products</Link>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-[#0b2d4e] truncate max-w-[150px]">{product.name}</span>
              </nav>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[11px] font-black uppercase tracking-widest shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    In Stock
                  </div>
                  {product.isFeatured && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-[11px] font-black uppercase tracking-widest shadow-sm">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      Premium
                    </div>
                  )}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0b2d4e] tracking-tight leading-[1.1] mb-5">
                  {product.name}
                </h1>
                <p className="text-[17px] text-slate-500 font-medium leading-relaxed max-w-xl">
                  {product.shortDescription || "Premium RO Water Purifier with Multi-stage filtration technology."}
                </p>
              </div>

              {/* Price & CTA Section */}
              <div className="bg-slate-50/80 backdrop-blur-sm rounded-3xl p-8 mb-10 border border-slate-100 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
                  <div>
                    <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Direct Price</span>
                    <div className="flex items-end gap-3">
                      <span className="text-5xl font-black text-[#0b2d4e] tracking-tighter leading-none">
                        ₹{Number(product.price).toLocaleString("en-IN")}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xl text-slate-400 font-bold line-through decoration-slate-300 decoration-2 mb-1">
                          ₹{Number(product.originalPrice).toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                    <div className="text-[13px] font-semibold text-slate-500 mt-3 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3]" /> Inclusive of all taxes & free installation
                    </div>
                  </div>
                  
                  {product.originalPrice && (
                    <div className="inline-flex flex-col items-center justify-center bg-white border border-slate-100 px-5 py-3 rounded-2xl shadow-sm">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#0284c7] mb-0.5">You Save</span>
                      <span className="text-xl font-black text-[#0b2d4e]">₹{(Number(product.originalPrice) - Number(product.price)).toLocaleString("en-IN")}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+916383450508"
                    className="flex-1 group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#0b2d4e] to-[#0284c7] py-4 rounded-2xl text-white font-bold text-[15px] shadow-[0_8px_20px_rgba(2,132,199,0.25)] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(2,132,199,0.35)] hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    <Phone className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Call to Buy: +91 63834 50508</span>
                  </a>
                  <Link
                    href="/contact"
                    className="sm:w-auto px-8 py-4 flex items-center justify-center gap-3 bg-white border-2 border-slate-200 hover:border-[#0284c7]/30 hover:bg-[#0284c7]/5 rounded-2xl text-[#0b2d4e] font-bold text-[15px] transition-all duration-300 hover:-translate-y-1 shadow-sm"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Get Quote</span>
                  </Link>
                </div>
              </div>

              {/* Highlights */}
              {features.length > 0 && (
                <div>
                  <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-5 flex items-center gap-4">
                    Key Highlights <div className="h-px bg-slate-200 flex-1" />
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                    {features.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#0284c7]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#0284c7]" strokeWidth={3} />
                        </div>
                        <span className="text-[14px] text-slate-700 font-semibold leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Trust Badges / Warranty */}
              <div className="mt-8 flex items-center gap-4 py-4 px-5 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#f8fafc] border border-slate-200 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Brand Warranty</h4>
                  <p className="text-[14px] text-slate-700 font-bold">{product.warranty || "1 Year Comprehensive Warranty"}</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Details & Specs Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Description */}
          {product.description && (
            <div className="bg-white rounded-[2.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0284c7]/5 rounded-bl-full -z-10" />
              <h3 className="text-2xl font-black text-[#0b2d4e] tracking-tight mb-6">Product Overview</h3>
              <div className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed marker:text-[#0284c7]">
                {product.description.split('\n').map((paragraph: string, idx: number) => (
                  paragraph.trim() ? <p key={idx} className="mb-4 last:mb-0">{paragraph}</p> : null
                ))}
              </div>
            </div>
          )}

          {/* Technical Specifications */}
          {specifications && specifications.length > 0 && (
            <div className="bg-white rounded-[2.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0b2d4e] via-[#0284c7] to-[#0ea5e9]" />
              <div className="p-8 md:p-12 pb-6">
                <h3 className="text-2xl font-black text-[#0b2d4e] tracking-tight mb-2">Technical Specifications</h3>
                <p className="text-slate-500 font-medium">Detailed performance metrics and hardware specifications.</p>
              </div>
              <div className="px-8 md:px-12 pb-8 md:pb-12">
                <div className="border border-slate-100 rounded-2xl overflow-hidden">
                  <table className="w-full text-[15px] text-left">
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
                          <tr key={idx} className="group hover:bg-[#f8fafc] transition-colors duration-200">
                            <th className="px-6 py-5 font-bold text-slate-800 w-1/3 md:w-1/4 align-top bg-slate-50/50 group-hover:bg-[#0284c7]/5 group-hover:text-[#0b2d4e] transition-colors border-r border-slate-100">
                              {String(title)}
                            </th>
                            <td className="px-6 py-5 text-slate-600 font-medium">
                              {String(desc)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
