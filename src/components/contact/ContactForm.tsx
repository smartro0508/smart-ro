"use client";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const requirements = [
  "Residential RO System",
  "Commercial RO Plant",
  "Industrial Water Treatment",
  "Water Softener",
  "Service & Maintenance",
  "AMC (Annual Maintenance)",
  "Other Inquiry",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-[#0F172A] rounded-3xl p-8 md:p-10 overflow-hidden relative">
      {/* Subtle accent glow */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#075985]/30 rounded-full blur-[80px] pointer-events-none" />

      {isSuccess ? (
        <div className="flex flex-col items-center justify-center text-center py-16 relative z-10">
          <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#22D3EE]" />
          </div>
          <h4 className="text-2xl font-bold text-white mb-3">Enquiry Submitted</h4>
          <p className="text-slate-400 max-w-sm">
            Thank you for reaching out. Our team will contact you within 24 business hours.
          </p>
        </div>
      ) : (
        <div className="relative z-10">
          <p className="text-xs font-bold text-[#22D3EE] uppercase tracking-widest mb-3">Get in Touch</p>
          <h3 className="text-3xl font-bold text-white mb-2 leading-tight">Send Us an Enquiry</h3>
          <p className="text-slate-400 mb-8 text-sm">
            Fill in your details and we'll connect you with the right specialist.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-600 focus:border-[#075985] focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-[#075985]/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-600 focus:border-[#075985] focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-[#075985]/30 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                required
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-600 focus:border-[#075985] focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-[#075985]/30 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Requirement
              </label>
              <div className="relative">
                <select
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 focus:border-[#075985] focus:outline-none focus:ring-2 focus:ring-[#075985]/30 transition-all appearance-none pr-10"
                >
                  <option value="" className="bg-[#0F172A]">Select a requirement</option>
                  {requirements.map((r) => (
                    <option key={r} value={r} className="bg-[#0F172A]">{r}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe your water purification requirements..."
                className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-600 focus:border-[#075985] focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-[#075985]/30 transition-all resize-none"
              />
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full py-4 bg-white text-[#0F172A] font-bold rounded-xl hover:bg-[#22D3EE] hover:text-[#0F172A] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-60 text-sm uppercase tracking-wider"
            >
              {isSubmitting ? "Sending..." : (
                <>Send Enquiry <Send className="w-4 h-4" /></>
              )}
            </button>

            <p className="text-center text-xs text-slate-600">
              We respect your privacy. Your information is never shared with third parties.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
