import Link from "next/link";
import {
  Droplet,
  Users,
  ShieldCheck,
  Home,
  Building2,
  Factory,
  Wrench,
  Settings,
  Lightbulb,
  ArrowRight,
  Target,
  Award,
  Quote,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { TestimonialFormSection } from "@/components/about/TestimonialFormSection";
import { API_BASE_URL } from "@/config";
import { constructMetadata } from "@/seo.config";
import type { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "About Smart RO | Our Mission & Vision",
  description:
    "Learn about Smart RO's commitment to industrial excellence and delivering robust water purification infrastructure.",
  canonicalUrl: "/about",
});

export const dynamic = "force-dynamic";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <HeroSection />
      <OurStorySection />
      <MissionVisionSection />
      <WhatWeDoSection />
      <OurValuesSection />
      <TestimonialsSection />
      <TestimonialFormSection />
      <FinalCTASection />
    </div>
  );
}

/* ─── HERO ──────────────────────────────────────────────────────────────── */
function HeroSection() {
  const stats = [
    { icon: TrendingUp, val: "500+",     label: "Deployments" },
    { icon: Users,      val: "50+",      label: "Certified Engineers" },
    { icon: ShieldCheck,val: "100%",     label: "SLA Compliance" },
    { icon: Award,      val: "10+ Yrs",  label: "Industry Experience" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0b2d4e] pt-28 pb-0 lg:pt-36">
      {/* subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* ambient glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0284c7] blur-[160px] rounded-full opacity-[0.18] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#06999b] blur-[140px] rounded-full opacity-[0.14] pointer-events-none transform -translate-x-1/3" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-5 gap-0 items-end">

          {/* ── left: copy ──────────────────────────────── */}
          <div className="lg:col-span-3 pb-16 lg:pb-24 pr-0 lg:pr-16">
            <span className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.15] text-white/80 text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06999b] animate-pulse" />
              Corporate Overview
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-black text-white leading-[1.02] tracking-tight mb-8">
              Industrial<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">
                Excellence
              </span>
            </h1>

            <p className="text-white/60 text-lg font-normal leading-[1.75] max-w-[500px] mb-14">
              Delivering robust water purification infrastructure for enterprises,
              commercial facilities, and residential complexes with uncompromising
              quality and strict regulatory compliance.
            </p>

            {/* stat row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/10">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="group bg-white/[0.05] hover:bg-white/[0.10] transition-colors duration-300 px-5 py-7 flex flex-col items-center text-center gap-2"
                >
                  <s.icon className="w-4.5 h-4.5 text-[#38bdf8] mb-1 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-white font-black text-2xl leading-none tracking-tight">{s.val}</div>
                  <div className="text-white/45 text-[10px] font-semibold uppercase tracking-[0.14em] leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── right: image flush to bottom ─────────────── */}
          <div className="lg:col-span-2 hidden lg:flex items-end justify-center">
            <div className="w-full rounded-t-3xl overflow-hidden border border-white/[0.08] shadow-[0_-30px_80px_rgba(0,0,0,0.5)]">
              <img
                src="/ro-electronics-banner.jpeg"
                alt="Corporate Setup"
                className="w-full h-[540px] object-cover brightness-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── OUR STORY ─────────────────────────────────────────────────────────── */
