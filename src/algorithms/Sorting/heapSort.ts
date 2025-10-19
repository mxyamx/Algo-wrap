/**
 * Algo-wrap — Heap Sort
 *
 * Description:
 * Builds a max-heap then extracts elements. Deterministic O(n log n).
 * Operates in-place on a copy and returns a new array.
 *
 * Complexity:
 *   Time:  O(n log n)
 *   Space: O(1) extra (heap in-place), plus call overhead
 *
 * Notes:
 * - NOT stable.
 * - Pure/immutable at API level: we sort a copy, input remains unchanged.
 */

import { Cmp, defaultCmp } from "../../types";

export function heapSort<T>(arr: T[], cmp: Cmp<T> = defaultCmp): T[] {
  const a = arr.slice();
  const n = a.length;
  const lt = (i: number, j: number) => cmp(a[i], a[j]) < 0;

  const swap = (i: number, j: number) => { const t = a[i]; a[i] = a[j]; a[j] = t; };

  const down = (i: number, end: number) => {
    while (true) {
      let left = i * 2 + 1, right = left + 1, best = i;
      if (left <= end && lt(best, left)) best = left;
      if (right <= end && lt(best, right)) best = right;
      if (best === i) break;
      swap(i, best); i = best;
    }
  };

  // build max-heap
  for (let i = (n >> 1) - 1; i >= 0; i--) down(i, n - 1);

  // extract
  for (let end = n - 1; end > 0; end--) {
    swap(0, end);
    down(0, end - 1);
  }
  return a;
}
