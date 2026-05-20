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
    <section id="servicos" className="py-20 lg:py-32 bg-background">
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-green mb-6">
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
              className="group bg-background border border-border rounded-lg p-8 lg:p-10 hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <area.icon
                className="mb-5 text-brand-gold group-hover:scale-110 transition-transform duration-300"
                size={40}
                strokeWidth={1.5}
              />
              <h3 className="font-display text-2xl font-semibold text-brand-green mb-3">
                {area.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {area.description}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="text-brand-gold shrink-0 mt-0.5" size={18} strokeWidth={2} />
                    <span className="font-body text-sm text-brand-green">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="self-start border border-brand-gold/40 text-brand-green font-body font-medium px-6 py-2.5 rounded text-sm hover:bg-brand-gold hover:text-brand-green transition-all duration-300 hover:-translate-y-0.5"
              >
                Saiba mais
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
