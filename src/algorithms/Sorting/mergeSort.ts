/**
 * Algo-wrap — Core Algorithm
 *
 * Description:
 * Implements the Merge Sort algorithm as a pure, stable sorting function.
 * Returns a new sorted array and preserves the order of equal elements.
 *
 * Complexity:
 * Time:    O(n log n)
 * Space:   O(n)
 *
 * Notes:
 * - Stable.
 * - Used internally by the AWrapper fluent API (A([...]).mergeSort()).
 */

import { Cmp, defaultCmp } from "../../types";

export function mergeSort<T>(arr: T[], cmp: Cmp<T> = defaultCmp): T[] {
  const a = arr.slice();
  const aux = new Array<T>(a.length);

  const sort = (lo: number, hi: number) => {
    if (hi - lo <= 1) return;
    const mid = (lo + hi) >>> 1;
    sort(lo, mid);
    sort(mid, hi);

    // merge [lo, mid) and [mid, hi)
    let i = lo, j = mid, k = lo;
    while (i < mid && j < hi) {
      if (cmp(a[i], a[j]) <= 0) aux[k++] = a[i++]; 
      else aux[k++] = a[j++];
    }
    while (i < mid) aux[k++] = a[i++];
    while (j < hi) aux[k++] = a[j++];
    for (let t = lo; t < hi; t++) a[t] = aux[t];
  };

  sort(0, a.length);
  return a;
}
