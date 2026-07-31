import { Header } from "./components/layout/header";
import { Banner } from "./components/sections/banner";
import { Marquee } from "./components/sections/marquee";
import { Top3 } from "./components/sections/top-3";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div>
        <Banner />
        <Marquee />
        <Top3 />
      </div>
    </div>
  );
}