function OurStorySection() {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* image */}
          <div className="relative">
            {/* decorative offset block */}
            <div className="absolute -bottom-5 -right-5 w-full h-full rounded-3xl bg-[#0b2d4e]/6 z-0" />
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-slate-200/60">
              <img
                src="https://livpure.com/cdn/shop/articles/livpure-pep-pro-834662.webp?v=1726725395"
                alt="Corporate Building"
                className="w-full h-[500px] object-cover hover:scale-[1.03] transition-transform duration-700"
              />
              {/* floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl px-7 py-5 shadow-2xl border border-slate-100/80 flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0b2d4e] to-[#0284c7] flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-3xl font-black text-[#0b2d4e] leading-none">10<span className="text-[#06999b]">+</span></p>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.15em] mt-1.5">Years of Operations</p>
                </div>
              </div>
            </div>
          </div>

          {/* copy */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="h-[2px] w-10 bg-gradient-to-r from-[#0284c7] to-[#06999b] rounded-full" />
              <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-[0.18em]">Corporate History</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-[#0b2d4e] leading-[1.08] tracking-tight mb-8">
              Strategic Water Treatment Solutions.
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-[15px] text-slate-500 leading-[1.8] border-l-[3px] border-[#0284c7]/25 pl-5">
                We operate as a dedicated water purification enterprise committed to deploying
                scalable, high-efficiency RO technology. From rigorous procurement to seamless
                commissioning and enterprise-grade SLA support, we deliver end-to-end
                infrastructure mapping perfectly to your specific volume and quality metrics.
              </p>
              <p className="text-[15px] text-slate-500 leading-[1.8] border-l-[3px] border-[#06999b]/25 pl-5">
                Our operational mandate is to ensure uninterrupted access to purified water
                through resilient hardware, transparent maintenance protocols, and compliant
                operational standards.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 pt-8 border-t border-slate-100">
              {[
                { icon: Building2, val: "500+",  label: "Deployments" },
                { icon: ShieldCheck, val: "100%", label: "SLA Compliance" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-slate-100 bg-slate-50/70 p-6 hover:border-[#0284c7]/20 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <s.icon className="w-5 h-5 text-[#06999b] mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-4xl font-black text-[#0b2d4e] leading-none tracking-tight mb-2">{s.val}</p>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.14em]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── MISSION & VISION ───────────────────────────────────────────────────── */
function MissionVisionSection() {
  return (
    <section className="relative py-16 lg:py-20 bg-[#f8fafc] border-b border-slate-100 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,58,97,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,58,97,.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-custom relative z-10">
        {/* header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-gradient-to-r from-[#0b2d4e] to-[#0284c7] rounded-full" />
            <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-[0.18em]">Purpose & Direction</span>
            <div className="h-[2px] w-8 bg-gradient-to-r from-[#0284c7] to-[#06999b] rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0b2d4e] tracking-tight">Mission & Vision</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Mission card */}
          <div className="group relative bg-white rounded-3xl border border-slate-200/80 shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-400 overflow-hidden p-10 lg:p-14">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#0b2d4e] to-[#0284c7]" />
            <div className="absolute -bottom-12 -right-12 pointer-events-none opacity-[0.035] group-hover:opacity-[0.07] transition-opacity duration-500">
              <Target className="w-52 h-52 text-[#0284c7]" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl border border-[#0284c7]/15 bg-[#0284c7]/6 flex items-center justify-center mb-8 group-hover:bg-[#0284c7] group-hover:border-[#0284c7] group-hover:shadow-lg group-hover:shadow-[#0284c7]/20 transition-all duration-300">
                <Target className="w-8 h-8 text-[#0284c7] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-[11px] font-bold text-[#0284c7] uppercase tracking-[0.18em] mb-3">Our Mission</p>
              <h3 className="text-2xl font-black text-[#0b2d4e] mb-5 leading-tight tracking-tight">
                Delivering Absolute Water Safety
              </h3>
              <p className="text-[15px] text-slate-500 leading-[1.8]">
                To provide robust, cutting-edge RO water purification systems that ensure absolute
                water safety, operational reliability, and unmatched compliance for communities,
                businesses, and industrial facilities across the region.
              </p>
            </div>
          </div>

          {/* Vision card */}
          <div className="group relative bg-white rounded-3xl border border-slate-200/80 shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-400 overflow-hidden p-10 lg:p-14">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#0284c7] to-[#06999b]" />
            <div className="absolute -bottom-12 -right-12 pointer-events-none opacity-[0.035] group-hover:opacity-[0.07] transition-opacity duration-500">
              <Lightbulb className="w-52 h-52 text-[#06999b]" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl border border-[#06999b]/15 bg-[#06999b]/6 flex items-center justify-center mb-8 group-hover:bg-[#06999b] group-hover:border-[#06999b] group-hover:shadow-lg group-hover:shadow-[#06999b]/20 transition-all duration-300">
                <Lightbulb className="w-8 h-8 text-[#06999b] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-[11px] font-bold text-[#06999b] uppercase tracking-[0.18em] mb-3">Our Vision</p>
              <h3 className="text-2xl font-black text-[#0b2d4e] mb-5 leading-tight tracking-tight">
                Pioneering Sustainable Purification
              </h3>
              <p className="text-[15px] text-slate-500 leading-[1.8]">
                To be the premier standard in water treatment technology, pioneering scalable and
                sustainable purification architectures that completely eliminate waterborne risks
                and foster healthier, more efficient environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── WHAT WE DO ─────────────────────────────────────────────────────────── */
function WhatWeDoSection() {
  const items = [
    { icon: Home,       title: "Residential RO",   desc: "Domestic purification units ensuring safe, compliant drinking water." },
    { icon: Building2,  title: "Commercial RO",    desc: "High-capacity systems for corporate offices and hospitality sectors." },
    { icon: Factory,    title: "Industrial Plants", desc: "Heavy-duty separation systems for complex manufacturing applications." },
    { icon: Wrench,     title: "Commissioning",    desc: "Protocol-driven installation executed by authorized technical staff." },
    { icon: Settings,   title: "Lifecycle Mgmt",   desc: "Scheduled diagnostics and authentic OEM component replacements." },
    { icon: ShieldCheck,title: "Enterprise AMC",   desc: "Structured preventative maintenance contracts for maximum uptime." },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
      <div className="container-custom">
        {/* header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1.5 h-7 bg-gradient-to-b from-[#0284c7] to-[#06999b] rounded-full" />
              <span className="text-[11px] font-bold text-[#06999b] uppercase tracking-[0.18em]">Service Portfolio</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0b2d4e] tracking-tight leading-tight">
              Technical Operations
            </h2>
          </div>
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-xs lg:max-w-sm">
            A comprehensive suite of water purification services engineered for performance and longevity.
          </p>
        </div>

        {/* grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative bg-[#f8fafc] hover:bg-[#0b2d4e] rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 p-8 flex flex-col overflow-hidden cursor-default"
            >
              {/* top accent line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#0284c7] to-[#06999b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 group-hover:bg-white/10 group-hover:border-white/15 flex items-center justify-center mb-7 shadow-sm transition-all duration-300">
                <item.icon className="w-6 h-6 text-[#0284c7] group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-[13px] font-black text-slate-700 group-hover:text-white mb-3 uppercase tracking-[0.14em] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[14px] text-slate-500 group-hover:text-white/55 leading-relaxed font-medium flex-grow transition-colors duration-300">
                {item.desc}
              </p>

              <div className="mt-8 flex items-center gap-2 text-[#0284c7] group-hover:text-[#38bdf8] transition-colors duration-300">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em]">Learn More</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── OUR VALUES ─────────────────────────────────────────────────────────── */
function OurValuesSection() {
  const values = [
    { icon: ShieldCheck, title: "Compliance Standard", desc: "Strict adherence to regulatory and industrial water quality standards." },
    { icon: Users,       title: "Accountability",      desc: "Transparent operational reporting and rapid response SLAs." },
    { icon: Lightbulb,   title: "Optimization",        desc: "Continuous hardware and process improvements for maximum efficiency." },
    { icon: Target,      title: "System Resilience",   desc: "Redundant systems designed specifically for minimal operational downtime." },
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#f8fafc] border-b border-slate-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* values */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="h-[2px] w-10 bg-gradient-to-r from-[#0284c7] to-[#06999b] rounded-full" />
              <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-[0.18em]">Operational Mandate</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0b2d4e] tracking-tight leading-tight mb-12">
              Corporate Principles
            </h2>

            <div className="space-y-4">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-5 bg-white rounded-2xl border border-slate-100/80 p-6 hover:border-[#0284c7]/20 hover:shadow-[0_8px_30px_rgba(2,132,199,0.08)] transition-all duration-300 cursor-default"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#0b2d4e] group-hover:border-[#0b2d4e] group-hover:shadow-lg transition-all duration-300">
                    <v.icon className="w-6 h-6 text-[#0284c7] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="text-[15px] font-black text-slate-800 group-hover:text-[#0b2d4e] transition-colors">{v.title}</h3>
                      <CheckCircle className="w-4 h-4 text-[#06999b] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <p className="text-[14px] text-slate-500 font-medium leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* image */}
          <div className="relative">
            <div className="absolute top-8 -right-6 w-full h-full rounded-3xl bg-[#0b2d4e]/8 z-0" />
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.14)] border border-slate-200/60">
              <img
                src="https://cdn-jmlld.nitrocdn.com/qydppaFNcKMRjVLinmLFvQMpPBYfFFCk/assets/images/optimized/rev-6fc3ecb/www.aosmithindia.com/wp-content/themes/aosmith/assets/images/water_purification.jpg"
                alt="Industrial RO"
                className="w-full h-[580px] object-cover hover:scale-[1.03] transition-transform duration-700"
              />
              {/* ISO badge */}
              <div className="absolute bottom-6 right-6 bg-[#0b2d4e] rounded-2xl p-6 shadow-2xl text-white">
                <Award className="w-7 h-7 text-[#38bdf8] mb-2.5" />
                <p className="font-black text-xl leading-none">ISO 9001</p>
                <p className="text-[11px] font-semibold text-white/60 mt-1.5 uppercase tracking-[0.12em]">Certified Quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ───────────────────────────────────────────────────────── */
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

async function TestimonialsSection() {
  const reviews = await getActiveTestimonials();
  if (reviews.length === 0) return null;

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-100">
      <div className="container-custom">
        {/* header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-gradient-to-r from-[#0b2d4e] to-[#0284c7] rounded-full" />
            <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-[0.18em]">Client Feedback</span>
            <div className="h-[2px] w-8 bg-gradient-to-r from-[#0284c7] to-[#06999b] rounded-full" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0b2d4e] tracking-tight">
            What Our Partners Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r: any, i: number) => (
            <div
              key={r.id || i}
              className="group relative bg-white rounded-3xl border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 p-8 flex flex-col overflow-hidden"
            >
              {/* top accent */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#0b2d4e] to-[#06999b] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              {/* bg quote */}
              <Quote className="absolute -bottom-5 -right-5 w-28 h-28 text-slate-50 pointer-events-none group-hover:text-[#06999b]/5 transition-colors duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                {/* stars + quote icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(Number(r.rating) || 5)].map((_, idx) => (
                      <svg key={idx} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-slate-100 group-hover:text-[#0b2d4e]/10 transition-colors duration-300" />
                </div>

                <p className="text-[15px] text-slate-600 leading-[1.8] mb-8 flex-grow font-medium italic">
                  &ldquo;{r.message}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-5 border-t border-slate-100 group-hover:border-slate-150 transition-colors">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0b2d4e] to-[#0284c7] flex items-center justify-center text-white font-black text-sm shadow-md shrink-0">
                    {r.fullName ? r.fullName.charAt(0).toUpperCase() : "C"}
                  </div>
                  <div>
                    <p className="text-[14px] font-black text-slate-900 group-hover:text-[#0b2d4e] transition-colors">{r.fullName}</p>
                    {r.company && (
                      <p className="text-[10px] text-[#06999b] font-bold uppercase tracking-[0.14em] mt-0.5">{r.company}</p>
                    )}
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

/* ─── FINAL CTA ──────────────────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section className="py-16 lg:py-20 bg-[#f8fafc]">
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
          {/* BG layers */}
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
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0284c7] blur-[120px] rounded-full opacity-[0.22] pointer-events-none translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#06999b] blur-[120px] rounded-full opacity-[0.18] pointer-events-none -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 p-10 md:p-16 lg:p-24 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.15] text-white/75 text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06999b] animate-pulse" />
                Enterprise Integration
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.06] mb-6">
                Request a Technical Consultation
              </h2>
              <p className="text-white/60 text-[17px] leading-[1.75] max-w-xl">
                Engage with our engineering team to assess your requirements and propose a tailored,
                high-efficiency RO infrastructure solution.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white hover:bg-slate-50 text-[#0b2d4e] rounded-xl font-black text-sm uppercase tracking-[0.12em] transition-all duration-300 shadow-2xl hover:-translate-y-1 hover:shadow-white/20"
              >
                Submit RFP <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/15 hover:border-white/40 hover:bg-white/5 text-white rounded-xl font-bold text-sm uppercase tracking-[0.12em] transition-all duration-300"
              >
                View Specifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
