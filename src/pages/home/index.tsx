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
        <Quality />
        <Reviews />
        <Contact />
      </div>
    </div>
  );
}
