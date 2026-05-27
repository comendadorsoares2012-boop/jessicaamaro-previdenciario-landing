import { motion } from "framer-motion";
import { Scale, ShoppingBag, Check } from "lucide-react";

const areas = [
  {
    icon: Scale,
    title: "Direito Previdenciário",
    description: "Atuação voltada à concessão, revisão e planejamento de benefícios junto ao INSS.",
    items: [
      "Aposentadorias",
      "Revisões de benefício",
      "Planejamento previdenciário",
      "Auxílios e benefícios por incapacidade",
      "Salário-maternidade",
      "BPC/LOAS",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Direito do Consumidor",
    description: "Defesa dos direitos em relações de consumo, com foco na reparação de danos e solução de conflitos.",
    items: [
      "Problemas com companhias aéreas",
      "Serviços essenciais (luz/água/telefone)",
      "Cobranças indevidas",
      "Negativação indevida",
      "Bancos e empréstimos",
      "Danos morais",
    ],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-brand-green">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-gold mb-3">
            ​
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Áreas de Atuação
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-brand-green-light/20 border border-brand-gold/20 rounded-sm p-8 lg:p-10 hover:border-brand-gold/40 hover:shadow-[0_20px_50px_-20px_hsl(160,55%,12%/0.4)] transition-all duration-500 flex flex-col relative"
            >
              <div className="w-12 h-12 border border-brand-gold flex items-center justify-center mb-6">
                <area.icon
                  className="text-brand-gold group-hover:scale-110 transition-transform duration-300"
                  size={22}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-4">
                {area.title}
              </h3>
              <div className="w-10 h-px bg-brand-gold mb-5" />
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed mb-6">
                {area.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="text-brand-gold shrink-0 mt-0.5" size={16} strokeWidth={2} />
                    <span className="font-body text-sm text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="self-start text-brand-gold text-[11px] font-bold uppercase tracking-[0.2em] flex items-center group/link"
              >
                Saiba mais
                <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
