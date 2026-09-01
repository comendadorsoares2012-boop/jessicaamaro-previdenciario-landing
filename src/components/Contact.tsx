import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import GoldButton from "./GoldButton";

const Contact = () => {
  return (
    <section id="contato" className="py-20 lg:py-32 bg-cream relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-brand-gold mb-3">​</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-green mb-6">
            Precisa de orientação jurídica?
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mb-6" />
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Entre em contato e tenha uma análise do seu caso com segurança e clareza.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <GoldButton href="https://wa.me/5521991848197?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20J%C3%A9ssica%20Amaro." target="_blank" rel="noopener noreferrer" size="md">
              Agendar Consulta
            </GoldButton>
            <a
              href="https://wa.me/5521991848197?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20J%C3%A9ssica%20Amaro."
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold font-body font-medium px-2 py-3 text-xs uppercase tracking-[0.2em] border-b border-brand-gold/40 hover:text-brand-gold-light hover:border-brand-gold transition-colors duration-300"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.a
            href="https://wa.me/5521991848197?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20J%C3%A9ssica%20Amaro."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group flex flex-col items-center text-center p-8 rounded-lg border border-brand-gold/20 hover:border-brand-gold/50 hover:bg-white transition-all duration-300"
          >
            <MessageCircle className="text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-300" size={36} strokeWidth={1.5} />
            <h3 className="font-display text-lg font-semibold text-brand-green mb-2">WhatsApp</h3>
            <p className="font-body text-sm text-muted-foreground">(21) 99184-8197</p>
          </motion.a>

          <motion.a
            href="tel:+552126952241"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group flex flex-col items-center text-center p-8 rounded-lg border border-brand-gold/20 hover:border-brand-gold/50 hover:bg-white transition-all duration-300"
          >
            <Phone className="text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-300" size={36} strokeWidth={1.5} />
            <h3 className="font-display text-lg font-semibold text-brand-green mb-2">Telefone</h3>
            <p className="font-body text-sm text-muted-foreground">​</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group flex flex-col items-center text-center p-8 rounded-lg border border-brand-gold/20 hover:border-brand-gold/50 hover:bg-white transition-all duration-300"
          >
            <MapPin className="text-brand-gold mb-4 group-hover:scale-110 transition-transform duration-300" size={36} strokeWidth={1.5} />
            <h3 className="font-display text-lg font-semibold text-brand-green mb-2">Endereço</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
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
