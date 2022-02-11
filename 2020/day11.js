const sampleData = ['L.LL.LL.LL', 'LLLLLLL.LL', 'L.L.L..L..', 'LLLL.LL.LL', 'L.LL.LL.LL', 'L.LLLLL.LL', '..L.L.....', 'LLLLLLLLLL', 'L.LLLLLL.L', 'L.LLLLL.LL'];

function test(data) {
  data.forEach(line => {
    splitLine(line);
  })
}

function splitLine(line) {
  let newLine;
  for(let i = 0; i < line.length; i++) {
    let position = line.charAt(i);
    console.log(position);
    if( position == 'L') {
      //TODO replace i with # but strings are immutable in JS
    }
  }
}

test(sampleData);
