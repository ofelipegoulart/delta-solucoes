import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Serviços", href: "/servicos" },
  { label: "Clientes", href: "/clientes" },
  { label: "Sobre Nós", href: "/sobre-nos" },
  { label: "Contato", href: "/contato" },
];

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-3.5 h-3.5 shrink-0"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.27-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.83 14.13c-.25.7-1.24 1.28-2.03 1.45-.55.12-1.26.21-3.67-.79-2.98-1.24-4.9-4.25-5.05-4.45-.15-.2-1.2-1.6-1.2-3.05s.76-2.17 1.03-2.47c.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.06.92 2.21.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.35 1.44.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.28.1 1.75.83 2.05 .98.3.15.5.23.57.35.08.13.08.72-.17 1.42Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 shrink-0"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5 shrink-0"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5 shrink-0 mt-0.5"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

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
                href="mailto:matheus@grupomaxi.com.br"
                className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-laranja transition-colors w-fit"
              >
                <MailIcon />
                matheus@grupomaxi.com.br
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
                href="mailto:matheus@grupomaxi.com.br"
                className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-laranja transition-colors w-fit"
              >
                <MailIcon />
                matheus@grupomaxi.com.br
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

        <div className="border-t border-off-white/15 mt-10 pt-5 text-center text-[10px] text-cinza-claro">
          © Todos os Direitos Reservados — Delta Soluções em Impressão Ltda
        </div>
      </div>
    </footer>
  );
}
