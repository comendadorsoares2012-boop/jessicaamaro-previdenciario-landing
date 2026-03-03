import { motion } from "framer-motion";
import { Award, Users, Shield, BookOpen } from "lucide-react";
import jessicaAbout from "@/assets/jessica-about.png";

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
                alt="Dra. Jéssica Amaro"
                className="relative rounded-2xl shadow-xl w-full max-w-sm object-cover aspect-[4/3]"
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
            <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-gold mb-3">Sobre</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-green mb-6">
              Dra. Jéssica Amaro
            </h2>
            <div className="w-12 h-px bg-brand-gold mb-8" />
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Advogada comprometida com a defesa dos direitos previdenciários dos seus clientes. 
              Com formação sólida e experiência dedicada ao Direito Previdenciário, atua em todas as 
              esferas — administrativa e judicial — para garantir que cada cliente receba o benefício 
              que lhe é de direito.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 bg-background rounded-lg p-4 border border-border hover:border-brand-gold/30 transition-colors duration-300"
                >
                  <stat.icon className="text-brand-gold shrink-0" size={24} strokeWidth={1.5} />
                  <p className="font-body text-sm font-medium text-brand-green">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
