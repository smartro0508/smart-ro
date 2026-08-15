"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Droplet, PhoneCall } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Thin Banner */}
      <div className="bg-gradient-to-r from-primary-dark via-primary to-accent text-white py-2 hidden md:block relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container-custom flex justify-between items-center text-xs font-semibold tracking-wider relative z-10">
          <div className="flex gap-8 items-center">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> 
              ISO 9001:2015 CERTIFIED
            </span>
            <span className="flex items-center gap-2 opacity-80">
              WORLD-CLASS FILTRATION
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="tel:+18001234567" className="hover:text-white/80 transition-colors flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5" /> +1 (800) 123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "top-0 py-3 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] supports-[backdrop-filter]:bg-white/60"
            : "top-0 md:top-8 py-5 bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className={`flex items-center justify-between rounded-2xl transition-all duration-500 ${
            !isScrolled ? "bg-white shadow-[0_20px_50px_rgb(0,0,0,0.06)] border border-border/50 px-6 py-4" : "px-2"
          }`}>
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
                <img src="app-logo.png" alt="appLogo" height={40} width={150} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-surface-soft/50 rounded-full px-2 py-1.5 border border-border/40">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                      isActive 
                        ? "text-primary bg-white shadow-sm" 
                        : "text-text-secondary hover:text-primary hover:bg-white/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action */}
            <div className="hidden md:flex shrink-0">
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center justify-center px-7 py-2.5 text-sm font-bold text-white bg-[#0F172A] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(15,23,42,0.3)]"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-white"></span>
                <span className="relative">Get a Quote</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative p-2 text-text-secondary hover:text-primary transition-colors rounded-lg hover:bg-surface-soft"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <div 
          className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-border shadow-2xl lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="container-custom flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-bold rounded-xl transition-colors ${
                    isActive ? "bg-primary/5 text-primary" : "text-text-secondary hover:bg-surface-soft hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-border/50">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex justify-center w-full py-4 text-base font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
