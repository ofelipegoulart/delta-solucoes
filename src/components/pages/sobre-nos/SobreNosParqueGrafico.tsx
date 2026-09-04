import FotoPendente from "./FotoPendente";

const TECNOLOGIAS = ["Offset", "Digital", "Flexográfica (até 8 cores UV)", "Silk screen"];
const SUBSTRATOS = ["Couchê", "Duplex", "Triplex", "Monolúcido", "Kraft"];

export default function SobreNosParqueGrafico() {
  return (
    <section id="parque" className="w-full bg-branco py-16 md:py-20">
      <div className="max-w-310 mx-auto px-6 md:px-12">
        <div className="border-t border-borda pt-[26px] mb-8 md:mb-9">
          <h2
            className="font-bold text-marinho mb-5"
            style={{ fontSize: "clamp(25px, 3.6vw, 34px)", letterSpacing: "-0.02em" }}
          >
            Máquina, material e repertório para qualquer pedido
          </h2>
          <p
            className="text-tinta leading-[1.62] mb-3"
            style={{ fontSize: "clamp(15.5px, 1.7vw, 17px)", maxWidth: "74ch" }}
          >
            Trabalhamos com todos os tipos de impressão e substratos
            disponíveis no mercado, além dos acabamentos que dão o toque
            final na embalagem. Se o seu produto pede couchê com verniz
            localizado, se pede kraft cru, se pede oito cores em flexo: a
            resposta costuma ser a mesma. Conseguimos fazer.
          </p>
          <p
            className="text-tinta leading-[1.62]"
            style={{ fontSize: "clamp(15.5px, 1.7vw, 17px)", maxWidth: "74ch" }}
          >
            E quando o material não é o mais indicado para o que você quer,
            também falamos. Vale mais avisar antes do que entregar uma
            embalagem que não sustenta o produto.
          </p>
        </div>

        <div
          className="bg-off-white-morno sobre-card"
          style={{ padding: "clamp(20px, 3vw, 28px)" }}
        >
          <div className="sobre-parque-lista-grid mb-8">
            <div>
              <h3
                className="font-bold text-laranja-profundo uppercase pb-2 mb-3 border-b border-borda-morna"
                style={{ fontSize: 11, letterSpacing: "0.14em" }}
              >
                Tecnologias de impressão
              </h3>
              <ul
                className="list-disc pl-4 marker:text-laranja text-tinta"
                style={{ fontSize: 16, lineHeight: 1.9 }}
              >
                {TECNOLOGIAS.map((tecnologia) => (
                  <li key={tecnologia}>{tecnologia}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="font-bold text-laranja-profundo uppercase pb-2 mb-3 border-b border-borda-morna"
                style={{ fontSize: 11, letterSpacing: "0.14em" }}
              >
                Substratos que dominamos
              </h3>
              <ul
                className="list-disc pl-4 marker:text-laranja text-tinta"
                style={{ fontSize: 16, lineHeight: 1.9 }}
              >
                {SUBSTRATOS.map((substrato) => (
                  <li key={substrato}>{substrato}</li>
                ))}
                <li className="font-semibold text-laranja-profundo marker:text-laranja-profundo">
                  E outros materiais sob consulta
                </li>
              </ul>
            </div>
          </div>

          <div className="sobre-parque-fotos-grid">
            <FotoPendente
              label="Máquina em operação — pendente"
              height="clamp(180px, 22vw, 240px)"
              tone="branco"
            />
            <FotoPendente
              label="Equipe em ação — pendente"
              height="clamp(180px, 22vw, 240px)"
              tone="branco"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
