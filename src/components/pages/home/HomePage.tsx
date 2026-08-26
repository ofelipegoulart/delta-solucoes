import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomeHero from "./HomeHero";
import HomeLogos from "./HomeLogos";
import HomeProductLine from "./HomeProductLine";
import HomeFinalCta from "./HomeFinalCta";

export default function HomePage() {
  return (
    <>
      <Header current="home" showLogoOnMobile={false} />

      <main>
        <HomeHero />
        <HomeLogos />
        <HomeProductLine />
        <HomeFinalCta />
      </main>

      <Footer />
    </>
  );
}
