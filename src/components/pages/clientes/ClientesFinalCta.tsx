import Link from "next/link";

export default function ClientesFinalCta() {
  return (
    <section
      id="orcamento"
      className="w-full bg-laranja [clip-path:polygon(0_40px,100%_0,100%_100%,0_100%)] min-[860px]:[clip-path:polygon(0_72px,100%_0,100%_100%,0_100%)] -mt-10 min-[860px]:-mt-18"
    >
      <div className="bg-marinho text-off-white [clip-path:polygon(0_calc(40px+5px),100%_5px,100%_100%,0_100%)] min-[860px]:[clip-path:polygon(0_calc(72px+5px),100%_5px,100%_100%,0_100%)]">
        <div
          className="max-w-310 mx-auto text-center flex flex-col items-center gap-7"
          style={{
            paddingTop: "clamp(100px, 18vw, 152px)",
            paddingBottom: "clamp(56px, 9vw, 80px)",
            paddingInline: "clamp(20px, 4vw, 48px)",
          }}
        >
          <h2
            className="font-bold text-balance"
            style={{
              fontSize: "clamp(26px, 3.8vw, 36px)",
              lineHeight: 1.14,
              letterSpacing: "-0.02em",
              maxWidth: "28ch",
            }}
          >
            Quer ser o próximo case da lista?
          </h2>
          <Link
            href="/contato?modo=orcamento"
            className="inline-flex items-center justify-center text-center font-bold rounded-[3px] bg-laranja text-white transition-colors hover:bg-branco hover:text-marinho"
            style={{ padding: "16px 30px", fontSize: 15 }}
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </section>
  );
}
