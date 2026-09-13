import logo from "@/assets/images/main-logo.svg" 
import { Button } from "../ui/button";
import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="grid grid-cols-2 py-3 px-4 lg:grid-cols-3 lg:px-20 xl:px-30 2xl:px-40 items-center top-0 sticky z-30 bg-background w-full">
      <a href="#">
        <img 
          src={logo}
          alt="Logo SweetA's"
          className="w-30 md:w-34 lg:w-44"
        />
      </a>

      <nav className="hidden lg:flex lg:items-center lg:justify-center lg:gap-12 *:font-semibold *:text-primary *:hover:text-accent *:text-xl">
        <NavLink to="/">Início</NavLink>
        <a href="#">Cardápio</a>
        <NavLink to="/sobre">Sobre</NavLink>
      </nav>

      <div className="flex justify-end">
        <NavLink to="/pedido">
          <Button size="default">Peça já</Button>
        </NavLink>
      </div>
    </header>
  );
}
