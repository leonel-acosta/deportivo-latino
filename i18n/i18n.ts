export const locales = ["es", "en", "de"] as const;
export const defaultLocale = "es";
export type Locale = (typeof locales)[number];
