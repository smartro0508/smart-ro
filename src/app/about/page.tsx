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
  ChevronRight
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <OurStorySection />
      <WhatWeDoSection />
      <OurValuesSection />
      <OurPromiseSection />
      <FinalCTASection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#f0f8ff] via-[#e6f4ff] to-white">
      {/* Decorative background pattern */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">

          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-[#0084FF] mb-8">
              <Link href="/" className="hover:underline">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#0B2038]">About Us</span>
            </div>

            <p className="text-[10px] font-bold text-[#0084FF] uppercase tracking-widest mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B2038] leading-[1.1] mb-6">
              Committed to <br />Better Water. <br />Committed to You.
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md mb-10">
              We provide reliable water purification solutions for homes, businesses and industries with advanced technology, quality products and excellent service.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#0084FF]/20 flex items-center justify-center bg-white shrink-0">
                  <Droplet className="w-5 h-5 text-[#0084FF]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0B2038]">Quality Products</h4>
                  <p className="text-[9px] text-slate-500 leading-tight mt-0.5">High performance <br />and reliable systems</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#0084FF]/20 flex items-center justify-center bg-white shrink-0">
                  <Users className="w-5 h-5 text-[#0084FF]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0B2038]">Expert Team</h4>
                  <p className="text-[9px] text-slate-500 leading-tight mt-0.5">Experienced professionals <br />at your service</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#0084FF]/20 flex items-center justify-center bg-white shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#0084FF]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0B2038]">Customer First</h4>
                  <p className="text-[9px] text-slate-500 leading-tight mt-0.5">Your satisfaction is <br />our priority</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Composite */}
          <div className="relative h-[400px] lg:h-[500px] w-full mix-blend-multiply">
            {/* Using a placeholder that looks somewhat like the industrial machine composite in the ref image */}
            <Image src="https://images.unsplash.com/photo-1606132717013-0941be200427?w=800&q=80" alt="RO Systems" fill className="object-contain" />
          </div>

        </div>
      </div>
    </section>
  );
}

function OurStorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm h-[400px] lg:h-[500px]">
            <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Corporate Building" fill className="object-cover" />
            <div className="absolute inset-0 bg-[#0B2038]/10"></div>

            {/* Floating blue block */}
            <div className="absolute bottom-8 left-8 bg-[#005bb5] text-white p-6 rounded-xl shadow-xl border border-white/10 w-48">
              <div className="flex items-center justify-between mb-2">
                <span className="text-4xl font-black">10+</span>
                <Droplet className="w-6 h-6 text-[#22D3EE]" />
              </div>
              <p className="text-sm font-semibold">Years of <br />Experience</p>
              <Droplet className="w-8 h-8 text-white/10 absolute bottom-4 right-4" />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-[10px] font-bold text-[#0084FF] uppercase tracking-widest mb-2">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B2038] leading-snug mb-6">
              More Than Water Purification.<br />
              A Commitment to Better Living.
            </h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed mb-10">
              <p>
                We are a water purification company dedicated to delivering clean, safe and healthy water through advanced RO technology. From product selection and installation to maintenance and after-sales support, we provide end-to-end solutions tailored to your water needs.
              </p>
              <p>
                Our mission is to make a positive difference in people's lives by delivering reliable systems, transparent service and long-term value.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <Droplet className="w-6 h-6 text-[#0084FF] mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-2xl font-black text-[#0B2038]">10+</div>
                <div className="text-[10px] text-slate-500 mt-1">Years<br />Experience</div>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 text-[#0084FF] mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-2xl font-black text-[#0B2038]">25K+</div>
                <div className="text-[10px] text-slate-500 mt-1">Happy<br />Customers</div>
              </div>
              <div className="text-center">
                <Settings className="w-6 h-6 text-[#0084FF] mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-2xl font-black text-[#0B2038]">50K+</div>
                <div className="text-[10px] text-slate-500 mt-1">Systems<br />Installed</div>
              </div>
              <div className="text-center">
                <ShieldCheck className="w-6 h-6 text-[#0084FF] mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-2xl font-black text-[#0B2038]">99.9%</div>
                <div className="text-[10px] text-slate-500 mt-1">Purification<br />Efficiency</div>
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
    { icon: Home, title: "Residential Solutions", desc: "RO systems for homes and apartments with pure and safe water." },
    { icon: Building2, title: "Commercial Solutions", desc: "Reliable systems for offices, hotels, schools, hospitals and more." },
    { icon: Factory, title: "Industrial Solutions", desc: "High-capacity RO plants for industrial and large-scale applications." },
    { icon: Wrench, title: "Installation", desc: "Professional installation and commissioning for optimal performance." },
    { icon: Settings, title: "Maintenance & Service", desc: "Regular maintenance, filter replacement and technical support." },
    { icon: ShieldCheck, title: "AMC Solutions", desc: "Affordable AMC plans to keep your system running smoothly." },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold text-[#0084FF] uppercase tracking-widest mb-2">What We Do</p>
          <h2 className="text-3xl font-black text-[#0B2038] mb-4">Complete Water Purification Solutions</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#f0f8ff] flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-[#0084FF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xs font-bold text-[#0B2038] mb-3 px-1">{item.title}</h3>
              <p className="text-[10px] text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurValuesSection() {
  const values = [
    { icon: ShieldCheck, title: "Quality", desc: "We never compromise on product quality and safety." },
    { icon: Users, title: "Integrity", desc: "We believe in honest communication and transparent service." },
    { icon: Lightbulb, title: "Innovation", desc: "We adopt advanced technology for better water solutions." },
    { icon: Settings, title: "Reliability", desc: "We deliver consistent performance and dependable support." },
    { icon: ThumbsUp, title: "Sustainability", desc: "We promote eco-friendly solutions for a better tomorrow." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">

          <div>
            <p className="text-[10px] font-bold text-[#0084FF] uppercase tracking-widest mb-2">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B2038] mb-4">What We Stand For</h2>
            <div className="w-10 h-[3px] bg-[#0084FF] mb-12 rounded-full"></div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
              {values.map((v, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#f0f8ff] flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5 text-[#0084FF]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[11px] font-bold text-[#0B2038] mb-2">{v.title}</h3>
                  <p className="text-[9px] text-slate-500 leading-relaxed px-1">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-md h-[300px] lg:h-[380px]">
            <Image src="https://images.unsplash.com/photo-1548345680-f5475ea90f46?w=800&q=80" alt="Girl drinking water" fill className="object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}

function OurPromiseSection() {
  const items = [
    { icon: Users, title: "Experienced\nProfessionals", desc: "Skilled team with deep\nproduct knowledge." },
    { icon: Settings, title: "Quality\nComponents", desc: "We use genuine and\nhigh-quality parts." },
    { icon: Headphones, title: "Prompt\nSupport", desc: "Quick response for all\nservice requests." },
    { icon: Wrench, title: "Customized\nSolutions", desc: "Systems designed as per\nyour water requirement." },
    { icon: ThumbsUp, title: "Customer\nSatisfaction", desc: "We are committed to\nyour satisfaction." },
  ];

  return (
    <section className="py-20 bg-[#061930] relative overflow-hidden text-center">
      {/* Decorative side splashes */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-[url('https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?q=80&w=2000')] bg-cover opacity-10 mix-blend-screen pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-[url('https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?q=80&w=2000')] bg-cover bg-right opacity-10 mix-blend-screen pointer-events-none" />

      <div className="container-custom relative z-10">
        <p className="text-[10px] font-bold text-[#0084FF] uppercase tracking-widest mb-3">Our Promise</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-16">Why Customers Trust Us</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 divide-x divide-white/10">
          {items.map((item, i) => (
            <div key={i} className={`px-4 flex flex-col items-center ${i === 0 ? 'border-l-0' : ''}`}>
              <item.icon className="w-10 h-10 text-[#0084FF] mb-5" strokeWidth={1.5} />
              <h3 className="text-xs font-bold text-white mb-3 whitespace-pre-line">{item.title}</h3>
              <p className="text-[10px] text-slate-400 whitespace-pre-line leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="bg-[#f0f8ff] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 p-8 lg:px-16 border border-slate-100 shadow-sm">

          <div className="flex items-center gap-8 text-center md:text-left">
            <div className="relative w-24 h-28 hidden md:block shrink-0 rounded-lg overflow-hidden mix-blend-multiply bg-transparent">
              <Image src="https://images.unsplash.com/photo-1548345680-f5475ea90f46?w=200&q=80" alt="Glass of water" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-[#0B2038] mb-3">Let's Build a Better Water Experience Together</h2>
              <p className="text-xs text-slate-600">Whether you need a solution for your home, business or industry,<br className="hidden lg:block" /> we are here to help you.</p>
            </div>
          </div>

          <Link href="/contact" className="shrink-0 inline-flex items-center justify-center px-8 py-3.5 bg-[#0B2038] text-white text-xs font-bold rounded hover:bg-[#0084FF] transition-colors shadow-sm">
            Contact Us <ArrowRight className="w-4 h-4 ml-2" />
          </Link>

        </div>
      </div>
    </section>
  );
}
