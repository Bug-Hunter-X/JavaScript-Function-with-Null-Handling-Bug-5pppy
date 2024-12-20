# JavaScript Function with Null Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to null and undefined values in function parameters. The `bug.js` file contains a function that correctly handles null values but fails to handle undefined values, leading to unexpected behavior.  The `bugSolution.js` file provides the corrected implementation.

## Bug Description

The original function, `myFunc`, only explicitly checks for `null` values. When passed `undefined`, it implicitly attempts to add `undefined` to a number, leading to `NaN`. The solution addresses this by also checking for `undefined`. 

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` using a JavaScript interpreter (Node.js, browser console, etc.). Observe the behavior when calling `myFunc` with undefined values.
3. Compare the results with the corrected behavior in `bugSolution.js`. 

## Bug Solution

The solution involves explicitly checking for both `null` and `undefined` using loose comparison.  This approach makes the function more robust and less prone to unexpected outcomes when handling potentially missing or invalid input.