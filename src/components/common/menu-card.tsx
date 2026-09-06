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
    <div className="rounded-2xl overflow-hidden border-2 border-quaternary/50 relative transition-all duration-400 lg:max-w-full bg-card lg:hover:border-primary lg:hover:-translate-y-2">
      <img src={image} alt={imageAlt} className="h-72 xs:h-96 sm:h-72 2md:h-96 w-full object-cover object-top transition duration-400 hover:lg:scale-104 hover:lg:-translate-y-2" />

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
