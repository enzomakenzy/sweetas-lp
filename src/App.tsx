import { Header } from "./components/layout/header";
import { Banner } from "./components/sections/banner";
import { Marquee } from "./components/sections/marquee";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div>
        <Banner />
        <Marquee />
      </div>
    </div>
  );
}
