// TODO: preencher com o Measurement ID do Google Analytics (formato "G-XXXXXXXXXX")
// quando o cliente disponibilizar, e então plugar o gtag.js (ex.: em src/app/layout.tsx)
// carregando o script somente quando readCookieConsent()?.analytics === true, e voltando
// a checar COOKIE_CONSENT_EVENT para ativar/desativar em tempo real conforme a preferência.
export const GA_MEASUREMENT_ID = "";

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  decidedAt: string;
};

export const COOKIE_CONSENT_KEY = "delta-cookie-consent";
export const COOKIE_CONSENT_EVENT = "delta-cookie-consent-change";
export const COOKIE_CONSENT_OPEN_EVENT = "delta-cookie-consent-open";

export function readCookieConsent(): CookieConsent | null {
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.analytics !== "boolean") return null;
    return { necessary: true, analytics: parsed.analytics, decidedAt: parsed.decidedAt ?? "" };
  } catch {
    return null;
  }
}

export function writeCookieConsent(analytics: boolean) {
  const consent: CookieConsent = {
    necessary: true,
    analytics,
    decidedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: consent }));
  } catch {
    // localStorage indisponível — a preferência não persiste, mas a UI continua funcional
  }
  return consent;
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(COOKIE_CONSENT_OPEN_EVENT));
}
