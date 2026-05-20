import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 lg:py-32 bg-brand-green relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-gold mb-3">​</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Precisa de orientação jurídica?
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mb-6" />
          <p className="font-body text-base md:text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10">
            Entre em contato e tenha uma análise do seu caso com segurança e clareza.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold text-brand-green font-body font-semibold px-8 py-3.5 rounded text-base hover:bg-brand-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-brand-gold/25 hover:-translate-y-0.5"
            >
              Agendar Consulta
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="border-brand-gold/40 text-brand-gold font-body font-medium px-8 py-3.5 rounded text-base hover:bg-brand-gold/10 transition-all duration-300 hover:-translate-y-0.5 border-0"
            >
              ​
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group flex flex-col items-center text-center p-8 rounded-lg border border-brand-gold/20 hover:border-brand-gold/50 hover:bg-brand-green-light transition-all duration-300"
          >
            <MessageCircle className="text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-300" size={36} strokeWidth={1.5} />
            <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">​</h3>
            <p className="font-body text-sm text-primary-foreground/60">(21) 99184-8197</p>
          </motion.a>

          <motion.a
            href="tel:+552126952241"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group flex flex-col items-center text-center p-8 rounded-lg border border-brand-gold/20 hover:border-brand-gold/50 hover:bg-brand-green-light transition-all duration-300"
          >
            <Phone className="text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-300" size={36} strokeWidth={1.5} />
            <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">Telefone</h3>
            <p className="font-body text-sm text-primary-foreground/60">(21) 2695-2241</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group flex flex-col items-center text-center p-8 rounded-lg border border-brand-gold/20 hover:border-brand-gold/50 hover:bg-brand-green-light transition-all duration-300"
          >
            <MapPin className="text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-300" size={36} strokeWidth={1.5} />
            <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">Endereço</h3>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              Av. Gov. Roberto Silveira, 470<br />
              Sala 1117 – Centro Top Commerce<br />
              Nova Iguaçu – RJ
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
