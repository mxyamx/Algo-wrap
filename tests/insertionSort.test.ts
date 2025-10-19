import { describe, it, expect } from "vitest";
import { insertionSort } from "../src/algorithms/Sorting/insertionSort";

describe("insertionSort", () => {
  it("sorts numbers ascending", () => {
    const arr = [5, 3, 1, 4, 2];
    const sorted = insertionSort(arr);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  it("does not mutate the original array", () => {
    const arr = [3, 2, 1];
    const copy = arr.slice();
    const sorted = insertionSort(arr);
    expect(arr).toEqual(copy);
    expect(sorted).toEqual([1, 2, 3]);
  });

  it("handles empty and single-element arrays", () => {
    expect(insertionSort([])).toEqual([]);
    expect(insertionSort([42])).toEqual([42]);
  });

  it("handles already-sorted and reverse-sorted arrays", () => {
    const sorted = [1, 2, 3, 4, 5];
    const reversed = [5, 4, 3, 2, 1];
    expect(insertionSort(sorted)).toEqual(sorted);
    expect(insertionSort(reversed)).toEqual(sorted);
  });

  it("supports custom comparator (descending)", () => {
    const desc = (a: number, b: number) => b - a;
    const arr = [1, 2, 3, 4, 5];
    const sorted = insertionSort(arr, desc);
    expect(sorted).toEqual([5, 4, 3, 2, 1]);
  });

  it("works with strings", () => {
    const arr = ["banana", "apple", "cherry"];
    expect(insertionSort(arr)).toEqual(["apple", "banana", "cherry"]);
  });

  it("is stable (equal elements keep their order)", () => {
    // Each element has a key and an id (to track original order)
    const arr = [
      { key: 2, id: "a" },
      { key: 1, id: "b" },
      { key: 2, id: "c" },
      { key: 1, id: "d" },
    ];

    const cmp = (x: { key: number }, y: { key: number }) => x.key - y.key;
    const sorted = insertionSort(arr, cmp);

    // Sorted by key, but original order among equals preserved
    expect(sorted.map((x) => x.id)).toEqual(["b", "d", "a", "c"]);
  });

  it("handles duplicates correctly", () => {
    const arr = [3, 1, 2, 3, 1];
    const sorted = insertionSort(arr);
    expect(sorted).toEqual([1, 1, 2, 3, 3]);
  });

  it("matches native Array.sort on random numeric data", () => {
    for (let t = 0; t < 50; t++) {
      const n = (Math.random() * 50) | 0; // up to 50 elements
      const arr = Array.from({ length: n }, () => (Math.random() * 1000) | 0);
      const ours = insertionSort(arr);
      const native = arr.slice().sort((a, b) => a - b);
      expect(ours).toEqual(native);
    }
  });
});
