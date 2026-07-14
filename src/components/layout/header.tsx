import logo from "@/assets/images/main-logo.png" 
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="grid grid-cols-2 py-3 px-4 sm:px-14 lg:grid-cols-3 lg:px-20 xl:px-30 2xl:px-40 border-b items-center absolute bg-background w-full">
      <a href="#">
        <img 
          src={logo}
          alt="Logo SweetA's"
          className="w-30 md:w-34 lg:w-38"
        />
      </a>

      <nav className="hidden lg:flex lg:items-center lg:justify-center lg:gap-12">
        <a className="font-semibold text-terciary hover:text-accent text-base" href="#">Cardápio</a>
        <a className="font-semibold text-terciary hover:text-accent text-base" href="#">Qualidade</a>
        <a className="font-semibold text-terciary hover:text-accent text-base" href="#">Contato</a>
      </nav>

      <div className="flex justify-end">
        <Button size="sm">Peça já</Button>
      </div>
    </header>
  );
}
