import { resolveLocale } from "./resolve-locale.js";

const DIVISIONS = [
  { amount: 60, unit: "second" },
  { amount: 60, unit: "minute" },
  { amount: 24, unit: "hour" },
  { amount: 7, unit: "day" },
  { amount: 4.34524, unit: "week" },
  { amount: 12, unit: "month" },
  { amount: Number.POSITIVE_INFINITY, unit: "year" },
] as const;

/**
 * Formats a date as a relative label from now.
 *
 * @param input - Date object, timestamp, or ISO date string.
 * @returns Relative text based on the current locale.
 * @example
 * fromNow(Date.now() - 30_000); // "30 seconds ago"
 */
export function fromNow(input: Date | number | string): string {
  const date = new Date(input);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  let duration = (date.getTime() - Date.now()) / 1000;
  const formatter = new Intl.RelativeTimeFormat(resolveLocale(), {
    numeric: "auto",
  });

  for (const division of DIVISIONS) {
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.unit);
    }

    duration /= division.amount;
  }

  return formatter.format(Math.round(duration), "year");
}
