import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy border-t border-gold/10 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="text-gold" size={20} strokeWidth={1.5} />
              <span className="font-display text-lg font-bold text-primary-foreground">
                Jéssica <span className="text-gold">Amaro</span>
              </span>
            </div>
            <p className="font-body text-sm text-primary-foreground/50 leading-relaxed">
              Advogada especialista em Direito Previdenciário. Atendimento humanizado e comprometido com os seus direitos.
            </p>
            <p className="font-body text-sm text-primary-foreground/40 mt-3">
              OAB/RJ — [Número]
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-sm font-semibold text-gold uppercase tracking-wider mb-4">Contato</h4>
            <div className="font-body text-sm text-primary-foreground/50 space-y-2">
              <p>WhatsApp: (21) 99184-8197</p>
              <p>Telefone: (21) 2695-2241</p>
              <p className="leading-relaxed">
                Av. Gov. Roberto Silveira, 470 – Sala 1117<br />
                Centro Top Commerce, Nova Iguaçu – RJ
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-gold uppercase tracking-wider mb-4">Institucional</h4>
            <div className="font-body text-sm text-primary-foreground/50 space-y-2">
              <a href="#inicio" className="block hover:text-gold transition-colors duration-300">Início</a>
              <a href="#sobre" className="block hover:text-gold transition-colors duration-300">Sobre</a>
              <a href="#servicos" className="block hover:text-gold transition-colors duration-300">Serviços</a>
              <a href="#contato" className="block hover:text-gold transition-colors duration-300">Contato</a>
              <a href="#" className="block hover:text-gold transition-colors duration-300">Política de Privacidade</a>
              <a href="#" className="block hover:text-gold transition-colors duration-300">Termos de Uso</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-6">
          <p className="font-body text-xs text-primary-foreground/30 text-center">
            © {new Date().getFullYear()} Jéssica Amaro — Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
