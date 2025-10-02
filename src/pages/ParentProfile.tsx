import React, { useState } from "react";
import {
  UserCircle,
  Book,
  ClipboardCheck,
  Calendar,
  Printer,
} from "lucide-react";

type Child = {
  id: number;
  name: string;
  grade: string;
  studentId: string;
  avatar: string;
  scores: { subject: string; score: number; grade: string }[];
  attendance: { presentDays: number; absentDays: number };
  developmentReports: { title: string; description: string; fileUrl: string }[];
  activities: string[];
};

type Parent = {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  children: Child[];
};

const parentData: Parent = {
  name: "أ. عبد العزيز ال نايف",
  email: "parent@example.com",
  phone: "01012345678",
  avatar: "father-2.jpg",
  children: [
    {
      id: 1,
      name: "أحمد بن عبد العزيز",
      grade: "الثاني الثانوي",
      studentId: "1001",
      avatar: "kid-prof.jpg",
      scores: [
        { subject: "الرياضيات", score: 95, grade: "ممتاز" },
        { subject: "الفيزياء", score: 88, grade: "جيد جدًا" },
      ],
      attendance: { presentDays: 180, absentDays: 5 },
      developmentReports: [
        { title: "تقرير التطوير الشخصي", description: "ملخص التطوير والإنجازات", fileUrl: "#" },
      ],
      activities: ["مشروع العلوم", "نشاط كرة القدم الأسبوعي"],
    },
    {
      id: 2,
      name: "خدبجة بنت عبد العزيز",
      grade: "الأول الثانوي",
      studentId: "1002",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      scores: [
        { subject: "اللغة العربية", score: 90, grade: "ممتاز" },
        { subject: "اللغة الإنجليزية", score: 85, grade: "جيد جدًا" },
      ],
      attendance: { presentDays: 170, absentDays: 8 },
      developmentReports: [
        { title: "تقرير التطوير الشخصي", description: "ملخص التطوير والإنجازات", fileUrl: "#" },
      ],
      activities: ["مشروع اللغة العربية", "نشاط الرسم الأسبوعي"],
    },
  ],
};

