import type { Metadata } from "next";
import SobreNosPage from "@/components/pages/sobre-nos/SobreNosPage";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a Delta Soluções em Impressão: um fornecedor só, do desenvolvimento à entrega final de embalagens, rótulos e material impresso em São Paulo.",
  alternates: {
    canonical: "/sobre-nos",
  },
};

export default function Page() {
  return <SobreNosPage />;
}
