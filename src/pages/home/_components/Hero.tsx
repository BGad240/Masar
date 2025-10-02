import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    img: "/saudi-st.jpg",
    title: "تعليم أفضل لمستقبل مشرق",
    desc: "نوفر بيئة تعليمية حديثة تدعم إبداع الطلاب.",
  },
  {
    img: "/sd-st1.jpeg",
    title: "أنشطة ترفيهية متنوعة",
    desc: "التعليم مع المتعة يصنع الفارق.",
  },
  {
    img: "/last2.webp",
    title: "رعاية واهتمام",
    desc: "نهتم بتطوير مهارات الطالب في كل الجوانب.",
  },
];

const Hero = () => {
  return (
    <div className="w-full h-[90vh] relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[90vh]">
              {/* صورة الخلفية */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay متدرج أقوى */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00324D]/60 via-[#00324D]/40"></div>

              {/* النصوص في النص */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-20">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-xl md:text-3xl font-bold mb-4 drop-shadow-lg text-white"
                >
                  {slide.title}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3 }}
                  className="text-base md:text-lg mb-6 max-w-2xl text-[#c7c5c5]"
                >
                  {slide.desc}
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.6 }}
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-transparent border hover:bg-[#007BA7] px-6 py-2 rounded-lg text-white font-semibold shadow-lg transition cursor-pointer"
                >
                  اعرف المزيد
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
