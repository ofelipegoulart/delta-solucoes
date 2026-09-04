import Image from "next/image";

export default function SobreNosHero() {
  return (
    <section
      id="sobre"
      className="w-full bg-marinho text-off-white border-b-[5px] border-b-laranja sobre-card"
    >
      <div
        className="max-w-310 mx-auto px-6 md:px-12 sobre-hero-grid"
        style={{
          paddingTop: "clamp(44px, 7vw, 80px)",
          paddingBottom: "clamp(44px, 7vw, 80px)",
        }}
      >
        <div>
          <h1
            className="font-bold leading-[1.04] tracking-[-0.028em] text-balance mb-5"
            style={{ fontSize: "clamp(32px, 6vw, 54px)", maxWidth: "20ch" }}
          >
            Um fornecedor só, do desenvolvimento à entrega final
          </h1>
          <p
            className="leading-[1.62]"
            style={{ fontSize: "clamp(15.5px, 1.7vw, 17px)", maxWidth: "50ch" }}
          >
            Chega de juntar três empresas diferentes para fechar um pedido.
            Na Delta, a mesma equipe acompanha o material desde a ideia no
            papel até a caixa chegar na sua porta.
          </p>
        </div>

        <div
          className="relative"
          style={{ height: "clamp(220px, 30vw, 360px)" }}
        >
          <Image
            src="/images/servicos/comunicacao-visual-3.jpg"
            alt="Equipe da Delta Soluções montando um banner de comunicação visual no galpão"
            fill
            className="object-cover"
            sizes="(min-width: 860px) 45vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
