import { Club, Diamond, Heart, Spade } from "lucide-react";
import { QualityCard } from "../common/quality-card";

export function Quality() {
  return (
    <section className="bg-primary text-background px-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-15 items-center">
        <div>
          <div className="flex gap-3 text-background/70 items-center">
            <hr className="h-px w-10 bg-background/60 border-none"/>
            <p className="uppercase text-xs tracking-[0.2rem] font-extrabold">Nosso Jeito</p>
          </div>

          <h2 className="text-4xl font-heading font-bold mb-5 sm:text-5xl lg:text-6xl max-w-120 mt-3">Qualidade em <span className="font-accent text-secondary">cada</span> mordida</h2>

          <p className="text-background/80 text-sm mb-6 md:text-base">Não é só um coninho. É receita de família, ingrediente premium e um capricho ridículo em cada camada.</p>

          <p className="flex items-center gap-2 uppercase text-xs font-bold text-background/70 tracking-widest">
            <Heart size={14} className="text-secondary fill-secondary" /> 
            Feito com cuidado desde o começo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 mt-6">
          <QualityCard 
            position="01"
            cardTitle="totalmente artesanal"
            description="Cada coninho é montado à mão, na hora,com carinho e capricho."
            icon={Spade}
          />

          <QualityCard 
            position="02"
            cardTitle="Ingredientes premium"
            description="Chocolates, cremes e frutas selecionados para um sabor inesquecível."
            icon={Diamond}
          />

          <QualityCard 
            position="03"
            cardTitle="Receita da família"
            description="Recheios caseiros desenvolvidos com base em receitas tradicionais."
            icon={Club}
          />
        </div>
      </div>
    </section>
  );
}