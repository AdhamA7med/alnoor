import React from 'react';
import { HeartPulse, Syringe, Stethoscope, Bed, Monitor as MonitorHeart, Armchair as Wheelchair } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'رعاية المسنين',
    description: 'رعاية شاملة للمسنين تشمل المساعدة في الأنشطة اليومية، والإشراف على تناول الأدوية، والمتابعة الصحية الدورية.',
    icon: <HeartPulse size={36} className="text-blue-600" />
  },
  {
    id: 2,
    title: 'خدمات الحقن',
    description: 'خدمات الحقن المنزلية تحت إشراف طاقم تمريضي متخصص، بما في ذلك الحقن العضلي والوريدي وتحت الجلد.',
    icon: <Syringe size={36} className="text-blue-600" />
  },
  {
    id: 3,
    title: 'رعاية ما بعد العمليات',
    description: 'رعاية متكاملة للمرضى بعد العمليات الجراحية، تشمل تغيير الضمادات، ومتابعة الشفاء، والتعامل مع الألم.',
    icon: <Stethoscope size={36} className="text-blue-600" />
  },
  {
    id: 4,
    title: 'رعاية سريرية',
    description: 'رعاية شاملة للمرضى طريحي الفراش، بما في ذلك الوقاية من قرح الفراش والعناية الشخصية والتغذية.',
    icon: <Bed size={36} className="text-blue-600" />
  },
  {
    id: 5,
    title: 'مراقبة العلامات الحيوية',
    description: 'مراقبة منتظمة للعلامات الحيوية مثل ضغط الدم، ومعدل ضربات القلب، ومستوى السكر في الدم، ودرجة الحرارة.',
    icon: <MonitorHeart size={36} className="text-blue-600" />
  },
  {
    id: 6,
    title: 'دعم الأجهزة الطبية',
    description: 'المساعدة في استخدام وصيانة الأجهزة الطبية المنزلية مثل أجهزة التنفس وأجهزة قياس السكر وغيرها.',
    icon: <Wheelchair size={36} className="text-blue-600" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services\" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">خدماتنا</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من خدمات الرعاية الصحية المنزلية المصممة خصيصًا لتلبية احتياجات المرضى والمسنين
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="button-primary inline-flex items-center"
            data-aos="zoom-in"
          >
            <span>احصل على استشارة مجانية</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;