# Algo-wrap

Algo-wrap is a lightweight TypeScript library that brings classic algorithms directly to your arrays.  
Use a fluent, chainable syntax to sort, search, and analyze arrays efficiently — without mutating them.

```ts
import { A } from "algo-wrap";

A([5,3,1,4,2]).mergeSort().value();  // [1,2,3,4,5]
A([1,2,3,4,5,6]).binarySearch(5);    // { index: 4, found: true }
