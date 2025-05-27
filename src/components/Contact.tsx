import React from 'react';
import { PhoneCall, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">تواصل معنا</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            نحن هنا للإجابة على استفساراتكم وتقديم المساعدة. لا تترددوا في التواصل معنا في أي وقت.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          <div data-aos="fade-up">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">معلومات الاتصال</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <PhoneCall className="text-blue-600 ml-4 mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">اتصل بنا</h4>
                    <p className="text-gray-600">01055959201</p>
                    <p className="text-blue-600 mt-1">متاح على مدار 24 ساعة</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-blue-600 ml-4 mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">موقعنا</h4>
                    <p className="text-gray-600">أرض اللواء، المعتمدية، إمبابة، محافظة الجيزة</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-gray-800 mb-4">ساعات العمل:</h4>
                <p className="text-blue-600 font-bold">متاح 24 ساعة - 7 أيام في الأسبوع</p>
                <p className="text-gray-600 mt-2">بما في ذلك العطلات الرسمية والمناسبات</p>
              </div>
            </div>
            
            <div className="mt-8 rounded-lg overflow-hidden shadow-md" data-aos="zoom-in">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13813.755086321382!2d31.18381255!3d30.052955049999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458414e2c322be7%3A0xb8fe3fe48dc1b9c7!2z2KPYsdi2INin2YTZhNmI2KfYodiMINin2YTZhdi52KrZhdiv2YrYqdiMINil2YXYqNin2KjYqdiMINmF2K3Yp9mB2LjYqSDYp9mE2KzZitiy2Kk!5e0!3m2!1sar!2seg!4v1748317594369!5m2!1sar!2seg" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع مكتب النور للتمريض المنزلي"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;