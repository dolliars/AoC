const sampleData = [ 'BFFFFFFRLL', 'FFBFBBBRLL', 'FBBFBFBRLR', 'BBFBBBBLLL', 'BBFBBBBLLR', 'BBBFBBBLLR' ];

function findCol(colString) {
}

function findRow(rowString) {
}

function splitStrings(string) {
  let rowStringSplit = string.substring(0, 6);
  let colStringSplit = string.substring(7);
  findCol(colStringSplit);
  findRow(rowStringSplit);
}

function tree(row){
  let test = 'RLL';
  let start = 8;
  let end = 0;

  for (let i = 0; i < test.length; i++) {
  let mid = Math.floor((start + end)/2);
    let currentChar = test.charAt(i);
    if(currentChar == 'F' || currentChar == 'L') {
      start = mid;
      end = end;
    } else {
      start = start;
      end = mid;
    }
  }
  console.log('start: ', start, 'end: ', end);
}

function getSeatId(seatRow, seatColumn) {
  let id = 0;
  let row = seatRow;
  let column = seatColumn;

  id = row * 8 + column;
  return id;
}

