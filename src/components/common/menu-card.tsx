import { Diamond } from "lucide-react"
import { Button } from "../ui/button";

type Props = {
  favlorName: string;
  price: string;
  description: string;
  image: string;
  imageAlt: string;
}

export function MenuCard({ favlorName, price, description, image, imageAlt }: Props) {
  return (
    <div className="rounded-2xl overflow-hidden border-2 border-quaternary/50 relative transition-all duration-400 lg:hover:shadow-2xl lg:max-w-full bg-card lg:hover:border-primary lg:hover:-translate-y-2 group h-full flex flex-col">
      <img src={image} alt={imageAlt} className="h-72 xs:h-96 sm:h-72 2md:h-96 w-full object-cover object-top transition duration-400 group-hover:lg:scale-105 group-hover:lg:-translate-y-2" />

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-primary text-xl">{favlorName}</h3> 
        <p className="text-quaternary text-sm text-justify pt-1 pb-3">{description}</p>

        <div className="flex items-center justify-between mt-auto">
          <p className="flex items-center gap-2 font-bold text-lg text-quaternary">
            <Diamond className="w-3.5 fill-secondary text-secondary" />R$ {price}
          </p>

          <a href="#">
            <Button className="uppercase" size="sm">Fazer pedido</Button>
          </a>
        </div>  
      </div>
    </div>
  )
}
