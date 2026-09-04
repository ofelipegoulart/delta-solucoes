import Image from "next/image";
import { DEPOIMENTOS } from "./clientes-content";

function LogoPlaceholder({ empresa }: { empresa: string }) {
  return (
    <div className="w-29.5 h-8.5 flex items-center bg-branco border border-borda px-2">
      <span className="text-[10px] font-semibold text-grafite uppercase tracking-wide truncate">
        {empresa}
      </span>
    </div>
  );
}

function AvatarPlaceholder({ nome }: { nome: string }) {
  const initials = nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();

  return (
    <div className="w-9.5 h-9.5 rounded-full bg-marinho text-off-white flex items-center justify-center text-[13px] font-semibold shrink-0">
      {initials}
    </div>
  );
}

export default function ClientesDepoimentos() {
  return (
    <section
      id="depoimentos"
      className="w-full bg-branco"
      style={{ paddingTop: 72 }}
    >
      <div className="max-w-310 mx-auto px-6 md:px-12 pb-16 md:pb-20">
        <div className="border-t border-borda pt-6.5">
          <h2
            className="font-bold text-marinho"
            style={{ fontSize: "clamp(25px, 3.6vw, 34px)", letterSpacing: "-0.02em" }}
          >
            O que dizem sobre a gente
          </h2>
        </div>

        <div className="grid grid-cols-1 min-[860px]:grid-cols-3 gap-7 mt-11">
          {DEPOIMENTOS.map((depoimento, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 bg-off-white-morno"
              style={{ padding: "22px 24px 24px" }}
            >
              {depoimento.logo ? (
                <Image
                  src={depoimento.logo}
                  alt={`Logo da ${depoimento.empresa}`}
                  width={118}
                  height={34}
                  className="h-8.5 w-auto object-contain"
                />
              ) : (
                <LogoPlaceholder empresa={depoimento.empresa} />
              )}

              <blockquote
                className="text-tinta leading-normal m-0"
                style={{ fontSize: 17 }}
              >
                {depoimento.citacao}
              </blockquote>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-borda-morna">
                {depoimento.avatar ? (
                  <Image
                    src={depoimento.avatar}
                    alt=""
                    width={38}
                    height={38}
                    className="w-9.5 h-9.5 rounded-full object-cover shrink-0"
                  />
                ) : (
                  <AvatarPlaceholder nome={depoimento.nome} />
                )}
                <cite
                  className="not-italic text-tinta leading-normal"
                  style={{ fontSize: 14.5 }}
                >
                  {depoimento.nome} — {depoimento.cargo}, {depoimento.empresa}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
