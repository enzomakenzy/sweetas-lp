import photo1 from "@/assets/images/carousel-1.jpg"
import photo2 from "@/assets/images/carousel-2.jpg"
import photo3 from "@/assets/images/carousel-3.jpg"

export function Social() {
  return (
    <section className="py-16 lg:px-12 text-center">
      <div className="max-w-7xl mx-auto relative">
        <h3 className="font-accent text-3xl text-secondary pb-1">nosso feed</h3>
        <h2 className="font-heading font-bold text-4xl text-primary mb-14 px-4 lg:text-5xl">Doçura que dá like</h2>

        <div className="w-full flex overflow-x-auto py-4 gap-12 snap-x snap-mandatory *:w-72 *:rounded-2xl *:border-2 *:border-primary *:snap-center md:snap-none *:shrink-0 scrollbar-none md:overflow-visible md:justify-center md:*:w-auto md:*:shrink md:*:flex-1 md:*:min-w-0 md:gap-16 *:backface-hidden *:will-change-transform">
          <img src={photo1} alt="Foto 1" className="rotate-6 ml-8" />
          <img src={photo2} alt="Foto 2" className="-rotate-4" />
          <img src={photo3} alt="Foto 3" className="mr-8 rotate-3" />
        </div>
      </div>
    </section>
  );
}