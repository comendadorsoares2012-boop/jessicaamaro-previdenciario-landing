import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center mb-6">
            <Scale className="text-gold" size={48} strokeWidth={1.5} />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Jéssica <span className="text-gradient-gold">Amaro</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-4 font-light tracking-wide">
            Advogada Especialista em Direito Previdenciário
          </p>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="font-body text-base text-primary-foreground/60 max-w-xl mx-auto mb-10 leading-relaxed">
            Atuação dedicada na defesa dos seus direitos previdenciários. 
            Aposentadorias, benefícios e planejamento previdenciário com segurança e transparência.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/5521991848197"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-navy font-body font-semibold px-8 py-3.5 rounded text-base hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 hover:-translate-y-0.5"
          >
            Agende sua Consulta
          </a>
          <a
            href="#servicos"
            className="border border-gold/40 text-gold font-body font-medium px-8 py-3.5 rounded text-base hover:bg-gold/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Conheça os Serviços
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
