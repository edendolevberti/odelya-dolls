import React from 'react';
import { Heart, Star, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="w-full md:w-1/2 relative group">
             <div className="absolute inset-0 bg-rose-100 rounded-[2rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-60"></div>
             <div className="absolute inset-0 bg-yellow-100 rounded-[2rem] transform -rotate-2 group-hover:-rotate-4 transition-transform duration-500 opacity-60"></div>
             <img 
               src="https://i.postimg.cc/zDFtSjjK/about-pic.jpg" 
               alt="Odelia crocheting" 
               className="relative rounded-[2rem] shadow-xl w-full h-auto object-cover transform transition-transform duration-500 z-10"
             />
             {/* Sticker decoration */}
             <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-lg z-20 transform rotate-12">
                <Heart className="text-rose-500 fill-rose-500" size={32} />
             </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-right">
            <h2 className="text-4xl md:text-5xl font-rounded font-bold text-gray-800 mb-8 leading-tight">
              נעים להכיר, אני <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-400">אודליה</span>
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed font-light">
              האהבה שלי לסריגה התחילה כתחביב קטן וגדלה לעולם שלם של יצירה. אני מאמינה שלכל בובה יש נשמה, ולכל ילד מגיע חבר רך שישמור עליו בלילה.
            </p>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
              כל בובה נסרגת בעבודת יד קפדנית, תוך שימוש בחוטים האיכותיים ביותר שמותאמים לתינוקות וילדים.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               <div className="flex items-center justify-center gap-3 p-4 bg-white border border-rose-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                 <div className="bg-rose-50 p-2 rounded-xl shrink-0">
                    <Heart className="text-rose-500" size={20} />
                 </div>
                 <span className="font-bold text-gray-700 font-rounded text-sm lg:text-base whitespace-nowrap">סרוג באהבה</span>
               </div>
               
               <div className="flex items-center justify-center gap-3 p-4 bg-white border border-blue-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                 <div className="bg-blue-50 p-2 rounded-xl shrink-0">
                    <ShieldCheck className="text-blue-500" size={20} />
                 </div>
                 <span className="font-bold text-gray-700 font-rounded text-sm lg:text-base whitespace-nowrap">חומרים בטוחים</span>
               </div>
               
               <div className="flex items-center justify-center gap-3 p-4 bg-white border border-yellow-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                 <div className="bg-yellow-50 p-2 rounded-xl shrink-0">
                    <Star className="text-yellow-500" size={20} />
                 </div>
                 <span className="font-bold text-gray-700 font-rounded text-sm lg:text-base whitespace-nowrap">עיצוב ייחודי</span>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};