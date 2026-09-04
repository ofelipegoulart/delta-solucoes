import Image from "next/image";
import { LOGOS_FAIXA } from "./clientes-content";

export default function ClientesLogos() {
  return (
    <section className="w-full bg-branco" style={{ padding: "64px 0 104px" }}>
      <div className="max-w-310 mx-auto px-6 md:px-12">
        <div
          className="border-t border-b border-borda grid grid-cols-2 min-[860px]:grid-cols-4 gap-9 items-center"
          style={{ padding: "30px 0" }}
        >
          {LOGOS_FAIXA.map((logo) => (
            <div
              key={logo.alt}
              className="h-10 flex items-center justify-center opacity-55"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="max-h-10 max-w-full w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
