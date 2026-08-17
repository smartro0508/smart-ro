export default function LocationSection() {
  return (
    <section className="relative h-[600px] w-full border-t border-slate-200 overflow-hidden">
      {/* Full Background Map */}
      <div className="absolute inset-0">
        <iframe 
          src="https://maps.google.com/maps?q=9/1,+sri+nagar,+deepam+nagar+9th+Street,+irugur,+641103&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Smart RO Location Map"
          className="w-full h-full grayscale-[50%] contrast-[1.1] opacity-90"
        ></iframe>
      </div>

      {/* Floating Stylish CTA Card */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-4">
        <div className="bg-white/95 backdrop-blur-xl border border-white/40 p-10 md:p-12 rounded-sm shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] text-center max-w-md pointer-events-auto transition-transform hover:-translate-y-2 duration-500">
           <h2 className="text-3xl font-bold text-[#0f3a61] mb-4">Visit Us</h2>
           <p className="text-slate-500 font-medium mb-8 leading-relaxed">
             Drop by our office to see our solutions first-hand or discuss your upcoming projects.
           </p>
           <a
             href="https://maps.google.com/?q=9/1,+sri+nagar,+deepam+nagar+9th+Street,+irugur,+641103"
             target="_blank"
             rel="noreferrer"
             className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#06999b] text-white text-sm font-bold rounded-sm hover:bg-[#057a7c] transition-colors duration-300 shadow-md w-full justify-center"
           >
             Get Directions
           </a>
        </div>
      </div>
    </section>
  );
}
