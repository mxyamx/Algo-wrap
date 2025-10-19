import { describe, it, expect } from "vitest";
import { rotate } from "../src/algorithms/utils/rotate";

describe("rotate", () => {
  it("rotates right by k", () => {
    expect(rotate([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });

  it("rotates left with negative k", () => {
    expect(rotate([1, 2, 3, 4, 5], -2)).toEqual([3, 4, 5, 1, 2]);
  });

  it("normalizes k > n", () => {
    expect(rotate([1, 2, 3], 5)).toEqual([2, 3, 1]); // 5 % 3 = 2
  });

  it("returns copy on k = 0", () => {
    const arr = [1, 2, 3];
    const out = rotate(arr, 0);
    expect(out).toEqual(arr);
    expect(out).not.toBe(arr); // ensure new array
  });

  it("handles empty array", () => {
    expect(rotate([], 10)).toEqual([]);
  });
});
