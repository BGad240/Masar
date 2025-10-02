import React from "react";
import { Cake, MapPin, User } from "lucide-react";
import { Book, Mail, Phone } from "lucide-react";
type StudentProfileProps = {
  student?: {
    name: string;
    grade: string;
    studentId: string;
    email: string;
    phone: string;
    birthDate: string;
    address: string;
    gender: string;
    avatar: string;
    attendance: {
      presentDays: number;
      absentDays: number;
    };
    scores: {
      subject: string;
      score: number;
      grade: string;
    }[];
  };
};

const defaultStudent = {
  name: "أحمد بن عبد العزيز",
  grade: "الثاني الابتدائي",
  studentId: "12345",
  email: "mohamed@example.com",
  phone: "01012345678",
  birthDate: "15 مارس 2014",
  address: "جدة , المملكة العربية السعودية",
  gender: "ذكر",
  avatar: "kid-prof.jpg",
  attendance: {
    presentDays: 180,
    absentDays: 5,
  },
  scores: [
    { subject: "الحساب", score: 95, grade: "ممتاز" },
    { subject: "التجويد", score: 88, grade: "جيد جدًا" },
    { subject: "القران", score: 92, grade: "ممتاز" },
    { subject: "اللغة الإنجليزية", score: 85, grade: "جيد جدًا" },
    { subject: "اللغة العربية", score: 90, grade: "ممتاز" },
  ],
};

