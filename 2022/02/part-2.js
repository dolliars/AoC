const data = [['A', 'Y'], ['B', 'X'], ['C', 'Z']]

let yourSum = 0

const rock = 1
const paper = 2
const scissors = 3
const win = 6
const draw = 3 // 0 A  1 Y

data.forEach(el => {
  if (el[0] === 'A' && el[1] === 'X') {
    yourSum += scissors
  } else if (el[0] === 'A' && el[1] === 'Y') {
    yourSum += rock
  } else if (el[0] === 'A' && el[1] === 'Z') {
    yourSum += paper
  }

  if (el[0] === 'B' && el[1] === 'X') {
    yourSum += rock
  } else if (el[0] === 'B' && el[1] === 'Y') {
    yourSum += paper
  } else if (el[0] === 'B' && el[1] === 'Z') {
    yourSum += scissors
  }

  if (el[0] === 'C' && el[1] === 'X') {
    yourSum += paper
  } else if (el[0] === 'C' && el[1] === 'Y') {
    yourSum += scissors
  } else if (el[0] === 'C' && el[1] === 'Z') {
    yourSum += rock
  }
  if (el[1] === 'Y') {
    yourSum += draw
  }

  if (el[1] === 'Z') {
    yourSum += win
  }
})

console.log(yourSum)
