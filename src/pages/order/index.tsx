import coneNutinhoMorango from "@/assets/images/cone-nutinho-morango.png";
import coneOvomaltine from "@/assets/images/cone-ovomaltine.png";
import coneOreo from "@/assets/images/cone-oreo.jpg";
import coneBrigadeiro from "@/assets/images/cone-brigadeiro.jpg";
import coneKitkat from "@/assets/images/cone-kitkat.jpg";
import coneOuroBranco from "@/assets/images/core-ouro-branco.jpg";
import { OrderCard } from "@/components/common/order-card";

export default function Order() {
  return (
    <main className="bg-background p-4">
      <div>
        <section>
          <h2 className="font-heading font-bold text-xl uppercase text-primary mb-4">1. Escolha os Sabores</h2>
          
          <div className="flex flex-col gap-5">
            <OrderCard 
              image={coneBrigadeiro}
              imageAlt="Cone de brigadeiro"
              flavor="Brigadeiro"
              description="Crocantíssima casquinha de baunilha recheada com brigadeiro caseiro, coberta com gotas de chocolate ou disquete."
              price={7}
            />

            <OrderCard 
              image={coneKitkat}
              imageAlt="Cone de Kitkat"
              flavor="Kitkat"
              description="Crocantíssima casquinha de baunilha recheada com pasta de kitkat, finalizada com pedaços de chocolate."
              price={9}
            />

            <OrderCard 
              image={coneOuroBranco}
              imageAlt="Cone de Ouro Branco"
              flavor="Ouro Branco"
              description="Crocantíssima casquinha de baunilha recheada com brigadeiro branco caseiro e pedaços de ouro branco, finalizada com o chocolate."
              price={9}
            />
            
            <OrderCard 
              image={coneOvomaltine}
              imageAlt="Cone de Ovomaltine"
              flavor="Ovomaltine"
              description="Crocantíssima casquinha de baunilha polvilhada com ovomaltine, recheada com creme caseiro do mesmo e finalizada com o pó."
              price={9}
            />

            <OrderCard 
              image={coneOreo}
              imageAlt="Cone de Oreo"
              flavor="Oreo"
              description="Crocantíssima casquinha de baunilha, recheada com camadas de brigadeiro branco caseiro com pedaços de oreo, finalizada com a bolacha."
              price={10}
            />

            <OrderCard 
              image={coneNutinhoMorango}
              imageAlt="Cone de Nutinho c/ Morango"
              flavor="Nutinho c/ Morango"
              description="Crocantíssima casquinha de baunilha, recheada com camadas de ninho, nutella e pedaços de morango, finalizada com morango."
              price={10}
            />
          </div>
        </section>
      </div>
    </main>
  )
}
