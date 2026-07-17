import { Diamond, Heart } from "lucide-react";
import { Button } from "../ui/button";
import bannerImg from "@/assets/images/cone-banner (2).png";

export function Banner() {
  return (
    <section className="grid grid-cols-1 pt-36 md:px-8 lg:px-24 lg:grid-cols-2 lg:gap-6 lg:items-center lg:justify-items-center lg:justify-center lg:place-items-center">
      <div className="flex flex-col gap-8 mb-8">
        <div>
          <h3 className="font-accent text-2xl text-terciary rotate-356 sm:rotate-357 md:rotate-358 2xl:rotate-359 mb-4">temos um A's</h3>
          <h1 className="text-5xl text-primary font-bold mb-4 lg:max-w-151 1xl:text-7xl 2xl:text-7.5xl lg:mb-6">Crocância que <span className="text-secondary">apaixona</span> a cada mordida.</h1>
          <p className="text-fourth text-lg md:text-xl lg:max-w-160 lg:mb-3">Casquinhas crocantes, recheios cremosos e sabores que viraram febre. Feitos à mão, na hora, só pra você.</p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:flex-row">
          <Button size="lg">Ver cardápio</Button>
          <Button size="lg" variant="outline">Pedir no WhatsApp</Button>
        </div>

        <ul className="flex gap-4">
          <li className="text-sm text-fourth flex items-center gap-1 md:text-base"><Heart className="inline h-4 w-4 text-terciary fill-terciary" /> +500 pedidos</li>
          <li className="text-sm text-fourth flex items-center gap-1 md:text-base"><Diamond className="inline h-4 w-4 text-secondary fill-secondary" /> 6 sabores</li>
          <li className="text-sm text-fourth flex items-center gap-1 md:text-base"><Heart className="inline h-4 w-4 text-terciary fill-terciary" /> feito na hora</li>
        </ul>
      </div>

      <div className="pr-3">
        <div className="relative shadow-lg rounded-xl sm:max-w-140 lg:max-w-188 m-auto">
          <img src={bannerImg} alt="Cone da Sweet a's" className="rounded-xl w-full" />

          <p className="bg-primary absolute z-10 -right-2 -bottom-5 flex flex-col items-center justify-center rounded-full h-23 w-23 text-background text-2xl font-bold rotate-14 lg:text-3xl lg:h-27 lg:w-27">
            <span className="font-accent h-5 text-base font-normal lg:text-xl lg:h-6">a partir de</span> R$7
          </p>
        </div>
      </div>
    </section>
  )
}
