import type { Metadata } from "next";
import { Archivo, Roboto } from "next/font/google";
import CookieConsentBanner from "@/components/cookie-consent/CookieConsentBanner";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Delta Soluções em Impressão | Embalagens, Rótulos e Etiquetas",
    template: "%s | Delta Soluções em Impressão",
  },
  description:
    "Gráfica em São Paulo especializada em embalagens para alimentos e medicamentos, rótulos em BOPP, etiquetas adesivas e material promocional. Solicite seu orçamento.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Delta Soluções em Impressão",
    title: "Delta Soluções em Impressão | Embalagens, Rótulos e Etiquetas",
    description:
      "Embalagens, rótulos em BOPP e etiquetas adesivas com qualidade e preço justo.",
    url: siteUrl,
    images: [
      {
        url: "/images/logos/logo-header-laranja.png",
        width: 512,
        height: 512,
        alt: "Delta Soluções em Impressão",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Delta Soluções em Impressão",
  url: siteUrl,
  logo: `${siteUrl}/images/logos/logo-header-laranja.png`,
  image: `${siteUrl}/images/logos/logo-header-laranja.png`,
  telephone: "+5511987518911",
  email: "matheus@groupmaxi.com.br",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: ["https://instagram.com/delta.impressao"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${roboto.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-neutral-100 text-neutral-800 font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
