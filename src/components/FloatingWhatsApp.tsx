import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/201055959201"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-6 bottom-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 space-x-reverse"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle size={24} />
      <span className="font-bold">تواصل معنا</span>
    </a>
  );
};

export default FloatingWhatsApp;