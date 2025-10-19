import { describe, it, expect } from "vitest";
import { mergeSort } from "../src/algorithms/Sorting/mergeSort";

describe("mergeSort", () => {
  it("sorts numbers correctly", () => {
    const arr = [5, 3, 1, 4, 2];
    const sorted = mergeSort(arr);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  it("does not mutate the original array", () => {
    const arr = [5, 3, 1];
    const sorted = mergeSort(arr);
    expect(arr).toEqual([5, 3, 1]); // stays the same
    expect(sorted).toEqual([1, 3, 5]);
  });

  it("works with strings", () => {
    const arr = ["banana", "apple", "cherry"];
    expect(mergeSort(arr)).toEqual(["apple", "banana", "cherry"]);
  });

  it("supports custom comparators", () => {
    const arr = [1, 2, 3, 4, 5];
    const desc = mergeSort(arr, (a, b) => b - a);
    expect(desc).toEqual([5, 4, 3, 2, 1]);
  });
});
