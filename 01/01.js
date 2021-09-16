/************************************************
 * Day 01 of AoC 2020
 * Find the 2 entries that sum to 2020
 * Multiply the 2 entries together
*************************************************/

function adder(x, y) {
  return x + y;
}

function multiplier(x, y) {
  return x * y;
}

function testAdder() { // exclamation point added so the failure is more obvious
  adder(1,2)  === 3  ? console.log('Test 1: PASS') : console.log('Test 1: FAIL!');
  adder(1,0)  === 1  ? console.log('Test 2: PASS') : console.log('Test 2: FAIL!');
  adder(1,9)  === 10 ? console.log('Test 3: PASS') : console.log('Test 3: FAIL!');
  adder(1,3)  === 6  ? console.log('Test 4: PASS') : console.log('Test 4: FAIL!');
  adder(-5,3) === -2 ? console.log('Test 5: PASS') : console.log('Test 5: FAIL!');
}

testAdder()
