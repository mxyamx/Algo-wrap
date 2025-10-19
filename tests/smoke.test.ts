import { describe, it, expect } from "vitest";
import {
  A,
  mergeSort, quickSort, insertionSort, heapSort,
  binarySearch, lowerBound, upperBound,
  partition, shuffle, uniqueBy, prefixSum, rotate, maxMin,
  byKey, defaultCmp,
} from "../src";

describe("smoke: public API works end-to-end", () => {
  it("pure functions run and give sane results", () => {
    // sorting
    const base = [5, 3, 1, 4, 2];
    expect(mergeSort(base)).toEqual([1,2,3,4,5]);
    expect(quickSort(base)).toEqual([1,2,3,4,5]);
    expect(insertionSort(base)).toEqual([1,2,3,4,5]);
    expect(heapSort(base)).toEqual([1,2,3,4,5]);

    // search + bounds
    const s = [1,2,2,2,3,4];
    expect(binarySearch(s, 3)).toEqual({ index: 4, found: true });
    expect(lowerBound(s, 2)).toBe(1);
    expect(upperBound(s, 2)).toBe(4);

    // utils
    const ps = prefixSum([1,2,3,4]);
    expect(ps).toEqual([1,3,6,10]);

    expect(rotate([1,2,3,4,5], 2)).toEqual([4,5,1,2,3]);

    const [even, odd] = partition([1,2,3,4,5], x => x % 2 === 0);
    expect(even).toEqual([2,4]); expect(odd).toEqual([1,3,5]);

    const uniq = uniqueBy([{id:1,a:1},{id:1,a:2},{id:2,a:3}], x => x.id);
    expect(uniq).toEqual([{id:1,a:1},{id:2,a:3}]);

    const mm = maxMin([3,7,-2,7,5]);
    expect(mm).toEqual({ max: 7, min: -2, iMax: 1, iMin: 2 });

    // helpers
    const cmp = byKey<{k:number}, number>(x => x.k, defaultCmp);
    expect(mergeSort([{k:2},{k:1}], cmp).map(x=>x.k)).toEqual([1,2]);
  });

  it("wrapper A chains without mutating", () => {
    const src = [5,3,1,4,2];
    const out = A(src).mergeSort().rotate(1).value();
    expect(out).toEqual([5,1,2,3,4]);
    expect(src).toEqual([5,3,1,4,2]); // unchanged

    const w = A([1,2,2,2,3,4]);
    expect(w.binarySearch(2).found).toBe(true);
    expect(w.lowerBound(2)).toBe(1);
    expect(w.upperBound(2)).toBe(4);

    // shuffle smoke: permutation (don’t assert order)
    const sh = A([1,2,3,4,5,6]).shuffle().value();
    expect(sh.sort((a,b)=>a-b)).toEqual([1,2,3,4,5,6]);
  });
});
