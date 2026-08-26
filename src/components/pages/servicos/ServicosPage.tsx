import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicosHero from "./ServicosHero";
import ServicosCategorias from "./ServicosCategorias";
import ServicosFazemosTudo from "./ServicosFazemosTudo";
import ServicosFinalCta from "./ServicosFinalCta";

export default function ServicosPage() {
  return (
    <>
      <Header current="servicos" />

      <main>
        <ServicosHero />
        <ServicosCategorias />
        <ServicosFazemosTudo />
        <ServicosFinalCta />
      </main>

      <Footer />
    </>
  );
}
