import { motion } from "framer-motion";
import jessicaAbout from "@/assets/jessica-about.png";

const Authority = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-brand-gold/15 rounded-2xl -rotate-2" />
              <img
                src={jessicaAbout}
                alt="Jéssica Amaro - Advogada"
                className="relative rounded-2xl shadow-xl w-full max-w-sm object-cover aspect-[4/5]"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-gold mb-3">
              ​
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-green mb-6">
              Quem está à frente
            </h2>
            <div className="w-12 h-px bg-brand-gold mb-8" />
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              <strong className="text-brand-green">Jéssica Amaro</strong> é advogada com atuação nas áreas de Direito Previdenciário e do Consumidor, com experiência em cálculos de benefícios do INSS e na defesa dos direitos dos consumidores.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Seu trabalho é pautado na técnica, estratégia e compromisso com a entrega do melhor resultado possível para cada cliente.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
