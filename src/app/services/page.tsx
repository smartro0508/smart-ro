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
      <section className="relative pt-24 pb-8 bg-slate-50">
        <div className="container-custom">
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#06999b]/5 to-transparent pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0f3a61]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-20 -translate-y-1/2 w-48 h-48 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none hidden md:block" />

            <div className="relative z-10 p-6 md:p-10 lg:p-12">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#0f3a61]/5 text-xs font-bold text-[#0f3a61] uppercase tracking-widest mb-4 border border-[#0f3a61]/10">Technical Support</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Operations & Maintenance
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl border-l-4 border-[#06999b] pl-5 font-medium">
                Enterprise-grade support and lifecycle management to ensure your purification infrastructure operates at maximum reliability and compliance.
              </p>
            </div>
          </div>
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
                    className="bg-white p-8 border border-slate-100 hover:border-[#06999b]/30 rounded-2xl flex flex-col cursor-pointer group shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(6,153,155,0.12)] transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#06999b]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#06999b] group-hover:border-[#06999b] transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
                        <Icon className="w-6 h-6 text-[#0f3a61] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0f3a61] transition-colors">{service.servicename}</h3>

                      {(Number(service.servicecost) > 0 || Number(service.serviceproductcost) > 0) && (
                        <div className="flex flex-col gap-2 mb-5 bg-slate-50/70 p-4 rounded-xl border border-slate-100/80">
                          {Number(service.servicecost) > 0 && (
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-slate-500 font-medium">Service Fee:</span>
                              <span className="font-bold text-slate-800">₹{Number(service.servicecost).toLocaleString('en-IN')}</span>
                            </div>
                          )}
                          {Number(service.serviceproductcost) > 0 && (
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-slate-500 font-medium">Product/Parts:</span>
                              <span className="font-bold text-slate-800">₹{Number(service.serviceproductcost).toLocaleString('en-IN')}</span>
                            </div>
                          )}
                        </div>
                      )}

                      <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow line-clamp-3">
                        {service.description}
                      </p>

                      <div className="pt-5 border-t border-slate-100 mt-auto flex items-center justify-between group-hover:border-slate-200 transition-colors">
                        <span className="text-xs font-bold text-[#06999b] uppercase tracking-wider transition-colors flex items-center gap-2">
                          View Details
                        </span>
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#0f3a61] transition-all duration-300 group-hover:translate-x-1">
                          <span className="text-slate-400 group-hover:text-white transition-colors">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-slate-900 text-white">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#06999b]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-custom text-center max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Require Immediate Assistance?</h2>
          <p className="text-base text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Our NOC and field engineering teams are available to address critical operational issues, schedule maintenance, or discuss SLA terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+916383450508" className="inline-flex items-center justify-center px-8 py-4 bg-[#06999b] hover:bg-[#057a7c] text-white text-sm font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,153,155,0.3)]">
              Call Support: +91 63834 50508
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white text-sm font-bold rounded-full transition-all duration-300 hover:scale-105">
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
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0f3a61]/10 flex items-center justify-center rounded-xl shrink-0">
                  <selectedService.Icon className="w-5 h-5 text-[#0f3a61]" />
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

            <div className="p-8 overflow-y-auto flex-grow custom-scrollbar">
              {selectedService.image && (
                <div className="w-full h-56 relative mb-8 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img src={`${API_BASE_URL}/uploads/images/${selectedService.image}`} alt={selectedService.servicename} className="absolute inset-0 w-full h-full object-cover" />
                </div>
              )}

              {(Number(selectedService.servicecost) > 0 || Number(selectedService.serviceproductcost) > 0) && (
                <div className="mb-8 bg-gradient-to-br from-slate-50 to-white p-5 border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="text-xs font-bold text-[#06999b] uppercase tracking-widest mb-4 block">Pricing Information</h3>
                  <div className="space-y-3">
                    {Number(selectedService.servicecost) > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 text-sm font-medium">Service Fee</span>
                        <span className="font-bold text-slate-900 text-sm">₹{Number(selectedService.servicecost).toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    {Number(selectedService.serviceproductcost) > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 text-sm font-medium">Product/Parts Cost</span>
                        <span className="font-bold text-slate-900 text-sm">₹{Number(selectedService.serviceproductcost).toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div className="pt-3 mt-3 border-t border-slate-200 border-dashed flex justify-between items-center">
                      <span className="text-slate-900 text-sm font-bold">Total Estimated Rate</span>
                      <span className="font-black text-[#0f3a61] text-lg">
                        ₹{((Number(selectedService.servicecost) || 0) + (Number(selectedService.serviceproductcost) || 0)).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xs font-bold text-[#06999b] uppercase tracking-widest mb-3 block">Service Description</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {selectedService.description}
                </p>
              </div>

              {selectedService.keypoints && (
                <div>
                  <h3 className="text-xs font-bold text-[#06999b] uppercase tracking-widest mb-4 block">Included in Protocol</h3>
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
                        <li key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-[#06999b] shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-slate-700">{point}</span>
                        </li>
                      ));
                    })()}
                  </ul>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-slate-100 bg-white shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
              <Link
                href="/contact"
                onClick={() => setSelectedService(null)}
                className="w-full flex items-center justify-center px-6 py-4 bg-[#0f3a61] text-white text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-[#0a2845] transition-colors shadow-md hover:shadow-lg"
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
