"use client";

import { useLocale } from "@/lib/locale-context";
import { locales } from "@/lib/i18n";

export function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <select
      className="rounded-full border border-muted/30 bg-background px-3 py-1 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
      value={locale}
      onChange={(event) => {
        setLocale(event.target.value as "vi" | "en");
      }}
    >
      {locales.map((localeOption) => (
        <option key={localeOption} value={localeOption}>
          {localeOption.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
