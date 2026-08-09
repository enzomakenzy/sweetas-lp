import { Diamond } from "lucide-react"

type Props = {
  favlorName: string;
  price: string;
  description: string;
  image: string;
  imageAlt: string;
}

export function MenuCard({ favlorName, price, description, image, imageAlt }: Props) {
  return (
    <div className="rounded-2xl overflow-hidden border border-quaternary/50 lg:max-w-full bg-card">
      <img src={image} alt={imageAlt} className="max-sm:h-72 w-full object-cover object-top" />

      <div className="p-5">
        <h3 className="font-heading font-bold text-primary text-xl">{favlorName}</h3> 

        <span className="flex gap-2 items-center w-18.5 my-1">
          <Diamond className="w-3.5 fill-secondary text-secondary" />
          <p className="font-bold text-lg text-quaternary">R$ {price}</p>
        </span>  

        <p className="text-quaternary text-sm text-justify">{description}</p>
      </div>
    </div>
  )
}
