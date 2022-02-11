/************************************************
 * Day 02 part 2 of AoC 2020
 *
 * Get a string and check if a target (a specific
 * character) occurs at the provided indexes. The
 * string is only considered valid if the target
 * occurs at **exactly one** of these position.
 * Note that the target can occur at other
 * positions. Count how many strings(i.e passwords)
 * are valid.
 **************************************************/

// sample line: 5-9 a bcddarppaaqrttallacw

let index1 = 5;
let index2 = 9;
let ltr = 'a';
let psw = 'bcddarppaaqrttallacw';

const firstPos = psw[index1] == ltr;
const seconPos = psw[index2] == ltr;

let count = 0;

if ((firstPos && !seconPos) || (!firstPos && seconPos)) {
  count++;
}

console.log(count);
