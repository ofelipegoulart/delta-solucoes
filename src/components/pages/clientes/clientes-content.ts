export type Segmento = {
  nome: string;
  /** Caminho do ícone real, quando entregue. Enquanto vazio, usa o placeholder. */
  icone?: string;
};

export const SEGMENTOS: Segmento[] = [
  { nome: "Alimentos" },
  { nome: "Cosméticos" },
  { nome: "Farmacêutico" },
  { nome: "Varejo" },
];

export type Depoimento = {
  citacao: string;
  nome: string;
  cargo: string;
  empresa: string;
  /** Logo real do cliente, quando entregue. Enquanto vazio, usa o placeholder. */
  logo?: string;
  /** Foto real do avatar, quando entregue. Enquanto vazio, usa o placeholder. */
  avatar?: string;
};

export const DEPOIMENTOS: Depoimento[] = [
  {
    citacao:
      "[ trecho real do depoimento — aguardando texto e material de referência do cliente ]",
    nome: "Nome do contato",
    cargo: "Cargo",
    empresa: "Empresa A",
  },
  {
    citacao:
      "[ trecho real do depoimento — aguardando texto e material de referência do cliente ]",
    nome: "Nome do contato",
    cargo: "Cargo",
    empresa: "Empresa B",
  },
  {
    citacao:
      "[ trecho real do depoimento — aguardando texto e material de referência do cliente ]",
    nome: "Nome do contato",
    cargo: "Cargo",
    empresa: "Empresa C",
  },
];

export type LogoFaixa = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const LOGOS_FAIXA: LogoFaixa[] = [
  {
    src: "/images/logos/clientes/moderna.webp",
    alt: "Logo da Moderna, cliente da Delta Soluções",
    width: 1280,
    height: 295,
  },
  {
    src: "/images/logos/clientes/azulla.png",
    alt: "Logo da Azulla, cliente da Delta Soluções",
    width: 400,
    height: 180,
  },
  {
    src: "/images/logos/clientes/citadel.png",
    alt: "Logo da Citadel, cliente da Delta Soluções",
    width: 480,
    height: 126,
  },
  {
    src: "/images/logos/clientes/terumo.png",
    alt: "Logo da Terumo, cliente da Delta Soluções",
    width: 800,
    height: 450,
  },
];
