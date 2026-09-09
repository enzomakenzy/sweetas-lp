interface Props {
  position: "01" | "02" | "03";
  cardTitle: string;
  description: string;
}

export function QualityCard({ position, cardTitle, description }: Props) {
  return (
    <div className="relative flex gap-4 bg-primary-quality border border-primary-quality-border rounded-2xl transition duration-250 overflow-hidden">
      <div className="absolute w-2 rounded-full bg-secondary -left-1 top-1/2 -translate-y-1/2 h-[70%]"></div>

      <h3 className="font-accent text-secondary text-6xl pl-5 py-7">{position}</h3>

      <div className="pr-5 py-7 sm:pr-0">
        <h4 className="font-heading font-bold text-2xl mb-2">{cardTitle}</h4>
        <p className="text-sm text-background/80">{description}</p>
      </div>
    </div>
  );
}