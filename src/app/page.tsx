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

export default function Home() {
  return (
    <main className="bg-[#f8fafc]">
      <Hero />
      <TrustBadges />
      <QuickFeatures />
      <OurSolutions />
      <SmartROAdSection />
      <FeaturedProducts />
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
      {/* ── Looping background video ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale"
        poster="https://images.unsplash.com/photo-1548345680-f5475ea90f46?q=80&w=1920"
      >
        <source
          src="https://assets.mixkit.co/videos/51952/51952-720.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── Corporate Grid Overlay ── */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />

      {/* ── Content ── */}
      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-28 pb-20 md:pt-36 md:pb-28">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border border-white/20 bg-white/5 px-4 py-2 mb-8 rounded-sm">
            Corporate Infrastructure
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Engineered For <br />
            <span className="text-[#4ea8de]">Pure Performance.</span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-lg border-l-2 border-[#4ea8de] pl-5">
            Enterprise-grade water purification solutions designed to deliver
            reliable, compliant, and scalable water treatment for industries and
            commercial facilities.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#057a7c] transition-colors duration-300"
            >
              System Specifications
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white/20 transition-colors duration-300"
            >
              Consult Engineering
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
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
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
    { icon: Droplet, label: "PURE\nWATER" },
    { icon: ShieldCheck, label: "ADVANCED\nPURIFICATION" },
    { icon: Leaf, label: "HEALTHY\nLIVING" },
    { icon: Heart, label: "TRUSTED\nQUALITY" },
  ];

  return (
    <section className="bg-white border-b border-slate-200 relative z-20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center py-10 px-6 group hover:bg-slate-50 transition-colors"
            >
              <badge.icon
                className="w-10 h-10 text-[#0f3a61] mb-4 group-hover:scale-105 transition-transform"
                strokeWidth={1.5}
              />
              <span className="text-xs font-bold text-slate-800 whitespace-pre-line tracking-widest uppercase">
                {badge.label}
              </span>
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
  },
  {
    icon: Wrench,
    title: "RO Installation",
    desc: "Precision installation and configuration by certified technical experts.",
  },
  {
    icon: Settings,
    title: "RO Service",
    desc: "Scheduled maintenance, diagnostics, and authentic component replacement.",
  },
  {
    icon: ShieldCheck,
    title: "Water Treatment",
    desc: "End-to-end water treatment solutions tailored for specialized applications.",
  },
];

function QuickFeatures() {
  return (
    <section className="bg-slate-50 py-20 border-b border-slate-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {quickFeatures.map((f, i) => (
            <div key={i} className="flex flex-col">
              <div className="w-12 h-12 bg-[#0f3a61] flex items-center justify-center mb-5 rounded-sm">
                <f.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// ROServicesHome
// ----------------------------------------------------------------------
const roServicesHome = [
  {
    title: "RO Installation",
    description: "Professional installation of RO water purifiers with proper connections and complete system testing.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80",
    link: "/services"
  },
  {
    title: "RO Repair & Service",
    description: "Reliable repair and servicing for all common RO water purifier problems, helping restore your machine's performance.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
    link: "/services"
  },
  {
    title: "Filter Replacement",
    description: "Timely filter replacement to maintain water quality and ensure your RO purifier continues to work efficiently.",
    image: "https://images.unsplash.com/photo-1548345680-f5475ea90f46?w=600&q=80",
    link: "/services"
  },
  {
    title: "RO Membrane Replacement",
    description: "Professional RO membrane replacement to improve purification performance and maintain proper water quality.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80",
    link: "/services"
  }
];

function OurSolutions() {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {roServicesHome.map((srv, i) => (
            <Link
              href={srv.link}
              key={i}
              className="group bg-white border border-slate-200 flex flex-col hover:border-[#0f3a61] transition-colors duration-300 shadow-sm hover:shadow-md rounded-sm overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden bg-slate-100">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-slate-900 text-base mb-3 group-hover:text-[#06999b] transition-colors line-clamp-1">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                  {srv.description}
                </p>
                <div className="inline-flex items-center text-xs font-bold text-[#0f3a61] uppercase tracking-wider group-hover:text-blue-700 transition-colors mt-auto">
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
          
          {/* View All Card */}
          <Link
            href="/services"
            className="group bg-[#0A1120] border border-[#0A1120] flex flex-col items-center justify-center p-6 hover:bg-[#0f3a61] transition-colors duration-300 shadow-sm hover:shadow-md rounded-sm text-center min-h-[250px]"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">View All<br/>Services</h3>
            <p className="text-slate-400 text-[11px] leading-relaxed mt-2">Explore our complete range of 10+ RO maintenance & repair solutions.</p>
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/v1/products/get-all`, {
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

  const hasMore = products.length > 6;
  const displayedProducts = products.slice(0, 6);

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
          {hasMore && (
            <Link
              href="/products"
              className="text-[#06999b] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:text-[#057a7c] transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((p: any, i: number) => (
            <Link
              href={`/products/${p.id}`}
              key={p.id || i}
              className="group bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-5 md:p-6 flex flex-col hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all"
            >
              {/* Image & Badges */}
              <div className="relative h-64 w-full mb-6 bg-slate-50/50 rounded-2xl flex items-center justify-center p-6 border border-slate-50 overflow-hidden">
                <div className="absolute z-10 top-4 left-4 bg-[#06999b] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  Flagship
                </div>
                <button className="absolute z-10 top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:shadow-md transition-all border border-slate-100 pointer-events-none">
                  <Heart className="w-4 h-4" />
                </button>
                <div className="relative w-full h-full">
                  <img
                    src={p.mainImage ? `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/uploads/images/${p.mainImage}` : "/placeholder.png"}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-2">
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#06999b] transition-colors line-clamp-1">
                  {p.name}
                </h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-1 min-h-[20px]">{p.shortDescription || "Industrial Water Purifier"}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-[#06999b]">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <span className="text-sm text-slate-500 font-medium">4.8 (Verified)</span>
                </div>

                {/* Price */}
                <div className="text-[22px] font-bold text-slate-900 mb-6">
                  ₹{Number(p.price).toLocaleString('en-IN')}
                  {p.originalPrice && (
                    <span className="text-sm text-slate-400 line-through ml-2">₹{Number(p.originalPrice).toLocaleString('en-IN')}</span>
                  )}
                </div>


                <button className="w-full py-3 bg-[#06999b] hover:bg-[#057a7c] text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm pointer-events-none">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Link>
          ))}
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
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest mb-3 block">
              Corporate Value
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-10">
              Strategic Advantage
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {whyFeatures.map((f, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-10 h-10 border border-slate-200 bg-slate-50 flex items-center justify-center text-[#0f3a61]">
                    <f.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      {f.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-12 grid grid-cols-2 gap-x-8 gap-y-12">
            {statsInfo.map((s, i) => (
              <div
                key={i}
                className="text-left border-l-2 border-[#0f3a61] pl-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {s.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  {s.label}
                </div>
              </div>
            ))}
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/v1/testimonials/get-active`, {
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
    <section className="bg-[#0f3a61] py-20 border-t border-slate-800">
      <div className="container-custom flex flex-col lg:flex-row lg:items-center justify-between gap-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Request a Technical Consultation
          </h2>
          <p className="text-sm text-blue-100 leading-relaxed opacity-90 max-w-lg">
            Engage with our engineering team to assess your requirements and
            propose a tailored, high-efficiency RO infrastructure solution.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#057a7c] transition-colors"
          >
            Submit RFP <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#057a7c] transition-colors border-none"
          >
            Contact Engineering
          </Link>
        </div>
      </div>
    </section>
  );
}
