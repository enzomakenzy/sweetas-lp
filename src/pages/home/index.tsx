import { Banner } from "@/pages/home/sections/banner";
import { Marquee } from "@/pages/home/sections/marquee";
import { Top3 } from "@/pages/home/sections/top-3";
import { Menu } from "@/pages/home/sections/menu";
import { Quality } from "@/pages/home/sections/quality";
import { Reviews } from "@/pages/home/sections/reviews";
import { Contact } from "@/pages/home/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div>
        <Banner />
        <Marquee />
        <Top3 />
        <Menu />
        <div className="w-full overflow-hidden h-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[200%] h-20 md:h-24 animate-wave">
            <path d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z" className="fill-primary" />
          </svg>
        </div>
        <Quality />
        <div className="w-full overflow-hidden h-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[200%] h-16 md:h-24 animate-wave-inverse rotate-180">
            <path d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z" className="fill-primary" />
          </svg>
        </div>
        <Reviews />
        <Contact />
      </div>
    </div>
  );
}
