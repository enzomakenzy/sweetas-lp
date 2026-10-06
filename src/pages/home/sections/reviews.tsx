import { Reveal } from "@/components/common/reveal";
import { ReviewCard } from "../../../components/common/review-card";
import { motion } from "motion/react";
import { container } from "@/utils/list-items-reveal";

export function Reviews() {
  return (
    <section className="px-4 pt-20 pb-22 lg:pt-20 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 text-center">
        <Reveal><h3 className="font-accent text-3xl text-secondary pb-1">quem provou, aprovou</h3></Reveal>
        <Reveal><h2 className="font-heading font-bold text-4xl lg:text-6xl text-primary mb-15">O que dizem por aí</h2></Reveal>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ReviewCard 
            review="O de Nutinho com morango é surreal! Casquinha crocante de verdade e recheio na medida certa. Já virou pedido fixo aqui em casa."
            author="Marina Souza"
            reviewCategory="Pedido de nutinho com morango"
          />

          <ReviewCard 
            review="Encomendei 40 coninhos para o aniversário da minha filha e todo mundo pediu o contato. Chegaram lindos e no horário combinado."
            author="Rafael Lima"
            reviewCategory="Pedido para festa"
          />

          <ReviewCard 
            review="Atendimento super rápido no WhatsApp e o sabor Ovomaltine é o melhor que já provei. Dá vontade de comer três de uma vez."
            author="Camila Duarte"
            reviewCategory="Cliente fiel"
          /> 
        </motion.div>
      </div>
    </section>
  );
}