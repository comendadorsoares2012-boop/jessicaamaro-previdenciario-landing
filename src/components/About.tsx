import { motion } from "framer-motion";
import { Award, Users, Shield, BookOpen } from "lucide-react";

const stats = [
  { icon: Award, label: "Especialista em Direito Previdenciário" },
  { icon: Users, label: "Atendimento humanizado" },
  { icon: Shield, label: "Ética e transparência" },
  { icon: BookOpen, label: "Atualização constante" },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-gold mb-3">Sobre</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Dra. Jéssica Amaro
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mb-8" />
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Advogada comprometida com a defesa dos direitos previdenciários dos seus clientes. 
              Com formação sólida e experiência dedicada ao Direito Previdenciário, atua em todas as 
              esferas — administrativa e judicial — para garantir que cada cliente receba o benefício 
              que lhe é de direito.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background rounded-lg p-6 text-center border border-border hover:border-gold/30 transition-colors duration-300 hover:shadow-md"
              >
                <stat.icon className="mx-auto mb-4 text-gold" size={32} strokeWidth={1.5} />
                <p className="font-body text-sm font-medium text-navy">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
