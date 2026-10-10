import coneNutinhoMorango from "@/assets/images/cone-nutinho-morango.png";
import coneOvomaltine from "@/assets/images/cone-ovomaltine.png";
import coneOreo from "@/assets/images/cone-oreo.jpg";
import coneBrigadeiro from "@/assets/images/cone-brigadeiro.jpg";
import coneKitkat from "@/assets/images/cone-kitkat.jpg";
import coneOuroBranco from "@/assets/images/core-ouro-branco.jpg";
import { OrderCard } from "@/components/common/order-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState, type ChangeEvent } from "react";
import { formatWhatsapp } from "@/utils/format-whatsapp";
import { X } from 'lucide-react';
import { Heart } from "lucide-react";

export default function Order() {
  const [whatsapp, setWhatsapp] = useState("");

  function handleWhatsappChange(e: ChangeEvent<HTMLInputElement>) {
    setWhatsapp(formatWhatsapp(e.target.value));
  }

  return (
    <main className="bg-background p-4 pb-12">
      <section className="mb-7">
        <h2 className="font-accent text-2xl text-secondary">monte do seu jeito</h2>
        <h1 className="font-heading font-bold text-primary text-3xl sm:text-4xl">Escolha quantos coninhos quiser, de cada sabor.</h1>
        <p className="mt-2 text-quaternary xs:text-lg">Siga os passos abaixo e faça seu pedido</p>
      </section>

      <div className="flex flex-col gap-8">
        <section>
          <h3 className="font-heading font-bold text-xl uppercase text-primary mb-4 sm:text-2xl">1. Escolha os Sabores</h3>
          
          <div className="grid gap-5 md:grid-cols-2 mb-10">
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

          <div>
            <h3 className="font-heading font-bold text-xl uppercase text-primary mb-4 sm:text-2xl">2. Seus Dados</h3>

            <form className="**:[label]:uppercase **:[label]:font-bold **:[label]:text-sm **:[label]:tracking-widest **:[label]:text-foreground/70 flex flex-col gap-4">
              <div className="flex flex-col gap-4 md:flex-row *:md:flex-1">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name">Nome</label>

                  <Input 
                    id="name"
                    name="name" 
                    type="text" 
                    placeholder="Seu nome" 
                    autoComplete="off" 
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="whatsapp">Whatsapp</label>

                  <Input 
                    type="tel" 
                    id="whatsapp"
                    name="whatsapp"
                    placeholder="(00) 00000-0000" 
                    value={whatsapp}  
                    onChange={handleWhatsappChange}
                    maxLength={15}
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label>Como prefere receber?</label>

                <div className="flex gap-2">
                  <Button size="lg" className="hover:scale-102">Retirar no local</Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="inset-ring-2 inset-ring-primary"
                  >
                    Entrega
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="address">Endereço</label>

                <Input 
                  type="text" 
                  id="address" 
                  name="address" 
                  placeholder="Rua, número, bairro e referência" 
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="observations">Observações (opcional)</label>
                
                <Textarea 
                  id="observations" 
                  name="observations" 
                  placeholder="Data e horário desejado, embalagem para presente, etc" 
                  className="h-30 rounded-xl" 
                />
              </div>
            </form>
          </div>
        </section>

        <div className="rounded-2xl bg-card ring-2 ring-primary/10 p-5">
          <h3 className="text-xl text-primary font-heading font-bold uppercase mb-3 sm:text-2xl">Resumo do pedido</h3>

          <p className="mb-7">Seu pedido está vazio</p>

          <li className="mb-7">
            <ul className="flex justify-between">
              <div>
                <span className="font-bold mr-2">1x</span> 
                Nutinho c/ Morango
              </div>

              <div className="flex items-center gap-1">
                <span className="font-bold">R$ 10,00</span>
                <button>
                  <X size={20} className="text-foreground/75 hover:text-tertiary cursor-pointer" />
                </button>
              </div>
            </ul>
          </li>

          <hr className="border-dashed border border-primary/30" />

          <div className="mt-7 flex justify-between items-end">
            <span className="uppercase font-bold text tracking-widest text-foreground/70">TOTAL · 0 UN</span>

            <span className="text-3xl text-primary font-bold">R$ 0,00</span>
          </div>

          <Button size="lg" className="w-full mt-5 mb-3 hover:scale-103">Enviar pedido no Whatsapp</Button>

          <p className="text-center text-foreground/70">Sem compromisso: você confirma tudo na conversa antes de pagar.</p>
        </div>
      </div>
    </main>
  )
}
