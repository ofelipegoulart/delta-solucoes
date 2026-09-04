const ETAPAS = [
  {
    numero: "1",
    titulo: "Projeto",
    texto:
      "Entendemos o que você precisa e indicamos material, acabamento e formato com quem já viu esse filme antes.",
  },
  {
    numero: "2",
    titulo: "Preparação",
    texto:
      "Arquivo revisado, faca desenhada, tudo conferido antes da produção começar.",
  },
  {
    numero: "3",
    titulo: "Produção",
    texto:
      "Impressão, acabamento e conferência final, dentro do prazo combinado.",
  },
];

export default function SobreNosDiferencial() {
  return (
    <section id="diferencial" className="w-full bg-branco py-16 md:py-20">
      <div className="max-w-310 mx-auto px-6 md:px-12">
        <div className="border-t border-borda pt-[26px] mb-8 md:mb-9">
          <h2
            className="font-bold text-marinho mb-5"
            style={{ fontSize: "clamp(25px, 3.6vw, 34px)", letterSpacing: "-0.02em" }}
          >
            Experiência e inovação no mesmo projeto
          </h2>
          <p
            className="text-tinta leading-[1.62] mb-3"
            style={{ fontSize: "clamp(15.5px, 1.7vw, 17px)", maxWidth: "74ch" }}
          >
            Tirar uma ideia do papel costuma ser a parte mais cansativa do
            processo. Um fornecedor cuida do design, outro faz a faca de
            corte, um terceiro imprime, e no meio de tudo isso o prazo
            escorre. Aqui essas etapas acontecem debaixo do mesmo teto, com
            uma equipe só respondendo por elas.
          </p>
          <p
            className="text-tinta leading-[1.62]"
            style={{ fontSize: "clamp(15.5px, 1.7vw, 17px)", maxWidth: "74ch" }}
          >
            Entramos no projeto cedo, antes de qualquer máquina ligar.
            Ajudamos a desenhar a faca, revisamos o arquivo linha por linha e
            preparamos o material para que a impressão saia certa já na
            primeira tentativa. Isso significa menos retrabalho para você e
            menos surpresa no fim do processo.
          </p>
        </div>

        <div className="sobre-etapas-grid">
          {ETAPAS.map((etapa) => (
            <div
              key={etapa.numero}
              className="bg-off-white-morno sobre-card"
              style={{ padding: "clamp(20px, 3vw, 28px)" }}
            >
              <span
                className="font-bold text-laranja block"
                style={{ fontFamily: "var(--font-heading)", fontSize: 34 }}
              >
                {etapa.numero}
              </span>
              <h3
                className="font-bold text-marinho mt-2 mb-2"
                style={{ fontSize: 19, letterSpacing: "-0.015em" }}
              >
                {etapa.titulo}
              </h3>
              <p
                className="text-tinta leading-[1.6]"
                style={{ fontSize: 15.5 }}
              >
                {etapa.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
