import ZoomImage from "@/components/ui/ZoomImage";

type CategoriaImage =
  | string
  | { src: string; position?: string; fit?: "cover" | "contain" };

type Categoria = {
  title: string;
  text: string;
  examples: string;
  images?: (CategoriaImage | undefined)[];
};

const CATEGORIAS: Categoria[] = [
  {
    title: "Promocionais",
    text: 'O material promocional tem que estar à altura do que você vende. Por mais que seja "só um folder" ou "só um flyer", o acabamento dele fala sobre o seu produto antes de o cliente ler a primeira linha. Se o que você vende é premium, o material que apresenta esse produto precisa comunicar isso — senão ele trabalha contra a sua marca.',
    examples:
      "catálogos, folders, flyers, cadernos e livros em capa dura ou cartonada, tags, wobblers, móbiles e materiais de ponto de venda.",
    images: [
      "/images/products/promocionais.png",
      "/images/servicos/promocional-2.webp",
      "/images/servicos/promocional-1.avif",
    ],
  },
  {
    title: "Embalagens",
    text: 'A embalagem é a cara da sua marca. É o primeiro contato físico entre o que você vende e quem compra, e é ali que a decisão de "isso aqui vale o preço" costuma se confirmar. Qualquer acabamento que agregue diferença — um verniz localizado, um relevo, um material diferente, um visor — é o que faz o seu produto se destacar na prateleira e na lembrança do cliente.',
    examples:
      "caixas para alimentos secos e congelados, embalagens para medicamentos, caixas com visor, sacolas personalizadas e proteção para produtos em geral.",
    images: [
      "/images/servicos/embalagem-2.jpg",
      "/images/servicos/embalagem-1.jpeg",
      "/images/products/hamburguer-legumes-600-x-600.webp",
    ],
  },
  {
    title: "Adesivos e Rótulos",
    text: "O rótulo identifica, informa e vende ao mesmo tempo — e precisa fazer isso enquanto aguenta manuseio, geladeira, umidade e tempo de prateleira. Cor fora do tom ou adesivo descolando não é detalhe técnico: é a percepção que o cliente tem do seu produto. Por isso a impressão aqui é flexográfica, com até 8 cores UV.",
    examples:
      "rótulos, adesivos, tags, etiquetas em tubetes ou cartelas e selos de lacre.",
    images: [
      "/images/servicos/adesivos-1.avif",
      "/images/servicos/adesivos-deiton-lubrificantes.jpg",
      { src: "/images/products/valvoline-e700-15w40.webp", fit: "contain" },
    ],
  },
  {
    title: "Comunicação Visual",
    text: "É o que faz a sua marca ser vista de longe — na fachada, no evento, na feira, no ponto de venda. Formato grande não pode significar acabamento pequeno: material errado desbota, amassa e envelhece rápido, e aí a peça que deveria atrair passa a depor contra. A gente indica o material certo para onde a peça vai ficar e por quanto tempo.",
    examples:
      "lonas, banners, painéis, faixas e materiais para fachada e ponto de venda.",
    images: [
      "/images/servicos/comunicacao-visual-1.jpg",
      "/images/servicos/comunicacao-visual-2.jpg",
      "/images/servicos/comunicacao-visual-3.jpg",
    ],
  },
];

function CategoriaTriangle() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      className="shrink-0"
      aria-hidden="true"
    >
      <polygon points="12,2 22,20 2,20" className="fill-laranja" />
    </svg>
  );
}

export default function ServicosCategorias() {
  return (
    <section className="w-full bg-branco py-16 md:py-20">
      <div className="max-w-310 mx-auto px-6 md:px-12">
        <div className="border-t border-borda pt-[26px] mb-8 md:mb-9">
          <h2
            className="font-bold text-marinho mb-3"
            style={{ fontSize: "clamp(25px, 3.6vw, 34px)", letterSpacing: "-0.02em" }}
          >
            O que a gente produz
          </h2>
          <p className="text-tinta leading-[1.62]" style={{ maxWidth: "62ch" }}>
            Organizamos por tipo de material, não por lista de produto —
            porque quase sempre o que você precisa é uma combinação de mais
            de um.
          </p>
        </div>

        <div className="flex flex-col gap-7">
          {CATEGORIAS.map((categoria) => (
            <article
              key={categoria.title}
              className="bg-off-white-morno"
              style={{
                padding:
                  "clamp(20px,3vw,28px) clamp(20px,3vw,32px) clamp(22px,3vw,32px)",
              }}
            >
              <div
                className="flex items-center gap-[13px] pb-[18px] border-b border-borda-morna"
              >
                <CategoriaTriangle />
                <h3
                  className="font-bold text-marinho"
                  style={{ fontSize: "clamp(20px, 2.7vw, 24px)" }}
                >
                  {categoria.title}
                </h3>
              </div>

              <p
                className="text-tinta leading-[1.62]"
                style={{
                  margin: "22px 0 26px",
                  fontSize: "clamp(15.5px, 1.7vw, 17px)",
                  maxWidth: "70ch",
                }}
              >
                {categoria.text}
              </p>

              <div className="grid grid-cols-1 min-[860px]:grid-cols-3 gap-[clamp(10px,1.3vw,16px)]">
                {[0, 1, 2].map((index) => {
                  const image = categoria.images?.[index];
                  const src = typeof image === "string" ? image : image?.src;
                  const position =
                    typeof image === "object" ? image.position : undefined;
                  const fit =
                    typeof image === "object" ? image.fit : "cover";

                  return (
                    <div
                      key={index}
                      className="relative bg-branco h-[clamp(200px,52vw,260px)] min-[860px]:h-[clamp(150px,17vw,210px)]"
                    >
                      {src && (
                        <ZoomImage
                          src={src}
                          alt={categoria.title}
                          sizes="(min-width: 860px) 33vw, 100vw"
                          cover={fit !== "contain"}
                          objectPosition={position}
                          hoverZoomToggle
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <p
                className="text-tinta mt-[22px]"
                style={{ fontSize: "clamp(13.5px, 1.5vw, 14.5px)", maxWidth: "76ch" }}
              >
                <span className="font-bold text-laranja-profundo">
                  Alguns exemplos:
                </span>{" "}
                {categoria.examples}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
