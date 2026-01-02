import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-white py-16 sm:py-24">
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
      <div className="absolute top-40 left-0 -ml-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          
          <div className="mt-10 flex justify-center gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-rose-500 text-white rounded-full font-bold text-lg shadow-lg hover:bg-rose-600 transition-all hover:scale-105 flex items-center gap-2"
            >
              הזמיני בובה אישית
              <ArrowLeft size={20} />
            </a>
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-gray-700 border-2 border-rose-100 rounded-full font-bold text-lg hover:bg-rose-50 transition-all hover:border-rose-300"
            >
              לצפייה בגלריה
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="transform translate-y-8">
                <img src="https://picsum.photos/seed/knit1/300/400" alt="Crochet doll" className="rounded-2xl shadow-xl w-full h-48 md:h-64 object-cover" />
            </div>
            <div>
                <img src="https://picsum.photos/seed/knit2/300/400" alt="Crochet doll" className="rounded-2xl shadow-xl w-full h-48 md:h-64 object-cover" />
            </div>
            <div className="transform translate-y-8">
                <img src="https://picsum.photos/seed/knit3/300/400" alt="Crochet doll" className="rounded-2xl shadow-xl w-full h-48 md:h-64 object-cover" />
            </div>
        </div>
      </div>
    </div>
  );
};