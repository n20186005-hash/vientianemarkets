import React, { useState } from 'react';
import { X, MapPin } from 'lucide-react';

interface GalleryViewerProps {
  images: string[];
  tTitle: string;
  tMapLink: string;
}

export default function GalleryViewer({ images, tTitle, tMapLink }: GalleryViewerProps) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">{tTitle}</h2>
          <div className="w-24 h-1 bg-mekong-blue mx-auto rounded-full"></div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid relative group overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all"
              onClick={() => setSelectedImg(src)}
            >
              <img 
                src={src} 
                alt={`Vientiane Market ${idx + 1}`} 
                loading="lazy"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setSelectedImg(null)}>
          <button 
            className="absolute top-6 right-6 text-white hover:text-zinc-300 bg-white/10 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImg(null);
            }}
          >
            <X className="w-6 h-6" />
          </button>
          
          <img 
            src={selectedImg} 
            alt="Preview" 
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <a 
              href="https://maps.app.goo.gl/2zP3kvc4hLKQ7q8V6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-mekong-blue font-semibold rounded-full shadow-lg hover:bg-zinc-100 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <MapPin className="w-4 h-4 mr-2" />
              {tMapLink}
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
