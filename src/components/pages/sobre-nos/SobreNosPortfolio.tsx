import Image from "next/image";
import FotoPendente from "./FotoPendente";

const CASES = [
  {
    titulo: "Sacolas personalizadas",
    fotoLabel: "Foto: sacola personalizada — pendente",
    foto: undefined,
    texto:
      "Sabe aquela sensação de receber um presente especial? É isso que uma sacola bem resolvida entrega ao seu cliente. Além de proteger o produto, ela agrega valor e mostra que cada detalhe foi pensado com atenção.",
  },
  {
    titulo: "Caixas com visor em acetato",
    fotoLabel: "Foto: caixa com visor em acetato — pendente",
    foto: "/images/products/caixa-acetato.png",
    texto:
      "O visor deixa o conteúdo à mostra sem que ninguém precise abrir a caixa. Funciona para brinde de festa, casamento, confraternização, doces. Em kraft 150g, e ainda dá para complementar com uma faixa exclusiva ou adesivo da sua marca.",
  },
];

export default function SobreNosPortfolio() {
  return (
    <section id="portfolio" className="w-full bg-branco py-16 md:py-20">
      <div className="max-w-310 mx-auto px-6 md:px-12">
        <div className="border-t border-borda pt-[26px] mb-8 md:mb-9">
          <h2
            className="font-bold text-marinho mb-5"
            style={{ fontSize: "clamp(25px, 3.6vw, 34px)", letterSpacing: "-0.02em" }}
          >
            Alguns trabalhos que gostamos de mostrar
          </h2>
          <p
            className="text-tinta leading-[1.62]"
            style={{ fontSize: "clamp(15.5px, 1.7vw, 17px)", maxWidth: "74ch" }}
          >
            Embalagem não é só o que protege o produto. É uma extensão da
            identidade da sua marca e a primeira coisa que o cliente vê,
            antes mesmo de chegar no que está dentro. Cada detalhe conta: do
            design às cores, do material ao acabamento. É esse tipo de
            resultado que perseguimos em cada projeto.
          </p>
        </div>

        <div className="sobre-portfolio-grid">
          {CASES.map((item) => (
            <div key={item.titulo} className="bg-off-white-morno sobre-card">
              {item.foto ? (
                <div
                  className="relative bg-branco border border-off-white-morno border-b-[0.5px]"
                  style={{ height: "clamp(200px, 26vw, 300px)" }}
                >
                  <Image
                    src={item.foto}
                    alt={item.titulo}
                    fill
                    className="object-contain p-4"
                    sizes="(min-width: 860px) 50vw, 100vw"
                    style={{
                      filter:
                        "drop-shadow(0 3px 4px rgba(20,9,3,.28)) drop-shadow(0 10px 10px rgba(20,9,3,.18)) drop-shadow(0 18px 16px rgba(20,9,3,.12))",
                    }}
                  />
                </div>
              ) : (
                <FotoPendente
                  label={item.fotoLabel}
                  height="clamp(200px, 26vw, 300px)"
                />
              )}
              <div style={{ padding: "clamp(18px, 2.5vw, 26px)" }}>
                <h3
                  className="font-bold text-marinho mb-2"
                  style={{ fontSize: 19, letterSpacing: "-0.015em" }}
                >
                  {item.titulo}
                </h3>
                <p
                  className="text-tinta leading-[1.6]"
                  style={{ fontSize: 15.5 }}
                >
                  {item.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
