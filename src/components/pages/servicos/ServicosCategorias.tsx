type Categoria = {
  title: string;
  text: string;
  examples: string;
};

const CATEGORIAS: Categoria[] = [
  {
    title: "Promocionais",
    text: 'O material promocional tem que estar à altura do que você vende. Por mais que seja "só um folder" ou "só um flyer", o acabamento dele fala sobre o seu produto antes de o cliente ler a primeira linha. Se o que você vende é premium, o material que apresenta esse produto precisa comunicar isso — senão ele trabalha contra a sua marca.',
    examples:
      "catálogos, folders, flyers, cadernos e livros em capa dura ou cartonada, tags, wobblers, móbiles e materiais de ponto de venda.",
  },
  {
    title: "Embalagens",
    text: 'A embalagem é a cara da sua marca. É o primeiro contato físico entre o que você vende e quem compra, e é ali que a decisão de "isso aqui vale o preço" costuma se confirmar. Qualquer acabamento que agregue diferença — um verniz localizado, um relevo, um material diferente, um visor — é o que faz o seu produto se destacar na prateleira e na lembrança do cliente.',
    examples:
      "caixas para alimentos secos e congelados, embalagens para medicamentos, caixas com visor, sacolas personalizadas e proteção para produtos em geral.",
  },
  {
    title: "Adesivos e Rótulos",
    text: "O rótulo identifica, informa e vende ao mesmo tempo — e precisa fazer isso enquanto aguenta manuseio, geladeira, umidade e tempo de prateleira. Cor fora do tom ou adesivo descolando não é detalhe técnico: é a percepção que o cliente tem do seu produto. Por isso a impressão aqui é flexográfica, com até 8 cores UV.",
    examples:
      "rótulos, adesivos, tags, etiquetas em tubetes ou cartelas e selos de lacre.",
  },
  {
    title: "Comunicação Visual",
    text: "É o que faz a sua marca ser vista de longe — na fachada, no evento, na feira, no ponto de venda. Formato grande não pode significar acabamento pequeno: material errado desbota, amassa e envelhece rápido, e aí a peça que deveria atrair passa a depor contra. A gente indica o material certo para onde a peça vai ficar e por quanto tempo.",
    examples:
      "lonas, banners, painéis, faixas e materiais para fachada e ponto de venda.",
  },
];

export default function ServicosCategorias() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-10 md:pb-14">
      <div className="wf-box rounded-lg p-5 sm:p-8">
        <span className="inline-block text-[10px] sm:text-xs bg-neutral-800 text-white px-2 py-1 rounded mb-4">
          02 · CATEGORIAS DE MATERIAL
        </span>

        <p className="text-[10px] sm:text-xs text-neutral-400 mb-2">H2</p>
        <h2 className="text-base sm:text-lg font-semibold text-neutral-700 mb-2">
          O que a gente produz
        </h2>
        <p className="text-sm md:text-base text-neutral-500 leading-relaxed mb-8 max-w-2xl">
          Organizamos por tipo de material, não por lista de produto —
          porque quase sempre o que você precisa é uma combinação de mais de
          um.
        </p>

        <div className="space-y-6">
          {CATEGORIAS.map((categoria) => (
            <article
              key={categoria.title}
              className="bg-white border border-neutral-300 rounded-lg p-5 sm:p-6"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="wf-img rounded w-9 h-9 shrink-0" />
                <div>
                  <p className="text-[10px] text-neutral-400">H3</p>
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-700">
                    {categoria.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm md:text-base text-neutral-500 leading-relaxed mb-4">
                {categoria.text}
              </p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="wf-img rounded h-20 sm:h-28 flex items-center justify-center text-[9px] text-neutral-500 text-center px-1"
                  >
                    [ foto ]
                  </div>
                ))}
              </div>
              <p className="text-[10px] sm:text-xs text-neutral-500">
                <span className="font-semibold text-neutral-600">
                  Alguns exemplos:
                </span>{" "}
                {categoria.examples}
              </p>
            </article>
          ))}
        </div>

        <p className="text-[10px] text-neutral-400 mt-5">
          ↳ nota de conteúdo: cada bloco fecha com &quot;Alguns
          exemplos&quot; em vez de uma lista fechada — reforça que a lista
          ilustra, não limita
        </p>
        <p className="md:hidden text-[10px] text-neutral-400 mt-1">
          ↳ mobile: blocos empilhados, fotos em grid de 3 · desktop: mesma
          estrutura, com mais respiro
        </p>
      </div>
    </section>
  );
}
