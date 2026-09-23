import type { Metadata } from "next";
import ContatoPage from "@/components/pages/contato/ContatoPage";

export const metadata: Metadata = {
  title: "Contato | Delta Soluções em Impressão - São Paulo/SP",
  description:
    "Fale com a Delta Soluções em Impressão. Peça orçamento de embalagens, rótulos e etiquetas pelo formulário, telefone (11) 98751-8911 ou e-mail.",
  alternates: {
    canonical: "/contato",
  },
};

type Props = {
  searchParams: Promise<{ modo?: string }>;
};

export default async function Page({ searchParams }: Props) {
  const { modo } = await searchParams;
  return <ContatoPage initialModo={modo} />;
}
