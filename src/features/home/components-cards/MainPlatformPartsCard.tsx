import Link from "next/link";

interface MainPlatformPartsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function MainPlatformPartsCard({
  icon,
  title,
  description,
  href,
}: MainPlatformPartsCardProps) {
  return (
    <Link
      href={href}
      className="
        flex flex-col justify-center items-center text-center gap-2
        rounded-[12px] bg-white border border-[#E2E8F0]
        transition-shadow hover:shadow-md hover:shadow-[#A56D2C]
        p-4
      "
    >
      <div className="w-16 h-16 bg-[#A56D2C]/10 rounded-full flex justify-center items-center">
        <div className="w-6 h-6 flex justify-center items-center">
          {icon}
        </div>
      </div>

      <span
        className="
          mt-2 font-bold
          text-base sm:text-sm md:text-sm lg:text-sm
          text-[#0F172A]
        "
      >
        {title}
      </span>

      <span
        className="
          text-sm sm:text-xs md:text-xs lg:text-xs
          text-[#64748B]
        "
      >
        {description}
      </span>
    </Link>
  );
}
