/**
 * Algo-wrap — Quick Sort
 *
 * Description:
 * Classic quicksort using partition around a pivot. Works on a copy and returns
 * a new array. Fast on average; not stable by design.
 *
 * Complexity:
 *   Time:  Average O(n log n), Worst O(n^2) (pathological pivoting)
 *   Space: O(log n) (recursion stack)
 *
 * Notes:
 * - NOT stable (equal elements may reorder).
 * - Pure/immutable: original input array is not modified.
 * - Used by: A([...]).quickSort().
 */
import { Cmp, defaultCmp } from "../../types";
export function quickSort<T>(arr: T[], cmp: Cmp<T> = defaultCmp): T[] {
  const a = arr.slice();
  const swap = (i: number, j: number) => { const t = a[i]; a[i] = a[j]; a[j] = t; };

  const qs = (lo: number, hi: number) => {
    if (lo >= hi) return;
    const pivot = a[(lo + hi) >>> 1];
    let i = lo, j = hi;
    while (i <= j) {
      while (cmp(a[i], pivot) < 0) i++;
      while (cmp(a[j], pivot) > 0) j--;
      if (i <= j) { swap(i, j); i++; j--; }
    }
    if (lo < j) qs(lo, j);
    if (i < hi) qs(i, hi);
  };

  if (a.length) qs(0, a.length - 1);
  return a;
}
