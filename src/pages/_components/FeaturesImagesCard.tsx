import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type CardItem = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  href: string;
  targetBlank?: boolean;
};

const demoCards: CardItem[] = [
  {
    id: 1,
    imageUrl:
      "/child.jpg",
    title: "محادثات فورية امنة",
    description:
      "التواصل على مدار الساعة لحل كل مشكلات الطالب ومساعدته على التطور لحظة بلحظة",
    href: "https://t.me/masarmawjatalmustaqbalBot",
    targetBlank: true,
  },
  {
    id: 2,
    imageUrl:
      "/child.jpg",
    title: "مقياس الميول المهنية",
    description:
      "عرض جميع التقارير الشهرية والفصلية الخاصة بالطلاب مع إمكانية تحميلها وطباعتها بسهولة.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSd_Wej37xKcd7uoxhRk7eysi5htnXBSbM4EkmamcT9F2wIgpA/viewform",
    targetBlank: true,
  },
  {
    id: 3,
    imageUrl:
      "/child.jpg",
    title: "مقاييس نفسية",
    description:
      "تقديم استشارات ودعم نفسي واجتماعي لمساعدة الأبناء في التغلب على التحديات الدراسية والشخصية.",
    href: "https://www.moh.gov.sa/HealthAwareness/MedicalTools/Pages/Anxiety.aspx?utm_source=chatgpt.com",
    targetBlank: true,
  },
];

const ParentFeatures = () => {
  return (
     <div className="p-6">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {demoCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col group"
          >
            {/* صورة */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* المحتوى */}
            <div className="flex flex-col flex-grow p-5">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm flex-grow">
                {card.description}
              </p>

              <Link
                to={card.href}
                className="mt-4 inline-flex items-center text-[#a6a6a6] font-semibold hover:text-[#44828f] transition"
              >
                تعرف أكثر
                <motion.span
                  className="m-3 inline-flex"
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    ease: "easeIn",
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentFeatures;
