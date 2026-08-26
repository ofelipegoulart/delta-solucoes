const PILARES = [
  {
    title: "Proximidade & Agilidade",
    text: "Você fala com gente, não com robô de atendimento. E a resposta vem rápido.",
  },
  {
    title: "Precisão Técnica",
    text: "Arquivo revisado, faca certa, processo validado antes da produção começar.",
  },
  {
    title: "Pontualidade",
    text: "Prazo combinado é prazo entregue. Seu lançamento não espera, e nós sabemos disso.",
  },
];

export default function SobreNosPilares() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-10 md:pb-14">
      <div className="wf-box rounded-lg p-5 sm:p-8">
        <span className="inline-block text-[10px] sm:text-xs bg-neutral-800 text-white px-2 py-1 rounded mb-4">
          05 · PILARES OPERACIONAIS
        </span>

        <p className="text-[10px] sm:text-xs text-neutral-400 mb-2">H2</p>
        <h2 className="text-base sm:text-lg font-semibold text-neutral-700 mb-5">
          Como trabalhamos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PILARES.map((pilar) => (
            <div
              key={pilar.title}
              className="bg-white border border-neutral-300 rounded-lg p-4 text-center"
            >
              <h3 className="text-sm font-semibold text-neutral-700 mb-2">
                {pilar.title}
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {pilar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
