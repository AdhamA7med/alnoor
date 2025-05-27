import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">من نحن</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            نقدم في مكتب النور للتمريض المنزلي خدمات رعاية صحية متكاملة للمرضى والمسنين في منازلهم، 
            من خلال فريق من الممرضين والممرضات المؤهلين ذوي الخبرة العالية.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className="text-center p-6 bg-white rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="text-blue-700" size={32} />
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">رؤيتنا</h3>
            <p className="text-gray-600">
              أن نكون الاختيار الأول في مجال خدمات التمريض المنزلي في مصر، 
              من خلال تقديم رعاية صحية متميزة تجمع بين المهنية والرحمة.
            </p>
          </div>
          
          <div 
            className="text-center p-6 bg-white rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Award className="text-blue-700" size={32} />
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">رسالتنا</h3>
            <p className="text-gray-600">
              توفير خدمات رعاية صحية منزلية عالية الجودة تناسب احتياجات كل مريض، 
              مع الحفاظ على كرامته وخصوصيته في محيط منزله.
            </p>
          </div>
          
          <div 
            className="text-center p-6 bg-white rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="text-blue-700" size={32} />
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">خبرتنا</h3>
            <p className="text-gray-600">
              نتمتع بخبرة تزيد عن 10 سنوات في مجال التمريض المنزلي،
              مع فريق عمل مدرب على أحدث بروتوكولات الرعاية الصحية.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">التزامنا تجاهكم</h3>
              <p className="text-gray-600 mb-4">
                في مكتب النور للتمريض المنزلي، نلتزم بتوفير أعلى مستويات الرعاية الصحية للمرضى في
                راحة منازلهم، مع مراعاة الجوانب النفسية والاجتماعية للمرضى وعائلاتهم.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 ml-2 bg-blue-500 rounded-full"></span>
                  كوادر تمريضية مرخصة ومؤهلة
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 ml-2 bg-blue-500 rounded-full"></span>
                  خدمة على مدار 24 ساعة طوال أيام الأسبوع
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 ml-2 bg-blue-500 rounded-full"></span>
                  متابعة دورية من قبل أخصائيين
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 ml-2 bg-blue-500 rounded-full"></span>
                  أسعار تنافسية وخيارات متعددة
                </li>
              </ul>
            </div>
            <div 
              className="bg-cover bg-center h-64 md:h-auto"
              style={{ 
                backgroundImage: 'url("https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")' 
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;