const StudentProfile: React.FC<StudentProfileProps> = ({
  student = defaultStudent,
}) => {
  const printProfile = () => {
    const content = document.getElementById("profile-content")?.innerHTML;
    if (!content) return;

    const newWindow = window.open("", "", "width=800,height=600");
    if (!newWindow) return;

    const formattedContent = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
      <img src="${
        student.avatar
      }" alt="صورة الطالب" style="width:120px; height:120px; border-radius: 50%; border: 3px solid #1e3a8a; object-fit: cover;">
      <div>
        <h2 style="margin:0; font-size: 24px; color: #1e3a8a;">${
          student.name
        }</h2>
        <p style="margin:4px 0;">الصف: ${student.grade}</p>
        <p style="margin:4px 0;">رقم الطالب: ${student.studentId}</p>
        <p style="margin:4px 0;">البريد الإلكتروني: ${student.email}</p>
        <p style="margin:4px 0;">الهاتف: ${student.phone}</p>
      </div>
    </div>

    <div style="margin-bottom: 20px;">
      <h3 style="color:#1e3a8a; border-bottom:2px solid #1e3a8a; display:inline-block; padding-bottom:2px;">معلومات شخصية</h3>
      <p>تاريخ الميلاد: ${student.birthDate}</p>
      <p>العنوان: ${student.address}</p>
      <p>الجنس: ${student.gender}</p>
    </div>

    <div style="margin-bottom: 20px;">
      <h3 style="color:#1e3a8a; border-bottom:2px solid #1e3a8a; display:inline-block; padding-bottom:2px;">الدرجات</h3>
      <table style="width:100%; border-collapse: collapse; margin-top:10px;">
        <thead>
          <tr style="background-color:#1e3a8a; color:white;">
            <th style="padding:8px; border:1px solid #ddd;">المادة</th>
            <th style="padding:8px; border:1px solid #ddd;">الدرجة</th>
            <th style="padding:8px; border:1px solid #ddd;">التقدير</th>
          </tr>
        </thead>
        <tbody>
          ${student.scores
            .map(
              (s) => `
            <tr>
              <td style="padding:8px; border:1px solid #ddd;">${s.subject}</td>
              <td style="padding:8px; border:1px solid #ddd;">${s.score}</td>
              <td style="padding:8px; border:1px solid #ddd;">${s.grade}</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    </div>

    <div style="display:flex; gap:20px;">
      <div style="flex:1; padding:10px; border-radius:10px; background:#f0f4f8; text-align:center;">
        <h3 style="color:#1e3a8a;">الأيام الحاضرة</h3>
        <p style="font-weight:bold; font-size:18px;">${
          student.attendance.presentDays
        } يوم</p>
      </div>
      <div style="flex:1; padding:10px; border-radius:10px; background:#f0f4f8; text-align:center;">
        <h3 style="color:#1e3a8a;">الأيام الغائبة</h3>
        <p style="font-weight:bold; font-size:18px;">${
          student.attendance.absentDays
        } يوم</p>
      </div>
    </div>
  </div>
`;

    newWindow.document.write(`
  <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>تقرير الطالب</title>
    </head>
    <body>
      ${formattedContent}
      <script>
        window.onload = function() { window.print(); }
      </script>
    </body>
  </html>
`);

    newWindow.document.close();
  };

  return (
    <div
      className="max-w-5xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-lg my-[40px]"
      id="profile-content"
    >
      {/* Header */}
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8 gap-6 bg-[#23598b60] p-6 rounded-2xl shadow-lg">
        <img
          src={student.avatar}
          alt="صورة الطالب"
          className="w-36 h-36 rounded-full object-cover border-4 border-[#b19d73a1] shadow-md"
        />
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold text-gray-700">{student.name}</h2>

          <div className="flex flex-col gap-3 text-gray-700">
            {/* الصف */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Book className="w-5 h-5 text-[#0e5677]" />
              <span className="font-semibold">الصف:</span>
              <span>{student.grade}</span>
            </div>

            {/* الهاتف */}
          </div>
        </div>
      </div>

      {/* معلومات شخصية */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* بطاقة تاريخ الميلاد */}
        <div className="bg-[#95a1ac60] p-5 rounded-2xl shadow-md hover:shadow-xl transition flex items-center gap-4">
          <div className="bg-[#71a1cebd] text-[#245079] p-3 rounded-full flex items-center justify-center">
            <Cake className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-[#245079] font-semibold text-lg">
              تاريخ الميلاد
            </h3>
            <p className="text-gray-700 font-medium mt-1">
              {student.birthDate}
            </p>
          </div>
        </div>

        {/* بطاقة العنوان */}
        <div className="bg-[#95a1ac60] p-5 rounded-2xl shadow-md hover:shadow-xl transition flex items-center gap-4">
          <div className="bg-[#71a1cebd] text-[#245079] p-3 rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-[#245079] font-semibold text-lg">العنوان</h3>
            <p className="text-gray-700 font-medium mt-1">{student.address}</p>
          </div>
        </div>

        {/* بطاقة الجنس */}
        <div className="bg-[#95a1ac60] p-5 rounded-2xl shadow-md hover:shadow-xl transition flex items-center gap-4">
          <div className="bg-[#71a1cebd] text-[#245079] p-3 rounded-full flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-[#245079] font-semibold text-lg">الجنس</h3>
            <p className="text-gray-700 font-medium mt-1">{student.gender}</p>
          </div>
        </div>
      </div>

      {/* الدرجات */}
<div className="mb-8">
  <h3 className="text-2xl font-bold text-[#243d63] mb-4 border-b-2 border-blue-300 inline-block pb-1">
    الدرجات
  </h3>

  <div className="mx-auto">
    <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden text-center ">
      <thead className="bg-[#243d63] text-white">
        <tr>
          <th className="px-6 py-3">المادة</th>
          <th className="px-6 py-3">الدرجة</th>
          <th className="px-6 py-3">التقدير</th>
        </tr>
      </thead>
      <tbody>
        {student.scores.map((s, idx) => {
          // تعيين لون خلفية الصف حسب التقدير
          let rowBg = "bg-white";
          if (s.grade === "ممتاز") rowBg = "bg-green-50";
          else if (s.grade === "جيد جدًا") rowBg = "bg-yellow-50";
          else if (s.grade === "جيد") rowBg = "bg-red-50";

          return (
            <tr
              key={idx}
              className={`${rowBg} border-b hover:bg-blue-50 transition`}
            >
              <td className="px-6 py-3">{s.subject}</td>
              <td className="px-6 py-3">{s.score}</td>
              <td className="px-6 py-3 font-semibold">{s.grade}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
</div>

      {/* الحضور */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="bg-white flex-1 p-4 rounded-xl shadow hover:shadow-md transition text-center">
          <h3 className="text-blue-600 font-semibold mb-2">الأيام الحاضرة</h3>
          <p className="text-gray-700 text-xl font-bold">
            {student.attendance.presentDays} يوم
          </p>
        </div>
        <div className="bg-white flex-1 p-4 rounded-xl shadow hover:shadow-md transition text-center">
          <h3 className="text-blue-600 font-semibold mb-2">الأيام الغائبة</h3>
          <p className="text-gray-700 text-xl font-bold">
            {student.attendance.absentDays} يوم
          </p>
        </div>
      </div>

      {/* زر الطباعة */}
      <div className="text-center">
        <button
          onClick={printProfile}
          className="bg-[#245079] text-white px-8 py-3 rounded-2xl hover:scale-105 transform transition-all shadow-lg"
        >
          طباعة التقرير الشخصي
        </button>
      </div>
    </div>
  );
};

export default StudentProfile;
