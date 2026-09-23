import type { Metadata } from "next";
import TermosDeUsoPage from "@/components/pages/legal/TermosDeUsoPage";

export const metadata: Metadata = {
  title: "Termos de Uso | Delta Soluções",
  description: "Termos de Uso do site da Delta Soluções em Impressão.",
  alternates: {
    canonical: "/termos-de-uso",
  },
};

export default function Page() {
  return <TermosDeUsoPage />;
}
