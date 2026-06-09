import { useEffect } from "react";

const VERDE_ESCURO = "#34574a";
const AREIA = "#ddbf92";

type Variant = "primary" | "secondary" | "ghost" | "wpp" | "soon";

type LinkItem = {
  icon: string;
  title: string;
  sub: string;
  href: string;
  variant: Variant;
  external?: boolean;
  soonLabel?: string;
};

type Section = {
  label: string;
  items: LinkItem[];
};

const sections: Section[] = [
  {
    label: "Produtos",
    items: [
      {
        icon: "🔵",
        title: "Decifra PAP",
        sub: "Produto principal — aprofundamento completo",
        href: "#",
        variant: "soon",
        soonLabel: "Em breve",
      },
      {
        icon: "🟢",
        title: "Método PAP",
        sub: "Produto de entrada — primeiros passos",
        href: "#",
        variant: "soon",
        soonLabel: "Em breve",
      },
      {
        icon: "🤝",
        title: "Mentoria em Casos Concretos",
        sub: "Acompanhamento prático em casos reais",
        href: "#",
        variant: "primary",
      },
    ],
  },
  {
    label: "Podcast",
    items: [
      {
        icon: "🎙️",
        title: "Podcast Jéssica Amaro",
        sub: "Conteúdos sobre Direito Previdenciário e do Consumidor",
        href: "https://www.youtube.com/@J%C3%A9ssicaAmaroPodcast",
        variant: "secondary",
        external: true,
      },
    ],
  },
  {
    label: "Contato",
    items: [
      {
        icon: "wpp",
        title: "WhatsApp",
        sub: "Fale diretamente com a Dra. Jéssica",
        href: "https://wa.me/5521991848197?text=Ol%C3%A1%21%20Vim%20pelo%20Instagram%20e%20gostaria%20de%20falar%20com%20a%20Dra.%20J%C3%A9ssica.",
        variant: "wpp",
        external: true,
      },
      {
        icon: "🏛",
        title: "Jéssica Amaro Advocacia",
        sub: "Conheça o escritório — site oficial",
        href: "/",
        variant: "ghost",
      },
    ],
  },
];

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const variantStyles: Record<Variant, { card: React.CSSProperties; icon: React.CSSProperties; title: React.CSSProperties; sub: React.CSSProperties; arrow: React.CSSProperties }> = {
  primary: {
    card: { background: AREIA, border: "none" },
    icon: { background: VERDE_ESCURO, color: AREIA },
    title: { color: VERDE_ESCURO },
    sub: { color: "rgba(52,87,74,0.65)" },
    arrow: { color: "rgba(52,87,74,0.5)" },
  },
  secondary: {
    card: { background: "rgba(221,191,146,0.08)", border: "1px solid rgba(221,191,146,0.2)" },
    icon: { background: "rgba(221,191,146,0.15)", color: AREIA },
    title: { color: "#faf8f4" },
    sub: { color: "rgba(230,215,190,0.5)" },
    arrow: { color: "rgba(221,191,146,0.3)" },
  },
  ghost: {
    card: { background: "transparent", border: "1px solid rgba(221,191,146,0.15)" },
    icon: { background: "rgba(221,191,146,0.08)", color: "rgba(221,191,146,0.6)" },
    title: { color: "rgba(230,215,190,0.75)" },
    sub: { color: "rgba(230,215,190,0.4)" },
    arrow: { color: "rgba(221,191,146,0.2)" },
  },
  wpp: {
    card: { background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.25)" },
    icon: { background: "rgba(37,211,102,0.15)", color: "#25D366" },
    title: { color: "#faf8f4" },
    sub: { color: "rgba(230,215,190,0.5)" },
    arrow: { color: "rgba(37,211,102,0.4)" },
  },
  soon: {
    card: { background: "rgba(221,191,146,0.04)", border: "1px solid rgba(221,191,146,0.1)" },
    icon: { background: "rgba(221,191,146,0.06)", color: "rgba(221,191,146,0.35)" },
    title: { color: "rgba(230,215,190,0.45)" },
    sub: { color: "rgba(230,215,190,0.3)" },
    arrow: { color: "transparent" },
  },
};

