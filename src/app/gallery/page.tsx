import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1606132717013-0941be200427?w=800&q=80", alt: "Home RO System Installation", span: "md:col-span-2 md:row-span-2", category: "Residential" },
  { src: "https://images.unsplash.com/photo-1585820935515-385012351ab6?w=800&q=80", alt: "Commercial Plant", span: "md:col-span-1 md:row-span-1", category: "Commercial" },
  { src: "https://images.unsplash.com/photo-1548345680-f5475ea90f46?w=800&q=80", alt: "Water Softener", span: "md:col-span-1 md:row-span-1", category: "Industrial" },
  { src: "https://images.unsplash.com/photo-1574492695509-5e72cc2dc122?w=800&q=80", alt: "Industrial Setup", span: "md:col-span-2 md:row-span-1", category: "Industrial" },
  { src: "https://images.unsplash.com/photo-1550508518-a63e9f3b55c2?w=800&q=80", alt: "Factory Layout", span: "md:col-span-1 md:row-span-2", category: "Commercial" },
  { src: "https://images.unsplash.com/photo-1606132717013-0941be200427?w=800&q=80", alt: "Premium Filter", span: "md:col-span-1 md:row-span-1", category: "Residential" },
  { src: "https://images.unsplash.com/photo-1585820935515-385012351ab6?w=800&q=80", alt: "Quality Check", span: "md:col-span-1 md:row-span-1", category: "Quality Assurance" },
];

export default function GalleryPage() {
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
            {galleryImages.map((image, i) => (
              <div 
                key={i} 
                className={`relative rounded-xl overflow-hidden group border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 ${image.span}`}
              >
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                    {image.category}
                  </div>
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {image.alt}
                  </h3>
                </div>
              </div>
            ))}
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
