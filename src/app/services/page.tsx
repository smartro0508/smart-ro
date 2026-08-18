"use client";

import { useState } from "react";
import { 
  Wrench, 
  Settings, 
  Droplet, 
  Layers, 
  Sparkles, 
  Activity, 
  PenTool, 
  Shield, 
  Briefcase, 
  Home,
  X,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

const servicesList = [
  {
    title: "RO Installation",
    description: "Professional installation of RO water purifiers with proper connections and complete system testing.",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80",
    points: [
      "New RO installation",
      "Water and electrical connections",
      "Leakage checking",
      "Water flow testing",
      "Complete installation support"
    ]
  },
  {
    title: "RO Repair & Service",
    description: "Reliable repair and servicing for all common RO water purifier problems, helping restore your machine's performance.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
    points: [
      "RO not working",
      "Low water flow",
      "Water leakage",
      "Pump problems",
      "Electrical issues",
      "General troubleshooting"
    ]
  },
  {
    title: "Filter Replacement",
    description: "Timely filter replacement to maintain water quality and ensure your RO purifier continues to work efficiently.",
    icon: Droplet,
    image: "https://images.unsplash.com/photo-1548345680-f5475ea90f46?w=600&q=80",
    points: [
      "Sediment filter",
      "Pre-carbon filter",
      "Post-carbon filter",
      "Filter condition checking",
      "Water quality testing"
    ]
  },
  {
    title: "RO Membrane Replacement",
    description: "Professional RO membrane replacement to improve purification performance and maintain proper water quality.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80",
    points: [
      "Membrane inspection",
      "Membrane replacement",
      "TDS checking",
      "Water flow testing",
      "Purification performance check"
    ]
  },
  {
    title: "RO Cleaning & Maintenance",
    description: "Complete cleaning and preventive maintenance to keep your RO purifier hygienic, efficient, and long-lasting.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
    points: [
      "RO tank cleaning",
      "Filter housing cleaning",
      "Pipe cleaning",
      "System sanitization",
      "Leakage inspection",
      "Performance testing"
    ]
  },
  {
    title: "TDS & Water Quality Testing",
    description: "Water quality testing to understand your input and purified water quality and identify the right purification requirements.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    points: [
      "Input water TDS test",
      "Output water TDS test",
      "Water quality assessment",
      "RO performance check",
      "TDS comparison"
    ]
  },
  {
    title: "RO Parts Replacement",
    description: "Replacement of faulty or worn-out RO components with compatible parts to restore your purifier's performance.",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    points: [
      "RO pump",
      "SMPS / power adapter",
      "Solenoid valve",
      "Flow switch",
      "Float sensor",
      "Pipes and connectors"
    ]
  },
  {
    title: "Annual Maintenance Contract (AMC)",
    description: "Regular RO maintenance plans designed to keep your water purifier working efficiently throughout the year.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    points: [
      "Scheduled servicing",
      "Filter inspection",
      "TDS testing",
      "Preventive maintenance",
      "Priority service",
      "Parts replacement support"
    ]
  },
  {
    title: "Commercial RO Service",
    description: "Professional RO solutions for offices, restaurants, hotels, schools, apartments, and other commercial locations.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1606132717013-0941be200427?w=600&q=80",
    points: [
      "Commercial RO installation",
      "Regular maintenance",
      "Filter and membrane replacement",
      "Water quality testing",
      "RO plant servicing",
      "Customized maintenance plans"
    ]
  },
  {
    title: "Doorstep RO Service",
    description: "Convenient doorstep RO service that allows customers to get their water purifier inspected and serviced at their location.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=600&q=80",
    points: [
      "Home service",
      "Office service",
      "Quick inspection",
      "On-site repair",
      "Genuine replacement parts",
      "Service support"
    ]
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<typeof servicesList[0] | null>(null);

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
              <div 
                key={i} 
                onClick={() => setSelectedService(service)}
                className="bg-white p-8 border border-slate-200 hover:border-[#0f3a61] transition-colors rounded-sm flex flex-col cursor-pointer group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-[#0f3a61] transition-colors">
                  <service.icon className="w-5 h-5 text-[#0f3a61] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#06999b] transition-colors">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow line-clamp-3">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <span className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest transition-colors flex items-center gap-2">
                    View Protocol <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
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
            <a href="tel:+916383450508" className="inline-flex items-center justify-center px-8 py-4 bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#057a7c] transition-colors">
              Call Support: +91 63834 50508
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white/20 transition-colors">
              Initiate Service Ticket
            </Link>
          </div>
        </div>
      </section>

      {/* Sidebar Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedService(null)}
          />
          
          {/* Sidebar */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0f3a61] flex items-center justify-center rounded-sm shrink-0">
                  <selectedService.icon className="w-5 h-5 text-white" />
                </div>
                {selectedService.title}
              </h2>
              <button 
                onClick={() => setSelectedService(null)}
                className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 overflow-y-auto flex-grow">
              {selectedService.image && (
                <div className="w-full h-48 relative mb-8 rounded-sm overflow-hidden bg-slate-100">
                  <img src={selectedService.image} alt={selectedService.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest mb-3 block">Service Description</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {selectedService.description}
                </p>
              </div>
              
              <div>
                <h3 className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest mb-4 block">Included in Protocol</h3>
                <ul className="space-y-4">
                  {selectedService.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#06999b] shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="p-6 border-t border-slate-100 bg-slate-50">
              <Link 
                href="/contact"
                onClick={() => setSelectedService(null)}
                className="w-full flex items-center justify-center px-6 py-4 bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#057a7c] transition-colors"
              >
                Request this Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
