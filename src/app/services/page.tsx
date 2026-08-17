import { Wrench, Shield, Home, Droplets, HeartPulse, Settings } from "lucide-react";
import Link from "next/link";

const servicesList = [
  {
    title: "Commissioning",
    description: "Protocol-driven installation ensuring hardware is deployed to strict operational standards.",
    icon: Home,
  },
  {
    title: "Enterprise AMC",
    description: "Comprehensive SLA-backed maintenance plans covering diagnostics and priority technical support.",
    icon: Shield,
  },
  {
    title: "Component Replacement",
    description: "Sourcing and installation of certified OEM membranes and consumables for peak efficiency.",
    icon: Droplets,
  },
  {
    title: "Industrial Maintenance",
    description: "Heavy-duty lifecycle management for commercial and industrial water treatment plants.",
    icon: Settings,
  },
  {
    title: "Metrics & Telemetry",
    description: "Advanced testing for TDS, pH, and hardness to validate system performance parameters.",
    icon: HeartPulse,
  },
  {
    title: "Rapid Response Repair",
    description: "On-demand troubleshooting and mechanical repair to minimize operational downtime.",
    icon: Wrench,
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <section className="relative pt-32 pb-24 bg-white border-b border-slate-200">
        <div className="container-custom">
          <span className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest mb-3 block">Technical Support</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Operations & Maintenance
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl border-l-2 border-[#0f3a61] pl-5">
            Enterprise-grade support and lifecycle management to ensure your purification infrastructure operates at maximum reliability and compliance.
          </p>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, i) => (
              <div key={i} className="bg-white p-8 border border-slate-200 hover:border-[#0f3a61] transition-colors rounded-sm flex flex-col">
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center mb-6">
                  <service.icon className="w-5 h-5 text-[#0f3a61]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <span className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest cursor-pointer hover:text-slate-900 transition-colors">
                    View Protocol →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1120] text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Require Immediate Assistance?</h2>
          <p className="text-sm text-slate-400 mb-10 leading-relaxed">
            Our NOC and field engineering teams are available to address critical operational issues, schedule maintenance, or discuss SLA terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18001234567" className="inline-flex items-center justify-center px-8 py-4 bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#057a7c] transition-colors">
              Call Support: +1 800-123-4567
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white/20 transition-colors">
              Initiate Service Ticket
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
