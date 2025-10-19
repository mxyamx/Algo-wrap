import { describe, it, expect } from "vitest";
import { quickSort } from "../src/algorithms/Sorting/quickSort";

describe("quickSort", () => {
  it("sorts numbers ascending", () => {
    const arr = [5, 3, 1, 4, 2];
    const sorted = quickSort(arr);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  it("does not mutate the original array", () => {
    const arr = [3, 2, 1];
    const copy = arr.slice();
    const sorted = quickSort(arr);
    expect(arr).toEqual(copy);
    expect(sorted).toEqual([1, 2, 3]);
  });

  it("handles empty and single-element arrays", () => {
    expect(quickSort([])).toEqual([]);
    expect(quickSort([42])).toEqual([42]);
  });

  it("handles already-sorted and reverse-sorted inputs", () => {
    const sorted = [1, 2, 3, 4, 5];
    const reversed = [5, 4, 3, 2, 1];
    expect(quickSort(sorted)).toEqual(sorted);
    expect(quickSort(reversed)).toEqual(sorted);
  });

  it("supports custom comparator (descending)", () => {
    const desc = (a: number, b: number) => b - a;
    expect(quickSort([1, 2, 3, 4, 5], desc)).toEqual([5, 4, 3, 2, 1]);
  });

  it("works with strings", () => {
    const arr = ["banana", "apple", "cherry"];
    expect(quickSort(arr)).toEqual(["apple", "banana", "cherry"]);
  });

  it("handles duplicates correctly (unstable allowed)", () => {
    const arr = [2, 3, 2, 1, 3, 2, 1];
    const sorted = quickSort(arr);
    const expected = arr.slice().sort((a, b) => a - b);
    expect(sorted).toEqual(expected);
  });

  it("matches native Array.sort for random data", () => {
  for (let t = 0; t < 50; t++) {
    const n = (Math.random() * 200) | 0;
    const arr = Array.from({ length: n }, () => (Math.random() * 1000) | 0);
    const ours = quickSort(arr);
    const native = arr.slice().sort((a, b) => a - b);
    expect(ours).toEqual(native);
  }
});

});
