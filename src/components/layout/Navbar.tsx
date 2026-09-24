"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── TOP ANNOUNCEMENT BAR ─────────────────────────────────────────── */}
      <div className="w-full bg-[#0b2d4e] text-white py-2.5 z-[60] relative hidden md:block border-b border-white/[0.06]">
        {/* subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-custom relative z-10 flex justify-between items-center">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
            Smart RO
          </div>
          <a
            href="tel:+916383450508"
            className="flex items-center gap-2 text-[11px] font-bold text-white/70 hover:text-white transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5" />
            +91-63834 50508
          </a>
        </div>
      </div>

      {/* ── MAIN HEADER ──────────────────────────────────────────────────── */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
            ? "top-0 bg-white/96 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.08)] border-b border-slate-200/50 py-3"
            : "top-0 md:top-[38px] bg-white py-5 border-b border-slate-100"
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0 w-[150px] group">
              <img
                src="/app-logo.png"
                alt="Smart RO Logo"
                height={40}
                width={140}
                className="object-contain group-hover:opacity-90 transition-opacity duration-200"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center justify-center gap-8 flex-grow">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`group relative text-[14px] font-bold tracking-wide transition-colors duration-200 py-1 ${isActive
                        ? "text-[#0b2d4e]"
                        : "text-slate-500 hover:text-[#0b2d4e]"
                      }`}
                  >
                    {link.name}
                    {/* gradient underline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2.5px] rounded-full bg-gradient-to-r from-[#0284c7] to-[#06999b] transition-all duration-300 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center justify-end shrink-0 w-[150px]">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-2.5 bg-gradient-to-r from-[#0b2d4e] to-[#06999b] hover:from-[#082136] hover:to-[#057a7c] text-white text-[13px] font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#0b2d4e]/20 hover:-translate-y-0.5 hover:shadow-xl tracking-wide"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2.5 rounded-xl text-slate-600 hover:text-[#0b2d4e] hover:bg-slate-100 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-b border-slate-100/80 shadow-2xl lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[520px] opacity-100 py-5" : "max-h-0 opacity-0 py-0"
            }`}
        >
          <div className="container-custom flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`relative px-5 py-3.5 text-[15px] font-bold rounded-xl transition-all duration-200 ${isActive
                      ? "bg-[#0b2d4e]/5 text-[#0b2d4e] border border-[#0b2d4e]/10"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#0b2d4e]"
                    }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-gradient-to-b from-[#0284c7] to-[#06999b] rounded-r-full" />
                  )}
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex justify-center w-full py-4 bg-gradient-to-r from-[#0b2d4e] to-[#06999b] hover:from-[#082136] hover:to-[#057a7c] text-white text-[15px] font-bold rounded-xl transition-all shadow-lg shadow-[#0b2d4e]/15 tracking-wide"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
