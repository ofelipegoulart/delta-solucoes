"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

export type NavKey = "home" | "servicos" | "clientes" | "sobre-nos" | "contato" | "legal";

const NAV_ITEMS: { label: string; href: string; key: NavKey }[] = [
  { label: "Serviços", href: "/servicos", key: "servicos" },
  { label: "Clientes", href: "/clientes", key: "clientes" },
  { label: "Sobre Nós", href: "/sobre-nos", key: "sobre-nos" },
  { label: "Contato", href: "/contato", key: "contato" },
];

type HeaderProps = {
  current: NavKey;
};

export default function Header({ current }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-branco border-t-4 border-t-laranja border-b border-b-borda-morna">
        <div className="max-w-310 mx-auto h-20 flex items-center justify-between px-6 md:px-12">
          <Link href="/" className="flex gap-3 items-center hover:opacity-85 transition-opacity">
            <Image
              src="/images/logos/logo-header-laranja.png"
              alt="Delta Soluções"
              width={166}
              height={144}
              className="h-11 w-auto object-contain"
              priority
            />
            <span className="flex flex-col" style={{ lineHeight: 1.15 }}>
              <span
                className="font-bold text-marinho"
                style={{ fontFamily: "var(--font-heading)", fontSize: 20, letterSpacing: "-0.01em" }}
              >
                Delta
              </span>
              <span
                className="font-medium uppercase text-grafite"
                style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.14em" }}
              >
                Soluções em Impressão
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-grafite">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.key}
                label={item.label}
                href={item.href}
                isCurrent={current === item.key}
              />
            ))}
            <Link
              href="/contato?modo=orcamento"
              className="bg-laranja hover:bg-laranja-profundo transition-colors px-4 py-2 rounded text-white text-sm font-medium"
            >
              Orçamento
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setDrawerOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={drawerOpen}
            className="md:hidden w-9 h-9 rounded flex items-center justify-center relative"
          >
            <div className="w-4 h-3.5 relative">
              <span
                className="absolute left-0 top-0 block w-4 h-0.5 bg-marinho transition-transform duration-300 ease-in-out origin-center"
                style={{
                  transform: drawerOpen
                    ? "translateY(7px) rotate(45deg)"
                    : "translateY(0) rotate(0)",
                }}
              />
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 block w-4 h-0.5 bg-marinho transition-all duration-300 ease-in-out"
                style={{
                  opacity: drawerOpen ? 0 : 1,
                  transform: drawerOpen ? "scaleX(0)" : "scaleX(1)",
                }}
              />
              <span
                className="absolute left-0 bottom-0 block w-4 h-0.5 bg-marinho transition-transform duration-300 ease-in-out origin-center"
                style={{
                  transform: drawerOpen
                    ? "translateY(-7px) rotate(-45deg)"
                    : "translateY(0) rotate(0)",
                }}
              />
            </div>
          </button>
        </div>
      </header>

      <nav
        className={`md:hidden fixed inset-x-0 top-20 bottom-0 z-30 bg-laranja transition-opacity duration-300 ease-in-out overflow-y-auto ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-5 text-base">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.key}
              label={item.label}
              href={item.href}
              isCurrent={current === item.key}
              variant="mobile"
              onClick={() => setDrawerOpen(false)}
            />
          ))}
          <Link
            href="/contato?modo=orcamento"
            onClick={() => setDrawerOpen(false)}
            className="bg-branco hover:bg-branco/90 transition-colors px-3 py-2 rounded text-laranja text-sm font-medium text-center"
          >
            Orçamento
          </Link>
        </div>
      </nav>
    </>
  );
}
