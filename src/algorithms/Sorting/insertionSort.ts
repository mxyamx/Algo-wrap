/**
 * Algo-wrap — Insertion Sort
 *
 * Description:
 * Simple, stable sort. Great for small or nearly-sorted arrays. Works on a copy
 * and returns a new array.
 *
 * Complexity:
 *   Time:  O(n^2)
 *   Space: O(1)
 *
 * Notes:
 * - Stable.
 * - Pure/immutable: original input array is not modified.
 * - Often used as a cutover for tiny partitions.
 */

import { Cmp, defaultCmp } from "../../types";
export function insertionSort<T>(arr: T[], cmp: Cmp<T> = defaultCmp): T[] {
  const a = arr.slice();
  for (let i = 1; i < a.length; i++) {
    const x = a[i];
    let j = i - 1;
    while (j >= 0 && cmp(a[j], x) > 0) { a[j + 1] = a[j]; j--; }
    a[j + 1] = x;
  }
  return a;
}
