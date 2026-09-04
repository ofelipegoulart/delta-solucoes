"use client";

import { openCookiePreferences } from "./cookie-consent";

export default function ManageCookiesLink({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      Gerenciar Cookies
    </button>
  );
}
