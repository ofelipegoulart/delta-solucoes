export default function ClientesHero() {
  return (
    <section
      id="clientes"
      className="relative w-full bg-marinho text-off-white [clip-path:polygon(0_0,100%_0,100%_calc(100%-40px),0_100%)] min-[860px]:[clip-path:polygon(0_0,100%_0,100%_calc(100%-72px),0_100%)]"
    >
      <div
        className="max-w-310 mx-auto px-6 md:px-12 grid grid-cols-1 min-[860px]:grid-cols-[1.1fr_.9fr] gap-8 min-[860px]:gap-14 min-[860px]:items-baseline"
        style={{
          paddingTop: "clamp(44px, 7vw, 76px)",
          paddingBottom: "clamp(64px, 12vw, 120px)",
        }}
      >
        <h1
          className="font-bold leading-[1.04] tracking-[-0.028em] text-balance"
          style={{ fontSize: "clamp(32px, 6vw, 54px)" }}
        >
          Marcas que confiaram no nosso trabalho
        </h1>
        <p className="leading-[1.6]" style={{ fontSize: 17, maxWidth: "46ch" }}>
          Sem enrolação: aqui embaixo tem projeto de verdade, cliente de
          verdade e resultado que a gente pode mostrar sem medo.
        </p>
      </div>
    </section>
  );
}
