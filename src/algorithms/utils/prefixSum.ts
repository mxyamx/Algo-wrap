/**
 * Algo-wrap — prefixSum
 *
 * Description:
 * Computes running totals: out[i] = sum_{0..i} arr[j]. Returns a new array.
 *
 * Complexity:
 *   Time:  O(n)
 *   Space: O(n) (output)
 *
 * Notes:
 * - Useful for range-sum queries and cumulative analytics.
 */

export function prefixSum(arr: number[]): number[] {
  const out = new Array<number>(arr.length);
  let run = 0;
  for (let i = 0; i < arr.length; i++) { run += arr[i]; out[i] = run; }
  return out;
}
