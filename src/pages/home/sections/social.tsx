import photo1 from "@/assets/images/carousel-1.jpg"
import photo2 from "@/assets/images/carousel-2.jpg"
import photo3 from "@/assets/images/carousel-3.jpg"
import instagramLogo from "@/assets/images/instagram-logo.svg";

export function Social() {
  return (
    <section className="pb-25 pt-14 lg:px-12 text-center bg-quaternary">
      <div className="max-w-7xl mx-auto relative backface-hidden will-change-transform ">
        <h3 className="font-accent text-3xl text-background pb-1">nosso feed</h3>
        <h2 className="font-heading font-bold text-4xl text-background mb-14 px-4 lg:text-6xl">Doçura que dá like</h2>


        <div className="relative">
          <a href="https://www.instagram.com/sweetasdoceria" target="_blank" rel="external"  className="absolute z-10 flex items-center gap-2 bg-quaternary px-5 py-2 rounded-full ring-2 ring-background rotate-10 right-10 sm:right-36 md:right-auto md:left-1/2">
            <img src={instagramLogo} alt="Logo do Instagram" className="w-6" />
            <p className="text-sm uppercase text-background font-bold">sweetasdoceria</p>
          </a>

          <div className="w-full *:transition-all *:duration-350 flex overflow-x-auto py-4 gap-12 snap-x snap-mandatory *:w-72 *:rounded-2xl *:ring-2 *:ring-background *:snap-center md:snap-none *:shrink-0 scrollbar-none md:overflow-visible md:justify-center md:*:w-auto md:*:shrink md:*:flex-1 md:*:min-w-0 md:gap-16 *:backface-hidden *:will-change-transform *:hover:ring-4">

            <img src={photo1} alt="Foto 1" className="rotate-4 ml-8" />
            <img src={photo2} alt="Foto 2" className="-rotate-4" />
            <img src={photo3} alt="Foto 3" className="mr-8 rotate-3" />
          </div>
        </div>
      </div>
    </section>
  );
}