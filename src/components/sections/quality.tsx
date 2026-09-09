import { Heart } from "lucide-react";
import { QualityCard } from "../common/quality-card";

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
        />

        <QualityCard 
          position="02"
          cardTitle="Ingredientes premium"
          description="Chocolates, cremes e frutas selecionados para um sabor inesquecível."
        />

        <QualityCard 
          position="03"
          cardTitle="Receita da família"
          description="Recheios caseiros desenvolvidos com base em receitas tradicionais."
        />
      </div>
    </section>
  );
}