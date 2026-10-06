type Props = {
  image: string;
  imageAlt: string;
  flavor: string;
  description: string;
  price: number;
}

export function OrderCard({ image, imageAlt, flavor, description, price }: Props) {
  return (
    <div className="flex gap-4 bg-card p-3 rounded-xl ring-2 ring-quaternary/10">
      <img src={image} alt={imageAlt} className="w-24 h-24 shrink-0 object-cover rounded-xl" />

      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-heading font-bold text-primary">{flavor}</h3>

        <div className="flex flex-1 items-end">
          <div className="flex items-center gap-2 justify-between flex-1">
            <span className="text-lg font-bold">R$ {price},00</span>

            <div className="flex gap-3 font-bold items-center">
              <span className="text-xl ring-quaternary/20 ring-2 text-primary/80 h-9 w-9 flex items-center justify-center rounded-full">-</span>
              <span className="">0</span>
              <span className="text-xl text-card bg-primary h-9 w-9 flex items-center justify-center rounded-full">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
