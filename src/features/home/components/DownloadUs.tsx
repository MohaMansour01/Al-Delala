import Image from "next/image";
import { Apple, Play } from "lucide-react";
import phoneImage from "../../../assets/images/home-footer/phone-image.png";

export default function DownloadUs() {
  return (
    <div className="max-w-[1248px] w-full mx-auto p-8 mt-6 sm:p-12 rounded-[16px] bg-[#A56D2C]/5 border border-[#A56D2C]/10">
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-8">
        <div className="w-full lg:w-1/2 h-[280px] sm:h-[400px] relative flex justify-center">
          <Image
            src={phoneImage}
            alt="phone image"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 text-center lg:text-right">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A]">
            حمل تطبيقنا الآن
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg lg:text-xl leading-relaxed">
            استمتع بأفضل العروض والخدمات مباشرة من هاتفك.
          </p>
          <div className="flex justify-center lg:justify-end gap-4 mt-4 flex-wrap">
            {/* (App Store) */}
            <button className="cursor-pointer flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 rounded-lg border border-[#A56D2C] bg-[#A56D2C] text-white font-semibold transition-colors hover:bg-[#A56D2C]/5 hover:text-[#92521f] hover:border-[#92521f]">
              <Apple className="w-5 h-5" />
              <span>App Store</span>
            </button>

            {/* (Google Play) */}
            <button className="cursor-pointer flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 rounded-lg border border-[#A56D2C] text-[#A56D2C] font-semibold transition-colors hover:bg-[#A56D2C] hover:text-white">
              <Play className="w-5 h-5" />
              <span>Google Play</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
