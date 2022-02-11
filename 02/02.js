/************************************************
 * Day 02 of AoC 2020
 *
 * Get a string and check if a target (a specific
 * character) occurs within the bounds of a
 * provided range. For example, a range of 1-3
 * would mean that the target character must
 * appear at least 1 time and at most 3 times.
 * Count how many strings (i.e. passwords) are
 * valid.
*************************************************/

// sample line: 5-9 a bcddarppaaqrttallacw

let min = 5;
let max = 9;
let ltr = 'a';
let psw = 'bcddarppaaqrttallacw';
let count = 0;
let validPswCount = 0;

for (let i = 0; i < psw.length; i++) {
  if (psw[i] === ltr) {
    count++;
  }
}

if (count >= min && count <= max) {
  validPswCount++;
}

console.log(validPswCount);

