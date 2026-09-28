import { Phone, Mail, MessageCircle, Clock } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white pt-28 pb-16 lg:pt-32 lg:pb-20 border-b border-slate-200 overflow-hidden">
      {/* Corporate Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0b2d4e]/10 to-[#06999b]/10 text-[#06999b] text-xs font-black uppercase tracking-[0.2em] mb-6 border border-[#06999b]/20 shadow-sm">
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0b2d4e] tracking-tight mb-6 leading-tight">
              We're Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b2d4e] to-[#06999b]">Help</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-lg">
              Have a question, need support, or want to learn more about our RO purifiers? Our team of corporate experts is ready to assist you.
            </p>

            {/* Icons Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-slate-200">
              {/* Call Us */}
              <div className="flex flex-col items-start md:pr-6 group">
                <div className="w-12 h-12 rounded-xl bg-[#06999b]/5 flex items-center justify-center text-[#06999b] mb-4 group-hover:bg-gradient-to-br group-hover:from-[#0b2d4e] group-hover:to-[#06999b] group-hover:text-white transition-all duration-300 shadow-sm border border-[#06999b]/10 group-hover:shadow-md group-hover:-translate-y-1">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0b2d4e]">Call Us</h4>
                <p className="text-xs text-slate-500 mt-1.5">+91 63834 50508</p>
              </div>
              
              {/* Email Us */}
              <div className="flex flex-col items-start md:px-6 group">
                <div className="w-12 h-12 rounded-xl bg-[#06999b]/5 flex items-center justify-center text-[#06999b] mb-4 group-hover:bg-gradient-to-br group-hover:from-[#0b2d4e] group-hover:to-[#06999b] group-hover:text-white transition-all duration-300 shadow-sm border border-[#06999b]/10 group-hover:shadow-md group-hover:-translate-y-1">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0b2d4e]">Email Us</h4>
                <p className="text-xs text-slate-500 mt-1.5">smartro0508@gmail.com</p>
              </div>

              {/* Live Chat */}
              <div className="flex flex-col items-start md:px-6 group">
                <div className="w-12 h-12 rounded-xl bg-[#06999b]/5 flex items-center justify-center text-[#06999b] mb-4 group-hover:bg-gradient-to-br group-hover:from-[#0b2d4e] group-hover:to-[#06999b] group-hover:text-white transition-all duration-300 shadow-sm border border-[#06999b]/10 group-hover:shadow-md group-hover:-translate-y-1">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0b2d4e]">Live Chat</h4>
                <p className="text-xs text-slate-500 mt-1.5">Mon - Sat<br/>9 AM - 6 PM</p>
              </div>

              {/* Working Hours */}
              <div className="flex flex-col items-start md:pl-6 group">
                <div className="w-12 h-12 rounded-xl bg-[#06999b]/5 flex items-center justify-center text-[#06999b] mb-4 group-hover:bg-gradient-to-br group-hover:from-[#0b2d4e] group-hover:to-[#06999b] group-hover:text-white transition-all duration-300 shadow-sm border border-[#06999b]/10 group-hover:shadow-md group-hover:-translate-y-1">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0b2d4e]">Working Hours</h4>
                <p className="text-xs text-slate-500 mt-1.5">Sun - Mon<br/>8 AM - 7 PM</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:pl-10 hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative bg-white border border-slate-200 p-2">
               <img src="/hero.jpeg" alt="Smart RO Purifier" className="w-full h-[480px] object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
