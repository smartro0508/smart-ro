import { MapPin, Phone, Clock } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Info */}
          <div>
            <p className="text-xs font-bold text-[#075985] uppercase tracking-widest mb-4">Our Location</p>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-10 leading-tight">
              Visit Our <br />Corporate Office
            </h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-11 h-11 shrink-0 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5 text-[#075985]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Address</p>
                  <p className="font-bold text-[#0F172A] text-lg leading-snug">Smart RO</p>
                  <p className="text-slate-500">123 Purification Avenue, Tech Park<br />City, State – PIN 12345</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-11 h-11 shrink-0 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5 text-[#075985]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+910000000000" className="font-bold text-[#0F172A] text-lg hover:text-[#075985] transition-colors">+91 XXX XXX XXXX</a>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-11 h-11 shrink-0 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm">
                  <Clock className="w-5 h-5 text-[#075985]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Working Hours</p>
                  <p className="font-bold text-[#0F172A] text-lg">Monday – Saturday</p>
                  <p className="text-slate-500">9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0F172A] text-white text-sm font-bold rounded-xl hover:bg-[#075985] transition-colors duration-300"
              >
                Get Directions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-[480px] w-full rounded-3xl overflow-hidden bg-slate-200 relative border border-slate-200 shadow-sm">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e144_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e144_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full border border-slate-300 flex items-center justify-center shadow-md">
                <MapPin className="w-7 h-7 text-[#075985]" />
              </div>
              <div className="bg-white px-6 py-2 rounded-full border border-slate-200 text-sm font-bold text-slate-500 shadow-sm tracking-wider uppercase">
                Map Integration Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
