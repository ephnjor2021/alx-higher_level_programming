#!/usr/bin/node
let i = 0;
const argum = process.argv;
if (argum.length === 2) {
  console.log('Missing number of occurrences');
} else {
  while (i < argum[2]) {
    console.log('C is fun');
    i++;
  }
}
