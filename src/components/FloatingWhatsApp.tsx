import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const FloatingWhatsApp = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após rolar 300px
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phone = "5521991848197";
  const message = encodeURIComponent(
    "Olá! Gostaria de agendar uma consulta com a Dra. Jéssica Amaro."
  );
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip de chamada */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-lg shadow-xl border border-brand-gold/20 p-4 max-w-[260px] mb-1"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="font-display text-sm font-semibold text-brand-green leading-snug">
                    Fale com a Dra. Jéssica Amaro
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-muted-foreground hover:text-brand-green transition-colors shrink-0"
                    aria-label="Fechar"
                  >
                    <X size={16} />
                  </button>
                </div>
                <p className="font-body text-xs text-muted-foreground leading-relaxed mb-3">
                  Tire suas dúvidas ou agende sua consulta pelo WhatsApp. Atendimento rápido e humanizado.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-b from-brand-gold-light to-brand-gold text-brand-green font-body font-semibold text-xs uppercase tracking-wider px-4 py-2.5 rounded shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle size={16} className="mr-2" />
                  Iniciar conversa
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botão flutuante */}
          <motion.button
            onClick={() => setOpen(!open)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-b from-[#25D366] to-[#128C7E] shadow-[0_6px_20px_rgba(18,140,126,0.45)] hover:shadow-[0_8px_28px_rgba(18,140,126,0.6)] transition-shadow duration-300"
            aria-label="WhatsApp"
          >
            {/* Ripple sutil */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            <MessageCircle size={28} className="text-white relative z-10" strokeWidth={2} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;
