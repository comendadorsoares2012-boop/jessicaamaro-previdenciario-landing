import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-cream relative overflow-hidden">
      <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 select-none">
        <span className="font-display italic text-[20rem] text-brand-gold/[0.05] leading-none">JA</span>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="border-l-[3px] border-brand-gold pl-6 mb-12">
            <p className="font-body text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-3">
              ​
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-green leading-tight">
              Sobre o <span className="italic font-medium">escritório</span>
            </h2>
          </div>

          <div className="space-y-6 pl-6">
            <p className="font-body text-base md:text-lg text-muted-foreground leading-loose">
              A <strong className="text-brand-green">Jéssica Amaro Advocacia</strong> é um escritório dedicado à defesa dos direitos nas áreas previdenciária e do consumidor, com atuação técnica e personalizada.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-loose">
              Nosso trabalho vai além do jurídico tradicional: analisamos cada caso com estratégia, buscando não apenas o direito, mas o melhor resultado possível para o cliente.
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-loose">
              Com experiência prática e atuação constante, oferecemos segurança, clareza e acompanhamento próximo em todas as etapas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
