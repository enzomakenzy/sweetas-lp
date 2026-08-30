import { Top3Card } from "../common/top-3-card";
import coneNutinhoMorango from "@/assets/images/cone-nutinho-morango.png";
import coneOvomaltine from "@/assets/images/cone-ovomaltine.png";
import coneOreo from "@/assets/images/cone-oreo.png";

export function Top3() {
  return (
    <section className="px-4 pt-16 md:px-11 lg:px-12 bg-quinary pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mx-auto justify-center">
          <div className="h-px w-7 bg-primary"></div>
          <h3 className="uppercase text-primary text-xs font-semibold tracking-[0.2rem]">Os Queridinhos</h3>
          <div className="h-px w-7 bg-primary"></div>
        </div>

        <h2 className="font-heading font-bold text-5xl text-primary text-center pt-5 lg:text-7xl">
          <span className="font-accent text-secondary">the</span> Top 3
        </h2>

        <p className="pt-5 text-quaternary text-center lg:text-lg">Os sabores que roubaram o coração dos clientes — e não devolvem.</p>

        <div className="pt-12 flex flex-col gap-5 lg:flex-row lg:items-end">
          <Top3Card 
            position={1} 
            favlorName="Nutinho c/ morango" 
            description="combinação premium" 
            image={coneNutinhoMorango} 
            imageAlt="Cone de nutinho de morango"
            className="order-1 lg:order-2 lg:bottom-0 lg:hover:bottom-3"
          />

          <Top3Card  
            position={2}
            favlorName="Ovomaltine"
            description="crocância máxima"
            image={coneOvomaltine}
            imageAlt="Cone de ovomaltine"
            className="order-2 lg:order-1 lg:top-5 lg:hover:top-2"
          />

          <Top3Card 
            position={3}
            favlorName="Oreo"
            description="cremosidade absurda"
            image={coneOreo}
            imageAlt="Cone de Oreo"
            className="order-3 lg:top-5 lg:hover:top-2"
          />
        </div>

      </div>
    </section>
  )
}
