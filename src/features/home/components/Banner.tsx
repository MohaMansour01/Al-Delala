"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { heroImages } from "./heroImages";

export default function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative h-[550px] sm:h-[650px] md:h-[700px] lg:h-[750px] overflow-hidden">
      <Image
        src={heroImages[currentIndex]}
        alt="Hero"
        fill
        className="object-cover sm:object-contain transition-opacity duration-1000"
        priority
      />

      <div className="hidden sm:block absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-[#A56D2C]/15 to-transparent backdrop-blur-[60px]" />
      <div className="hidden sm:block absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-[#A56D2C]/15 to-transparent backdrop-blur-[60px]" />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        <div className="flex flex-col gap-5 max-w-2xl text-center">
          <h1 className="font-black text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
            أكبر منصة <span className="text-[#d99951]">سودانية</span> للبيع
            والشراء <span className="text-[#d99951]">والإعلانات</span>
          </h1>

          <p className="text-[#E2E8F0] text-sm sm:text-base md:text-lg leading-relaxed">
            تصفح آلاف الإعلانات يومياً في العقارات، السيارات، الوظائف
            والإلكترونيات والأثاث والخدمات في السودان
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
            <button
              onClick={() =>
                document.getElementById("main-platform-parts")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-white/10 border border-white/20 font-semibold text-white cursor-pointer hover:bg-white/20 transition-colors"
            >
              تصفح الفئات
            </button>
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-[#A56D2C] font-semibold text-white cursor-pointer transition-colors hover:bg-[#92521f]"
            >
              ابدأ البحث الآن
            </button>
          </div>

          <div
            className={`mt-6 flex justify-center transition-all duration-500 ease-in-out ${
              showSearch
                ? "opacity-100 translate-y-0 max-h-[200px]"
                : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
            }`}
          >
            <div className="bg-white/20 backdrop-blur-lg p-3 sm:p-4 rounded-lg flex gap-2 items-center shadow-xl w-full max-w-md sm:max-w-lg md:max-w-xl">
              <input
                type="text"
                placeholder="ابحث عن ما تريد..."
                className="flex-1 px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-white/30 bg-white/10 placeholder-white/70 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#A56D2C]"
              />
              <button className="bg-[#A56D2C] px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold text-white hover:bg-[#92521f] transition-colors text-sm sm:text-base">
                بحث
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
