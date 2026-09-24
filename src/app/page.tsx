import Link from "next/link";
import {
  Droplet,
  ShieldCheck,
  Leaf,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Headset,
  Settings2,
  Activity,
  ThumbsUp,
  BatteryCharging,
  Heart,
  ShoppingCart,
  Quote,
  Star,
} from "lucide-react";
import { constructMetadata, SEO_CONFIG } from "@/seo.config";
import type { Metadata } from "next";
import { API_BASE_URL } from "@/config";

export const metadata: Metadata = constructMetadata({
  canonicalUrl: "/",
});

export const dynamic = 'force-dynamic';

async function getProducts() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/products/get-all`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });
    const json = await res.json();
    return (json.data || []).slice(0, 6);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

async function getServices() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/services/get-all`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });
    const json = await res.json();
    return (json.data || []).slice(0, 6);
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

async function getActiveTestimonials() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/testimonials/get-active`, {
      method: "POST",
      cache: "no-store",
    });
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();
  const services = await getServices();
  const testimonials = await getActiveTestimonials();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    logo: `${SEO_CONFIG.siteUrl}/app-logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SEO_CONFIG.contact.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "en",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    }
  };

  return (
    <main className="bg-white font-sans pt-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustBadges />
      <HomeProducts products={products} />
      <AdvancedFiltration />
      <HomeServices services={services} />
      <HealthBenefits />
      <WhyChooseUs />
      <HomeTestimonials testimonials={testimonials} />
      <CTASection />
    </main>
  );
}

