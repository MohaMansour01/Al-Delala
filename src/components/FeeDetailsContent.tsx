"use client";

import { useState } from "react";
import { AlertCircle, Banknote, Calculator, ShieldCheck } from "lucide-react";
import Link from "next/link";
import FeeDetailsContentCard from "./FeeDetailsContentCard";

export default function FeeDetailsContent() {
  const [amount, setAmount] = useState<number | "">("");
  const commission = amount ? (Number(amount) * 0.01).toFixed(2) : null;

  return (
    <section className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl flex flex-col items-center text-center gap-10">
        
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
            عمولة المنصة وحاسبة النسبة
          </h1>
          <p className="text-base sm:text-lg text-[#475569]">
            نحن نؤمن بالأمانة والشفافية في تعاملاتنا المالية لدعم استمرارية سوق السودان الأول
          </p>
        </div>

        <div className="w-full bg-[#8B5C25] rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-6 text-white">
          <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20">
            <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">قسم الأمانة (العهد)</h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl">
            &quot;أقسم بالله العظيم أن أدفع نسبة 1% من قيمة البيع لصالح منصة الدلالة في حال إتمام البيع عن طريق المنصة أو بسببها، وأن ألتزم بالأمانة في تبليغ قيمة البيع الحقيقية.&quot;
          </p>
          <Link
            href="/add-ad"
            className="px-6 sm:px-8 py-2 sm:py-3 bg-white rounded-lg font-bold text-[#A56D2C] hover:bg-gray-100 transition"
          >
            أوافق وأتعهد بالالتزام
          </Link>
        </div>

        <div className="w-full flex flex-col md:flex-row items-stretch justify-between gap-6">
          <FeeDetailsContentCard
            icon={<Banknote />}
            title="كيفية الدفع"
            description="يمكنك سداد العمولة بسهولة عبر بنكك، فوري، أو التحويل المباشر لحسابات المنصة الرسمية."
          />
          <FeeDetailsContentCard
            icon={<AlertCircle />}
            title="لماذا العمولة؟"
            description="تساعد العمولة في تغطية تكاليف تشغيل المنصة، تطوير التطبيق، وضمان وصول إعلاناتك لأكبر عدد من المشترين في السودان."
          />
        </div>

        <div className="w-full flex flex-col gap-6 sm:gap-8 p-6 sm:p-10 rounded-2xl bg-white border border-[#F1F5F9]">
          <div className="flex items-center justify-between py-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#A56D2C]/10">
              <Calculator className="w-6 h-6 sm:w-7 sm:h-7 text-[#A56D2C]" />
            </div>
            <div className="flex flex-col gap-2 text-right">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                حاسبة عمولة الدلالة (1%)
              </h2>
              <p className="text-sm sm:text-base text-[#64748B]">
                أدخل مبلغ البيع لمعرفة العمولة المستحقة
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-right">
            <label className="font-semibold text-[#0F172A]">مبلغ البيع</label>
            <input
              type="number"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value ? Number(e.target.value) : "")
              }
              className="border rounded-md p-2 sm:p-3 text-right focus:outline-none focus:ring-2 focus:ring-[#A56D2C]"
              placeholder="أدخل المبلغ بالجنيه"
            />
          </div>

          {commission && (
            <div className="bg-[#A56D2C]/10 border border-[#A56D2C]/20 rounded-lg p-4 text-center">
              <p className="text-base sm:text-lg font-bold text-[#0F172A]">
                العمولة المستحقة:{" "}
                <span className="text-[#A56D2C]">{commission} جنيه</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
