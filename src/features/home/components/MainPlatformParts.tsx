"use client";

import MainPlatformPartsCard from "../components-cards/MainPlatformPartsCard";
import {
  Car,
  Home,
  Smartphone,
  Briefcase,
  Armchair,
  Wrench,
  Package,
  Shirt,
  Gift,
  GraduationCap,
  PawPrint,
  ShoppingBag,
  Gem,
  BookOpen,
  Search,
  Store,
  Dumbbell,
  HeartHandshake,
} from "lucide-react";

const categories = [
  { icon: Home, title: "العقارات", description: "بيوت، شقق، أراضي", href: "/real-state" },
  { icon: Car, title: "السيارات", description: "بيع وشراء سيارات", href: "/cars" },
  { icon: Armchair, title: "الأثاث", description: "منزل وديكور", href: "/furniture" },
  { icon: Smartphone, title: "الألكترونيات", description: "هواتف وكمبيوتر", href: "/electronics" },
  { icon: Briefcase, title: "الوظائف", description: "فرص عمل مميزة", href: "/jobs" },
  { icon: Wrench, title: "الخدمات", description: "خدمات مهنية متنوعة", href: "/services" },
  { icon: Package, title: "طلبات", description: "كل ما تحتاجه يصلك", href: "/delivery" },
  { icon: Shirt, title: "الملابس والأحذية", description: "موضة وأزياء", href: "/fashion" },
  { icon: ShoppingBag, title: "منتجات", description: "مستحضرات، أدوات، سلع متنوعة", href: "/products" },
  { icon: Gift, title: "مناسبات وأعراس", description: "حفلات وخدمات زفاف", href: "/events" },
  { icon: GraduationCap, title: "مؤسسات تعليمية", description: "جامعات، مدارس، دورات", href: "/education" },
  { icon: PawPrint, title: "حيوانات ومواشي", description: "بيع وشراء المواشي والحيوانات", href: "/animals" },
  { icon: Gem, title: "مجوهرات", description: "ذهب، فضة، إكسسوارات", href: "/jewelries" },
  { icon: BookOpen, title: "مكتبات", description: "أدوات مدرسية، روايات ومجلات", href: "/bookshops" },
  { icon: Search, title: "المفقودات", description: "إعلانات عن المفقودات", href: "/lost-items" },
  { icon: Store, title: "محلات هدايا", description: "هدايا متنوعة ومميزة", href: "/gift-stores" },
  { icon: HeartHandshake, title: "تبرعات", description: "مساعدات واعمال خيرية", href: "/donations" },
  { icon: Dumbbell, title: "رياضة وجيم", description: "نوادي رياضية، معدات، تدريبات", href: "/sports-gym" },
];

export default function MainPlatformParts() {
  return (
    <section
      id="main-platform-parts"
      className="w-full flex flex-col gap-6 p-6 mt-8"
    >
      <div className="text-right">
        <span className="font-bold text-xl sm:text-2xl text-[#0F172A]">
          الأقسام الرئيسية
        </span>
      </div>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {categories.map(({ icon: Icon, title, description, href }) => (
          <MainPlatformPartsCard
            key={href}
            icon={<Icon className="w-6 h-6 text-[#A56D2C]" />}
            title={title}
            description={description}
            href={href}
          />
        ))}
      </div>
    </section>
  );
}
