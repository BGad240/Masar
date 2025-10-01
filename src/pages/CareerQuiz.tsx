import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import quizBanner from "@/assets/quiz-banner.jpg";

interface Question {
  id: number;
  text: string;
  options: string[];
}

const CareerQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      text: "ما الذي تفضل القيام به في وقت فراغك؟",
      options: [
        "قراءة الكتب والبحث عن معلومات جديدة",
        "العمل على مشاريع إبداعية أو فنية",
        "ممارسة الرياضة أو الأنشطة البدنية",
        "التفاعل الاجتماعي ومساعدة الآخرين",
      ],
    },
    {
      id: 2,
      text: "كيف تصف أسلوب تعلمك؟",
      options: [
        "أفضل التعلم من خلال القراءة والتحليل",
        "أتعلم بشكل أفضل من خلال التجربة العملية",
        "أحتاج إلى رؤية الأمثلة البصرية",
        "أفضل المناقشات الجماعية",
      ],
    },
    {
      id: 3,
      text: "ما الذي يحفزك أكثر في العمل؟",
      options: [
        "حل المشكلات المعقدة",
        "الإبداع والابتكار",
        "تحقيق الأهداف والنتائج الملموسة",
        "مساعدة الناس وإحداث تأثير إيجابي",
      ],
    },
    {
      id: 4,
      text: "كيف تتعامل مع الضغوط؟",
      options: [
        "أحلل الموقف بهدوء وأضع خطة",
        "أبحث عن حلول إبداعية",
        "أتصرف بسرعة وأتخذ قرارات حاسمة",
        "أطلب المساعدة والدعم من الآخرين",
      ],
    },
    {
      id: 5,
      text: "ما نوع بيئة العمل المثالية بالنسبة لك؟",
      options: [
        "مكتب هادئ ومنظم",
        "مساحة عمل مرنة وإبداعية",
        "بيئة ديناميكية وسريعة",
        "مكان يشجع على التعاون والعمل الجماعي",
      ],
    },
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const getResults = () => {
    const careerTypes = [
      {
        type: "التحليلي والبحثي",
        careers: ["باحث علمي", "محلل بيانات", "مبرمج", "مهندس"],
        description: "تتميز بالقدرة على التحليل المنطقي وحل المشكلات المعقدة",
      },
      {
        type: "الإبداعي والفني",
        careers: ["مصمم جرافيك", "كاتب", "مهندس معماري", "مسوق رقمي"],
        description: "تمتلك خيالاً واسعاً وقدرة على التعبير الإبداعي",
      },
      {
        type: "العملي والتنفيذي",
        careers: ["مدير مشاريع", "رائد أعمال", "مهندس ميداني", "مدير عمليات"],
        description: "تفضل العمل الميداني وتحقيق النتائج الملموسة",
      },
      {
        type: "الاجتماعي والخدمي",
        careers: ["معلم", "مستشار نفسي", "أخصائي موارد بشرية", "عامل اجتماعي"],
        description: "تستمتع بمساعدة الآخرين والتفاعل الاجتماعي",
      },
    ];

    // Count which option index (0-3) was selected most across all questions
    const answerCounts: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
    
    Object.entries(answers).forEach(([questionIndex, answer]) => {
      const qIndex = parseInt(questionIndex);
      const optionIndex = questions[qIndex]?.options.indexOf(answer);
      if (optionIndex !== undefined && optionIndex >= 0) {
        answerCounts[optionIndex] = (answerCounts[optionIndex] || 0) + 1;
      }
    });

    // Find the most selected option index
    const maxIndex = Object.entries(answerCounts)
      .sort((a, b) => b[1] - a[1])[0]?.[0];
    
    const resultIndex = maxIndex ? parseInt(maxIndex) : 0;
    
    // Always return a valid career type (fallback to first if something goes wrong)
    return careerTypes[resultIndex] || careerTypes[0];
  };

  if (showResults) {
    const result = getResults();
    return (
      <div className="min-h-screen pt-20 pb-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <div className="h-20 w-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-secondary" />
              </div>
              <CardTitle className="text-4xl mb-2">نتائج اختبار المسار المهني</CardTitle>
              <CardDescription className="text-lg">تحليل شخصيتك المهنية</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="p-8 rounded-lg bg-muted/50 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">نمطك المهني</h3>
                <p className="text-3xl font-bold text-foreground mb-4">{result.type}</p>
                <p className="text-muted-foreground text-lg">{result.description}</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">المهن المقترحة لك:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {result.careers.map((career, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border bg-card">
                      <CheckCircle className="h-5 w-5 text-secondary inline-block ml-2 " />
                      <span className="text-foreground font-medium">{career}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" onClick={() => { setShowResults(false); setCurrentQuestion(0); setAnswers({}); }}>
                  إعادة الاختبار
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/careers">استكشف المهن بالتفصيل</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Banner */}
      <div className="relative h-64 bg-cover bg-center mb-12" style={{ backgroundImage: `url(${quizBanner})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">اختبار المسار المهني</h1>
            <p className="text-xl">اكتشف شخصيتك المهنية في 5 دقائق</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>السؤال {currentQuestion + 1} من {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
  <h3 className="text-2xl font-semibold text-foreground mb-8">
    {questions[currentQuestion].text}
  </h3>

  <RadioGroup
    value={answers[currentQuestion] || ""}
    onValueChange={handleAnswer}
    className="space-y-4"
  >
    {questions[currentQuestion].options.map((option, index) => (
      <div
        key={index}
        className="flex items-center gap-3"
      >
        <RadioGroupItem value={option} id={`option-${index}`} />
        <Label
          htmlFor={`option-${index}`}
          className="flex-1 cursor-pointer p-4 rounded-lg border border-border hover:bg-accent transition-colors"
        >
          {option}
        </Label>
      </div>
    ))}
  </RadioGroup>
</div>


            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="ml-2 h-4 w-4" />
                السابق
              </Button>
              <Button
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
              >
                {currentQuestion === questions.length - 1 ? "عرض النتائج" : "التالي"}
                <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CareerQuiz;
