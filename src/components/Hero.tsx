import React from 'react';
import { PhoneCall } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")',
            filter: 'brightness(0.5) saturate(1.2)'
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white text-right">
        <div className="max-w-xl mr-auto md:mr-16" data-aos="fade-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">مكتب النور للتمريض المنزلي</h1>
          <h2 className="text-xl md:text-2xl mb-6">رعاية صحية متكاملة بين يديك</h2>
          <p className="text-lg mb-8">نقدم خدمات التمريض المنزلي الشاملة ورعاية المسنين بأيدي كوادر طبية متخصصة وعلى أعلى مستوى من المهنية والاحترافية</p>
          
          <div className="flex space-x-4 space-x-reverse">
            <a 
              href="#contact" 
              className="button-primary flex items-center justify-center"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <span className="ml-2">احجز الآن</span>
              <PhoneCall size={20} />
            </a>
            <a 
              href="#services" 
              className="bg-white text-blue-800 font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              خدماتنا
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave shape at bottom */}
      <div className="absolute bottom-0 right-0 left-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path 
            fill="#f9fafb" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;