import { Clock4, Motorbike, MoveRight } from "lucide-react";
import { Button } from "../ui/button";

export function Contact() {
  return (
    <section className="py-12 px-4 lg:px-12 bg-quinary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 shadow-lg rounded-2xl overflow-hidden">
        <div className="bg-primary p-7">
          <h3 className="text-secondary font-accent text-2xl mb-1">pedido e contato</h3>
          <h2 className="text-3xl font-heading font-bold text-background mb-6">Bateu vontade? A gente entrega.</h2>
          <p className="text-sm text-background/90 mb-8">Escolha seus sabores, ajuste as quantidades e veja o total na hora. Seu pedido vai pronto para o WhatsApp, sem enrolação.</p>

          <div className="flex flex-col items-start gap-3 mb-7">
            <Button 
              variant="outline" 
              size="lg" 
              className="contain flex-none hover:bg-background hover:text-primary hover:scale-105"
            >
              Montar meu pedido <MoveRight /> 
            </Button>
            <Button 
              size="sm" 
              className="text-xs font-normal h-8 border border-background/50 hover:scale-none hover:bg-background/10"
            >
              Dúvidas? Chama no Whatsapp
            </Button>
          </div>

          <div className="text-background/70 font-bold text-xs uppercase tracking-wider flex flex-col gap-1">
            <div className="flex items-center gap-2"><Clock4 size={16} /> Resposta em minutos</div>
            <div className="flex items-center gap-2"><Motorbike size={16} /> Entrega rápida</div>
          </div>
        </div>
      </div>
    </section>
  );
}
