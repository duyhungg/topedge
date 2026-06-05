import en from "@/i18n/en.json";
import vi from "@/i18n/vi.json";

export const locales = ["vi", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vi";

const dictionaries = {
  en,
  vi,
} as const;

export function getDictionary(locale: string) {
  const normalizedLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  return dictionaries[normalizedLocale];
}
