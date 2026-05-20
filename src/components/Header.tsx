import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "​", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-green/95 backdrop-blur-md border-b border-brand-gold/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#inicio" className="flex items-center gap-2">
            <img src={logo} alt="Dra. Jéssica Amaro" className="h-10 lg:h-12 w-auto" />
            <span className="font-display text-lg lg:text-xl font-bold text-primary-foreground tracking-wide">
              Dra. Jéssica <span className="text-brand-gold">Amaro</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-body font-medium text-primary-foreground/80 hover:text-brand-gold transition-colors duration-300 tracking-wide uppercase">
                {link.label}
              </a>
            ))}
            <a href="" target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-brand-green font-body text-sm font-semibold px-5 py-2.5 rounded hover:bg-brand-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/20">
              Fale Conosco
            </a>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary-foreground" aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="md:hidden bg-brand-green border-t border-brand-gold/20 overflow-hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-sm font-body font-medium text-primary-foreground/80 hover:text-brand-gold transition-colors uppercase tracking-wide py-2">
                  {link.label}
                </a>
              ))}
              <a href="" target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-brand-green font-body text-sm font-semibold px-5 py-2.5 rounded text-center hover:bg-brand-gold-light transition-all duration-300">
                Fale Conosco
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
