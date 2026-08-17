import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/mockData";
import { Droplet, Settings2, ShieldCheck, CheckCircle2, Target, FileText, Maximize2, Check, ShoppingCart, Truck, RefreshCcw, ClipboardList, Droplets, Phone } from "lucide-react";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pt-24">
      <div className="container-custom py-10">
        <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-slate-100 p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column: Images */}
            <div className="flex gap-4">
              {/* Thumbnails */}
              <div className="flex flex-col gap-4 w-20 shrink-0">
                {[1,2,3,4].map((i) => (
                  <div key={i} className={`w-full aspect-square rounded-xl border-2 flex items-center justify-center p-2 cursor-pointer ${i === 1 ? 'border-[#06999b]' : 'border-slate-100 hover:border-slate-300'}`}>
                    <div className="relative w-full h-full">
                      <Image src={product.image} alt="thumb" fill className="object-contain mix-blend-multiply" />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Main Image */}
              <div className="relative flex-grow bg-slate-50/50 rounded-2xl border border-slate-100 flex items-center justify-center p-8">
                <div className="absolute top-4 left-4 bg-[#06999b] text-white text-[10px] font-bold px-4 py-1.5 rounded-full">
                  New
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors border border-slate-100">
                  <Maximize2 className="w-4 h-4" />
                </button>
                <div className="relative w-full aspect-[4/5]">
                  <Image src={product.image} alt={product.name} fill className="object-contain mix-blend-multiply" />
                </div>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="flex flex-col">
              {/* Breadcrumbs */}
              <div className="flex items-center text-[10px] md:text-xs text-slate-400 font-medium mb-4">
                <Link href="/" className="hover:text-[#06999b] transition-colors">Home</Link>
                <span className="mx-2">{'>'}</span>
                <Link href="/products" className="hover:text-[#06999b] transition-colors">RO Purifiers</Link>
                <span className="mx-2">{'>'}</span>
                <span className="text-slate-600">{product.name}</span>
              </div>

              <h1 className="text-3xl font-bold text-slate-900 mb-1">{product.name}</h1>
              <p className="text-sm text-slate-500 mb-4">RO Water Purifier</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-[#06999b]">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <span className="text-sm text-slate-500 font-medium">4.6 (128 Reviews)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-4xl font-bold text-slate-900 mb-1">₹18,999</div>
                <div className="text-xs text-slate-400">Inclusive of all taxes</div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Advanced 7 stage purification with UV protection and smart LED display for pure and healthy water.
              </p>

              {/* Bullet points */}
              <ul className="space-y-3 mb-8">
                {[
                  "7 Stage Advanced Purification",
                  "UV Protection for Extra Safety",
                  "12L Large Storage Capacity",
                  "High Water Recovery",
                  "Smart LED Display",
                  "Real-time Alerts"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#06999b] shrink-0 stroke-[3]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex flex-col gap-3 mb-8">
                <a href="tel:+916383450508" className="w-full py-4 bg-[#06999b] hover:bg-[#057a7c] text-white rounded-lg font-bold flex items-center justify-center gap-3 transition-colors shadow-md shadow-[#06999b]/20 text-base">
                  <Phone className="w-5 h-5" />
                  Call Now: +91 63834 50508
                </a>
                <Link href="/contact" className="w-full border-2 border-[#06999b] text-[#06999b] hover:bg-[#06999b]/5 rounded-lg py-3 font-semibold flex items-center justify-center gap-2 transition-colors">
                  <FileText className="w-4 h-4" />
                  Request Custom Quote
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-600 text-[11px] md:text-xs font-medium">
                  <Truck className="w-4 h-4" /> Free Delivery
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-[11px] md:text-xs font-medium">
                  <ShieldCheck className="w-4 h-4" /> 1 Year Warranty
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-[11px] md:text-xs font-medium">
                  <RefreshCcw className="w-4 h-4" /> 7 Days Return
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Features row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-12 border-t border-slate-100">
            <div className="border border-slate-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4 hover:border-slate-200 transition-colors bg-slate-50/30">
              <div className="w-10 h-10 rounded-full bg-[#06999b]/10 flex items-center justify-center shrink-0">
                <span className="text-[#06999b] font-bold text-sm">7</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">7 Stage Purification</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Advanced 7 stage RO purification for 100% pure water.</p>
              </div>
            </div>
            <div className="border border-slate-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4 hover:border-slate-200 transition-colors bg-slate-50/30">
              <div className="w-10 h-10 rounded-full bg-[#06999b]/10 flex items-center justify-center shrink-0">
                <span className="text-[#06999b] font-bold text-sm">UV</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">UV Protection</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">UV technology kills bacteria and viruses effectively.</p>
              </div>
            </div>
            <div className="border border-slate-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4 hover:border-slate-200 transition-colors bg-slate-50/30">
              <div className="w-10 h-10 rounded-full bg-[#06999b]/10 flex items-center justify-center shrink-0">
                <ClipboardList className="w-4 h-4 text-[#06999b]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">12L Large Storage</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Large storage tank ensures continuous supply of pure water.</p>
              </div>
            </div>
            <div className="border border-slate-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4 hover:border-slate-200 transition-colors bg-slate-50/30">
              <div className="w-10 h-10 rounded-full bg-[#06999b]/10 flex items-center justify-center shrink-0">
                <Droplets className="w-4 h-4 text-[#06999b]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">High Water Recovery</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Saves more water with high recovery technology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
