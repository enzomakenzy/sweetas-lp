import { Heart, Star } from "lucide-react";

type Props = {
  position: number;
  favlorName: string;
  description: string;
  image: string;
  imageAlt: string;
  className: string
};

function listStars(position: number) {
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star className={`w-2.5 z-10 ${position === 1 ? "text-background fill-background" : "text-tertiary fill-tertiary"}`} />
    )
  }

  return stars
}

export function Top3Card({ position, favlorName, description, image, imageAlt, className }: Props) {
  return (
    <div className={`${position === 1 ? "bg-primary" : "bg-background"} rounded-2xl px-5 py-6 flex flex-col gap-5 shadow relative overflow-hidden transition-all duration-400 ${className}`}>
      <p className={`${position === 1 ? "text-background/20" : "text-primary/20"} absolute -right-5 -top-16 text-[142px] font-bold z-0`}>{position}</p>

      <div className="flex items-center justify-between">
        <p className={`${position === 1 ? "bg-background" : "bg-tertiary/12"} text-primary px-3 py-1 text-xs rounded-4xl font-bold`}>{position === 1 && "👑"} # {position}</p>

        <div className="flex gap-1">
          {listStars(position)}
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden">
        <img src={image} alt={imageAlt} className="rounded-2xl w-full transition duration-400 lg:hover:scale-108" />

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
