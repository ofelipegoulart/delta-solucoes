import type { Metadata } from "next";
import ServicosPage from "@/components/pages/servicos/ServicosPage";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Do promocional à embalagem, do rótulo à comunicação visual: conheça os serviços de impressão da Delta Soluções, incluindo criação de arte.",
  alternates: {
    canonical: "/servicos",
  },
};

export default function Page() {
  return <ServicosPage />;
}
