interface Props {
  position: number;
  favlorName: string;
  description: string;
  image: string;
  imageAlt: string;
  className: string;
}

export function Top3Circle({ position, favlorName, description, image, imageAlt, className }: Props) {
  return (
    <div className={`relative rounded-full z-0 flex flex-col items-center ${className}`}>

      <div className="relative flex justify-center items-center overflow-hidden max-w-100">
        <div className="absolute z-10 top-0 right-0 bg-secondary w-18.5 h-18.5 rounded-full font-heading font-bold text-2xl flex justify-center items-center rotate-18 border-3 border-card">#0{position}</div>

        <div className="absolute inset-0 border-2 border-primary rounded-full lg:hover:border-dashed lg:hover:animate-ring-spin transition-all duration-450"></div>

        <img src={image} alt={imageAlt} className="rounded-full w-full p-3" />
      </div>

      <div className="text-center mt-3 rotate-2">
        <p className="font-heading font-bold text-primary text-3xl mb-1 md:text-2xl lg:text-3xl">{favlorName}</p>
        <p className="text-secondary text-xl md:text-base lg:text-xl font-bold uppercase">{description}</p>
      </div>
    </div>
  );
}