import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientesHero from "./ClientesHero";
import ClientesSegmentos from "./ClientesSegmentos";
import ClientesDepoimentos from "./ClientesDepoimentos";
import ClientesLogos from "./ClientesLogos";
import ClientesFinalCta from "./ClientesFinalCta";

export default function ClientesPage() {
  return (
    <>
      <Header current="clientes" />

      <main>
        <ClientesHero />
        <ClientesSegmentos />
        <ClientesDepoimentos />
        <ClientesLogos />
        <ClientesFinalCta />
      </main>

      <Footer />
    </>
  );
}
