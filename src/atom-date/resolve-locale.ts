/**
 * Resolves the current runtime locale.
 *
 * @returns The best available locale, defaulting to "en".
 * @example
 * resolveLocale(); // "en-US"
 */
export function resolveLocale(): string {
  if (typeof navigator !== "undefined" && navigator.language.trim() !== "") {
    return navigator.language;
  }

  const locale = new Intl.DateTimeFormat().resolvedOptions().locale;
  return locale.trim() === "" ? "en" : locale;
}
