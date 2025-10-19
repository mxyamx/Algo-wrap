import { describe, it, expect } from "vitest";
import { prefixSum } from "../src/algorithms/utils/prefixSum";

describe("prefixSum", () => {
  it("computes running totals", () => {
    expect(prefixSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  });

  it("works with negatives and zeros", () => {
    expect(prefixSum([0, -2, 5, -3, 4])).toEqual([0, -2, 3, 0, 4]);
  });

  it("handles empty array", () => {
    expect(prefixSum([])).toEqual([]);
  });
});
