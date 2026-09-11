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
        <div className="bg-background p-7">
          <h3 className="flex items-center gap-2 font-bold uppercase tracking-[0.13rem] text-xs text-primary mb-7">
            <hr className="border-none w-5 h-px bg-primary" /> Monte seu Pedido
          </h3>

          <ul className="flex flex-col gap-5 *:flex *:gap-4 *:items-start **:[span]:flex **:[span]:items-center **:[span]:justify-center **:[span]:shrink-0 **:[span]: **:[span]:text-lg **:[span]:font-bold **:[span]:text-primary **:[span]:rounded-full **:[span]:w-10 **:[span]:h-10 **:[span]:mt-0.5 **:[span]:border-2 **:[span]:border-primary/20 **:[span]:bg-primary/5 **:[h4]:font-heading **:[h4]:font-bold **:[h4]:text-primary **:[h4]:uppercase **:[p]:text-sm">
            <li>
              <span>01</span>
              <div>
                <h4>Escolha os sabores e quantidades</h4>
                <p>Misture quantos sabores quiser, no jeito que preferir.</p>
              </div>
            </li>

            <li>
              <span>02</span>
              <div>
                <h4>Veja o total calculado na hora</h4>
                <p>O valor é somado automaticamente conforme você monta.</p>
              </div>
            </li>
            
            <li>
              <span>03</span>
              <div>
                <h4>Confirme no WhatsApp antes de pagar</h4>
                <p>Sem compromisso — você só finaliza depois de revisar tudo na conversa.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
