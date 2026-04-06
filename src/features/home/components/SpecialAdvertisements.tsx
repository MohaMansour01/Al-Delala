"use client";

import { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import SpecialAdvertisementsCard from "../components-cards/SpecialAdvertisementsCard";
import Image from "next/image";
import { specialAds } from "./specialAdvertisements";

export default function SpecialAdvertisements() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 300;
    const visibleCards =
      window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1;
    const scrollAmount = cardWidth * visibleCards;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col gap-6 p-8 mt-3">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 cursor-pointer rounded-md border border-[#E2E8F0] flex justify-center items-center"
          >
            <ArrowLeftIcon className="w-4 h-4 text-[#0F172A]" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 cursor-pointer rounded-md border border-[#E2E8F0] flex justify-center items-center"
          >
            <ArrowRightIcon className="w-4 h-4 text-[#0F172A]" />
          </button>
        </div>
        <div className="text-right flex flex-col gap-1">
          <h2 className="font-bold text-2xl text-[#0F172A]">إعلانات مميزة</h2>
          <p className="text-sm text-[#64748B]">
            أحدث وأفضل العروض المختارة لك في السودان
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar mt-4"
      >
        {specialAds.map((ad, idx) => (
          <SpecialAdvertisementsCard
            key={idx}
            postImage={
              <Image
                src={ad.image}
                alt={ad.alt}
                fill
                className="object-cover rounded-t-[8px]"
              />
            }
            title={ad.title}
            price={ad.price}
            location={ad.location}
            whenPosted={ad.whenPosted}
            category={ad.category}
          />
        ))}
      </div>
    </div>
  );
}