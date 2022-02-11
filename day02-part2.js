const initMemory = [ 1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,2,6,23,27,1,6,27,31,2,31,9,35,1,35,6,39,1,10,39,43,2,9,43,47,1,5,47,51,2,51,6,55,1,5,55,59,2,13,59,63,1,63,5,67,2,67,13,71,1,71,9,75,1,75,6,79,2,79,6,83,1,83,5,87,2,87,9,91,2,9,91,95,1,5,95,99,2,99,13,103,1,103,5,107,1,2,107,111,1,111,5,0,99,2,14,0,0 ]
const validator = 19690720;
const MIN = 0 ;
const MAX = 99

function iterateValue() { //recursive function so position 1 and 2 go through 0-99
  let memory = [...initMemory]
  for (let k = MIN; k <= MAX; k++) {
    memory[1] = k;
    for (let j = MIN; j <= MAX; j++) {
      memory[2] = j
      intcodeProgram([...memory])
    }
  }
}

function intcodeProgram(memory) {
  for ( let i = 0 ; i < memory.length; i=i+4) {
    let opcode = memory[i]   
    let addr1  = memory[i+1]
    let param1 = memory[addr1]
    let addr2  = memory[i+2]
    let param2 = memory[addr2]
    let param3 = memory[i+3]
    if (opcode == 99) {
      break;
    } else if (opcode == 1) {
      addProgram(memory, param1, param2, param3)
    } else if (opcode == 2) {
      multProgram(memory, param1, param2, param3)
    } else {
      console.log('mistakes were made.')
      return;
    }
  }
}

function addProgram(memory, param1, param2, param3) {
  memory[param3] = param1 + param2
  checkValidator(memory, param1, param2)
  return memory
}

function multProgram(memory, param1, param2, param3) {
  memory[param3] = param1 * param2
  checkValidator(memory, param1, param2)
  return memory
}

function checkValidator(memory, param1, param2) {
  if (validator == memory[0]) {
    calculateAnswer(memory[1], memory[2])
  }
}

function calculateAnswer(noun, verb) {
  let result = 100 * noun + verb
  console.log('conjugating: ', result, noun, verb)
}

function computer() {
  console.log('Hello, world')
  iterateValue()
}

computer()
