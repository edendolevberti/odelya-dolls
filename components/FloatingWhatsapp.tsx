import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const FloatingWhatsapp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl transition-all hover:scale-105 animate-bounce-slow group"
    >
      <span className="font-bold hidden md:inline group-hover:inline transition-all duration-300">דברי איתי בווטסאפ</span>
      <MessageCircle size={28} fill="white" />
    </a>
  );
};