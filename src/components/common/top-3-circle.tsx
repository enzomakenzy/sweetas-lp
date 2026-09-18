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
      <div className="absolute z-10 top-o right-0 bg-secondary w-18.5 h-18.5 rounded-full font-heading font-bold text-2xl flex justify-center items-center rotate-18 border-3 border-card">#0{position}</div>

      <div className="relative w-80 h-80 flex justify-center items-center">
        <div className="absolute inset-0 border-2 border-primary border-dashed rounded-full animate-ring-spin"></div>

        <img src={image} alt={imageAlt} className="rounded-full w-74 h-74" />
      </div>

      <div className="text-center mt-3 rotate-2">
        <p className="font-heading font-bold text-primary text-3xl mb-1">{favlorName}</p>
        <p className="text-secondary text-lg font-extrabold uppercase">{description}</p>
      </div>
    </div>
  );
}