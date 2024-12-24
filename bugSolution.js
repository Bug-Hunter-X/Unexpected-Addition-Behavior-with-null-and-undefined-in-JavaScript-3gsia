function foo(a, b) {
  // Explicitly handle null and undefined values
  a = (typeof a === 'number' ? a : 0);
  b = (typeof b === 'number' ? b : 0);
  return a + b;
}

console.log(foo(1, undefined)); // 1
console.log(foo(1, null));     // 1
console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1));      // 1