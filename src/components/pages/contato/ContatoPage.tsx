import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContatoHero from "./ContatoHero";
import ContatoInfoForm from "./ContatoInfoForm";

export default function ContatoPage() {
  return (
    <>
      <Header current="contato" />

      <main>
        <ContatoHero />
        <ContatoInfoForm />
      </main>

      <Footer />
    </>
  );
}
