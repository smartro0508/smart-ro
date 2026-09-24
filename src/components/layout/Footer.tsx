"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const COMPANY_LINKS = [
  { name: "About Us",     path: "/about" },
  { name: "Our Products", path: "/products" },
  { name: "Gallery",      path: "/gallery" },
  { name: "Services",     path: "/services" },
];

const POLICY_LINKS = [
  { name: "Privacy Policy",    path: "/privacy-policy" },
  { name: "Terms of Service",  path: "/terms-of-service" },
];

const SOCIAL = [
  {
    icon: "https://cdn-icons-png.flaticon.com/128/145/145802.png",
    url:  "https://www.facebook.com/profile.php?id=100090036542933",
    alt:  "Facebook",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/3955/3955024.png",
    url:  "https://www.instagram.com/smartro321/",
    alt:  "Instagram",
  },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#060f1e] text-white overflow-hidden">
      {/* ── subtle grid overlay ─────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* ── ambient glows ───────────────────────────────────────────────── */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#0284c7]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-[#06999b]/8 blur-[140px] rounded-full pointer-events-none" />

      {/* ── top border ──────────────────────────────────────────────────── */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#0284c7]/60 to-transparent" />

      {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
      <div className="container-custom relative z-10 pt-20 pb-10">

        {/* top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-white/[0.07]">

          {/* Brand */}
          <div className="lg:col-span-4 lg:pr-10">
            <Link href="/" className="inline-flex relative group mb-7 block">
              <div className="absolute -inset-2 bg-[#06999b]/15 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <img
                src="app-logo.png"
                alt="Smart RO"
                height={100}
                width={190}
                className="relative object-contain group-hover:scale-[1.03] transition-transform duration-300"
              />
            </Link>
            <p className="text-[14px] text-slate-400 leading-[1.8] mb-8 max-w-sm">
              Pioneering advanced RO purification technology engineered to
              deliver safe, clean, and refreshing water for every need, without
              compromise.
            </p>
            {/* socials */}
            <div className="flex items-center gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.12] hover:-translate-y-1 transition-all duration-300"
                >
                  <img src={s.icon} alt={s.alt} className="w-5 h-5 object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.18em] mb-6 relative inline-block">
              Company
              <span className="absolute -bottom-2.5 left-0 w-6 h-[2.5px] bg-gradient-to-r from-[#0284c7] to-[#06999b] rounded-full" />
            </h4>
            <ul className="space-y-3.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="group flex items-center gap-2 text-[14px] font-medium text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#06999b] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-250 shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.18em] mb-6 relative inline-block">
              Policies
              <span className="absolute -bottom-2.5 left-0 w-6 h-[2.5px] bg-gradient-to-r from-[#0284c7] to-[#06999b] rounded-full" />
            </h4>
            <ul className="space-y-3.5">
              {POLICY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="group flex items-center gap-2 text-[14px] font-medium text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#06999b] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-250 shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.18em] mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2.5 left-0 w-6 h-[2.5px] bg-gradient-to-r from-[#0284c7] to-[#06999b] rounded-full" />
            </h4>
            <ul className="space-y-5">
              {/* address */}
              <li className="group flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center shrink-0 group-hover:bg-[#0284c7] group-hover:border-[#0284c7] group-hover:shadow-lg group-hover:shadow-[#0284c7]/25 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-[#06999b] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-[13px] leading-[1.75] text-slate-400 group-hover:text-slate-300 transition-colors duration-200 mt-1 font-medium">
                  Smart RO<br />
                  9/1, sri nagar, deepam nagar 9th Street,<br />
                  irugur, 641103
                </span>
              </li>
              {/* phone */}
              <li className="group flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center shrink-0 group-hover:bg-[#0284c7] group-hover:border-[#0284c7] group-hover:shadow-lg group-hover:shadow-[#0284c7]/25 transition-all duration-300">
                  <Phone className="w-4 h-4 text-[#06999b] group-hover:text-white transition-colors duration-300" />
                </div>
                <a
                  href="tel:+916383450508"
                  className="text-[14px] font-medium text-slate-400 group-hover:text-white transition-colors duration-200"
                >
                  6383450508, 9384370508
                </a>
              </li>
              {/* email */}
              <li className="group flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center shrink-0 group-hover:bg-[#0284c7] group-hover:border-[#0284c7] group-hover:shadow-lg group-hover:shadow-[#0284c7]/25 transition-all duration-300">
                  <Mail className="w-4 h-4 text-[#06999b] group-hover:text-white transition-colors duration-300" />
                </div>
                <a
                  href="mailto:smartro0508@gmail.com"
                  className="text-[14px] font-medium text-slate-400 group-hover:text-white transition-colors duration-200"
                >
                  smartro0508@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── BOTTOM BAR ──────────────────────────────────────────────────── */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 relative">
          <p className="text-[13px] text-slate-600 font-medium text-center sm:text-left">
            © {new Date().getFullYear()} Smart RO. All Rights Reserved.
          </p>

          <p className="text-[12px] text-slate-700 font-medium hidden sm:block">
            Engineered for purity. Built for performance.
          </p>

          {/* back to top */}
          <button
            onClick={scrollToTop}
            className={`absolute right-0 w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.10] flex items-center justify-center text-[#06999b] hover:bg-gradient-to-br hover:from-[#0284c7] hover:to-[#06999b] hover:text-white hover:border-transparent transition-all duration-400 shadow-sm hover:shadow-lg hover:shadow-[#06999b]/30 group ${
              isVisible ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
