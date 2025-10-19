/**
 * Algo-wrap — Core Algorithm
 *
 * Description:
 * Performs a binary search on a sorted array under a given comparator.
 * Returns an object with `{ index, found }` where `index` is the position
 * of the found element or the insertion point if not found.
 *
 * Complexity:
 * Time:    O(log n)
 * Space:   O(1)
 *
 * Notes:
 * - Array must be pre-sorted under the same comparator.
 * - Used internally by the AWrapper fluent API (A([...]).binarySearch()).
 */


import { Cmp, defaultCmp } from "../../types";

export function binarySearch<T>(
  arr: T[],
  x: T,
  cmp: Cmp<T> = defaultCmp
): { index: number; found: boolean } {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >>> 1;
    const d = cmp(arr[mid], x);
    if (d === 0) return { index: mid, found: true };
    d < 0 ? (lo = mid + 1) : (hi = mid - 1);
  }
  return { index: lo, found: false }; 
}
