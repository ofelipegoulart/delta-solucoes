import ZoomImage from "./ZoomImage";

type Product = {
  title: string;
  items: string[];
  cta: string;
  image?: string;
  coverImage?: boolean;
};

const PRODUCTS: Product[] = [
  {
    title: "Embalagens",
    items: [
      "Alimentos secos",
      "Alimentos congelados",
      "Medicamentos",
      "Todo tipo de produto que precisa de proteção",
    ],
    cta: "Ver Soluções em Embalagens",
    image: "/images/products/hamburguer-legumes-600-x-600.webp",
  },
  {
    title: "Promocionais",
    items: [
      "Catálogos",
      "Cadernos e livros capa dura ou cartonada",
      "Tags, wobblers, móbiles e materiais para ponto de venda",
    ],
    cta: "Ver Promocionais",
    image: "/images/products/promocionais.png",
    coverImage: true,
  },
  {
    title: "Rótulos e Etiquetas",
    items: [
      "Impressão flexográfica até 8 cores UV",
      "Rótulos e tags",
      "Etiquetas em tubetes ou cartelas",
    ],
    cta: "Ver Rótulos e Etiquetas",
    image: "/images/products/valvoline-e700-15w40.webp",
  },
];

export default function HomeProductLine() {
  return (
    <section className="w-full bg-branco pt-[76px] pb-[128px]">
      <div className="max-w-310 mx-auto px-6 md:px-12">
        <h2 className="text-[26px] md:text-[34px] font-semibold text-marinho max-w-[900px] text-balance mb-11">
          Trabalhamos com todo tipo possível de acabamento, desde requinte
          até praticidade
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {PRODUCTS.map((product) => (
            <div
              key={product.title}
              className="bg-off-white-morno border-t-[6px] border-laranja flex flex-col"
            >
              <div
                className={`h-[200px] mx-6 mt-6 flex items-center justify-center text-[10px] text-laranja-profundo relative overflow-hidden ${
                  product.image ? "bg-branco" : "border border-dashed border-borda-morna-fraca"
                }`}
              >
                {product.image ? (
                  <ZoomImage
                    src={product.image}
                    alt={product.title}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    cover={product.coverImage}
                  />
                ) : (
                  "[ imagem ]"
                )}
              </div>
              <div className="flex flex-col flex-1 gap-3.5 px-6 pt-[22px] pb-6">
                <h3 className="text-base sm:text-lg font-semibold text-marinho">
                  {product.title}
                </h3>
                <ul className="text-sm sm:text-base text-grafite/70 space-y-1 list-disc list-outside pl-4">
                  {product.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="text-sm sm:text-base font-medium border-2 border-laranja-profundo text-laranja-profundo px-3 py-2 text-center w-full mt-auto transition-colors hover:bg-laranja hover:text-white hover:border-laranja">
                  {product.cta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
