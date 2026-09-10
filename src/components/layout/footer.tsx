import logoWhite from "@/assets/images/white-logo.svg";
import lumeLogo from "@/assets/images/lume-logo.svg";

export function Footer() {
  return (
    <footer className="bg-primary px-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
        <div className="grid grid-cols-1 justify-items-center gap-6 lg:flex lg:justify-between lg:items-center lg:px-8">
          <img src={logoWhite} alt="Logo branca do sweet a's" className="w-42" />

          <p className="text-background/80 text-center text-sm">© 2026 Sweet A's Doceria — Feito com <span className="text-secondary">♥</span> e muito chocolate.</p>

          <ul className="flex gap-5 font-semibold text-background">
            <li>Cardápio</li>
            <li>Pedido</li>
            <li>Contato</li>
          </ul>
        </div>

        <hr className="border-none h-px bg-background/30 w-full" />

        <a
          href="https://www.instagram.com/lume_technology"
          target="_blank"
          rel="external"
          className="group flex flex-row items-center justify-center gap-3 sm:gap-4 opacity-80 hover:opacity-100 transition-all duration-300"
        >
          <span className="text-background text-xs font-medium uppercase tracking-widest text-right leading-tight">
            Desenvolvido<br className="md:hidden" /> por
          </span>

          <div className="w-0.5 h-6 sm:h-7 bg-background/30"></div>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <img 
              src={lumeLogo} 
              alt="Lume Technology" 
              className="h-7 sm:h-7 w-auto transform group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-background text-xs text-left leading-tight uppercase tracking-widest font-semibold">
              Lume <br />
              <span className="font-normal text-background">Technology</span>
            </span>
          </div>
        </a>
      </div>
    </footer>
  );
}