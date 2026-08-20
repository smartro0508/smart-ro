"use client";

import { useState, useEffect } from "react";
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
import { API_BASE_URL } from "@/config";

const ICONS = [Settings, Wrench, Droplet, Layers, Sparkles, Activity, PenTool, Shield, Briefcase, Home];

export default function ServicesPage() {
  const [servicesList, setServicesList] = useState<any[]>([]);
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/v1/services/get-all`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        const json = await res.json();
        setServicesList(json.data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

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
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-4 border-[#0f3a61] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : servicesList.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              No services found.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((service, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <div 
                    key={service.id || i} 
                    onClick={() => setSelectedService({ ...service, Icon })}
                    className="bg-white p-8 border border-slate-200 hover:border-[#0f3a61] transition-colors rounded-sm flex flex-col cursor-pointer group shadow-sm hover:shadow-md"
                  >
                    <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-[#0f3a61] transition-colors">
                      <Icon className="w-5 h-5 text-[#0f3a61] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#06999b] transition-colors">{service.servicename}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow line-clamp-3">
                      {service.description}
                    </p>
                    <div className="pt-4 border-t border-slate-100 mt-auto">
                      <span className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest transition-colors flex items-center gap-2">
                        View Protocol <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
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
                  <selectedService.Icon className="w-5 h-5 text-white" />
                </div>
                {selectedService.servicename}
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
                  <img src={`${API_BASE_URL}/uploads/images/${selectedService.image}`} alt={selectedService.servicename} className="absolute inset-0 w-full h-full object-cover" />
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest mb-3 block">Service Description</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {selectedService.description}
                </p>
              </div>
              
              {selectedService.keypoints && (
                <div>
                  <h3 className="text-xs font-bold text-[#0f3a61] uppercase tracking-widest mb-4 block">Included in Protocol</h3>
                  <ul className="space-y-4">
                    {(() => {
                      let points = [];
                      if (Array.isArray(selectedService.keypoints)) {
                        points = selectedService.keypoints;
                      } else if (typeof selectedService.keypoints === 'string') {
                        try {
                          points = JSON.parse(selectedService.keypoints);
                        } catch (e) {
                          points = selectedService.keypoints.split(',');
                        }
                      }
                      return points.map((point: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#06999b] shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-slate-700">{point}</span>
                        </li>
                      ));
                    })()}
                  </ul>
                </div>
              )}
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
