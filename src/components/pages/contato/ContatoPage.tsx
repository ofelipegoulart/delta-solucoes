import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContatoHero from "./ContatoHero";
import ContatoChannels from "./ContatoChannels";
import ContatoForm from "./ContatoForm";

export default function ContatoPage({ initialModo }: { initialModo?: string }) {
  return (
    <>
      <Header current="contato" />

      <main>
        <ContatoHero />

        <section className="w-full bg-off-white">
          <div
            className="max-w-310 mx-auto contato-corpo-grid"
            style={{
              paddingTop: "clamp(44px, 7vw, 76px)",
              paddingBottom: "clamp(44px, 7vw, 76px)",
              paddingInline: "clamp(20px, 4vw, 48px)",
            }}
          >
            <ContatoChannels />
            <ContatoForm initialModo={initialModo} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
