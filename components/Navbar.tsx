import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
             <div className="bg-rose-100 p-2 rounded-full">
                <Heart className="text-rose-500" fill="currentColor" size={24} />
             </div>
             <span className="font-rounded text-2xl font-bold text-gray-800">הבובות של אודליה</span>
          </div>
          
          <div className="hidden md:flex space-x-8 space-x-reverse font-medium text-gray-600">
            <button onClick={() => scrollToSection('about')} className="hover:text-rose-500 transition-colors">מי אני</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-rose-500 transition-colors">הבובות שלי</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-rose-500 transition-colors">איך מזמינים?</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-rose-500 transition-colors">לקוחות מספרות</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-rose-500">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <button onClick={() => scrollToSection('about')} className="block w-full px-3 py-3 text-gray-700 hover:bg-rose-50 rounded-md font-medium">מי אני</button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full px-3 py-3 text-gray-700 hover:bg-rose-50 rounded-md font-medium">הבובות שלי</button>
            <button onClick={() => scrollToSection('process')} className="block w-full px-3 py-3 text-gray-700 hover:bg-rose-50 rounded-md font-medium">איך מזמינים?</button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full px-3 py-3 text-gray-700 hover:bg-rose-50 rounded-md font-medium">המלצות</button>
          </div>
        </div>
      )}
    </nav>
  );
};