import coneNutinhoMorango from "@/assets/images/cone-nutinho-morango.png";
import coneOvomaltine from "@/assets/images/cone-ovomaltine.png";
import coneOreo from "@/assets/images/cone-oreo.jpg";
import { Top3Circle } from "@/components/common/top-3-circle";
import { Reveal } from "@/components/common/reveal";
import { motion } from "motion/react";
import { container } from "@/utils/list-items-reveal";

export function Top3() {
  return (
    <section className="px-4 pt-25 pb-20 lg:pb-40 lg:px-12 bg-quinary">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mx-auto justify-center">
          <Reveal><div className="h-px w-7 bg-primary"></div></Reveal>
          <Reveal><h3 className="uppercase text-primary text-xs font-bold tracking-[0.2rem]">Os Queridinhos</h3></Reveal>
          <Reveal><div className="h-px w-7 bg-primary"></div></Reveal>
        </div>

        <Reveal>
          <h2 className="font-heading font-bold text-5xl text-primary text-center pt-5 md:text-6xl lg:text-7xl">
            <span className="font-accent text-secondary">the</span> Top 3
          </h2>
        </Reveal>

        <Reveal>
          <p className="pt-5 text-quaternary/70 font-medium text-center lg:text-lg">Os sabores que roubaram o coração dos clientes — e não devolvem.</p>
        </Reveal>

        <motion.div 
          className="pt-20 grid grid-cols-1 gap-15 md:grid-cols-3 md:place-items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
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
        </motion.div>
      </div>
    </section>
  )
}
