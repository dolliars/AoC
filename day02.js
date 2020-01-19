let initMemory = [ 1,12,2,3,
  1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,2,6,23,27,1,6,27,31,2,31,9,35,1,35,6,39,1,10,39,43,2,9,43,47,1,5,47,51,2,51,6,55,1,5,55,59,2,13,59,63,1,63,5,67,2,67,13,71,1,71,9,75,1,75,6,79,2,79,6,83,1,83,5,87,2,87,9,91,2,9,91,95,1,5,95,99,2,99,13,103,1,103,5,107,1,2,107,111,1,111,5,0,99,2,14,0,0 ]

function changeValues(opcode, parametre1, parametre2, update, address3) {
  switch (opcode) {
    case 1:
      update = parametre1 + parametre2
      initMemory[address3] = update
      console.log('test 1', initMemory)
      break;
    case 2:
      update = parametre1 * parametre2
      initMemory[address3] = update
      console.log('test 2')
      break;
  }
}

function runProgram(initMemory) {
  for (let i = 0; i < initMemory.length; i++) {
    console.log(initMemory[i])
    let opcode = initMemory[i]
    let address1 = initMemory[i+1]
    let parametre1 = initMemory[address1]
    let address2 = initMemory[i+2]
    let parametre2 = initMemory[address2]
    let address3 = initMemory[i+3]
    let update
    if (opcode == 99) {
      console.log('ya done')
      break;
    } else if ( (opcode == 1) || (opcode == 2))  {
      changeValues(opcode, parametre1, parametre2, update, address3)
      i = i +3
    } else {
      console.log('something is wrong')
      break;
    }
  }
  console.log(initMemory)
}
console.log(runProgram(initMemory))
