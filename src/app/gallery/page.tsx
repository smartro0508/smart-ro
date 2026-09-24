import Link from "next/link";
import { ArrowRight, Camera, Images } from "lucide-react";
import { API_BASE_URL } from "@/config";
import { constructMetadata } from "@/seo.config";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Installation Gallery & Industrial Project Portfolio",
  description:
    "Explore our real-world installation portfolio featuring commercial RO plants, industrial water treatment setups, and residential purifiers across Tamil Nadu.",
  canonicalUrl: "/gallery",
  keywords: [
    "RO Installation Gallery",
    "Commercial RO Plant Projects",
    "Industrial Water Treatment Photos",
    "Water Purifier Installation Coimbatore",
    "Smart RO Project Portfolio",
  ],
});

export const dynamic = "force-dynamic";

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

/* ─── span pattern cycles every 7 items ─────────────────────────────────── */
const SPANS = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];
const CATEGORIES = ["Residential", "Commercial", "Industrial", "Quality Assurance"];

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <div className="bg-white min-h-screen font-sans">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
        ]}
      />
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0b2d4e] pt-28 pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
        {/* grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        {/* ambient glows */}
        <div className="absolute top-0 right-1/4 w-[480px] h-[480px] bg-[#0284c7] blur-[160px] rounded-full opacity-[0.16] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#06999b] blur-[140px] rounded-full opacity-[0.14] pointer-events-none -translate-x-1/2 translate-y-1/2" />

        <div className="container-custom relative z-10 text-center">
          {/* label */}
          <span className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.15] text-white/75 text-[11px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06999b] animate-pulse" />
            Project Gallery
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black text-white tracking-tight leading-[1.05] mb-6">
            Installations &{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">
              Operational Facilities
            </span>
          </h1>

          <p className="text-white/60 text-[17px] leading-[1.75] max-w-2xl mx-auto">
            View our extensive portfolio of residential, commercial, and
            industrial water purification setups, showcasing our commitment to
            quality and scale.
          </p>

          {/* quick stat strip */}
          <div className="mt-12 inline-grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {[
              { val: "500+", label: "Installations" },
              { val: "10+",  label: "Years Active" },
              { val: "100%", label: "SLA Uptime" },
            ].map((s, i) => (
              <div key={i} className="bg-white/[0.05] hover:bg-white/10 transition-colors px-10 py-5 text-center">
                <p className="text-2xl font-black text-white leading-none">{s.val}</p>
                <p className="text-[11px] font-semibold text-white/45 uppercase tracking-[0.14em] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY GRID ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#f8fafc]">
        <div className="container-custom">
          {/* section label */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1.5 h-7 bg-gradient-to-b from-[#0284c7] to-[#06999b] rounded-full" />
                <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-[0.2em]">
                  Our Work
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0b2d4e] tracking-tight leading-tight">
                Project Portfolio
              </h2>
            </div>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-xs">
              Each installation is engineered to the exact specifications of the site.
            </p>
          </div>

          {images.length === 0 ? (
            /* ── empty state ── */
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <div className="w-20 h-20 rounded-2xl bg-[#0b2d4e]/5 border border-[#0b2d4e]/10 flex items-center justify-center mb-6">
                <Images className="w-9 h-9 text-[#0284c7]" />
              </div>
              <h3 className="text-xl font-black text-[#0b2d4e] mb-2">No images yet</h3>
              <p className="text-slate-500 text-[15px] max-w-xs">
                Gallery images will appear here once they are uploaded.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px] md:auto-rows-[280px]">
              {images.map((image: any, i: number) => {
                const span = SPANS[i % SPANS.length];
                const category = CATEGORIES[i % CATEGORIES.length];
                return (
                  <div
                    key={image.id || i}
                    className={`relative rounded-2xl overflow-hidden group border border-slate-200/60 bg-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 ${span}`}
                  >
                    <img
                      src={`${API_BASE_URL}/uploads/images/${image.image}`}
                      alt={`Gallery Image ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* gradient overlay — always slightly present, deepens on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b2d4e]/70 via-[#0b2d4e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                    {/* category badge — slides up on hover */}
                    <div className="absolute bottom-0 inset-x-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                      <span className="inline-flex items-center gap-2 bg-white/[0.12] backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.14em] px-3.5 py-2 rounded-full">
                        <Camera className="w-3.5 h-3.5 text-[#2dd4bf]" />
                        {category}
                      </span>
                    </div>

                    {/* subtle top-left index number */}
                    <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#0b2d4e]/70 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      <span className="text-white text-[11px] font-black leading-none">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.16)]">
            {/* bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b2d4e] via-[#0d3560] to-[#082136]" />
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            {/* glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0284c7] blur-[120px] rounded-full opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#06999b] blur-[100px] rounded-full opacity-15 pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.15] text-white/75 text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06999b] animate-pulse" />
                  Start Your Project
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-5">
                  Ready to start your project?
                </h2>
                <p className="text-white/60 text-[17px] leading-[1.75]">
                  Our team of engineers and installation experts are ready to
                  design a custom water purification solution tailored strictly
                  to your facility's requirements.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white hover:bg-slate-50 text-[#0b2d4e] text-[15px] font-black rounded-xl transition-all duration-300 shadow-2xl hover:-translate-y-1 shrink-0 uppercase tracking-[0.1em]"
              >
                Schedule a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
