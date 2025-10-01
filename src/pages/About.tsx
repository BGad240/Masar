import { Target, Eye, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-team.jpg";
import CountUp from "react-countup";
const About = () => {
  const values = [
    {
      icon: Target,
      title: "الابتكار",
      description: "نستخدم أحدث تقنيات الذكاء الاصطناعي في التوجيه المهني",
    },
    {
      icon: Heart,
      title: "الاهتمام",
      description: "نضع مستقبل الشباب العربي في صدارة أولوياتنا",
    },
    {
      icon: Users,
      title: "التعاون",
      description: "نعمل مع خبراء ومؤسسات تعليمية رائدة",
    },
    {
      icon: Eye,
      title: "الشفافية",
      description: "نقدم معلومات دقيقة وموثوقة حول المسارات المهنية",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[#007BA7]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            من نحن
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            منصة رائدة في توجيه الشباب العربي نحو مستقبل مهني مشرق
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">رؤيتنا ورسالتنا</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-3">الرؤية</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    أن نكون المنصة الأولى في العالم العربي لتمكين الشباب من اكتشاف مساراتهم المهنية 
                    المثالية باستخدام أحدث تقنيات الذكاء الاصطناعي والتوجيه الاحترافي.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-secondary mb-3">الرسالة</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    نساعد الشباب العربي على اتخاذ قرارات مهنية مستنيرة من خلال توفير اختبارات علمية دقيقة، 
                    استشارات متخصصة، ودليل شامل للمهن المستقبلية، مع التركيز على المهارات المطلوبة في القرن الحادي والعشرين.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={aboutImage} 
                alt="Our Team" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">قيمنا الأساسية</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-8">قصتنا</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                بدأت فكرة مسار المستقبل من حاجة ملحة لمساعدة الشباب العربي في التعامل مع التحديات المعقدة 
                في اختيار مساراتهم المهنية. في عالم يتغير بسرعة، حيث تظهر مهن جديدة وتختفي أخرى، أصبح من 
                الضروري وجود منصة علمية ومتطورة لتوجيه الشباب.
              </p>
              <p>
                جمعنا فريقاً من الخبراء في مجالات التوجيه المهني، علم النفس، والذكاء الاصطناعي لبناء منصة 
                شاملة تجمع بين الأساليب العلمية التقليدية وأحدث التقنيات. نؤمن بأن كل شاب يستحق فرصة 
                اكتشاف إمكانياته الحقيقية والوصول إلى مستقبل مهني مزدهر.
              </p>
              <p>
                اليوم، نفخر بخدمة آلاف الطلاب والخريجين في جميع أنحاء العالم العربي، ونواصل تطوير منصتنا 
                لتقديم أفضل تجربة ممكنة في التوجيه المهني.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
          <section className="py-20 bg-[#007BA7]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <CountUp end={5} duration={2} />+
            </div>
            <div className="text-white/80 text-sm md:text-base">
              سنوات من الخبرة
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <CountUp end={10000} duration={3} separator="," />+
            </div>
            <div className="text-white/80 text-sm md:text-base">
              طالب مستفيد
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <CountUp end={200} duration={2.5} />+
            </div>
            <div className="text-white/80 text-sm md:text-base">
              مهنة مغطاة
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold mb-2">
              <CountUp end={95} duration={2} />%
            </div>
            <div className="text-white/80 text-sm md:text-base">
              نسبة الرضا
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
};

export default About;
