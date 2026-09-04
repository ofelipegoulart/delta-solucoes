import Image from "next/image";

export default function ServicosFazemosTudo() {
  return (
    <section className="w-full bg-branco pb-16 md:pb-20">
      <div className="max-w-310 mx-auto px-6 md:px-12">
        <div
          className="bg-off-white-morno grid"
          style={{
            padding: "clamp(20px,3vw,28px)",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "clamp(24px,3vw,44px)",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              className="font-bold text-marinho mb-4"
              style={{ fontSize: "clamp(20px, 2.7vw, 24px)" }}
            >
              Não achou o que você precisa aí em cima?
            </h2>
            <p className="text-tinta leading-[1.62] mb-4">
              Provavelmente a gente faz mesmo assim. Os blocos acima são os
              tipos de material que mais saem daqui, não a lista completa do
              que conseguimos produzir.
            </p>
            <p className="text-tinta leading-[1.62]">
              E se o seu material ainda não existe — se você tem a ideia mas
              não tem a arte —, a gente desenvolve junto com você: criação,
              faca de corte, escolha de material e acabamento. Do rascunho
              até a caixa pronta.
            </p>
          </div>

          <div className="relative bg-branco h-[clamp(200px,26vw,320px)]">
            <Image
              src="/servicos-nao-achou.jpg"
              alt="Máquina de impressão offset da Delta Soluções"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
