let data = ['nop +0','acc +1', 'jmp +4', 'acc +3', 'jmp -3', 'acc -99', 'acc +1', 'jmp -4','acc +6'];

function assembler(data) {
  let input = data;
  let accumulator = 0;
  let indexTracker = [];

  for (let i = 0; i < data.length; i++) {
    if(indexTracker.includes(i)) {
      console.log('accum', accumulator);
      break;
    } else {
      let command = data[i].substring(0,3);
      let number = Number(data[i].replace( /^\D+/g, ''));
      console.log('st:', data[i], '#:', number, 'i', i);
      switch (command) {
        case 'acc':
          indexTracker.push(i);
          if (data[i].includes('+')) {
            accumulator = accumulator + number;
          } else {
            accumulator = accumulator + number;
          } break;
        case 'jmp':
          indexTracker.push(i);
          if (data[i].includes('+')) {
            i = i + number;
          } else {
            i = i - number; 
          } break;
        case 'nop':
          indexTracker.push(i);
          break;
      }
    }
  }
}
assembler(data)
