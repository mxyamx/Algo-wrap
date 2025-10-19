/**
 * Algo-wrap — uniqueBy
 *
 * Description:
 * Removes duplicates by a key selector, keeping the first occurrence of each
 * key. Returns a new array.
 *
 * Complexity:
 *   Time:  O(n) average (Set)
 *   Space: O(n) (seen keys)
 *
 * Notes:
 * - Stable with respect to first occurrence.
 */

export function uniqueBy<T, K>(arr: T[], key: (x: T) => K): T[] {
  const seen = new Set<K>();
  const out: T[] = [];
  for (const v of arr) {
    const k = key(v);
    if (!seen.has(k)) { seen.add(k); out.push(v); }
  }
  return out;
}
