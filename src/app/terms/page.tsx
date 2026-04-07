"use client";

import Image from "next/image";
import BackgroundPaper from "../../assets/images/home-footer/european-empty-paper.png";

export default function TermsPage() {
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
            :الشروط والأحكام
          </h1>

          <ul className="space-y-3 sm:space-y-3 leading-5 sm:leading-6">
            <li className="flex flex-row-reverse items-start gap-2">
              <span>⮜</span>
              <span>
                باستخدامك منصة الدلالة، فإنك توافق على الالتزام <br /> بجميع القوانين واللوائح
                المحلية والدولية ذات الصلة
              </span>
            </li>

            <li className="flex flex-row-reverse items-start gap-2">
              <span>⮜</span>
              <span>
                يجب أن تكون جميع المنتجات والخدمات المعروضة <br /> قانونية ولا تنتهك حقوق الملكية
                الفكرية <br /> أو القوانين المعمول بها
              </span>
            </li>

            <li className="flex flex-row-reverse items-start gap-2">
              <span>⮜</span>
              <span>
                يتحمل المستخدم المسؤولية الكاملة عن دقة <br /> المعلومات التي يقدمها عند البيع أو
                الشراء <br /> عبر المنصة
              </span>
            </li>

            <li className="flex flex-row-reverse items-start gap-2">
              <span>⮜</span>
              <span>
                تحتفظ الدلالة بحق تعديل أو تحديث هذه الشروط في <br /> أي وقت، ويُعتبر استمرار
                استخدامك للمنصة <br /> موافقة على التعديلات
              </span>
            </li>

            <li className="flex flex-row-reverse items-start gap-2">
              <span>⮜</span>
              <span>
                أي إساءة استخدام أو محاولة للإضرار بالمنصة <br /> أو مستخدميها قد تؤدي إلى تعليق أو
                إلغاء <br /> الحساب بشكل دائم
              </span>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}