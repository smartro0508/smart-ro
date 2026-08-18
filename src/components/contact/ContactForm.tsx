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
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/v1/contact-us/create`, {
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
            className="w-full px-4 py-3.5 rounded-sm border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-[#0f3a61] focus:outline-none focus:ring-1 focus:ring-[#0f3a61] transition-all text-sm shadow-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone</label>
          <input
            name="phone"
            required
            type="tel"
            placeholder="e.g. 6383450508"
            className="w-full px-4 py-3.5 rounded-sm border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-[#0f3a61] focus:outline-none focus:ring-1 focus:ring-[#0f3a61] transition-all text-sm shadow-sm"
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
          className="w-full px-4 py-3.5 rounded-sm border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-[#0f3a61] focus:outline-none focus:ring-1 focus:ring-[#0f3a61] transition-all text-sm shadow-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">How can we help?</label>
        <select
          name="requirement"
          required
          className="w-full px-4 py-3.5 rounded-sm border border-slate-200 bg-white text-slate-800 focus:border-[#0f3a61] focus:outline-none focus:ring-1 focus:ring-[#0f3a61] transition-all appearance-none pr-10 text-sm shadow-sm"
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
          className="w-full px-4 py-3.5 rounded-sm border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:border-[#0f3a61] focus:outline-none focus:ring-1 focus:ring-[#0f3a61] transition-all resize-none text-sm shadow-sm"
        />
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full py-4 bg-[#06999b] text-white font-bold rounded-sm hover:bg-[#057a7c] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-60 text-sm shadow-md"
      >
        {isSubmitting ? "Sending..." : (
          <>Send Message <Send className="w-4 h-4" /></>
        )}
      </button>
    </form>
  );
}
