import { Club, Diamond, Heart, Spade } from "lucide-react";

export function Marquee() {
  return (
    <section className="overflow-hidden bg-primary w-full mt-14">
      <div className="flex py-3 md:py-5 animate-marquee w-max font-heading text-lg md:text-xl tracking-widest">
        <span className="uppercase flex gap-4 text-background whitespace-nowrap pr-4 items-center">
          Brigadeiro<Heart className="inline h-4 w-4 fill-secondary text-secondary" />
          KitKat<Spade className="inline h-4 w-4 fill-secondary text-secondary" />
          Ouro Branco<Diamond className="inline h-4 w-4 fill-secondary text-secondary" />
          Ovomaltine<Club className="inline h-4 w-4 fill-secondary text-secondary" />
          Oreo<Heart className="inline h-4 w-4 fill-secondary text-secondary" />
          Nutinho com Morango<Spade className="inline h-4 w-4 fill-secondary text-secondary" />
          Brigadeiro<Diamond className="inline h-4 w-4 fill-secondary text-secondary" />
          KitKat<Club className="inline h-4 w-4 fill-secondary text-secondary" />
          Ouro Branco<Heart className="inline h-4 w-4 fill-secondary text-secondary" />
          Ovomaltine<Spade className="inline h-4 w-4 fill-secondary text-secondary" />
          Oreo<Diamond className="inline h-4 w-4 fill-secondary text-secondary" />
          Nutinho com Morango<Club className="inline h-4 w-4 fill-secondary text-secondary" />
          Brigadeiro<Diamond className="inline h-4 w-4 fill-secondary text-secondary" />
          KitKat<Club className="inline h-4 w-4 fill-secondary text-secondary" />
          Ouro Branco<Heart className="inline h-4 w-4 fill-secondary text-secondary" />
          Ovomaltine<Spade className="inline h-4 w-4 fill-secondary text-secondary" />
          Oreo<Diamond className="inline h-4 w-4 fill-secondary text-secondary" />
          Nutinho com Morango<Club className="inline h-4 w-4 fill-secondary text-secondary" />
        </span>
        <span className="uppercase flex gap-4 text-background whitespace-nowrap items-center">
          Brigadeiro<Heart className="inline h-4 w-4 fill-secondary text-secondary" />
          KitKat<Spade className="inline h-4 w-4 fill-secondary text-secondary" />
          Ouro Branco<Diamond className="inline h-4 w-4 fill-secondary text-secondary" />
          Ovomaltine<Club className="inline h-4 w-4 fill-secondary text-secondary" />
          Oreo<Heart className="inline h-4 w-4 fill-secondary text-secondary" />
          Nutinho com Morango<Spade className="inline h-4 w-4 fill-secondary text-secondary" />
          Brigadeiro<Diamond className="inline h-4 w-4 fill-secondary text-secondary" />
          KitKat<Club className="inline h-4 w-4 fill-secondary text-secondary" />
          Ouro Branco<Heart className="inline h-4 w-4 fill-secondary text-secondary" />
          Ovomaltine<Spade className="inline h-4 w-4 fill-secondary text-secondary" />
          Oreo<Diamond className="inline h-4 w-4 fill-secondary text-secondary" />
          Nutinho com Morango<Club className="inline h-4 w-4 fill-secondary text-secondary" />
          Brigadeiro<Diamond className="inline h-4 w-4 fill-secondary text-secondary" />
          KitKat<Club className="inline h-4 w-4 fill-secondary text-secondary" />
          Ouro Branco<Heart className="inline h-4 w-4 fill-secondary text-secondary" />
          Ovomaltine<Spade className="inline h-4 w-4 fill-secondary text-secondary" />
          Oreo<Diamond className="inline h-4 w-4 fill-secondary text-secondary" />
          Nutinho com Morango<Club className="inline h-4 w-4 fill-secondary text-secondary" />
        </span>
      </div>
    </section>
  );
}
