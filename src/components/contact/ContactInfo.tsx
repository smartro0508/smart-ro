import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 XXX XXX XXXX",
    sub: "Mon–Sat, 9AM–6PM",
    href: "tel:+910000000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@company.com",
    sub: "We reply within 24 hours",
    href: "mailto:info@company.com",
  },
  {
    icon: MapPin,
    label: "Head Office",
    value: "Company Address",
    sub: "City, State, PIN Code",
    href: "#location",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Saturday",
    sub: "9:00 AM – 6:00 PM",
    href: "#",
  },
];

export default function ContactInfo() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {contactDetails.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          className="group flex flex-col bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#075985] hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-11 h-11 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-[#075985] group-hover:border-[#075985] transition-colors duration-300">
              <item.icon className="w-5 h-5 text-[#075985] group-hover:text-white transition-colors duration-300" />
            </div>
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#075985] group-hover:translate-x-0.5 transition-all duration-300" />
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
          <p className="text-base font-bold text-[#0F172A] leading-snug">{item.value}</p>
          <p className="text-sm text-slate-500 mt-1">{item.sub}</p>
        </a>
      ))}
    </div>
  );
}
