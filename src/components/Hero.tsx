import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GoldButton from "./GoldButton";
import jessicaHero from "@/assets/jessica-hero.jpg";
import jessicaAbout from "@/assets/jessica-about.png";
import jessicaServices from "@/assets/jessica-services.jpg";
import jessicaContact from "@/assets/jessica-contact.png";

const slides = [
  { src: jessicaHero, alt: "Dra. Jéssica Amaro - Advogada Previdenciária" },
  { src: jessicaAbout, alt: "Dra. Jéssica Amaro - Especialista" },
  { src: jessicaServices, alt: "Dra. Jéssica Amaro - Planejamento" },
  { src: jessicaContact, alt: "Dra. Jéssica Amaro - Profissional" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-green"
    >
      {/* Decorative monogram */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
        <span className="font-display italic text-[18rem] md:text-[28rem] text-brand-gold/[0.04] leading-none">JA</span>
      </div>
      <div className="container mx-auto px-4 lg:px-8 pt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-gold mb-4">
              Direito Previdenciário e do Consumidor
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Jéssica{" "}
              <span className="text-gradient-gold">Amaro</span>{" "}
              Advocacia
            </h1>
            <div className="w-16 h-px bg-brand-gold mb-6 mx-auto lg:mx-0" />
            <p className="font-body text-base md:text-lg text-primary-foreground/70 max-w-lg mb-6 leading-relaxed mx-auto lg:mx-0">
              Atuação jurídica estratégica para proteger seus direitos e garantir segurança em decisões importantes da sua vida.
            </p>
            <p className="font-body text-base md:text-lg text-primary-foreground/60 max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0">
              Com experiência em benefícios previdenciários e relações de consumo, oferecemos um atendimento humanizado, transparente e focado na melhor solução para cada caso.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center lg:items-start">
              <GoldButton href="#contato" size="md">
                Agendar Consulta
              </GoldButton>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold font-body font-medium px-2 py-3 text-xs uppercase tracking-[0.2em] border-b border-brand-gold/40 hover:text-brand-gold-light hover:border-brand-gold transition-colors duration-300"
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-brand-gold/10 rounded-2xl rotate-3" />
              <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-[3/4]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={slides[current].src}
                    alt={slides[current].alt}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </AnimatePresence>
              </div>

              {/* Controls */}
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-brand-green/60 hover:bg-brand-green/80 text-primary-foreground rounded-full p-2 backdrop-blur-sm transition-all duration-200"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-brand-green/60 hover:bg-brand-green/80 text-primary-foreground rounded-full p-2 backdrop-blur-sm transition-all duration-200"
                aria-label="Próximo"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-brand-gold w-6" : "bg-primary-foreground/40"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
