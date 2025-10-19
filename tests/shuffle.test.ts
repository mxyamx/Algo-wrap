import { describe, it, expect } from "vitest";
import { shuffle } from "../src/algorithms/utils/shuffle";

function sameMultiset<T>(a: T[], b: T[]) {
  if (a.length !== b.length) return false;
  const map = new Map<T, number>();
  for (const x of a) map.set(x, (map.get(x) ?? 0) + 1);
  for (const x of b) {
    const c = map.get(x) ?? 0;
    if (c === 0) return false;
    map.set(x, c - 1);
  }
  return true;
}

describe("shuffle (Fisher–Yates)", () => {
  it("returns a permutation of the input", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const out = shuffle(arr);
    expect(sameMultiset(arr, out)).toBe(true);
  });

  it("does not mutate original array", () => {
    const arr = [1, 2, 3];
    const copy = arr.slice();
    shuffle(arr);
    expect(arr).toEqual(copy);
  });

  it("changes order with high probability", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    let sameCount = 0;
    for (let i = 0; i < 20; i++) {
      const out = shuffle(arr);
      if (out.every((v, idx) => v === arr[idx])) sameCount++;
    }
    // Not a strict proof, just sanity: unlikely to remain identical many times
    expect(sameCount).toBeLessThan(5);
  });
});
