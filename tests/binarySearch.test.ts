import { describe, it, expect } from "vitest";
import { binarySearch } from "../src/algorithms/Search/binarySearch";

describe("binarySearch", () => {
  it("finds an existing number", () => {
    const a = [1, 2, 3, 4, 5, 6];
    expect(binarySearch(a, 4)).toEqual({ index: 3, found: true });
  });

  it("returns insertion point when not found", () => {
    const a = [1, 3, 5, 7];
    expect(binarySearch(a, 6)).toEqual({ index: 3, found: false });
    expect(binarySearch(a, 0)).toEqual({ index: 0, found: false });
    expect(binarySearch(a, 8)).toEqual({ index: 4, found: false });
  });

  it("works with custom comparator (descending array)", () => {
    const a = [9, 7, 5, 3, 1];
    const cmp = (x: number, y: number) => y - x; // descending order comparator
    expect(binarySearch(a, 5, cmp)).toEqual({ index: 2, found: true });
    expect(binarySearch(a, 6, cmp)).toEqual({ index: 2, found: false }); // would go between 7 and 5
  });

  it("works with objects via comparator", () => {
    type Item = { k: number; id: string };
    const a: Item[] = [{ k: 1, id: "a" }, { k: 2, id: "b" }, { k: 4, id: "c" }];
    const cmp = (x: Item, y: Item) => x.k - y.k;
    expect(binarySearch(a, { k: 2, id: "x" } as Item, cmp)).toEqual({ index: 1, found: true });
    expect(binarySearch(a, { k: 3, id: "x" } as Item, cmp)).toEqual({ index: 2, found: false });
  });

  it("handles empty array", () => {
    expect(binarySearch([], 10)).toEqual({ index: 0, found: false });
  });
});
