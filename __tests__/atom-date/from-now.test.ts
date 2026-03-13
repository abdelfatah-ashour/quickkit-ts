import { afterEach, describe, expect, it, vi } from "vitest";

import { fromNow } from "../../src/atom-date/from-now.js";

describe("fromNow", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("formats relative time for valid input", () => {
    const baseNow = new Date("2026-03-13T00:00:30.000Z").getTime();
    vi.spyOn(Date, "now").mockReturnValue(baseNow);

    const result = fromNow("2026-03-13T00:00:00.000Z");
    expect(result).not.toBe("");
  });

  it("returns empty string for invalid input", () => {
    expect(fromNow("invalid-date")).toBe("");
  });
});
