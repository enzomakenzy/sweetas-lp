import coneNutinhoMorango from "@/assets/images/cone-nutinho-morango.png";
import coneOvomaltine from "@/assets/images/cone-ovomaltine.png";
import coneOreo from "@/assets/images/cone-oreo.jpg";
import { Top3Circle } from "@/components/common/top-3-circle";

export function Top3() {
  return (
    <section className="px-4 pt-25 pb-40 lg:px-12 bg-quinary">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mx-auto justify-center">
          <div className="h-px w-7 bg-primary"></div>
          <h3 className="uppercase text-primary text-xs font-bold tracking-[0.2rem]">Os Queridinhos</h3>
          <div className="h-px w-7 bg-primary"></div>
        </div>

        <h2 className="font-heading font-bold text-5xl text-primary text-center pt-5 md:text-6xl lg:text-7xl">
          <span className="font-accent text-secondary">the</span> Top 3
        </h2>

        <p className="pt-5 text-quaternary font-medium text-center lg:text-lg">Os sabores que roubaram o coração dos clientes — e não devolvem.</p>

        <div className="pt-20 grid grid-cols-1 gap-15 md:grid-cols-3 md:place-items-center">
          <Top3Circle
            position={1} 
            favlorName="Nutinho c/ morango"
            description="o mais pedido"
            image={coneNutinhoMorango} 
            imageAlt="Cone de nutinho de morango"
            className="order-1 md:order-2 md:translate-y-20"
          />

          <Top3Circle
            position={2}
            favlorName="Ovomaltine"
            description="crocância máxima"
            image={coneOvomaltine}
            imageAlt="Cone de ovomaltine"
            className="order-2 md:order-1 md:top-5 md:-translate-y-12 md:w-[90%]"
          />
 
          <Top3Circle 
            position={3}
            favlorName="Oreo"
            description="cremosidade absurda"
            image={coneOreo}
            imageAlt="Cone de Oreo"
            className="order-3 md:top-5 md:-translate-y-22 md:w-[82%]"
          />
        </div>

      </div>
    </section>
  )
}
