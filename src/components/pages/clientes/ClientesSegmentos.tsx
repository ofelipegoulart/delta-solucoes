const SEGMENTOS = ["Alimentos", "Cosméticos", "Farmacêutico", "Varejo"];

export default function ClientesSegmentos() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-10 md:pb-14">
      <div className="wf-box rounded-lg p-5 sm:p-8">
        <span className="inline-block text-[10px] sm:text-xs bg-neutral-800 text-white px-2 py-1 rounded mb-4">
          02 · SEGMENTOS ATENDIDOS
        </span>

        <p className="text-[10px] sm:text-xs text-neutral-400 mb-2">H2</p>
        <h2 className="text-base sm:text-lg font-semibold text-neutral-700 mb-4">
          Setores que já passaram pela nossa produção
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-6">
          Em vez de uma lista enorme de nomes, preferimos mostrar a
          diversidade de quem já trabalhou com a gente — isso diz mais sobre
          nossa experiência do que uma parede de logos.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {SEGMENTOS.map((segmento) => (
            <div
              key={segmento}
              className="bg-white border border-neutral-300 rounded-lg p-4 text-center"
            >
              <div className="wf-img rounded-full w-10 h-10 mx-auto mb-2" />
              <p className="text-xs font-medium text-neutral-600">
                {segmento}
              </p>
            </div>
          ))}
        </div>
        <p className="md:hidden text-[10px] text-neutral-400 mt-4">
          ↳ mobile: grid 2×2 · desktop: grid 1×4
        </p>
      </div>
    </section>
  );
}
