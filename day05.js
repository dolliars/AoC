const sampleData = [ 'BFFFFFFRLL', 'FFBFBBBRLL', 'FBBFBFBRLR', 'BBFBBBBLLL', 'BBFBBBBLLR', 'BBBFBBBLLR' ];

function findCol() {
}

function findRow(data) {
}

function splitStrings(string) {
  let rowStringSplit = string.substring(0, 6);
  let colStringSplit = string.substring(7);
  console.log('row', rowStringSplit, 'col', colStringSplit);
}

function getSeatId(seatRow, seatColumn) {
  let id = 0;
  let row = seatRow;
  let column = seatColumn;

  id = row * 8 + column;
  return id;
}

splitStrings('BFFFFFFRLL');
