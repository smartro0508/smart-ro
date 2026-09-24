export default function LocationSection() {
  return (
    <div className="h-full min-h-[400px] w-full bg-slate-100 rounded-2xl overflow-hidden shadow-inner border border-slate-200 relative">
      <iframe 
        src="https://maps.google.com/maps?q=9/1,+sri+nagar,+deepam+nagar+9th+Street,+irugur,+641103&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Smart RO Location Map"
        className="w-full h-full absolute inset-0 contrast-[1.05]"
      ></iframe>
      
      {/* Floating Marker Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-xl w-64 pointer-events-none text-center">
         <h4 className="font-bold text-[#0f3a61] text-sm mb-1">Smart RO</h4>
         <p className="text-xs text-slate-500 leading-relaxed">
           No.1/756, Adheeshwarar Nagar<br/>
           3rd Street, Adhiyur, Kunnathur,<br/>
           Tiruppur - 638103
         </p>
         <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
      </div>
    </div>
  );
}
