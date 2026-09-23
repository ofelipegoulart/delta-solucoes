import type { Metadata } from "next";
import ClientesPage from "@/components/pages/clientes/ClientesPage";

export const metadata: Metadata = {
  title: "Clientes",
  description:
    "Marcas que confiaram no trabalho da Delta Soluções em Impressão: projetos reais de embalagens, rótulos e etiquetas com resultado comprovado.",
  alternates: {
    canonical: "/clientes",
  },
};

export default function Page() {
  return <ClientesPage />;
}
