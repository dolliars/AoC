<<<<<<< HEAD
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

||||||| empty tree
=======
const data = ['forward 5', 'forward 1', 'forward 3', 'down 8', 'up 6', 'down 5', 'forward 6', 'down 9', 'down 7', 'up 9', 'down 9', 'forward 5', 'forward 3', 'down 3', 'forward 1', 'forward 8', 'down 8', 'forward 6', 'forward 9', 'forward 5', 'down 8', 'up 1', 'forward 4', 'forward 8', 'down 4', 'forward 2', 'down 1', 'up 8', 'up 9', 'down 4', 'forward 5', 'up 9', 'forward 1', 'down 9', 'down 7', 'down 4', 'down 6', 'down 3', 'forward 5', 'up 4', 'up 7', 'forward 1', 'down 1', 'up 3', 'forward 8', 'down 8', 'up 2', 'forward 2', 'down 7', 'down 7', 'down 4', 'forward 3', 'down 5', 'up 8', 'down 6', 'up 2', 'down 7', 'forward 8', 'down 7', 'down 7', 'up 6', 'forward 8', 'up 1', 'down 4', 'forward 1', 'down 1', 'down 9', 'down 1', 'down 7', 'forward 2', 'forward 3', 'up 8', 'up 1', 'forward 4', 'forward 7', 'forward 9', 'up 8', 'down 9', 'down 3', 'down 5', 'down 5', 'forward 7', 'forward 3', 'up 7', 'forward 6', 'up 6', 'forward 3', 'down 2', 'down 5', 'down 2', 'up 6', 'down 5', 'down 5', 'forward 7', 'forward 2', 'forward 7', 'down 6', 'forward 1', 'forward 8', 'up 6', 'forward 2', 'down 5', 'forward 3', 'up 2', 'forward 3', 'down 2', 'forward 4', 'forward 6', 'down 8', 'forward 7', 'forward 6', 'down 1', 'down 8', 'forward 7', 'up 2', 'forward 2', 'down 7', 'up 6', 'forward 7', 'down 9', 'down 7', 'forward 4', 'down 9', 'down 4', 'forward 6', 'up 6', 'up 5', 'down 5', 'up 7', 'forward 6', 'down 1', 'down 5', 'forward 1', 'up 6', 'forward 1', 'down 7', 'forward 7', 'forward 4', 'up 5', 'down 3', 'forward 7', 'forward 6', 'up 9', 'forward 8', 'forward 1', 'up 2', 'up 8', 'forward 7', 'up 7', 'down 1', 'forward 9', 'down 5', 'forward 5', 'forward 2', 'forward 2', 'forward 6', 'up 5', 'up 1', 'forward 6', 'up 3', 'down 7', 'down 6', 'down 1', 'forward 1', 'forward 8', 'forward 8', 'down 8', 'up 3', 'down 7', 'down 2', 'down 9', 'forward 9', 'down 7', 'forward 4', 'down 9', 'forward 8', 'down 1', 'down 5', 'down 9', 'down 8', 'forward 8', 'down 3', 'forward 4', 'forward 6', 'up 3', 'forward 4', 'down 9', 'down 6', 'up 6', 'up 3', 'down 2', 'up 1', 'forward 5', 'down 7', 'down 3', 'forward 5', 'up 1', 'forward 2', 'down 3', 'down 3', 'forward 6', 'down 5', 'down 7', 'down 1', 'down 2', 'down 7', 'forward 4', 'forward 7', 'down 7', 'forward 6', 'forward 2', 'down 1', 'down 8', 'forward 5', 'forward 5', 'down 7', 'forward 6', 'forward 7', 'up 2', 'forward 5', 'down 8', 'forward 7', 'down 7', 'up 6', 'forward 6', 'down 2', 'down 7', 'forward 6', 'forward 4', 'down 5', 'down 7', 'forward 2', 'forward 6', 'forward 6', 'down 7', 'down 9', 'forward 9', 'forward 4', 'up 9', 'up 2', 'up 2', 'forward 4', 'down 6', 'forward 7', 'up 5', 'forward 1', 'forward 6', 'down 8', 'forward 2', 'down 8', 'forward 9', 'forward 5', 'forward 1', 'up 8', 'down 4', 'down 2', 'down 9', 'up 6', 'forward 8', 'down 9', 'forward 3', 'down 3', 'down 9', 'down 9', 'down 6', 'forward 7', 'down 4', 'forward 8', 'down 7', 'down 8', 'up 4', 'up 3', 'forward 1', 'up 9', 'up 1', 'up 9', 'up 7', 'down 1', 'forward 5', 'forward 7', 'forward 3', 'forward 8', 'up 4', 'forward 7', 'down 5', 'forward 9', 'up 3', 'up 3', 'down 2', 'forward 3', 'up 3', 'down 3', 'down 4', 'up 6', 'down 7', 'down 1', 'down 7', 'forward 1', 'down 4', 'forward 9', 'down 9', 'up 8', 'up 5', 'down 7', 'up 1', 'forward 6', 'down 1', 'down 4', 'down 3', 'forward 7', 'forward 4', 'up 6', 'down 2', 'down 1', 'forward 1', 'up 5', 'down 2', 'down 9', 'up 2', 'up 3', 'forward 5', 'forward 5', 'down 8', 'down 4', 'up 4', 'down 1', 'forward 8', 'up 7', 'down 1', 'down 4', 'forward 3', 'up 4', 'down 4', 'down 5', 'down 9', 'down 1', 'down 7', 'up 2', 'down 6', 'up 9', 'down 3', 'down 1', 'down 8', 'down 4', 'up 2', 'forward 6', 'forward 9', 'down 6', 'forward 6', 'forward 4', 'forward 8', 'forward 5', 'forward 6', 'forward 9', 'down 3', 'forward 8', 'forward 6', 'forward 7', 'up 9', 'forward 3', 'up 3', 'forward 5', 'down 5', 'up 9', 'forward 1', 'forward 9', 'down 7', 'forward 5', 'forward 5', 'forward 6', 'forward 5', 'forward 9', 'forward 8', 'forward 3', 'down 2', 'forward 6', 'forward 8', 'down 4', 'forward 4', 'forward 1', 'forward 1', 'down 2', 'forward 2', 'forward 5', 'up 4', 'forward 3', 'down 3', 'down 5', 'down 6', 'forward 4', 'down 8', 'down 4', 'forward 5', 'down 7', 'up 3', 'up 6', 'forward 3', 'forward 2', 'forward 5', 'down 9', 'down 4', 'down 8', 'down 2', 'forward 4', 'forward 7', 'down 4', 'up 5', 'forward 8', 'down 8', 'down 1', 'forward 5', 'down 6', 'down 9', 'up 6', 'forward 9', 'down 3', 'forward 6', 'forward 2', 'down 5', 'forward 1', 'down 1', 'down 1', 'forward 2', 'up 9', 'down 1', 'up 8', 'forward 9', 'up 8', 'forward 2', 'forward 8', 'up 2', 'forward 4', 'down 5', 'forward 8', 'up 2', 'up 1', 'forward 4', 'up 4', 'up 3', 'up 5', 'down 1', 'forward 3', 'forward 6', 'forward 9', 'forward 6', 'up 8', 'forward 2', 'forward 1', 'down 2', 'down 3', 'down 2', 'up 4', 'forward 5', 'up 2', 'forward 3', 'forward 9', 'up 5', 'forward 1', 'down 7', 'forward 9', 'down 5', 'up 7', 'down 6', 'forward 7', 'forward 9', 'up 6', 'forward 3', 'down 1', 'forward 1', 'down 8', 'down 2', 'up 9', 'down 4', 'down 4', 'down 7', 'forward 4', 'forward 1', 'forward 6', 'down 9', 'down 9', 'down 9', 'forward 1', 'forward 6', 'forward 3', 'forward 7', 'forward 3', 'forward 9', 'up 8', 'forward 5', 'down 1', 'down 6', 'up 8', 'forward 3', 'up 8', 'down 6', 'forward 6', 'up 2', 'up 8', 'up 5', 'forward 9', 'down 4', 'up 1', 'up 3', 'up 2', 'down 9', 'down 1', 'forward 7', 'down 2', 'forward 6', 'up 4', 'down 7', 'forward 1', 'down 3', 'down 5', 'forward 1', 'down 3', 'down 1', 'forward 8', 'up 5', 'forward 5', 'forward 8', 'forward 8', 'forward 8', 'forward 2', 'down 3', 'down 6', 'up 2', 'up 2', 'down 1', 'up 7', 'down 9', 'up 1', 'up 4', 'forward 1', 'forward 4', 'up 4', 'up 6', 'forward 5', 'forward 2', 'forward 7', 'up 8', 'up 3', 'down 5', 'down 9', 'forward 4', 'forward 5', 'forward 5', 'down 1', 'up 8', 'up 2', 'forward 3', 'up 2', 'forward 8', 'up 2', 'down 6', 'up 7', 'forward 6', 'down 3', 'forward 3', 'down 6', 'forward 6', 'forward 4', 'forward 8', 'down 8', 'up 7', 'down 7', 'down 2', 'up 5', 'up 2', 'down 4', 'forward 5', 'down 3', 'up 4', 'down 2', 'up 2', 'down 7', 'forward 4', 'forward 3', 'forward 6', 'down 2', 'down 8', 'forward 3', 'forward 4', 'forward 4', 'down 4', 'down 3', 'up 6', 'down 2', 'forward 7', 'forward 4', 'down 7', 'forward 1', 'up 6', 'forward 3', 'up 3', 'up 7', 'forward 6', 'down 9', 'down 8', 'down 3', 'forward 8', 'forward 1', 'up 3', 'down 5', 'down 3', 'forward 1', 'up 9', 'down 6', 'forward 3', 'down 9', 'up 7', 'forward 5', 'forward 4', 'forward 7', 'up 3', 'forward 3', 'down 5', 'forward 7', 'forward 9', 'down 6', 'forward 7', 'forward 5', 'up 6', 'forward 3', 'forward 3', 'down 7', 'forward 4', 'up 2', 'forward 8', 'down 7', 'up 7', 'down 7', 'forward 6', 'up 3', 'forward 2', 'up 7', 'down 3', 'down 4', 'down 1', 'forward 3', 'forward 5', 'up 7', 'forward 3', 'down 1', 'down 2', 'up 4', 'forward 2', 'up 5', 'down 4', 'forward 1', 'down 6', 'up 1', 'forward 5', 'forward 1', 'down 8', 'forward 7', 'down 7', 'forward 4', 'forward 7', 'forward 3', 'forward 2', 'forward 1', 'forward 7', 'down 1', 'forward 9', 'forward 9', 'forward 8', 'forward 9', 'forward 8', 'forward 5', 'forward 1', 'up 5', 'forward 3', 'forward 6', 'forward 1', 'up 4', 'down 1', 'down 9', 'down 6', 'forward 4', 'up 9', 'down 3', 'forward 2', 'down 3', 'up 2', 'forward 4', 'forward 4', 'down 7', 'forward 9', 'forward 3', 'down 4', 'up 4', 'down 4', 'forward 7', 'forward 3', 'forward 6', 'forward 9', 'down 4', 'down 5', 'down 2', 'forward 4', 'up 6', 'forward 8', 'forward 3', 'down 2', 'down 5', 'forward 4', 'down 8', 'up 5', 'down 3', 'forward 6', 'down 8', 'up 9', 'forward 3', 'forward 8', 'forward 6', 'forward 7', 'down 3', 'up 6', 'down 7', 'down 4', 'forward 2', 'forward 5', 'down 1', 'down 5', 'down 5', 'forward 6', 'forward 6', 'down 1', 'forward 2', 'up 1', 'down 2', 'down 3', 'forward 3', 'forward 9', 'down 9', 'down 1', 'up 8', 'down 5', 'down 2', 'up 7', 'forward 8', 'up 7', 'forward 3', 'forward 6', 'down 2', 'down 3', 'forward 1', 'down 6', 'down 1', 'forward 4', 'up 2', 'down 3', 'up 7', 'down 3', 'down 2', 'up 8', 'up 7', 'down 3', 'forward 4', 'down 8', 'up 2', 'down 6', 'forward 9', 'down 1', 'up 3', 'up 1', 'down 4', 'up 6', 'down 2', 'forward 1', 'down 6', 'forward 4', 'forward 3', 'down 7', 'down 2', 'down 6', 'down 2', 'down 7', 'forward 2', 'down 1', 'up 8', 'up 6', 'up 1', 'forward 5', 'down 9', 'down 5', 'up 7', 'down 4', 'forward 4', 'forward 5', 'up 5', 'forward 6', 'forward 1', 'forward 5', 'forward 1', 'forward 6', 'down 6', 'forward 3', 'up 4', 'forward 6', 'down 6', 'forward 1', 'forward 5', 'forward 8', 'down 3', 'forward 6', 'forward 1', 'up 1', 'up 7', 'forward 7', 'forward 8', 'up 6', 'forward 9', 'up 5', 'forward 1', 'forward 5', 'down 3', 'up 3', 'up 9', 'forward 9', 'forward 5', 'forward 3', 'forward 2', 'forward 4', 'down 6', 'up 5', 'down 2', 'forward 5', 'down 2', 'down 5', 'down 6', 'forward 7', 'down 2', 'forward 7', 'forward 2', 'forward 8', 'up 1', 'forward 9', 'down 2', 'up 1', 'down 9', 'forward 8', 'forward 3', 'up 9', 'down 1', 'down 1', 'down 8', 'up 4', 'up 9', 'forward 9', 'forward 3', 'down 9', 'forward 3', 'forward 4', 'down 8', 'forward 8', 'forward 7', 'down 9', 'up 2', 'down 9', 'down 8', 'down 9', 'forward 4', 'up 6', 'down 4', 'forward 8', 'forward 5', 'up 2', 'forward 5', 'down 3', 'forward 6', 'down 5', 'forward 8', 'up 3', 'down 5', 'down 4', 'forward 5', 'up 3', 'up 8', 'forward 1', 'up 8', 'forward 4', 'down 4', 'forward 7', 'forward 5', 'forward 7', 'forward 9', 'up 1', 'down 6', 'forward 8', 'up 1', 'down 5', 'up 6', 'down 9', 'down 5', 'forward 3', 'up 1', 'forward 4', 'up 4', 'down 4', 'forward 5', 'forward 8', 'down 2', 'up 7', 'down 6', 'forward 7', 'up 7', 'forward 5', 'down 2', 'forward 9', 'forward 1', 'down 9', 'down 8', 'forward 7', 'forward 7', 'forward 1', 'up 3', 'up 1', 'forward 2', 'down 2', 'up 9', 'down 2', 'forward 7', 'down 1', 'down 5', 'down 4', 'up 7', 'forward 1', 'down 3', 'forward 9', 'down 6', 'forward 4', 'down 4', 'down 9', 'down 3', 'up 3', 'down 3', 'up 8', 'down 2', 'forward 1', 'forward 5', 'forward 5', 'down 2', 'forward 7', 'down 7', 'down 6', 'forward 6', 'up 5', 'down 4', 'down 8', 'down 7', 'forward 7', 'up 3', 'down 3', 'down 3', 'forward 8', 'forward 5', 'down 1', 'up 6', 'down 3', 'up 2', 'down 6', 'up 7', 'down 4', 'up 2', 'forward 4', 'forward 9', 'forward 9', 'up 1', 'forward 7', 'up 7', 'forward 7', 'forward 6', 'forward 3', 'forward 1', 'down 5', 'down 3', 'forward 4', 'up 9', 'down 5', 'up 2', 'down 6', 'down 5', 'forward 6', 'forward 4', 'up 7', 'up 6', 'down 9', 'forward 4', 'up 1', 'up 6', 'up 3', 'forward 9', 'forward 3', 'forward 9', 'down 7', 'forward 6', 'down 6', 'forward 8']

function findPositions (data) {
  let x = 0;
  let y = 0;
  
  for (let i = 0; i < data.length; i++) {
    let string = data[i]
    let move = string.substring(0, string.indexOf(' '))
    let val = Number(string.substring(string.indexOf(' '), string.length))

    if (move === 'forward') {
      x += val
    } else if (move === 'down') {
      y += val
    } else if (move === 'up') {
      y -= val
    } else {
      console.log('what the heck?!')
    }
  }
  console.log('x * y =', x*y)
}

// What do you get if you multiply your final horizontal position by your final depth
findPositions(data);
>>>>>>> AoC-2021/main
