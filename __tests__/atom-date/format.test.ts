import { describe, expect, it } from "vitest";

import { format } from "../../src/atom-date/format.js";

describe("format", () => {
  it("formats valid date input with a type format preset", () => {
    const result = format("2026-03-13T00:00:00.000Z", "short");
    expect(result).not.toBe("");
  });

  it("returns empty string for invalid input", () => {
    expect(format("invalid-date", "short")).toBe("");
  });
});
