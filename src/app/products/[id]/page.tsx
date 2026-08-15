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
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      <div className="bg-white border-b border-slate-200 pt-28 pb-4">
        <div className="container-custom">
          <Link href="/products" className="inline-flex items-center text-slate-500 hover:text-[#0f3a61] transition-colors text-xs font-bold uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4 mr-2" /> Hardware Catalog
          </Link>
        </div>
      </div>

      <section className="bg-white py-16 border-b border-slate-200">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[400px] border border-slate-200 bg-slate-50 p-6 rounded-sm">
              <div className="relative w-full h-full">
                <Image src={product.image} alt={product.name} fill className="object-contain mix-blend-multiply" />
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold text-[#0f3a61] uppercase tracking-widest mb-3 block border border-[#0f3a61] bg-[#0f3a61]/5 px-2 py-1 w-max rounded-sm">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                {product.name}
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {product.description}
              </p>
              
              <div className="space-y-4 mb-10 border-l-2 border-[#0f3a61] pl-5">
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-sm">Technology Profile</span>
                  <span className="text-slate-600 text-xs">{product.technology}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-sm">Rated Capacity</span>
                  <span className="text-slate-600 text-xs">{product.capacity}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-sm">Target Deployment</span>
                  <span className="text-slate-600 text-xs">{product.suitableFor}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-[#0f3a61] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#0a2845] transition-colors">
                  Initiate Procurement
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-700 text-xs font-bold uppercase tracking-wider rounded-sm border border-slate-300 hover:bg-slate-50 transition-colors">
                  <FileText className="w-4 h-4 mr-2" /> Data Sheet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container-custom">
          <div className="mb-10 border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Hardware Specifications</h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-8 flex items-center gap-5 hover:bg-slate-50 transition-colors">
                <Settings2 className="w-6 h-6 text-[#0f3a61]" />
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Filtration</div>
                  <div className="text-sm font-bold text-slate-900">{product.technology}</div>
                </div>
              </div>
              <div className="p-8 flex items-center gap-5 hover:bg-slate-50 transition-colors">
                <Droplet className="w-6 h-6 text-[#0f3a61]" />
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Capacity</div>
                  <div className="text-sm font-bold text-slate-900">{product.capacity}</div>
                </div>
              </div>
              <div className="p-8 flex items-center gap-5 border-t border-slate-200 hover:bg-slate-50 transition-colors">
                <Target className="w-6 h-6 text-[#0f3a61]" />
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Deployment</div>
                  <div className="text-sm font-bold text-slate-900">{product.suitableFor}</div>
                </div>
              </div>
              <div className="p-8 flex items-center gap-5 border-t border-slate-200 hover:bg-slate-50 transition-colors">
                <ShieldCheck className="w-6 h-6 text-[#0f3a61]" />
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Standard</div>
                  <div className="text-sm font-bold text-slate-900">ISO 9001 Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1120]">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-white">
            <h2 className="text-2xl font-bold mb-2">Require integration consulting?</h2>
            <p className="text-slate-400 text-sm">
              Our engineering team is ready to consult on specific requirements for {product.name} integration.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#4ea8de] text-[#0A1120] text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white transition-colors shrink-0">
            Consult Engineering
          </Link>
        </div>
      </section>
    </div>
  );
}
