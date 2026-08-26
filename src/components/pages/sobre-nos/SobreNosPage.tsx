import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SobreNosHero from "./SobreNosHero";
import SobreNosDiferencial from "./SobreNosDiferencial";
import SobreNosParqueGrafico from "./SobreNosParqueGrafico";
import SobreNosPortfolio from "./SobreNosPortfolio";
import SobreNosPilares from "./SobreNosPilares";
import SobreNosFinalCta from "./SobreNosFinalCta";

export default function SobreNosPage() {
  return (
    <>
      <Header current="sobre-nos" />

      <main>
        <SobreNosHero />
        <SobreNosDiferencial />
        <SobreNosParqueGrafico />
        <SobreNosPortfolio />
        <SobreNosPilares />
        <SobreNosFinalCta />
      </main>

      <Footer />
    </>
  );
}