const Links = () => {
  useEffect(() => {
    document.title = "Jéssica Amaro";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-x-hidden flex flex-col items-center"
      style={{
        background: VERDE_ESCURO,
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
        padding: "48px 20px 60px",
      }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none fixed z-0"
        style={{
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(221,191,146,0.08) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed z-0"
        style={{
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(58,104,88,0.5) 0%, transparent 65%)",
        }}
      />

      <div className="w-full max-w-[420px] flex flex-col items-center relative z-10">
        {/* PROFILE */}
        <div className="flex flex-col items-center mb-9 animate-[fadeDown_0.7s_ease_both]">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shrink-0"
            style={{
              background: `linear-gradient(135deg, #3a6858, ${AREIA})`,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 32,
              fontWeight: 300,
              color: VERDE_ESCURO,
              border: "2px solid rgba(221,191,146,0.3)",
            }}
          >
            JA
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 26,
              fontWeight: 400,
              color: "#faf8f4",
              letterSpacing: "0.3px",
              marginBottom: 6,
            }}
          >
            Jéssica Amaro
          </h1>
          <p
            className="text-center"
            style={{
              fontSize: 13,
              color: "rgba(221,191,146,0.75)",
              lineHeight: 1.6,
              maxWidth: 280,
              letterSpacing: "0.2px",
            }}
          >
            Advocacia, mentoria e conteúdo sobre Direito Previdenciário e do Consumidor
          </p>
          <div className="flex gap-2 flex-wrap justify-center mt-3.5">
            {["Advogada", "Mentora", "Palestrante"].map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 10,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "rgba(221,191,146,0.5)",
                  border: "1px solid rgba(221,191,146,0.2)",
                  padding: "4px 10px",
                  borderRadius: 100,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px mb-7" style={{ background: "rgba(221,191,146,0.12)" }} />

        {/* SECTIONS */}
        {sections.map((section) => (
          <div key={section.label} className="w-full">
            <p
              className="w-full"
              style={{
                fontSize: 10,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "rgba(221,191,146,0.4)",
                marginBottom: 12,
                paddingLeft: 4,
              }}
            >
              {section.label}
            </p>
            <div className="w-full flex flex-col gap-2.5 mb-7">
              {section.items.map((item, i) => {
                const s = variantStyles[item.variant];
                const isSoon = item.variant === "soon";
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={isSoon ? (e) => e.preventDefault() : undefined}
                    className="group w-full flex items-center gap-4 no-underline relative overflow-hidden transition-all duration-200 ease-out hover:-translate-y-0.5"
                    style={{
                      ...s.card,
                      padding: "18px 20px",
                      borderRadius: 14,
                      cursor: isSoon ? "default" : "pointer",
                      animation: `fadeUp 0.6s ease both`,
                      animationDelay: `${0.1 + i * 0.05}s`,
                    }}
                  >
                    <div
                      className="shrink-0 flex items-center justify-center relative z-10"
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        fontSize: 18,
                        ...s.icon,
                      }}
                    >
                      {item.icon === "wpp" ? <WhatsAppIcon /> : item.icon}
                    </div>
                    <div className="flex-1 flex flex-col gap-0.5 relative z-10 min-w-0">
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          lineHeight: 1.3,
                          ...s.title,
                        }}
                      >
                        {item.title}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 300,
                          lineHeight: 1.3,
                          ...s.sub,
                        }}
                      >
                        {item.sub}
                      </span>
                    </div>
                    {isSoon ? (
                      <span
                        className="ml-auto shrink-0"
                        style={{
                          fontSize: 9,
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: AREIA,
                          background: "rgba(221,191,146,0.12)",
                          border: "1px solid rgba(221,191,146,0.2)",
                          padding: "3px 8px",
                          borderRadius: 100,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.soonLabel ?? "Em breve"}
                      </span>
                    ) : (
                      <span
                        className="relative z-10 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                        style={{ fontSize: 16, ...s.arrow }}
                      >
                        →
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        ))}

        {/* FOOTER */}
        <div className="mt-4 text-center animate-[fadeUp_0.6s_0.4s_ease_both]">
          <p
            style={{
              fontSize: 11,
              color: "rgba(221,191,146,0.25)",
              letterSpacing: "0.5px",
            }}
          >
            © {new Date().getFullYear()} Jéssica Amaro · Todos os direitos reservados
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Links;