/* ─── HERO ──────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[100vh] flex items-center overflow-hidden bg-slate-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="hero-bg.jpeg"
          alt="Advanced RO Water Purification System"
          className="w-full h-full object-cover object-center"
        />

        {/* Desktop Overlay */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-white via-white/10 to-white/0" />

        {/* Mobile Overlay */}
        <div className="absolute inset-0 lg:hidden bg-white/80" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 w-full">
        <div className="max-w-2xl py-20 lg:py-0 lg:pr-10">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="h-[2px] w-10 bg-[#0284c7]" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#0284c7]">
              Pure Water. Healthy Life.
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-bold leading-[1.1] tracking-tight text-[#0f3a61]">
            Advanced RO Purification
            <span className="block text-[#0284c7]">
              For a Healthier Life
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-slate-600">
            Experience advanced water purification technology designed to
            remove harmful contaminants and deliver clean, fresh and healthy
            drinking water for your family.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-[#0284c7] px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-sky-200/50 transition-all duration-300 hover:bg-[#0369a1] hover:-translate-y-0.5"
            >
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#0f3a61] backdrop-blur-sm transition-all duration-300 hover:border-[#0284c7] hover:text-[#0284c7]"
            >
              Contact Us
            </Link>
          </div>

          {/* Trust Points */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#0284c7]" />
              Advanced Technology
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#0284c7]" />
              Quality Assured
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#0284c7]" />
              Reliable Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ─── TRUST BADGES ───────────────────────────────────────────────────────── */
function TrustBadges() {
  const badges = [
    { icon: Droplet, label: "Removes", sub: "Harmful Contaminants" },
    { icon: ShieldCheck, label: "Safe &", sub: "Healthy Water" },
    { icon: Settings2, label: "Advanced", sub: "Filtration Technology" },
    { icon: ThumbsUp, label: "Better Taste", sub: "& Freshness" },
    { icon: Leaf, label: "Energy Efficient", sub: "& Eco Friendly" },
  ];

  return (
    <section className="bg-white py-0 border-b border-slate-100 relative z-20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {badges.map((badge, i) => (
            <div key={i} className="group flex flex-col items-center text-center px-6 py-10 hover:bg-slate-50/70 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#0b2d4e]/5 border border-[#0b2d4e]/8 flex items-center justify-center mb-4 group-hover:bg-[#0b2d4e] group-hover:border-[#0b2d4e] transition-all duration-300 group-hover:shadow-lg">
                <badge.icon className="w-5 h-5 text-[#0284c7] group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
              </div>
              <h4 className="text-[13px] font-black text-[#0b2d4e] uppercase tracking-[0.1em] leading-snug">
                {badge.label}
              </h4>
              <p className="text-[12px] text-slate-400 font-medium mt-0.5">{badge.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HOME PRODUCTS ──────────────────────────────────────────────────────── */
function HomeProducts({ products }: { products: any[] }) {
  if (!products || products.length === 0) return null;
  return (
    <section className="py-24 lg:py-32 bg-[#f8fafc] border-b border-slate-100">
      <div className="container-custom">
        {/* header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-7 bg-gradient-to-b from-[#0284c7] to-[#06999b] rounded-full" />
              <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-[0.2em]">Product Range</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0b2d4e] tracking-tight leading-tight">Our Top Products</h2>
          </div>
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-xs">Discover our premium range of water purifiers engineered for every need.</p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => {
            const isBestSeller = index === 0;
            const isNew = index === 1;
            const originalPrice = product.originalPrice || (product.price * 1.25);
            const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);

            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl flex flex-col border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden relative"
              >
                {/* top accent on hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#0284c7] to-[#06999b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative h-64 w-full bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-6">
                  {(isBestSeller || isNew) && (
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-[#0284c7] to-[#06999b] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                      {isBestSeller ? "Best Seller" : "New"}
                    </div>
                  )}
                  <button className="absolute top-4 right-4 z-10 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors border border-slate-100">
                    <Heart className="w-4 h-4" />
                  </button>
                  <Link href={`/products/${product.id}`} className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={product.mainImage ? `${API_BASE_URL}/uploads/images/${product.mainImage}` : "/placeholder.png"}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>
                </div>

                <div className="p-6 flex flex-col flex-grow border-t border-slate-50">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-[16px] font-extrabold text-[#0b2d4e] leading-tight mb-1 group-hover:text-[#0284c7] transition-colors line-clamp-1">{product.name}</h3>
                    <p className="text-[13px] text-slate-400 mb-4 font-medium line-clamp-1">{product.shortDescription || "Advanced Water Purification"}</p>
                  </Link>

                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[12px] font-bold text-slate-400">4.8 <span className="font-normal">(1,245)</span></span>
                  </div>

                  <div className="flex items-center gap-3 text-[12px] font-bold text-slate-500 mb-5 bg-slate-50 rounded-xl px-3 py-2">
                    <div className="flex items-center gap-1.5"><Droplet className="w-4 h-4 text-[#0284c7]" /> 8L Capacity</div>
                    <div className="w-px h-3 bg-slate-300" />
                    <div>RO + UV + UF</div>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-black text-[#0b2d4e]">₹{Number(product.price).toLocaleString('en-IN')}</span>
                      <span className="text-[14px] text-slate-400 line-through">₹{Number(originalPrice).toLocaleString('en-IN')}</span>
                      <span className="text-[10px] font-bold text-[#059669] bg-[#d1fae5] border border-[#a7f3d0] px-2 py-1 rounded ml-auto uppercase">{discount}% OFF</span>
                    </div>
                    <Link href={`/products/${product.id}`} className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#0b2d4e] to-[#0284c7] hover:from-[#0f3a61] hover:to-[#0369a1] text-white text-[14px] font-bold rounded-xl transition-all shadow-lg shadow-[#0b2d4e]/20 hover:-translate-y-0.5">
                      <ShoppingCart className="w-4 h-4" /> View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/products" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white border-2 border-[#0b2d4e]/15 hover:border-[#0284c7]/40 hover:bg-[#f0f8ff] text-[#0b2d4e] text-[15px] font-bold rounded-xl transition-all duration-300 shadow-sm">
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── ADVANCED FILTRATION ────────────────────────────────────────────────── */
function AdvancedFiltration() {
  return (
    <section className="bg-white py-24 lg:py-36 border-b border-slate-100 overflow-hidden">
      <div className="container-custom">
        {/* header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-gradient-to-r from-[#0b2d4e] to-[#0284c7] rounded-full" />
            <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-[0.2em]">The Power of RO</span>
            <div className="h-[2px] w-8 bg-gradient-to-r from-[#0284c7] to-[#06999b] rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0b2d4e] leading-tight tracking-tight">
            Pure Water Through <br className="hidden md:block" />Advanced Filtration
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* image */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl bg-[#0b2d4e]/6" />
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-slate-200/60">
              <img
                src="glass.jpeg"
                alt="Glass of pure water"
                className="w-full object-cover aspect-[4/5] hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>

          {/* text */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h3 className="text-3xl font-black text-[#0b2d4e] mb-4 tracking-tight">Uncompromising Quality Standard</h3>
              <p className="text-[16px] text-slate-500 leading-[1.8]">
                Our RO purifier utilizes a meticulously engineered multi-stage filtration process. It systematically removes dissolved impurities, heavy metals, and harmful pathogens, ensuring the water you consume meets the highest standards of safety and purity.
              </p>
            </div>

            {/* filter stages */}
            <div className="bg-[#f8fafc] rounded-2xl border border-slate-100 p-8 flex flex-col sm:flex-row items-start gap-8">
              <div className="w-28 lg:w-36 shrink-0 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <img src="/filter.jpeg" alt="Filter layers" className="w-full h-auto object-cover" />
              </div>
              <div className="space-y-6 flex-1">
                {[
                  { step: "01", name: "Sediment Filter", desc: "Isolates and removes macro-particles and dust." },
                  { step: "02", name: "Carbon Filter", desc: "Neutralizes chlorine and organic compounds." },
                  { step: "03", name: "RO Membrane", desc: "Extracts dissolved heavy metals and bacteria." },
                  { step: "04", name: "Post Carbon", desc: "Final stage enhancement for optimal taste." },
                ].map((layer, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <span className="text-[11px] font-black text-[#06999b] tracking-widest mt-0.5 shrink-0">{layer.step}</span>
                    <div>
                      <h4 className="text-[14px] font-black text-[#0b2d4e] mb-0.5">{layer.name}</h4>
                      <p className="text-[13px] text-slate-500 leading-relaxed">{layer.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#0b2d4e] hover:bg-[#0f3a61] text-white text-[14px] font-bold uppercase tracking-[0.12em] rounded-xl transition-all duration-300 shadow-lg"
            >
              Explore Specifications <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HOME SERVICES ──────────────────────────────────────────────────────── */
function HomeServices({ services }: { services: any[] }) {
  if (!services || services.length === 0) return null;
  return (
    <section className="py-24 lg:py-32 bg-[#f8fafc] border-b border-slate-100">
      <div className="container-custom">
        {/* header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-7 bg-gradient-to-b from-[#0284c7] to-[#06999b] rounded-full" />
              <span className="text-[11px] font-bold text-[#06999b] uppercase tracking-[0.2em]">Support & Maintenance</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0b2d4e] tracking-tight leading-tight">Our Premium Services</h2>
          </div>
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-xs">Professional operations, maintenance, and support for your RO systems.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((service, i) => (
            <div
              key={service.id || i}
              className="group relative bg-white rounded-2xl border border-slate-100 p-8 flex flex-col hover:border-[#0284c7]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#0284c7] to-[#06999b] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#0b2d4e] group-hover:border-[#0b2d4e] group-hover:shadow-lg transition-all duration-300">
                <Settings2 className="w-6 h-6 text-[#0284c7] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-[17px] font-extrabold text-slate-900 mb-3 group-hover:text-[#0b2d4e] transition-colors leading-tight">{service.servicename}</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed mb-6 flex-grow line-clamp-2">{service.description}</p>
              <div className="pt-5 border-t border-slate-100 mt-auto flex items-center justify-between group-hover:border-slate-200 transition-colors">
                <Link href="/services" className="text-[11px] font-bold text-[#0284c7] uppercase tracking-[0.14em]">View Details</Link>
                <Link href="/services" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[#0b2d4e] group-hover:border-[#0b2d4e] transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-[#0f3a61] to-[#06999b] hover:from-[#0a2d4e] hover:to-[#057a7c] text-white text-[15px] font-bold rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── HEALTH BENEFITS ────────────────────────────────────────────────────── */
function HealthBenefits() {
  const benefits = [
    "Boosts Immunity",
    "Improves Digestion",
    "Keeps You Hydrated",
    "Supports Overall Well-being",
  ];

  return (
    <section className="bg-white py-24 lg:py-32 border-b border-slate-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* image */}
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -bottom-6 -left-6 w-full h-full rounded-3xl bg-[#0b2d4e]/6" />
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-slate-200/60">
              <img
                src="water.jpeg"
                alt="Child drinking healthy water"
                className="w-full h-[480px] object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>

          {/* content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-10 bg-gradient-to-r from-[#0284c7] to-[#06999b] rounded-full" />
              <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-[0.2em]">Clean Water For A Healthier Tomorrow</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0b2d4e] leading-tight tracking-tight mb-6">
              Better Health for Your Family
            </h2>
            <p className="text-[16px] text-slate-500 leading-[1.8] mb-10">
              Pure water isn't just a luxury, it's a necessity. Give your family the goodness of clean, safe and refreshing water, every day.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0284c7]/10 to-[#06999b]/10 border border-[#0284c7]/15 flex items-center justify-center shrink-0 group-hover:from-[#0284c7] group-hover:to-[#06999b] group-hover:border-transparent transition-all duration-300">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] group-hover:text-white transition-colors" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] font-bold text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── WHY CHOOSE US ──────────────────────────────────────────────────────── */
function WhyChooseUs() {
  const reasons = [
    { icon: Activity, label: "High Purification", sub: "Rate", desc: "Advanced multi-stage filtration for maximum purity." },
    { icon: Settings2, label: "Smart & Modern", sub: "Design", desc: "Sleek aesthetics that complement your space perfectly." },
    { icon: Wrench, label: "Easy Installation", sub: "& Maintenance", desc: "Hassle-free setup and low maintenance requirements." },
    { icon: ShieldCheck, label: "Long Lasting", sub: "Performance", desc: "Built with premium materials for years of reliable use." },
    { icon: Headset, label: "Reliable Customer", sub: "Support", desc: "Dedicated service team ready to assist you anytime." },
  ];

  return (
    <section className="relative bg-[#f8fafc] py-24 lg:py-32 border-b border-slate-100 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-gradient-to-r from-[#0b2d4e] to-[#0284c7] rounded-full" />
            <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-[0.2em]">Premium Quality</span>
            <div className="h-[2px] w-8 bg-gradient-to-r from-[#0284c7] to-[#06999b] rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0b2d4e] tracking-tight leading-tight mb-5">
            Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] to-[#06999b]">RO Purifier?</span>
          </h2>
          <p className="text-slate-500 text-[16px] leading-relaxed">
            Experience the perfect blend of advanced technology, elegant design, and uncompromising performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center text-center px-6 py-9 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#0284c7] to-[#06999b] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
              <div className="w-16 h-16 rounded-2xl bg-[#0b2d4e]/5 border border-[#0b2d4e]/8 flex items-center justify-center mb-6 group-hover:bg-[#0b2d4e] group-hover:border-[#0b2d4e] group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-[#0284c7] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-black text-[#0b2d4e] leading-tight mb-2.5">
                {reason.label} <span className="font-bold">{reason.sub}</span>
              </h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-medium">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ───────────────────────────────────────────────────────── */
function HomeTestimonials({ testimonials }: { testimonials: any[] }) {
  if (!testimonials || testimonials.length === 0) return null;
  return (
    <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-gradient-to-r from-[#0b2d4e] to-[#0284c7] rounded-full" />
            <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-[0.2em]">Client Reviews</span>
            <div className="h-[2px] w-8 bg-gradient-to-r from-[#0284c7] to-[#06999b] rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0b2d4e] tracking-tight mb-4">What Our Customers Say</h2>
          <p className="text-slate-500 text-[16px] leading-relaxed">Real experiences from people who trust our water purification systems.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <div key={t.id || i} className="group bg-white rounded-3xl border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-8 flex flex-col overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#0b2d4e] to-[#06999b] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              <Quote className="absolute -bottom-4 -right-4 w-24 h-24 text-slate-50 group-hover:text-[#06999b]/5 transition-colors duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-0.5 mb-6 text-amber-400">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} className={`w-4 h-4 ${idx < (t.rating || 5) ? 'fill-current' : 'fill-slate-100 text-slate-100'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-[15px] text-slate-600 leading-[1.8] mb-8 italic flex-grow">
                  &ldquo;{t.message}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-5 border-t border-slate-100 mt-auto">
                  <div className="w-11 h-11 bg-gradient-to-br from-[#0b2d4e] to-[#0284c7] rounded-full flex items-center justify-center text-white font-black text-sm shadow-md shrink-0">
                    {(t.fullName || "U").charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-black text-[#0b2d4e] text-[14px]">{t.fullName || "Anonymous User"}</h4>
                    <p className="text-[11px] text-[#06999b] font-bold uppercase tracking-[0.12em] mt-0.5">{t.designation || "Customer"}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA SECTION ────────────────────────────────────────────────────────── */
function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-[#f8fafc]">
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b2d4e] via-[#0d3560] to-[#082136]" />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0284c7] blur-[120px] rounded-full opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#06999b] blur-[100px] rounded-full opacity-15 pointer-events-none -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 p-10 md:p-16 lg:p-24 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
                Clean Water. A Healthier You.
              </h2>
              <p className="text-white/60 text-[17px] leading-relaxed">
                Upgrade to a smarter way of living with our RO purifier.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white hover:bg-slate-50 text-[#0b2d4e] text-[15px] font-black rounded-xl transition-all duration-300 shadow-2xl hover:-translate-y-1 shrink-0 uppercase tracking-[0.1em]"
            >
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
