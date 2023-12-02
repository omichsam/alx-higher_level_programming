#!/usr/bin/node

/**
 Computes the sum of 2 numbers.
 */
function add (a, b) {
  return a + b;
}

console.log(
  add(Number.parseInt(process.argv[2]), Number.parseInt(process.argv[3]))
);
