import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { title: 'الرئيسية', href: 'home' },
    { title: 'من نحن', href: 'about' },
    { title: 'خدماتنا', href: 'services' },
    { title: 'لماذا نحن', href: 'why-us' },
    { title: 'تواصل معنا', href: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Heart className="text-blue-700 ml-2" size={28} />
            <h1 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-blue-800' : 'text-white'
            }`}>
              مكتب النور للتمريض المنزلي
            </h1>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8 space-x-reverse">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.href}`}
                    className={`transition-colors duration-300 hover:text-blue-500 ${
                      scrolled ? 'text-gray-800' : 'text-white'
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden cursor-pointer ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className={`mt-4 rounded-lg shadow-lg p-4 ${scrolled ? 'bg-white' : 'bg-blue-800'}`}>
            <ul className="space-y-3">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.href}`}
                    className={`block transition-colors duration-300 hover:text-blue-500 ${
                      scrolled ? 'text-gray-800' : 'text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;