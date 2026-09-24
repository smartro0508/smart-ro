import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-gradient-to-br from-[#0f3a61] via-[#12426e] to-[#0a2744] p-8 md:p-10 rounded-2xl shadow-2xl flex flex-col h-full justify-between relative overflow-hidden border border-[#1a5082]">

      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284c7] blur-[80px] rounded-full opacity-20 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0284c7] blur-[80px] rounded-full opacity-20 pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 space-y-10">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20 backdrop-blur-sm">
            Headquarters
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
          <p className="text-sm text-slate-300 leading-relaxed">Reach out to us directly through any of these channels for priority support.</p>
        </div>

        <div className="space-y-8">
          {/* Our Office */}
          <div className="flex gap-5 items-start group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#0284c7] group-hover:border-[#0284c7] group-hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm shadow-lg">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1.5 uppercase tracking-wide">Our Office</h4>
              <p className="text-sm text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                No.1/756, Adheeshwarar Nagar<br />
                3rd Street, Adhiyur, Kunnathur,<br />
                Tiruppur - 638103
              </p>
            </div>
          </div>

          {/* Call Us */}
          <div className="flex gap-5 items-start group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#0284c7] group-hover:border-[#0284c7] group-hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm shadow-lg">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1.5 uppercase tracking-wide">Call Us</h4>
              <p className="text-sm text-slate-300 mb-1 group-hover:text-white transition-colors duration-300 font-medium">+91 63834 50508</p>
              <p className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">+91 93843 70508</p>
            </div>
          </div>

          {/* Email Us */}
          <div className="flex gap-5 items-start group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#0284c7] group-hover:border-[#0284c7] group-hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm shadow-lg">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1.5 uppercase tracking-wide">Email Us</h4>
              <p className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">smartro0508@gmail.com</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex gap-5 items-start group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#0284c7] group-hover:border-[#0284c7] group-hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm shadow-lg">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1.5 uppercase tracking-wide">Working Hours</h4>
              <p className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">Sun - Mon: 8:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
