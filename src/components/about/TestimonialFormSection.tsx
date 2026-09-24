"use client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { API_BASE_URL } from "@/config";

export function TestimonialFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    rating: 5,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/testimonials/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ fullName: "", email: "", rating: 5, message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="container-custom max-w-3xl">
        <div className="bg-white p-10 md:p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0f3a61] to-[#06999b]" />
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Share Your Experience</h2>
            <p className="text-sm text-slate-500 font-medium">We highly value the feedback from our corporate partners and clients.</p>
          </div>

          {status === "success" ? (
            <div className="bg-green-50 text-green-700 p-6 rounded-2xl flex items-center justify-center gap-3 border border-green-100 shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <span className="font-semibold">Thank you! Your testimonial has been submitted successfully.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Full Name *</label>
                  <input required type="text" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#06999b]/10 focus:border-[#06999b] transition-all text-sm font-medium" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Corporate Email</label>
                  <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#06999b]/10 focus:border-[#06999b] transition-all text-sm font-medium" placeholder="john@company.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button type="button" key={star} onClick={() => setFormData({...formData, rating: star})} className={`p-1 focus:outline-none transition-transform hover:scale-110 ${formData.rating >= star ? "text-[#06999b]" : "text-slate-200 hover:text-slate-300"}`}>
                      <svg className="w-8 h-8 fill-current drop-shadow-sm" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Your Feedback *</label>
                <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={4} className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#06999b]/10 focus:border-[#06999b] transition-all text-sm font-medium resize-none" placeholder="Tell us about your experience with our RO infrastructure..."></textarea>
              </div>

              {status === "error" && (
                <div className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-xl border border-red-100">Failed to submit testimonial. Please try again later.</div>
              )}

              <button disabled={status === "loading"} type="submit" className="w-full py-4 bg-gradient-to-r from-[#0f3a61] to-[#0a2744] hover:from-[#154675] hover:to-[#0f3a61] text-white rounded-xl font-bold tracking-wide transition-all duration-300 shadow-lg shadow-[#0f3a61]/20 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed mt-4">
                {status === "loading" ? "Processing..." : "Submit Testimonial"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
