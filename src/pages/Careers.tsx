import { useState } from "react";
import { Search, Filter, Briefcase, TrendingUp, DollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Career {
  id: number;
  title: string;
  category: string;
  description: string;
  demand: "high" | "medium" | "low";
  salary: string;
  skills: string[];
}

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const categories = ["الكل", "تقنية المعلومات", "الهندسة", "الطب", "التعليم", "الأعمال", "الفنون"];

  const careers: Career[] = [
    {
      id: 1,
      title: "مطور برمجيات",
      category: "تقنية المعلومات",
      description: "تصميم وتطوير التطبيقات والأنظمة البرمجية",
      demand: "high",
      salary: "8,000 - 25,000 ريال",
      skills: ["البرمجة", "حل المشكلات", "العمل الجماعي"],
    },
    {
      id: 2,
      title: "محلل بيانات",
      category: "تقنية المعلومات",
      description: "تحليل البيانات واستخراج الرؤى لدعم القرارات",
      demand: "high",
      salary: "7,000 - 20,000 ريال",
      skills: ["التحليل الإحصائي", "Python", "SQL", "التفكير النقدي"],
    },
    {
      id: 3,
      title: "مهندس معماري",
      category: "الهندسة",
      description: "تصميم المباني والمنشآت بشكل إبداعي وعملي",
      demand: "medium",
      salary: "6,000 - 18,000 ريال",
      skills: ["التصميم", "AutoCAD", "الإبداع", "إدارة المشاريع"],
    },
    {
      id: 4,
      title: "طبيب عام",
      category: "الطب",
      description: "تشخيص وعلاج الحالات الطبية المختلفة",
      demand: "high",
      salary: "15,000 - 40,000 ريال",
      skills: ["المعرفة الطبية", "التواصل", "التعاطف", "اتخاذ القرار"],
    },
    {
      id: 5,
      title: "معلم",
      category: "التعليم",
      description: "تدريس وتوجيه الطلاب في مختلف المراحل التعليمية",
      demand: "medium",
      salary: "6,000 - 15,000 ريال",
      skills: ["التواصل", "الصبر", "التخطيط", "الإبداع"],
    },
    {
      id: 6,
      title: "مدير تسويق رقمي",
      category: "الأعمال",
      description: "إدارة الحملات التسويقية على المنصات الرقمية",
      demand: "high",
      salary: "8,000 - 22,000 ريال",
      skills: ["التسويق الرقمي", "SEO", "تحليل البيانات", "الإبداع"],
    },
    {
      id: 7,
      title: "مصمم جرافيك",
      category: "الفنون",
      description: "إنشاء تصاميم بصرية لأغراض تجارية وفنية",
      demand: "medium",
      salary: "5,000 - 15,000 ريال",
      skills: ["Adobe Creative Suite", "الإبداع", "التواصل البصري"],
    },
    {
      id: 8,
      title: "مهندس ذكاء اصطناعي",
      category: "تقنية المعلومات",
      description: "تطوير أنظمة وتطبيقات الذكاء الاصطناعي",
      demand: "high",
      salary: "12,000 - 35,000 ريال",
      skills: ["Python", "Machine Learning", "Deep Learning", "الرياضيات"],
    },
  ];

  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          career.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "الكل" || career.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "high": return "text-secondary bg-secondary/10";
      case "medium": return "text-primary bg-primary/10";
      case "low": return "text-muted-foreground bg-muted";
      default: return "";
    }
  };

  const getDemandText = (demand: string) => {
    switch (demand) {
      case "high": return "طلب مرتفع";
      case "medium": return "طلب متوسط";
      case "low": return "طلب منخفض";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero Section */}
      <section className="py-20 bg-[#007BA7]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            دليل المهن
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            استكشف أكثر من 200 مهنة مع تفاصيل شاملة عن كل مهنة
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="ابحث عن مهنة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-muted-foreground">
            عرض {filteredCareers.length} من {careers.length} مهنة
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCareers.map((career) => (
              <Card key={career.id} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className={getDemandColor(career.demand)}>
                      <TrendingUp className="h-3 w-3 ml-1" />
                      {getDemandText(career.demand)}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{career.title}</CardTitle>
                  <CardDescription>{career.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">الراتب:</span>
                      <span className="font-medium text-foreground">{career.salary}</span>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">المهارات المطلوبة:</div>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCareers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">لم يتم العثور على نتائج. جرب البحث بكلمات مختلفة.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Careers;
