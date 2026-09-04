import type { Metadata } from "next";
import PoliticaDePrivacidadePage from "@/components/pages/legal/PoliticaDePrivacidadePage";

export const metadata: Metadata = {
  title: "Política de Privacidade | Delta Soluções",
  description:
    "Política de Privacidade do site da Delta Soluções em Impressão, conforme a LGPD.",
};

export default function Page() {
  return <PoliticaDePrivacidadePage />;
}
