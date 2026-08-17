import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="flex gap-4 group">
        <div className="w-12 h-12 rounded-sm bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#0f3a61] group-hover:bg-[#0f3a61] transition-all duration-300">
          <Phone className="w-5 h-5 text-[#0f3a61] group-hover:text-white transition-colors" />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</p>
          <a href="tel:+916383450508" className="text-base font-bold text-[#0f3a61] hover:text-primary transition-colors block leading-tight">6383450508, 9790188321</a>
          <p className="text-sm text-slate-500 mt-1">Mon–Sat, 9AM–6PM</p>
        </div>
      </div>

      <div className="flex gap-4 group">
        <div className="w-12 h-12 rounded-sm bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#0f3a61] group-hover:bg-[#0f3a61] transition-all duration-300">
          <Mail className="w-5 h-5 text-[#0f3a61] group-hover:text-white transition-colors" />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
          <a href="mailto:smartro0508@gmail.com" className="text-base font-bold text-[#0f3a61] hover:text-primary transition-colors block leading-tight">smartro0508@gmail.com</a>
          <p className="text-sm text-slate-500 mt-1">We reply within 24 hours</p>
        </div>
      </div>

      <div className="flex gap-4 group">
        <div className="w-12 h-12 rounded-sm bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#0f3a61] group-hover:bg-[#0f3a61] transition-all duration-300">
          <MapPin className="w-5 h-5 text-[#0f3a61] group-hover:text-white transition-colors" />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Office</p>
          <p className="text-base font-bold text-[#0f3a61] leading-tight">Harish Arora</p>
          <p className="text-sm text-slate-500 mt-1">9/1, Sri Nagar, Deepam Nagar<br/>9th Street, Irugur, 641103</p>
        </div>
      </div>
    </div>
  );
}
