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
  CheckCircle2
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#f8fafc]">
      <Hero />
      <QuickFeatures />
      <OurSolutions />
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
// Hero (Kept identical as requested)
// ----------------------------------------------------------------------
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A]">
      {/* ── Looping background video ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        poster="https://images.unsplash.com/photo-1548345680-f5475ea90f46?q=80&w=1920"
      >
        <source
          src="https://flutter.github.io/assets-for-api-docs/assets/videos/bee.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── Content ── */}
      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-28 pb-20 md:pt-36 md:pb-28">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#22D3EE] uppercase tracking-widest border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
            Advanced Water Purification Solutions
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            Pure Water.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#38BDF8]">
              Better Living.
            </span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-lg border-l-2 border-[#22D3EE]/40 pl-5">
            Advanced water purification solutions designed to deliver clean,
            safe, and refreshing water for homes, businesses, and industries.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0F172A] text-sm font-bold rounded-xl hover:bg-[#22D3EE] hover:text-[#0F172A] transition-colors duration-300 shadow-lg"
            >
              Explore Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white text-sm font-bold rounded-xl hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm"
            >
              Request a Quote
            </Link>
          </div>

          <p className="text-xs text-slate-500 font-semibold tracking-widest uppercase">
            Reliable Technology &nbsp;•&nbsp; Professional Service &nbsp;•&nbsp;
            Long-Term Support
          </p>
        </div>

        {/* Right — Floating glass info card */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-[420px]">
            {/* Main glass card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-8 shadow-2xl">
              <p className="text-xs font-bold text-[#22D3EE] uppercase tracking-widest mb-6">
                Purification Standard
              </p>

              <div className="space-y-5">
                {[
                  { stage: "01", name: "Sediment Filter", done: true },
                  { stage: "02", name: "Carbon Block", done: true },
                  { stage: "03", name: "RO Membrane", done: true },
                  { stage: "04", name: "UV / UF Stage", done: true },
                  { stage: "05", name: "Mineral Enhancer", done: true },
                ].map((s) => (
                  <div key={s.stage} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#22D3EE]/20 border border-[#22D3EE]/30 flex items-center justify-center text-[10px] font-black text-[#22D3EE]">
                      {s.stage}
                    </div>
                    <span className="text-white text-sm font-semibold flex-grow">
                      {s.name}
                    </span>
                    <svg
                      className="w-4 h-4 text-[#22D3EE] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-white">99.9%</p>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                    Purification Rate
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-[#075985] flex items-center justify-center shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating stat chip */}
            <div className="absolute -top-4 -right-4 bg-[#22D3EE] text-[#0F172A] px-4 py-2 rounded-full text-xs font-black shadow-lg uppercase tracking-wider">
              ISO Certified
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

// ----------------------------------------------------------------------
// QuickFeatures
// ----------------------------------------------------------------------
const quickFeatures = [
  { icon: Droplet, title: "RO Products", desc: "Wide range of RO systems for home, commercial & industrial use." },
  { icon: Wrench, title: "RO Installation", desc: "Professional installation and setup by experienced experts." },
  { icon: Settings, title: "RO Service", desc: "Maintenance, repair and genuine parts replacement." },
  { icon: ShieldCheck, title: "Water Treatment", desc: "Complete water treatment solutions for all applications." }
];

function QuickFeatures() {
  return (
    <section className="bg-white py-10 border-b border-slate-100 relative z-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {quickFeatures.map((f, i) => (
            <div key={i} className="flex items-start gap-4 group">
              <div className="w-14 h-14 rounded-full bg-[#f0f8ff] flex items-center justify-center shrink-0 group-hover:bg-[#0084FF] transition-colors duration-300">
                <f.icon className="w-6 h-6 text-[#0084FF] group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B2038] mb-1">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// OurSolutions
// ----------------------------------------------------------------------
const solutions = [
  {
    name: "Residential RO",
    items: ["Home RO Purifiers", "Under-Sink RO", "Wall Mounted RO"],
    image: "https://images.unsplash.com/photo-1574492695509-5e72cc2dc122?w=600&q=80"
  },
  {
    name: "Commercial RO",
    items: ["Office RO Systems", "Hotel & Restaurant RO", "School / Hospital RO"],
    image: "https://images.unsplash.com/photo-1550508518-a63e9f3b55c2?w=600&q=80"
  },
  {
    name: "Industrial RO",
    items: ["Commercial RO Plants", "Industrial RO Plants", "High Capacity RO Systems"],
    image: "https://images.unsplash.com/photo-1606132717013-0941be200427?w=600&q=80"
  },
  {
    name: "Water Treatment",
    items: ["UV Systems", "UF Systems", "Water Softeners", "Filtration Systems"],
    image: "https://images.unsplash.com/photo-1548345680-f5475ea90f46?w=600&q=80"
  }
];

function OurSolutions() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-[10px] font-bold text-[#0084FF] uppercase tracking-widest mb-2">Our Solutions</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0B2038] mb-4">RO Systems For Every Need</h2>
          <div className="w-12 h-0.5 bg-[#0084FF] mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 bg-slate-200">
                <Image src={sol.image} alt={sol.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#0B2038] text-lg mb-4">{sol.name}</h3>
                <ul className="space-y-3 mb-6 min-h-[90px]">
                  {sol.items.map((item, j) => (
                    <li key={j} className="text-xs text-slate-600 flex items-center gap-2 before:content-['•'] before:text-[#0084FF] before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/products" className="inline-flex items-center text-xs font-bold text-[#0084FF] hover:text-[#0B2038] transition-colors group">
                  View Products <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// FeaturedProducts
// ----------------------------------------------------------------------
const featuredProducts = [
  { name: "AquaPure Classic", specs: { Capacity: "15 LPH", Technology: "RO + UV + UF", Application: "Home", Warranty: "1 Year" }, image: "https://images.unsplash.com/photo-1574492695509-5e72cc2dc122?w=600&q=80" },
  { name: "AquaPure Pro", specs: { Capacity: "25 LPH", Technology: "RO + UV + UF + TDS", Application: "Home / Office", Warranty: "1 Year" }, image: "https://images.unsplash.com/photo-1550508518-a63e9f3b55c2?w=600&q=80" },
  { name: "AquaPure 250 LPH", specs: { Capacity: "250 LPH", Technology: "RO + UV", Application: "Commercial", Material: "SS 304" }, image: "https://images.unsplash.com/photo-1606132717013-0941be200427?w=600&q=80" },
  { name: "AquaPure 1000 LPH", specs: { Capacity: "1000 LPH", Technology: "RO + UV", Application: "Industrial", Material: "SS 316" }, image: "https://images.unsplash.com/photo-1548345680-f5475ea90f46?w=600&q=80" },
];

function FeaturedProducts() {
  return (
    <section className="py-20 bg-[#F0F6FF]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-[10px] font-bold text-[#0084FF] uppercase tracking-widest mb-2">Our Best Sellers</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0B2038] mb-4">Featured RO Products</h2>
          <div className="w-12 h-0.5 bg-[#0084FF] mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden mix-blend-multiply">
                <Image src={p.image} alt={p.name} fill className="object-contain" />
              </div>
              <h3 className="font-bold text-[#0B2038] text-base md:text-lg mb-4">{p.name}</h3>
              <ul className="space-y-2 mb-8 flex-grow">
                {Object.entries(p.specs).map(([key, val], j) => (
                  <li key={j} className="text-xs text-slate-500 flex items-start gap-1.5 before:content-['•'] before:text-slate-300">
                    <span className="font-semibold text-slate-700 min-w-[70px]">{key}:</span> {val}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 mt-auto">
                <Link href="/products" className="flex-1 text-center py-2.5 text-xs font-bold text-[#0B2038] border border-slate-200 rounded hover:border-[#0084FF] hover:text-[#0084FF] transition-colors">
                  View Details
                </Link>
                <Link href="/contact" className="flex-1 text-center py-2.5 text-xs font-bold text-white bg-[#0B2038] rounded hover:bg-[#0084FF] transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>
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
  { num: "01", name: "Sediment Filter", desc: "Removes dust, sand and suspended particles." },
  { num: "02", name: "Pre Carbon Filter", desc: "Reduces chlorine, odor and organic impurities." },
  { num: "03", name: "RO Membrane", desc: "Reduces dissolved impurities and unwanted substances." },
  { num: "04", name: "UV / UF", desc: "Additional purification and microbial protection." },
  { num: "05", name: "Mineral Cartridge", desc: "Adds essential minerals and improves taste." },
];

function AdvancedTechnology() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-[#0B2038] mb-2">Advanced Purification Technology</h2>
          <p className="text-sm text-slate-500">Multi-stage purification process for 100% safe and pure water</p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-4 relative">
          {stages.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center flex-1 w-full relative z-10 group">
              <div className="w-16 h-16 bg-white rounded-full border border-slate-200 shadow-sm flex flex-col items-center justify-center mb-4 relative group-hover:border-[#0084FF] group-hover:bg-[#f0f8ff] transition-colors">
                <ShieldCheck className="w-5 h-5 text-[#0084FF] mb-0.5" />
                <span className="text-[9px] font-black text-[#0B2038] leading-none">{s.num}</span>
              </div>
              <h3 className="text-xs font-bold text-[#0B2038] mb-1.5 px-2">{s.name}</h3>
              <p className="text-[10px] text-slate-500 leading-relaxed max-w-[130px] mx-auto">{s.desc}</p>

              {/* Arrow to next item (except last) */}
              {i < stages.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-[15%] w-8 text-slate-300 transform -translate-y-1/2">
                  <ArrowRight className="w-4 h-4 mx-auto" />
                </div>
              )}
            </div>
          ))}

          {/* Glass of water at the end */}
          <div className="hidden lg:flex flex-col items-center justify-start text-center pl-4 relative z-10 w-24">
            <div className="absolute top-8 -left-4 w-6 text-slate-300 transform -translate-y-1/2">
              <ArrowRight className="w-4 h-4 mx-auto" />
            </div>
            <div className="w-10 h-14 mt-1 border-b-[2px] border-x-[2px] border-[#0084FF] rounded-b-[4px] relative overflow-hidden bg-blue-50">
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#0084FF]/40 to-[#0084FF]/10" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-10 border border-[#0084FF]/20 rounded-full rotate-[15deg] bg-white/30" />
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
  { value: "10+", label: "Years Experience", icon: ShieldCheck },
  { value: "500+", label: "Systems Installed", icon: Settings },
  { value: "1000+", label: "Happy Customers", icon: Droplet },
  { value: "24/7", label: "Service Support", icon: Phone },
];

const whyFeatures = [
  { title: "Quality Components", desc: "We use only high quality and genuine RO parts.", icon: ShieldCheck },
  { title: "Customized Solutions", desc: "RO systems designed as per your water quality and requirement.", icon: Settings },
  { title: "Expert Technicians", desc: "Skilled and experienced installation & service team.", icon: Wrench },
  { title: "Fast Service", desc: "Quick response and timely support.", icon: ShieldCheck },
  { title: "AMC Available", desc: "Affordable AMC plans for hassle-free maintenance.", icon: Droplet },
  { title: "Customer Satisfaction", desc: "We are committed to pure water and happy customers.", icon: HeartHandshake },
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
          {/* Left Stats Block */}
          <div className="bg-[#061930] rounded-xl p-10 grid grid-cols-2 gap-x-8 gap-y-12 content-center shadow-xl">
            {statsInfo.map((s, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-8 h-8 rounded border border-white/10 bg-white/5 flex items-center justify-center">
                    <s.icon className="w-4 h-4 text-[#0084FF]" />
                  </div>
                </div>
                <div className="text-3xl font-black text-white mb-1.5">{s.value}</div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Right Features Block */}
          <div className="py-4">
            <h2 className="text-3xl font-black text-[#0B2038] mb-10">Why Choose Us?</h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {whyFeatures.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center text-[#0084FF]">
                    <f.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B2038] mb-1.5">{f.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed pr-4">{f.desc}</p>
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
// ProfessionalInstallation
// ----------------------------------------------------------------------
function ProfessionalInstallation() {
  return (
    <section className="py-10 bg-[#F8FAFC] pb-24">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1.2fr_2fr] gap-8">
          {/* Left Image */}
          <div className="relative h-[480px] lg:h-auto rounded-xl overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80"
              alt="Professional Technician"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 border border-slate-100 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-base font-bold text-[#0B2038] mb-6 border-b border-slate-100 pb-4">Professional Installation</h3>
              <ul className="space-y-4 flex-grow mb-8">
                {[
                  "Site inspection & water testing",
                  "Right system selection",
                  "Proper installation & setup",
                  "TDS check & final testing",
                  "User guide & support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#0084FF] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-auto block text-center w-full px-6 py-3.5 bg-[#061930] text-white text-xs font-bold rounded hover:bg-[#0084FF] transition-colors">
                Book Installation
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 border border-slate-100 flex flex-col hover:shadow-md transition-shadow">
              <h3 className="text-base font-bold text-[#0B2038] mb-6 border-b border-slate-100 pb-4">RO Service & Maintenance</h3>
              <ul className="space-y-4 flex-grow mb-8">
                {[
                  "RO Service & Cleaning",
                  "Filter & Membrane Replacement",
                  "Pump & SMPS Repair",
                  "Leakage Repair",
                  "AMC (Annual Maintenance Contract)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#0084FF] shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-auto block text-center w-full px-6 py-3.5 bg-[#061930] text-white text-xs font-bold rounded hover:bg-[#0084FF] transition-colors">
                Book a Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// Testimonials
// ----------------------------------------------------------------------
const reviews = [
  { name: "Ramesh Patel", location: "Ahmedabad", text: "Excellent product quality and very professional installation. Water quality is much better now." },
  { name: "Priya Shah", location: "Vadodara", text: "Very good service and timely support. Their AMC plan is very reasonable." },
  { name: "Amit Mehta", location: "Rajkot", text: "We installed a 1000 LPH RO plant for our industry. Good quality and reliable performance." }
]

function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-[#0B2038] mb-2">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-xl p-8 shadow-sm relative hover:shadow-md transition-shadow">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-[#0084FF]/20" />
              <p className="text-sm text-slate-600 leading-relaxed relative z-10 mb-8 pt-6">"{r.text}"</p>
              <div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden relative">
                    <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" alt="Avatar" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0B2038]">{r.name}</p>
                    <p className="text-[10px] text-slate-400">{r.location}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(n => <Star key={n} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots Placeholder */}
        <div className="flex justify-center gap-1.5 mt-10">
          <div className="w-2 h-2 rounded-full bg-[#0084FF]"></div>
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// CTASection
// ----------------------------------------------------------------------
function CTASection() {
  return (
    <section className="bg-[#061930] py-14 relative overflow-hidden">
      <div className="container-custom relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Looking for the Right RO System?</h2>
          <p className="text-sm text-slate-400 leading-relaxed">Tell us your requirement. We will help you choose the best<br className="hidden sm:block" />RO solution for your home, business or industry.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3.5 bg-[#0084FF] text-white text-xs font-bold rounded-md hover:bg-[#0074e0] transition-colors shadow-lg">
            Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border border-white/20 text-white text-xs font-bold rounded-md hover:border-white/40 hover:bg-white/5 transition-colors">
            <Phone className="w-4 h-4 mr-2" /> Call Now
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border border-white/20 text-white text-xs font-bold rounded-md hover:border-white/40 hover:bg-white/5 transition-colors">
            <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
          </Link>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-[#0084FF]/10 to-transparent pointer-events-none" />
    </section>
  );
}
