import React from 'react';
import { 
  Clock, 
  BadgeCheck, 
  Users, 
  ThumbsUp,
  Heart,
  ShieldCheck
} from 'lucide-react';

const reasons = [
  {
    id: 1,
    title: 'متاح 24/7',
    description: 'نقدم خدماتنا على مدار الساعة طوال أيام الأسبوع، لضمان توفير الرعاية الصحية عند الحاجة إليها.',
    icon: <Clock size={32} className="text-blue-600" />
  },
  {
    id: 2,
    title: 'طاقم مؤهل ومرخص',
    description: 'فريقنا من الممرضين والممرضات مؤهل ومرخص ويتمتع بخبرة واسعة في مجال الرعاية الصحية المنزلية.',
    icon: <BadgeCheck size={32} className="text-blue-600" />
  },
  {
    id: 3,
    title: 'رعاية شخصية',
    description: 'نقدم خطط رعاية مخصصة لكل مريض بناءً على احتياجاته الفردية وحالته الصحية.',
    icon: <Users size={32} className="text-blue-600" />
  },
  {
    id: 4,
    title: 'أسعار تنافسية',
    description: 'نقدم خدمات عالية الجودة بأسعار تنافسية، مع خيارات متعددة تناسب مختلف الميزانيات.',
    icon: <ThumbsUp size={32} className="text-blue-600" />
  },
  {
    id: 5,
    title: 'رعاية بمحبة',
    description: 'نقدم الرعاية بمستوى عالٍ من التعاطف والاهتمام، ونتعامل مع كل مريض كفرد من العائلة.',
    icon: <Heart size={32} className="text-blue-600" />
  },
  {
    id: 6,
    title: 'سرية وخصوصية',
    description: 'نحافظ على خصوصية وسرية معلومات المرضى، ونضمن بيئة آمنة ومحترمة للرعاية.',
    icon: <ShieldCheck size={32} className="text-blue-600" />
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us\" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">لماذا تختارنا</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            نتميز في مكتب النور للتمريض المنزلي بتقديم رعاية صحية استثنائية، وإليكم الأسباب التي تجعلنا الاختيار الأمثل
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.id} 
              className="bg-white p-6 rounded-lg shadow-md flex"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="ml-4 mt-1 shrink-0">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className="mt-16 bg-blue-700 text-white rounded-lg shadow-xl p-8 text-center"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-bold mb-4">هدفنا راحتكم</h3>
          <p className="text-lg mb-6">
            نسعى دائمًا لتوفير أفضل رعاية صحية ممكنة لمرضانا وعائلاتهم، من خلال طاقم متخصص ومتفاني يضع صحتكم في المقام الأول.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50"
          >
            تواصل معنا الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;