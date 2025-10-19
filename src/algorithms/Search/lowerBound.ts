/**
 * Algo-wrap — lowerBound
 *
 * Description:
 * Returns the first index i such that arr[i] >= x under the comparator.
 * Useful for insertion points and counting occurrences.
 *
 * Complexity:
 *   Time:  O(log n)
 *   Space: O(1)
 *
 * Notes:
 * - PRECONDITION: array must be sorted under the same comparator/key.
 * - Pair with upperBound to count: count = upperBound(x) - lowerBound(x).
 */

import { Cmp, defaultCmp } from "../../types";

export function lowerBound<T>(arr: T[], x: T, cmp: Cmp<T> = defaultCmp): number {
  let lo = 0, hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (cmp(arr[mid], x) < 0) lo = mid + 1; else hi = mid;
  }
  return lo;
}
