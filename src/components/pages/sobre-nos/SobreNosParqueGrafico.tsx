const PRINT_TECHS = ["Offset", "Digital", "Flexográfica (até 8 cores UV)", "Silk screen"];
const SUBSTRATES = ["Couchê", "Duplex", "Triplex", "Monolúcido", "Kraft"];

export default function SobreNosParqueGrafico() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-10 md:pb-14">
      <div className="wf-box rounded-lg p-5 sm:p-8">
        <span className="inline-block text-[10px] sm:text-xs bg-neutral-800 text-white px-2 py-1 rounded mb-4">
          03 · PARQUE GRÁFICO
        </span>

        <p className="text-[10px] sm:text-xs text-neutral-400 mb-2">H2</p>
        <h2 className="text-base sm:text-lg font-semibold text-neutral-700 mb-4">
          Máquina, material e repertório para qualquer pedido
        </h2>

        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-3">
          Trabalhamos com todos os tipos de impressão e substratos
          disponíveis no mercado, além dos acabamentos que dão o toque final
          na embalagem. Se o seu produto pede couchê com verniz localizado,
          se pede kraft cru, se pede oito cores em flexo: a resposta costuma
          ser a mesma. Conseguimos fazer.
        </p>
        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-6">
          E quando o material não é o mais indicado para o que você quer,
          também falamos. Vale mais avisar antes do que entregar uma
          embalagem que não sustenta o produto.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-neutral-600 mb-2">
              Tecnologias de impressão
            </h3>
            <ul className="text-xs text-neutral-500 space-y-1.5">
              {PRINT_TECHS.map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-neutral-600 mb-2">
              Substratos que dominamos
            </h3>
            <ul className="text-xs text-neutral-500 space-y-1.5">
              {SUBSTRATES.map((substrate) => (
                <li key={substrate} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                  {substrate}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="wf-img rounded h-24 sm:h-32 flex items-center justify-center text-[9px] text-neutral-500 text-center px-2">
            [ máquina em operação ]
          </div>
          <div className="wf-img rounded h-24 sm:h-32 flex items-center justify-center text-[9px] text-neutral-500 text-center px-2">
            [ equipe em ação ]
          </div>
        </div>
      </div>
    </section>
  );
}
