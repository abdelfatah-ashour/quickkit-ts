import { resolveLocale } from "./resolve-locale.js";
import type { TypeFormat } from "./type-format.js";

const FORMAT_OPTIONS: Record<TypeFormat, Intl.DateTimeFormatOptions> = {
  short: {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  },
  medium: {
    year: "numeric",
    month: "short",
    day: "numeric",
  },
  long: {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
  full: {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  },
};

/**
 * Formats a date value using one of the predefined format presets.
 *
 * @param input - Date object, timestamp, or ISO date string.
 * @param formatType - Formatting preset from TypeFormat.
 * @returns The formatted date string for the current locale.
 * @example
 * format("2026-03-13T00:00:00.000Z", "short");
 */
export function format(input: Date | number | string, formatType: TypeFormat): string {
  const date = new Date(input);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat(resolveLocale(), FORMAT_OPTIONS[formatType]).format(date);
}
