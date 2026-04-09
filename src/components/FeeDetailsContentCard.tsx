interface FeeDetailsContentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeeDetailsContentCard({
  icon,
  title,
  description,
}: FeeDetailsContentCardProps) {
  return (
    <div className="w-[420px] flex flex-col justify-between gap-5 p-6 rounded-lg bg-white border border-[#F1F5F9] shadow-sm">
      <div className="flex items-center gap-2 justify-end">
        <h3 className="text-lg font-bold text-[#0F172A]">{title}</h3>
        <span className="text-[#A56D2C] w-6 h-6 flex items-center justify-center">
          {icon}
        </span>
      </div>
      <p className="text-sm leading-7 text-[#475569]">{description}</p>
    </div>
  );
}
