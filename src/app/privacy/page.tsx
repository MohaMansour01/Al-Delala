"use client";

import Image from "next/image";
import BackgroundPaper from "../../assets/images/home-footer/european-empty-paper.png";

export default function PrivacyPage() {
  return (
    <div className="bg-[#F8F1E5] flex items-center justify-center relative overflow-hidden px-2 sm:px-0">
      
      <div className="relative w-[95%] sm:w-[1000px] h-[600px] sm:h-[750px] animate-fadeInUp">
        <Image
          src={BackgroundPaper}
          alt="Background Paper"
          fill
          className="object-contain"
          priority
        />

        <div className="absolute inset-0 flex flex-col text-[#bf8116] text-right w-[80%] sm:w-[65%] mt-[30%] sm:mt-[16%] text-xs sm:text-sm">
          
          <h1 className="text-lg sm:text-2xl underline font-bold mb-6 sm:mb-9 text-[#bf8116]">
            :سياسة الخصوصية
          </h1>

          <ul className="space-y-3 sm:space-y-3 leading-5 sm:leading-6">
            <li className="flex flex-row-reverse items-start gap-2">
              <span>⮜</span>
              <span>
                نحن في الدلالة نلتزم بحماية خصوصية جميع <br /> المستخدمين وضمان سرية بياناتهم
                الشخصية
              </span>
            </li>

            <li className="flex flex-row-reverse items-start gap-2">
              <span>⮜</span>
              <span>
                لا نقوم بمشاركة معلوماتك الشخصية مع أطراف <br /> ثالثة إلا في الحالات
                الضرورية لتقديم الخدمة <br /> أو وفقًا للقانون
              </span>
            </li>

            <li className="flex flex-row-reverse items-start gap-2">
              <span>⮜</span>
              <span>
                يتم استخدام بياناتك فقط لتحسين تجربة <br /> الاستخدام وتطوير المنصة،
                وتقديم خدمات <br /> أكثر ملاءمة لاحتياجاتك
              </span>
            </li>

            <li className="flex flex-row-reverse items-start gap-2">
              <span>⮜</span>
              <span>
                نحرص على تطبيق أحدث معايير الأمان لحماية <br /> معلوماتك من الوصول غير
                المصرح به أو <br /> الاستخدام غير القانوني
              </span>
            </li>

            <li className="flex flex-row-reverse items-start gap-2">
              <span>⮜</span>
              <span>
                باستخدامك المنصة، فإنك توافق على سياسة <br /> الخصوصية هذه، ونحتفظ بحق
                تعديلها <br /> أو تحديثها عند الحاجة
              </span>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}