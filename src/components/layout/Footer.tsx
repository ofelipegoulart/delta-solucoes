import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, MailIcon, PinIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";
import ManageCookiesLink from "@/components/cookie-consent/ManageCookiesLink";

const NAV_ITEMS = [
  { label: "Serviços", href: "/servicos" },
  { label: "Clientes", href: "/clientes" },
  { label: "Sobre Nós", href: "/sobre-nos" },
  { label: "Contato", href: "/contato" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-marinho mt-auto pt-3 pb-10">
      <div className="absolute -top-1 left-0 right-0 h-2 bg-marinho" />
      <div className="max-w-310 mx-auto px-6 md:px-12">
        {/* Mobile layout */}
        <div className="md:hidden">
          <Link
            href="/"
            className="max-w-70 mx-auto pb-5 flex items-center gap-3 hover:opacity-85 transition-opacity"
          >
            <Image
              src="/images/logos/logo-footer-v2.png"
              alt="Delta Soluções"
              width={166}
              height={144}
              className="h-12 w-auto object-contain shrink-0"
            />
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-white text-sm tracking-tight">
                Delta Soluções
              </span>
              <span className="text-[11px] text-cinza-claro leading-relaxed">
                Qualidade e Confiança
              </span>
            </div>
          </Link>

          <div className="max-w-70 mx-auto py-5">
            <p className="text-sm font-semibold text-white mb-2">Contato</p>
            <div className="flex flex-col gap-2 text-[11px] text-cinza-claro">
              <a
                href="https://wa.me/5511987518911"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-laranja transition-colors w-fit"
              >
                <WhatsAppIcon />
                +55 (11) 98751-8911
              </a>
              <a
                href="mailto:matheus@groupmaxi.com.br"
                className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-laranja transition-colors w-fit"
              >
                <MailIcon />
                matheus@groupmaxi.com.br
              </a>
              <div className="flex items-start gap-2 opacity-80">
                <PinIcon />
                <span>São Paulo - SP</span>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <a
                href="https://instagram.com/delta.impressao"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center rounded-full w-8 h-8 bg-white/10 text-white opacity-80 hover:opacity-100 hover:bg-laranja transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://wa.me/5511987518911"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center rounded-full w-8 h-8 bg-white/10 text-white opacity-80 hover:opacity-100 hover:bg-laranja transition-colors"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <div className="max-w-70 mx-auto pb-5">
            <p className="text-sm font-semibold text-white mb-2">
              Navegação
            </p>
            <nav className="flex flex-col gap-2 text-[11px] text-cinza-claro">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="opacity-80 hover:opacity-100 hover:text-laranja transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-[1.2fr_1.1fr_.8fr_.8fr] gap-10">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 mb-3 hover:opacity-85 transition-opacity w-fit"
            >
              <Image
                src="/images/logos/logo-footer-v2.png"
                alt="Delta Soluções"
                width={166}
                height={144}
                className="h-12 w-auto object-contain"
              />
              <span className="font-semibold text-white text-sm tracking-tight">
                Delta Soluções
              </span>
            </Link>
            <p className="text-[11px] text-cinza-claro leading-relaxed">
              Qualidade e Confiança
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-white mb-2">Contato</p>
            <div className="flex flex-col gap-2 text-[11px] text-cinza-claro">
              <a
                href="https://wa.me/5511987518911"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-laranja transition-colors w-fit"
              >
                <WhatsAppIcon />
                +55 (11) 98751-8911
              </a>
              <a
                href="mailto:matheus@groupmaxi.com.br"
                className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-laranja transition-colors w-fit"
              >
                <MailIcon />
                matheus@groupmaxi.com.br
              </a>
              <div className="flex items-start gap-2 opacity-80">
                <PinIcon />
                <span>São Paulo - SP</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-white mb-2">
              Navegação
            </p>
            <nav className="flex flex-col gap-2 text-[11px] text-cinza-claro">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="opacity-80 hover:opacity-100 hover:text-laranja transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold text-white mb-2">
              Redes Sociais
            </p>
            <div className="flex gap-2">
              <a
                href="https://instagram.com/delta.impressao"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center rounded-full w-8 h-8 bg-white/10 text-white opacity-80 hover:opacity-100 hover:bg-laranja transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://wa.me/5511987518911"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center rounded-full w-8 h-8 bg-white/10 text-white opacity-80 hover:opacity-100 hover:bg-laranja transition-colors"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-off-white/15 mt-10 pt-5 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center text-[10px] text-cinza-claro">
          <span>© Todos os Direitos Reservados — Delta Soluções em Impressão Ltda</span>
          <span className="hidden md:inline opacity-50">|</span>
          <div className="flex items-center gap-3">
            <Link href="/termos-de-uso" className="opacity-80 hover:opacity-100 hover:text-laranja transition-colors">
              Termos de Uso
            </Link>
            <span className="opacity-50">·</span>
            <Link href="/politica-de-privacidade" className="opacity-80 hover:opacity-100 hover:text-laranja transition-colors">
              Política de Privacidade
            </Link>
            <span className="opacity-50">·</span>
            <ManageCookiesLink className="opacity-80 hover:opacity-100 hover:text-laranja transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
