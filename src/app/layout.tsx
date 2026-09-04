import type { Metadata } from "next";
import { Archivo, Roboto } from "next/font/google";
import CookieConsentBanner from "@/components/cookie-consent/CookieConsentBanner";
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
  title: "Delta Soluções (Next.js)",
  description: "Wireframe · Delta Soluções em Impressão",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${roboto.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-neutral-100 text-neutral-800 font-sans antialiased">
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
