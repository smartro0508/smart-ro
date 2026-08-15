import Image from "next/image";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1606132717013-0941be200427?w=800&q=80", alt: "Home RO System Installation", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1585820935515-385012351ab6?w=800&q=80", alt: "Commercial Plant", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1548345680-f5475ea90f46?w=800&q=80", alt: "Water Softener", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1574492695509-5e72cc2dc122?w=800&q=80", alt: "Industrial Setup", span: "col-span-2 row-span-1" },
  { src: "https://images.unsplash.com/photo-1550508518-a63e9f3b55c2?w=800&q=80", alt: "Factory Layout", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1606132717013-0941be200427?w=800&q=80", alt: "Premium Filter", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1585820935515-385012351ab6?w=800&q=80", alt: "Quality Check", span: "col-span-1 row-span-1" },
];

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-surface-soft py-16">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-4">Our <span className="text-primary">Gallery</span></h1>
          <p className="body-text max-w-2xl mx-auto">
            Take a look at our premium installations, commercial setups, and state-of-the-art products.
          </p>
        </div>
      </div>
      
      <div className="container-custom mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((image, i) => (
            <div key={i} className={`relative rounded-2xl overflow-hidden group ${image.span} border border-border shadow-sm`}>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300"></div>
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                <span className="text-white font-medium">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

