import { describe, it, expect } from "vitest";
import { heapSort } from "../src/algorithms/Sorting/heapSort";

describe("heapSort", () => {
  it("sorts numbers ascending", () => {
    const arr = [5, 3, 1, 4, 2];
    expect(heapSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("does not mutate the original array", () => {
    const arr = [3, 2, 1];
    const copy = arr.slice();
    const out = heapSort(arr);
    expect(arr).toEqual(copy);
    expect(out).toEqual([1, 2, 3]);
  });

  it("supports custom comparator (descending)", () => {
    const desc = (a: number, b: number) => b - a;
    expect(heapSort([1, 2, 3, 4, 5], desc)).toEqual([5, 4, 3, 2, 1]);
  });

  it("handles duplicates", () => {
    const arr = [2, 2, 1, 3, 2, 1];
    const out = heapSort(arr);
    expect(out).toEqual([1, 1, 2, 2, 2, 3]);
  });
});
