import { Header } from "./components/layout/header";
import { Banner } from "./components/sections/banner";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="px-3">
        <Banner />
      </div>
    </div>
  );
}
