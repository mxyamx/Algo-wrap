/**
 * Algo-wrap — shuffle (Fisher–Yates)
 *
 * Description:
 * Uniformly random permutation using Fisher–Yates. Operates in-place on a copy
 * and returns a new shuffled array.
 *
 * Complexity:
 *   Time:  O(n)
 *   Space: O(1)
 *
 * Notes:
 * - Unbiased assuming Math.random() is uniform.
 * - Input array is not mutated (we shuffle a copy).
 */

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
