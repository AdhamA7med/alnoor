import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'أحمد محمد',
    text: 'كانت تجربتي مع مكتب النور للتمريض المنزلي ممتازة. تلقت والدتي رعاية استثنائية بعد العملية الجراحية، وكان الطاقم التمريضي محترفًا ولطيفًا للغاية.',
    rating: 5
  },
  {
    id: 2,
    name: 'سارة علي',
    text: 'أنا سعيد جدًا بخدمات مكتب النور للتمريض المنزلي. كنت قلقًا بشأن رعاية والدي المسن، ولكن الممرضات كن محترفات وحريصات على راحته. أوصي بهم بشدة.',
    rating: 5
  },
  {
    id: 3,
    name: 'محمود إبراهيم',
    text: 'لقد استفدت كثيرًا من خدمات الحقن المنزلية. الممرضون محترفون ويصلون في الموعد المحدد دائمًا. خدمة ممتازة وأسعار معقولة.',
    rating: 4
  },
  {
    id: 4,
    name: 'فاطمة عبد الرحمن',
    text: 'استعنت بخدمات مكتب النور لرعاية جدتي وكانت التجربة أكثر من رائعة. الممرضات متفهمات لاحتياجاتها وصبورات معها. شكرًا جزيلًا.',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">آراء العملاء</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            نفتخر بثقة عملائنا وبالتقييمات الإيجابية التي نحصل عليها نتيجة لجودة خدماتنا والرعاية التي نقدمها
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < testimonial.rating ? "text-yellow-500 fill-current" : "text-gray-300"}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-bold text-blue-800">— {testimonial.name}</p>
            </div>
          ))}
        </div>
        
        <div 
          className="mt-16 text-center"
          data-aos="fade-up"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">هل استفدت من خدماتنا؟</h3>
            <p className="text-gray-600 mb-6">نرحب بآرائكم وتقييماتكم لمساعدتنا في تحسين خدماتنا</p>
            <a 
              href="#contact" 
              className="button-primary inline-block"
            >
              شارك برأيك
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;