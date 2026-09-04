const PILARES = [
  {
    titulo: "Proximidade & Agilidade",
    texto:
      "Você fala com gente, não com robô de atendimento. E a resposta vem rápido.",
  },
  {
    titulo: "Precisão Técnica",
    texto:
      "Arquivo revisado, faca certa, processo validado antes da produção começar.",
  },
  {
    titulo: "Pontualidade",
    texto:
      "Prazo combinado é prazo entregue. Seu lançamento não espera, e nós sabemos disso.",
  },
];

function MarcaTriangulo() {
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

export default function SobreNosPilares() {
  return (
    <section id="pilares" className="w-full bg-branco py-16 md:py-20">
      <div className="max-w-310 mx-auto px-6 md:px-12">
        <div className="border-t border-borda pt-[26px] mb-8 md:mb-9">
          <h2
            className="font-bold text-marinho"
            style={{ fontSize: "clamp(25px, 3.6vw, 34px)", letterSpacing: "-0.02em" }}
          >
            Como trabalhamos
          </h2>
        </div>

        <div className="sobre-pilares-grid">
          {PILARES.map((pilar) => (
            <div
              key={pilar.titulo}
              className="bg-off-white-morno sobre-card"
              style={{ padding: "clamp(20px, 3vw, 28px)" }}
            >
              <MarcaTriangulo />
              <h3
                className="font-bold text-marinho mt-3 mb-2"
                style={{ fontSize: 19, letterSpacing: "-0.015em" }}
              >
                {pilar.titulo}
              </h3>
              <p
                className="text-tinta leading-[1.6]"
                style={{ fontSize: 15.5 }}
              >
                {pilar.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
