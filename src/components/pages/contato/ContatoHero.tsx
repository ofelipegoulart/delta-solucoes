export default function ContatoHero() {
  return (
    <section className="w-full bg-laranja-profundo text-off-white border-b-[5px] border-b-laranja">
      <div
        className="max-w-310 mx-auto flex flex-col gap-4.5"
        style={{
          paddingTop: "clamp(44px, 7vw, 76px)",
          paddingBottom: "clamp(44px, 7vw, 80px)",
          paddingInline: "clamp(20px, 4vw, 48px)",
        }}
      >
        <h1
          className="font-bold leading-[1.04] tracking-[-0.028em] text-balance"
          style={{ fontSize: "clamp(32px, 6vw, 54px)", maxWidth: "22ch" }}
        >
          Quer falar com a gente? É por aqui
        </h1>
        <p
          className="leading-[1.62]"
          style={{ fontSize: "clamp(15.5px, 1.7vw, 17px)", maxWidth: "56ch" }}
        >
          Dúvida, parceria, imprensa, um orçamento ou quer virar revenda —
          escolha abaixo e o formulário se adapta pra você.
        </p>
      </div>
    </section>
  );
}
