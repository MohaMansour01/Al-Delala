"use client";

import Image from "next/image";
import BackgroundPaper from "../../assets/images/home-footer/european-empty-paper.png";

export default function AboutPage() {
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
            :من نحن
          </h1>

          <ul className="space-y-3 sm:space-y-4 leading-5 sm:leading-6">
            <li className="flex flex-row-reverse items-start gap-2">
              <span>⮜</span>
              <span>
                الدلالة هي منصة سوق حديثة تهدف إلى ربط <br /> المشترين والبائعين
                بكفاءة، موثوقية، وسهولة
              </span>
            </li>

            <li className="flex flex-row-reverse items-start gap-2">
              <span>⮜</span>
              <span>
                نسعى إلى تمكين الأفراد والشركات من <br /> عرض منتجاتهم وخدماتهم
                بأسلوب احترافي وآمن
              </span>
            </li>

            <li className="flex flex-row-reverse items-start gap-2">
              <span>⮜</span>
              <span>
                نؤمن بأن التجارة تتجاوز مفهوم البيع والشراء <br /> لتصبح وسيلة
                لبناء علاقات قائمة على الثقة <br /> والشفافية
              </span>
            </li>

            <li className="flex flex-row-reverse items-start gap-2">
              <span>⮜</span>
              <span>
                من خلال الدلالة، يمكنك استكشاف مجموعة متنوعة <br /> من الفئات
                مثل الموضة، الجمال، الفعاليات، التعليم، <br /> الحيوانات، الحرف
                اليدوية، الرياضة، والتبرعات
              </span>
            </li>

            <li className="flex flex-row-reverse items-start gap-2">
              <span>⮜</span>
              <span>
                نحن نحرص على توفير تجربة آمنة وسلسة لجميع <br /> المستخدمين مع
                دعم متواصل وخدمة عملاء فعّالة
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
