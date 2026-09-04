import Image from "next/image";
import { Droplet, Pill, ShoppingBag, Utensils } from "lucide-react";
import { SEGMENTOS } from "./clientes-content";

const SEGMENTO_ICONS: Record<string, typeof Droplet> = {
  Alimentos: Utensils,
  Cosméticos: Droplet,
  Farmacêutico: Pill,
  Varejo: ShoppingBag,
};

export default function ClientesSegmentos() {
  return (
    <section
      id="segmentos"
      className="w-full bg-branco"
      style={{ paddingTop: 68 }}
    >
      <div className="max-w-310 mx-auto px-6 md:px-12 pb-16 md:pb-20">
        <h2
          className="font-bold text-marinho mb-3"
          style={{ fontSize: "clamp(25px, 3.6vw, 34px)", letterSpacing: "-0.02em" }}
        >
          Setores que já passaram pela nossa produção
        </h2>
        <p className="text-tinta leading-[1.6]" style={{ maxWidth: "66ch" }}>
          Em vez de uma lista enorme de nomes, preferimos mostrar a
          diversidade de quem já trabalhou com a gente — isso diz mais sobre
          nossa experiência do que uma parede de logos.
        </p>

        <div
          className="grid grid-cols-4 mt-11"
          style={{ gap: "clamp(8px, 2vw, 28px)" }}
        >
          {SEGMENTOS.map((segmento) => {
            const Icon = SEGMENTO_ICONS[segmento.nome];
            return (
              <div
                key={segmento.nome}
                className="flex flex-col items-center text-center bg-off-white-morno"
                style={{
                  gap: "clamp(8px, 2vw, 18px)",
                  padding: "clamp(10px, 3vw, 24px)",
                }}
              >
                <div
                  className="rounded-full bg-branco flex items-center justify-center shrink-0 text-laranja-profundo"
                  style={{
                    width: "clamp(44px, 11vw, 76px)",
                    height: "clamp(44px, 11vw, 76px)",
                    padding: "clamp(10px, 3vw, 22px)",
                  }}
                >
                  {segmento.icone ? (
                    <Image
                      src={segmento.icone}
                      alt=""
                      width={30}
                      height={30}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    Icon && <Icon className="w-full h-full" strokeWidth={1.8} aria-hidden />
                  )}
                </div>
                <p
                  className="font-semibold text-marinho"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(11px, 2.6vw, 19px)",
                  }}
                >
                  {segmento.nome}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
