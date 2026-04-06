"use client";

import { useState, ReactNode } from "react";
import { Heart } from "lucide-react";

interface SpecialAdvertisementsCardProps {
  postImage: ReactNode;
  title: string;
  price: string;
  location: string;
  whenPosted: string;
  category: string;
}

export default function SpecialAdvertisementsCard({
  postImage,
  title,
  price,
  location,
  whenPosted,
  category,
}: SpecialAdvertisementsCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-[240px] sm:w-[280px] md:w-[294px] h-[320px] sm:h-[340px] md:h-[362px] rounded-[8px] bg-white border border-[#E2E8F0] flex flex-col overflow-hidden flex-shrink-0">
      <div className="relative h-[140px] sm:h-[160px] md:h-[192px] w-full">
        {postImage}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-2 left-2 p-2 rounded-full bg-white shadow"
        >
          <Heart
            className="w-5 h-5"
            stroke="#A56D2C"
            fill={liked ? "#A56D2C" : "white"}
          />
        </button>
      </div>

      <div className="flex flex-col justify-between flex-1 p-2 sm:p-3 text-right">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-[#0F172A] text-xs sm:text-sm md:text-base">
            {title}
          </h3>
          <p className="text-[#A56D2C] font-bold text-sm sm:text-base">
            {price}
          </p>
          <p className="text-gray-500 text-[10px] sm:text-xs">{location}</p>
          <p className="text-gray-400 text-[10px] sm:text-xs">{whenPosted}</p>
        </div>

        <button className="mt-2 sm:mt-3 w-full py-1 sm:py-2 rounded-md border border-[#A56D2C] text-[#A56D2C] text-xs sm:text-sm md:text-base font-semibold hover:bg-[#92521f] hover:text-white transition-colors cursor-pointer">
          {category === "job" ? "قدم الآن" : "التفاصيل"}
        </button>
      </div>
    </div>
  );
}
