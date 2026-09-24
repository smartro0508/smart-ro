"use client";

export default function WhatsAppButton() {
  const phoneNumber = "916383450508"; // country code + number, no +
  const message = "Hello! I'm interested in Smart RO water purification systems.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[999] group flex items-center justify-end"
    >
      {/* Pulse effect behind the icon */}
      <div className="absolute right-0 top-0 w-14 h-14 rounded-full bg-[#25D366] animate-ping opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
      
      {/* Expanding button */}
      <div 
        className="relative flex items-center bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.3)] transition-all duration-300 ease-out border border-white/20 overflow-hidden group-hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] group-hover:-translate-y-1"
      >
        {/* Text Container (expands on hover) */}
        <div className="overflow-hidden transition-all duration-300 ease-out w-0 opacity-0 group-hover:w-[135px] group-hover:opacity-100 flex items-center">
          <span className="text-white font-bold text-[14px] whitespace-nowrap pl-5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            Chat with us
          </span>
        </div>

        {/* Icon Container (fixed size) */}
        <div className="w-14 h-14 flex items-center justify-center shrink-0">
          <svg
            className="w-8 h-8 text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.514L4 29l7.697-1.807A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3z"
              fill="currentColor"
            />
            <path
              d="M22.003 18.84c-.302-.151-1.79-.884-2.066-.985-.277-.1-.478-.15-.68.151-.2.302-.78.985-.957 1.185-.177.201-.353.226-.654.075-.302-.15-1.273-.469-2.424-1.494-.895-.799-1.5-1.786-1.675-2.088-.176-.301-.019-.464.132-.614.136-.134.302-.352.452-.527.151-.176.2-.302.302-.503.1-.2.05-.377-.025-.527-.075-.15-.68-1.636-.931-2.24-.245-.588-.494-.508-.68-.517-.176-.008-.377-.01-.578-.01s-.528.075-.804.377c-.277.302-1.056 1.032-1.056 2.517s1.081 2.92 1.231 3.121c.151.2 2.127 3.247 5.155 4.553.72.31 1.282.496 1.72.635.723.23 1.381.198 1.9.12.58-.086 1.79-.732 2.042-1.44.252-.706.252-1.31.176-1.44-.075-.13-.277-.201-.578-.352z"
              fill="#128C7E"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
