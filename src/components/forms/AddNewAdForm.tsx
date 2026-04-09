"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  { title: "العقارات" },
  { title: "السيارات" },
  { title: "الأثاث" },
  { title: "الألكترونيات" },
  { title: "الوظائف" },
  { title: "الخدمات" },
  { title: "طلبات" },
  { title: "الملابس والأحذية" },
  { title: "منتجات" },
  { title: "مناسبات وأعراس" },
  { title: "مؤسسات تعليمية" },
  { title: "حيوانات ومواشي" },
  { title: "مجوهرات" },
  { title: "مكتبات" },
  { title: "المفقودات" },
  { title: "محلات هدايا" },
  { title: "تبرعات" },
  { title: "رياضة وجيم" },
];

const states = [
  "الخرطوم",
  "الشمالية",
  "نهر النيل",
  "البحر الأحمر",
  "كسلا",
  "القضارف",
  "الجزيرة",
  "سنار",
  "النيل الأزرق",
  "النيل الأبيض",
  "شمال كردفان",
  "جنوب كردفان",
  "غرب كردفان",
  "شمال دارفور",
  "جنوب دارفور",
  "شرق دارفور",
  "وسط دارفور",
  "غرب دارفور",
];

interface FormData {
  title: string;
  category: string;
  location: string;
  description: string;
  images: File[];
  agree: boolean;
}

export default function AddNewAdForm() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    category: "",
    location: "",
    description: "",
    images: [],
    agree: false,
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        images: Array.from(e.target.files),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.category ||
      !formData.location ||
      !formData.description ||
      !formData.agree
    ) {
      alert("يرجى ملء جميع الحقول المطلوبة قبل الإرسال.");
      return;
    }

    if (formData.images.length < 5) {
      alert("يجب رفع 5 صور على الأقل للإعلان.");
      return;
    }

    alert("تم إرسال الإعلان بنجاح ✅");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-white rounded-xl shadow-lg flex flex-col gap-6 sm:gap-8 border border-gray-100"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] text-right border-b pb-3 sm:pb-4">
        إضافة إعلان جديد
      </h2>

      <div className="flex flex-col text-right">
        <label className="font-semibold mb-2 text-[#0F172A]">عنوان الإعلان</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="border rounded-md p-2 sm:p-3 text-right focus:outline-none focus:ring-2 focus:ring-[#A56D2C]"
          placeholder="اكتب عنوان الإعلان هنا"
          required
        />
      </div>

      <div className="flex flex-col text-right">
        <label className="font-semibold mb-2 text-[#0F172A]">القسم</label>
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="border rounded-md p-2 sm:p-3 text-right focus:outline-none focus:ring-2 focus:ring-[#A56D2C]"
          required
        >
          <option value="">اختر القسم</option>
          {categories.map((cat) => (
            <option key={cat.title} value={cat.title}>
              {cat.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col text-right">
        <label className="font-semibold mb-2 text-[#0F172A]">الموقع</label>
        <select
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
          className="border rounded-md p-2 sm:p-3 text-right focus:outline-none focus:ring-2 focus:ring-[#A56D2C]"
          required
        >
          <option value="">اختر الولاية</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col text-right">
        <label className="font-semibold mb-2 text-[#0F172A]">وصف الإعلان</label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="border rounded-md p-2 sm:p-3 text-right focus:outline-none focus:ring-2 focus:ring-[#A56D2C]"
          placeholder="اكتب تفاصيل الإعلان هنا"
          rows={4}
          required
        />
      </div>

      <div className="flex flex-col text-right">
        <label className="font-semibold mb-2 text-[#0F172A]">صور الإعلان</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          className="border rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-[#A56D2C]"
        />
        {formData.images.length > 0 && (
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 justify-end">
            {formData.images.map((file, idx) => (
              <div
                key={idx}
                className="w-20 h-20 sm:w-24 sm:h-24 border rounded-md overflow-hidden shadow-sm"
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={`preview-${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-end gap-2">
        <input
          type="checkbox"
          checked={formData.agree}
          onChange={(e) =>
            setFormData({ ...formData, agree: e.target.checked })
          }
          className="w-4 h-4 sm:w-5 sm:h-5 accent-[#A56D2C]"
          required
        />
        <span className="text-xs sm:text-sm text-gray-700">
          أتعهد بدفع نسبة 1% من قيمة البيع{" "}
          <Link
            href={"/fee-details"}
            className="text-[#A56D2C] underline hover:text-[#92521f]"
          >
            (اضغط هنا لمعرفة تفاصيل العمولة)
          </Link>
        </span>
      </div>

      <button
        type="submit"
        className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-[#A56D2C] text-white font-semibold hover:bg-[#92521f] transition-colors shadow-md"
      >
        إضافة الإعلان
      </button>
    </form>
  );
}
