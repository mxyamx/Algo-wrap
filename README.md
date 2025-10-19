Algo-wrap

Algo-wrap is a lightweight TypeScript library that lets you use classic algorithms directly on your arrays.
It provides a clean, chainable API for sorting, searching, and analyzing data — without mutating your inputs.

Quick Start
npm install algo-wrap

import { A } from "algo-wrap";

// Sort your array
A([5, 3, 1, 4, 2]).mergeSort().value();
// → [1, 2, 3, 4, 5]

// Search efficiently
A([1, 2, 3, 4, 5, 6]).binarySearch(5);
// → { index: 4, found: true }

// Chain multiple algorithms
A([5, 3, 1, 4, 2])
  .mergeSort()
  .rotate(2)
  .value();
// → [4, 5, 1, 2, 3]

Why Use Algo-wrap

Chainable – combine algorithms fluently.

Pure TypeScript – fully typed, with custom comparator support.

Immutable – the original array is never modified.

Educational and practical – clean implementations of fundamental algorithms.

Examples
Sorting
import { A } from "algo-wrap";

A([5, 3, 1, 4, 2]).quickSort().value();
// [1, 2, 3, 4, 5]

A([5, 3, 1, 4, 2]).mergeSort().value();
// [1, 2, 3, 4, 5]

A([3, 1, 2]).insertionSort().value();
// [1, 2, 3]

A([{ k: 2 }, { k: 1 }])
  .mergeSortBy(x => x.k)
  .value();
// [{ k: 1 }, { k: 2 }]

Searching
import { A } from "algo-wrap";

A([1, 2, 2, 2, 3, 4]).binarySearch(3);
// { index: 4, found: true }

A([1, 2, 2, 2, 3, 4]).lowerBound(2);
// 1

A([1, 2, 2, 2, 3, 4]).upperBound(2);
// 4

Utilities
A([1, 2, 3, 4, 5]).rotate(2).value();
// [4, 5, 1, 2, 3]

A([1, 2, 3, 4, 5])
  .partition(x => x % 2 === 0);
// [[2, 4], [1, 3, 5]]

A([1, 2, 3, 4]).shuffle().value();
// random permutation like [3, 1, 4, 2]

A([{ id: 1 }, { id: 1 }, { id: 2 }])
  .uniqueBy(x => x.id)
  .value();
// [{ id: 1 }, { id: 2 }]

Math Helpers
import { prefixSum, maxMin } from "algo-wrap";

prefixSum([1, 2, 3, 4]);
// [1, 3, 6, 10]

maxMin([3, 7, -2, 7, 5]);
// { max: 7, min: -2, iMax: 1, iMin: 2 }

Pure Functions

Prefer a direct functional style? All algorithms can be imported individually.

import { mergeSort, binarySearch, rotate } from "algo-wrap";

mergeSort([5, 3, 1, 4, 2]);
// [1, 2, 3, 4, 5]

binarySearch([1, 2, 3, 4, 5], 3);
// { index: 2, found: true }

rotate([1, 2, 3, 4, 5], 2);
// [4, 5, 1, 2, 3]

Available Algorithms
Sorting	        mergeSort, quickSort, insertionSort, heapSort
Searching	    binarySearch, lowerBound, upperBound
Utilities	    partition, shuffle, rotate, uniqueBy
Math-Helpers	prefixSum, maxMin