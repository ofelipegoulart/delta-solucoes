export default function ServicosFazemosTudo() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-10 md:pb-14">
      <div className="wf-box rounded-lg p-5 sm:p-8">
        <span className="inline-block text-[10px] sm:text-xs bg-neutral-800 text-white px-2 py-1 rounded mb-4">
          03 · REFORÇO &quot;FAZEMOS TUDO&quot;
        </span>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div className="order-2 md:order-1">
            <p className="text-[10px] sm:text-xs text-neutral-400 mb-2">
              H2
            </p>
            <h2 className="text-base sm:text-lg font-semibold text-neutral-700 mb-3">
              Não achou o que você precisa aí em cima?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-3">
              Provavelmente a gente faz mesmo assim. Os blocos acima são os
              tipos de material que mais saem daqui, não a lista completa do
              que conseguimos produzir.
            </p>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
              E se o seu material ainda não existe — se você tem a ideia mas
              não tem a arte —, a gente desenvolve junto com você: criação,
              faca de corte, escolha de material e acabamento. Do rascunho
              até a caixa pronta.
            </p>
          </div>

          <div className="order-1 md:order-2 wf-img rounded h-36 sm:h-48 md:h-56 mb-6 md:mb-0 flex items-center justify-center text-[11px] text-neutral-500 text-center px-4">
            [ FOTO: MESA DE TRABALHO / DESENVOLVIMENTO DE ARTE ]
          </div>
        </div>

        <p className="text-[10px] text-neutral-400 mt-5">
          ↳ nota de conteúdo: esta seção existe especificamente para resolver
          o receio de &quot;se não está listado, eles não fazem&quot;
        </p>
      </div>
    </section>
  );
}
