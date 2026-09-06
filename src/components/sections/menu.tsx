import { MenuCard } from "../common/menu-card";
import coneNutinhoMorango from "@/assets/images/cone-nutinho-morango.png";
import coneOvomaltine from "@/assets/images/cone-ovomaltine.png";
import coneOreo from "@/assets/images/cone-oreo.png";

export function Menu() {
  return (
    <section className="py-12 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-accent text-2xl text-secondary">cardápio</h2>
          <h1 className="text-primary font-heading font-bold text-5xl sm:text-6xl lg:text-7xl pb-3">Menu</h1>
          <p className="text-quaternary lg:text-lg">Cada coninho é montado na hora. Toque em uma foto para ver os detalhes.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:flex-wrap lg:grow-4">
          <MenuCard 
            favlorName="brigadeiro"
            description="Crocantíssima casquinha de baunilha recheada com brigadeiro caseiro, coberta com gotas de chocolate ou disquete."
            price="7"
            image={coneOvomaltine}
            imageAlt="Cone com recheio de brigadeiro"
          />

          <MenuCard 
            favlorName="KitKat"
            description="Casquinha de baunilha recheada com pasta de Kit Kat, finalizada com pedaços do chocolate."
            price="9"
            image={coneOreo}
            imageAlt="Cone com recheio de KitKat"
          />

          <MenuCard 
            favlorName="Ouro Branco"
            description="Casquinha de baunilha com brigadeiro branco caseiro e pedaços de Ouro Branco, finalizada com chocolate."
            price="9"
            image={coneNutinhoMorango}
            imageAlt="Cone com recheio de Ouro Branco"
          />

          <MenuCard
            favlorName="Ovomaltine"
            description="Casquinha polvilhada com ovomaltine, recheada com creme caseiro do mesmo e finalizada com o pó."
            price="10"
            image={coneOvomaltine}
            imageAlt="Cone com recheio de Ovomaltine"
          />

          <MenuCard 
            favlorName="Oreo"
            description="Camadas de brigadeiro branco caseiro com pedaços de Oreo, finalizada com a bolacha."
            price="10"
            image={coneOreo}
            imageAlt="Cone com recheio do biscoito da marca Oreo"
          />

          <MenuCard
            favlorName="Nutinho c/ Morango"
            description="Camadas de Ninho, Nutella e pedaços de morango, finalizada com morango fresco."
            price="10"
            image={coneNutinhoMorango}
            imageAlt="Cone de creme de avelã com morango"
          />
        </div>
      </div>
    </section>
  );
}
