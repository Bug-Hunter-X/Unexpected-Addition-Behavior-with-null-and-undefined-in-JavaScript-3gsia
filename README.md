# Unexpected Addition Behavior with null and undefined in JavaScript

This repository demonstrates an uncommon error in JavaScript related to the addition (+) operator's handling of `null` and `undefined` values.  The behavior is not always intuitive and can lead to unexpected `NaN` results.

The core issue is JavaScript's loose typing.  When using the + operator with `null` and `undefined`, the results depend on the order of the operands.  This often leads to subtle bugs that are difficult to track down.

## How to reproduce the bug

1. Clone the repository.
2. Run `bug.js` using a JavaScript interpreter (e.g., Node.js).
3. Observe the unexpected results.

## Solution

The `bugSolution.js` file provides a solution that uses explicit type checking to avoid these inconsistencies.  This makes the code's behavior more predictable and easier to maintain.
