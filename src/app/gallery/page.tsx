import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplets } from "lucide-react";
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
      <section className="relative pt-28 pb-12 bg-slate-50 overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#f0f9ff] to-transparent pointer-events-none" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-[#06999b]/10 to-[#4ea8de]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white text-xs font-bold text-[#06999b] uppercase tracking-widest mb-6 shadow-sm border border-slate-100">
              <Droplets className="w-3.5 h-3.5" />
              Project Gallery
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              Installations & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06999b] to-[#4ea8de]">Operational Facilities</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium px-4">
              View our extensive portfolio of residential, commercial, and industrial water purification setups, showcasing our commitment to quality and scale.
            </p>
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
