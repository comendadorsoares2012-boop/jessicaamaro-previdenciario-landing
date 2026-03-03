import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
      <div className="container mx-auto px-4 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-gold mb-4">
              Advogada Previdenciária
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Dra. Jéssica{" "}
              <span className="text-gradient-gold">Amaro</span>
            </h1>
            <div className="w-16 h-px bg-brand-gold mb-6 mx-auto lg:mx-0" />
            <p className="font-body text-base md:text-lg text-primary-foreground/60 max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0">
              Especialista em Direito Previdenciário. Atuação dedicada na defesa dos seus direitos — aposentadorias, benefícios e planejamento previdenciário com segurança e transparência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/5521991848197"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gold text-brand-green font-body font-semibold px-8 py-3.5 rounded text-base hover:bg-brand-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/25 hover:-translate-y-0.5"
              >
                Agende sua Consulta
              </a>
              <a
                href="#servicos"
                className="border border-brand-gold/40 text-brand-gold font-body font-medium px-8 py-3.5 rounded text-base hover:bg-brand-gold/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Conheça os Serviços
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
