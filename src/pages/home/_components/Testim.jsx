"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../../../components/ui/card";
import { CheckCircle } from "lucide-react";

const testimonials = [
  {
    name: "أحمد المالكي",
    role: "طالب جامعي",
    quote: "ساعدني مسار المستقبل في اختيار تخصصي الجامعي بثقة كاملة",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "سارة العتيبي",
    role: "خريجة ثانوية",
    quote: "اختبار المسار المهني كان دقيق جداً وأعطاني رؤية واضحة",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "محمد القحطاني",
    role: "محترف",
    quote: "استشارات مميزة ساعدتني في التحول المهني بنجاح",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="py-5 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 text-center">
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-xl rounded-3xl bg-white border border-gray-100">
                <CardContent className="py-6  flex flex-col items-center">
                  {/* صورة المستخدم (Avatar) */}
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="h-20 w-20 rounded-full object-cover shadow-md mb-6"
                  />

                  {/* النجوم */}
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* الاقتباس */}
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed italic">
                    “{testimonial.quote}”
                  </p>

                  {/* الاسم والدور */}
                  <div>
                    <div className="font-semibold text-[#00324D] text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Dots فقط */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full ${
                  i === index ? "bg-[#007BA7]" : "bg-gray-300"
                }`}
                whileHover={{ scale: 1.2 }}
                animate={{
                  scale: i === index ? 1.2 : 1,
                  opacity: i === index ? 1 : 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
