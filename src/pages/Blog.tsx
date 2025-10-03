import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  path: string;
}

const Blog = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "كيف تختار تخصصك الجامعي المناسب؟",
      excerpt:
        "دليل شامل لمساعدة الطلاب في اختيار التخصص الجامعي الذي يتناسب مع ميولهم وقدراتهم المهنية...",
      author: "د. محمد العتيبي",
      date: "2024-01-15",
      category: "التوجيه المهني",
      readTime: "5 دقائق",
      path: 'https://ar.wikipedia.org/wiki/%D8%AA%D8%B9%D9%84%D9%8A%D9%85_%D8%B9%D8%A7%D9%84 '
    },
    {
      id: 2,
      title: "أهم مهارات القرن الحادي والعشرين",
      excerpt:
        "تعرف على المهارات الأساسية التي يجب على كل شخص اكتسابها للنجاح في سوق العمل المستقبلي...",
      author: "سارة الحربي",
      date: "2024-01-10",
      category: "تطوير المهارات",
      readTime: "7 دقائق",
      path: 'https://ar.wikipedia.org/wiki/%D9%85%D9%87%D8%A7%D8%B1%D8%A7%D8%AA_%D8%A7%D9%84%D9%82%D8%B1%D9%86_%D8%A7%D9%84%D8%AD%D8%A7%D8%AF%D9%8A_%D9%88%D8%A7%D9%84%D8%B9%D8%B4%D8%B1%D9%8A%D9%86 '
    },
    {
      id: 3,
      title: "مستقبل الذكاء الاصطناعي والوظائف",
      excerpt:
        "كيف سيؤثر الذكاء الاصطناعي على سوق العمل وما هي المهن التي ستزدهر في المستقبل...",
      author: "أحمد السلمان",
      date: "2024-01-05",
      category: "التكنولوجيا",
      readTime: "10 دقائق",
      path: 'https://ar.wikipedia.org/wiki/%D8%B0%D9%83%D8%A7%D8%A1_%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A '
    },
    {
      id: 4,
      title: "نصائح للنجاح في المقابلات الشخصية",
      excerpt:
        "استراتيجيات فعالة للتحضير للمقابلات الوظيفية وترك انطباع إيجابي لدى أصحاب العمل...",
      author: "فاطمة القحطاني",
      date: "2024-01-01",
      category: "البحث عن عمل",
      readTime: "6 دقائق",
      path: 'https://ar.wikipedia.org/wiki/%D9%85%D9%82%D8%A7%D8%A8%D9%84%D8%A9_%D8%B9%D9%85%D9%84 '
    },
    {
      id: 5,
      title: "ريادة الأعمال للشباب العربي",
      excerpt:
        "كيف تبدأ مشروعك الخاص وتحقق النجاح في عالم ريادة الأعمال المتطور...",
      author: "خالد المطيري",
      date: "2023-12-28",
      category: "ريادة الأعمال",
      readTime: "8 دقائق",
      path: 'https://ar.wikipedia.org/wiki/%D8%B1%D9%8A%D8%A7%D8%AF%D8%A9_%D8%A3%D8%B9%D9%85%D8%A7%D9%84 '
    },
    {
      id: 6,
      title: "التخطيط المالي للمهنيين الشباب",
      excerpt:
        "أساسيات التخطيط المالي الشخصي والادخار والاستثمار في بداية الحياة المهنية...",
      author: "نورة الدوسري",
      date: "2023-12-25",
      category: "التطوير الشخصي",
      readTime: "9 دقائق",
      path: 'https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7_%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A '
    },
  ];

  const categories = [
    "الكل",
    "التوجيه المهني",
    "تطوير المهارات",
    "التكنولوجيا",
    "البحث عن عمل",
    "ريادة الأعمال",
    "التطوير الشخصي",
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Hero Section */}
      <section className="py-20 bg-[#7b8f9b]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-up">
            المكتبة الرقمية
          </h1>
          <p
            className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            مقالات وموارد قيمة لدعم رحلتك المهنية
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="hover:bg-[#2f546950] hover:text-gray-900"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="card-hover flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-[#2f5469]">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-2xl hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(post.date).toLocaleDateString("ar-SA")}
                      </span>
                    </div>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-[#2f5469]">
                    <Link to={post.path} target="_blank">لمعرفة المزيد</Link>
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                اشترك في نشرتنا البريدية
              </h2>
              <p className="text-muted-foreground mb-6 text-sm md:text-base">
                احصل على أحدث المقالات والموارد المهنية مباشرة في بريدك
                الإلكتروني
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-sm md:text-base"
                />
                <Button className="w-full sm:w-auto bg-[#2f5469] hover:bg-[#2f5469]">اشترك الآن</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
