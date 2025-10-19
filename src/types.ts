// Comparator: negative if a<b, 0 if equal, positive if a>b
export type Cmp<T> = (a: T, b: T) => number;

// Default comparator for numbers/strings
export const defaultCmp: Cmp<any> = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

// Build a comparator from a key selector, e.g. byKey(x => x.k)
export const byKey = <T, K>(key: (x: T) => K, cmp?: Cmp<K>): Cmp<T> => {
  const c = (cmp ?? defaultCmp) as Cmp<K>;
  return (a: T, b: T) => c(key(a), key(b));
};
