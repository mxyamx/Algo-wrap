/**
 * Algo-wrap — rotate
 *
 * Description:
 * Rotates the array right by k (left if k < 0). Returns a new array; input
 * remains unchanged.
 *
 * Complexity:
 *   Time:  O(n)
 *   Space: O(n) (output)
 *
 * Notes:
 * - Normalizes k via modulo to handle large or negative shifts.
 */

export function rotate<T>(arr: T[], k: number): T[] {
  const n = arr.length; if (!n) return [];
  k = ((k % n) + n) % n; // normalize
  if (k === 0) return arr.slice();
  return arr.slice(n - k).concat(arr.slice(0, n - k));
}
