import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="ml-2 text-white" size={24} />
              <h3 className="text-xl font-bold">مكتب النور للتمريض المنزلي</h3>
            </div>
            <p className="text-blue-200 mb-6">
              نقدم خدمات تمريض منزلية متكاملة بأيدي كوادر طبية متخصصة ومدربة على أعلى مستوى.
            </p>
            <div className="flex items-center">
              <Phone size={16} className="ml-2 text-blue-300" />
              <span className="text-blue-100">01055959201</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-r-4 border-blue-500 pr-3">روابط سريعة</h3>
            <ul className="space-y-2">
              {['الرئيسية', 'من نحن', 'خدماتنا', 'لماذا نحن', 'تواصل معنا'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${['home', 'about', 'services', 'why-us', 'contact'][index]}`}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 border-r-4 border-blue-500 pr-3">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone size={18} className="ml-2 mt-1 text-blue-300 shrink-0" />
                <span className="text-blue-200">01055959201</span>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="ml-2 mt-1 text-blue-300 shrink-0" />
                <span className="text-blue-200">info@alnoor-nursing.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="ml-2 mt-1 text-blue-300 shrink-0" />
                <span className="text-blue-200">أرض اللواء، المعتمدية، إمبابة، محافظة الجيزة</span>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-blue-800 my-8" />
        
        <div className="text-center text-blue-200">
          <p>
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} مكتب النور للتمريض المنزلي
          </p>
          <p className="mt-2">
            تم تطوير الموقع بواسطة <a href="https://wa.me/201153903786" className="text-blue-300 hover:text-white">ادهم احمد</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;