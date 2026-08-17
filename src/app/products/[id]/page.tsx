import { notFound } from "next/navigation";
import Link from "next/link";
import {
  FileText,
  Check,
  Phone,
  Star,
} from "lucide-react";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";

export async function generateStaticParams() {
  return [];
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
      `http://localhost:5000/api/v1/products/get/${resolvedParams.id}`,
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
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pt-24">
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
              {/* Breadcrumbs */}
              <div className="flex items-center text-[10px] md:text-xs text-slate-400 font-bold mb-6 uppercase tracking-widest">
                <Link
                  href="/"
                  className="hover:text-[#06999b] transition-colors"
                >
                  Home
                </Link>
                <span className="mx-3 text-slate-300">/</span>
                <Link
                  href="/products"
                  className="hover:text-[#06999b] transition-colors"
                >
                  RO Purifiers
                </Link>
                <span className="mx-3 text-slate-300">/</span>
                <span className="text-[#06999b] line-clamp-1">
                  {product.name}
                </span>
              </div>

              <div className="mb-5">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
                  {product.name}
                </h1>
                <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
                  {product.shortDescription || "Advanced RO Water Purifier"}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-slate-100">
                <div className="bg-amber-100 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span className="text-sm font-bold text-amber-800">4.8</span>
                </div>
                <span className="text-sm text-slate-400 font-medium tracking-wide">
                  120+ Verified Reviews
                </span>
              </div>

              {/* Price Card */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-6 md:p-8 border border-slate-100 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#06999b]/5 rounded-bl-full -z-0" />
                <div className="relative z-10">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Special Price
                  </div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                      ₹{Number(product.price).toLocaleString("en-IN")}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xl text-slate-400 line-through font-bold decoration-slate-300 decoration-2">
                        ₹{Number(product.originalPrice).toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500 font-medium tracking-wide">
                    Inclusive of all taxes
                  </div>
                </div>
                {product.originalPrice && (
                  <div className="relative z-10 bg-[#06999b]/10 text-[#06999b] border border-[#06999b]/20 px-5 py-3 rounded-2xl text-sm font-black shadow-sm whitespace-nowrap self-start sm:self-center">
                    Save ₹
                    {(
                      Number(product.originalPrice) - Number(product.price)
                    ).toLocaleString("en-IN")}
                    !
                  </div>
                )}
              </div>

              <div className="text-sm text-slate-600 leading-relaxed mb-8 prose prose-slate">
                {product.description}
              </div>

              {/* Bullet points (Features Grid) */}
              {features.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Key Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {features.map((item: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-white border border-slate-100 p-3 md:p-4 rounded-2xl shadow-sm hover:border-[#06999b]/30 transition-colors"
                      >
                        <div className="bg-[#06999b]/10 rounded-full p-1.5 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#06999b] stroke-[3]" />
                        </div>
                        <span className="text-sm text-slate-700 font-semibold leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="tel:+916383450508"
                  className="flex-1 group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#06999b] py-4 md:py-5 text-white font-bold text-lg shadow-[0_8px_25px_rgba(6,153,155,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(6,153,155,0.4)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <Phone className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">
                    Call Now: +91 63834 50508
                  </span>
                </a>
                <Link
                  href="/contact"
                  className="sm:w-auto px-8 group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl border-2 border-[#06999b] bg-white py-4 md:py-5 text-[#06999b] font-bold text-base transition-all hover:bg-[#06999b] hover:text-white"
                >
                  <FileText className="w-5 h-5" />
                  <span>Request Quote</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
                Warranty :  {product.warranty || "1 Year Warranty"}
              </span>
            </div>
          </div>

          {/* Technical Specifications */}
          {specifications && specifications.length > 0 && (
            <div className="mt-20 pt-16 border-t border-slate-200">
              <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
                  Technical Specifications
                </h2>
                <p className="text-slate-500 font-medium">
                  Detailed technical information and capabilities of the{" "}
                  {product.name}
                </p>
              </div>
              <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-4xl mx-auto">
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
                          className="hover:bg-slate-50 transition-colors even:bg-slate-50/50 group"
                        >
                          <th className="px-6 md:px-10 py-5 md:py-6 font-bold text-slate-900 w-2/5 md:w-1/3 align-top group-hover:text-[#06999b] transition-colors">
                            {String(title)}
                          </th>
                          <td className="px-6 md:px-10 py-5 md:py-6 text-slate-600 leading-relaxed font-medium">
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
