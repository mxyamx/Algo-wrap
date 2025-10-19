/**
 * Algo-wrap — maxMin
 *
 * Description:
 * Finds max and min values and their first indices in a single pass.
 * Returns { max, min, iMax, iMin }.
 *
 * Complexity:
 *   Time:  O(n)
 *   Space: O(1)
 *
 * Notes:
 * - For empty arrays: { max: -Infinity, min: Infinity, iMax: -1, iMin: -1 }.
 */

export function maxMin(arr: number[]) {
  if (arr.length === 0) return { max: -Infinity, min: Infinity, iMax: -1, iMin: -1 };
  let max = arr[0], min = arr[0], iMax = 0, iMin = 0;
  for (let i = 1; i < arr.length; i++) {
    const v = arr[i];
    if (v > max) { max = v; iMax = i; }
    if (v < min) { min = v; iMin = i; }
  }
  return { max, min, iMax, iMin };
}
