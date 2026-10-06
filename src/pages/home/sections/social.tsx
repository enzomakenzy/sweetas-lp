import photo1 from "@/assets/images/carousel-1.jpg"
import photo2 from "@/assets/images/carousel-2.jpg"
import photo3 from "@/assets/images/carousel-3.jpg"
import instagramLogo from "@/assets/images/instagram-logo.svg";
import { Reveal } from "@/components/common/reveal";
import { container, item } from "@/utils/list-items-reveal";
import { motion } from "motion/react";

export function Social() {
  return (
    <section className="pb-25 pt-14 lg:px-12 text-center bg-quaternary">
      <div className="max-w-7xl mx-auto relative backface-hidden will-change-transform ">
        <Reveal><h3 className="font-accent text-3xl text-background pb-1">nosso feed</h3></Reveal>
        <Reveal><h2 className="font-heading font-bold text-4xl text-background mb-14 px-4 lg:text-6xl">Doçura que dá like</h2></Reveal>

        <div className="relative">
          <Reveal>
            <a href="https://www.instagram.com/sweetasdoceria" target="_blank" rel="external" className="absolute z-10 flex items-center gap-2 bg-quaternary px-5 py-2 rounded-full ring-2 ring-background rotate-10 right-10 sm:right-36 md:right-auto md:left-1/2 transition hover:translate-x-2 hover:-translate-y-2 hover:scale-115">
              <img src={instagramLogo} alt="Logo do Instagram" className="w-6" />
              <p className="text-sm uppercase text-background font-bold">sweetasdoceria</p>
            </a>
          </Reveal>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full *:transition-normal *:duration-250 flex overflow-x-auto py-4 gap-12 snap-x snap-mandatory *:w-72 *:rounded-2xl *:ring-2 *:ring-background *:snap-center md:snap-none *:shrink-0 scrollbar-none md:overflow-visible md:justify-center md:*:w-auto md:*:shrink md:*:flex-1 md:*:min-w-0 md:gap-16 *:backface-hidden *:will-change-transform *:hover:rotate-0 *:hover:-translate-y-1 *:hover:scale-105"
          >

            <motion.img variants={item} src={photo1} alt="Foto 1" className="rotate-4 ml-8" />
            <motion.img variants={item} src={photo2} alt="Foto 2" className="-rotate-4" />
            <motion.img variants={item} src={photo3} alt="Foto 3" className="mr-8 rotate-3" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}