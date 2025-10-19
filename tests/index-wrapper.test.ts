import { describe, it, expect } from "vitest";
import { A, AWrapper } from "../src";

function sameMultiset<T>(a: T[], b: T[]) {
  if (a.length !== b.length) return false;
  const m = new Map<T, number>();
  for (const x of a) m.set(x, (m.get(x) ?? 0) + 1);
  for (const x of b) {
    const c = m.get(x) ?? 0;
    if (c === 0) return false;
    m.set(x, c - 1);
  }
  return true;
}

describe("A wrapper (public API)", () => {
  it("returns an AWrapper and keeps input immutable", () => {
    const src = [5, 3, 1, 4, 2];
    const w = A(src);
    expect(w).toBeInstanceOf(AWrapper);

    const out = w.mergeSort().value();
    expect(out).toEqual([1, 2, 3, 4, 5]);
    expect(src).toEqual([5, 3, 1, 4, 2]); // original not mutated
  });

  it("supports mergeSortBy with key selector", () => {
    const out = A([{ k: 2 }, { k: 1 }]).mergeSortBy(x => x.k).value();
    expect(out).toEqual([{ k: 1 }, { k: 2 }]);
  });

  it("chains operations (sort -> rotate -> value)", () => {
    const out = A([1, 2, 3, 4, 5]).quickSort().rotate(2).value();
    expect(out).toEqual([4, 5, 1, 2, 3]);
  });

  it("binarySearch/Bounds on sorted data", () => {
    const w = A([1, 2, 2, 2, 3, 4]);
    expect(w.binarySearch(3)).toEqual({ index: 4, found: true });
    expect(w.lowerBound(2)).toBe(1);
    expect(w.upperBound(2)).toBe(4);
  });

  it("partition keeps order within groups", () => {
    const src = ["a", "b", "c", "d"];
    const [vowels, consonants] = A(src).partition(ch => ["a", "e", "i", "o", "u"].includes(ch));
    expect(vowels).toEqual(["a"]);
    expect(consonants).toEqual(["b", "c", "d"]);
  });

  it("shuffle returns a permutation and does not mutate input", () => {
    const src = [1, 2, 3, 4, 5, 6];
    const out = A(src).shuffle().value();
    expect(sameMultiset(out, src)).toBe(true);
    expect(src).toEqual([1, 2, 3, 4, 5, 6]); // immutable
  });

  it("uniqueBy removes duplicates by key and preserves first occurrence", () => {
    const src = [{ id: 1, v: "a" }, { id: 1, v: "b" }, { id: 2, v: "c" }];
    const out = A(src).uniqueBy(x => x.id).value();
    expect(out).toEqual([{ id: 1, v: "a" }, { id: 2, v: "c" }]);
  });
});
