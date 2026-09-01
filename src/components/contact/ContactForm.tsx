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
    <form onSubmit={handleSubmit} className="space-y-8 mt-4">
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="relative group">
          <input
            name="fullName"
            required
            type="text"
            placeholder="Full Name *"
            className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#06999b] focus:ring-0 outline-none transition-all text-sm font-semibold"
          />
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#06999b] transition-all duration-300 group-focus-within:w-full"></div>
        </div>
        <div className="relative group">
          <input
            name="phone"
            required
            type="tel"
            placeholder="Phone Number *"
            className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#06999b] focus:ring-0 outline-none transition-all text-sm font-semibold"
          />
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#06999b] transition-all duration-300 group-focus-within:w-full"></div>
        </div>
      </div>

      <div className="relative group">
        <input
          name="email"
          required
          type="email"
          placeholder="Email Address *"
          className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#06999b] focus:ring-0 outline-none transition-all text-sm font-semibold"
        />
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#06999b] transition-all duration-300 group-focus-within:w-full"></div>
      </div>

      <div className="relative group">
        <select
          name="requirement"
          required
          defaultValue=""
          className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 text-slate-900 focus:border-[#06999b] focus:ring-0 outline-none transition-all appearance-none text-sm font-semibold cursor-pointer"
        >
          <option value="" disabled className="text-slate-400">Select a Requirement *</option>
          {requirements.map((r) => (
            <option key={r} value={r} className="text-slate-900">{r}</option>
          ))}
        </select>
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#06999b] transition-all duration-300 group-focus-within:w-full"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>

      <div className="relative group">
        <textarea
          name="message"
          required
          rows={3}
          placeholder="Describe your project or requirement... *"
          className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#06999b] focus:ring-0 outline-none transition-all resize-none text-sm font-semibold"
        />
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#06999b] transition-all duration-300 group-focus-within:w-full"></div>
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="group relative w-full py-4 mt-6 bg-gradient-to-r from-[#0f3a61] to-[#06999b] text-white font-bold rounded-sm hover:opacity-95 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 text-sm uppercase tracking-widest shadow-md hover:shadow-lg"
      >
        {isSubmitting ? "Sending..." : (
          <>
            <span className="relative z-10">Submit Inquiry</span>
            <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}
