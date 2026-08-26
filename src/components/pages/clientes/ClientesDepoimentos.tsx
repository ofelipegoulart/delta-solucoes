const DEPOIMENTOS = [1, 2, 3];

export default function ClientesDepoimentos() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-10 md:pb-14">
      <div className="wf-box rounded-lg p-5 sm:p-8">
        <span className="inline-block text-[10px] sm:text-xs bg-neutral-800 text-white px-2 py-1 rounded mb-4">
          03 · DEPOIMENTOS
        </span>

        <p className="text-[10px] sm:text-xs text-neutral-400 mb-2">H2</p>
        <h2 className="text-base sm:text-lg font-semibold text-neutral-700 mb-4">
          O que dizem sobre a gente
        </h2>

        <div className="flex gap-4 overflow-x-auto md:overflow-visible md:grid md:grid-cols-3 pb-2 md:pb-0">
          {DEPOIMENTOS.map((n) => (
            <div
              key={n}
              className="bg-white border border-neutral-300 rounded-lg p-4 shrink-0 w-64 md:w-auto"
            >
              <div className="wf-img rounded h-4 w-24 mb-3" />
              <p className="text-xs text-neutral-500 leading-relaxed mb-3">
                &quot;[ trecho real do depoimento do cliente, texto curto e
                específico ]&quot;
              </p>
              <div className="flex items-center gap-2">
                <div className="wf-img rounded-full w-7 h-7" />
                <p className="text-[10px] text-neutral-500">
                  [ Nome — Cargo/Empresa ]
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="md:hidden text-[10px] text-neutral-400 mt-3">
          ↳ mobile: scroll horizontal · desktop: grid de 3 colunas
        </p>
        <p className="text-[10px] text-neutral-400 mt-1">
          ↳ depoimento real (texto, print de WhatsApp/e-mail) &gt;
          estrelinhas genéricas. Se ainda não tiver, deixar seção &quot;a
          coletar&quot; em vez de inventar.
        </p>
      </div>
    </section>
  );
}
