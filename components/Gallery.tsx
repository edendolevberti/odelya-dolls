import React from 'react';
import { PRODUCTS, WHATSAPP_LINK } from '../constants';
import { ShoppingBag, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-28 relative overflow-hidden bg-gradient-to-br from-rose-50/80 via-white to-orange-50/80">
      
      {/* Stronger Background Decor similar to Process but larger and centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[800px] bg-gradient-to-r from-transparent via-rose-100/50 to-transparent -rotate-12 blur-3xl -z-10 pointer-events-none"></div>
      
      {/* Additional blobs for depth and highlighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-200/20 rounded-full mix-blend-multiply filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Highlighted Title Section */}
        <div className="text-center mb-20 relative">
          <div className="inline-block relative z-10">
            {/* Subtle highlight behind title */}
            <div className="absolute inset-0 bg-yellow-100/80 transform -skew-x-12 -rotate-2 rounded-xl blur-sm opacity-60 -z-10 scale-110"></div>
            
            <h2 className="text-5xl md:text-6xl font-rounded font-bold text-gray-800 mb-6 relative drop-shadow-sm">
              הגלריה המתוקה שלי
            </h2>
            <Sparkles className="absolute -top-8 -right-12 text-yellow-400 animate-bounce-slow filter drop-shadow-md" size={42} />
          </div>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed mt-4">
            דוגמאות לבובות שכבר מצאו בית חם. <br/>
            <span className="font-medium text-rose-500 bg-white/50 px-2 rounded-lg">כל בובה היא עולם ומלואו של רכות ודמיון.</span>
          </p>
        </div>

        {/* Grid with cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group flex flex-col border-2 border-white ring-1 ring-rose-100/50 relative">
              
              {/* Image Container */}
              <div className="relative overflow-hidden h-80 bg-gray-50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Floating Tags */}
                <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end max-w-[85%] z-20">
                    {product.tags.map(tag => (
                        <span key={tag} className="bg-white/95 backdrop-blur-md text-sm font-bold px-4 py-1.5 rounded-full text-rose-500 shadow-sm border border-rose-100">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow relative bg-white">
                 {/* Decorative curve connector */}
                 <div className="absolute -top-12 left-0 right-0 h-12 bg-white rounded-t-[2.5rem]"></div>
                 
                <h3 className="text-3xl font-bold text-gray-800 mb-3 font-rounded relative z-10">{product.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed text-lg">{product.description}</p>
                
                <a 
                  href={`${WHATSAPP_LINK} ${encodeURIComponent(`אני מתעניינת בבובה ${product.title}`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-rose-50 text-rose-600 font-bold py-4 rounded-2xl hover:bg-rose-500 hover:text-white transition-all duration-300 flex justify-center items-center gap-3 group/btn text-lg border border-rose-100 hover:border-transparent hover:shadow-lg hover:shadow-rose-200"
                >
                  <ShoppingBag size={22} className="group-hover/btn:animate-bounce" />
                  אני רוצה כזה!
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-10 py-5 rounded-full shadow-md border border-rose-100 transform hover:scale-105 transition-transform">
            <span className="text-3xl">🧶</span>
            <p className="text-gray-700 text-lg font-bold">
              כל בובה היא יחידה במינה וניתנת לשינוי צבעים וגדלים
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};