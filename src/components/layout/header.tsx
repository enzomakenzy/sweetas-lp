import logo from "@/assets/images/main-logo.svg";
import menuImg from "@/assets/images/menu.svg";
import closeImg from "@/assets/images/close-menu.svg";
import { Button } from "../ui/button";
import { NavLink } from "react-router";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [menuStatus, setMenuStatus] = useState<boolean>(false); 
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
      setMenuStatus(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuStatus) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuStatus(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuStatus]);

  return (
    <header className={`transition duration-300 top-0 sticky z-100 bg-background w-full ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="relative py-3 h-full w-full flex justify-end items-center z-30 md:justify-between bg-background">
        <NavLink to="/" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 md:left-0 md:translate-0 md:top-0 md:static md:pl-12">
          <img 
            src={logo}
            alt="Logo SweetA's"
            className="w-38 md:w-42 lg:w-46"
          />
        </NavLink>
        

        <nav className="hidden md:flex md:items-center md:font-semibold md:justify-center md:gap-12 *:text-primary *:hover:text-accent *:md:text-lg *:lg:text-xl">
          <NavLink to="/">Início</NavLink>
          <NavLink to="/#cardapio">Cardápio</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>

        <div className="hidden md:flex md:justify-end md:pr-12">
          <NavLink to="/pedido">
            <Button size="default">Peça já</Button>
          </NavLink>
        </div>

        <button onClick={() => setMenuStatus(!menuStatus)} ref={buttonRef} className="flex flex-col md:hidden cursor-pointer h-full p-2 mr-4 transition md:pr-10">
          { menuStatus ? 
              <img src={closeImg} alt="Menu de páginas" className="w-7" />
              :
              <img src={menuImg} alt="Menu de páginas" className="w-7 h-7" />
          } 
        </button>      
      </div>

      <div ref={menuRef} className={`absolute bg-background w-full p-4 pb-7 transition-all z-10 duration-300 overflow-hidden ${menuStatus 
        ? "translate-y-0" 
        : "-translate-y-full"
      }`}>
        <nav className="flex flex-col items-center font-semibold justify-center gap-6 *:text-primary *:hover:text-accent *:text-xl *:w-full *:text-center lg:hidden">
          <NavLink onClick={() => setMenuStatus(false)} to="/">Início</NavLink>
          <NavLink onClick={() => setMenuStatus(false)} to="/#cardapio">Cardápio</NavLink>
          <NavLink onClick={() => setMenuStatus(false)} to="/sobre">Sobre</NavLink>
          <NavLink onClick={() => setMenuStatus(false)} to="/pedido">
            <Button size="lg" className="w-full text-lg">Peça já</Button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
