const STEPS = [
  {
    number: "1",
    title: "Projeto",
    text: "Entendemos o que você precisa e indicamos material, acabamento e formato com quem já viu esse filme antes.",
  },
  {
    number: "2",
    title: "Preparação",
    text: "Arquivo revisado, faca desenhada, tudo conferido antes da produção começar.",
  },
  {
    number: "3",
    title: "Produção",
    text: "Impressão, acabamento e conferência final, dentro do prazo combinado.",
  },
];

export default function SobreNosDiferencial() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-10 md:pb-14">
      <div className="wf-box rounded-lg p-5 sm:p-8">
        <span className="inline-block text-[10px] sm:text-xs bg-neutral-800 text-white px-2 py-1 rounded mb-4">
          02 · DIFERENCIAL CONSULTIVO
        </span>

        <p className="text-[10px] sm:text-xs text-neutral-400 mb-2">H2</p>
        <h2 className="text-base sm:text-lg font-semibold text-neutral-700 mb-4">
          Experiência e inovação no mesmo projeto
        </h2>

        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-3">
          Tirar uma ideia do papel costuma ser a parte mais cansativa do
          processo. Um fornecedor cuida do design, outro faz a faca de corte,
          um terceiro imprime, e no meio de tudo isso o prazo escorre. Aqui
          essas etapas acontecem debaixo do mesmo teto, com uma equipe só
          respondendo por elas.
        </p>
        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-6">
          Entramos no projeto cedo, antes de qualquer máquina ligar. Ajudamos
          a desenhar a faca, revisamos o arquivo linha por linha e preparamos
          o material para que a impressão saia certa já na primeira
          tentativa. Isso significa menos retrabalho para você e menos
          surpresa no fim do processo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-neutral-300 rounded-lg p-4"
            >
              <span className="text-2xl font-bold text-neutral-300">
                {step.number}
              </span>
              <h3 className="text-sm font-semibold text-neutral-700 mt-1 mb-1">
                {step.title}
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
        <p className="md:hidden text-[10px] text-neutral-400 mt-4">
          ↳ mobile: passos empilhados · desktop: 3 colunas
        </p>
      </div>
    </section>
  );
}
