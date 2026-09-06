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

        <h2 className="font-heading font-bold text-5xl text-primary text-center pt-5 md:text-6xl lg:text-7xl">
          <span className="font-accent text-secondary">the</span> Top 3
        </h2>

        <p className="pt-5 text-quaternary text-center lg:text-lg">Os sabores que roubaram o coração dos clientes — e não devolvem.</p>

        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:flex-row lg:items-end">
          <Top3Card 
            position={1} 
            favlorName="Nutinho c/ morango" 
            description="combinação premium" 
            image={coneNutinhoMorango} 
            imageAlt="Cone de nutinho de morango"
            className="order-1 sm:col-span-2 lg:col-span-1 lg:order-2"
          />

          <Top3Card  
            position={2}
            favlorName="Ovomaltine"
            description="crocância máxima"
            image={coneOvomaltine}
            imageAlt="Cone de ovomaltine"
            className="order-2 lg:order-1 lg:top-5"
          />

          <Top3Card 
            position={3}
            favlorName="Oreo"
            description="cremosidade absurda"
            image={coneOreo}
            imageAlt="Cone de Oreo"
            className="order-3 lg:top-5"
          />
        </div>

      </div>
    </section>
  )
}
