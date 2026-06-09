import { useEffect } from "react";
import { motion } from "framer-motion";

const VERDE_ESCURO = "#34574a";
const VERDE_MEDIO = "#3a6858";
const AREIA = "#ddbf92";
const CREME = "#e6d7be";
const BRANCO = "#faf8f4";
const TEXTO = "#1e2e28";

const WPP_LINK =
  "https://wa.me/5521991848197?text=Ol%C3%A1%20J%C3%A9ssica!%20Quero%20agendar%20uma%20mentoria%20individual.";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
} as const;

const Section: React.FC<React.PropsWithChildren<{ className?: string; style?: React.CSSProperties }>> = ({
  children,
  className = "",
  style,
}) => (
  <motion.section
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeUp}
    className={className}
    style={{ maxWidth: 720, margin: "0 auto", padding: "96px 32px", ...style }}
  >
    {children}
  </motion.section>
);

const SectionLabel: React.FC<React.PropsWithChildren<{ color?: string }>> = ({ children, color }) => (
  <p
    style={{
      fontSize: 11,
      letterSpacing: 3,
      textTransform: "uppercase",
      color: color ?? VERDE_MEDIO,
      marginBottom: 22,
      display: "flex",
      alignItems: "center",
      gap: 12,
    }}
  >
    <span style={{ display: "inline-block", width: 28, height: 1, background: "currentColor", opacity: 0.5 }} />
    {children}
  </p>
);

const SectionTitle: React.FC<React.PropsWithChildren<{ light?: boolean }>> = ({ children, light }) => (
  <h2
    style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "clamp(30px, 5.4vw, 46px)",
      fontWeight: 300,
      color: light ? BRANCO : VERDE_ESCURO,
      lineHeight: 1.15,
      marginBottom: 24,
      letterSpacing: "-0.5px",
    }}
  >
    {children}
  </h2>
);

