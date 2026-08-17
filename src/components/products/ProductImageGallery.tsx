"use client";

import { useState } from "react";
import { Maximize2, X, ZoomIn, ZoomOut } from "lucide-react";

export function ProductImageGallery({ images, productName, isFeatured }: { images: string[], productName: string, isFeatured: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const allImages = images.filter(Boolean);
  const activeImage = allImages[activeIndex] || "/placeholder.png";
  const activeImageSrc = activeImage !== "/placeholder.png" ? `http://localhost:5000/uploads/images/${activeImage}` : activeImage;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.5, 0.5));

  return (
    <>
      <div className="flex gap-4 flex-col sm:flex-row">
        {/* Thumbnails */}
        {allImages.length > 1 && (
          <div className="flex sm:flex-col gap-4 sm:w-20 shrink-0 overflow-x-auto sm:overflow-x-visible">
            {allImages.map((img: string, i: number) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-16 sm:w-full aspect-square shrink-0 rounded-xl border-2 flex items-center justify-center p-2 cursor-pointer transition-colors ${i === activeIndex ? "border-[#06999b]" : "border-slate-100 hover:border-slate-300"}`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={`http://localhost:5000/uploads/images/${img}`}
                    alt={`thumb ${i}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Main Image */}
        <div className="relative flex-grow bg-slate-50/50 rounded-2xl border border-slate-100 flex items-center justify-center p-8 overflow-hidden group">
          {isFeatured && (
            <div className="absolute z-10 top-4 left-4 bg-[#06999b] text-white text-[10px] font-bold px-4 py-1.5 rounded-full">
              Featured
            </div>
          )}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="absolute z-10 top-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors border border-slate-100 opacity-0 group-hover:opacity-100"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          
          <div 
            className="relative w-full aspect-[4/5] cursor-zoom-in"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={activeImageSrc}
              alt={productName}
              className="absolute inset-0 w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="absolute top-6 right-6 flex gap-4 z-50">
            <button onClick={handleZoomOut} className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
              <ZoomOut className="w-6 h-6" />
            </button>
            <button onClick={handleZoomIn} className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
              <ZoomIn className="w-6 h-6" />
            </button>
            <button onClick={() => { setIsModalOpen(false); setZoomLevel(1); }} className="p-3 bg-white/10 hover:bg-red-500/80 rounded-full text-white transition-colors ml-4">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="relative w-full h-full flex items-center justify-center overflow-auto p-12">
            <img
              src={activeImageSrc}
              alt={productName}
              style={{ transform: `scale(${zoomLevel})` }}
              className="max-w-full max-h-full object-contain transition-transform duration-200"
            />
          </div>
        </div>
      )}
    </>
  );
}
