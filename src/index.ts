import { Cmp, defaultCmp, byKey } from "./types";

import { mergeSort } from "./algorithms/Sorting/mergeSort";
import { quickSort } from "./algorithms/Sorting/quickSort";
import { insertionSort } from "./algorithms/Sorting/insertionSort";
import { heapSort } from "./algorithms/Sorting/heapSort";

import { binarySearch } from "./algorithms/Search/binarySearch";
import { lowerBound } from "./algorithms/Search/lowerBound";
import { upperBound } from "./algorithms/Search/upperBound";

import { partition } from "./algorithms/utils/partition";
import { shuffle } from "./algorithms/utils/shuffle";
import { uniqueBy } from "./algorithms/utils/uniqueBy";
import { prefixSum } from "./algorithms/utils/prefixSum";
import { rotate } from "./algorithms/utils/rotate";
import { maxMin } from "./algorithms/utils/maxMin";

export class AWrapper<T> {
  constructor(private readonly arr: T[]) {}

  /** Defensive copy of underlying array */
  value(): T[] { return this.arr.slice(); }
  toArray(): T[] { return this.value(); }

  // Sorting
  mergeSort(cmp?: Cmp<T>) { return new AWrapper(mergeSort(this.arr, cmp)); }
  mergeSortBy<K>(key: (x: T) => K, kcmp?: Cmp<K>) {
    return new AWrapper(mergeSort(this.arr, byKey(key, kcmp)));
  }
  quickSort(cmp?: Cmp<T>) { return new AWrapper(quickSort(this.arr, cmp)); }
  insertionSort(cmp?: Cmp<T>) { return new AWrapper(insertionSort(this.arr, cmp)); }
  heapSort(cmp?: Cmp<T>) { return new AWrapper(heapSort(this.arr, cmp)); }

  // Search
  binarySearch(x: T, cmp?: Cmp<T>) { return binarySearch(this.arr, x, cmp); }
  lowerBound(x: T, cmp?: Cmp<T>) { return lowerBound(this.arr, x, cmp); }
  upperBound(x: T, cmp?: Cmp<T>) { return upperBound(this.arr, x, cmp); }

  // Utils
  partition(predicate: (x: T) => boolean): [T[], T[]] { return partition(this.arr, predicate); }
  shuffle() { return new AWrapper(shuffle(this.arr)); }
  uniqueBy<K>(key: (x: T) => K) { return new AWrapper(uniqueBy(this.arr, key)); }
  rotate(k: number) { return new AWrapper(rotate(this.arr, k)); }
}

// Factory (nicer DX)
export const A = <T>(arr: T[]) => new AWrapper(arr);

// Also export pure functions/types for users who prefer functions
export {
  mergeSort, quickSort, insertionSort, heapSort,
  binarySearch, lowerBound, upperBound,
  partition, shuffle, uniqueBy, prefixSum, rotate, maxMin,
  defaultCmp, byKey
};
export type { Cmp };
