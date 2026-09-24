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
  CheckCircle2,
  ArrowRight,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { API_BASE_URL } from "@/config";

const ICONS = [
  Settings, Wrench, Droplet, Layers, Sparkles,
  Activity, PenTool, Shield, Briefcase, Home,
];

/* ─── helper: parse keypoints ──────────────────────────────────────────── */
function parseKeypoints(raw: any): string[] {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  if (typeof raw === "string") {
    try { return JSON.parse(raw); }
    catch { return raw.split(",").map((s: string) => s.trim()); }
  }
  return [];
}

export default function ServicesPage() {
  const [servicesList, setServicesList] = useState<any[]>([]);
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/v1/services/get-all`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        const json = await res.json();
        setServicesList(json.data || []);
      } catch (e) {
        console.error("Error fetching services:", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0b2d4e] pt-28 pb-0 lg:pt-36 overflow-hidden">
        {/* grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        {/* ambient glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0284c7] blur-[160px] rounded-full opacity-[0.18] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#06999b] blur-[140px] rounded-full opacity-[0.14] pointer-events-none -translate-x-1/3" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end">

            {/* left copy */}
            <div className="pb-20 lg:pb-28">
              <span className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.15] text-white/75 text-[11px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06999b] animate-pulse" />
                Technical Support
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black text-white leading-[1.04] tracking-tight mb-7">
                Operations &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">
                  Maintenance
                </span>
              </h1>

              <p className="text-white/60 text-[17px] leading-[1.75] mb-12 max-w-xl">
                Enterprise-grade support and lifecycle management to ensure your
                purification infrastructure operates at maximum reliability and compliance.
              </p>

              {/* 4 pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
                {[
                  { Icon: Activity, label: "Reliability" },
                  { Icon: Wrench,   label: "Fast Repair" },
                  { Icon: Settings, label: "Maintenance" },
                  { Icon: Shield,   label: "Compliance" },
                ].map(({ Icon, label }, i) => (
                  <div key={i} className="group bg-white/[0.05] hover:bg-white/10 transition-colors duration-300 px-4 py-6 flex flex-col items-center text-center">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.07] border border-white/[0.1] flex items-center justify-center mb-3 group-hover:bg-[#0284c7] group-hover:border-[#0284c7] transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#38bdf8] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-[12px] font-bold text-white/60 uppercase tracking-[0.12em]">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* right image flush to bottom */}
            <div className="hidden lg:flex items-end justify-center">
              <div className="w-full max-w-[480px] rounded-t-3xl overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.4)] border border-white/10 border-b-0">
                <img
                  src="/hero.jpeg"
                  alt="Technical Support"
                  className="w-full h-[500px] object-cover brightness-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#f8fafc] border-b border-slate-100">
        <div className="container-custom">

          {/* header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-7 bg-gradient-to-b from-[#0284c7] to-[#06999b] rounded-full" />
                <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-[0.2em]">Service Portfolio</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0b2d4e] tracking-tight leading-tight">
                What We Offer
              </h2>
            </div>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-xs">
              Click any service card to view full details, pricing, and scope.
            </p>
          </div>

          {/* states */}
          {loading ? (
            <div className="flex justify-center py-28">
              <div className="w-12 h-12 border-[3px] border-[#0b2d4e]/10 border-t-[#0284c7] rounded-full animate-spin" />
            </div>
          ) : servicesList.length === 0 ? (
            <div className="text-center py-28 text-slate-500 font-medium">No services found.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {servicesList.map((service, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <div
                    key={service.id || i}
                    onClick={() => setSelectedService({ ...service, Icon })}
                    className="group relative bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 p-8 flex flex-col cursor-pointer overflow-hidden"
                  >
                    {/* top accent */}
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#0284c7] to-[#06999b] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* icon */}
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#0b2d4e] group-hover:border-[#0b2d4e] transition-all duration-300 shadow-sm group-hover:shadow-lg">
                        <Icon className="w-6 h-6 text-[#0284c7] group-hover:text-white transition-colors duration-300" />
                      </div>

                      <h3 className="text-[17px] font-extrabold text-slate-900 mb-3 group-hover:text-[#0b2d4e] transition-colors leading-tight">
                        {service.servicename}
                      </h3>

                      {/* pricing pill */}
                      {(Number(service.servicecost) > 0 || Number(service.serviceproductcost) > 0) && (
                        <div className="flex flex-col gap-1.5 mb-5 bg-[#f8fafc] px-4 py-3.5 rounded-xl border border-slate-100">
                          {Number(service.servicecost) > 0 && (
                            <div className="flex justify-between items-center text-[13px]">
                              <span className="text-slate-500 font-medium">Service Fee</span>
                              <span className="font-black text-[#0b2d4e]">₹{Number(service.servicecost).toLocaleString("en-IN")}</span>
                            </div>
                          )}
                          {Number(service.serviceproductcost) > 0 && (
                            <div className="flex justify-between items-center text-[13px]">
                              <span className="text-slate-500 font-medium">Product/Parts</span>
                              <span className="font-black text-[#0b2d4e]">₹{Number(service.serviceproductcost).toLocaleString("en-IN")}</span>
                            </div>
                          )}
                        </div>
                      )}

                      <p className="text-[14px] text-slate-500 font-medium leading-relaxed mb-8 flex-grow line-clamp-3">
                        {service.description}
                      </p>

                      {/* footer */}
                      <div className="pt-5 border-t border-slate-100 mt-auto flex items-center justify-between group-hover:border-slate-200 transition-colors">
                        <span className="text-[11px] font-bold text-[#0284c7] uppercase tracking-[0.14em]">View Details</span>
                        <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[#0b2d4e] group-hover:border-[#0b2d4e] transition-all duration-300 group-hover:translate-x-1">
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
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

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.16)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b2d4e] via-[#0d3560] to-[#082136]" />
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0284c7] blur-[120px] rounded-full opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#06999b] blur-[100px] rounded-full opacity-15 pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 p-10 md:p-16 lg:p-20 text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.15] text-white/75 text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06999b] animate-pulse" />
                24/7 Corporate Support
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-5">
                Require Immediate Assistance?
              </h2>
              <p className="text-white/60 text-[17px] leading-[1.75] mb-10 max-w-2xl mx-auto">
                Our NOC and field engineering teams are available to address critical operational
                issues, schedule maintenance, or discuss SLA terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+916383450508"
                  className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-white hover:bg-slate-50 text-[#0b2d4e] text-[14px] font-black rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-2xl uppercase tracking-[0.1em]"
                >
                  <Phone className="w-4 h-4" />
                  Call Support: +91 63834 50508
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-9 py-4 border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white text-[14px] font-bold rounded-xl transition-all duration-300 uppercase tracking-[0.1em]"
                >
                  Initiate Service Ticket <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE DETAIL SIDEBAR ───────────────────────────────────────── */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-[#0b2d4e]/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          />

          {/* drawer */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">

            {/* drawer header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0b2d4e]/8 border border-[#0b2d4e]/10 flex items-center justify-center shrink-0">
                  <selectedService.Icon className="w-5 h-5 text-[#0284c7]" />
                </div>
                <h2 className="text-[16px] font-black text-[#0b2d4e] leading-tight">
                  {selectedService.servicename}
                </h2>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-[#0b2d4e] hover:bg-slate-100 rounded-xl transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* drawer body */}
            <div className="p-7 overflow-y-auto flex-grow space-y-7">

              {/* service image */}
              {selectedService.image && (
                <div className="w-full h-52 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                  <img
                    src={`${API_BASE_URL}/uploads/images/${selectedService.image}`}
                    alt={selectedService.servicename}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* pricing */}
              {(Number(selectedService.servicecost) > 0 || Number(selectedService.serviceproductcost) > 0) && (
                <div className="bg-[#f8fafc] rounded-2xl border border-slate-100 p-5">
                  <p className="text-[11px] font-black text-[#06999b] uppercase tracking-[0.18em] mb-4">Pricing Information</p>
                  <div className="space-y-3">
                    {Number(selectedService.servicecost) > 0 && (
                      <div className="flex justify-between items-center text-[14px]">
                        <span className="text-slate-500 font-medium">Service Fee</span>
                        <span className="font-black text-[#0b2d4e]">₹{Number(selectedService.servicecost).toLocaleString("en-IN")}</span>
                      </div>
                    )}
                    {Number(selectedService.serviceproductcost) > 0 && (
                      <div className="flex justify-between items-center text-[14px]">
                        <span className="text-slate-500 font-medium">Product / Parts</span>
                        <span className="font-black text-[#0b2d4e]">₹{Number(selectedService.serviceproductcost).toLocaleString("en-IN")}</span>
                      </div>
                    )}
                    <div className="pt-3 mt-1 border-t border-dashed border-slate-200 flex justify-between items-center">
                      <span className="text-[14px] font-bold text-[#0b2d4e]">Total Estimated</span>
                      <span className="font-black text-[#0b2d4e] text-xl">
                        ₹{((Number(selectedService.servicecost) || 0) + (Number(selectedService.serviceproductcost) || 0)).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* description */}
              <div>
                <p className="text-[11px] font-black text-[#06999b] uppercase tracking-[0.18em] mb-3">Service Description</p>
                <p className="text-[14px] text-slate-600 leading-[1.8] font-medium">{selectedService.description}</p>
              </div>

              {/* keypoints */}
              {parseKeypoints(selectedService.keypoints).length > 0 && (
                <div>
                  <p className="text-[11px] font-black text-[#06999b] uppercase tracking-[0.18em] mb-4">Included in Protocol</p>
                  <ul className="space-y-3">
                    {parseKeypoints(selectedService.keypoints).map((point: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 bg-[#f8fafc] rounded-xl px-4 py-3 border border-slate-100">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#06999b] shrink-0 mt-0.5" />
                        <span className="text-[14px] font-medium text-slate-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* drawer footer CTA */}
            <div className="px-7 py-5 border-t border-slate-100 bg-white shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.08)]">
              <Link
                href="/contact"
                onClick={() => setSelectedService(null)}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#0b2d4e] to-[#0284c7] hover:from-[#082136] hover:to-[#0369a1] text-white text-[14px] font-black uppercase tracking-[0.12em] rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                Request this Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
