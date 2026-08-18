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
  CheckCircle2
} from "lucide-react";
import { TestimonialFormSection } from "@/components/about/TestimonialFormSection";

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
    <section className="relative pt-32 pb-24 bg-[#0A1120] text-white overflow-hidden border-b-4 border-[#4ea8de]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />
      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/5 text-white text-xs font-bold tracking-widest uppercase mb-8 rounded-sm">
            Corporate Overview
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
            Committed to <br />
            <span className="text-[#4ea8de]">Industrial Excellence.</span>
          </h1>
          
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-12 border-l-2 border-[#4ea8de] pl-5">
            Delivering robust water purification infrastructure for enterprises, commercial facilities, and residential complexes with uncompromising quality and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mt-12">
          {[
            { icon: Droplet, title: "Engineered Systems", desc: "High-performance & reliable infrastructure" },
            { icon: Users, title: "Certified Personnel", desc: "Experienced engineering professionals" },
            { icon: ShieldCheck, title: "Compliance Assured", desc: "Meeting strict regulatory standards" },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-slate-700 p-8 rounded-sm flex flex-col gap-4">
              <div className="w-12 h-12 rounded-sm bg-[#4ea8de]/10 border border-[#4ea8de]/30 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[#4ea8de]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] border border-slate-200 bg-slate-50 p-4 rounded-sm">
            <div className="relative w-full h-full border border-slate-100">
              <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80" alt="Corporate Building" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#0f3a61] p-8 shadow-xl text-white rounded-sm">
              <div className="flex items-center gap-6">
                <div className="text-5xl font-black">10+</div>
                <div className="text-xs font-bold text-[#4ea8de] uppercase tracking-widest leading-relaxed">Years<br/>Operations</div>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest mb-3 block">Corporate History</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8">
              Strategic Water Treatment Solutions.
            </h2>
            <div className="space-y-6 text-sm text-slate-600 leading-relaxed mb-10">
              <p>
                We operate as a dedicated water purification enterprise committed to deploying scalable, high-efficiency RO technology. From rigorous procurement to seamless commissioning and enterprise-grade SLA support, we deliver end-to-end infrastructure mapping perfectly to your specific volume and quality metrics.
              </p>
              <p>
                Our operational mandate is to ensure uninterrupted access to purified water through resilient hardware, transparent maintenance protocols, and compliant operational standards.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
              <div className="border-l-2 border-[#0f3a61] pl-5">
                <span className="block text-3xl font-black text-slate-900 mb-1">500+</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Enterprise Deployments</span>
              </div>
              <div className="border-l-2 border-[#0f3a61] pl-5">
                <span className="block text-3xl font-black text-slate-900 mb-1">100%</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">SLA Compliance</span>
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
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 lg:p-12 border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:border-[#06999b] transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Target className="w-32 h-32 text-slate-900" />
            </div>
            <div className="w-14 h-14 bg-[#06999b]/10 rounded-xl flex items-center justify-center mb-8 relative z-10 border border-[#06999b]/20">
              <Target className="w-7 h-7 text-[#06999b]" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed relative z-10">
              To provide robust, cutting-edge RO water purification systems that ensure absolute water safety, operational reliability, and unmatched compliance for communities, businesses, and industrial facilities across the region.
            </p>
          </div>

          <div className="bg-white p-10 lg:p-12 border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:border-[#06999b] transition-colors">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Lightbulb className="w-32 h-32 text-slate-900" />
            </div>
            <div className="w-14 h-14 bg-[#06999b]/10 rounded-xl flex items-center justify-center mb-8 relative z-10 border border-[#06999b]/20">
              <Lightbulb className="w-7 h-7 text-[#06999b]" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed relative z-10">
              To be the premier standard in water treatment technology, pioneering scalable and sustainable purification architectures that completely eliminate waterborne risks and foster healthier, more efficient environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  const items = [
    { icon: Home, title: "Residential RO", desc: "Domestic purification units ensuring safe, compliant drinking water." },
    { icon: Building2, title: "Commercial RO", desc: "High-capacity systems for corporate offices and hospitality." },
    { icon: Factory, title: "Industrial Plants", desc: "Heavy-duty separation systems for manufacturing applications." },
    { icon: Wrench, title: "Commissioning", desc: "Protocol-driven installation by authorized technical staff." },
    { icon: Settings, title: "Lifecycle Mgmt", desc: "Scheduled diagnostics and authentic component replacements." },
    { icon: ShieldCheck, title: "Enterprise AMC", desc: "Structured preventative maintenance for maximum uptime." },
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container-custom">
        <div className="mb-16 border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest mb-3 block">Service Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Technical Operations</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-8 border border-slate-200 hover:border-[#0f3a61] transition-colors rounded-sm flex flex-col">
              <div className="w-12 h-12 bg-slate-100 flex items-center justify-center mb-6 border border-slate-200">
                <item.icon className="w-5 h-5 text-[#0f3a61]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurValuesSection() {
  const values = [
    { icon: ShieldCheck, title: "Compliance", desc: "Strict adherence to regulatory and industrial water quality standards." },
    { icon: Users, title: "Accountability", desc: "Transparent operational reporting and rapid response SLAs." },
    { icon: Lightbulb, title: "Optimization", desc: "Continuous hardware and process improvements for efficiency." },
    { icon: Target, title: "Resilience", desc: "Redundant systems designed for minimal operational downtime." },
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[500px] border border-slate-200 bg-slate-50 p-4 rounded-sm">
            <div className="relative w-full h-full">
              <Image src="https://images.unsplash.com/photo-1548345680-f5475ea90f46?w=1200&q=80" alt="Industrial RO" fill className="object-cover grayscale" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest mb-3 block">Operational Mandate</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Corporate Principles</h2>
            
            <div className="space-y-6">
              {values.map((v, i) => (
                <div key={i} className="flex gap-5 border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5 text-[#0f3a61]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">{v.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
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
    <section className="py-24 bg-[#0f3a61] border-b border-slate-800">
      <div className="container-custom">
        <div className="mb-16">
          <span className="text-xs font-bold text-[#4ea8de] uppercase tracking-widest mb-3 block">Vendor Assurance</span>
          <h2 className="text-3xl font-bold text-white mb-6">Strategic Partnership</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border border-white/20 divide-x divide-y md:divide-y-0 divide-white/20 bg-[#0a2845]">
          {[
            { icon: Users, title: "Certified\nPersonnel" },
            { icon: Settings, title: "OEM\nComponents" },
            { icon: Headphones, title: "24/7\nNOC Support" },
            { icon: Wrench, title: "Engineered\nDeployments" },
            { icon: Target, title: "SLA\nAdherence" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-8 text-center hover:bg-white/5 transition-colors">
              <item.icon className="w-6 h-6 text-[#4ea8de] mb-4" />
              <h3 className="text-xs font-bold text-white uppercase tracking-widest whitespace-pre-line leading-relaxed">{item.title}</h3>
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/v1/testimonials/get-active`, {
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
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#06999b] uppercase tracking-widest mb-3 block">
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            What Our Partners Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r: any, i: number) => (
            <div
              key={r.id || i}
              className="bg-slate-50 border border-slate-200 p-8 flex flex-col rounded-xl"
            >
              <Quote className="w-6 h-6 text-[#06999b] mb-6 opacity-40" />
              <div className="flex text-[#06999b] mb-4">
                {[...Array(r.rating || 5)].map((_, idx) => (
                  <svg key={idx} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow italic">
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
      </div>
    </section>
  );
}



function FinalCTASection() {
  return (
    <section className="py-24 bg-[#0A1120]">
      <div className="container-custom flex flex-col lg:flex-row lg:items-center justify-between gap-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Request a Technical Consultation</h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-lg">
            Engage with our engineering team to assess your requirements and propose a tailored, high-efficiency RO infrastructure solution.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#057a7c] transition-colors">
            Submit RFP <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/products" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white/20 transition-colors">
            View Specifications
          </Link>
        </div>
      </div>
    </section>
  );
}
