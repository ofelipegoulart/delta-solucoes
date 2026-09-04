import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";

const REDES = [
  { nome: "Instagram", href: "https://instagram.com/delta.impressao", Icon: InstagramIcon },
  { nome: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { nome: "WhatsApp", href: "https://wa.me/5511987518911", Icon: WhatsAppIcon },
];

export default function ContatoChannels() {
  return (
    <div>
      <h2
        className="font-bold text-marinho"
        style={{
          fontSize: "clamp(25px, 3.6vw, 34px)",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
        }}
      >
        Como falar com a gente
      </h2>
      <p className="text-grafite leading-[1.62] mt-3" style={{ fontSize: "clamp(15.5px, 1.7vw, 17px)" }}>
        Quem responde é quem acompanha o seu pedido do orçamento à entrega.
      </p>

      <div
        className="contato-card bg-off-white-morno mt-6 flex flex-col"
        style={{ padding: "clamp(20px, 3vw, 28px)" }}
      >
        <div className="pt-0">
          <p className="text-[11px] font-bold uppercase text-laranja-profundo" style={{ letterSpacing: "0.14em" }}>
            WhatsApp
          </p>
          <a
            href="https://wa.me/5511987518911"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-marinho hover:text-laranja-profundo transition-colors"
            style={{ fontFamily: "var(--font-heading)", fontSize: 20 }}
          >
            (11) 98751-8911
          </a>
        </div>

        <div className="border-t border-borda-morna mt-4 pt-4">
          <p className="text-[11px] font-bold uppercase text-laranja-profundo" style={{ letterSpacing: "0.14em" }}>
            E-mail
          </p>
          <a
            href="mailto:matheus@groupmaxi.com.br"
            className="font-bold text-marinho hover:text-laranja-profundo transition-colors"
            style={{ fontFamily: "var(--font-heading)", fontSize: 18, wordBreak: "break-word" }}
          >
            matheus@groupmaxi.com.br
          </a>
        </div>

        <div className="border-t border-borda-morna mt-4 pt-4">
          <p className="text-[11px] font-bold uppercase text-laranja-profundo" style={{ letterSpacing: "0.14em" }}>
            Horário
          </p>
          <p className="text-grafite" style={{ fontSize: 16 }}>
            Segunda a sexta, horário comercial
          </p>
        </div>

        <div className="border-t border-borda-morna mt-4 pt-4">
          <p className="text-[11px] font-bold uppercase text-laranja-profundo" style={{ letterSpacing: "0.14em" }}>
            Atendimento
          </p>
          <p
            className="font-bold text-marinho"
            style={{ fontFamily: "var(--font-heading)", fontSize: 18 }}
          >
            São Paulo - SP
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-[11px] font-bold uppercase text-laranja-profundo" style={{ letterSpacing: "0.14em" }}>
          Redes
        </p>
        <div className="flex flex-wrap gap-5 mt-3">
          {REDES.map((rede) => (
            <a
              key={rede.nome}
              href={rede.href}
              target={rede.href !== "#" ? "_blank" : undefined}
              rel={rede.href !== "#" ? "noopener noreferrer" : undefined}
              aria-label={rede.nome}
              className="group flex items-center gap-2.5"
            >
              <span
                className="contato-rede-circulo flex items-center justify-center rounded-full bg-off-white-morno text-laranja-profundo transition-colors group-hover:bg-laranja-profundo group-hover:text-white"
                style={{ width: 38, height: 38 }}
                aria-hidden="true"
              >
                <rede.Icon className="w-4 h-4 shrink-0" />
              </span>
              <span className="contato-rede-nome text-grafite group-hover:text-laranja-profundo transition-colors" style={{ fontSize: 15 }}>
                {rede.nome}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
