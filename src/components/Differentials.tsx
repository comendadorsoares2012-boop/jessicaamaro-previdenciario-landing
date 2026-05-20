import { motion } from "framer-motion";
import { Heart, FileSearch, MessageSquare, Target, Eye } from "lucide-react";

const items = [
  { icon: Heart, text: "Atendimento humanizado e personalizado" },
  { icon: FileSearch, text: "Análise técnica detalhada de cada caso" },
  { icon: MessageSquare, text: "Clareza na comunicação com o cliente" },
  { icon: Target, text: "Atuação estratégica focada em resultado" },
  { icon: Eye, text: "Transparência em todas as etapas do processo" },
];

const Differentials = () => {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-gold mb-3">
            Diferenciais
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-green mb-6">
            Diferenciais do escritório
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-background border border-border rounded-lg p-6 hover:border-brand-gold/40 hover:shadow-md transition-all duration-300 flex items-start gap-4"
            >
              <item.icon
                className="text-brand-gold shrink-0 group-hover:scale-110 transition-transform duration-300"
                size={28}
                strokeWidth={1.5}
              />
              <p className="font-body text-sm md:text-base text-brand-green font-medium leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
