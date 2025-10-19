/**
 * Algo-wrap — partition
 *
 * Description:
 * Splits the array into [pass, fail] based on a predicate, preserving order
 * within each group. Returns new arrays; input is unchanged.
 *
 * Complexity:
 *   Time:  O(n)
 *   Space: O(n) (two output arrays)
 *
 * Notes:
 * - Stable within each partition.
 */

export function partition<T>(arr: T[], predicate: (x: T) => boolean): [T[], T[]] {
  const pass: T[] = [], fail: T[] = [];
  for (const v of arr) (predicate(v) ? pass : fail).push(v);
  return [pass, fail];
}
