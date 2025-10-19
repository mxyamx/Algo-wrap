import { describe, it, expect } from "vitest";
import { lowerBound } from "../src/algorithms/Search/lowerBound";
import { upperBound } from "../src/algorithms/Search/upperBound";

describe("bounds", () => {
  it("lowerBound basic", () => {
    const a = [1, 2, 2, 2, 3, 4];
    expect(lowerBound(a, 2)).toBe(1);
    expect(lowerBound(a, 0)).toBe(0);
    expect(lowerBound(a, 5)).toBe(6);
  });

  it("upperBound basic", () => {
    const a = [1, 2, 2, 2, 3, 4];
    expect(upperBound(a, 2)).toBe(4);
    expect(upperBound(a, 0)).toBe(0);
    expect(upperBound(a, 5)).toBe(6);
  });

  it("works with custom comparator (descending sorted array)", () => {
    const a = [9, 7, 7, 5, 3];
    const cmp = (x: number, y: number) => y - x; // descending
    // lowerBound: first index i with a[i] >= x under cmp (i.e., a[i] not less than x in descending)
    expect(lowerBound(a, 7, cmp)).toBe(1);
    // upperBound: first index i with a[i] > x under cmp
    expect(upperBound(a, 7, cmp)).toBe(3);
  });

  it("handles empty", () => {
    expect(lowerBound([], 10)).toBe(0);
    expect(upperBound([], 10)).toBe(0);
  });
});
