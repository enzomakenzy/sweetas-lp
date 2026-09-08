import { Heart } from "lucide-react";

export function Quality() {
  return (
    <section className="bg-primary text-background px-4 py-12">
      <div>
        <div className="flex gap-3 text-background/70 items-center mb-3">
          <hr className="h-px w-10 bg-background/60 border-none"/>
          <p className="uppercase text-xs tracking-[0.2rem] font-extrabold">Nosso Jeito</p>
        </div>

        <h2 className="text-4xl font-heading font-bold mb-5">Qualidade em <span className="font-accent text-secondary">cada</span> mordida</h2>

        <p className="text-background/80 text-sm mb-6">Não é só um coninho. É receita de família, ingrediente premium e um capricho ridículo em cada camada.</p>

        <p className="flex items-center gap-2 uppercase text-sm font-bold text-background/70">
          <Heart size={16} className="text-secondary fill-secondary" /> 
          Feito com cuidado desde o começo.
        </p>
      </div>

      <div></div>
    </section>
  );
}