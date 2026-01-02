import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-orange-50/50">
       {/* Background Blobs */}
       <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
       <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-rounded font-bold text-gray-800 mb-4">מילים חמות מלקוחות</h2>
            <div className="flex justify-center gap-1 text-yellow-400">
                <Star fill="currentColor" size={24} />
                <Star fill="currentColor" size={24} />
                <Star fill="currentColor" size={24} />
                <Star fill="currentColor" size={24} />
                <Star fill="currentColor" size={24} />
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.id} className="bg-white p-8 rounded-[2rem] shadow-lg shadow-rose-100/50 border border-white hover:-translate-y-2 transition-transform duration-300 relative group">
              <Quote className="absolute top-8 left-8 text-rose-100 group-hover:text-rose-200 transition-colors" size={50} />
              
              <div className="relative z-10">
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed italic">"{t.text}"</p>
                  
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white shadow-md ${i % 2 === 0 ? 'bg-rose-400' : 'bg-teal-400'}`}>
                        {t.name[0]}
                    </div>
                    <div>
                        <span className="font-bold text-gray-800 block">{t.name}</span>
                        <span className="text-sm text-gray-400">לקוחה מאושרת</span>
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};