const ParentDashboard: React.FC = () => {
  const [selectedChild, setSelectedChild] = useState<Child | "all">("all");

  const printReport = (child: Child | "all") => {
    const buildChildContent = (c: Child) => `
      <div class="child-card">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
          <img src="${c.avatar}" alt="${c.name}" style="width:60px; height:60px; border-radius:50%; object-fit:cover; border:2px solid #1a73e8;">
          <h2 style="margin:0; font-size:18px; color:#1a73e8;">${c.name}</h2>
        </div>

        <!-- الدرجات -->
        <div style="margin-bottom:10px;">
          <h3>الدرجات</h3>
          <table>
            <thead>
              <tr>
                <th>المادة</th>
                <th>الدرجة</th>
                <th>التقدير</th>
              </tr>
            </thead>
            <tbody>
              ${c.scores.map(s => `
                <tr>
                  <td>${s.subject}</td>
                  <td>${s.score}</td>
                  <td>${s.grade}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <!-- الحضور -->
        <div style="margin-bottom:10px;">
          <h3>الحضور</h3>
          <p>الأيام الحاضرة: ${c.attendance.presentDays} يوم</p>
          <p>الأيام الغائبة: ${c.attendance.absentDays} يوم</p>
        </div>

        <!-- التطوير -->
        <div style="margin-bottom:10px;">
          <h3>التقارير وخطط التطوير</h3>
          ${c.developmentReports.length > 0 ? `<ul>${c.developmentReports.map(r => `<li>${r.title}: ${r.description}</li>`).join("")}</ul>` : "<p>لا توجد بيانات</p>"}
        </div>

        <!-- الأنشطة -->
        <div style="margin-bottom:10px;">
          <h3>الأنشطة والنماذج</h3>
          ${c.activities.length > 0 ? `<ul>${c.activities.map(a => `<li>${a}</li>`).join("")}</ul>` : "<p>لا توجد بيانات</p>"}
        </div>
      </div>
    `;

    const content =
      child === "all"
        ? parentData.children.map(buildChildContent).join("<hr style='margin:20px 0;'/>")
        : buildChildContent(child);

    const newWindow = window.open("", "", "width=1000,height=800");
    if (!newWindow) return;

    newWindow.document.write(`
      <html lang="ar" dir="rtl">
        <head>
          <meta charset="UTF-8">
          <title>تقرير ${child === "all" ? "جميع الأبناء" : child.name}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #333; background:#f9f9f9; }
            h2 { color: #1a73e8; margin-bottom:5px; }
            h3 { color: #1a73e8; margin-top:10px; margin-bottom:5px; font-size:16px; }
            table { width:100%; border-collapse:collapse; margin-top:5px; }
            th, td { border:1px solid #ddd; padding:6px; text-align:center; font-size:13px; }
            th { background-color:#1a73e8; color:white; }
            .child-card { border-radius:12px; padding:15px; margin-bottom:20px; background-color:white; box-shadow:0 2px 6px rgba(0,0,0,0.1); }
            ul { padding-left: 20px; }
            hr { border:none; border-top:1px solid #ccc; margin:20px 0; }
          </style>
        </head>
        <body>
          ${content}
          <script>window.onload=function(){window.print();}</script>
        </body>
      </html>
    `);

    newWindow.document.close();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 my-[45px]" dir="rtl">
      {/* بطاقة ولي الأمر */}
      <div className="max-w-5xl mx-auto bg-[#23598b60] p-5 md:p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
        <img
          src={parentData.avatar}
          alt="ولي الأمر"
          className="w-28 h-28 rounded-full shadow-md object-cover border-4 border-[#b19d73a1]"
        />
        <div className="flex-1 space-y-2 text-center sm:text-right">
          <h1 className="text-2xl font-bold text-[#234463]">{parentData.name}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm">
            <p><strong>البريد الإلكتروني:</strong> {parentData.email}</p>
            <p><strong>عدد الأبناء:</strong> {parentData.children.length}</p>
          </div>
        </div>
      </div>

      {/* أزرار التقرير + زر طباعة شامل */}
      <div className="max-w-5xl mx-auto flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => printReport("all")}
          className="flex-1 py-2 rounded-xl font-semibold transition text-sm bg-green-600 text-white hover:bg-green-700 shadow flex items-center justify-center gap-1"
        >
          <Printer className="w-4 h-4" /> طباعة جميع الأبناء
        </button>

        <button
          onClick={() => setSelectedChild("all")}
          className={`flex-1 py-2 rounded-xl font-semibold transition text-sm ${
            selectedChild === "all"
              ? "bg-[#243d63] text-white"
              : "bg-white text-[#243d63] shadow hover:shadow-md"
          }`}
        >
          تقرير شامل لجميع الأبناء
        </button>

        {parentData.children.map((child) => (
          <button
            key={child.id}
            onClick={() => setSelectedChild(child)}
            className={`flex-1 py-2 rounded-xl font-semibold transition text-sm ${
              selectedChild !== "all" && selectedChild.id === child.id
                ? "bg-[#243d63] text-white"
                : "bg-white text-[#243d63] shadow hover:shadow-md"
            }`}
          >
            {child.name}
          </button>
        ))}
      </div>

      {/* عرض التقارير */}
      <div className="max-w-5xl mx-auto space-y-6">
        {(selectedChild === "all" ? parentData.children : [selectedChild]).map((child) => (
          <div
            key={child.id}
            id={`child-report-${child.id}`}
            className="bg-white rounded-xl shadow-md p-4"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold text-[#243d63]">{child.name} - تقرير شامل</h2>
              <button
                onClick={() => printReport(child)}
                className="flex items-center gap-1 bg-[#243d63] text-white px-3 py-1 rounded-md transition text-sm"
              >
                <Printer className="w-4 h-4" /> طباعة
              </button>
            </div>

            {/* الدرجات */}
            <div className="mb-3">
              <h3 className="text-base font-bold text-[#243d63] flex items-center gap-1">
                <Book className="w-4 h-4" /> الدرجات
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-gray-700 text-sm">
                  <thead>
                    <tr className="bg-[#243d63]  text-white">
                      <th className="px-3 py-1">المادة</th>
                      <th className="px-3 py-1">الدرجة</th>
                      <th className="px-3 py-1">التقدير</th>
                    </tr>
                  </thead>
                  <tbody>
                    {child.scores.map((s, idx) => (
                      <tr key={idx} className="border-b hover:bg-blue-50 transition">
                        <td className="px-3 py-1">{s.subject}</td>
                        <td className="px-3 py-1">{s.score}</td>
                        <td className="px-3 py-1">{s.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* الحضور */}
            <div className="flex flex-col md:flex-row gap-3 mb-3 text-center">
              <div className="bg-gray-100 flex-1 p-2 rounded-xl shadow text-sm">
                <h3 className="text-[#243d63] font-semibold mb-1 flex items-center justify-center gap-1">
                  <Calendar className="w-4 h-4" /> الأيام الحاضرة
                </h3>
                <p className="text-gray-700 font-bold">{child.attendance.presentDays} يوم</p>
              </div>
              <div className="bg-gray-100 flex-1 p-2 rounded-xl shadow text-sm">
                <h3 className="text-[#243d63] font-semibold mb-1 flex items-center justify-center gap-1">
                  <Calendar className="w-4 h-4" /> الأيام الغائبة
                </h3>
                <p className="text-gray-700 font-bold">{child.attendance.absentDays} يوم</p>
              </div>
            </div>

            {/* التقارير وخطط التطوير */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {child.developmentReports.map((report, idx) => (
                <a
                  key={idx}
                  href={report.fileUrl}
                  target="_blank"
                  className="bg-gray-50 p-3 rounded-xl shadow flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition text-sm"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <ClipboardCheck className="w-4 h-4 text-green-600" />
                    <h3 className="font-bold text-gray-800">{report.title}</h3>
                  </div>
                  <p className="text-gray-600">{report.description}</p>
                </a>
              ))}
            </div>

            {/* الأنشطة */}
            <div className="mt-3">
              <h3 className="text-base font-bold text-[#243d63] mb-1">الأنشطة والنماذج</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                {child.activities.map((act, idx) => (
                  <li key={idx}>{act}</li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentDashboard;
