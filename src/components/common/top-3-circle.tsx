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
    <div className={`relative rounded-full z-0 flex flex-col items-center group **:transition-all **:duration-300 ${className}`}>

      <div className="relative flex justify-center items-center max-w-120">
        <div className={`${position === 1 ? "bg-secondary" : "bg-primary text-card"} absolute z-10 top-0 right-0 w-18.5 h-18.5 rounded-full font-heading font-bold text-2xl flex justify-center items-center rotate-18 border-4 border-card group-hover:-rotate-12 group-hover:scale-115`}>#0{position}</div>

        <div className="absolute inset-0 z-0 border-2 border-primary rounded-full"></div>

        <img src={image} alt={imageAlt} className="rounded-full w-full p-3 group-hover:scale-115 xl:group-hover:scale-110 group-hover:rotate-4" />
      </div>

      <div className="text-center mt-3 rotate-2">
        <p className="font-heading font-bold text-primary text-3xl mb-1 md:text-2xl lg:text-4xl group-hover:rotate-4">{favlorName}</p>
        <p className="text-secondary text-xl md:text-base lg:text-xl font-bold uppercase group-hover:tracking-wider">{description}</p>
      </div>
    </div>
  );
}