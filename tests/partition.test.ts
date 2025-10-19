import { describe, it, expect } from "vitest";
import { partition } from "../src/algorithms/utils/partition";

describe("partition", () => {
  it("splits by predicate", () => {
    const arr = [1, 2, 3, 4, 5];
    const [even, odd] = partition(arr, x => x % 2 === 0);
    expect(even).toEqual([2, 4]);
    expect(odd).toEqual([1, 3, 5]);
  });

  it("preserves order within each group", () => {
    const arr = ["a", "b", "c", "d"];
    const [vowel, consonant] = partition(arr, x => ["a", "e", "i", "o", "u"].includes(x));
    expect(vowel).toEqual(["a"]);
    expect(consonant).toEqual(["b", "c", "d"]);
  });

  it("handles empty array", () => {
    const [a, b] = partition([], _ => true);
    expect(a).toEqual([]);
    expect(b).toEqual([]);
  });
});
