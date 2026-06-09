import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { CheckCircle2, ShieldCheck, Scale, Award } from "lucide-react";
import logo from "@/assets/logo.png";
import jessicaContact from "@/assets/jessica-contact.png";

const WHATSAPP = "5521991848197";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo").max(100),
  whatsapp: z
    .string()
    .trim()
    .regex(/^\d{10,11}$/, "Informe um WhatsApp válido (DDD + número)"),
  mensagem: z.string().trim().max(500).optional(),
});

const beneficios = [
  "Cobranças indevidas em bancos, cartões e financeiras",
  "Negativa abusiva de plano de saúde ou seguro",
  "Produto com defeito ou serviço não entregue",
  "Nome negativado indevidamente e golpes online",
];

const Consulta = () => {
  const [form, setForm] = useState({ nome: "", whatsapp: "", mensagem: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Injeta noindex e título exclusivo desta página
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Atendimento jurídico | Dra. Jéssica Amaro";

    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    return () => {
      document.title = prevTitle;
      document.head.removeChild(meta);
    };
  }, []);

  const formatWhatsapp = (v: string) => {
    const digits = v.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10)
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = {
      nome: form.nome,
      whatsapp: form.whatsapp.replace(/\D/g, ""),
      mensagem: form.mensagem,
    };
    const result = schema.safeParse(cleaned);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const text =
      `Olá, Dra. Jéssica! Meu nome é ${cleaned.nome}.` +
      (cleaned.mensagem ? ` ${cleaned.mensagem}` : "") +
      ` Vim pelo site e gostaria de uma análise do meu caso (Direito do Consumidor).`;
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-brand-green text-primary-foreground">
      {/* Topo simples sem navegação */}
      <header className="border-b border-brand-gold/20">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center gap-3">
          <img src={logo} alt="Dra. Jéssica Amaro" className="h-10 w-auto" />
          <span className="font-display text-lg font-bold tracking-wide">
            Dra. Jéssica <span className="text-brand-gold">Amaro</span>
          </span>
        </div>
      </header>

      {/* Hero + Formulário */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
          <span className="font-display italic text-[18rem] md:text-[26rem] text-brand-gold/[0.04] leading-none">
            JA
          </span>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-xs uppercase tracking-[0.25em] text-brand-gold mb-4">
                Direito do Consumidor
              </p>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Seus direitos como consumidor merecem ser respeitados.
                <span className="block text-gradient-gold mt-2">
                  Conte com orientação jurídica especializada.
                </span>
              </h1>
              <div className="w-16 h-px bg-brand-gold mb-5" />
              <p className="font-body text-base md:text-lg text-primary-foreground/75 mb-8 leading-relaxed">
                Problemas com bancos, planos de saúde, lojas ou prestadores de serviço? A Dra. Jéssica Amaro avalia o seu caso com ética, sigilo profissional e atendimento humanizado.
              </p>

              <ul className="space-y-3 mb-8">
                {beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-brand-gold mt-0.5 flex-shrink-0"
                      size={20}
                      strokeWidth={1.8}
                    />
                    <span className="font-body text-sm md:text-base text-primary-foreground/85">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="hidden lg:flex items-center gap-6 pt-4 border-t border-brand-gold/15">
                <div className="flex items-center gap-2 text-primary-foreground/70">
                  <ShieldCheck size={18} className="text-brand-gold" />
                  <span className="text-xs uppercase tracking-wider">Sigilo total</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/70">
                  <Scale size={18} className="text-brand-gold" />
                  <span className="text-xs uppercase tracking-wider">OAB/RJ</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/70">
                  <Award size={18} className="text-brand-gold" />
                  <span className="text-xs uppercase tracking-wider">Especialista</span>
                </div>
              </div>
            </motion.div>

            {/* Formulário */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-cream text-brand-green rounded-2xl p-6 md:p-8 shadow-2xl border-t-4 border-brand-gold"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Fale com a <span className="text-brand-gold">Dra. Jéssica</span>
              </h2>
              <p className="font-body text-sm text-brand-green/70 mb-6">
                Preencha os dados abaixo e dê o primeiro passo para entender os seus direitos.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block font-body text-xs uppercase tracking-wider font-semibold mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    maxLength={100}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-md border border-brand-green/20 bg-white font-body text-base focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                  />
                  {errors.nome && (
                    <p className="text-xs text-red-600 mt-1">{errors.nome}</p>
                  )}
                </div>

                <div>
                  <label className="block font-body text-xs uppercase tracking-wider font-semibold mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    value={form.whatsapp}
                    onChange={(e) =>
                      setForm({ ...form, whatsapp: formatWhatsapp(e.target.value) })
                    }
                    placeholder="(21) 99999-9999"
                    className="w-full px-4 py-3 rounded-md border border-brand-green/20 bg-white font-body text-base focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                  />
                  {errors.whatsapp && (
                    <p className="text-xs text-red-600 mt-1">{errors.whatsapp}</p>
                  )}
                </div>

                <div>
                  <label className="block font-body text-xs uppercase tracking-wider font-semibold mb-2">
                    Conte seu caso <span className="text-brand-green/50 normal-case font-normal">(opcional)</span>
                  </label>
                  <textarea
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    maxLength={500}
                    rows={3}
                    placeholder="Descreva brevemente o que aconteceu..."
                    className="w-full px-4 py-3 rounded-md border border-brand-green/20 bg-white font-body text-base focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold resize-none"
                  />
                  {errors.mensagem && (
                    <p className="text-xs text-red-600 mt-1">{errors.mensagem}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full relative inline-flex items-center justify-center px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.18em] text-brand-green bg-gradient-to-b from-[hsl(38,68%,67%)] via-brand-gold to-[hsl(32,45%,48%)] border-t border-[hsl(40,80%,86%)] border-b border-[hsl(32,55%,32%)] shadow-[0_4px_0_0_hsl(32,55%,32%)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all duration-200 rounded-sm mt-2"
                >
                  Quero falar com a Dra. Jéssica
                </button>

                <p className="text-[11px] text-brand-green/60 text-center pt-1">
                  Seus dados são confidenciais e usados apenas para retorno.
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Autoridade */}
      <section className="bg-cream text-brand-green py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center max-w-4xl mx-auto">
            <img
              src={jessicaContact}
              alt="Dra. Jéssica Amaro"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-brand-gold mx-auto"
            />
            <div>
              <p className="font-body text-xs uppercase tracking-[0.25em] text-brand-gold mb-2">
                Quem vai cuidar do seu caso
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                Dra. Jéssica Amaro
              </h2>
              <p className="font-body text-sm md:text-base text-brand-green/75 leading-relaxed">
                Advogada especialista em Direito do Consumidor e Direito
                Previdenciário. Atendimento humanizado, estratégico e focado em
                resultados reais para quem teve seus direitos desrespeitados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé minimalista */}
      <footer className="bg-brand-green border-t border-brand-gold/20 py-6">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="font-body text-xs text-primary-foreground/60">
            Dra. Jéssica Amaro Advocacia · Telefone: 2695-2241 / (21) 99184-8197
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Consulta;
