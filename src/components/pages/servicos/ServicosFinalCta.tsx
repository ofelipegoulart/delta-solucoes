import Link from "next/link";

export default function ServicosFinalCta() {
  return (
    <section className="w-full bg-laranja-profundo text-off-white">
      <div
        className="max-w-310 mx-auto px-6 md:px-12 text-center"
        style={{
          paddingTop: "clamp(52px, 8vw, 80px)",
          paddingBottom: "clamp(52px, 8vw, 80px)",
        }}
      >
        <h2
          className="font-bold mx-auto mb-8 text-balance"
          style={{ fontSize: "clamp(26px, 3.8vw, 36px)", maxWidth: "32ch" }}
        >
          Conta o que você precisa — mesmo que ainda seja só uma ideia
          solta. A gente indica o material, o acabamento e o caminho.
        </h2>
        <Link
          href="/contato"
          className="inline-flex items-center justify-center text-center text-base sm:text-lg font-medium rounded px-6 py-3 bg-branco text-laranja-profundo transition-colors hover:bg-marinho hover:text-white"
        >
          Solicitar Orçamento
        </Link>
      </div>
    </section>
  );
}
