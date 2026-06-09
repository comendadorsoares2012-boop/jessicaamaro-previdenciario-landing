import { useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Sparkles, Mic, MessageCircle, Scale, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  {
    icon: GraduationCap,
    title: "Mentoria em Casos Concretos",
    description: "Acompanhamento prático em casos reais",
    href: "#",
    badge: "Mentoria",
  },
  {
    icon: Sparkles,
    title: "Método PAP",
    description: "Produto de entrada — primeiros passos",
    href: "#",
    badge: "Entrada",
  },
  {
    icon: BookOpen,
    title: "Decifra PAP",
    description: "Produto principal — aprofundamento completo",
    href: "#",
    badge: "Premium",
  },
  {
    icon: Mic,
    title: "Podcast",
    description: "Conversas e conteúdos sobre Direito",
    href: "https://www.youtube.com/@J%C3%A9ssicaAmaroPodcast",
    badge: "Ouça",
    external: true,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Fale diretamente com a Dra. Jéssica",
    href: "https://wa.me/5521991848197?text=Ol%C3%A1%21%20Vim%20pelo%20Instagram%20e%20gostaria%20de%20falar%20com%20a%20Dra.%20J%C3%A9ssica.",
    badge: "Direto",
    external: true,
  },
  {
    icon: Scale,
    title: "Conheça o escritório",
    description: "Site oficial — Jéssica Amaro Advocacia",
    href: "/",
    badge: "Site",
  },
];

const Links = () => {
  useEffect(() => {
    document.title = "Dra. Jéssica Amaro — Links";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-green relative overflow-hidden">
      {/* Decorative gold accents */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
        <span className="font-display italic text-[24rem] text-brand-gold/[0.03] leading-none">JA</span>
      </div>

      <main className="relative container mx-auto px-4 py-12 md:py-16 max-w-xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-gold/10 border border-brand-gold/30 mb-5 p-2">
            <img src={logo} alt="Dra. Jéssica Amaro" className="w-full h-full object-contain" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl text-primary-foreground mb-2">
            Dra. Jéssica <span className="italic text-brand-gold">Amaro</span>
          </h1>
          <p className="font-body text-sm text-primary-foreground/60 max-w-sm mx-auto">
            Advocacia, mentoria e conteúdo sobre Direito Previdenciário e do Consumidor.
          </p>
        </motion.header>

        {/* Links */}
        <div className="space-y-3">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.title}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative block bg-gradient-to-br from-white/[0.07] to-white/[0.02] hover:from-brand-gold/15 hover:to-brand-gold/5 border border-brand-gold/20 hover:border-brand-gold/60 rounded-xl p-4 md:p-5 transition-all duration-300 backdrop-blur-sm shadow-[0_4px_20px_-6px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_28px_-6px_hsl(40,55%,52%/0.35)]"
              >
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-300">
                    <Icon className="w-5 h-5 text-brand-gold group-hover:text-brand-green transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h2 className="font-display text-base md:text-lg font-semibold text-primary-foreground truncate">
                        {link.title}
                      </h2>
                      <span className="hidden sm:inline-block text-[9px] font-body uppercase tracking-widest text-brand-gold/80 px-2 py-0.5 border border-brand-gold/30 rounded-full">
                        {link.badge}
                      </span>
                    </div>
                    <p className="font-body text-xs md:text-sm text-primary-foreground/60 truncate">
                      {link.description}
                    </p>
                  </div>
                  <ArrowUpRight className="shrink-0 w-5 h-5 text-brand-gold/60 group-hover:text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-10"
        >
          <p className="font-body text-[11px] uppercase tracking-[0.25em] text-primary-foreground/30">
            © {new Date().getFullYear()} Jéssica Amaro Advocacia
          </p>
        </motion.footer>
      </main>
    </div>
  );
};

export default Links;
