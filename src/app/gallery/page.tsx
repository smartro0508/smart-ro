import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { API_BASE_URL } from "@/config";
import { constructMetadata } from "@/seo.config";
import type { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Installation Gallery | Smart RO Projects",
  description: "View our extensive portfolio of residential, commercial, and industrial water purification setups, showcasing our commitment to quality and scale.",
  canonicalUrl: "/gallery",
});

export const dynamic = 'force-dynamic';

async function getGalleryImages() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/gallery/get-all`, {
      method: "POST",
      cache: "no-store",
    });
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
}

export default async function GalleryPage() {
  const images = await getGalleryImages();
  
  // Array of spans and categories to make the grid look dynamic
  const spans = [
    "md:col-span-2 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-1 md:row-span-2",
    "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-1",
  ];
  const categories = ["Residential", "Commercial", "Industrial", "Quality Assurance"];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-700">
      {/* ── CORPORATE HERO CARD ── */}
      <section className="relative pt-24 pb-8 bg-slate-50">
        <div className="container-custom">
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#06999b]/5 to-transparent pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0f3a61]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-20 -translate-y-1/2 w-48 h-48 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none hidden md:block" />
            
            <div className="relative z-10 p-6 md:p-10 lg:p-12">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#0f3a61]/5 text-xs font-bold text-[#0f3a61] uppercase tracking-widest mb-4 border border-[#0f3a61]/10">Project Gallery</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Installations & <br className="hidden md:block" />
                Operational Facilities
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl border-l-4 border-[#06999b] pl-5 font-medium">
                View our extensive portfolio of residential, commercial, and industrial water purification setups, showcasing our commitment to quality and scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {images.map((image: any, i: number) => {
              const span = spans[i % spans.length];
              const category = categories[i % categories.length];
              return (
                <div 
                  key={image.id || i} 
                  className={`relative rounded-xl overflow-hidden group border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 ${span}`}
                >
                  <img 
                    src={`${API_BASE_URL}/uploads/images/${image.image}`} 
                    alt={`Gallery Image ${i + 1}`} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CORPORATE CTA ── */}
      <section className="py-20 bg-[#0F172A] text-white">
        <div className="container-custom max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-10">
            Our team of engineers and installation experts are ready to design a custom water purification solution tailored strictly to your facility's requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-[#06999b] text-white font-bold rounded-lg hover:bg-[#057a7c] transition-colors duration-200 text-base shadow-sm"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
