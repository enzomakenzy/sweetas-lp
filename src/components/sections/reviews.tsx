import { ReviewCard } from "../common/review-card";

export function Reviews() {
  return (
    <section className="px-4 py-12 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 text-center">
        <h3 className="font-accent text-3xl text-secondary pb-1">quem provou, aprovou</h3>
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-primary mb-10">O que dizem por aí</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
        </div>
      </div>
    </section>
  );
}