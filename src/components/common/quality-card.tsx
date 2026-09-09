import type { LucideIcon } from "lucide-react";

interface Props {
  position: "01" | "02" | "03";
  cardTitle: string;
  description: string;
  icon: LucideIcon;
}

export function QualityCard({ position, cardTitle, description, icon: Icon }: Props) {
  return (
    <div className="relative flex gap-5 bg-primary-quality hover:bg-primary-quality-accent border border-primary-quality-border rounded-2xl transition duration-300 overflow-hidden group">
      <div className="absolute w-2 rounded-full bg-secondary -left-1 top-1/2 -translate-y-1/2 h-[70%] transition-all duration-300 group-hover:h-[80%]"></div>

      <h3 className="font-accent text-secondary text-6xl pl-5 py-7 lg:py-9">{position}</h3>

      <div className="pr-5 py-7 sm:pr-0 lg:py-9">
        <h4 className="font-heading font-bold text-2xl mb-2 lg:text-3xl">{cardTitle}</h4>
        <p className="text-sm text-background/80 lg:text-base">{description}</p>
      </div>

      <Icon size={20} className="hidden transition-all duration-300 sm:block ml-auto mr-7 fill-primary-quality-border text-primary-quality-border my-8 group-hover:fill-secondary group-hover:text-secondary group-hover:scale-115" />      
    </div>
  );
}