import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-gold mb-3">
            ​
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-green mb-6">
            Sobre o escritório
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mb-10" />

          <div className="space-y-6 text-left md:text-center">
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              A <strong className="text-brand-green">Jéssica Amaro Advocacia</strong> é um escritório dedicado à defesa dos direitos nas áreas previdenciária e do consumidor, com atuação técnica e personalizada.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Nosso trabalho vai além do jurídico tradicional: analisamos cada caso com estratégia, buscando não apenas o direito, mas o melhor resultado possível para o cliente.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Com experiência prática e atuação constante, oferecemos segurança, clareza e acompanhamento próximo em todas as etapas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
