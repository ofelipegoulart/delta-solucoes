export default function ServicosHero() {
  return (
    <section className="w-full bg-laranja-profundo text-off-white border-b-[5px] border-laranja">
      <div
        className="max-w-310 mx-auto px-6 md:px-12"
        style={{
          paddingTop: "clamp(44px, 7vw, 76px)",
          paddingBottom: "clamp(44px, 7vw, 80px)",
        }}
      >
        <h1
          className="font-bold leading-[1.06] tracking-[-0.03em] text-balance mb-5"
          style={{ fontSize: 48, maxWidth: "26ch" }}
        >
          Material impresso: aqui a gente desenvolve tudo
        </h1>
        <p
          className="leading-[1.62]"
          style={{ fontSize: "clamp(15.5px, 1.7vw, 17px)", maxWidth: "58ch" }}
        >
          Do promocional à embalagem, do rótulo à comunicação visual. Se é
          impresso e representa a sua marca, a gente desenvolve, produz e
          entrega — inclusive a criação da arte, se você ainda não tiver.
        </p>
      </div>
    </section>
  );
}
