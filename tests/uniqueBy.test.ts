import { describe, it, expect } from "vitest";
import { uniqueBy } from "../src/algorithms/utils/uniqueBy";

describe("uniqueBy", () => {
  it("keeps first occurrence per key", () => {
    const arr = [
      { id: 1, v: "a" },
      { id: 1, v: "b" },
      { id: 2, v: "c" },
      { id: 1, v: "d" },
      { id: 2, v: "e" },
    ];
    const out = uniqueBy(arr, x => x.id);
    expect(out).toEqual([
      { id: 1, v: "a" },
      { id: 2, v: "c" },
    ]);
  });

  it("works with primitive keys", () => {
    const out = uniqueBy([1, 1, 2, 3, 2, 1], x => x);
    expect(out).toEqual([1, 2, 3]);
  });

  it("handles empty array", () => {
    expect(uniqueBy([], x => x)).toEqual([]);
  });
});
