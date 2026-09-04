export type Mode = "contato" | "orcamento" | "revendedor";

export const MODE_ORDER: Mode[] = ["contato", "orcamento", "revendedor"];

export const MODE_LABELS: Record<Mode, string> = {
  contato: "Contato",
  orcamento: "Orçamento",
  revendedor: "Revendedor",
};

export const MODE_COPY: Record<
  Mode,
  {
    supportLine: string;
    phoneLabel: string;
    phoneRequired: boolean;
    messagePlaceholder: string;
    submitLabel: string;
  }
> = {
  contato: {
    supportLine:
      "Dúvida, parceria ou imprensa: conta o que você precisa e a gente direciona para a pessoa certa.",
    phoneLabel: "Telefone (opcional)",
    phoneRequired: false,
    messagePlaceholder: "Escreva sua mensagem…",
    submitLabel: "Enviar Mensagem",
  },
  orcamento: {
    supportLine:
      "Quanto mais você contar sobre o material, mais rápido a resposta volta fechada.",
    phoneLabel: "Telefone",
    phoneRequired: true,
    messagePlaceholder: "Detalhes de acabamento, referências, observações…",
    submitLabel: "Pedir Orçamento",
  },
  revendedor: {
    supportLine:
      "Quer revender nossos materiais? Preencha os dados do seu negócio que a gente retorna com as condições.",
    phoneLabel: "Telefone",
    phoneRequired: true,
    messagePlaceholder:
      "Conte um pouco sobre a sua operação e o que pretende revender…",
    submitLabel: "Quero Ser Revendedor",
  },
};

export const ASSUNTO_OPTIONS = ["Dúvida geral", "Parceria", "Imprensa", "Outro"];

export const MATERIAL_OPTIONS = [
  "Promocionais",
  "Embalagens",
  "Adesivos e Rótulos",
  "Comunicação Visual",
  "Ainda não sei",
];

export const ARTE_OPTIONS = [
  "Sim, arte fechada",
  "Tenho um rascunho",
  "Não, preciso de criação",
];

export const MAX_FILE_SIZE_MB = 25;
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export const STORAGE_KEY = "delta-contato-modo";

export function isMode(value: string | undefined | null): value is Mode {
  return !!value && (MODE_ORDER as string[]).includes(value);
}
