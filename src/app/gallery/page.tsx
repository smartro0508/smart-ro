import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

async function getGalleryImages() {
  try {
    const res = await fetch("http://localhost:5000/api/v1/gallery/get-all", {
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
      {/* ── CORPORATE HERO SECTION ── */}
      <section className="relative pt-32 pb-24 bg-white border-b border-slate-200">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold tracking-wider uppercase mb-6">
            Project Gallery
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 tracking-tight">
            Installations & <br className="hidden md:block" />
            Operational Facilities
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            View our extensive portfolio of residential, commercial, and industrial water purification setups, showcasing our commitment to quality and scale.
          </p>
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
                    src={`http://localhost:5000/uploads/images/${image.image}`} 
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
