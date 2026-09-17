import { Club, Diamond, Heart, Spade } from "lucide-react";

export function Marquee() {
  return (
    <section className="overflow-hidden bg-primary w-full mt-14">
      <div className="flex py-4 md:py-5 animate-marquee w-max font-sans font-bold text-white text-2xl md:text-[26px] tracking-widest">
        <span className="uppercase flex gap-4 whitespace-nowrap pr-4 items-center *:card">
          Brigadeiro<Heart />
          KitKat<Spade />
          Ouro Branco<Diamond />
          Ovomaltine<Club />
          Oreo<Heart />
          Nutinho com Morango<Spade />
          Brigadeiro<Diamond />
          KitKat<Club />
          Ouro Branco<Heart />
          Ovomaltine<Spade />
          Oreo<Diamond />
          Nutinho com Morango<Club />
          Brigadeiro<Diamond />
          KitKat<Club />
          Ouro Branco<Heart />
          Ovomaltine<Spade />
          Oreo<Diamond />
          Nutinho com Morango<Club />
        </span>
        <span className="uppercase flex gap-4 text-background whitespace-nowrap items-center *:card">
          Brigadeiro<Heart />
          KitKat<Spade />
          Ouro Branco<Diamond />
          Ovomaltine<Club />
          Oreo<Heart />
          Nutinho com Morango<Spade />
          Brigadeiro<Diamond />
          KitKat<Club />
          Ouro Branco<Heart />
          Ovomaltine<Spade />
          Oreo<Diamond />
          Nutinho com Morango<Club />
          Brigadeiro<Diamond />
          KitKat<Club />
          Ouro Branco<Heart />
          Ovomaltine<Spade />
          Oreo<Diamond />
          Nutinho com Morango<Club />
        </span>
      </div>
    </section>
  );
}
