import Link from "next/link";
import { Droplet, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] text-white pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1/2 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container-custom relative z-10">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-3 mb-6 group inline-flex"
            >
              <img src="app-logo.png" alt="appLogo" height={100} width={200} />
            </Link>
            l̥
            <p className="text-slate-400 mb-8 leading-relaxed max-w-sm">
              Pioneering advanced RO purification technology engineered to
              deliver safe, clean, and refreshing water for every need, without
              compromise.
            </p>
            {/* Minimal Social Links */}
            <div className="flex gap-4">
              {[
                "https://cdn-icons-png.flaticon.com/128/145/145802.png",
                "https://cdn-icons-png.flaticon.com/128/3955/3955024.png",
              ].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-slate-500 hover:text-white transition-colors text-sm font-semibold"
                >
                  <img src={social} alt="Social Icon" className="w-10 h-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider text-sm">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-primary transition-colors inline-block transform hover:translate-x-1 duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-slate-400 hover:text-primary transition-colors inline-block transform hover:translate-x-1 duration-200"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-slate-400 hover:text-primary transition-colors inline-block transform hover:translate-x-1 duration-200"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-primary transition-colors inline-block transform hover:translate-x-1 duration-200"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider text-sm">
              Policies
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-400 hover:text-primary transition-colors inline-block transform hover:translate-x-1 duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-slate-400 hover:text-primary transition-colors inline-block transform hover:translate-x-1 duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-slate-400 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="mt-2 text-sm leading-relaxed">
                  Smart RO
                  <br />
                  9/1, sri nagar, deepam nagar 9th Street,
                  <br />
                  irugur, 641103
                </span>
              </li>
              <li className="flex items-center gap-4 text-slate-400 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">
                  6383450508, 9790188321
                </span>
              </li>
              <li className="flex items-center gap-4 text-slate-400 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">
                  smartro0508@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex justify-center items-center">
          <p className="text-slate-500 text-sm font-medium text-center">
            © {new Date().getFullYear()} Smart RO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
