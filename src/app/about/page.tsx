import Image from "next/image";
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
  ThumbsUp,
  Headphones,
  ArrowRight,
  Target,
  Award,
  CheckCircle2,
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
    <div className="bg-slate-50 min-h-screen font-sans">
      <HeroSection />
      <OurStorySection />
      <MissionVisionSection />
      <WhatWeDoSection />
      <OurValuesSection />
      <OurPromiseSection />
      <TestimonialsSection />
      <TestimonialFormSection />
      <FinalCTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#0A1120] overflow-hidden border-b-[6px] border-[#06999b]">
      {/* ── Background & Overlays ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ro-electronics-banner.jpeg"
          alt="Corporate RO Operations"
          fill
          className="object-cover opacity-20 mix-blend-luminosity grayscale"
          priority
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')] opacity-10 pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1120] via-[#0A1120]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1120] via-transparent to-[#0A1120]/80" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-white/10 bg-white/5 mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#4ea8de]"></span>
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">
              Corporate Overview
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
            Committed to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ea8de] to-[#06999b]">
              Industrial Excellence.
            </span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-12 border-l-[3px] border-[#06999b] pl-6 font-medium">
            Delivering robust water purification infrastructure for enterprises,
            commercial facilities, and residential complexes with uncompromising
            quality and strict regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mt-12 lg:mt-16 relative z-10">
          {[
            {
              icon: Droplet,
              title: "Engineered Systems",
              desc: "High-performance & reliable infrastructure mapped to precise volume metrics.",
            },
            {
              icon: Users,
              title: "Certified Personnel",
              desc: "Experienced engineering professionals executing authorized protocol deployments.",
            },
            {
              icon: ShieldCheck,
              title: "Compliance Assured",
              desc: "Meeting and exceeding strict regulatory and industrial water standards.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#0f3a61]/40 backdrop-blur-md border border-white/10 p-8 flex flex-col gap-5 hover:bg-[#0f3a61]/60 transition-colors"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[#4ea8de]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurStorySection() {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="relative h-[500px] bg-slate-50 border border-slate-200 p-3 lg:p-4">
            {/* Corporate architectural lines overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="relative w-full h-full bg-slate-100 overflow-hidden border border-slate-200">
              <img
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ_eQrP14jGjWpSVANYQ-mm5tBkA0KAGdJVN5fAkBNt_v7OWICjiOyOZvSeYN5wu4uNZ7Cx0alviFSRdEwDRgONvSL7rqYZMs3FYVOvfKl_qRRC4R1SfeabSA"
                alt="Corporate Building"
                className="object-cover w-full h-full transition-transform duration-1000 hover:scale-105 filter grayscale hover:grayscale-0"
              />
            </div>

            <div className="absolute -bottom-8 -right-8 bg-[#0f3a61] p-10 shadow-2xl text-white border-l-4 border-[#06999b] z-10">
              <div className="flex items-center gap-6">
                <div className="text-6xl font-black tracking-tighter">10<span className="text-[#06999b]">+</span></div>
                <div className="text-[10px] font-bold text-blue-200 uppercase tracking-widest leading-relaxed">
                  Years of
                  <br />
                  Operations
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8 flex flex-col justify-center h-full pt-12 lg:pt-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#0f3a61]"></div>
              <span className="text-[10px] font-bold text-[#0f3a61] uppercase tracking-widest">
                Corporate History
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
              Strategic Water Treatment Solutions.
            </h2>

            <div className="space-y-6 text-sm text-slate-600 font-medium leading-relaxed mb-10 border-l border-slate-200 pl-6">
              <p>
                We operate as a dedicated water purification enterprise
                committed to deploying scalable, high-efficiency RO technology.
                From rigorous procurement to seamless commissioning and
                enterprise-grade SLA support, we deliver end-to-end
                infrastructure mapping perfectly to your specific volume and
                quality metrics.
              </p>
              <p>
                Our operational mandate is to ensure uninterrupted access to
                purified water through resilient hardware, transparent
                maintenance protocols, and compliant operational standards.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-slate-100">
              <div>
                <span className="block text-4xl font-black text-[#0f3a61] mb-2 tracking-tighter">
                  500+
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Building2 className="w-3 h-3 text-[#06999b]" /> Deployments
                </span>
              </div>
              <div>
                <span className="block text-4xl font-black text-[#0f3a61] mb-2 tracking-tighter">
                  100%
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck className="w-3 h-3 text-[#06999b]" /> SLA Compliance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 -z-10 skew-x-12 translate-x-32" />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission */}
          <div className="bg-white p-12 border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#06999b]" />
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
              <Target className="w-40 h-40 text-slate-900" />
            </div>

            <div className="w-16 h-16 bg-[#0f3a61]/5 border border-[#0f3a61]/10 flex items-center justify-center mb-8 relative z-10">
              <Target className="w-7 h-7 text-[#0f3a61]" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-5 relative z-10 tracking-tight">
              Our Mission
            </h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed relative z-10">
              To provide robust, cutting-edge RO water purification systems that
              ensure absolute water safety, operational reliability, and
              unmatched compliance for communities, businesses, and industrial
              facilities across the region.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-12 border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#0f3a61]" />
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
              <Lightbulb className="w-40 h-40 text-slate-900" />
            </div>

            <div className="w-16 h-16 bg-[#0f3a61]/5 border border-[#0f3a61]/10 flex items-center justify-center mb-8 relative z-10">
              <Lightbulb className="w-7 h-7 text-[#0f3a61]" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-5 relative z-10 tracking-tight">
              Our Vision
            </h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed relative z-10">
              To be the premier standard in water treatment technology,
              pioneering scalable and sustainable purification architectures
              that completely eliminate waterborne risks and foster healthier,
              more efficient environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  const items = [
    {
      icon: Home,
      title: "Residential RO",
      desc: "Domestic purification units ensuring safe, compliant drinking water.",
    },
    {
      icon: Building2,
      title: "Commercial RO",
      desc: "High-capacity systems for corporate offices and hospitality sectors.",
    },
    {
      icon: Factory,
      title: "Industrial Plants",
      desc: "Heavy-duty separation systems for complex manufacturing applications.",
    },
    {
      icon: Wrench,
      title: "Commissioning",
      desc: "Protocol-driven installation executed by authorized technical staff.",
    },
    {
      icon: Settings,
      title: "Lifecycle Mgmt",
      desc: "Scheduled diagnostics and authentic OEM component replacements.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise AMC",
      desc: "Structured preventative maintenance contracts for maximum uptime.",
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container-custom">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#06999b]"></div>
              <span className="text-[10px] font-bold text-[#06999b] uppercase tracking-widest">
                Service Portfolio
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Technical Operations
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200 bg-slate-50">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-10 border-b border-r border-slate-200 hover:bg-slate-50 transition-colors flex flex-col group"
            >
              <div className="w-12 h-12 bg-slate-100 flex items-center justify-center mb-8 border border-slate-200 group-hover:border-[#06999b] transition-colors">
                <item.icon className="w-5 h-5 text-[#0f3a61]" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-3 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurValuesSection() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Compliance",
      desc: "Strict adherence to regulatory and industrial water quality standards.",
    },
    {
      icon: Users,
      title: "Accountability",
      desc: "Transparent operational reporting and rapid response SLAs.",
    },
    {
      icon: Lightbulb,
      title: "Optimization",
      desc: "Continuous hardware and process improvements for maximum efficiency.",
    },
    {
      icon: Target,
      title: "Resilience",
      desc: "Redundant systems designed specifically for minimal operational downtime.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="order-2 lg:order-1 relative h-[600px] border border-slate-200 bg-white p-4">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
            <div className="relative w-full h-full bg-slate-100 overflow-hidden">
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRztai3myPtkebKv-D8duWK3xwWbzlb-rY1jdfPcK5COyjH5ENxRyZfiIrFiiBOcXFJdwq8FUEzMg81NLQk8S7pTx6D9BjYbQgxGdJlqOX0p4tS7DzbqOJHng"
                alt="Industrial RO"
                className="h-full w-full object-cover filter grayscale opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
              />
            </div>
            {/* Corporate Accents */}
            <div className="absolute top-8 -right-4 w-8 h-32 bg-[#06999b]" />
            <div className="absolute bottom-8 -left-4 w-8 h-32 bg-[#0f3a61]" />
          </div>

          <div className="order-1 lg:order-2 flex flex-col justify-center h-full pt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#06999b]"></div>
              <span className="text-[10px] font-bold text-[#06999b] uppercase tracking-widest">
                Operational Mandate
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-12 tracking-tight">
              Corporate Principles
            </h2>

            <div className="space-y-0 border-t border-slate-200">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex gap-6 border-b border-slate-200 py-8 group"
                >
                  <div className="w-14 h-14 bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#0f3a61] transition-colors">
                    <v.icon className="w-6 h-6 text-[#0f3a61]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-widest">
                      {v.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-sm">
                      {v.desc}
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

function OurPromiseSection() {
  return (
    <section className="py-24 bg-[#0A1120] border-b border-slate-800 relative overflow-hidden">
      {/* Subtle blueprint overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')] opacity-10 pointer-events-none mix-blend-overlay" />

      <div className="container-custom relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 bg-[#4ea8de]"></div>
            <span className="text-[10px] font-bold text-[#4ea8de] uppercase tracking-widest">
              Vendor Assurance
            </span>
            <div className="w-1.5 h-1.5 bg-[#4ea8de]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Strategic Partnership
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border border-white/10 bg-[#0A1120] relative">
          {/* Internal borders using divide */}
          <div className="absolute inset-0 pointer-events-none border border-white/10"></div>
          {[
            { icon: Users, title: "Certified\nPersonnel" },
            { icon: Settings, title: "OEM\nComponents" },
            { icon: Headphones, title: "24/7\nNOC Support" },
            { icon: Wrench, title: "Engineered\nDeployments" },
            { icon: Target, title: "SLA\nAdherence" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-10 text-center border border-white/10 hover:bg-white/5 transition-colors group"
            >
              <item.icon className="w-8 h-8 text-[#4ea8de] mb-6 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
              <h3 className="text-[10px] font-bold text-white uppercase tracking-widest whitespace-pre-line leading-[1.6]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Quote } from "lucide-react";

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
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 bg-[#0f3a61]"></div>
            <span className="text-[10px] font-bold text-[#0f3a61] uppercase tracking-widest">
              Client Feedback
            </span>
            <div className="w-1.5 h-1.5 bg-[#0f3a61]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            What Our Partners Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r: any, i: number) => (
            <div
              key={r.id || i}
              className="bg-white border border-slate-200 p-10 flex flex-col relative"
            >
              <Quote className="w-8 h-8 text-[#0f3a61] mb-8 opacity-20 absolute top-10 right-10" />
              <div className="flex text-[#06999b] mb-6">
                {[...Array(r.rating || 5)].map((_, idx) => (
                  <svg
                    key={idx}
                    className="w-4 h-4 fill-current mr-1"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-600 font-medium leading-relaxed mb-10 flex-grow italic">
                "{r.message}"
              </p>
              <div className="border-t border-slate-100 pt-6 mt-auto">
                <p className="text-sm font-bold text-slate-900 uppercase tracking-wide">{r.fullName}</p>
                {r.company && (
                  <p className="text-[10px] text-[#06999b] font-bold uppercase tracking-widest mt-1">
                    {r.company}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom relative z-10">
        <div className="bg-[#0f3a61] relative overflow-hidden shadow-sm border border-slate-800 p-12 md:p-20 flex flex-col lg:flex-row lg:items-center justify-between gap-12 border-l-[6px] border-[#06999b]">
          {/* Subtle architectural lines */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]" />

          <div className="max-w-2xl relative z-10">
            <div className="text-[10px] font-bold text-[#4ea8de] uppercase tracking-widest mb-4">
              Enterprise Integration
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Request a Technical Consultation
            </h2>
            <p className="text-sm text-blue-100 leading-relaxed font-medium max-w-xl opacity-90">
              Engage with our engineering team to assess your requirements and
              propose a tailored, high-efficiency RO infrastructure solution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#06999b] hover:bg-[#057a7c] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              Submit RFP <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-transparent border border-white/20 hover:border-white/40 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              View Specifications
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
