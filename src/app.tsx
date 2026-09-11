import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Banner } from "./components/sections/banner";
import { Contact } from "./components/sections/contact";
import { Marquee } from "./components/sections/marquee";
import { Menu } from "./components/sections/menu";
import { Quality } from "./components/sections/quality";
import { Reviews } from "./components/sections/reviews";
import { Top3 } from "./components/sections/top-3";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div>
        <Banner />
        <Marquee />
        <Top3 />
        <Menu />
        <Quality />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
