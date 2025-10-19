import { describe, it, expect } from "vitest";
import {
  mergeSort, quickSort, insertionSort, heapSort,
  binarySearch, lowerBound, upperBound,
  partition, shuffle, uniqueBy, prefixSum, rotate, maxMin,
  defaultCmp, byKey, A
} from "../src";

describe("index exports (pure functions + helpers)", () => {
  it("exports all expected functions", () => {
    const fns = {
      mergeSort, quickSort, insertionSort, heapSort,
      binarySearch, lowerBound, upperBound,
      partition, shuffle, uniqueBy, prefixSum, rotate, maxMin,
      defaultCmp, byKey, A
    };
    for (const [name, fn] of Object.entries(fns)) {
      expect(typeof fn).toBe("function"); // smoke-test presence
    }
  });

  it("pure functions behave correctly (quick checks)", () => {
    expect(mergeSort([3,1,2])).toEqual([1,2,3]);
    expect(quickSort([3,1,2])).toEqual([1,2,3]);
    expect(insertionSort([3,1,2])).toEqual([1,2,3]);
    expect(heapSort([3,1,2])).toEqual([1,2,3]);

    const a = [1,2,2,2,3,4];
    expect(lowerBound(a, 2)).toBe(1);
    expect(upperBound(a, 2)).toBe(4);
    expect(binarySearch(a, 3)).toEqual({ index: 4, found: true });

    expect(prefixSum([1,2,3,4])).toEqual([1,3,6,10]);
    expect(rotate([1,2,3,4,5], 2)).toEqual([4,5,1,2,3]);
    expect(partition([1,2,3,4,5], x => x%2===0)).toEqual([[2,4],[1,3,5]]);
    expect(uniqueBy([{id:1},{id:1},{id:2}], x=>x.id)).toEqual([{id:1},{id:2}]);

    const mm = maxMin([3,7,-2,7,5]);
    expect(mm.max).toBe(7);
    expect(mm.min).toBe(-2);
    expect(mm.iMax).toBe(1);
    expect(mm.iMin).toBe(2);
  });

  it("byKey builds a comparator that mergeSort can use", () => {
    type T = { k: number };
    const arr: T[] = [{k:2},{k:1}];
    const cmp = byKey<T, number>(x => x.k);
    expect(mergeSort(arr, cmp).map(x=>x.k)).toEqual([1,2]);
  });
});
