import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Wrench,
  Settings,
  Droplet,
  ChevronRight,
  Phone,
  MessageCircle,
  Star,
  Quote,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Leaf,
  Heart,
  ClipboardList,
  Droplets,
} from "lucide-react";
import { API_BASE_URL } from "@/config";
import { constructMetadata, SEO_CONFIG } from "@/seo.config";
import type { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  canonicalUrl: "/",
});

export const dynamic = 'force-dynamic';

export default function Home() {
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
    <main className="bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustBadges />
      <FeaturedProducts />
      <OurSolutions />
      <SmartROAdSection />
      <QuickFeatures />
      <AdvancedTechnology />
      <WhyChooseUs />
      <ProfessionalInstallation />
      <Testimonials />
      <CTASection />
    </main>
  );
}

// ----------------------------------------------------------------------
// Hero
// ----------------------------------------------------------------------
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1120]">
      {/* ── Background Image ── */}
      <Image
        src="/ro-electronics-banner.jpeg"
        alt="Industrial RO Electronics"
        fill
        className="object-cover opacity-40 mix-blend-luminosity"
        priority
      />

      {/* ── Corporate Grid Overlay ── */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />

      {/* ── Content ── */}
      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-28 pb-20 md:pt-36 md:pb-28">
        {/* Left */}
        <div>
          {/* Enhanced Tag */}
          <div className="inline-flex items-center gap-2.5 text-xs font-bold text-[#4ea8de] uppercase tracking-widest border border-[#4ea8de]/30 bg-[#4ea8de]/10 backdrop-blur-sm px-5 py-2.5 mb-8 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ea8de] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ea8de]"></span>
            </span>
            Special Offer
          </div>

          {/* Enhanced Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
            Get a FREE  <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ea8de] to-[#06999b]">RO Demo! 💧</span>
          </h1>

          {/* Enhanced Subtext */}
          <div className="relative mb-10 max-w-lg">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#4ea8de] to-[#06999b] rounded-full" />
            <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed pl-6 drop-shadow-md">
              First Service <span className="text-white font-black tracking-wide">FREE</span> — Call Now!
            </p>
          </div>

          {/* Enhanced Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/products"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#06999b] to-[#4ea8de] text-white text-sm font-bold tracking-wide rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(6,153,155,0.4)] border border-white/10"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10">Explore Products</span>
            </Link>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="relative z-10">Contact us</span>
            </Link>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400 font-bold tracking-widest uppercase">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4ea8de]" /> ISO 9001
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4ea8de]" /> 24/7 SLA
            </span>
          </div>
        </div>

        {/* Right — Technical Specs Card */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-[420px]">
            {/* Main structural card */}
            <div className="bg-[#0A1120]/80 backdrop-blur-md border border-slate-700 p-10 shadow-2xl rounded-sm">
              <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                <p className="text-xs font-bold text-[#4ea8de] uppercase tracking-widest">
                  Purification Metrics
                </p>
                <ShieldCheck className="w-5 h-5 text-[#4ea8de]" />
              </div>

              <div className="space-y-4">
                {[
                  { label: "Particulate Removal", value: "99.9%" },
                  { label: "TDS Reduction", value: "Up to 98%" },
                  { label: "Microbial Eradication", value: "99.99%" },
                  { label: "Recovery Rate", value: "Optimized" },
                  { label: "System Uptime", value: "99.9%" },
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm font-semibold">
                      {stat.label}
                    </span>
                    <span className="text-white text-sm font-bold">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-white">Class A</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">
                      Industrial Standard
                    </p>
                  </div>
                  <div className="w-12 h-12 border border-[#4ea8de] flex items-center justify-center bg-[#4ea8de]/10 rounded-sm">
                    <Settings className="w-6 h-6 text-[#4ea8de]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Accent */}
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#4ea8de]" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#4ea8de]" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-20 pointer-events-none" />
    </section>
  );
}

// ----------------------------------------------------------------------
// SmartRO Ad Section
// ----------------------------------------------------------------------
function SmartROAdSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-20 border-b border-slate-200">
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/smart-ro-ad-banner.png"
          alt="Smart RO Water Purifier Advertisement"
          fill
          className="object-cover object-right lg:object-center"
          priority
        />
        {/* Subtle gradient overlay to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      {/* ── Content ── */}
      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-16 pb-20 md:pt-24 md:pb-28">
        {/* Left Side Marketing Content */}
        <div className="max-w-xl">
          <h2 className="text-[#06999b] font-black tracking-widest uppercase text-sm mb-4">
            Smart RO Water
          </h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0f3a61] leading-[1.1] tracking-tight mb-8">
            Pure Water. <br />
            <span className="text-slate-800 font-light">Smart Life.</span>
          </h1>

          <div className="space-y-5 mb-12">
            {[
              "Advanced Multi-Stage Purification",
              "UV Protection for Extra Safety",
              "Smart LED Display",
              "Real-Time Alerts",
              "Wi-Fi Enabled App Monitoring",
              "High Water Recovery",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-[#06999b]/10 border border-[#06999b]/20 flex items-center justify-center shrink-0 group-hover:bg-[#06999b]/20 transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#06999b]"></div>
                </div>
                <span className="text-slate-700 font-semibold text-base">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#057a7c] transition-colors duration-300 shadow-xl shadow-[#06999b]/20"
            >
              System Specifications
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/30 backdrop-blur-md border border-[#0f3a61]/10 text-[#0f3a61] text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white/50 transition-colors duration-300"
            >
              Consult Engineering
            </Link>
          </div>
        </div>

        {/* Right side is intentionally left empty to showcase the product in the background image */}
        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// TrustBadges
// ----------------------------------------------------------------------
function TrustBadges() {
  const badges = [
    { icon: Droplet, label: "Pure Water", sub: "100% Safe" },
    { icon: ShieldCheck, label: "Advanced", sub: "Purification" },
    { icon: Leaf, label: "Eco-Friendly", sub: "Operations" },
    { icon: Heart, label: "Trusted", sub: "By Thousands" },
  ];

  return (
    <section className="relative z-30 -mt-20 px-4 md:px-0">
      <div className="container-custom">
        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white p-2 md:p-4 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center gap-4 py-6 px-4 md:px-8 group hover:bg-slate-50/80 transition-all duration-300 rounded-2xl md:rounded-none first:rounded-l-2xl last:rounded-r-2xl"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#06999b]/10 to-[#0f3a61]/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:from-[#06999b] group-hover:to-[#0f3a61] transition-all duration-500 shadow-inner">
                <badge.icon
                  className="w-6 h-6 text-[#06999b] group-hover:text-white transition-colors duration-500"
                  strokeWidth={2}
                />
              </div>
              <div className="text-center md:text-left flex flex-col">
                <span className="text-sm font-black text-slate-900 leading-tight group-hover:text-[#06999b] transition-colors">
                  {badge.label}
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                  {badge.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// QuickFeatures
// ----------------------------------------------------------------------
const quickFeatures = [
  {
    icon: Droplet,
    title: "RO Products",
    desc: "Comprehensive range of RO systems for residential, commercial & industrial facilities.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Wrench,
    title: "RO Installation",
    desc: "Precision installation and configuration by certified technical experts.",
    color: "from-emerald-500 to-teal-400"
  },
  {
    icon: Settings,
    title: "RO Service",
    desc: "Scheduled maintenance, diagnostics, and authentic component replacement.",
    color: "from-indigo-500 to-blue-400"
  },
  {
    icon: ShieldCheck,
    title: "Water Treatment",
    desc: "End-to-end water treatment solutions tailored for specialized applications.",
    color: "from-cyan-500 to-teal-400"
  },
];

function QuickFeatures() {
  return (
    <section className="bg-[#f8fafc] py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#06999b]/5 to-[#4ea8de]/5 blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-[#0f3a61]/5 to-[#06999b]/5 blur-3xl mix-blend-multiply" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#06999b] uppercase tracking-widest mb-3 block">
            Our Core Competencies
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Comprehensive Purification Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {quickFeatures.map((f, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(6,153,155,0.12)] border border-slate-100 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3`}>
                  <f.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-[#0f3a61] transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                  {f.desc}
                </p>

                {/* Decorative line */}
                <div className="mt-auto pt-6 w-full flex items-center">
                  <div className="h-[3px] w-8 bg-slate-200 rounded-full group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-[#06999b] group-hover:to-[#4ea8de] transition-all duration-700 ease-out" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

async function getServices() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/services/get-all`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

async function OurSolutions() {
  const allServices = await getServices();
  const displayedServices = allServices.slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-200 pb-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest mb-3 block">
              Professional Care
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              RO Services & Maintenance
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md md:text-right">
            Comprehensive support and lifecycle management to ensure your purification infrastructure operates at peak performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {displayedServices.map((srv: any, i: number) => (
            <Link
              href={`/services`}
              key={i}
              className="group bg-white flex flex-col rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(6,153,155,0.12)] hover:border-[#06999b]/30 transition-all duration-300 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#06999b]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              <div className="relative h-44 overflow-hidden bg-slate-100 border-b border-slate-100">
                <img
                  src={srv.image ? `${API_BASE_URL}/uploads/images/${srv.image}` : "/placeholder.png"}
                  alt={srv.servicename}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow relative z-20 bg-white">
                <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-[#0f3a61] transition-colors line-clamp-1">
                  {srv.servicename}
                </h3>
                {(Number(srv.servicecost) > 0 || Number(srv.serviceproductcost) > 0) && (
                  <div className="flex flex-col gap-2 mb-4 bg-slate-50/70 p-3 rounded-xl border border-slate-100/80">
                    {Number(srv.servicecost) > 0 && (
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500 font-medium">Service Fee:</span>
                        <span className="font-bold text-slate-800">₹{Number(srv.servicecost).toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    {Number(srv.serviceproductcost) > 0 && (
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500 font-medium">Product/Parts:</span>
                        <span className="font-bold text-slate-800">₹{Number(srv.serviceproductcost).toLocaleString('en-IN')}</span>
                      </div>
                    )}
                  </div>
                )}
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow line-clamp-3">
                  {srv.description}
                </p>

                <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between group-hover:border-slate-200 transition-colors">
                  <span className="text-xs font-bold text-[#06999b] uppercase tracking-wider transition-colors">
                    View Details
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#0f3a61] transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* View All Card */}
          <Link
            href="/services"
            className="group bg-[#0A1120] relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(15,58,97,0.3)] transition-all duration-300 flex flex-col items-center justify-center p-8 text-center min-h-[250px]"
          >
            {/* Decorative background in dark card */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#06999b]/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#06999b]/30 rounded-full blur-3xl pointer-events-none group-hover:bg-[#0f3a61]/50 transition-colors duration-500" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#06999b] group-hover:border-[#06999b] transition-all duration-300 shadow-lg">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-white text-xl mb-3">View All<br />Services</h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-[150px]">Explore our complete range of RO maintenance solutions.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// FeaturedProducts
// ----------------------------------------------------------------------
async function getFeaturedProducts() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/products/get-all`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
}

async function FeaturedProducts() {
  const allProducts = await getFeaturedProducts();
  // Filter for featured products, or just take all if none are featured
  let products = allProducts.filter((p: any) => p.isFeatured);
  if (products.length === 0) {
    products = allProducts;
  }

  const displayedProducts = products.slice(0, 5);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Featured Hardware
            </h2>
            <div className="w-16 h-1 bg-[#0f3a61]"></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((p: any, i: number) => (
            <Link
              href={`/products/${p.id}`}
              key={p.id || i}
              className="group relative bg-gradient-to-b from-white to-[#f0f9ff] rounded-3xl p-5 md:p-6 flex flex-col transition-all duration-500 hover:-translate-y-1 border border-[#06999b]/15 hover:border-[#4ea8de]/50 ring-1 ring-white/80 hover:ring-4 hover:ring-[#4ea8de]/20 overflow-hidden"
            >
              {/* Subtle Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f0f9ff]/50 to-[#06999b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Image & Badges */}
              <div className="relative h-72 w-full mb-6 bg-slate-50/50 rounded-2xl flex items-center justify-center p-4 overflow-hidden transition-all duration-500">
                {/* Soft background glow on hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#06999b]/5 rounded-full blur-3xl group-hover:bg-[#06999b]/12 transition-colors duration-700"></div>

                {p.isFeatured && (
                  <div className="absolute z-20 top-4 left-4 bg-white/90 backdrop-blur-md text-[#06999b] text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-sm border border-slate-100 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#06999b]"></span>
                    Featured
                  </div>
                )}
                <button className="absolute z-20 top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-white transition-all shadow-sm border border-slate-100 hover:scale-105 active:scale-95">
                  <Heart className="w-4 h-4" />
                </button>
                <div className="relative w-full h-full z-10 flex items-center justify-center">
                  <img
                    src={p.mainImage ? `${API_BASE_URL}/uploads/images/${p.mainImage}` : "/placeholder.png"}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-1 relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#06999b] transition-colors line-clamp-1">
                  {p.name}
                </h3>

                <p className="text-sm text-slate-500 mb-6 line-clamp-2 min-h-[40px] leading-relaxed">
                  {p.shortDescription || "Premium Reverse Osmosis Water Purifier"}
                </p>

                <div className="mt-auto">
                  <div className="flex items-end justify-between mb-6 pt-4 border-t border-slate-100/80">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Pricing</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-slate-900">
                          ₹{Number(p.price).toLocaleString('en-IN')}
                        </span>
                        {p.originalPrice && (
                          <span className="text-sm font-medium text-slate-400 line-through">
                            ₹{Number(p.originalPrice).toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Vibrant Gradient Button */}
                  <button className="w-full h-12 bg-gradient-to-r from-[#06999b] to-[#4ea8de] text-white rounded-xl font-bold text-sm tracking-wide flex items-center justify-between px-5 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-[#06999b]/20 pointer-events-none group/btn border border-white/10 relative overflow-hidden">
                    {/* Shine animation effect on hover */}
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                    <span className="relative z-10">View Details</span>

                    <div className="relative z-10 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover/btn:bg-white group-hover/btn:text-[#06999b] transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
                    </div>
                  </button>
                </div>
              </div>
            </Link>
          ))}

          {/* View More Card */}
          <Link
            href="/products"
            className="group bg-[#0A1120] relative rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(15,58,97,0.3)] transition-all duration-300 flex flex-col items-center justify-center p-8 text-center min-h-[350px]"
          >
            {/* Decorative background in dark card */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#06999b]/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#06999b]/30 rounded-full blur-3xl pointer-events-none group-hover:bg-[#0f3a61]/50 transition-colors duration-500" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#06999b] group-hover:border-[#06999b] transition-all duration-300 shadow-lg">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-white text-2xl mb-4">View All<br />Products</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[180px]">Explore our complete range of premium RO water purifiers.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// AdvancedTechnology
// ----------------------------------------------------------------------
const stages = [
  {
    num: "01",
    name: "Particulate Filtration",
    desc: "Mechanical removal of suspended solids and macro-particulates.",
  },
  {
    num: "02",
    name: "Activated Carbon Phase",
    desc: "Adsorption of halogens, volatile organic compounds, and odors.",
  },
  {
    num: "03",
    name: "Reverse Osmosis",
    desc: "Semi-permeable membrane separation of dissolved solids.",
  },
  {
    num: "04",
    name: "UV / UF Sterilization",
    desc: "Ultraviolet irradiation for microbiological neutralization.",
  },
  {
    num: "05",
    name: "Mineralization",
    desc: "Controlled remineralization for optimal pH and taste.",
  },
];

function AdvancedTechnology() {
  return (
    <section className="py-24 bg-[#0a1120] text-white border-t-4 border-[#0f3a61]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <div className="md:w-1/3">
            <span className="text-xs font-bold text-[#4ea8de] uppercase tracking-widest mb-3 block">
              Process Architecture
            </span>
            <h2 className="text-3xl font-bold mb-6">
              Multi-Stage Purification Framework
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Our proprietary purification architecture utilizes a rigorous
              multi-stage separation process to guarantee water quality that
              meets or exceeds international safety standards.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-sm font-bold text-white border-b border-[#4ea8de] pb-1 hover:text-[#4ea8de] transition-colors"
            >
              Explore Our Methodology <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="md:w-2/3">
            <div className="space-y-6">
              {stages.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-6 border-b border-slate-800 pb-6 last:border-0 last:pb-0"
                >
                  <div className="w-10 h-10 shrink-0 border border-slate-700 bg-slate-800/50 flex items-center justify-center font-bold text-xs text-[#4ea8de]">
                    {s.num}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5">
                      {s.name}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// WhyChooseUs
// ----------------------------------------------------------------------
const statsInfo = [
  { value: "10+", label: "Years Operations", icon: ShieldCheck },
  { value: "500+", label: "Deployments", icon: Settings },
  { value: "1K+", label: "Corporate Clients", icon: Droplet },
  { value: "24/7", label: "SLA Support", icon: Phone },
];

const whyFeatures = [
  {
    title: "Industrial-Grade Components",
    desc: "Sourcing only certified, heavy-duty parts for maximum uptime.",
    icon: ShieldCheck,
  },
  {
    title: "Engineered Configurations",
    desc: "Systems mapped precisely to source water chemistry and volume metrics.",
    icon: Settings,
  },
  {
    title: "Certified Personnel",
    desc: "Deployment and maintenance executed by authorized technical staff.",
    icon: Wrench,
  },
  {
    title: "Rapid Response SLAs",
    desc: "Guaranteed response times to minimize operational disruption.",
    icon: ShieldCheck,
  },
  {
    title: "Comprehensive AMC",
    desc: "Structured preventative maintenance programs for lifecycle extension.",
    icon: Droplet,
  },
  {
    title: "Compliance Assured",
    desc: "Water quality aligned with rigorous regulatory and industrial standards.",
    icon: HeartHandshake,
  },
];

function WhyChooseUs() {
  return (
    <section className="py-24 bg-white border-y border-slate-200">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Features */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#0f3a61]"></div>
              <span className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest">
                Corporate Value
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 tracking-tight leading-tight">
              Strategic Advantage in Every Drop
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {whyFeatures.map((f, i) => (
                <div key={i} className="flex flex-col border-t border-slate-100 pt-6">
                  <div className="w-10 h-10 rounded bg-[#0f3a61]/5 border border-[#0f3a61]/10 flex items-center justify-center text-[#0f3a61] mb-4">
                    <f.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Corporate Stats */}
          <div className="relative h-full flex flex-col justify-center mt-10 lg:mt-0">
            {/* Corporate geometric background accent */}
            <div className="absolute top-0 right-0 w-3/4 h-full bg-slate-50 border border-slate-200 -z-10 translate-x-4 translate-y-4"></div>

            <div className="bg-[#0f3a61] p-10 md:p-14 shadow-xl relative overflow-hidden">
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

              <div className="relative z-10 grid grid-cols-2 gap-x-8 gap-y-12">
                {statsInfo.map((s, i) => (
                  <div
                    key={i}
                    className="text-left border-l-2 border-[#06999b] pl-6"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-blue-200">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Corporate seal/accent */}
              <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-300">ISO 9001:2015 Certified Operations</span>
                <ShieldCheck className="w-6 h-6 text-[#06999b]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// ProfessionalInstallation
// ----------------------------------------------------------------------
function ProfessionalInstallation() {
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-80 lg:h-auto min-h-[500px] border-b lg:border-b-0 lg:border-r border-slate-200">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHWzOUItqZ9aqLnQVnVTBdXAdPixHi2qIFRSNyYWzEw&s=10"
            alt="Technical Operations"
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>

        <div className="p-12 lg:p-20 flex flex-col justify-center">
          <span className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest mb-3 block">
            Operations
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Deployment & Maintenance
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Wrench className="w-5 h-5 text-[#0f3a61]" /> System
                Commissioning
              </h3>
              <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                {[
                  "Site & telemetry inspection",
                  "Hardware specification matching",
                  "Protocol-driven installation",
                  "TDS calibration & logging",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0f3a61] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Settings className="w-5 h-5 text-[#0f3a61]" /> Lifecycle
                Management
              </h3>
              <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                {[
                  "Scheduled preventative care",
                  "Consumable replacements",
                  "Pneumatic & electrical diagnostics",
                  "Enterprise AMC contracts",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0f3a61] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#057a7c] transition-colors border border-transparent"
            >
              Initiate Deployment
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#057a7c] transition-colors border-none"
            >
              View SLA Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Testimonials
// ----------------------------------------------------------------------
async function getActiveTestimonials() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/testimonials/get-active`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

async function Testimonials() {
  const reviews = await getActiveTestimonials();

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-200 pb-8">
          <div>
            <span className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest mb-3 block">
              Clientele
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Partner Feedback
            </h2>
          </div>
        </div>

        {reviews.length === 0 ? (
          <div className="text-center text-slate-500 py-10 bg-slate-50 border border-slate-100 rounded-xl">
            No testimonials available at the moment.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((r: any, i: number) => (
              <div
                key={r.id || i}
                className="bg-slate-50 border border-slate-200 p-8 flex flex-col"
              >
                <Quote className="w-6 h-6 text-[#06999b] mb-6 opacity-40" />
                <div className="flex text-[#06999b] mb-4">
                  {[...Array(Number(r.rating) || 5)].map((_, idx) => (
                    <svg key={idx} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                  "{r.message}"
                </p>
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-sm font-bold text-slate-900">{r.fullName}</p>
                  {r.company && (
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-1">
                      {r.company}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// CTASection
// ----------------------------------------------------------------------
function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom relative z-10">
        <div className="bg-[#0A1120] relative overflow-hidden shadow-sm border border-slate-800">
          {/* Subtle architectural lines */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]" />

          <div className="relative p-12 md:p-20 flex flex-col lg:flex-row lg:items-center justify-between gap-12 border-l-[6px] border-[#06999b]">
            <div className="max-w-2xl relative z-10">
              <div className="text-[10px] font-bold text-[#06999b] uppercase tracking-widest mb-4">
                Enterprise Infrastructure
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Request a Technical Consultation
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed font-medium max-w-xl">
                Engage with our engineering team to assess your requirements and
                propose a tailored, high-efficiency RO infrastructure solution designed for scale and reliability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 shrink-0">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#06999b] hover:bg-[#057a7c] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                Submit RFP <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Contact Engineering
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
