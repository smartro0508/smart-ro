"use client";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { API_BASE_URL } from "@/config";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      fullName: formData.get("fullName"),
      phoneNumber: formData.get("phone"),
      email: formData.get("email"),
      subject: formData.get("requirement"),
      message: formData.get("message"),
    };

    try {
      await fetch(`${API_BASE_URL}/api/v1/contact-us/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsSuccess(true);
    } catch (err) {
      console.error("Failed to submit contact form:", err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full py-10">
        <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        <h4 className="text-2xl font-bold text-[#0f3a61] mb-3">Enquiry Submitted</h4>
        <p className="text-slate-500 max-w-sm mx-auto leading-relaxed">
          Thank you for reaching out. Our team will contact you shortly to discuss your requirements.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
          <input
            name="fullName"
            required
            type="text"
            placeholder="John Doe"
            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#06999b] focus:outline-none focus:ring-4 focus:ring-[#06999b]/10 transition-all text-sm font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone</label>
          <input
            name="phone"
            required
            type="tel"
            placeholder="e.g. 6383450508"
            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#06999b] focus:outline-none focus:ring-4 focus:ring-[#06999b]/10 transition-all text-sm font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
        <input
          name="email"
          required
          type="email"
          placeholder="your@email.com"
          className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#06999b] focus:outline-none focus:ring-4 focus:ring-[#06999b]/10 transition-all text-sm font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">How can we help?</label>
        <select
          name="requirement"
          required
          className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:bg-white focus:border-[#06999b] focus:outline-none focus:ring-4 focus:ring-[#06999b]/10 transition-all appearance-none pr-10 text-sm font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
        >
          <option value="">Select a requirement</option>
          {requirements.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Describe your water purification needs..."
          className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#06999b] focus:outline-none focus:ring-4 focus:ring-[#06999b]/10 transition-all resize-none text-sm font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
        />
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="group relative w-full py-4 bg-[#06999b] text-white font-bold rounded-xl hover:bg-[#057a7c] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 text-sm overflow-hidden shadow-[0_8px_20px_-6px_rgba(6,153,155,0.4)] hover:shadow-[0_12px_25px_-6px_rgba(6,153,155,0.5)] hover:-translate-y-0.5"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        {isSubmitting ? "Sending..." : (
          <>
            <span className="relative z-10">Send Message</span>
            <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}
