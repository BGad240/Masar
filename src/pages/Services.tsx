import { Link } from "react-router-dom";
import { Target, BookOpen, Calendar, Video, FileText, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const mainServices = [
    {
      icon: Target,
      title: "اختبار المسار المهني",
      description: "اختبار شامل يعتمد على نظريات علمية مثل MBTI وهولاند لتحديد ميولك المهنية",
      features: [
        "تحليل شخصيتك المهنية",
        "اقتراحات مهنية دقيقة",
        "تقرير مفصل عن نقاط قوتك",
        "توجيهات للتطوير الذاتي",
      ],
      link: "/quiz",
      buttonText: "ابدأ الاختبار الآن",
    },
    {
      icon: BookOpen,
      title: "دليل المهن الشامل",
      description: "قاعدة بيانات واسعة تحتوي على أكثر من 200 مهنة مع تفاصيل كاملة",
      features: [
        "وصف تفصيلي لكل مهنة",
        "متطلبات التأهيل والمهارات",
        "معلومات عن الرواتب",
        "فرص التطور الوظيفي",
      ],
      link: "/careers",
      buttonText: "استكشف المهن",
    },
    {
      icon: Calendar,
      title: "استشارات مهنية متخصصة",
      description: "جلسات استشارية فردية مع خبراء التوجيه المهني",
      features: [
        "جلسات افتراضية مرنة",
        "خبراء معتمدون",
        "خطة مهنية شخصية",
        "متابعة دورية",
      ],
      link: "/contact",
      buttonText: "احجز استشارة",
    },
  ];

  const additionalServices = [
    {
      icon: Video,
      title: "ندوات وورش عمل",
      description: "فعاليات تعليمية حول التخطيط المهني ومهارات القرن الـ21",
    },
    {
      icon: FileText,
      title: "موارد تعليمية مجانية",
      description: "مقالات، كتب إلكترونية، وإنفوجرافيك عن المهن والتخصصات",
    },
    {
      icon: TrendingUp,
      title: "تحليل سوق العمل",
      description: "تقارير دورية عن اتجاهات سوق العمل والمهن المستقبلية",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[#7b8f9b]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            خدماتنا
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            مجموعة متكاملة من الأدوات والخدمات لدعم رحلتك المهنية
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-8 w-8 text-[#3376b49f]" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-3xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">ما يتضمنه:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-center md:justify-end">
                      <Button size="lg" asChild className="bg-[#245079]">
                        <Link to={service.link}>{service.buttonText}</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">خدمات إضافية</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8">
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-[#3376b49f]" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-[#7b8f9b] text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">هل أنت مستعد لبدء رحلتك المهنية؟</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                ابدأ الآن مع اختبار المسار المهني المجاني واحصل على توجيهات مخصصة
              </p>
              <Button size="lg" className="bg-[#44526871] hover:bg-[#44526871]" asChild>
                <Link to="/quiz">ابدأ الآن مجاناً</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
