import logo from "@/assets/images/main-logo.png" 
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="grid grid-cols-2 py-6 px-4 lg:grid-cols-3 lg:px-20 xl:px-30 2xl:px-40 items-center absolute bg-background w-full">
      <a href="#">
        <img 
          src={logo}
          alt="Logo SweetA's"
          className="w-30 md:w-34 lg:w-44"
        />
      </a>

      <nav className="hidden lg:flex lg:items-center lg:justify-center lg:gap-12">
        <a className="font-semibold text-primary hover:text-accent text-xl" href="#">Cardápio</a>
        <a className="font-semibold text-primary hover:text-accent text-xl" href="#">Qualidade</a>
        <a className="font-semibold text-primary hover:text-accent text-xl" href="#">Contato</a>
      </nav>

      <div className="flex justify-end">
        <Button size="default">Peça já</Button>
      </div>
    </header>
  );
}
