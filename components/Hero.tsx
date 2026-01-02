import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const HERO_IMAGES = [
  "https://i.postimg.cc/mk9TJngC/sea-horse.jpg",
  "https://i.postimg.cc/VLjYF2hT/panda.jpg",
  "https://i.postimg.cc/g00mmj0m/bunny.jpg",
  // Duplicated to ensure the carousel strip is long enough for smooth infinite scrolling on all screens
  "https://i.postimg.cc/mk9TJngC/sea-horse.jpg",
  "https://i.postimg.cc/VLjYF2hT/panda.jpg",
  "https://i.postimg.cc/g00mmj0m/bunny.jpg"
];

export const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-white pt-16 pb-0 sm:pt-24">
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
      <div className="absolute top-40 left-0 -ml-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8 border border-rose-100">
            <Sparkles size={16} className="text-yellow-500" />
            <span className="text-rose-500 font-medium text-sm">עבודת יד מכל הלב</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-rounded font-bold text-gray-800 mb-6 tracking-tight">
            חברים סרוגים <br />
            <span className="text-rose-500">שרק מחכים לחיבוק</span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            ברוכים הבאים לעולם הקסום של אודליה. בובות סרוגות בעבודת יד, רכות, בטיחותיות ומלאות באהבה לכל ילד וילדה.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4 sm:px-0">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-rose-500 text-white rounded-full font-bold text-lg shadow-lg hover:bg-rose-600 transition-all hover:scale-105 flex items-center justify-center gap-2 transform active:scale-95"
            >
              הזמיני בובה אישית
              <ArrowLeft size={20} />
            </a>
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border-2 border-rose-100 rounded-full font-bold text-lg hover:bg-rose-50 transition-all hover:border-rose-300 shadow-sm hover:shadow-md transform active:scale-95"
            >
              לצפייה בגלריה
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="w-full max-w-5xl mx-auto px-4 mb-16">
        <div className="relative w-full py-6 bg-gradient-to-b from-transparent to-rose-50/20 hover-pause rounded-3xl" dir="ltr">
          {/* Gradient overlays for smooth fade effect at edges */}
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none rounded-l-3xl"></div>
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none rounded-r-3xl"></div>

          <div className="flex overflow-hidden rounded-3xl">
            {/* First set of images */}
            <div className="flex gap-6 animate-scroll-left min-w-full shrink-0 px-3 items-center">
              {HERO_IMAGES.map((src, index) => (
                <div key={`set1-${index}`} className="relative group w-64 h-80 md:w-80 md:h-80 flex-shrink-0 rounded-3xl overflow-hidden shadow-xl border-4 border-white transform transition-transform duration-300 hover:scale-105 hover:z-10 hover:shadow-2xl hover:border-rose-100 cursor-pointer">
                  <img src={src} alt={`Crochet doll ${index}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              ))}
            </div>
            {/* Second set of images for seamless loop */}
            <div className="flex gap-6 animate-scroll-left min-w-full shrink-0 px-3 items-center">
              {HERO_IMAGES.map((src, index) => (
                <div key={`set2-${index}`} className="relative group w-64 h-80 md:w-80 md:h-80 flex-shrink-0 rounded-3xl overflow-hidden shadow-xl border-4 border-white transform transition-transform duration-300 hover:scale-105 hover:z-10 hover:shadow-2xl hover:border-rose-100 cursor-pointer">
                  <img src={src} alt={`Crochet doll ${index}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};