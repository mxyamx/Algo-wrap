/**
 * Algo-wrap — upperBound
 *
 * Description:
 * Returns the first index i such that arr[i] > x under the comparator.
 * Points to the position just after the last equal element.
 *
 * Complexity:
 *   Time:  O(log n)
 *   Space: O(1)
 *
 * Notes:
 * - PRECONDITION: array must be sorted under the same comparator/key.
 * - Pair with lowerBound to get equals range.
 */

import { Cmp, defaultCmp } from "../../types";
export function upperBound<T>(arr: T[], x: T, cmp: Cmp<T> = defaultCmp): number {
  let lo = 0, hi = arr.length;
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (cmp(arr[mid], x) <= 0) lo = mid + 1; else hi = mid;
  }
  return lo;
}
