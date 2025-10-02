import React from "react";
import {
  FileText,
  ClipboardList,
  Users,
  ClipboardCheck,
  LayoutDashboard,
  UserCircle,
  Settings,
  Calendar,
} from "lucide-react";

import { Link } from "react-router-dom";

const FeaturesPage = () => {
  const mainFeatures = [
    {
      title: "تقارير تفصيلية",
      description: "تحليلات وبيانات دقيقة عن أداء الطلاب وسلوكهم.",
      icon: ClipboardCheck,
      color: "purple",
      href: "#detailed-reports",
    },
    {
      title: "إدارة الخطط",
      description: "نظام مرن لتخطيط ومتابعة الإنجاز في خطط العمل.",
      icon: Users,
      color: "rose",
      href: "#plan-management",
    },
    {
      title: "التقارير المشتركة",
      description: "منصة تعاونية لمشاركة ومراجعة التقارير الهامة.",
      icon: FileText,
      color: "teal",
      href: "#shared-reports",
    },
    {
      title: "جدول المواعيد",
      description: "متابعة وإدارة جلسات الإرشاد والمواعيد.",
      icon: Calendar,
      color: "blue",
      href: "#schedule",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 my-[45px]" dir="rtl">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#344c70] mb-2">
            ملف الموجه الطلابي
          </h1>
        </header>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* العمود الجانبي */}
          <aside className="lg:col-span-1 mb-8 lg:mb-0">
            <div className="bg-[#3f556934] p-6 rounded-3xl shadow-lg border hover:shadow-xl transition-all space-y-6">
              {/* صورة واسم الموجه */}
              <div className="flex flex-col items-center text-center">
                {/* صورة Placeholder */}
                <img
                  src="https://via.placeholder.com/100"
                  alt="صورة الموجه"
                  className="w-24 h-24 rounded-full shadow-md mb-3 object-cover"
                />
                <h2 className="text-lg md:text-xl font-bold text-gray-800">
                  أ. حمد القحطاني
                </h2>
                <p className="text-xs md:text-sm text-gray-800 mb-4">
                  موجه طلابي | المرحلة الثانوية
                </p>
                <div className="w-16 md:w-20 h-[2px] bg-blue-300 my-3 rounded-full"></div>
              </div>

              {/* روابط سريعة */}
              <nav className="space-y-3">
                <a
                  href="#profile-settings"
                  className="flex items-center text-sm md:text-base text-gray-800 transition p-3 rounded-xl hover:bg-blue-100 shadow-sm hover:shadow-md"
                >
                  <Settings className="w-5 h-5 ml-3 text-blue-500" />
                  إعدادات الملف الشخصي
                </a>
                <a
                  href="#contact-info"
                  className="flex items-center text-sm md:text-base text-gray-800 hover:text-blue-700 transition p-3 rounded-xl hover:bg-blue-100 shadow-sm hover:shadow-md"
                >
                  <ClipboardList className="w-5 h-5 ml-3 text-blue-500" />
                  بيانات التواصل
                </a>
              </nav>
            </div>
          </aside>

          {/* العمود الرئيسي */}
          <main className="lg:col-span-3 space-y-8">
            {/* لوحة التحكم السريعة */}
            <div>
              <h2 className="text-xl font-bold text-[#3a586b] mb-4">
                لوحة التحكم السريعة
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* بطاقة أدوات الموجه */}
                <Link
                  to="https://drive.google.com/file/d/1FXZ5SoRvQP8pzHvVeMDKudFIXIzR40fL/view"
                  target="_blank"
                  className="block group"
                >
                  <div className="bg-[#a9c8e4bd] rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
                    <LayoutDashboard className="w-12 h-12 text-blue-700 mb-3 md:mb-0 md:ml-4 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-blue-900 mb-1">
                        أدوات الموجه (الداشبورد)
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm mb-3">
                        متابعة السجلات، جدولة اللقاءات، وإدارة الفعاليات
                        اليومية.
                      </p>
                      {/* أيقونة الذهاب */}
                      <div className="text-blue-700 flex items-center gap-1 text-sm font-semibold">
                        الذهاب إلى
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* بطاقة الأدلة */}
                <Link
                  to="https://drive.google.com/file/d/1JywhvF32HuyFzryJkrEkiStBznf8GWSW/view"
                  target="_blank"
                  className="block group"
                >
                  <div className="bg-[#a9c8e4bd] rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
                    <ClipboardList className="w-12 h-12 text-cyan-700 mb-3 md:mb-0 md:ml-4 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-cyan-900 mb-1">
                        أدلة العمل الإرشادي
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm mb-3">
                        الخطوات التنفيذية والشروحات الموثقة للمهام الإرشادية.
                      </p>
                      {/* أيقونة الذهاب */}
                      <div className="text-cyan-700 flex items-center gap-1 text-sm font-semibold">
                        الذهاب إلى
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* الأقسام الرئيسية */}
            <div>
              <h2 className="text-xl font-bold text-[#3a586b] mb-4">
                الوصول السريع للأقسام
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {mainFeatures.map((feature) => (
                  <a
                    key={feature.title}
                    href={feature.href}
                    className="block group"
                  >
                    <div
                      className={`bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center transition duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100`}
                    >
                      {/* أيقونة داخل دائرة Gradient */}
                      <div
                        className={`w-12 h-12 flex items-center justify-center rounded-full mb-3 bg-gradient-to-tr from-${feature.color}-100 to-${feature.color}-200`}
                      >
                        {feature.color === "purple" && (
                          <feature.icon className="w-6 h-6 text-purple-700" />
                        )}
                        {feature.color === "rose" && (
                          <feature.icon className="w-6 h-6 text-rose-700" />
                        )}
                        {feature.color === "teal" && (
                          <feature.icon className="w-6 h-6 text-teal-700" />
                        )}
                        {feature.color === "blue" && (
                          <feature.icon className="w-6 h-6 text-blue-700" />
                        )}
                      </div>

                      {/* العنوان */}
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      {/* الوصف */}
                      <p className="text-gray-500 text-xs sm:text-sm hidden sm:block">
                        {feature.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
