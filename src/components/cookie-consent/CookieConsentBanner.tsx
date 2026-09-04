"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  COOKIE_CONSENT_OPEN_EVENT,
  readCookieConsent,
  writeCookieConsent,
} from "./cookie-consent";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [analyticsDraft, setAnalyticsDraft] = useState(false);

  useEffect(() => {
    const existing = readCookieConsent();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sincroniza com localStorage, indisponível no SSR
    if (!existing) setVisible(true);
    else setAnalyticsDraft(existing.analytics);

    const openPreferences = () => {
      const current = readCookieConsent();
      setAnalyticsDraft(current?.analytics ?? false);
      setManaging(true);
      setVisible(true);
    };
    window.addEventListener(COOKIE_CONSENT_OPEN_EVENT, openPreferences);
    return () =>
      window.removeEventListener(COOKIE_CONSENT_OPEN_EVENT, openPreferences);
  }, []);

  useEffect(() => {
    if (!managing) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setManaging(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [managing]);

  function acceptAll() {
    writeCookieConsent(true);
    setVisible(false);
    setManaging(false);
  }

  function rejectNonEssential() {
    writeCookieConsent(false);
    setVisible(false);
    setManaging(false);
  }

  function savePreferences() {
    writeCookieConsent(analyticsDraft);
    setVisible(false);
    setManaging(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50"
      role="dialog"
      aria-live="polite"
      aria-label="Preferências de cookies"
    >
      <div
        className="w-full bg-marinho text-branco border-t border-white/10 shadow-lg text-center"
        style={{ padding: "clamp(16px, 3vw, 24px) clamp(16px, 5vw, 48px)" }}
      >
        <div className="max-w-220 mx-auto flex flex-col items-center">
          {!managing ? (
            <>
              <p className="text-[14px] leading-[1.6]">
                Usamos cookies essenciais para o funcionamento do site. Com sua
                permissão, também usamos cookies do Google Analytics para
                entender de onde vêm nossos acessos. Saiba mais na{" "}
                <Link
                  href="/politica-de-privacidade#cookies-e-analytics"
                  className="underline hover:text-laranja"
                >
                  Política de Privacidade
                </Link>
                .
              </p>
              <div className="flex flex-wrap justify-center gap-2.5 mt-4">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="font-bold bg-laranja text-white rounded-[3px] hover:bg-laranja-profundo transition-colors px-4 py-2.5 text-[14px]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Aceitar todos
                </button>
                <button
                  type="button"
                  onClick={rejectNonEssential}
                  className="font-bold bg-transparent text-branco border border-white/30 rounded-[3px] hover:border-white transition-colors px-4 py-2.5 text-[14px]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Rejeitar não essenciais
                </button>
                <button
                  type="button"
                  onClick={() => setManaging(true)}
                  className="font-medium bg-transparent text-branco/80 hover:text-branco underline transition-colors px-2 py-2.5 text-[14px]"
                >
                  Gerenciar preferências
                </button>
              </div>
            </>
          ) : (
            <>
              <p
                className="text-[15px] font-bold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Preferências de cookies
              </p>
              <div className="flex flex-col gap-3 mt-3.5 w-full text-left">
                <div className="flex items-start justify-between gap-4 bg-white/5 rounded-[2px] p-3">
                  <div>
                    <p className="text-[14px] font-semibold">Essenciais</p>
                    <p className="text-[12.5px] text-branco/70 leading-snug mt-0.5">
                      Necessários para o funcionamento do site. Sempre ativos.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="mt-1 shrink-0"
                    style={{ width: 18, height: 18 }}
                  />
                </div>
                <div className="flex items-start justify-between gap-4 bg-white/5 rounded-[2px] p-3">
                  <div>
                    <p className="text-[14px] font-semibold">
                      Analytics (Google Analytics)
                    </p>
                    <p className="text-[12.5px] text-branco/70 leading-snug mt-0.5">
                      Nos ajuda a entender de onde vêm os acessos e como as
                      páginas são navegadas.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={analyticsDraft}
                    onChange={(e) => setAnalyticsDraft(e.target.checked)}
                    className="mt-1 shrink-0"
                    style={{ width: 18, height: 18, accentColor: "#f26522" }}
                    aria-label="Permitir cookies de Analytics"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2.5 mt-4">
                <button
                  type="button"
                  onClick={savePreferences}
                  className="font-bold bg-laranja text-white rounded-[3px] hover:bg-laranja-profundo transition-colors px-4 py-2.5 text-[14px]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Salvar preferências
                </button>
                <button
                  type="button"
                  onClick={() => setManaging(false)}
                  className="font-medium bg-transparent text-branco/80 hover:text-branco underline transition-colors px-2 py-2.5 text-[14px]"
                >
                  Voltar
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
