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

export default function Order() {
  const [whatsapp, setWhatsapp] = useState("");

  function handleWhatsappChange(e: ChangeEvent<HTMLInputElement>) {
    setWhatsapp(formatWhatsapp(e.target.value));
  }

  return (
    <main className="bg-background p-4">
      <div>
        <section className="mb-7">
          <h2 className="font-accent text-2xl text-secondary">monte do seu jeito</h2>
          <h1 className="font-heading font-bold text-primary text-3xl sm:text-4xl">Escolha quantos coninhos quiser, de cada sabor.</h1>
          <p className="mt-2 text-quaternary xs:text-lg">Siga os passos abaixo e faça seu pedido</p>
        </section>

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
                  <Button size="lg">Retirar no local</Button>
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
      </div>
    </main>
  )
}
