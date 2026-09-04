import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

type LegalLayoutProps = {
  title: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
};

export default function LegalLayout({ title, updatedAt, intro, sections }: LegalLayoutProps) {
  return (
    <>
      <Header current="legal" />

      <main className="w-full bg-branco">
        <div className="max-w-230 mx-auto px-6 md:px-12 py-14 md:py-20">
          <h1
            className="font-bold text-marinho"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", letterSpacing: "-0.02em" }}
          >
            {title}
          </h1>
          <p className="text-[13px] text-grafite/70 mt-2">Última atualização: {updatedAt}</p>
          <p className="text-tinta leading-[1.7] mt-6" style={{ maxWidth: "70ch" }}>
            {intro}
          </p>

          <nav aria-label="Sumário" className="mt-8 bg-off-white-morno p-5 rounded-[2px]">
            <p className="text-[12px] font-bold uppercase text-marinho mb-3" style={{ letterSpacing: "0.1em" }}>
              Índice
            </p>
            <ol className="flex flex-col gap-1.5 text-[14px]">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="text-laranja-profundo hover:underline">
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex flex-col gap-10 mt-12">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2
                  className="font-bold text-marinho mb-3"
                  style={{ fontSize: "clamp(19px, 2.4vw, 23px)", letterSpacing: "-0.01em" }}
                >
                  {index + 1}. {section.title}
                </h2>
                <div className="text-tinta leading-[1.75] flex flex-col gap-3" style={{ maxWidth: "70ch" }}>
                  {section.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
