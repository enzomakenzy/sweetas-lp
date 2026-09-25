import logoWhite from "@/assets/images/white-logo.svg";
import lumeLogo from "@/assets/images/lume-logo.svg";
import instagramLogo from "@/assets/images/instagram-logo.svg";
import whatsappLogo from "@/assets/images/whatsapp-logo.svg";
import { NavLink } from "react-router";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary px-6 py-14 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto_auto] lg:gap-20 lg:items-start">

          <div className="flex flex-col items-center lg:items-start">
            <img src={logoWhite} alt="Logo branca do sweet a's" className="w-62 mb-4" />
            <p className="text-background/60 text-sm text-center lg:text-left max-w-64">
              Casquinhas artesanais feitas com carinho, na hora, só pra você.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-background/50 text-xs uppercase tracking-widest mb-4">Atalhos</h4>
            <nav className="flex flex-col gap-2 text-background font-heading text-lg">
              <NavLink to="/" className="hover:text-secondary transition-colors">Início</NavLink>
              <NavLink to="/#cardapio" className="hover:text-secondary transition-colors">Cardápio</NavLink>
              <NavLink to="/pedido" className="hover:text-secondary transition-colors">Pedido</NavLink>
              <NavLink to="/sobre" className="hover:text-secondary transition-colors">Sobre</NavLink>
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-background/50 text-xs uppercase tracking-widest mb-4">Contato</h4>
            <div className="flex flex-col gap-3 text-background text-sm *:items-center">
              <a href="mailto:contato@sweetas.com.br" className="opacity-80 hover:opacity-100 hover:scale-110 transition-all flex gap-2">
                <Mail className="ml-0.5" />
                contato@sweetas.com.br
              </a>

              <a href="https://www.instagram.com/sweetasdoceria" target="_blank" rel="external" className="opacity-80 hover:opacity-100 hover:scale-110 transition-all flex gap-2">
                <img src={instagramLogo} alt="Instagram" className="w-7 h-7" />
                sweetasdoceria
              </a>

              <a href="#" target="_blank" rel="external" className="opacity-80 hover:opacity-100 hover:scale-110 transition-all flex gap-2">
                <img src={whatsappLogo} alt="WhatsApp" className="w-6 h-6 ml-0.5" />
                (84) 9 48298392
              </a>
            </div>
          </div>
        </div>

        <hr className="border-none h-px bg-background/20 w-full my-10" />

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-background/60 text-center text-xs sm:text-left">
            © 2026 Sweet A's Doceria — Feito com <span className="text-secondary">♥</span> e muito chocolate.
          </p>

          <a
            href="https://www.instagram.com/lume_technology"
            target="_blank"
            rel="external"
            className="group flex items-center gap-3 opacity-70 hover:opacity-100 transition-all duration-300"
          >
            <span className="text-background text-xs font-medium uppercase tracking-widest text-right leading-tight">
              Desenvolvido<br className="sm:hidden" /> por
            </span>
            <div className="w-px h-5 bg-background/30"></div>
            <div className="flex items-center gap-2">
              <img
                src={lumeLogo}
                alt="Lume Technology"
                className="h-7 w-auto group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-background text-xs text-left leading-tight uppercase tracking-widest font-semibold">
                Lume<br />
                <span className="font-normal">Technology</span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}