/**
 * Gets the absolute time difference between two dates in milliseconds.
 *
 * @param from - Start date value.
 * @param to - End date value.
 * @returns Difference in milliseconds, or NaN if either date is invalid.
 * @example
 * getDuration("2026-03-01", "2026-03-02"); // 86400000
 */
export function getDuration(from: Date | number | string, to: Date | number | string): number {
  const fromDate = new Date(from);
  const toDate = new Date(to);

  if (Number.isNaN(fromDate.getTime()) || Number.isNaN(toDate.getTime())) {
    return Number.NaN;
  }

  return Math.abs(toDate.getTime() - fromDate.getTime());
}
