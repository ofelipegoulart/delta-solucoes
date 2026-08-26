"use client";

import { useState } from "react";

type Mode = "contato" | "orcamento" | "revendedor";

const MODE_ORDER: Mode[] = ["contato", "orcamento", "revendedor"];

const COPY: Record<
  Mode,
  { title: string; message: string; phone: string; submit: string }
> = {
  contato: {
    title: "Manda sua mensagem",
    message: "Mensagem",
    phone: "Telefone (opcional)",
    submit: "Enviar Mensagem",
  },
  orcamento: {
    title: "Peça seu orçamento",
    message: "Detalhes do projeto",
    phone: "Telefone (opcional)",
    submit: "Solicitar Orçamento",
  },
  revendedor: {
    title: "Quero ser revendedor",
    message: "Conte um pouco sobre o seu negócio",
    phone: "Telefone (obrigatório)",
    submit: "Enviar Cadastro",
  },
};

const MODE_LABELS: Record<Mode, string> = {
  contato: "Contato",
  orcamento: "Orçamento",
  revendedor: "Revendedor",
};

export default function ContatoInfoForm() {
  const [mode, setMode] = useState<Mode>("contato");
  const copy = COPY[mode];
  const modeIndex = MODE_ORDER.indexOf(mode);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-10 md:pb-16">
      <div className="wf-box rounded-lg p-5 sm:p-8">
        <span className="inline-block text-[10px] sm:text-xs bg-neutral-800 text-white px-2 py-1 rounded mb-4">
          02 · CONTATO + FORMULÁRIO (COM ALTERNADOR)
        </span>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-10">
          {/* Coluna: dados + mapa */}
          <div className="order-2 md:order-1 mt-8 md:mt-0">
            <p className="text-[10px] sm:text-xs text-neutral-400 mb-2">H2</p>
            <h2 className="text-base sm:text-lg font-semibold text-neutral-700 mb-4">
              Onde a gente está
            </h2>

            <div className="bg-white border border-neutral-300 rounded-lg p-4 mb-5 space-y-2.5 text-xs sm:text-sm text-neutral-600">
              <p>
                <span className="font-semibold text-neutral-700">
                  Endereço:
                </span>{" "}
                Rua Dr. João Batista de Bernardes Lima, 491 — Chácara
                Inglesa, São Paulo/SP
              </p>
              <p>
                <span className="font-semibold text-neutral-700">
                  Telefone:
                </span>{" "}
                (11) 2738-9515
              </p>
              <p>
                <span className="font-semibold text-neutral-700">
                  E-mail:
                </span>{" "}
                [ inserir e-mail oficial ]
              </p>
              <p>
                <span className="font-semibold text-neutral-700">
                  Horário:
                </span>{" "}
                Segunda a sexta, [ inserir horário ]
              </p>
            </div>

            <div className="wf-img rounded h-40 sm:h-48 md:h-56 flex items-center justify-center text-[11px] text-neutral-500">
              [ MAPA INCORPORADO — GOOGLE MAPS ]
            </div>

            <div className="flex gap-3 mt-5">
              <div className="wf-img rounded-full w-8 h-8" />
              <div className="wf-img rounded-full w-8 h-8" />
              <div className="wf-img rounded-full w-8 h-8" />
            </div>
            <p className="text-[10px] text-neutral-400 mt-2">
              ↳ Instagram · LinkedIn · WhatsApp
            </p>
          </div>

          {/* Coluna: formulário */}
          <div className="order-1 md:order-2">
            <p className="text-[10px] sm:text-xs text-neutral-400 mb-2">H2</p>
            <h2 className="text-base sm:text-lg font-semibold text-neutral-700 mb-4">
              {copy.title}
            </h2>

            {/* Alternador estilo iOS: Contato / Orçamento / Revendedor */}
            <div className="flex justify-center mb-5">
              <div className="relative inline-flex bg-neutral-200 rounded-full p-1 w-full max-w-[340px]">
                <div
                  className="absolute top-1 left-1 w-[calc(33.333%-4px)] h-[calc(100%-8px)] bg-white rounded-full shadow transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(${modeIndex * 100}%)` }}
                />
                {MODE_ORDER.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMode(m)}
                    className={`relative z-10 flex-1 text-[11px] sm:text-sm font-semibold py-2 rounded-full transition-colors ${
                      mode === m ? "text-neutral-800" : "text-neutral-400"
                    }`}
                  >
                    {MODE_LABELS[m]}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border border-neutral-300 rounded-lg p-4 sm:p-5 space-y-3">
              <div>
                <p className="text-[10px] text-neutral-400 mb-1">Nome</p>
                <div className="wf-box rounded h-9" />
              </div>
              <div>
                <p className="text-[10px] text-neutral-400 mb-1">E-mail</p>
                <div className="wf-box rounded h-9" />
              </div>
              <div>
                <p className="text-[10px] text-neutral-400 mb-1">
                  {copy.phone}
                </p>
                <div className="wf-box rounded h-9" />
              </div>

              {mode === "contato" && (
                <div>
                  <p className="text-[10px] text-neutral-400 mb-1">Assunto</p>
                  <div className="wf-box rounded h-9 flex items-center px-3 text-[10px] text-neutral-500">
                    Dúvida geral / Parceria / Imprensa / Outro ▾
                  </div>
                </div>
              )}

              {mode === "orcamento" && (
                <>
                  <div>
                    <p className="text-[10px] text-neutral-400 mb-1">
                      Tipo de produto
                    </p>
                    <div className="wf-box rounded h-9 flex items-center px-3 text-[10px] text-neutral-500">
                      Embalagens / Promocionais / Rótulos e Etiquetas ▾
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] text-neutral-400 mb-1">
                        Quantidade estimada
                      </p>
                      <div className="wf-box rounded h-9" />
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-400 mb-1">
                        Prazo desejado
                      </p>
                      <div className="wf-box rounded h-9" />
                    </div>
                  </div>
                </>
              )}

              {mode === "revendedor" && (
                <>
                  <div>
                    <p className="text-[10px] text-neutral-400 mb-1">
                      Nome da empresa/loja
                    </p>
                    <div className="wf-box rounded h-9" />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-400 mb-1">
                      Cidade / Estado
                    </p>
                    <div className="wf-box rounded h-9" />
                  </div>
                </>
              )}

              <div>
                <p className="text-[10px] text-neutral-400 mb-1">
                  {copy.message}
                </p>
                <div className="wf-box rounded h-20" />
              </div>

              {mode === "orcamento" && (
                <div>
                  <p className="text-[10px] text-neutral-400 mb-1">
                    Referências e materiais (opcional)
                  </p>
                  <button
                    type="button"
                    className="w-full border-2 border-dashed border-neutral-400 text-neutral-600 text-xs sm:text-sm font-medium rounded-lg px-4 py-3 flex items-center justify-center gap-2 hover:border-neutral-600 hover:text-neutral-800 transition-colors"
                  >
                    <span className="text-base leading-none">＋</span>
                    Enviar Arquivos
                  </button>
                  <p className="text-[10px] text-neutral-400 mt-1">
                    ↳ referências visuais, manual da marca, arte em PDF/AI,
                    etc.
                  </p>
                </div>
              )}

              <div className="flex items-start gap-2 pt-1">
                <div className="wf-box w-4 h-4 rounded shrink-0 mt-0.5" />
                <p className="text-[10px] sm:text-xs text-neutral-500 leading-snug">
                  Li e aceito os{" "}
                  <span className="underline">termos de uso</span> e a
                  política de privacidade.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-800 text-white text-xs sm:text-sm font-medium rounded px-5 py-3 text-center"
              >
                {copy.submit}
              </button>
            </div>
          </div>
        </div>
        <p className="md:hidden text-[10px] text-neutral-400 mt-5">
          ↳ mobile: formulário primeiro, dados de contato e mapa abaixo ·
          desktop: 2 colunas lado a lado
        </p>
        <p className="text-[10px] text-neutral-400 mt-1">
          ↳ alternador estilo iOS troca entre Contato, Orçamento e Revendedor
          sem sair da página; Orçamento adiciona os campos técnicos e o
          botão de envio de arquivos; Revendedor exige telefone e pede dados
          do negócio; o checkbox de termos de uso aparece nos 3 modos
        </p>
      </div>
    </section>
  );
}
