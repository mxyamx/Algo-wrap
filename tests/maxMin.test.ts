import { describe, it, expect } from "vitest";
import { maxMin } from "../src/algorithms/utils/maxMin";

describe("maxMin", () => {
  it("finds extrema and their indices", () => {
    const arr = [3, 7, -2, 7, 5];
    const res = maxMin(arr);
    expect(res.max).toBe(7);
    expect(res.min).toBe(-2);
    expect(res.iMax).toBe(1); // first max index
    expect(res.iMin).toBe(2);
  });

  it("handles empty array", () => {
    const res = maxMin([]);
    expect(res.max).toBe(-Infinity);
    expect(res.min).toBe(Infinity);
    expect(res.iMax).toBe(-1);
    expect(res.iMin).toBe(-1);
  });

  it("works with all equal values", () => {
    const res = maxMin([5, 5, 5]);
    expect(res.max).toBe(5);
    expect(res.min).toBe(5);
    expect(res.iMax).toBe(0);
    expect(res.iMin).toBe(0);
  });
});
