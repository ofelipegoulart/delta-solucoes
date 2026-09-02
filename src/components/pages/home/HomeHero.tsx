import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section
      className="relative w-full bg-laranja-profundo text-off-white"
      style={{
        minHeight: 580,
        clipPath:
          "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 96px))",
      }}
    >
      <div className="max-w-310 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(400px,1fr)_1fr] gap-10 md:items-center">
          <div className="pt-12 pb-12 md:pt-[76px] md:pb-[140px] text-center md:text-left">
            <h1 className="text-[32px] sm:text-[42px] md:text-[54px] font-semibold leading-[1.04] tracking-[-0.028em] text-balance mb-5">
              A solução perfeita para você
            </h1>
            <p className="text-[16px] md:text-[18px] leading-[1.6] text-off-white max-w-[470px] mx-auto md:mx-0 mb-8">
              Qualidade de acabamento e preço justo em materiais que
              revolucionam o mercado — da embalagem ao rótulo, do promocional
              ao impresso sob medida.
            </p>

            <div className="flex flex-row gap-3">
              <Link
                href="/contato"
                className="flex-1 flex items-center justify-center text-center text-base sm:text-lg font-medium rounded px-3 sm:px-5 py-3 bg-marinho text-white transition-colors hover:bg-white hover:text-marinho"
              >
                Solicitar Orçamento
              </Link>
              <Link
                href="/sobre-nos"
                className="flex-1 flex items-center justify-center text-center text-base sm:text-lg font-medium rounded px-3 sm:px-5 py-3 border-2 border-off-white/55 text-off-white transition-colors hover:bg-off-white hover:text-laranja-profundo"
              >
                Conheça Nossa Estrutura
              </Link>
            </div>
          </div>

          <div className="md:self-end flex justify-center pt-8 pb-16 md:pt-0 md:pb-0">
            <div className="relative -translate-x-4 sm:translate-x-0">
              <Image
                src="/images/products/caixa-acetato.png"
                alt="Caixa de acetato personalizada, produzida pela Delta Soluções"
                width={640}
                height={852}
                className="absolute z-0 top-1/2 -translate-y-1/2 right-[-46px] sm:right-[-65px] md:right-[-102px] w-auto h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[330px]"
                style={{
                  maxHeight: 450,
                  filter:
                    "drop-shadow(0 4px 5px rgba(20,9,3,.5)) drop-shadow(0 14px 14px rgba(20,9,3,.35)) drop-shadow(0 26px 22px rgba(20,9,3,.25))",
                }}
              />
              <Image
                src="/images/products/sacola-visionari.png"
                alt="Sacola promocional personalizada Visionari, produzida pela Delta Soluções"
                width={1179}
                height={1471}
                priority
                className="relative z-10 w-auto h-auto max-w-[210px] sm:max-w-[270px] md:max-w-none"
                style={{
                  maxHeight: 520,
                  filter:
                    "drop-shadow(0 5px 6px rgba(20,9,3,.55)) drop-shadow(0 18px 18px rgba(20,9,3,.38)) drop-shadow(0 34px 30px rgba(20,9,3,.28))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
