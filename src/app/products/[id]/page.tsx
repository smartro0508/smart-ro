import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/mockData";
import { ArrowLeft, Droplet, Settings2, ShieldCheck, ArrowRight, CheckCircle2, Target, FileText } from "lucide-react";

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
    <div className="bg-slate-50 min-h-screen font-sans text-slate-700 selection:bg-primary/20">
      
      {/* ── CORPORATE BREADCRUMB ── */}
      <div className="bg-white border-b border-slate-200 pt-28 pb-4">
        <div className="container-custom">
          <Link href="/products" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors font-semibold text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products Catalog
          </Link>
        </div>
      </div>

      {/* ── CORPORATE HERO SECTION ── */}
      <section className="bg-white py-12 lg:py-20 border-b border-slate-200">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Product Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-4 flex items-center justify-center shadow-sm">
                <div className="relative w-full h-full rounded-lg overflow-hidden border border-slate-100 shadow-sm bg-white">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="lg:col-span-7">
              <div className="inline-block px-3 py-1 rounded bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold tracking-wider uppercase mb-4">
                {product.category}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-6 tracking-tight">
                {product.name}
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quick Specs List */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#0F172A] block text-base">Advanced Technology</span>
                    <span className="text-slate-600 text-sm">{product.technology} filtration system.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#0F172A] block text-base">High Capacity</span>
                    <span className="text-slate-600 text-sm">Engineered for up to {product.capacity} delivery.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#0F172A] block text-base">Versatile Application</span>
                    <span className="text-slate-600 text-sm">Perfectly suited for {product.suitableFor}.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#0F172A] text-white font-semibold rounded-lg hover:bg-primary transition-colors duration-200 shadow-sm text-base"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#0F172A] font-semibold rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors duration-200 text-base"
                >
                  <FileText className="w-5 h-5 mr-2 text-slate-500" />
                  Download Brochure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECIFICATIONS TABLE ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Technical Specifications</h2>
            <p className="text-slate-600 text-base">Detailed performance metrics for the {product.name}.</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
             <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                
                {/* Spec Block 1 */}
                <div className="p-8 flex items-start gap-5 hover:bg-slate-50 transition-colors">
                   <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                     <Settings2 className="w-5 h-5 text-slate-600" />
                   </div>
                   <div>
                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Filtration Technology</div>
                     <div className="text-xl font-bold text-[#0F172A]">{product.technology}</div>
                   </div>
                </div>

                {/* Spec Block 2 */}
                <div className="p-8 flex items-start gap-5 hover:bg-slate-50 transition-colors">
                   <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                     <Droplet className="w-5 h-5 text-slate-600" />
                   </div>
                   <div>
                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Operating Capacity</div>
                     <div className="text-xl font-bold text-[#0F172A]">{product.capacity}</div>
                   </div>
                </div>

                {/* Spec Block 3 */}
                <div className="p-8 flex items-start gap-5 border-t border-slate-200 hover:bg-slate-50 transition-colors">
                   <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                     <Target className="w-5 h-5 text-slate-600" />
                   </div>
                   <div>
                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Target Application</div>
                     <div className="text-xl font-bold text-[#0F172A]">{product.suitableFor}</div>
                   </div>
                </div>

                {/* Spec Block 4 */}
                <div className="p-8 flex items-start gap-5 border-t border-slate-200 hover:bg-slate-50 transition-colors">
                   <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                     <ShieldCheck className="w-5 h-5 text-slate-600" />
                   </div>
                   <div>
                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Quality Standard</div>
                     <div className="text-xl font-bold text-[#0F172A]">ISO 9001:2015 Certified</div>
                   </div>
                </div>

             </div>
          </div>
        </div>
      </section>

      {/* ── CORPORATE ADVANTAGES ── */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Value Proposition</h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">Delivering consistent, high-purity water solutions designed for rigorous operational environments.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
             {[
               { icon: ShieldCheck, title: "Industry-Leading Purity", desc: "Guaranteed removal of up to 99.9% of dissolved solids and harmful microbiological impurities." },
               { icon: Settings2, title: "Operational Reliability", desc: "Constructed with industrial-grade components to minimize downtime and maintenance overhead." },
               { icon: Droplet, title: "Cost-Effective Operation", desc: "Optimized water recovery rates reducing overall operational and waste management costs." }
             ].map((feat, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors duration-200">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-6 border border-slate-200 shadow-sm">
                    <feat.icon className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2 text-lg">{feat.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{feat.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── CORPORATE CTA ── */}
      <section className="py-16 bg-[#0F172A] text-white">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Require a custom configuration?
              </h2>
              <p className="text-slate-300 text-sm max-w-xl">
                Our engineering team is ready to consult on specific requirements for {product.name} integration.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-white hover:text-[#0F172A] transition-colors duration-200 text-base"
              >
                Contact Engineering Sales
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
