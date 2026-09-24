"use client";
import { useState } from "react";
import { Send, CheckCircle2, User, Mail, Phone, BookOpen, MessageSquare } from "lucide-react";
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
      <div className="flex flex-col items-center justify-center text-center h-full py-16 bg-white border border-slate-200 rounded-2xl shadow-sm">
        <div className="w-20 h-20 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-6 shadow-sm">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h4 className="text-2xl font-bold text-[#0f3a61] mb-3">Enquiry Submitted</h4>
        <p className="text-slate-500 max-w-sm mx-auto leading-relaxed text-sm">
          Thank you for reaching out. Our team of experts will review your requirements and contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/40 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0f3a61] to-[#0284c7]"></div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Name Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#0f3a61] transition-colors">
              <User className="w-[18px] h-[18px]" />
            </div>
            <input
              name="fullName"
              required
              type="text"
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0f3a61] focus:ring-4 focus:ring-[#0f3a61]/10 outline-none transition-all text-sm font-medium"
            />
          </div>

          {/* Email Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#0f3a61] transition-colors">
              <Mail className="w-[18px] h-[18px]" />
            </div>
            <input
              name="email"
              required
              type="email"
              placeholder="Corporate Email"
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0f3a61] focus:ring-4 focus:ring-[#0f3a61]/10 outline-none transition-all text-sm font-medium"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Phone Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#0f3a61] transition-colors">
              <Phone className="w-[18px] h-[18px]" />
            </div>
            <input
              name="phone"
              required
              type="tel"
              placeholder="Phone Number"
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0f3a61] focus:ring-4 focus:ring-[#0f3a61]/10 outline-none transition-all text-sm font-medium"
            />
          </div>

          {/* Subject Select */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 z-10 group-focus-within:text-[#0f3a61] transition-colors">
              <BookOpen className="w-[18px] h-[18px]" />
            </div>
            <select
              name="requirement"
              required
              defaultValue=""
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:bg-white focus:border-[#0f3a61] focus:ring-4 focus:ring-[#0f3a61]/10 outline-none transition-all appearance-none text-sm font-medium cursor-pointer"
            >
              <option value="" disabled className="text-slate-400">Select Inquiry Type</option>
              {requirements.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Message Textarea */}
        <div className="relative group">
          <div className="absolute top-4 left-4 text-slate-400 pointer-events-none group-focus-within:text-[#0f3a61] transition-colors">
            <MessageSquare className="w-[18px] h-[18px]" />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Detailed Message or Requirements"
            className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#0f3a61] focus:ring-4 focus:ring-[#0f3a61]/10 outline-none transition-all resize-none text-sm font-medium"
          />
        </div>

        {/* Submit Button */}
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full py-4 mt-2 bg-gradient-to-r from-[#0f3a61] to-[#0a2744] hover:from-[#154675] hover:to-[#0f3a61] text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 text-sm shadow-lg shadow-[#0f3a61]/20 transform hover:-translate-y-1"
        >
          {isSubmitting ? "Processing..." : (
            <>
              <Send className="w-4 h-4" />
              <span className="tracking-wide">Submit Inquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
