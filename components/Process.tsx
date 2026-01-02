import React from 'react';
import { Palette, MessageCircle, Gift, Truck } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: <Palette size={32} className="text-purple-500" />,
      title: "1. בוחרים דגם",
      description: "מסתכלים בגלריה ובוחרים סגנון שאהבתם, או באים עם רעיון חדש!",
      color: "bg-purple-100"
    },
    {
      icon: <MessageCircle size={32} className="text-blue-500" />,
      title: "2. מדברים איתי",
      description: "שולחים הודעה בווטסאפ, מתייעצים ובוחרים צבעים ופרטים אישיים.",
      color: "bg-blue-100"
    },
    {
      icon: <Gift size={32} className="text-rose-500" />,
      title: "3. אני סורגת",
      description: "אני מתחילה במלאכה ויוצרת את הבובה במיוחד בשבילכם עם המון אהבה.",
      color: "bg-rose-100"
    },
    {
      icon: <Truck size={32} className="text-green-500" />,
      title: "4. משלוח וחיבוק",
      description: "הבובה נשלחת אליכם ארוזה למתנה, מוכנה לחיבוק הראשון.",
      color: "bg-green-100"
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-64 bg-gradient-to-r from-transparent via-rose-50 to-transparent -rotate-6 z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-bold mb-4">תהליך פשוט וכיפי</div>
        <h2 className="text-4xl md:text-5xl font-rounded font-bold text-gray-800 mb-20">איך מזמינים בובה?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden lg:block absolute top-16 right-16 left-16 h-0 border-t-4 border-dashed border-rose-200 -z-10"></div>

           {steps.map((step, index) => (
             <div key={index} className="flex flex-col items-center group">
               <div className={`w-32 h-32 rounded-full ${step.color} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300 border-4 border-white ring-4 ring-rose-50`}>
                 {step.icon}
               </div>
               <h3 className="text-2xl font-bold text-gray-800 mb-3 font-rounded">{step.title}</h3>
               <p className="text-gray-500 max-w-xs leading-relaxed">{step.description}</p>
             </div>
           ))}
        </div>

        <div className="mt-20">
           <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-12 py-5 bg-teal-500 text-white rounded-full font-bold text-xl hover:bg-teal-600 shadow-xl shadow-teal-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
           >
             <MessageCircle size={24} />
             להתחלת הזמנה בוואטסאפ
           </a>
        </div>
      </div>
    </section>
  );
};