# Algo-wrap

**Algo-wrap** is a lightweight TypeScript library that brings classic algorithms directly to your arrays.  
It provides a fluent, chainable API for sorting, searching, and analyzing data — without mutating your inputs.

---

## Installation, Quick Start & Examples

```bash
# Install the package
npm install algo-wrap

# Example usage
import { A, mergeSort, binarySearch, prefixSum, maxMin } from "algo-wrap";

// --- Sorting ---
A([5, 3, 1, 4, 2]).mergeSort().value();       // [1, 2, 3, 4, 5]
A([5, 3, 1, 4, 2]).quickSort().value();       // [1, 2, 3, 4, 5]
A([3, 1, 2]).insertionSort().value();         // [1, 2, 3]
A([{ k: 2 }, { k: 1 }]).mergeSortBy(x => x.k).value(); // [{ k: 1 }, { k: 2 }]

// --- Searching ---
A([1, 2, 3, 4, 5, 6]).binarySearch(5);        // { index: 4, found: true }
A([1, 2, 2, 2, 3, 4]).lowerBound(2);          // 1
A([1, 2, 2, 2, 3, 4]).upperBound(2);          // 4

// --- Utilities ---
A([1, 2, 3, 4, 5]).rotate(2).value();         // [4, 5, 1, 2, 3]
A([1, 2, 3, 4, 5]).partition(x => x % 2 === 0); // [[2, 4], [1, 3, 5]]
A([1, 2, 3, 4]).shuffle().value();            // random permutation like [3, 1, 4, 2]
A([{ id: 1 }, { id: 1 }, { id: 2 }]).uniqueBy(x => x.id).value(); // [{ id: 1 }, { id: 2 }]

// --- Math Helpers ---
prefixSum([1, 2, 3, 4]);                      // [1, 3, 6, 10]
maxMin([3, 7, -2, 7, 5]);                     // { max: 7, min: -2, iMax: 1, iMin: 2 }

// --- Combined Example ---
A([5, 3, 1, 4, 2])
  .mergeSort()
  .rotate(2)
  .value();                                   // [4, 5, 1, 2, 3]

