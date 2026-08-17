"use client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

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
      const res = await fetch("http://localhost:5000/api/v1/testimonials/create", {
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
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container-custom max-w-3xl">
        <div className="bg-white p-10 md:p-12 rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight">Share Your Experience</h2>
            <p className="text-sm text-slate-500">We highly value the feedback from our partners and clients.</p>
          </div>

          {status === "success" ? (
            <div className="bg-green-50 text-green-700 p-6 rounded-xl flex items-center justify-center gap-3 border border-green-100">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <span className="font-semibold">Thank you! Your testimonial has been submitted successfully.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name *</label>
                  <input required type="text" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#06999b]/20 focus:border-[#06999b] transition-all text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                  <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#06999b]/20 focus:border-[#06999b] transition-all text-sm" placeholder="john@company.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button type="button" key={star} onClick={() => setFormData({...formData, rating: star})} className={`p-1 focus:outline-none transition-colors ${formData.rating >= star ? "text-[#06999b]" : "text-slate-300 hover:text-slate-400"}`}>
                      <svg className="w-8 h-8 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Your Feedback *</label>
                <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#06999b]/20 focus:border-[#06999b] transition-all text-sm resize-none" placeholder="Tell us about your experience with our RO systems..."></textarea>
              </div>

              {status === "error" && (
                <div className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100">Failed to submit testimonial. Please try again later.</div>
              )}

              <button disabled={status === "loading"} type="submit" className="w-full py-4 bg-[#06999b] hover:bg-[#057a7c] text-white rounded-lg font-bold transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-2">
                {status === "loading" ? "Submitting..." : "Submit Testimonial"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