const Mentoria = () => {
  useEffect(() => {
    document.title = "Mentoria Individual — Jéssica Amaro";
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Mentoria individual em Direito Previdenciário com Jéssica Amaro. Orientação técnica em casos concretos via Google Meet.";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const items = [
    {
      icon: "⚖",
      title: "Análise de Processo Administrativo (PAP)",
      desc: "Leitura técnica do processo, identificação de erros de cálculo e orientação sobre a melhor estratégia.",
    },
    {
      icon: "🧮",
      title: "Cálculo e Revisão de Benefícios",
      desc: "Validação de cálculos, identificação de regras mais vantajosas e planejamento previdenciário do cliente.",
    },
    {
      icon: "🎯",
      title: "Dúvidas técnicas em casos concretos",
      desc: "Temas da sua escolha — o atendimento é construído a partir da sua necessidade real.",
    },
    {
      icon: "🖥",
      title: "Compartilhamento de tela",
      desc: "Você pode compartilhar o processo ou decisão durante a sessão para análise em tempo real.",
    },
  ];

  const tags = [
    "Advogados iniciantes no previdenciário",
    "Quem tem dúvida em cálculo",
    "Quem suspeita de erro do INSS",
    "Quem quer aprender a ler o PAP",
    "Quem precisa de uma segunda opinião técnica",
  ];

  const steps = [
    { n: "I", title: "Entre em contato pelo WhatsApp", desc: "Envie uma mensagem informando o tema ou dúvida que quer trabalhar na sessão." },
    { n: "II", title: "Realize o pagamento antecipado", desc: "R$ 600 por hora. Após a confirmação do pagamento, o agendamento é confirmado." },
    { n: "III", title: "Acesse o Google Meet no horário agendado", desc: "O link da reunião é enviado após a confirmação. Tenha o processo em mãos." },
    { n: "IV", title: "Saia com clareza e segurança", desc: "Uma hora focada no seu caso. Sem enrolação." },
  ];

  return (
    <div
      style={{
        background: BRANCO,
        color: TEXTO,
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
        overflowX: "hidden",
      }}
    >
      {/* HERO */}
      <div
        style={{
          minHeight: "100vh",
          background: `radial-gradient(120% 80% at 80% 0%, ${VERDE_MEDIO} 0%, ${VERDE_ESCURO} 55%, #2b463c 100%)`,
          position: "relative",
          overflow: "hidden",
          padding: "60px 32px 0",
          display: "grid",
          gridTemplateRows: "1fr auto",
        }}
      >
        {/* Decorative gold orb */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -140,
            right: -140,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(221,191,146,0.18) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 40,
            left: -120,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(58,104,88,0.55) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        {/* subtle grain via SVG */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            mixBlendMode: "overlay",
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: 720,
            margin: "0 auto",
            width: "100%",
            padding: "80px 0 60px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid rgba(221,191,146,0.4)",
              color: AREIA,
              fontSize: 11,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              padding: "8px 18px",
              borderRadius: 100,
              marginBottom: 36,
              width: "fit-content",
              background: "rgba(221,191,146,0.05)",
              backdropFilter: "blur(4px)",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: AREIA }} />
            Mentoria Individual · Direito Previdenciário
          </span>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(42px, 8.4vw, 78px)",
              fontWeight: 300,
              color: BRANCO,
              lineHeight: 1.05,
              marginBottom: 16,
              letterSpacing: "-1px",
            }}
          >
            Resolva seu caso
            <br />
            <em
              style={{
                fontStyle: "italic",
                background: `linear-gradient(135deg, ${AREIA} 0%, ${CREME} 60%, #f4e3c2 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              com quem domina
            </em>
            <br />o PAP.
          </h1>

          <p
            style={{
              fontSize: 16,
              color: "rgba(230,215,190,0.75)",
              lineHeight: 1.75,
              marginTop: 24,
              maxWidth: 500,
            }}
          >
            Atendimento individualizado para advogados e advogadas que precisam de orientação técnica em casos concretos
            de direito previdenciário.
          </p>

          {/* Premium price card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: EASE }}
            style={{
              position: "relative",
              background:
                "linear-gradient(135deg, rgba(221,191,146,0.12) 0%, rgba(221,191,146,0.04) 100%)",
              border: "1px solid rgba(221,191,146,0.25)",
              borderRadius: 20,
              padding: "30px 32px",
              marginTop: 52,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
              backdropFilter: "blur(8px)",
              boxShadow: "0 24px 60px -20px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* gold hairline accent */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: 0,
                left: 24,
                right: 24,
                height: 1,
                background: `linear-gradient(90deg, transparent, ${AREIA}, transparent)`,
                opacity: 0.6,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                  color: "rgba(221,191,146,0.65)",
                }}
              >
                Investimento por hora
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 46,
                  fontWeight: 300,
                  color: AREIA,
                  lineHeight: 1,
                  letterSpacing: "-0.5px",
                }}
              >
                R$ 600
              </span>
              <span style={{ fontSize: 12, color: "rgba(230,215,190,0.55)", marginTop: 4 }}>
                Pagamento antecipado · Via Google Meet
              </span>
            </div>
            <a
              href={WPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: `linear-gradient(135deg, ${AREIA} 0%, ${CREME} 100%)`,
                color: VERDE_ESCURO,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: 0.5,
                padding: "16px 28px",
                borderRadius: 100,
                textDecoration: "none",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                boxShadow: "0 8px 24px rgba(221,191,146,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 14px 36px rgba(221,191,146,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(221,191,146,0.25)";
              }}
            >
              Agendar agora
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        <div
          style={{
            borderTop: "1px solid rgba(221,191,146,0.15)",
            padding: "24px 0",
            display: "flex",
            justifyContent: "center",
            maxWidth: 720,
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "rgba(221,191,146,0.45)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
            }}
          >
            Saiba mais
            <motion.span
              animate={{ scaleY: [1, 1.4, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              style={{ display: "block", width: 1, height: 32, background: "rgba(221,191,146,0.4)", transformOrigin: "top" }}
            />
          </span>
        </div>
      </div>

      {/* O QUE É */}
      <div style={{ background: CREME }}>
        <Section>
          <SectionLabel>O que é</SectionLabel>
          <SectionTitle>
            Uma hora focada
            <br />
            no <em style={{ fontStyle: "italic", color: VERDE_MEDIO }}>seu caso.</em>
          </SectionTitle>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4a5e57", maxWidth: 560 }}>
            A mentoria é um atendimento individual, via Google Meet, com duração de até 1 hora. Você traz o caso. A
            gente analisa juntos.
          </p>

          <div style={{ display: "grid", gap: 14, marginTop: 44 }}>
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
                whileHover={{ y: -3, boxShadow: "0 16px 40px rgba(52,87,74,0.12)" }}
                style={{
                  display: "flex",
                  gap: 22,
                  alignItems: "flex-start",
                  padding: 26,
                  background: "white",
                  borderRadius: 16,
                  border: "1px solid rgba(52,87,74,0.08)",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: `linear-gradient(135deg, ${VERDE_ESCURO}, ${VERDE_MEDIO})`,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: AREIA,
                    fontSize: 18,
                    boxShadow: "0 4px 12px rgba(52,87,74,0.2)",
                  }}
                >
                  {it.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 500, color: VERDE_ESCURO, marginBottom: 6 }}>{it.title}</h3>
                  <p style={{ fontSize: 14, color: "#6b7c76", lineHeight: 1.65 }}>{it.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* PARA QUEM */}
      <Section style={{ borderTop: "1px solid rgba(52,87,74,0.08)" }}>
        <SectionLabel>Para quem é</SectionLabel>
        <SectionTitle>
          Para advogados que
          <br />
          <em style={{ fontStyle: "italic", color: VERDE_MEDIO }}>não querem chutar.</em>
        </SectionTitle>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: "#4a5e57", maxWidth: 560 }}>
          Se você tem um caso previdenciário nas mãos e precisa de segurança técnica pra tomar a decisão certa — essa
          mentoria é para você.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 36 }}>
          {tags.map((t, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              style={{
                border: `1px solid ${VERDE_MEDIO}`,
                color: VERDE_ESCURO,
                fontSize: 13,
                padding: "9px 18px",
                borderRadius: 100,
                background: "rgba(58,104,88,0.04)",
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </Section>

      {/* AVISO */}
      <div style={{ background: VERDE_ESCURO, position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            right: -100,
            transform: "translateY(-50%)",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(221,191,146,0.08) 0%, transparent 70%)",
          }}
        />
        <Section style={{ padding: "72px 32px" }}>
          <div
            style={{
              border: "1px solid rgba(221,191,146,0.25)",
              borderRadius: 20,
              padding: 36,
              background: "rgba(0,0,0,0.1)",
              backdropFilter: "blur(4px)",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 24,
                fontWeight: 300,
                color: AREIA,
                marginBottom: 20,
                fontStyle: "italic",
              }}
            >
              Importante saber
            </p>
            <p style={{ fontSize: 14, color: "rgba(230,215,190,0.78)", lineHeight: 1.8 }}>
              A mentoria é um serviço de orientação técnica entre colegas advogados. Não envolve elaboração de parecer,
              peticionamento, protocolo de recurso ou qualquer atuação ativa da mentora em atividades relacionadas à
              advocacia.
            </p>
            <p
              style={{
                fontSize: 14,
                color: "rgba(230,215,190,0.78)",
                lineHeight: 1.8,
                marginTop: 16,
                paddingTop: 16,
                borderTop: "1px solid rgba(221,191,146,0.15)",
              }}
            >
              Para melhor aproveitamento, recomendamos acessar pelo computador — assim é possível compartilhar a tela e
              analisar o processo juntos em tempo real.
            </p>
          </div>
        </Section>
      </div>

      {/* COMO FUNCIONA */}
      <Section>
        <SectionLabel>Como funciona</SectionLabel>
        <SectionTitle>
          Simples e <em style={{ fontStyle: "italic", color: VERDE_MEDIO }}>direto.</em>
        </SectionTitle>

        <div style={{ display: "grid", gap: 0, marginTop: 44, position: "relative" }}>
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: 23,
              top: 24,
              bottom: 24,
              width: 1,
              background: `linear-gradient(to bottom, ${AREIA}, transparent)`,
            }}
          />
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
              style={{ display: "flex", gap: 24, paddingBottom: 36, position: "relative" }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${VERDE_ESCURO}, ${VERDE_MEDIO})`,
                  color: AREIA,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 16,
                  fontStyle: "italic",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "0 6px 18px rgba(52,87,74,0.25), inset 0 1px 0 rgba(221,191,146,0.2)",
                }}
              >
                {s.n}
              </div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 500, color: VERDE_ESCURO, marginBottom: 6, paddingTop: 12 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: "#6b7c76", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <div
        style={{
          background: `radial-gradient(120% 100% at 50% 0%, ${VERDE_MEDIO} 0%, ${VERDE_ESCURO} 60%, #243831 100%)`,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(221,191,146,0.1) 0%, transparent 70%)",
          }}
        />
        <Section style={{ padding: "96px 32px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SectionLabel color="rgba(221,191,146,0.7)">Pronto para começar?</SectionLabel>
          <SectionTitle light>
            Agende sua
            <br />
            <em
              style={{
                fontStyle: "italic",
                background: `linear-gradient(135deg, ${AREIA} 0%, ${CREME} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              mentoria agora.
            </em>
          </SectionTitle>
          <p style={{ fontSize: 15, color: "rgba(230,215,190,0.7)", lineHeight: 1.75, maxWidth: 440, marginBottom: 44 }}>
            Tire sua dúvida, resolva seu caso e atenda seu cliente com a segurança que ele merece.
          </p>

          <a
            href={WPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "#25D366",
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              fontWeight: 500,
              padding: "18px 38px",
              borderRadius: 100,
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 12px 30px rgba(37,211,102,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 18px 44px rgba(37,211,102,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 30px rgba(37,211,102,0.3)";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>

          <div
            style={{
              margin: "26px 0",
              color: "rgba(230,215,190,0.4)",
              fontSize: 11,
              letterSpacing: 3,
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ width: 32, height: 1, background: "currentColor" }} />
            ou
            <span style={{ width: 32, height: 1, background: "currentColor" }} />
          </div>

          <a
            href={WPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid rgba(221,191,146,0.4)",
              color: AREIA,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              padding: "16px 32px",
              borderRadius: 100,
              textDecoration: "none",
              transition: "all 0.3s ease",
              background: "rgba(221,191,146,0.04)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(221,191,146,0.12)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = AREIA;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(221,191,146,0.04)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(221,191,146,0.4)";
            }}
          >
            Agendar por mensagem
          </a>
        </Section>
      </div>

      <footer style={{ background: "#1e2e28", padding: 32, textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "rgba(230,215,190,0.35)", letterSpacing: 0.5 }}>
          © 2025 Jéssica Amaro · Advogada e Mentora em Direito Previdenciário
        </p>
      </footer>
    </div>
  );
};

export default Mentoria;
