import Link from "next/link";

export default function SobreNosFinalCta() {
  return (
    <section id="orcamento" className="w-full bg-laranja-profundo text-off-white">
      <div
        className="max-w-310 mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-6.5"
        style={{
          paddingTop: "clamp(52px, 8vw, 80px)",
          paddingBottom: "clamp(52px, 8vw, 80px)",
        }}
      >
        <h2
          className="font-bold text-balance"
          style={{
            fontSize: "clamp(26px, 3.8vw, 36px)",
            lineHeight: 1.16,
            letterSpacing: "-0.02em",
            maxWidth: "32ch",
          }}
        >
          Tem um projeto parado esperando alguém tirar do papel? Conta pra
          gente o que você precisa e a gente indica o caminho.
        </h2>
        <Link
          href="/contato"
          className="inline-flex items-center justify-center text-center font-bold rounded-[3px] bg-branco text-laranja-profundo transition-colors hover:bg-marinho hover:text-white"
          style={{ padding: "16px 30px", fontSize: 15 }}
        >
          Falar com um Especialista
        </Link>
      </div>
    </section>
  );
}
