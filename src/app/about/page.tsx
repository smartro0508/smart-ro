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
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <HeroSection />
      <OurStorySection />
      <WhatWeDoSection />
      <OurValuesSection />
      <OurPromiseSection />
      <FinalCTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 bg-[#0F172A] text-white overflow-hidden">
      {/* Background & Overlays */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548345680-f5475ea90f46?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            About Us
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Committed to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Better Water.
            </span>
            <br className="hidden md:block" /> Committed to You.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12">
            We provide reliable water purification solutions for homes, businesses, and industries with advanced technology, unparalleled quality, and excellent service.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {[
            { icon: Droplet, title: "Quality Products", desc: "High-performance & reliable systems" },
            { icon: Users, title: "Expert Team", desc: "Experienced professionals at your service" },
            { icon: ShieldCheck, title: "Customer First", desc: "Your satisfaction is our ultimate priority" },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurStorySection() {
  return (
    <section className="py-24 relative z-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image Composite */}
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px]">
              <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80" alt="Corporate Building" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent opacity-80"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#0F172A] flex items-center justify-center text-white">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-4xl font-black text-[#0F172A]">10+</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">Years of<br/>Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:pl-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              Our Story
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
              More Than Water Purification.
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed mb-10 text-lg">
              <p>
                We are a dedicated water purification enterprise committed to delivering clean, safe, and healthy water through cutting-edge RO technology. From precise product selection to seamless installation and comprehensive after-sales support, we offer end-to-end solutions tailored to your unique requirements.
              </p>
              <p>
                Our mission is to fundamentally improve people's lives by providing robust systems, transparent service, and enduring value that you can trust day in and day out.
              </p>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-primary mb-1">25K+</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Happy Customers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-primary mb-1">50K+</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Systems Installed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  const items = [
    { icon: Home, title: "Residential Solutions", desc: "Premium RO systems designed to provide pure and safe drinking water for your home." },
    { icon: Building2, title: "Commercial Solutions", desc: "Robust and reliable systems perfectly suited for offices, hotels, schools, and hospitals." },
    { icon: Factory, title: "Industrial Solutions", desc: "High-capacity, heavy-duty RO plants engineered for industrial and large-scale applications." },
    { icon: Wrench, title: "Professional Installation", desc: "Expert installation and meticulous commissioning to ensure optimal performance." },
    { icon: Settings, title: "Maintenance & Service", desc: "Comprehensive maintenance, timely filter replacement, and dedicated technical support." },
    { icon: ShieldCheck, title: "Comprehensive AMC", desc: "Affordable and flexible Annual Maintenance Contracts to keep your systems running smoothly." },
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-200">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6">Complete Water Purification Solutions</h2>
          <p className="text-slate-600 text-lg">
            We cover the entire spectrum of water treatment needs with specialized solutions and dedicated support services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="group bg-slate-50 p-8 rounded-[2rem] hover:bg-[#0F172A] transition-all duration-500 border border-slate-100 shadow-sm hover:shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors shadow-sm">
                <item.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-400 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurValuesSection() {
  const values = [
    { icon: ShieldCheck, title: "Quality", desc: "Uncompromising standards in every product we deliver." },
    { icon: Users, title: "Integrity", desc: "Transparent, honest, and reliable in all our dealings." },
    { icon: Lightbulb, title: "Innovation", desc: "Continuously adopting advanced technology for better results." },
    { icon: Target, title: "Reliability", desc: "Consistent performance and dependable support you can count on." },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[450px] lg:h-[600px] order-2 lg:order-1">
            <Image src="https://images.unsplash.com/photo-1548345680-f5475ea90f46?w=1200&q=80" alt="Pure Water" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/30 to-transparent mix-blend-multiply"></div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
              Core Principles
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-10">What We Stand For</h2>
            
            <div className="space-y-8">
              {values.map((v, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-primary group-hover:shadow-md transition-all group-hover:scale-105">
                    <v.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">{v.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{v.desc}</p>
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
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Decorative Overlays */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?q=80&w=2000')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/20 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="container-custom relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
          Our Promise
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Why Customers Trust Us</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:divide-x lg:divide-white/10">
          {[
            { icon: Users, title: "Experienced\nProfessionals" },
            { icon: Settings, title: "Quality\nComponents" },
            { icon: Headphones, title: "Prompt\nSupport" },
            { icon: Wrench, title: "Customized\nSolutions" },
            { icon: ThumbsUp, title: "Customer\nSatisfaction" },
          ].map((item, i) => (
            <div key={i} className={`flex flex-col items-center px-4 ${i === 0 ? 'lg:border-l-0' : ''} group`}>
              <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/30 group-hover:border-primary/50 transition-all duration-300 group-hover:-translate-y-2">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-sm md:text-base font-bold text-white whitespace-pre-line tracking-wide leading-tight">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container-custom">
        <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[3rem] overflow-hidden shadow-2xl p-10 md:p-16 lg:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12 border border-slate-800">
          
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1548345680-f5475ea90f46?w=800&q=80')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/40 rounded-full blur-[100px]"></div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready for a Better Water Experience?
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              Whether you need a solution for your home, business, or industry, our experts are here to help you design the perfect purification system.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/25">
                Contact Us Today <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-md">
                Browse Products
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden lg:block shrink-0">
            <div className="w-48 h-48 rounded-full border-4 border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-2xl">
              <Droplet className="w-20 h-20 text-accent animate-pulse drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
