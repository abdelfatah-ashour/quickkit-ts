import { describe, expect, it } from "vitest";

import { getDuration } from "../../src/quickkit-date/get-duration.js";

describe("getDuration", () => {
  it("returns the absolute difference between two valid dates", () => {
    expect(getDuration("2026-03-13T00:00:00.000Z", "2026-03-13T00:01:00.000Z")).toBe(60_000);
  });

  it("returns NaN when either input is invalid", () => {
    expect(getDuration("invalid-date", "2026-03-13T00:01:00.000Z")).toBeNaN();
  });
});
