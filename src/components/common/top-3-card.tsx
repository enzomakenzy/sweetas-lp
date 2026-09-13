import { listStars } from "@/utils/list-stars";
import { Heart } from "lucide-react";

type Props = {
  position: number;
  favlorName: string;
  description: string;
  image: string;
  imageAlt: string;
  className: string
};

export function Top3Card({ position, favlorName, description, image, imageAlt, className }: Props) {
  const color = position === 1 ? "WHITE" : "RED";

  return (
    <div className={`${position === 1 ? "bg-primary" : "bg-background"} rounded-2xl px-5 py-6 flex flex-col gap-5 shadow lg:hover:shadow-xl relative overflow-hidden transition lg:hover:-translate-y-3 duration-400 group ${className}`}>
      <p className={`${position === 1 ? "text-background/20" : "text-primary/20"} absolute -right-5 -top-16 text-[142px] font-bold z-0`}>{position}</p>

      <div className="flex items-center justify-between">
        <p className={`${position === 1 ? "bg-background" : "bg-tertiary/12"} text-primary px-3 py-1 text-xs rounded-4xl font-bold`}>{position === 1 && "👑"} # {position}</p>

        <div className="flex gap-1">
          {listStars(color)}
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden">
        <img src={image} alt={imageAlt} className={`rounded-2xl w-full transition object-cover object-top duration-400 lg:group-hover:scale-105 lg:group-hover:-translate-y-3 ${position === 1 ? "sm:h-96 lg:h-auto" : "sm:h-76 lg:h-auto"}`} />

        {position === 1 && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-background px-3 py-1 rounded-4xl">
            <p className="uppercase font-bold text-xs text-primary tracking-[0.05rem]">Mais pedido</p>

            <Heart className="fill-tertiary text-tertiary w-3 h-3" />
          </div>
        )}
      </div>

      <div className="pb-1">
        <h4 className={`${position === 1 ? "text-background" : "text-primary"} text-2xl font-heading font-bold uppercase lg:text-3xl`}>{favlorName}</h4>

        <h4 className={`${position === 1 ? "text-background" : "text-secondary"} text-2xl/5 font-accent `}>{description}</h4>
      </div>
    </div>
  );
}
