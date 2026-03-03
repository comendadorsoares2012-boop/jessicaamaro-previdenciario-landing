import { motion } from "framer-motion";
import { FileCheck, Clock, Calculator, HeartPulse, Baby, AlertCircle } from "lucide-react";

const services = [
  { icon: FileCheck, title: "Aposentadorias", description: "Por idade, tempo de contribuição, especial, do professor e da pessoa com deficiência." },
  { icon: HeartPulse, title: "Auxílio-Doença e Invalidez", description: "Benefícios por incapacidade temporária ou permanente junto ao INSS." },
  { icon: Baby, title: "Salário-Maternidade", description: "Orientação e requerimento do benefício para seguradas do INSS." },
  { icon: Calculator, title: "Planejamento Previdenciário", description: "Análise completa do histórico contributivo para a melhor estratégia de aposentadoria." },
  { icon: AlertCircle, title: "Revisões de Benefícios", description: "Revisão de valores de aposentadorias e benefícios concedidos incorretamente." },
  { icon: Clock, title: "BPC/LOAS", description: "Benefício assistencial para idosos e pessoas com deficiência de baixa renda." },
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
          <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-gold mb-3">Áreas de Atuação</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-green mb-6">Serviços</h2>
          <div className="w-12 h-px bg-brand-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-background border border-border rounded-lg p-8 hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300"
            >
              <service.icon className="mb-5 text-brand-gold group-hover:scale-110 transition-transform duration-300" size={36} strokeWidth={1.5} />
              <h3 className="font-display text-xl font-semibold text-brand-green mb-3">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
