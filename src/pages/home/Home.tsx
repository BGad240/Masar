import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  HelpingHand,
  Users,
  BookOpen,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Hero from "./_components/Hero";
import CountUp from "react-countup";
import TestimonialsSlider from "./_components/Testim";
import ParentFeatures from "../_components/FeaturesImagesCard";

const Home = () => {
  const stats = [
    { label: "طالب مسجل", value: 10000, sign: "+", icon: Users },
    { label: "اختبار مهني", value: 50, sign: "+", icon: Target },
    { label: "دليل مهنة", value: 200, sign: "+", icon: BookOpen },
    { label: "نسبة النجاح", value: 59, sign: "%", icon: TrendingUp },
  ];

  const testimonials = [
    {
      name: "أحمد المالكي",
      role: "طالب جامعي",
      quote: "ساعدني مسار المستقبل في اختيار تخصصي الجامعي بثقة كاملة",
    },
    {
      name: "سارة العتيبي",
      role: "خريجة ثانوية",
      quote: "اختبار المسار المهني كان دقيق جداً وأعطاني رؤية واضحة",
    },
    {
      name: "محمد القحطاني",
      role: "محترف",
      quote: "استشارات مميزة ساعدتني في التحول المهني بنجاح",
    },
  ];

  const features = [
    {
      title: "اختبار المسار المهني",
      description: "اكتشف شخصيتك المهنية وميولك من خلال اختبارات علمية مدروسة",
      icon: Target,
    },
    {
      title: "دليل المهن الشامل",
      description: "استكشف مئات المهن مع تفاصيل كاملة عن المتطلبات والرواتب",
      icon: BookOpen,
    },
    {
      title: "استشارات احترافية",
      description: "احجز جلسة استشارية مع خبرائنا لتوجيه مسارك المهني",
      icon: Users,
    },
    {
      title: "استشارات مهنية",
      description: "احجز جلسة استشارية مع خبرائنا لتوجيه مسارك المهني",
      icon: Users,
    },
    {
      title: "دعم نفسي",
      description: "احجز جلسة استشارية مع خبرائنا لتوجيه مسارك المهني",
      icon: HelpingHand,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-[#ADD8E1] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-[#007BA7] mb-1">
                    <CountUp start={0} end={stat.value} duration={4} />
                    <span>{stat.sign}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#007BA7] mb-4">
              خدماتنا المتميزة
            </h2>
            <p className="text-lg text-[#696969] max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الأدوات والموارد لمساعدتك في اتخاذ القرار
              المهني الصحيح
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8 text-center">
                  {/* الأيقونة */}
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* العنوان */}
                  <h3 className="text-xl font-semibold text-[#00324D] mb-3">
                    {feature.title}
                  </h3>

                  {/* الوصف */}
                  <p className="text-[#696969]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ParentFeatures />

      {/* CTA Section */}
      <section className="py-20 bg-[#007BA7]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            هل أنت مستعد لاكتشاف مسارك؟
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            ابدأ رحلتك الآن مع اختبار المسار المهني المتطور
          </p>
          <Button
            size="lg"
            asChild
            className="bg-white text-primary hover:bg-white/90 shadow-lg"
          >
            <Link to="/quiz">
              ابدأ الآن مجاناً
              <ArrowRight className="mr-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F5FAFB]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#00324D] mb-6">
            آراء المستخدمين
          </h2>

          <TestimonialsSlider />
        </div>
      </section>
    </div>
  );
};

export default Home;
