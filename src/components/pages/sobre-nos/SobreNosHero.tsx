export default function SobreNosHero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 py-10 md:py-16">
      <div className="wf-box rounded-lg p-6 sm:p-10 md:p-14">
        <span className="inline-block text-[10px] sm:text-xs bg-neutral-800 text-white px-2 py-1 rounded mb-4">
          01 · HERO
        </span>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div className="order-1 md:order-2 wf-img rounded mb-8 md:mb-0 h-40 sm:h-56 md:h-full flex items-center justify-center text-[11px] sm:text-xs text-neutral-500 text-center px-4">
            [ FOTO REAL DA EQUIPE / GALPÃO ]
          </div>

          <div className="order-2 md:order-1">
            <p className="text-[10px] sm:text-xs text-neutral-400 mb-2">H1</p>
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-700 leading-snug mb-4">
              Um fornecedor só, do desenvolvimento à entrega final
            </h1>
            <p className="text-[10px] sm:text-xs text-neutral-400 mb-1">
              Subtítulo
            </p>
            <p className="text-sm md:text-base text-neutral-500 leading-relaxed">
              Chega de juntar três empresas diferentes para fechar um pedido.
              Na Delta, a mesma equipe acompanha o material desde a ideia no
              papel até a caixa chegar na sua porta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
