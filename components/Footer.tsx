import React from 'react';
import { Heart, Instagram, Facebook, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-rose-500 text-white pt-32 pb-12 overflow-hidden">
        
        {/* Top Wave Divider - Blends with the body background color */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px] fill-[#fffaf0]">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>

      {/* Decorative Background Elements (Hero Style) */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div className="absolute top-20 right-1/4 w-32 h-32 bg-yellow-300 rounded-full mix-blend-screen filter blur-xl opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-right">
          
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
               <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                   <Heart className="text-white fill-white" size={24} />
               </div>
               <h3 className="text-3xl font-rounded font-bold">הבובות של אודליה</h3>
            </div>
            <p className="text-rose-100 text-lg font-light max-w-md leading-relaxed">
                יוצרים זכרונות מתוקים, תפר אחרי תפר. <br/>
                כל בובה נסרגת עם המון אהבה, סבלנות ותשומת לב לפרטים הקטנים.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="group p-4 bg-white/10 rounded-full hover:bg-white hover:text-rose-500 hover:scale-110 transition-all duration-300 border border-white/20 shadow-lg">
               <Instagram size={28} />
            </a>
            <a href="#" className="group p-4 bg-white/10 rounded-full hover:bg-white hover:text-rose-500 hover:scale-110 transition-all duration-300 border border-white/20 shadow-lg">
               <Facebook size={28} />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-sm text-rose-100">
             <p className="opacity-80">© {new Date().getFullYear()} כל הזכויות שמורות לאודליה - סריגה בעבודת יד</p>
             
             <div className="flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <span className="font-medium">נבנה באהבה</span>
                <Sparkles size={14} className="text-yellow-300" />
             </div>
        </div>

      </div>
    </footer>
  );
};