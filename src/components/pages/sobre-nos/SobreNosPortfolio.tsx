const CASES = [
  {
    label: "[ foto: sacola personalizada ]",
    title: "Sacolas personalizadas",
    text: "Sabe aquela sensação de receber um presente especial? É isso que uma sacola bem resolvida entrega ao seu cliente. Além de proteger o produto, ela agrega valor e mostra que cada detalhe foi pensado com atenção.",
  },
  {
    label: "[ foto: caixa com visor em acetato ]",
    title: "Caixas com visor em acetato",
    text: "O visor deixa o conteúdo à mostra sem que ninguém precise abrir a caixa. Funciona para brinde de festa, casamento, confraternização, doces. Em kraft 150g, e ainda dá para complementar com uma faixa exclusiva ou adesivo da sua marca.",
  },
];

export default function SobreNosPortfolio() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-10 md:pb-14">
      <div className="wf-box rounded-lg p-5 sm:p-8">
        <span className="inline-block text-[10px] sm:text-xs bg-neutral-800 text-white px-2 py-1 rounded mb-4">
          04 · PORTFÓLIO EM FOCO
        </span>

        <p className="text-[10px] sm:text-xs text-neutral-400 mb-2">H2</p>
        <h2 className="text-base sm:text-lg font-semibold text-neutral-700 mb-4">
          Alguns trabalhos que gostamos de mostrar
        </h2>

        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-6">
          Embalagem não é só o que protege o produto. É uma extensão da
          identidade da sua marca e a primeira coisa que o cliente vê, antes
          mesmo de chegar no que está dentro. Cada detalhe conta: do design
          às cores, do material ao acabamento. É esse tipo de resultado que
          perseguimos em cada projeto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CASES.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-neutral-300 rounded-lg overflow-hidden"
            >
              <div className="wf-img h-32 sm:h-40 flex items-center justify-center text-[10px] text-neutral-500">
                {item.label}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-neutral-700 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
